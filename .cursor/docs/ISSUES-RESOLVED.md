# ISSUES-RESOLVED — DigitalStudioz

## 2026-07-18 — LocalWP MCP / child theme / WP-CLI

| Issue | Fix |
|-------|-----|
| `acf-mcp` Connection closed on Windows | Always-start stdio entrypoint; launch with plain `node` + env paths |
| `wpmcp` 404 on `/mcp/wpmcp-server` | mu-plugin `wpmcp-server-registrar.php` + `@automattic/mcp-wordpress-remote` |
| HTTPS Local cert broke Node MCP (`DEPTH_ZERO_SELF_SIGNED_CERT`) | MCP URLs use `http://digitalstudioz.local`; `NODE_TLS_REJECT_UNAUTHORIZED=0` safety net |
| Blank site after activating child theme | Removed empty child `index.php` that overrode Divi templates |
| `local-wp` WP-CLI missing mysqli | Was Winget PHP 8.5 + Local 8.4 ini; Agent Tools now binds Local `php-8.4.10` |
| Duplicate MCP Adapter notice | Deactivated standalone `mcp-adapter` (kept installed); Novamira bundles v0.5.0 |

---

*Append new resolutions at the top.*
