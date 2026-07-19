# ISSUES-RESOLVED — DigitalStudioz

> **Full write-ups + setup checklist:**  
> `.cursor/docs/divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md`  
> WP mirror: `Local-WP/DigitalStudioz-WP/.cursor/docs/DIVI5-SETUP-CATALOG.md`

## 2026-07-18 — Theme 0.7.1–0.7.2 spacing polish (intro dead space + Process minh)

| Issue | Fix |
|-------|-----|
| Contact CTAs too close under body | Paragraph `margin-bottom:32px` (nested-row `margin-top` ignored on FE) |
| Work/Services/Process huge gap intro→cards | Intro mb 48→20; section `rowGap` →16px — measured **~36px** (was ~136) |
| Featured side cards tall + touching | Pad 32→20; force 16px between nested rows (attrs + CSS bridge) |
| Services cards tight gutter / tall | Pad 20px; gutter ~28px |
| Process intro still ~104px after 0.7.1 | Theme CSS `min-height:200px` on **all** `.ds-process` columns — scoped to `:has(.ds-svc-num)` in **0.7.2** |

**Canonical:** [DIVI5-Problems-Solutions.md §F.5–F.6](./DIVI5-Problems-Solutions.md#f5-spacing-polish-071--intro-dead-space-contact-ctas-featured-sides)

## 2026-07-18 — Theme 0.7.0 Divi-native unlock (spacing + footer)

| Item | Change |
|------|--------|
| Home 15 spacing | Written into Divi module/section Spacing + column `rowGap:0` (hero measured **12/24/40**) |
| Child CSS | Spacing lock removed; soft `row-gap:0` safety only; theme **0.7.0** |
| Footer 31 | Native Text/Heading modules (was one HTML Text blob) |
| TB cleanup | Deleted duplicate template **37**; drafted orphan layouts **35/36** |
| Fonts | Customizer Heading/Body → **Inter** |
| Backups | `uploads/dsz-backup-*-pre-0.7.0.html` + IAWB backup_id 1 |
| Still CSS chrome | Glass nav, hamburger/drawer, section-label mono, button pad Customizer bridge |

---

## 2026-07-18 — Home spacing + mobile chrome + MCP (theme 0.6.6)

| Issue | Fix |
|-------|-----|
| Huge gaps between Home text vs Next.js | Divi column `row-gap:30px` doubled margins — theme **0.6.6** spacing lock; [Problems-Solutions §F](./DIVI5-Problems-Solutions.md#f-spacing-vs-nextjs-text-stacks--section-pad) |
| Mobile hamburger / drawer bugs | CSS bars/X, hide-unless-open, `absolute;top:100%`, light frost **0.6.4** — §D |
| Triple `ai-editor-divi5` MCP | Keep one entry in WP mcp.json only — §G |
| `local-wp` Cursor discovery red | `type:http` + `mcp_auth`; disable dead Novamira/wpmcp MCP — §G |
| Page freeze | Removed MutationObserver writing watched styles — §B |

**Canonical:** [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md)

## 2026-07-18 — Divi brand wall polish + white line + agent save gotchas

| Issue | Fix |
|-------|-----|
| Thin white/grey vertical line on `/dsz-brand-system/` | Divi `#main-content .container::before` sidebar gutter (1px `#e2e2e2`) — killed in child `style.css` **v0.3.4** |
| Divi page white BG; no visible swatches | `$variable()` section/chip BGs didn’t emit module CSS — use **hex** for section/card/chip; variables for text; purge `et-cache/57` |
| Front showed raw `<!-- wp:divi/…` JSON | Raw `<` in block attrs → kses-escaped nested modules — encode `\u003c`/`\u003e` + `wp_slash` on save |
| Wanted Home buttons + dual-color title + rounded cards | Page **57** rebuilt: `.ds-btn-*`, `Gold & <span class="ds-brand-title-gold">Grey</span>`, 12px charcoal cards, field shells |
| VB hung on CSS reference | Page **54** builder **off**; edit page **57** only |

**Verified:** sections `rgb(18,18,18)`; 8 chips; dual title gold span; Primary/Ghost CTAs; `::before` display none.  
**Canonical:** [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md) · catalog **§4.14**

## 2026-07-18 — Divi VB hung on Brand System + Divi-native alt wall

| Issue | Fix |
|-------|-----|
| “Use Divi Builder” on `/dsz-brand-system/` spun forever | Page **54** is a PHP CSS wall — not Divi layout; builder set **off** |
| Need brand wall editable with real Variables + modules | New page **57** `/dsz-brand-system-divi/` — modules + Fluid OG + text variables |
| VB verify | `?et_fb=1` loads full Divi 5 UI on page 57 |

**Edit in Divi:** https://digitalstudioz.local/dsz-brand-system-divi/  
**CSS reference only:** https://digitalstudioz.local/dsz-brand-system/  
**Canonical:** [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md)

## 2026-07-18 — Brand System page fixed (ET walls looked terrible)

| Issue | Fix |
|-------|-----|
| Launch Preset-Pages / Fluid Type Spec looked like white teaching dumps | Wrong tool — those are ET light-theme inventories, not our brand wall |
| Heading Warm Off-White on white canvases | Dark Gold & Grey wall instead |
| Logged-in admin still saw draft walls at old URLs | Trash 48/49/50 + 301 → `/dsz-brand-system/` |
| Divi text-module HTML dump mangled the first rebuild | Child theme template `page-dsz-brand-system.php` + `inc/brand-system-markup.php` |
| Hero `100vh` on every page first section | Scope hero CSS to `#ds-hero` only |

**CSS reference:** https://digitalstudioz.local/dsz-brand-system/ (page **54**) — operator confirmed look.  
**Divi SoT:** page **57** (see above).  
**Canonical:** [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md) · catalog **§4.13**

---

## 2026-07-18 — Design Variables (Gold & Grey) not showing in Variable Manager

| Issue | Fix |
|-------|-----|
| Library import of variables JSON left Primary/Secondary as Divi blue `#2EA3F2` | Wrong door — use **Variable Manager → ↑↓ Import**, not Divi Library |
| Writing `gcid-primary-color` into `et_global_data` still showed blue in VB | Divi 5 rebuilds those five from **Customizer** (`accent_color`, `secondary_accent_color`, `header_color`, `font_color`, `link_color`) and strips them from `et_global_data` on read |
| UI stayed stale after DB update | Full **Exit + re-open** Visual Builder after `et_update_option` |

Canonical write-up: [DIVI5-Design-Variables-GoldGrey.md](./DIVI5-Design-Variables-GoldGrey.md) § Incident log. Live confirmed Primary `#D3B670`.

## 2026-07-18 — Theme Builder global header + footer

| Issue | Fix |
|-------|-----|
| Default Divi nav / footer still in use | `iawm_divi_theme_builder_compose` site default (template 32, header 30, footer 31) + child CSS/JS; hide `#main-header` / `#main-footer` — see catalog §4.6 |
| Header/footer looked massively padded | Hero `min-height:100vh` leaked onto TB sections via `:first-of-type` (per-parent). Scope hero to `.et-l--post`; reset TB `min-height:0` — **catalog §4.7** |

## 2026-07-18 — Home hero match (Next.js → Divi 5)

| Issue | Fix |
|-------|-----|
| Stock Divi `hero` pattern too rigid for Warm Premium reference | Free-form `iawm_divi_page_compose` + semantic HTML classes + child `style.css` |
| Hero block sat too far left vs original | Center **block** in viewport (`flex` center + ~720px row); keep text **left-aligned** inside — see catalog §4.5 |
| Need Mulish + dual CTAs + bg photo | Global fonts Mulish; import `ds-demo-hero.jpg`; gold/ghost `.ds-btn` styles; mobile CTA stack |

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

*Append new resolutions at the top. Expand in the Divi5 Setup Catalog when a one-liner isn’t enough.*
