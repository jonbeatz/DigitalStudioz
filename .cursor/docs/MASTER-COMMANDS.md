# DigitalStudioz — Master Commands

## Session Rituals

| Command | Description |
|---------|-------------|
| `npm run session:start` | Light session stack check |
| `npm run session:start:full` | Full cold boot — DeepSeek + ngrok + Mem0 |
| `npm run session:stop` | Stop session stack |
| `npm run log:session -- "msg"` | Log session to project-log |

## DeepSeek / LiteLLM

| Command | Description |
|---------|-------------|
| `npm run deepseek:on` | Start DeepSeek LiteLLM :4000 |
| `npm run deepseek:off` | Stop DeepSeek LiteLLM |
| `npm run deepseek:status` | Check DeepSeek status |
| `npm run deepseek:test` | Test LiteLLM connection |
| `npm run deepseek:ngrok` | Start DeepSeek + ngrok tunnel |

## Mem0 (DigitalStudioz)

| Command | Description |
|---------|-------------|
| `npm run mem0:preflight` | Check LM Studio + LLM health |
| `npm run mem0:search -- "query"` | Search DigitalStudioz memories |
| `npm run mem0:add -- "text"` | Add to DigitalStudioz memories |
| `npm run mem0:list` | List all DigitalStudioz memories |

## Draven (AI Assistant)

| Command | Description |
|---------|-------------|
| `npm run draven:search -- "query"` | Search Draven memories |
| `npm run draven:add -- "text"` | Add to Draven memories |
| `npm run draven:list` | List all Draven memories |
| `npm run draven:speak -- "text"` | Speak via OmniVoice |

## Telegram

| Command | Description |
|---------|-------------|
| `npm run telegram:ensure` | Sync env + start Telegram gateway |
| `npm run telegram:test` | Send test Telegram notification |
| `npm run telegram:doctor` | Diagnose Telegram setup |

## Env Sync

| Command | Description |
|---------|-------------|
| `npm run sync:mcp-env` | Sync MCP tokens from `.env.local` to Cursor |
| `npm run sync:telegram-env` | Sync Telegram environment |
| `npm run sync:deepseek-env` | Sync DeepSeek environment |
| `npm run env:setup` | Copy `.env.local.example` → `.env.local` |

## Hostinger / Deploy

| Command | Description |
|---------|-------------|
| See `.cursor/docs/HOSTINGER-DEPLOY.md` | Live deploy runbook (FTPS + hPanel Restart) |
| `npm run sync:mcp-env` | Required before Hostinger MCP tools work |

## Backup

| Command | Description |
|---------|-------------|
| `npm run backup` | Interactive backup |
| `npm run backup:quick` | Standard auto backup |
| `npm run backup:full` | Full mirror backup |

## Docs & Maintenance

| Command | Description |
|---------|-------------|
| `npm run docs:sync` | Sync/update documentation |
| `npm run docs:update` | Update docs from shared skeleton |
| `npm run encoding:check` | Check UTF-8 encoding on .md files |
| `npm run boot:doctor` | Check shared profile version |

## Web Development

| Command | Description |
|---------|-------------|
| `npm run dev` / `npm run web:dev` | Start Next.js dev server |
| `npm run build` / `npm run web:build` | Production build |
| `npm run start` / `npm run web:start` | Start production server |
| `npm run lint` / `npm run web:lint` | Run ESLint |
