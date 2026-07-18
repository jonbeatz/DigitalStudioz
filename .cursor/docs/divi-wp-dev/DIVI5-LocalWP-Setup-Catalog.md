# Divi 5 + LocalWP Setup Catalog — DigitalStudioz

**Purpose:** Living catalog of what made this WordPress + Divi 5 site work, what broke, and how we fixed it — so the next LocalWP / Divi 5 build (or rebuild) does not re-learn the same pain.

**Status:** Active — append new findings at the top of each section (newest first).  
**Started:** 2026-07-18  
**Last updated:** 2026-07-18 (Brand walls 54+57 — Divi SoT + agent gotchas §4.14)

| Role | Path |
|------|------|
| **Docs hub (this folder)** | `DigitalStudioz/.cursor/docs/divi-wp-dev/README.md` |
| **Git-backed source of truth** | This file — `DigitalStudioz/.cursor/docs/divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` |
| **WP workspace mirror** | `Local-WP/DigitalStudioz-WP/.cursor/docs/DIVI5-SETUP-CATALOG.md` |
| **MCP day-to-day** | `Local-WP/DigitalStudioz-WP/.cursor/docs/MCP-SETUP.md` |
| **Short issue index** | `DigitalStudioz/.cursor/docs/divi-wp-dev/ISSUES-RESOLVED.md` |

> When you discover a fix: update **this file first**, then mirror into the WP copy, then add a one-line row to `ISSUES-RESOLVED.md`. Do **not** put Application Passwords or API keys in this doc.

---

## 1. Verified working stack (snapshot)

| Layer | Working value (2026-07-18) |
|-------|----------------------------|
| LocalWP site path | `D:\Hermes\projects\Local-WP\DigitalStudioz-WP` |
| Domain | `digitalstudioz.local` (HTTPS Trusted in Local for browsers) |
| Local site ID | `ufauI-YD2` |
| WordPress | **7.0.2** |
| PHP (Local lightning) | **8.4.10** |
| Parent theme | **Divi 5.9.0** |
| Child theme | `dgtl-digitalstudioz-theme` (active) |
| Design system | **Gold & Grey** Variables SoT (`#D3B670` / `#5B6F7A` / `#F5F0E8` / `#817E79`) + Fluid typography presets; child CSS still bridges hero/nav |
| Front page | Static page **Home** (ID `15`, slug `home`) — `show_on_front=page`, `page_on_front=15` |
| Home hero | Divi free-form text module + child CSS; matched Next.js Warm Premium hero (eyebrow / dual CTA / bg image); content block centered in viewport, text left-aligned |
| Admin user | `jonbeatz` |
| Cursor workspace | Multi-root: Next.js `DigitalStudioz` + this WP folder |
| Next.js role | Warm Premium **layout/content reference** only — not production |

### Active plugins (homepage-ready)

| Plugin | Role |
|--------|------|
| ACF PRO | Field groups / Local JSON in child `acf-json/` |
| Novamira + Novamira Pro | MCP server + Divi AI tooling (bundles mcp-adapter) |
| wpmcp | Snapshot-safe write abilities |
| IA Webmaster Bridge | Divi 5 module / Theme Builder MCP tools |
| WPvivid | WP backups (Next.js `npm run backup:*` does **not** cover WP) |

### MCP servers (verified green)

| MCP | How it connects | Prefer |
|-----|-----------------|--------|
| `local-wp` | Local Agent Tools URL `http://localhost:24842/sites/ufauI-YD2/mcp` | Local PHP 8.4.10 for WP-CLI |
| `novamira-digitalstudioz` | `@automattic/mcp-wordpress-remote` → `/wp-json/mcp/novamira` | **http://** base |
| `wpmcp-digitalstudioz` | same remote → `/wp-json/mcp/wpmcp-server` | **http://** base |
| `acf-mcp` | Node stdio → child theme `acf-json` + WP root | plain `node` entrypoint |
| `ia-webmaster-bridge` | Node gateway + `%USERPROFILE%\.iawm\config.json` | **http** baseUrl |

Config lives in **project** `DigitalStudioz-WP/.cursor/mcp.json` (not global `~/.cursor/mcp.json`) because secrets are per-site.

---

## 2. Locked decisions (do not reverse casually)

1. **Production = WordPress 7 + Divi 5 + AI/MCP** — Next.js stays as reference.
2. **Design = Warm Premium** — Tactile Brutalism / acid cyan `#00ffcc` is retired.
3. **WP lives under Local-WP**, not inside the Next.js repo.
4. **WP MCP stays project-scoped** on the WP folder.
5. **Prefer HTTP for Node MCP** even when the browser uses HTTPS Trusted.
6. **Standalone `mcp-adapter` stays deactivated** (files kept) — Novamira’s bundled adapter is enough.
7. **DigitalStudioz-WP does not require its own GitHub repo yet** — catalog is git-backed via the Next.js profile playbooks until that changes.
8. **Child theme must not ship an empty `index.php`** — let Divi handle templates.

---

## 3. Successful setup sequence (checklist for next time)

Use this order on a fresh LocalWP site.

### A. Local + core

- [ ] Create Local site under `D:\Hermes\projects\Local-WP\<Name>-WP`
- [ ] Confirm PHP is Local lightning **8.4.x** (not a mismatched Winget PHP)
- [ ] Install / activate **Divi 5**
- [ ] Trust HTTPS in Local for browser; note site ID from Local Agent Tools

### B. Child theme

- [ ] Create Divi child: `style.css` with `Template: Divi` + Warm Premium `:root` tokens
- [ ] `functions.php`: enqueue parent + child CSS; enqueue `js/core-scripts.js`; ACF Local JSON filters
- [ ] Create `js/core-scripts.js` (can be empty stub)
- [ ] Create `acf-json/` directory
- [ ] **Do not** add a blank `index.php` that overrides Divi
- [ ] Activate child theme; confirm front end still renders Divi

### C. Plugins

- [ ] ACF PRO → set Local JSON to child `acf-json`
- [ ] Novamira + Pro (creates MCP endpoint)
- [ ] wpmcp + **mu-plugin registrar** for `/wp-json/mcp/wpmcp-server` (see §5)
- [ ] IA Webmaster Bridge + wire `~/.iawm/config.json`
- [ ] WPvivid for WP backups
- [ ] Leave standalone **mcp-adapter** installed but **deactivated** if Novamira already bundles it
- [ ] Optional later: FluentSMTP/Forms, Rank Math, Squad Modules

