# Hostinger Reference — DigitalStudioz

**Purpose:** Hostinger deploy knowledge for the DigitalStudioz live site.  
**hPanel:** [https://hpanel.hostinger.com/](https://hpanel.hostinger.com/)  
**Profile root:** `D:\Hermes\projects\DigitalStudioz`

---

## When to use which repo

| Task | Open this repo |
|------|----------------|
| **DigitalStudioz site dev + deploy** | `D:\Hermes\projects\DigitalStudioz` |
| MSC / mystudiochannel.com deploy | `D:\Cursor_Projectz\MyStudioChannel` |
| Personal Mem0 / Playground | `D:\Hermes\projects\JonBeatz` |

**Agent rule:** DigitalStudioz deploy commands run from **this repo**. MSC deploy scripts (`pushit:live*`) stay in MSC only.

---

## Environment keys (`.env.local`)

| Key | Purpose |
|-----|---------|
| `HOSTINGER_API_TOKEN` | Hostinger MCP quartet — run `npm run sync:mcp-env` |
| `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_PORT` | FTPS upload (shared Hostinger account) |
| `FTP_REMOTE_PATH` | Staging path on server (set per site before first deploy) |
| `HOSTINGER_SSH_*` | SSH sync / recovery |
| `DIGITALSTUDIOZ_DOMAIN` | Live domain (e.g. `digitalstudioz.dev`) |
| `DIGITALSTUDIOZ_WEB_ROOT` | Remote public web root for this site |
| `DIGITALSTUDIOZ_APP_ROOT` | Node.js app root (if using Node hosting) |
| `DIGITALSTUDIOZ_DEPLOY_METHOD` | `hostinger-node` or `static-mcp` |

Credentials are merged from JonBeatz ecosystem into `.env.local` — **never commit**.

---

## Hostinger MCP (global Cursor)

Four servers after `npm run sync:mcp-env`:

| Server | Purpose |
|--------|---------|
| `hostinger-hosting` | JS deployments, logs, hosting API |
| `hostinger-vps` | VPS management |
| `hostinger-domains` | Domain management |
| `hostinger-dns` | DNS records |

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run sync:mcp-env
```

Then **Cursor Settings → MCP** → refresh `hostinger-*` servers.

**Avoid MCP zip deploy** on shared Node when native modules fail — prefer FTPS + SSH scripts (see `HOSTINGER-DEPLOY.md`).

---

## Golden split (always)

| Where | What |
|-------|------|
| **Local (PC — this repo)** | `npm run build`, FTPS upload, SSH sync |
| **Live (hPanel browser)** | Node.js app **Restart** only |
| **Live (SSH via script)** | `npm install`, sync-app, recover |

**Never** run bulk upload commands in hPanel Terminal.

---

## Canonical docs

| Doc | Path |
|-----|------|
| Deploy runbook | `.cursor/docs/HOSTINGER-DEPLOY.md` |
| Pitfalls | `.cursor/docs/PITFALLS-HOSTINGER.md` |
| Env registry | `.cursor/docs/ENV-VARS-REFERENCE.md` |
| Skill | `.cursor/skills/Hostinger-Ops/SKILL.md` |
| MSC full bible (reference) | `D:\Cursor_Projectz\MyStudioChannel\.cursor\docs\HOSTINGER-DEPLOY.md` |

---

## Post-deploy ritual

1. Wait for upload/sync script completion
2. **hPanel → Node.js application → Restart**
3. HTTP smoke: `https://<DIGITALSTUDIOZ_DOMAIN>/` → expect **200**
4. Log outcome in `ReCall.md`

---

*Created: 2026-07-03*
