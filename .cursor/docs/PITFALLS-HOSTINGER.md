# Hostinger Pitfalls — DigitalStudioz

**Full context:** `.cursor/docs/HOSTINGER-REFERENCE.md`  
**MSC original:** `D:\Cursor_Projectz\MyStudioChannel\.cursor\docs\PITFALLS-HOSTINGER.md`

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Uploaded to staging only, live unchanged | Sync staging → `DIGITALSTUDIOZ_APP_ROOT`, then hPanel Restart |
| Partial `.next` upload | Always upload complete build output |
| Ran deploy from wrong repo | DigitalStudioz deploy from **this** repo; MSC from MSC repo |
| Forgot hPanel Restart | Node.js app **Restart** after every deploy |
| Committed `.env.local` | Never — gitignored; credentials in local file only |
| MCP zip on shared Node with native modules | Prefer FTPS + SSH scripts |
| Used MSC `FTP_REMOTE_PATH` for DigitalStudioz | Set DigitalStudioz-specific path in `.env.local` |

---

## Pre-deploy checklist

- [ ] `npm run build` exits 0
- [ ] `DIGITALSTUDIOZ_DOMAIN` and paths set in `.env.local`
- [ ] `npm run sync:mcp-env` if using Hostinger MCP
- [ ] Backup: `npm run backup:quick`

---

*Created: 2026-07-03*