### D. MCP wiring

- [ ] Put MCP servers in **WP** `.cursor/mcp.json` (project-scoped)
- [ ] Use `http://<domain>.local/...` for Novamira / wpmcp / IAWB
- [ ] Set `NODE_TLS_REJECT_UNAUTHORIZED=0` as safety net for any HTTPS leftovers
- [ ] Point `acf-mcp` env to child `acf-json` + `app/public` WP root
- [ ] Bind Local Agent Tools / WP-CLI to Local’s `php-8.4.10` binary
- [ ] **Do not** casually click Agent Tools **Regenerate Config** (wipes merged MCP entries)
- [ ] Verify each MCP green in Cursor before building pages

### E. Reading / Home

- [ ] Create published page **Home** (or brand home)
- [ ] Settings → Reading: static front page → Home  
  Or WP-CLI: `option update show_on_front page` + `option update page_on_front <ID>`
- [ ] Optional: separate Posts page for blog later

### F. Design / build

- [ ] Open Home in Divi Visual Builder
- [ ] Match sections to Next.js reference (Hero → Work → Services → …)
- [ ] Tokens from `DigitalStudioz/.cursor/docs/WARM-PREMIUM-PALETTE.md`
- [ ] Backup WP (WPvivid / Local export) before large layout pushes

---

## 4. Issues & fixes catalog

Append new rows at the **top** of the table.

| Date | Symptom | Root cause | Fix that worked | Avoid next time |
|------|---------|------------|-----------------|-----------------|
| 2026-07-18 | TB header/footer huge empty space (looked like padding) | Hero CSS `.home .et_pb_section:first-of-type { min-height:100vh }` also matched TB header+footer (each is first-of-type in its layout) | Scope hero to `.et-l--post .et_pb_section:first-of-type`; force `.et-l--header/.et-l--footer .et_pb_section { min-height:0 }` | Never use bare `.et_pb_section:first-of-type` on Theme Builder sites |
| 2026-07-18 | Stock Divi `hero` pattern ≠ Warm Premium reference | Pattern forces centered H1 + mandatory CTA module; no eyebrow / dual CTA / bg image control | Free-form `iawm_divi_page_compose` + HTML classes + child `style.css`; import `ds-demo-hero.jpg` to Media; Mulish via `iawm_divi_global_fonts_update` | Don’t expect the parametric `hero` pattern to match a custom reference 1:1 |
| 2026-07-18 | `acf-mcp` “Connection closed” on Windows | Wrong / fragile stdio entry | Always-start stdio entrypoint; launch with plain `node` + explicit `ACF_MCP_*` env paths | Don’t assume default package bin works on Windows without testing |
| 2026-07-18 | `wpmcp` 404 on `/mcp/wpmcp-server` | Endpoint not registered | mu-plugin `wp-content/mu-plugins/wpmcp-server-registrar.php` + client `@automattic/mcp-wordpress-remote` | Don’t expect wpmcp alone to expose the remote path |
| 2026-07-18 | Node MCP TLS errors (`DEPTH_ZERO_SELF_SIGNED_CERT`) | Local self-signed HTTPS | MCP `WP_API_URL` / IAWB baseUrl use **http://digitalstudioz.local**; optional `NODE_TLS_REJECT_UNAUTHORIZED=0` | Don’t force HTTPS into Node MCP on Local |
| 2026-07-18 | Blank front after activating child theme | Empty child `index.php` overrode Divi’s templates | **Delete** empty child `index.php`; keep Divi parent templates | Never ship empty theme template overrides “for later” |
| 2026-07-18 | `local-wp` WP-CLI missing `mysqli` | Winget PHP **8.5** + Local **8.4** php.ini mismatch | Agent Tools / WP-CLI bound to Local `php-8.4.10` (addon fallback patched under Local Agent Tools) | Don’t let PATH Winget PHP drive Local WP-CLI |
| 2026-07-18 | Duplicate MCP Adapter admin notice | Standalone `mcp-adapter` + Novamira-bundled adapter | Deactivate standalone (keep files on disk) | Don’t activate both adapters |
| 2026-07-18 | Need full-viewport Divi hero with left-aligned centered copy | Default hero pattern adds CTA + centered text only | Free-form `iawm_divi_page_compose` text module + child CSS (`min-height:100vh`, flex center, max-width row); Mulish via `iawm_divi_global_fonts_update` | Don’t rely on stock `hero` pattern alone for left-align + 100vh |

### Longer write-ups (when a one-liner isn’t enough)

#### 4.1 Child theme blank front

Divi child themes only need `style.css` + `functions.php` (plus optional assets). An empty `index.php` in the child **wins** over the parent and returns a blank document. Fix: remove it. Custom PHP templates only when you intentionally replace Divi’s template hierarchy.

#### 4.2 HTTP vs HTTPS for MCP

Browsers: HTTPS Trusted in Local is fine.  
Node (`npx` mcp-wordpress-remote, IAWB gateway, etc.): self-signed cert fails TLS verification. Prefer **http://** for API base URLs on `.local`. Keep HTTPS for humans.

#### 4.3 WP-CLI PHP binary

Local’s site runs on lightning PHP 8.4.10. System Winget PHP 8.5 with Local’s 8.4 ini (or the reverse) breaks extensions like `mysqli`. Always invoke WP-CLI with Local’s PHP for that site.

#### 4.4 wpmcp remote path

wpmcp abilities alone were not enough for Cursor’s remote client. A mu-plugin registrar exposes `/wp-json/mcp/wpmcp-server`. Client remains `@automattic/mcp-wordpress-remote` with Application Password auth (store password in env / mcp.json — **never** in this catalog).

#### 4.5 Matching the Next.js Warm Premium hero in Divi 5 (2026-07-18)

**Goal:** Rebuild Home hero to match `DigitalStudioz` Next.js reference (`lib/experience-engine/engine.tsx`) — not the stock Divi `hero` pattern.

**What worked (stack):**

