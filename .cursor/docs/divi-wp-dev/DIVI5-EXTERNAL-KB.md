# Divi 5 — External knowledge base (reviewed 2026-07-18)

Fleet grades live in shared **TOOLS-WATCHLIST** / **TOOLS-SETUP-STATUS**. This file is the DigitalStudioz WP desk index.

## Primary (use first)

| Resource | URL | Grade | Role |
|----------|-----|-------|------|
| **16wells/divi-docs** (site) | https://16wells.github.io/divi-docs/ | **A- (91) REF** | Modules, builder, options groups, recipes, troubleshooting |
| **API Reference** | https://16wells.github.io/divi-docs/api/ | ↑ | Hooks, REST, block JSON, JS API, module lifecycle — AI compose SoT |
| **Repo** | https://github.com/16wells/divi-docs | ↑ | MkDocs source; MIT; community (not Elegant Themes) |

**When to open:** Menu module attrs, Loop Builder, Theme Builder, REST content writes, Known Limitations playbooks.

## Complementary tooling

| Resource | URL | Grade | Verdict |
|----------|-----|-------|---------|
| **divilovewp/divi5-skill** | https://github.com/divilovewp/divi5-skill | **A- (90)** | **ADOPT** — JSON-native page gen; complements IAWB MCP (do not replace) |
| **cjsimon2/Divi5-ToolKit** | https://github.com/cjsimon2/Divi5-ToolKit | **B+ (88)** | **WATCH** — Claude Code CSS/a11y/CWV plugin; Cursor + child theme remain primary |

## Skipped (chat grade only)

| Resource | Grade | Why |
|----------|-------|-----|
| **andyhqtran/Divi-Resources** | **C+ (78)** | Curated list from Divi 3 era; stale for Divi 5 — do not persist |

## Stack relationship

- **IAWB + Local WP MCP** = live site ops (pages, TB, menus)
- **Child theme `dgtl-digitalstudioz-theme`** = CSS chrome SoT
- **16wells docs** = external technical SoT when ET docs are thin
- **divi5-skill / ToolKit** = optional agent accelerators — install only after Jon says so

## Already cited in-repo

PRDs / playbooks under `divi-wp-dev/` already linked several of these before fleet watchlist rows (2026-07-18 formalizes grades).
