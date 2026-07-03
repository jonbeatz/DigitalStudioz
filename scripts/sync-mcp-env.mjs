#!/usr/bin/env node
/** DigitalStudioz wrapper — sync MCP env from THIS repo's .env.local */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ENV_LOCAL = path.join(REPO_ROOT, '.env.local');
const GLOBAL_MCP = path.join(os.homedir(), '.cursor', 'mcp.json');
const PROJECT_MCP = path.join(REPO_ROOT, '.cursor', 'mcp.json');

const PLACEHOLDER_RE =
  /^(REPLACE_WITH_|YOUR_|1234567890_example|your-|example_replace|your-wp-)/i;

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`.env.local not found: ${filePath}`);
  }
  const env = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function maskSecret(value, prefixLen = 4) {
  if (!value || value.length <= prefixLen + 4) return '****';
  return `${value.slice(0, prefixLen)}…${value.slice(-4)}`;
}

function isPlaceholder(value) {
  if (!value) return true;
  return PLACEHOLDER_RE.test(value);
}

function backupOnce(filePath) {
  const bak = `${filePath}.sync-bak`;
  if (!fs.existsSync(bak)) {
    fs.copyFileSync(filePath, bak);
    console.log(`Backup: ${bak}`);
  }
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`MCP config not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function setNestedEnv(config, serverName, envUpdates) {
  const server = config.mcpServers?.[serverName];
  if (!server) return false;
  server.env = server.env || {};
  let changed = false;
  for (const [key, value] of Object.entries(envUpdates)) {
    if (!value) continue;
    if (server.env[key] !== value) {
      server.env[key] = value;
      changed = true;
    }
  }
  return changed;
}

function main() {
  const env = parseEnvFile(ENV_LOCAL);
  let exitCode = 0;

  console.log(`[sync:mcp-env] Repo: ${REPO_ROOT}`);

  if (!fs.existsSync(GLOBAL_MCP)) {
    console.warn('WARN: Global MCP config not found');
    exitCode = 1;
  } else {
    backupOnce(GLOBAL_MCP);
    const globalConfig = readJson(GLOBAL_MCP);

    if (env.GITHUB_PERSONAL_ACCESS_TOKEN && globalConfig.mcpServers?.github) {
      const changed = setNestedEnv(globalConfig, 'github', {
        GITHUB_PERSONAL_ACCESS_TOKEN: env.GITHUB_PERSONAL_ACCESS_TOKEN,
      });
      console.log(`${changed ? 'PASS' : 'OK'}: github → global`);
    }

    if (env.TAVILY_API_KEY && globalConfig.mcpServers?.tavily) {
      const changed = setNestedEnv(globalConfig, 'tavily', { TAVILY_API_KEY: env.TAVILY_API_KEY });
      console.log(`${changed ? 'PASS' : 'OK'}: tavily → global`);
    }

    const hostingerServers = Object.keys(globalConfig.mcpServers || {}).filter((n) =>
      n.startsWith('hostinger-'),
    );
    if (env.HOSTINGER_API_TOKEN && hostingerServers.length) {
      let anyChanged = false;
      for (const name of hostingerServers) {
        if (setNestedEnv(globalConfig, name, { HOSTINGER_API_TOKEN: env.HOSTINGER_API_TOKEN })) {
          anyChanged = true;
        }
      }
      console.log(`${anyChanged ? 'PASS' : 'OK'}: hostinger (${hostingerServers.length} servers) → global`);
    }

    writeJson(GLOBAL_MCP, globalConfig);
  }

  if (fs.existsSync(PROJECT_MCP)) {
    backupOnce(PROJECT_MCP);
    const projectConfig = readJson(PROJECT_MCP);
    const mappings = {
      browserbase: {
        BROWSERBASE_API_KEY: env.BROWSERBASE_API_KEY,
        BROWSERBASE_PROJECT_ID: env.BROWSERBASE_PROJECT_ID,
      },
      '21st-dev-magic': { API_KEY: env['21ST_DEV_MAGIC_API_KEY'] },
    };
    let changed = false;
    for (const [server, updates] of Object.entries(mappings)) {
      if (Object.values(updates).some(Boolean) && projectConfig.mcpServers?.[server]) {
        if (setNestedEnv(projectConfig, server, updates)) changed = true;
      }
    }
    if (changed) writeJson(PROJECT_MCP, projectConfig);
  }

  console.log('Next: Reload MCP in Cursor (Settings → MCP → refresh).');
  process.exit(exitCode);
}

try {
  main();
} catch (err) {
  console.error(`FAIL: ${err.message}`);
  process.exit(1);
}