| Step | Tool / file | Detail |
|------|-------------|--------|
| 1. Fonts | `iawm_divi_global_fonts_update` | Heading + body → **Mulish** |
| 2. Background asset | `wp media import` + compose `background.imageUrl` | Imported `public/images/ds-demo-hero.jpg` → Media ID `22` / uploads URL |
| 3. Layout write | `iawm_divi_page_compose` free-form section | One section → row `4_4` → **text** module with semantic HTML (not parametric `hero`) |
| 4. Markup | Classes in that HTML | `.ds-hero-content` / `.ds-hero-eyebrow` / `.ds-hero-title` / `.ds-hero-sub` / `.ds-hero-ctas` / `.ds-btn-primary` / `.ds-btn-ghost` |
| 5. Look & responsive | Child theme `style.css` | Full-viewport flex shell, overlays, type, buttons, mobile stack |
| 6. Verify | Brave Playwright + `getBoundingClientRect` | Confirm colors, CTAs, and block centering (`dx/dy ≈ 0`) |

**HTML structure to keep (Home page ID `15`):**

- Eyebrow: `Digital Studio` (tracked uppercase, gold)
- H1: `We Build` (white) + `<span>Digital</span><br /><span>Experiences</span>` (gold / gradient)
- Sub: muted `#817E79`
- CTAs: `View Our Work` → `#work`, `Get in Touch` → `#contact` (anchors until those sections exist)
- Accent tokens used: Digital Experiences `#D3B670` (via gradient gold/`#d3b670`), sub `#817E79`, void `#0a0a0b`

**Centering finding (important):**

Operator feedback: original hero copy sits **much more in the middle of the viewport**. Early WP CSS pinned the block left (`justify-content: flex-start` + `1200px` row). That looked like a left column, not the reference.

**Correct model:**

1. **Center the content block** in the hero (horizontal + vertical): section `display:flex; align-items:center; justify-content:center`; row ~`max-width: 720px`; `.ds-hero-content { margin-left/right: auto }`.
2. **Left-align the text inside** that block (`text-align: left`) — eyebrow, title, sub, buttons share a left edge.
3. Do **not** use Divi’s “center text” on every line if you want the stacked left edge of the reference.

Verified after tweak: content midpoint vs section midpoint ≈ **0 / 0** px offset; `text-align` still `left`.

**Why not stock `hero` pattern?**

- Requires CTA fields and centers the H1 by default.
- No first-class eyebrow / dual styled CTAs / reference bg image pipeline.
- Faster to match Warm Premium with free-form HTML + child CSS.

**Mobile / responsive (keep when editing):**

- Title: `clamp(32px, …, 56px)` → hard `32px` under 767px
- CTAs: row on desktop; **column + full-width** buttons on mobile
- Use `100svh` as well as `100vh`
- Extra top padding on small screens so content clears Divi/header chrome
- Dark gradient overlays on `::before` so type stays readable over the photo

**Files:**

- Page content: WP Home `15` (Divi blocks via IAWB)
- Styles: `…/themes/dgtl-digitalstudioz-theme/style.css` (bump `Version:` in header to bust cache)
- Reference: `DigitalStudioz/lib/experience-engine/engine.tsx` + `public/images/ds-demo-hero.jpg`

**Still open / minor polish (operator):** spacing, scroll cue, edge glow rails, Theme Builder header matching Next.js nav — tweak in CSS/VB; don’t throw away the compose + class approach.

#### 4.6 Global Header + Footer via Theme Builder (2026-07-18)

**Goal:** Replace Divi’s default primary navigation and footer with Warm Premium globals matching the Next.js reference.

**What worked:**

| Step | Detail |
|------|--------|
| WP menu | Created **Primary** (ID `4`): Work / Services / Process / About / Contact → `/#…` anchors; assigned to `primary-menu` |
| Theme Builder | `iawm_divi_theme_builder_compose` → template **DigitalStudioz Default** (ID `32`), header layout `30`, footer layout `31`, `assign_default=true` |
| Markup | Free-form text modules with `.ds-site-header` / `.ds-footer` HTML (same approach as hero — not stock `headerSimple` alone) |
| Header UI | Logo `Digital`+`Studioz`, nav links `#817E79`, gold **Start a Project** CTA, hamburger under 980px |
| Footer UI | 4-col grid (brand + Services / Company / Connect), copyright bar, fixed **back-to-top** |
| Hide classic chrome | `#main-header` / `#main-footer` `display:none` in child CSS (verified absent in DOM after TB) |
| JS | `js/core-scripts.js` — mobile nav toggle + back-to-top visibility |

**Verify:** `.et-l--header` + `.et-l--footer` present; `#main-header` / `#main-footer` absent; logo/nav/CTA/footer columns render.

**Files:** child `style.css` v0.2.1+, `js/core-scripts.js`; TB layouts 30/31.

#### 4.7 Theme Builder header/footer “huge padding” = hero `100vh` leak (2026-07-18)

**Symptom (operator):** After global header/footer shipped, the header had a huge empty black band *above* the logo/nav, and the footer had a huge empty band *below* the copyright. Looked like margin/padding.

**Root cause (measured in browser):**

| Layout wrapper | Section class | Measured `min-height` (before fix) |
|----------------|---------------|-------------------------------------|
| `.et-l--header` | `…_tb_header` | **100vh** (~848px) |
| `.et-l--post` | page hero | 100vh (correct) |
| `.et-l--footer` | `…_tb_footer` | **100vh** (~848px) |

Child CSS had:

