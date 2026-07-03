# Hostinger Deploy — DigitalStudioz

**Status:** Pre-configured credentials in `.env.local` — **set domain paths before first go-live.**  
**Full deploy bible (MSC pattern):** `D:\Cursor_Projectz\MyStudioChannel\.cursor\docs\HOSTINGER-DEPLOY.md`

---

## Pre-flight (before first deploy)

1. **Set site paths** in `.env.local`:

   ```
   DIGITALSTUDIOZ_DOMAIN=digitalstudioz.dev
   DIGITALSTUDIOZ_WEB_ROOT=/home/.../public_html/digitalstudioz
   DIGITALSTUDIOZ_APP_ROOT=/home/.../nodejs/digitalstudioz
   FTP_REMOTE_PATH=/nodejs/digitalstudioz
   ```

2. **Verify credentials** (already merged from JonBeatz):
   - `HOSTINGER_API_TOKEN`, `FTP_*`, `HOSTINGER_SSH_*`

3. **Sync MCP** so Cursor can use Hostinger tools:

   ```powershell
   npm run sync:mcp-env
   ```

4. **Build locally:**

   ```powershell
   npm run build
   ```

---

## Deploy options

### Option A — GitHub Pages (already live)

**URL:** [jonbeatz.github.io/DigitalStudioz](https://jonbeatz.github.io/DigitalStudioz/)  
Auto-deploys on push to `main` via `.github/workflows/deploy-pages.yml`.

No Hostinger steps required. Good for preview/staging.

### Option B — Hostinger Node.js (production domain)

Follow the **MSC golden split** adapted for this Next.js app:

| Step | Where | Action |
|------|-------|--------|
| 1 | **Local** | `npm run build` — verify exit 0 |
| 2 | **Local** | Upload `.next/`, `public/`, `package.json`, `package-lock.json`, `next.config.ts` via FTPS to `FTP_REMOTE_PATH` (staging) |
| 3 | **Local (SSH)** | Sync staging → `DIGITALSTUDIOZ_APP_ROOT` (same two-folder model as MSC) |
| 4 | **Local (SSH)** | `npm install --production` in app root if needed |
| 5 | **hPanel browser** | [hpanel.hostinger.com](https://hpanel.hostinger.com/) → Node.js → **Restart** |
| 6 | **Local** | HTTP smoke test against `https://$DIGITALSTUDIOZ_DOMAIN/` |

> **Note:** Deploy automation scripts (`pushit:live*`) are not yet wired in this repo. Until they are, use FTPS + SSH manually or copy the MSC deploy script pattern from `Deploy-FTP-Node` skill.

### Option C — Hostinger static (MCP)

For a static export (no Node server):

```powershell
$env:GITHUB_PAGES = "true"
npm run build:pages
# Upload contents of out/ to DIGITALSTUDIOZ_WEB_ROOT via Hostinger MCP or FTPS
```

---

## Two-folder model (Node deploy)

| Server path | Role |
|-------------|------|
| `FTP_REMOTE_PATH` (staging) | FTPS uploads land here first |
| `DIGITALSTUDIOZ_APP_ROOT` | Live Node.js app root |

FTPS alone does **not** update live. Always sync staging → live root, then **Restart** in hPanel.

---

## DNS (custom domain)

1. **Hostinger MCP** or hPanel → DNS
2. Point `DIGITALSTUDIOZ_DOMAIN` A record to Hostinger IP
3. For GitHub Pages instead: CNAME to `jonbeatz.github.io`

---

## Troubleshooting

See `.cursor/docs/PITFALLS-HOSTINGER.md`.

| Symptom | Fix |
|---------|-----|
| 503 after deploy | hPanel → Node.js **Restart** |
| White screen / missing chunks | Upload **full** `.next` folder, not partial |
| Staging updated, live stale | Run sync-app equivalent to `DIGITALSTUDIOZ_APP_ROOT` |
| MCP Hostinger red | `npm run sync:mcp-env` + reload MCP in Cursor |

---

## Future automation (TODO)

When ready to wire deploy scripts into `package.json`:

- [ ] `npm run deploy:preflight` — verify env + build
- [ ] `npm run deploy:upload` — FTPS staging upload
- [ ] `npm run deploy:sync` — SSH sync to live root
- [ ] `npm run deploy:live` — full pipeline + hPanel restart reminder

Copy pattern from `.cursor/skills/Workflow-Portable/Deploy-FTP-Node/SKILL.md`.

---

*Created: 2026-07-03*
