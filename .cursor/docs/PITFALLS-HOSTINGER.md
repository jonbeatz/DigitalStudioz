# Hostinger Pitfalls — DigitalStudioz

| Mistake | Fix |
|---------|-----|
| Staging updated, live stale | Sync to `DIGITALSTUDIOZ_APP_ROOT`, hPanel Restart |
| Partial `.next` upload | Upload complete build folder |
| Wrong repo for MSC deploy | MSC = MyStudioChannel; this profile = DigitalStudioz |
| Committed `.env.local` | Never — gitignored |
| MCP red after env change | `npm run sync:mcp-env` + reload Cursor MCP |

---

*Bootstrap template — 2026-07-18*