```css
.home .et_pb_section:first-of-type,
.page-id-15 .et_pb_section:first-of-type {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

With Theme Builder active, the DOM has **three** independent builders:

```
.et-l--header  → one section (first-of-type in that tree)
.et-l--post    → page sections (hero is first-of-type here)
.et-l--footer  → one section (first-of-type in that tree)
```

`:first-of-type` is **per parent**, not “first on the whole page.” So `.home .et_pb_section:first-of-type` matched **header + hero + footer**. Flex centering then vertically centered the slim nav/footer content inside a full-viewport-tall section → giant empty space above (header) / below (footer).

**Fix that worked:**

1. Scope all hero shell rules to **page content only**:
   ```css
   .et-l--post .et_pb_section:first-of-type { min-height: 100vh; … }
   ```
2. Explicitly reset Theme Builder chrome:
   ```css
   .et-l--header .et_pb_section,
   .et-l--footer .et_pb_section {
     min-height: 0 !important;
     height: auto !important;
     display: block !important;
     /* no flex centering */
   }
   ```
3. Bump child theme `Version:` (e.g. `0.2.1`) so WP cache-busts CSS.

**Verified after:** header section ~77px tall; footer content-sized (~421px); hero still `100vh` under `.et-l--post`.

**Rule for next time:** On any Divi 5 + Theme Builder site, **never** write bare `.et_pb_section:first-of-type` / `.home .et_pb_section…` for page hero styles. Always scope with `.et-l--post` (or a dedicated hero class). When debugging “mystery padding” on TB layouts, check computed `min-height` first.

#### 4.8 What we have (hybrid inventory) — 2026-07-18

Honest map of **Divi builder / IAWB** vs **child theme CSS/JS**. This is the baseline before the native experiment in §4.9.

| Surface | Delivered by | How |
|---------|--------------|-----|
| Home page structure | Divi + IAWB | Page **15** — section → row → column → Text module |
| Hero copy / CTAs | Free-form HTML in Text | `.ds-hero-*` classes (not stock `hero` pattern) |
| Hero background image | Divi section `background.image` | Media **33** `MSC-Login1.jpg` |
| Hero `100vh` + vertical center | **Both** (see §4.9) | Divi `sizing.minHeight` + `layout` flex **and** scoped child CSS (`.et-l--post…`) for `100svh` / mobile pad |
| Hero dark overlay | **Divi native** | Gradient `overlaysImage` + image `blend: multiply` (CSS `::before` disabled) — §4.10 |
| Global header/footer | Theme Builder | Live default uses template **32** → header **30**, footer **31** (duplicate template **37** / layouts **35–36** also exist — prefer **32/30/31**) |
| Header chrome (logo, links, CTA, hamburger) | Free-form HTML in Text | `.ds-site-header` markup inside layout **30** |
| Header sticky (stay on scroll) | **Child CSS** | `.et-l--header { position: sticky; top: 0; z-index: 200 }` |
| Header scroll opacity 85% + blur | **Child CSS + JS** | `.ds-site-header.is-scrolled` + `js/core-scripts.js` toggles class at `scrollY > 24` |
| Footer columns / back-to-top | HTML + CSS + JS | `.ds-footer` + back-to-top button |
| Hide classic Divi chrome | Child CSS | `#main-header` / `#main-footer { display: none }` |
| WP Primary menu | WP Menus | Menu ID **4** (also used if Menu module is composed) |

**IAWB tools used:** `iawm_divi_page_compose` / `theme_builder_compose` for structure; `iawm_divi_page_write` for raw block attrs (sticky, minHeight, sticky-state BG). Free-form compose alone does **not** expose sticky / minHeight decorations.

**Files:** child `style.css` **v0.2.4+**, `js/core-scripts.js`; experiment JSON under `DigitalStudioz-WP/.cursor/docs/experiments/`.

#### 4.9 Native Divi settings experiment — 2026-07-18

**Goal:** Match sticky header + scroll BG + hero full-viewport using real Divi section decorations (as in Visual Builder), not only CSS/JS.

**Method:**

1. Documented hybrid (§4.8).
2. Temporarily **disabled** CSS sticky + `is-scrolled` BG + CSS hero `min-height` so Divi could be judged alone.
3. Wrote Divi attrs via `iawm_divi_page_write`:
   - Header **30** (live): `module.decoration.sticky` (`position: "top"`), transparent default BG + `background.desktop.sticky.color = rgba(10,10,11,0.85)`, kept polished `.ds-site-header` HTML.
   - Page **15**: `sizing.minHeight: 100vh`, flex `layout` center, same hero HTML + `MSC-Login1.jpg`.
4. Also wrote alternate header **35** (logo + native `divi/menu` menuId `4`) — **not** the live TB default (template **32** still points at **30**).
5. Measured in browser (CDP) with CSS experiment flags off.

**Results:**

| Target | Native Divi outcome | Evidence |
|--------|---------------------|----------|
| Hero `minHeight: 100vh` + flex center | **Works** | Dynamic CSS emits `min-height:100vh; justify-content:center; align-items:center` on `.et_pb_section_0`; computed height ≈ viewport with CSS shell off |
| Hero BG image via Divi | **Works** | Same dynamic CSS `background-image: url(…MSC-Login1.jpg)` |
| Header sticky position | **Fails on TB header** | Section stays `position: relative`; scrolls away (`sectionTop` negative). No `et_pb_sticky` class ever applied |
| Sticky-state BG `0.85` | **CSS only — never activates** | Dynamic CSS includes `.et_pb_section_0_tb_header.et_pb_sticky { background-color: rgba(10,10,11,0.85) }` but class never added |
| Sticky FE runtime | **Not loaded** | `script-library-sticky-elements.js` **not** enqueued; `window.et_pb_sticky_elements` / `diviElementStickyData` are **null** |
| Scroll blur / border | **Still CSS/JS only** | Divi has no blur sticky-state equivalent for our design |
| Native Menu module header | **Works but under-polished** | Layout **35** OK structurally; loses custom CTA + hamburger unless rebuilt in Divi modules |

**Verdict / keep doing:**

| Keep in Divi (real settings) | Keep in child CSS/JS |
|------------------------------|----------------------|
| Section BG color/image | Sticky shell on `.et-l--header` |
| Hero `minHeight` + flex (page write) | `100svh`, mobile top padding, hero overlay |
| Transparent header section BG (written) | `.is-scrolled` 85% opacity + backdrop blur |
| Structure / Theme Builder zones | Hamburger toggle, back-to-top |
| Optional: Menu module if we drop custom HTML | Brand HTML in Text modules |

**Restore after experiment:** CSS sticky + `is-scrolled` re-enabled (child theme **v0.2.4**). Divi sticky attrs left on header **30** (harmless CSS for a class that never fires). Hero page **15** keeps native minHeight/layout **plus** CSS fallback.

**Operator note:** Setting sticky in Visual Builder UI on a Theme Builder header may enqueue sticky scripts differently than raw `page_write`. If you toggle Sticky in VB and it suddenly works, update this section — current FE evidence with IAWB write = sticky registry never published.

#### 4.10 Native Divi first — classes/IDs + overlay policy (2026-07-18)

**Rule going forward:** Prefer real Divi section/row/column/module settings via Visual Builder attrs (or `iawm_divi_page_write`). Use child CSS only when Divi’s FE pipeline cannot deliver the effect (proven gaps below).

**Always set on new modules:**

| Field | Divi path | Example |
|-------|-----------|---------|
| Admin label | `module.meta.adminLabel` | `DS Hero` |
| CSS ID | `module.advanced.htmlAttributes.desktop.value.id` | `ds-hero` |
| CSS Class | `module.advanced.htmlAttributes.desktop.value.class` | `ds-hero` |

Current IDs/classes on live layouts: `#ds-hero` / `.ds-hero`, `#ds-hero-row`, `#ds-hero-col`, `#ds-hero-text`, `#ds-header` / `.ds-header`, `#ds-header-row`, `#ds-header-col`, `#ds-header-text`.

**Hero overlay (native — verified in FE):**

| Setting | Value |
|---------|--------|
| Image | `MSC-Login1.jpg`, cover, center |
| Image blend | `multiply` (`decoration.background.*.image.blend`) |
| Gradient | enabled, `overlaysImage: on`, linear `180deg` |
| Stop 0% | `rgba(160,28,28,0.82)` dark red (stronger cast) |
| Stop 45% | `rgba(110,18,18,0.78)` mid red hold |
| Stop 100% | `rgba(10,10,11,0.88)` void black |

Child CSS `::before` overlay is **disabled** (v0.2.6) so Divi owns the look. Measured: `background-image` = gradient + url; `background-blend-mode: multiply`.

**Nav scroll opacity (honest):**

| State | Current behavior |
|-------|------------------|
| At rest (top) | Solid void `#0a0a0b` (opaque) |
| On scroll | `rgba(10,10,11,0.85)` + blur via `.is-scrolled` — yes, **slightly more transparent** than rest, so content can faintly show under the sticky bar |

That matches the earlier “85% on scroll” brief. It is **not** “more opaque on scroll.” If you want the opposite (transparent at rest → solid/85% on scroll), we need the header to overlay the hero (negative margin / absolute) — say the word and we’ll switch.

**What can stay Divi-native vs must stay CSS/JS:**

| Use Divi settings | Keep CSS/JS |
|-------------------|-------------|
| BG color, image, gradient, `overlaysImage`, image `blend` | Sticky shell on `.et-l--header` (TB sticky FE registry missing via IAWB) |
| `minHeight`, flex layout on sections | Scroll class `is-scrolled` + blur (no Divi blur sticky-state) |
| Spacing, sizing, Menu module | Hamburger toggle, back-to-top |
| CSS ID / Class / Admin Label | `100svh` + mobile hero padding polish |
| Structure (TB header/footer/body) | Hide `#main-header` / `#main-footer` |

**Best workflow:** compose structure with IAWB → `page_write` decorations (gradient, blend, minHeight, htmlAttributes) → child CSS only for proven gaps + brand type that free-form HTML already carries.

#### 4.11 Client-editable Divi first + research library (2026-07-18)

**North star:** Build so a client can open Visual Builder and change backgrounds, copy, CTAs, and sticky styles like a normal Divi site — not hunt CSS in a child theme.

##### Principles (always)

1. **Divi module settings first** — Background (color/image/gradient/`overlaysImage`/blend), Spacing, Sizing, Layout, Sticky + **sticky-state** styles, Menu module, Button module.
2. **Always set Admin Label + CSS ID + CSS Class** on section/row/column/module (`Advanced → CSS ID & Classes`).
3. **Prefer stock modules** (Menu, Button, Image, Text, Heading) over free-form HTML when the client needs to edit that piece.
4. **Free-form HTML only** for brand chrome that Divi modules can’t express cleanly yet (custom hamburger + dual-tone logo) — still wrap it in a Text module with labels/IDs.
5. **Child CSS/JS last** — only after a Divi setting is proven missing/broken (document the gap in this catalog).

##### Overlay tweak (stronger red — still Divi-native)

Hero `#ds-hero` gradient stops updated (multiply kept):

| Stop | Color |
|------|--------|
| 0% | `rgba(160,28,28,0.82)` |
| 45% | `rgba(110,18,18,0.78)` |
| 100% | `rgba(10,10,11,0.88)` |

Client edit path: Section `#ds-hero` → Background → Gradient stops / Image Blend.

##### Sticky header — preferred native path (from research)

Official Elegant Themes pattern (client-friendly):

1. Theme Builder header section → **Advanced → Scroll Effects → Sticky → Stick to Top**
2. Enable **Transition Default and Sticky Styles**
3. Switch the settings UI to **Sticky** state and set background / text colors there (no jQuery required when sticky FE registers)

Docs: [How to Create a Sticky Header with Divi’s Sticky Options](https://www.elegantthemes.com/blog/divi-resources/how-to-create-a-sticky-header-with-divis-sticky-options)

Our IAWB `page_write` of sticky attrs previously emitted sticky-state CSS but did **not** enqueue sticky FE scripts (§4.9). **Next experiment:** apply sticky + sticky-state BG **inside Visual Builder** on `#ds-header` (or recreate Menu-based header) and verify `et_pb_sticky_elements` appears — then we can drop CSS sticky / `is-scrolled` if VB succeeds.

##### YouTube channel sweep (Jon favorites — 2026-07-18)

Full ranked watch list + stack-mapped tips: [youtube-channel-watchlist-2026-07.md](./youtube-channel-watchlist-2026-07.md)  
Earlier AI/NovaMira deep dives: [youtube-research-findings.md](./youtube-research-findings.md)

**Design Variables / ET freebies (2026-07-18):** [DIVI5-Design-Variables-GoldGrey.md](./DIVI5-Design-Variables-GoldGrey.md) — Fluid typography pack + Gold & Grey palette.  

**Gotcha (verified):** Do **not** import variables JSON via Divi Library. Use Variable Manager ↑↓. Primary/Secondary/Heading/Body/Link are **Customizer** options (`accent_color`, `secondary_accent_color`, `header_color`, `font_color`, `link_color`) — writing them only into `et_global_data` does nothing in the UI. Full incident log in the GoldGrey playbook. Live site: Primary `#D3B670` etc. confirmed in VB.

**Highest yield for us right now:** Pee-Aye (variables/sticky/Assistant) · Elegant Themes Mastery Parts 3–8 · W4B Ep 6/16/18 (your playlist) · System22 sticky color-on-scroll · Teach Web With Mark TB steps · Ferdy ACF/full builds · WP AI Success Hub (NovaMira).  
**Low Divi yield:** WPTuts (pivoted to Bricks) · WP Jakson · WP Minute (industry only).

##### Pee-Aye Creative (Nelson Miller) — bookmarks

Site: [peeayecreative.com](https://www.peeayecreative.com/) · YouTube: [Pee-Aye Creative](https://www.youtube.com/channel/UCXKnzrWvbMTJTfvLS8-7cfA) · [Nelson Lee Miller](https://www.youtube.com/channel/UCCDzkbXlvG3LnFXVq4HvcVQ) · Courses: [catalog](https://www.peeayecreative.com/course-catalog/) · [FREE Make Divi Responsive](https://www.peeayecreative.com/product/make-divi-responsive-course/)

**Caveat from research:** Many classic Pee-Aye posts teach **CSS Class + custom CSS**. For client-editable Divi 5 we still prefer **native VB / Sticky / design variables** first; treat `pa-*` CSS recipes as a developer layer only.

| Resource | Why it matters for us |
|----------|------------------------|
| [TB header transparent over content](https://www.peeayecreative.com/divi-theme-builder-header-transparent-background/) + [YT](https://www.youtube.com/watch?v=f_Klz4EKlY8) | Absolute + transparent section/menu — mostly native, no CSS Class required |
| [Stick any section to top](https://www.peeayecreative.com/how-to-make-any-divi-section-stick-to-the-top-when-scrolling/) | Prefer **Scroll Effects → Stick To Top** over `Position: Fixed` |
| [Shrink header on scroll](https://www.peeayecreative.com/how-to-shrink-the-divi-header-menu-when-scrolling/) | Sticky-state sizing patterns |
| [Hide header until scroll](https://www.peeayecreative.com/how-to-hide-the-divi-theme-builder-header-until-scroll-and-then-show-as-sticky/) | Reveal-on-scroll chrome |
| [Header color change on scroll](https://www.peeayecreative.com/how-to-change-the-color-of-a-fixed-divi-header-menu-when-scrolling/) + [YT](https://www.youtube.com/watch?v=0V-e71txujY) | Older CSS/jQuery `pa-header`; comments push Divi sticky instead |
| [Missing BG settings on parallax](https://www.peeayecreative.com/missing-divi-background-image-settings-on-parallax-sections/) | **Avoid parallax** if clients need blend/size/position/overlay without CSS Classes |
| [Exploring Divi 5 features](https://www.peeayecreative.com/exploring-the-new-divi-5-features/) | Variables, presets, Flex/Grid, Loop Builder, Command Center |
| [Reusable Divi site template + Assistant](https://www.peeayecreative.com/how-to-create-a-reusable-divi-site-template-for-new-installs-using-divi-assistant/) | Global Colors + TB + presets export for new clients |
| [Import/export Divi 5 variables](https://www.peeayecreative.com/how-to-import-and-export-divi-5-variables/) | Brand tokens clients don’t break by editing one-off styles |

Other sticky tutorials: [Elegant Themes sticky options](https://www.elegantthemes.com/blog/divi-resources/how-to-create-a-sticky-header-with-divis-sticky-options) · [Divicio.us Divi 5 sticky](https://divicio.us/tutorials/menu/how-to-create-a-sticky-header-in-divi/) · [YT sticky + transparent](https://www.youtube.com/watch?v=dtfCb5-A4zo)

##### Client-editable patterns (from Pee-Aye research)

- **Design system in Divi 5:** Global Colors + design variables + module/option presets — clients change tokens, not CSS files.
- **Theme Builder owns chrome:** Headers/footers live in TB; page Content modules stay simple for clients.
- **Prefer native motion:** Stick To Top + Absolute transparent headers over Fixed + jQuery.
- **Backgrounds clients can swap:** Image + gradient/`overlaysImage`/blend via Background settings; skip parallax when blend/overlay must stay in VB.
- **Content via fields when possible:** Dynamic Content so phone/hours/hero image update in WP, not locked modules.
- **CSS Class = developer layer:** Document any `pa-*` / `ds-*` hooks; don’t expect clients to edit Custom CSS.
- **Simplify VB for clients (optional plugin):** Builder Experience Helper workspaces — hide Advanced noise, rename modules, embed help videos by role.

##### Plugin watch (do not install until operator asks)

| Plugin | One-liner | URL |
|--------|-----------|-----|
| **Divi Builder Experience Helper** | Divi 5 workspaces: hide/rename clutter, pin what clients need, help videos by role | [product](https://www.peeayecreative.com/product/divi-builder-experience-helper/) |
| **Divi Assistant** | Big toolkit (admin + builder utilities, import/export, maintenance) | [product](https://www.peeayecreative.com/product/divi-assistant/) · [docs](https://www.peeayecreative.com/docs/divi-assistant/) |
| **Divi Migration Helper** | Free guided Divi 4→5 migration + checks | [product](https://www.peeayecreative.com/product/divi-migration-helper/) |
| **Divi Dynamic Content Helper** | Fills dynamic-content gaps so fields drive more modules | [product](https://www.peeayecreative.com/product/divi-dynamic-content-helper/) |
| **Divi Responsive Helper** | Extra VB responsive controls without custom CSS | [product](https://www.peeayecreative.com/product/divi-responsive-helper/) |
| **Divi Image Helper** | Image title/caption/overlay/aspect without CSS | [product](https://www.peeayecreative.com/product/divi-image-helper/) |
| Helper Series hub | Full Pee-Aye helper catalog | [category](https://www.peeayecreative.com/product-category/divi-plugins/helper-series/) |

Also: WP SiteLauncher (client collab inside WP) — separate Pee-Aye brand. Paid courses worth knowing: [Beginner](https://www.peeayecreative.com/product/divi-beginner-course/), [Theme Builder](https://www.peeayecreative.com/product/divi-theme-builder-course/), [Beyond The Builder](https://www.peeayecreative.com/product/beyond-the-builder-ultimate-divi-website-course/).

#### 4.12 Sticky FE experiment + gold hamburger (2026-07-18)

**Hamburger / close (done):** `.ds-nav-toggle span` (open bars + X when `aria-expanded="true"`) now use **`#D3B670`** / `--hero-accent`. Child theme **v0.2.7**. Measured FE: `rgb(211, 182, 112)`.

**Divi sticky experiment (again, with cache clear):**

1. Wrote layout **30** sticky `position: top` + sticky-state BG `rgba(10,10,11,0.85)` + `zIndex: 200` via `iawm_divi_page_write`.
2. Cleared `wp-content/et-cache` + WP object cache.
3. Temporarily disabled CSS `.et-l--header { position: sticky }` for a fair test.

**Measured on front page:**

| Check | Result |
|-------|--------|
| Sticky attrs in post_content 30 | Present (`"position":"top"`) |
| Sticky-state CSS `.et_pb_sticky { background…0.85 }` | Emitted |
| `script-library-sticky-elements.js` | **Not loaded** |
| `window.diviElementStickyData` / `et_pb_sticky_elements` | **null** |
| Header after scroll | Scrolls away (`headerTop` negative); no `et_pb_sticky` class |

**Conclusion:** IAWB/raw `page_write` still cannot activate Divi’s sticky FE pipeline for this Theme Builder header (same gap as §4.9). Sticky-state styles are stored; the sticky **script + registry** never publish.

**Restored:** CSS sticky on `.et-l--header` (v0.2.7). Divi sticky attrs **left on** layout 30 (harmless until VB activates them).


#### 4.13 Brand System page — ET walls looked terrible (2026-07-18)

**Symptom:** “Design system” URLs showed white teaching layouts (Fluid Scale / Quiet houses / sparse preset stacks). Operator said they looked terrible even after a first rebuild attempt.

**Cause (stacked):**
1. Launch **Preset-Pages** + Fluid **Type Spec** are ET *teaching inventories* for a *light* kit — not a DSZ brand wall.
2. Our Heading token is Warm Off-White `#F5F0E8` (dark UI) → broken contrast on their white canvases.
3. Hero CSS targeted every page’s `.et_pb_section:first-of-type` (full `100vh`) — later scoped to `#ds-hero`.
4. Logged-in admins can still **view drafts** by pretty URL — pages 48/49/50 kept appearing after “draft” status.
5. First rebuild stuffed HTML into a Divi **text** module → mangled markup (block JSON leak, form tags stripped).

**Fix (verified — operator: “MUCH better”):**
- CSS reference wall: https://digitalstudioz.local/dsz-brand-system/ (page **54**)
- Child theme: `page-dsz-brand-system.php` + `inc/brand-system-markup.php` + `.ds-brand*` CSS
- Trashed 48/49/50; `template_redirect` 301 from old slugs → brand system
- Do **not** re-import Launch Variables/TB over Gold & Grey / header 30 / footer 31

**Later:** Divi-editable SoT = page **57** — see **§4.14**.

**Canonical write-up:** `divi-wp-dev/DIVI5-Launch-Preview-Pages.md`.

**Do not:** treat Launch Preset-Pages as the brand look; paste large brand HTML into Divi Text modules.


#### 4.14 Divi-native brand wall + agent compose gotchas (2026-07-18)

**Goal:** All real pages Divi-editable; brand wall uses modules + Variables/presets where possible.

| Page | Role |
|------|------|
| **57** `/dsz-brand-system-divi/` | **SoT** — VB editable · Fluid presets · text variables · hex section/card/chip BGs |
| **54** `/dsz-brand-system/` | CSS reference only · builder **off** |

**Problems → solutions (verified):**

| # | Symptom | Root cause | Fix |
|---|---------|------------|-----|
| 1 | “Use Divi Builder” on 54 = infinite spinner | PHP template, not Divi blocks | Builder off on 54; edit **57** |
| 2 | Front of 57 dumped raw `<!-- wp:divi/…` JSON | Raw `<` in attrs → kses escapes nested modules to `&lt;!--` | `\u003c`/`\u003e` after `json_encode` + **`wp_slash`** on save |
| 3 | 57 white canvas; no swatch paint | `$variable()` on section/chip BG didn’t emit module CSS in `et-cache/57` | **Hex** for section/card/chip BGs; variables for **text**; purge et-cache |
| 4 | Thin white line down CSS page 54 | Divi `#main-content .container::before` (1px sidebar gutter) | Child CSS v**0.3.4** kills `::before`/`::after`; full-width `#left-area` |
| 5 | Wanted Home CTAs + dual title + rounded cards | Preset buttons alone ≠ Home chrome | `.ds-btn-primary` / `.ds-btn-ghost` HTML; `ds-brand-title-gold` span; column radius **12px** all corners |

**Rebuild script:** `Divi-Xtraz/dsz-branded/_build-brand-system-divi.php` (Local PHP **8.4.10**).

**Verify checklist:**
1. Page 57 sections computed BG `rgb(18,18,18)`; unified CSS has `#121212!important` on post sections.
2. Eight color chips (~88px) with gold/satin/charcoal/etc.
3. Title HTML contains `ds-brand-title-gold`; CTAs `.ds-btn-primary` + `.ds-btn-ghost` in post (not only header).
4. Page 54: `getComputedStyle(container,'::before').display === 'none'`.
5. VB: `/dsz-brand-system-divi/?et_fb=1` loads Save / Add Module (not spinner).

**Canonical:** `divi-wp-dev/DIVI5-Launch-Preview-Pages.md` (Agent gotchas A–E).

**Next human/VB step (client-editable path):** Theme Builder → Header → section `#ds-header` → Advanced → Scroll Effects → Sticky → **Stick to Top** → enable transition → set Sticky-state background → **Save** in Visual Builder. Then re-check Brave for sticky script. If VB Save works, remove CSS sticky.

---

## 5. Files & paths that matter

| Path | Why it matters |
|------|----------------|
| `DigitalStudioz-WP/.cursor/mcp.json` | Project MCP wiring |
| `DigitalStudioz-WP/.cursor/docs/MCP-SETUP.md` | Short MCP status + scripts |
| `DigitalStudioz-WP/.cursor/scripts/fix-acf-wpmcp-mcp.py` | Rewrite mcp.json from DigitalStudioz `.env.local` |
| `DigitalStudioz-WP/.cursor/scripts/wire-novamira-mcp.py` | Novamira env wiring |
| `DigitalStudioz-WP/.cursor/scripts/wire-iawm-config.py` | IAWB config |
| `app/public/wp-content/mu-plugins/wpmcp-server-registrar.php` | wpmcp remote endpoint |
| `app/public/wp-content/themes/dgtl-digitalstudioz-theme/` | Child theme (no empty `index.php`) |
| `…/dgtl-digitalstudioz-theme/style.css` | Gold & Grey tokens + hero (`#ds-hero`) + brand walls + `::before` kill + `.ds-btn` (v**0.3.4+**) + TB header/footer |
| `…/dgtl-digitalstudioz-theme/page-dsz-brand-system.php` | CSS Brand System template (page **54**) |
| `…/dgtl-digitalstudioz-theme/inc/brand-system-markup.php` | CSS wall HTML (`dsz_get_brand_system_markup`) |
| `…/Divi-Xtraz/dsz-branded/_build-brand-system-divi.php` | Rebuild Divi SoT page **57** (hex BGs + vars + `\u003c` + wp_slash) |
| `…/dgtl-digitalstudioz-theme/js/core-scripts.js` | Enqueued front JS stub |
| `…/dgtl-digitalstudioz-theme/acf-json/` | ACF Local JSON + acf-mcp target |
| `…/uploads/2026/07/ds-demo-hero.jpg` | Hero background (Media ID `22`) |
| `D:\Hermes\tools\wordpress-mcp\` | Shared clones (acf-mcp, IAWB, etc.) |
| `DigitalStudioz/.cursor/docs/WARM-PREMIUM-PALETTE.md` | Design tokens |
| `DigitalStudioz/.cursor/docs/divi-wp-dev/WP-Divi5-Dev-PRD-*.md` | Product / architecture PRDs |

---

## 6. Watch-outs (things that look fine but bite)

| Watch-out | Detail |
|-----------|--------|
| **Hero CSS vs Theme Builder** | Bare `.et_pb_section:first-of-type` / `.home .et_pb_section…` also hits `.et-l--header` and `.et-l--footer` (each has its own first section). Scope hero to `.et-l--post`. See §4.7 |
| **Divi sticky on TB header** | Writing `module.decoration.sticky` via IAWB emits sticky-state CSS but does **not** enqueue sticky FE script / `et_pb_sticky_elements`. Keep CSS sticky on `.et-l--header`. See §4.9 |
| **Duplicate TB defaults** | Templates **32** and **37** both marked default — live chrome is **32→30/31**. Writes to **35** won’t show until TB points at them |
| Agent Tools **Regenerate Config** | Can wipe manually merged MCP servers in project mcp.json |
| Next.js `npm run backup:*` | Backs up Next.js profile only — not LocalWP |
| PDF playbooks | May lag Markdown; prefer `.md` PRDs + this catalog |
| Dual mcp-adapter | Causes notices / confusion — one adapter path only |
| Putting WP secrets in global Cursor MCP | Cross-contaminates non-WP Hermes projects |
| Empty theme PHP stubs | Especially `index.php`, `header.php`, `footer.php` without real markup |
| **ET Preset-Pages ≠ brand wall** | Launch teaching layouts clash with dark Gold & Grey. Divi SoT = **/dsz-brand-system-divi/** (57); CSS ref = 54. See §4.13–§4.14 |
| **Logged-in draft URLs** | Admins can still open draft pages by slug — trash + 301 when retiring bad walls |
| **Divi Text module HTML dumps** | Large free-form brand HTML gets mangled (kses / encoding). Prefer child page template (54) or scripted modules with `\u003c` escape (57) |
| **Scripted Divi saves** | Raw `<` in attrs → front JSON dump; skip `wp_slash` → breaks `\u003c`. Hex for section BGs if variables don’t emit CSS. See §4.14 |
| **Divi `.container::before`** | 1px sidebar gutter line on non-VB templates — kill on brand pages (v0.3.4). See §4.14 |
| Design fork | Do not reintroduce Tactile Brutalism tokens into Divi globals |

---

## 7. Quick verify (after any MCP / theme change)

1. Browser: `https://digitalstudioz.local/` loads (not blank).
2. Cursor: each of the five MCP servers listed above responds.
3. WP-CLI via `local-wp`: `core version`, `theme list`, `plugin list`, `option get page_on_front`.
4. Child theme active; Divi parent present; no empty child `index.php`.
5. Front page option points at Home (or intended static page).
6. With Theme Builder: header/footer sections are content-height (`min-height` not `100vh`); only `.et-l--post` hero is full viewport.

---

## 8. Related docs

| Doc | Use when |
|-----|----------|
| `MCP-SETUP.md` (WP) | Daily MCP status / wiring scripts |
| `divi-wp-dev/ISSUES-RESOLVED.md` | One-line index of fixes |
| `divi-wp-dev/DIVI5-Launch-Preview-Pages.md` | Brand walls 54+57 + ET incident + **agent compose gotchas** |
| `divi-wp-dev/DIVI5-Section-Patterns.md` | Jon language → Divi section patterns / build checklist |
| `WARM-PREMIUM-PALETTE.md` | Colors / radius / type |
| `WP-Divi5-Dev-PRD-MASTER-COMPLETE.md` | Full product architecture |
| `WP-Divi5-Dev-PRD-FINAL-v3.md` | Condensed PRD |
| `WP-Plugin-Divi5-Module-Dev-Playbook.md` | Custom Divi 5 modules |
| `START-HERE.md` / `TRUTH.md` | Profile orientation |
| `ReCall.md` / `project-log.md` | Session narrative |

---

## 9. How to append a new finding

```markdown
### Template
| YYYY-MM-DD | What you saw | Why it happened | Exact fix | What not to do |
```

Also: one row in `ISSUES-RESOLVED.md`, one bullet in `ReCall.md` if the session was non-trivial, and sync the WP mirror of this catalog.

---

*Catalog created 2026-07-18 from LocalWP + Divi 5 MCP green session + Home static front page setup.*
