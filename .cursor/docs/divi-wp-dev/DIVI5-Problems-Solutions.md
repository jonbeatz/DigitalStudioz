# Divi 5 / LocalWP — Problems & Solutions (master log)

**Site:** `https://digitalstudioz.local/` · **Home:** page **15** · **TB:** header **30** / footer **31** / template **32**  
**Child theme:** `dgtl-digitalstudioz-theme` **0.8.2**  
**Updated:** 2026-07-18  
**SoT for this file:** when docs disagree on WP/Divi chrome issues, **this document wins** (then START-HERE / ReCall).

**Companions:** [DEV-WORKFLOW.md](./DEV-WORKFLOW.md) · [DIVI5-Native-Audit.md](./DIVI5-Native-Audit.md) · [NAV-HTML-REVERT.md](./NAV-HTML-REVERT.md) · [DIVI5-Layout-Polish-Log.md](./DIVI5-Layout-Polish-Log.md) · [DIVI5-Home-Native-Pass.md](./DIVI5-Home-Native-Pass.md) · [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) · WP day-to-day MCP: `Local-WP/DigitalStudioz-WP/.cursor/docs/MCP-SETUP.md` · Next spacing SoT: `lib/experience-engine/engine.tsx`

**Operator shortcut:** after a fix session, say **`log fixes`** → [Log-Fixes.md](../../prompts/Log-Fixes.md). Then **`npm run theme:sync`**. Before polish claims: **`npm run wp:smoke`**.

---

## Quick index

| # | Topic | Theme / status |
|---|--------|----------------|
| [A](#a-navigation-glass--opacity) | Nav glass / opacity | 0.5.x |
| [B](#b-page-freeze-page-unresponsive) | Page freeze (MutationObserver) | 0.5.4 |
| [C](#c-proper-menu-module-migration) | Proper Divi Menu (vs HTML nav) | 0.6.0 |
| [D](#d-mobile-hamburger--drawer) | Mobile hamburger / frost drawer | 0.6.1–0.6.4 |
| [E](#e-home-page-module-inventory) | Home = real Divi modules? | verified |
| [F](#f-spacing-vs-nextjs-text-stacks--section-pad) | Spacing vs Next.js (flex gap!) | **0.7.0–0.7.2** |
| [G](#g-mcp--plugin-stack) | MCP / plugin stack | 2026-07-18 |
| [H](#h-pee-aye-creative-plugins) | Pee-Aye plugins (buy/skip) | skip for now |
| [I](#i-protect-list--never-again) | Protect list / never-again | standing |
| [J](#j-header-menu-links-right-next-to-cta) | Header menu → right next to CTA | **0.7.3** |
| [K](#k-mobile-stack--back-to-top-clearance) | Mobile stack + back-to-top | **0.7.4** / **0.8.2** |
| [L](#l-theme-git-mirror--home-smoke--cadence) | Theme git mirror + Home smoke + cadence | **ops 2026-07-18** |
| [M](#m-native-audit-re-grade-074) | Native audit re-grade | **~93% @ 0.7.4** |
| [N](#n-footer-menu-modules--mobile-center) | Footer Menu modules + mobile center | **0.7.5** |
| [O](#o-footer-credit-columns--responsive-grid) | Footer credit columns + responsive grid | **0.7.6–0.8.1** |
| [P](#p-hero-background--fal-klein--divi-cache) | Hero BG (fal Klein) + Divi et-cache | **Home 15 · 2026-07-18** |

### Theme version cheat sheet (chrome)

| Ver | What shipped |
|-----|----------------|
| 0.5.4 | Removed MutationObserver freeze |
| 0.5.5 | Sticky OFF; scrolled glass **0.28** |
| 0.6.0 | Divi Menu + Button CTA in TB 30 |
| 0.6.1 | CSS gold hamburger / X |
| 0.6.2 | Drawer hide-by-default; close on resize >980 |
| 0.6.3 | Drawer `absolute; top:100%` flush under bar |
| 0.6.4 | Mobile drawer **light frost** (0.94 + blur) |
| 0.6.5 | Section pad lock → Next `S.sec` 100px |
| 0.6.6 | Kill Divi **`row-gap:30px`**; exact Next text-stack margins (CSS lock) |
| 0.7.0 | Spacing unlocked into Divi VB; CSS lock removed; footer **31** native; TB dup 37 deleted |
| 0.7.1 | Intro→cards dead space closed; Contact CTA pad; Featured side-card gap/height; Services gutters |
| 0.7.2 | Process intro `min-height:200px` scoped to **card columns only** (`:has(.ds-svc-num)`) |
| 0.7.3 | Desktop menu links pinned **right** next to Start a Project (middle col grows) |
| **0.7.4** | Mobile stack Services/Process/About/Stats/Footer; back-to-top raised clear of footer credit |
| **0.7.5** | Footer TB 31 Menu modules (WP 9/10/11); mobile footer centered; `menu.advanced.menuId` gotcha |
| **0.7.6–0.7.7** | Credit bar → Divi `1/2\|1/2` Text modules; tighter letter-spacing; **`wp_slash` required** on TB writes |
| **0.8.0** | ≤980: brand centered full-width above; SERVICES\|COMPANY\|CONNECT in one row (no 4-col squish) |
| **0.8.1** | Menu trio content centered under brand (not flush-left) |
| **0.8.2** | Back-to-top clickable at page bottom — raise `.ds-back-top-row` above Divi flex `z-index:4` grid |
| ops | Theme git mirror (`assets/wp-theme/`) + `theme:sync` / `theme:backup` + `wp:smoke` + [DEV-WORKFLOW.md](./DEV-WORKFLOW.md) |

---

## A. Navigation glass / opacity

| Problem | Root cause | Solution |
|---------|------------|----------|
| Nav looked solid after scroll | Stacked opaque layers: TB section BG + `--bg-void` on header section + shell opacity | Glass **only** on `header.et-l--header`; children forced transparent; TB 30 BG `rgba(0,0,0,0)` |
| 0.94 → 0.74 “no change” | Too subtle on dark pages | Scrolled alpha **0.28** + blur |
| Sticky opacity felt backwards | Divi sticky paints at scrollY≈0 | Sticky **OFF** on TB 30; CSS fixed on `.et-l--header` |
| Admin-bar detach | Divi sticky section `top:0` vs header `top:32px` | Disable sticky; force section `position:relative` |

**Files:** `style.css`, `functions.php` `#ds-nav-glass-override`, `_fix-header-opacity.php`, `_fix-header-disable-sticky.php`

**Never again:** Do not put opaque backgrounds on header *children* and expect the shell opacity alone to look like glass.

---

## B. Page freeze (“Page Unresponsive”)

| Problem | Root cause | Solution |
|---------|------------|----------|
| Tab hung / black screen | `MutationObserver` on header section called `clearHeaderChildBgs()` → wrote `style` → re-fired forever | **Removed** MutationObserver + style-clearing loop (v0.5.3→0.5.4) |

**Never again:** Do not reintroduce observers that write the same attributes they watch. Close frozen tabs — old JS stays in memory until the process dies.

---

## C. Proper Menu module migration

| Problem | Root cause | Solution |
|---------|------------|----------|
| Hardcoded HTML links | Free-form Text module | Rebuild TB **30**: Logo Text + **Divi Menu** (WP Primary **4**) + Button CTA |
| Menu order wrong | WP items unsorted | Reorder → Work / Services / Process / About / Contact |
| Need revert path | — | Backup JSON + [NAV-HTML-REVERT.md](./NAV-HTML-REVERT.md) + `_restore-header-30-from-backup.php` |

**Build:** `_build-header-menu-native.php`  
**Edit links:** Appearance → Menus → **Primary** (do not auto-add pages)

---

## D. Mobile hamburger / drawer

| Problem | Root cause | Solution | Ver |
|---------|------------|----------|-----|
| No gold hamburger | Divi glyph `::before { content: none }` | CSS 3-bar / X on `.mobile_menu_bar` | 0.6.1 |
| Drawer always visible; X “doesn’t close” | CSS forced `display:block` even when closed | Hide by default; show **only** `.is-open` / `.opened` | 0.6.2 |
| Desktop + mobile lists when stretched | Drawer stayed open >980px | Hide globally; JS `setOpen(false)` on resize >980 | 0.6.2 |
| Drawer too low / gap under bar | `position:fixed` + CSS var top + padding | Mount on `header.et-l--header`; **`absolute; top:100%`**; pad-top **0**; header `overflow:visible` | 0.6.3 |
| Drawer felt like a solid slab | `rgba(…, 0.98)` | **Light frost:** `rgba(10,10,11,0.94)` + `backdrop-filter: blur(18px)` (denser than scrolled top bar ~0.28) | **0.6.4** |
| Divi click fights toggle | TB header often **does not** enqueue `script-library-menu.js` | Child JS capture-phase toggle + clone WP menu into drawer | 0.6.0+ |

**Verify:** ≤980px → gold bars → open (X + flush frost) → X closes → widen >980 → desktop links only.

**Files:** `style.css` (mobile drawer block), `js/core-scripts.js`

---

## E. Home page module inventory

Page **15** is **100% Divi 5 blocks** (Services/Work/Process are not one HTML blob).

| Section | Class / id | Pattern |
|---------|------------|---------|
| Hero | `.ds-hero` `#ds-hero` | Text + Heading + Buttons |
| Work | `.ds-work` `#work` | Intro + featured col + side cards |
| Services | `.ds-services` `#services` | Intro + 6 card columns (num/title/desc) |
| Process | `.ds-process` `#process` | Intro + 5 step columns |
| About / Stats / Quote / Contact | matching `.ds-*` | Text/Heading (+ image / buttons) |

**Header** = Menu + Button (C). **Footer** TB **31** = native Text/Heading modules (**0.7.0**); optional later: link lists → WP Menu modules.

---

## F. Spacing vs Next.js (text stacks + section pad)

### F.1 Symptom

Home looked “airy but wrong”: huge gaps **between** DIGITAL STUDIO → headline → sub → buttons; same on Work/Services/Process intros and inside cards — not matching Next.js `engine.tsx`.

### F.2 Root causes (two layers)

1. **Section outer pad too small (then locked):** Divi modules authored ~**56px**; Next `S.sec` / `S.secA` = **100px** (tablet 80 / mobile 60). Fixed in **0.6.5**.
2. **The big one (0.6.6):** Divi 5 columns are `display:flex; flex-direction:column` with default **`row-gap: 30px`**. That gap is **added on top of** module `margin-bottom`.  
   - Next wants label→title **12px**  
   - Live was **12 + 30 = 42px** (and title→sub **24+30=54**, sub→CTA **40+30=70**)

Secondary contributors:

- `#work .et_pb_module { margin:0 }` (ID specificity) overrode weaker “add margin” rules — featured/card stacks stayed at **0** until selectors used `#work …` with higher specificity.
- Side cards used `justify-content: space-between` → CTA stretched to bottom of tall column.
- Measuring with Playwright / CDP `getBoundingClientRect` gaps is the reliable QA method.

### F.3 Solution path (0.6.6 → 0.7.0)

**0.6.6 (CSS lock):** Forced `row-gap:0` + exact Next margins in child CSS (`!important`) so Live matched Next while we learned the Divi gap trap.

**0.7.0 (Divi-native unlock):** Same numbers written into Home **15** Divi attrs (`module.decoration.spacing` + column `layout.rowGap:0` + section pads). Footer **31** rebuilt as native Text/Heading modules (no HTML blob). Child CSS spacing lock **removed** — only a soft `row-gap:0` safety net remains. Button pad still needs a thin CSS bridge (Customizer beats module Spacing).

Backups: `wp-content/uploads/dsz-backup-home-15-pre-0.7.0.html`, `dsz-backup-footer-31-pre-0.7.0.html` · IAWB backup_id **1**.

**PHP gotcha:** nested `&$refs` / `ensure()` helpers that mutate Divi JSON often produce empty `"value":[]`. Always assign **full path objects** when writing `decoration.spacing` / `layout.rowGap`. Local MCP blocks `wp eval-file` — run scripts with Local PHP 8.4.10 + site `PHPRC` (`ufauI-YD2`).

### F.4 Measured targets (hero / column — after 0.7.0)

| Stack | Next.js target | Measured (0.7.0+) |
|-------|----------------|----------|
| Hero label → title → sub → CTA | 12 / 24 / 40 | **12 / 24 / 40** |
| Column `row-gap` | 0 | **0px** |
| Work intro label → h2 → sub | 12 / 16 / (+ to grid) | Divi module margins |
| Section pad (desktop) | 100 | Divi section Spacing |
| Featured overlay | 8 / 4 | Divi module margins |
| Side cards | 8 / 8 / link+24 | Divi module margins (refined 0.7.1) |
| Service cards | num 16 → title 12 | Divi module margins |

**SoT constants** (`engine.tsx`): `S.sec` 100px · `S.secTight` 80 · quote 140 · `S.card` pad 32 · `S.label` mb 12 · `S.h2` mb 16 · `S.sub` mb 48.

### F.5 Spacing polish (0.7.1) — intro dead space, Contact CTAs, Featured sides

#### Symptoms (operator screenshots)

| Area | Felt wrong |
|------|------------|
| Contact | “Start a Project” / “View GitHub” too close under body copy |
| Work / Services / Process | Huge **dead space** between last intro line and content boxes |
| Featured Projects side stack | Cards too tall + **touching** each other |

#### Root causes

| Layer | What was happening |
|-------|---------------------|
| **Section flex `row-gap`** | Work/Services/Process sections still had ~**40–60px** section-level gap between intro row and cards row — the main leftover after unlocking module margins |
| **Intro sub margin** | Subhead `margin-bottom` still ~**48px** (Next `S.sub`) — too much once section gap also applied |
| **Contact CTA spacing** | Nested-row / button-row `margin-top` often **ignored on FE**; spacing must live on the **paragraph above** (`margin-bottom`) |
| **Featured side cards** | Nested-row `margin` dropped on FE; column `row-gap` not honored without a light CSS bridge; card pad still **32px** (felt tall) |

#### Fixes that worked

| Change | Where | Target / measured |
|--------|--------|-------------------|
| Contact body → buttons | Paragraph `margin-bottom: **32px**` (not CTA row `margin-top`) | **32px** ✓ |
| Intro → cards dead space | Intro text mb **48 → 20**; section `rowGap` **~40–60 → 16px** | Work/Services intro gap **~36px** (was **~136**) |
| Featured side stack | Card pad **32 → 20**; force **16px** between stacked nested rows (attrs + CSS `!important` on `.ds-work-bento` last col) | sideGap **32**, sidePad **20** |
| Services / Process cards | Pad **20px**; horizontal gutter **~28px** | svcGutter **28**, svcPad **20** |

**Theme CSS bridges (keep light):** soft section `row-gap:16px` on `#work` / `#services` / `#process`; bento side-column `row-gap` / first nested-row `margin-bottom` with `!important` because Divi FE drops nested-row margins.

Scripts (LocalWP uploads / Divi-Xtraz history): `dsz-spacing-tweaks-0.7.1.php`, `dsz-spacing-tweaks-0.7.1b.php`.

### F.6 Process intro still tall (0.7.2)

#### Symptom

After 0.7.1, Work/Services intro→cards ≈ **36px**, but Process still ≈ **104px**.

#### Root cause

Child theme rule:

```css
.ds-process .et_pb_row .et_pb_column { min-height: 200px !important; }
```

applied to **every** Process column — including the **intro text column**. Computed `minHeight:200px` left ~**88px** empty under the subhead. Content JSON had **no** `minHeight:200px` on that column; it was pure CSS.

#### Fix

Scope min-height to numbered **card** columns only:

```css
.ds-process .et_pb_row .et_pb_column:has(.ds-svc-num) {
  min-height: 200px !important;
}
```

Measured after: Process intro gap **36px**; intro col `minHeight` **1px** / height **132px**.

**Never again:** Do not put portrait `min-height` on `.ds-process .et_pb_column` without excluding the intro row (use `:has(.ds-svc-num)` or a `.ds-process-card` class).

### F.7 Best practices (spacing debugging)

1. **Measure, don’t guess.** CDP/Playwright: `bottom→top` gap between last intro text and first card / button.
2. **Check three layers:** module `margin` → column `row-gap` → **section** `row-gap` / flex gap between rows.
3. **Contact / CTA stacks:** put space on the **module above** (`margin-bottom`); nested-row `margin-top` is unreliable on Divi 5 FE.
4. **Prefer Divi attrs** for client-editable rhythm; use **thin CSS bridges** only where FE drops nested-row / column gap.
5. **Hard-refresh** after theme CSS (`filemtime` cache-bust in `functions.php`).
6. **Protect TB 30/31/32**; backup Home before bulk attr writes (IAWB + HTML snapshot).

### F.8 Never again

- Do **not** only set `margin-bottom` on modules without checking computed **`row-gap`** on the parent column **and** the parent **section**.
- Do **not** re-add a full CSS `!important` spacing lock — edit spacing in Visual Builder first.
- Do **not** force `min-height` on every column in a section that also has an intro text row.
- Do **not** rely on nested-row `margin-top` for Contact CTA separation — use paragraph `margin-bottom`.
- After spacing changes: hard-refresh + measure gaps (Playwright or DevTools).
- PHP scripts that mutate Divi attrs must assign full `decoration.spacing.*.value` objects (broken refs → empty `value:[]`).

---

## G. MCP / plugin stack

### G.1 Capability scoreboard (probed 2026-07-18)

| MCP / plugin | Status | Best at | Weak at | Keep? |
|--------------|--------|---------|---------|-------|
| **IA Webmaster Bridge** | Ready (~90 tools) | Site ops; Divi **tree** read/write; Theme Builder; menus; plugins; backups | No Divi schema validator | **Primary** |
| **AI Editor for Divi 5** | Ready (14 tools) | Validate-then-save layouts; guides/recipes | `list_divi_pages` often empty; create/CSS/menu = **Premium** | **Secondary** (free tier OK) |
| **Local WP (Agent Tools)** | Ready after fix | WP-CLI, logs, start/stop, health | Needs Local app `:24842`; Cursor may need toggle / `mcp_auth` | **Keep** |
| **ACF MCP** | Partial | Field-group / CPT modeling | `spawn wp ENOENT` | ACF work only |
| **Novamira / wpmcp** | MCP **disabled** in mcp.json | Admin UI still active | Remote MCP `ECONNREFUSED` | Leave disabled until HTTP routes fixed |

### G.2 AI Editor for Divi 5 (Divi5Lab)

| | |
|--|--|
| Plugin | `ai-editor-divi5` v3.0.0 — [product](https://divi5lab.com/plugins/divi-5-ai-editor) · [Cursor guide](https://divi5lab.com/guides/connect-cursor-to-divi-5) |
| Key | DigitalStudioz `.env.local` → `AI_EDITOR_DIVI_API_KEY` (never commit) |
| MCP URL | `https://digitalstudioz.local/wp-json/ai-editor-divi5/v1/mcp` |
| Config home | **Only** `Local-WP/DigitalStudioz-WP/.cursor/mcp.json` (gitignored) |
| Transport | Streamable HTTP — **POST** initialize OK; plain **GET** returns 404 (normal) |
| Write test | Draft page 89 via IAWB → `validate_layout` + `update_page_layout` → deleted; Home untouched |
| Free vs Pro | Free: get / validate / update existing. Premium: `create_page`, `set_custom_css`, menus, front page |

**Duplicate MCP trap:** Registering the same server in Local WP mcp.json **and** DigitalStudioz mcp.json **and** `~/.cursor/mcp.json` shows **three** green entries. Keep **one** (Local WP project).

### G.3 Local WP MCP “broken in Cursor”

| Problem | Root cause | Solution |
|---------|------------|----------|
| Tools discovery error / red | Stale session + competing dead MCPs; config missing `type` | Bridge on `:24842` was healthy; set `"type":"http"`; run `mcp_auth`; disable Novamira/wpmcp MCP entries (`_disabledMcpServers`) |
| tools/list 400 from PowerShell | Missing `MCP-Protocol-Version` / session handling | Use Cursor client or curl with session header; don’t trust raw GET |

**Verify:** `get_site_info`, `wp_cli` → `core version`, `site_health_check`.

**Never:** Agent Tools **Regenerate Config** casually — wipes merged MCP entries.

### G.4 Task → tool cheat sheet

| Job | Use |
|-----|-----|
| WP-CLI / restart / logs / health | **local-wp** |
| Edit Home / TB / menus / plugins | **IAWB** |
| Validate-then-save Divi layouts | **AI Editor** |
| Glass nav / hamburger / frost / spacing rhythm | **Child theme CSS/JS** |
| Bulk rebuild scripts | PHP under `.cursor/assets/Divi-Xtraz/` |
| ACF schema | **acf-mcp** |

**Rule:** One MCP **writer** per edit (don’t fight IAWB + AI Editor on the same save).

Env registry: `AI_EDITOR_DIVI_API_KEY` in `.cursor/docs/ENV-VARS-REFERENCE.md`.

---

## H. Pee-Aye Creative plugins

Hub: [peeayecreative.com/divi-5](https://www.peeayecreative.com/divi-5/)

For this brochure Warm Premium home: **do not buy a PAC stack now.**

| Plugin | Verdict |
|--------|---------|
| Responsive Helper | Maybe later if VB responsive editing hurts |
| Dynamic Content Helper | Later if CPT/dynamic pages ship |
| Builder Experience / Assistant | Low ROI vs IAWB + child CSS |
| Tabs / TOC / Social / Search / Carousel / Events / Timer / Contact Form | Skip — not in current IA |

---

## I. Protect list / never-again

1. Do **not** re-import Launch Variables over live Gold & Grey.  
2. Do **not** casually rewrite TB **30 / 31 / 32** without backup.  
3. Do **not** re-add MutationObservers that mutate watched `style`.  
4. Do **not** ignore Divi column **`row-gap`** (or section flex gap) when debugging vertical spacing.  
5. Do **not** register the same MCP in three Cursor configs.  
6. Prefer Divi modules for **content**; child CSS for chrome Divi cannot do (glass, hamburger, frost) + **thin** bridges where FE drops nested-row gaps.  
7. Brand walls: page **57** = Divi SoT; page **54** = CSS ref (builder off).  
8. After theme CSS edits: hard-refresh; theme `filemtime` busts cache via `functions.php`.  
9. Do **not** apply Process portrait `min-height` to intro columns — scope with `:has(.ds-svc-num)`.  
10. Contact CTA air: use **paragraph `margin-bottom`**, not nested-row `margin-top`.  
11. Desktop header: middle Menu column must **`flex-grow:1`** and Divi `.et_pb_menu__wrap` must be **`justify-content:flex-end`** — `ul` flex-end alone is not enough (nav stays content-width).  
12. Do **not** assume Divi 5 rows stack on phone — they stay `flex-direction:row; flex-wrap:nowrap` until child CSS forces column stack.  
13. Fixed back-to-top at `bottom:24px` will cover footer credit — use **≥72px** (88px phone).

---

## J. Header menu links right (next to CTA)

### J.1 Symptom

Desktop nav: logo far left, **Start a Project** far right, but Work→Contact sat mid-bar with a large gap before the button.

### J.2 Inventory (TB 30 — freeze-safe status)

| Module | Role | Status |
|--------|------|--------|
| **Text** `.ds-header-logo` | Logo — HTML-in-Text (`<a class="ds-logo">` dual-color) | Intentional (not Image/Menu logo) |
| **Menu** `.ds-primary-menu` | WP Primary menu **4** | Real Divi Menu since **0.6.0** |
| **Button** `.ds-header-cta` | Start a Project | Real Divi Button since **0.6.0** |
| MutationObserver / style loops | Freeze risk | **Removed 0.5.4** — `core-scripts.js` only scroll class + mobile drawer |

### J.3 Root cause

Row used `justify-content: space-between` with three columns all effectively `flex-grow:0`. Menu column stayed content-width (~369px) in the middle. Even with `ul { justify-content:flex-end }`, Divi’s `.et-menu-nav` stays content-width inside a full-width wrap that defaulted to **`justify-content:flex-start`** — so the link cluster hugged the **left** of the middle column.

### J.4 Fix (theme **0.7.3**)

```css
/* ≥981px */
.ds-header-row { justify-content: flex-start; gap: 0 24px; }
.et_pb_column_0_tb_header { flex: 0 0 auto; }   /* logo */
.et_pb_column_1_tb_header { flex: 1 1 auto; }   /* menu grows */
.et_pb_column_2_tb_header { flex: 0 0 auto; }   /* CTA stays put */
.et_pb_menu__wrap { justify-content: flex-end; } /* pin cluster to right of middle col */
```

Measured: Contact → CTA ≈ **24px**; CTA `left` unchanged (~1272 @ 1440vw).

### J.5 Never again

- Don’t only set `ul { justify-content:flex-end }` — fix the **wrap** / column grow.
- Don’t move the CTA column; grow the menu column instead.

---

## K. Mobile stack + back-to-top clearance

### K.1 Symptoms

1. Back-to-top button overlapped footer credit **“Built with DigitalStudioz”**.
2. Phone layouts looked skinny/squashed: Services 3-up, Process 5-up, About 2-up, Stats 4-up, Footer 4-up — titles truncated.

### K.2 Root causes

| Issue | Cause |
|-------|--------|
| Back-to-top overlap | `.ds-back-top { bottom: 24px }` sat on the footer bar credit line |
| Squashed grids | Divi 5 content rows: `display:flex; flex-direction:row; flex-wrap:nowrap` on phone; columns `flex: 0 1 auto` shrink instead of stacking. Work bento already had a stack rule; Services/Process/About/Stats/Footer did not |

### K.3 Fixes (theme **0.7.4**)

**Back-to-top:** `bottom: 72px` desktop · `88px` mobile — measured no overlap with credit (vertical clearance + button on the right).

**Stack ≤980px** (full-width columns, `flex-direction:column` on content rows):

- `#services` / `#process` card rows (not intro row)
- `#about` / `#stats`
- Footer `.ds-footer-grid` (TB 31)

**Tablet 768–980:** Services 2-up · Stats 2×2 · Process stays stacked (5 steps).

Verified @ 390px: service titles full (“3D Web Experiences”); process titles Concept…Iterate; about cols 312px; footer cols 358px.

### K.4 Never again

- After building multi-column Divi rows, **always** add a ≤980px stack rule (or set Divi responsive column widths in VB and verify FE).
- Measure with CDP: column widths + `flexDirection` at `width:390`.
- Keep back-to-top above footer credit; don’t rely on horizontal miss alone (credit can be wider on desktop).
- **Stacking:** Divi flex footer rows use `z-index:4` (grid). A fixed `.ds-back-top` with high z-index still loses hit-tests if its parent row is `z-index:auto` — promote `.ds-back-top-row` (theme **0.8.2**: `z-index:50` + `pointer-events:none` on row, `auto` on visible button).

### K.5 Click dead at absolute bottom (theme **0.8.2**)

**Symptom:** ↑ works mid-page; fails when scrolled fully to footer.

**Cause:** `.ds-footer-grid { z-index:4 }` painted over the button’s hit target; button’s own `z-index` was trapped under the sibling row stacking context.

**Fix:** `.ds-back-top-row { z-index:50; pointer-events:none }` · `.ds-back-top { z-index:10050 }` · `.is-visible { pointer-events:auto }`.

---

## L. Theme git mirror + Home smoke + cadence

### L.1 Problems

| Problem | Root cause |
|---------|------------|
| Child theme lived only under LocalWP (not in DigitalStudioz git) | Easy to lose CSS/JS history; hard to review diffs / restore on another PC |
| No automated Home layout regression | Manual eyeballing missed nav gap / stack / back-top regressions |
| Long “update all docs” prompts | Needed a short post-fix ritual + clear measure→fix→verify loop |

### L.2 Solutions (2026-07-18)

| Piece | Location / command |
|-------|-------------------|
| Live SoT (edit here) | `Local-WP/DigitalStudioz-WP/.../themes/dgtl-digitalstudioz-theme` |
| Git mirror | `DigitalStudioz/assets/wp-theme/dgtl-digitalstudioz-theme` |
| Pull / zip / restore | `npm run theme:sync` · `theme:backup` · `theme:push` |
| Zip root | `G:\Hermes_Project_BackUpz\DigitalStudioz\themes\` |
| Home smoke | `npm run wp:smoke` — Contact→CTA ≤80px @1440; Services/Process stack @390; back-top vs credit |
| Cadence doc | [DEV-WORKFLOW.md](./DEV-WORKFLOW.md) |
| Chat shortcut | **`log fixes`** → [Log-Fixes.md](../../prompts/Log-Fixes.md) (includes theme:sync step) |

### L.3 Visual QA baseline (0.7.4 — no theme bump)

| Viewport | Observed |
|----------|----------|
| 1440 | Contact→CTA **24px**; Services 3-up; Process 5-up |
| 768 | Hamburger + CTA; Services 2+1 wrap; Stats 2×2; Process/About stack |
| 390 | Full stacks; back-top `bottom:88px`; ~**44px** clear above footer credit |

### L.4 Never again

- After theme CSS/JS edits: **`theme:sync`** before claiming “committed.”
- After layout chrome: **`wp:smoke`** (Local site must be running).
- Prefer **`log fixes`** over dumping long “document everything” paragraphs.
- Do **not** put the mirror under `.cursor/assets/` (gitignored) — use repo-root `assets/wp-theme/`.

---

## M. Native audit re-grade (0.7.4)

**Full write-up:** [DIVI5-Native-Audit.md](./DIVI5-Native-Audit.md)

| Metric | Baseline (0.6.6) | Now (0.7.4) |
|--------|------------------|-------------|
| Overall Divi-native | ~88% | **~93%** |
| Home modules | ~95% | ~96% |
| TB chrome | ~80% | **~90%** |

**Resolved since baseline:** D1 spacing lock · D3/D14 footer Menus (**0.7.5**) · D7 orphans · D8 dead JS · D12 theme git.  
**Open:** D2 typography · D5 button pad.  
**Keep:** D4 glass/drawer · D10 hex BGs · D11 mobile stack CSS.

---

## N. Footer Menu modules + mobile center

### N.1 Problems

| Symptom | Root cause |
|---------|------------|
| Footer link columns were HTML `<ul>` in Text modules (D14) | Native gap after 0.7.0 module rebuild |
| Scripted Menu swap showed **Primary** links in all three columns | Divi reads `attrs.menu.advanced.menuId` — omitting `advanced` → empty ID → falls back to `primary-menu` ([MenuUtils.php](file:///D:/Hermes/projects/Local-WP/DigitalStudioz-WP/app/public/wp-content/themes/Divi/includes/builder-5/server/Packages/ModuleLibrary/Menu/MenuUtils.php)) |
| Mobile footer looked flush-left / skinny | Chrome reset zeroed row padding; Divi Menu adds `et_pb_text_align_right-phone`; stack was left-aligned |

### N.2 Fixes (theme **0.7.5**)

| Fix | Detail |
|-----|--------|
| TB **31** | Replaced 3× `ds-footer-links` Text modules with `divi/menu` bound to WP menus **9 / 10 / 11** (Services / Studio / Connect) |
| Attr path | `"menu":{"advanced":{"menuId":{"desktop":{"value":"9"}}}}` (not `menu.menuId`) |
| CSS | Style footer menus as vertical lists; hide hamburger; gutters 24/20px; phone **center** stack; tablet brand full-width + 3 link cols |
| Backup | `Local-WP/.../.cursor/assets/footer-31-pre-menu-swap.html` |

### N.3 Never again

- Always set **`menu.advanced.menuId`** when composing Menu modules — verify FE `ul#menu-*` slug, not Primary.
- After footer chrome: check **390** midpoints (heading/links ~`vw/2`) — `text-align:center` on column alone is not enough against Divi phone right-align.
- Edit footer links via **Appearance → Menus** (9/10/11), not HTML.

---

## O. Footer credit columns + responsive grid

### O.1 Problems

| Symptom | Root cause |
|---------|------------|
| © / Built with stacked or flex-only in one Text | Credit bar was one HTML flex div, not Divi columns |
| `wp_update_post` without `wp_slash` corrupted logo to literal `u003ca…` | WP stripslashes destroys Divi `\uXXXX` JSON escapes in block comments |
| Phone 4-col row: logo overlapped SERVICES; columns ~78px | Equal `1/4` on ~390px is too narrow for brand blurb + menus |
| Menu trio flush-left under centered brand | Left-aligned text inside equal thirds reads as “pushed left” |

### O.2 Fixes (theme **0.7.6 → 0.8.1**)

| Ver | Fix |
|-----|-----|
| **0.7.6–0.7.7** | TB 31 credit row → `1/2,1/2` Text modules (`.ds-footer-bar-copy` / `.ds-footer-bar-credit`); backups `footer-31-pre-credit-columns.html` + revert script |
| **wp_slash** | Always `wp_update_post([…, 'post_content' => wp_slash($content)])` when patching Divi layouts |
| **0.8.0** | ≤980: brand full-width **centered** above; three menu cols in a row with restored padding/gaps |
| **0.8.1** | Menu headings + links **centered** in each col; row `justify-content:center` |

### O.3 Never again

- Never `wp_update_post` Divi `post_content` without **`wp_slash`** — restore from backup immediately if `u003c` appears in FE text.
- Do not force 4 equal footer columns on phone — brand on its own row first.
- Desktop stays `1/4×4` left-aligned; phone/tablet use brand-above + centered trio.
- Hostinger go-live (when ready): **WPvivid full files+DB** — not theme zip only; not MSC Node FTPS. Domain `digitalstudioz.com` already on account.

---

## P. Hero background — fal Klein + Divi cache

### P.1 Problems

1. Hero used **`MSC-Login1.jpg`** (MSC branding) — wrong brand for DigitalStudioz Warm Premium.
2. After swapping the Divi section `background.image.url` in `post_content`, FE still showed the old URL until **et-cache** cleared.

### P.2 Fixes (2026-07-18)

| Step | Detail |
|------|--------|
| Model | fal.ai **`fal-ai/flux-2/klein/4b`** (FLUX.2 [klein] 4B — Jon: “Kein 4B”) |
| Chosen asset | **`ds-hero-klein-a.jpg`** (media **130**) — kept; atelier HD / B discarded for live |
| Locals | `DigitalStudioz/media/hero/` (`ds-hero-klein-a/b/hd.jpg`, `ds-hero-atelier-hd.jpg`) |
| Write | Replace URL in Home **15** with **`wp_slash`**; then `et_core_clear_wp_cache(15)` + wipe `wp-content/et-cache/` |
| Overlay | Existing gold→void linear gradient + `overlaysImage` unchanged |

### P.3 Never again

- After changing Divi background image URLs in `post_content`, **always clear Divi et-cache** (or FE keeps the old CSS `url(...)`).
- Do not ship MSC/other-profile assets as DSZ hero backgrounds.
- Prefer Warm Premium dark void + muted gold atmosphere; keep center quiet for type.

---

## Verify checklist (after chrome / spacing / MCP changes)

- [ ] Hard-refresh Home; hero stack feels tight (not “30px air” between lines) — ≈ **12 / 24 / 40**  
- [ ] Work / Services / Process: intro→cards ≈ **36px**  
- [ ] Contact: body→buttons ≈ **32px**  
- [ ] Featured side cards: not touching; pad ~**20**; gap ~**16–32**  
- [ ] Process intro column not stuck at `min-height:200px`  
- [ ] Desktop: menu links sit next to Start a Project (~24px gap); CTA unmoved  
- [ ] ≤980px: Services/Process/About/Stats **stack** (no skinny multi-col)  
- [ ] Back-to-top does **not** cover “Built with DigitalStudioz”  
- [ ] Back-to-top **clicks** at absolute page bottom (not only mid-scroll) — §K.5  
- [ ] Hero BG is **`ds-hero-klein-a.jpg`** (not MSC-Login1) — hard-refresh after et-cache clear — §P  
- [ ] Footer desktop: 4-col left; © left / Built with right (`1/2\|1/2`)  
- [ ] Footer ≤980: brand centered above; three menus **centered** under brand; no logo/SERVICES overlap  
- [ ] Footer links editable via WP menus **9/10/11** (not Primary)  
- [ ] **`npm run wp:smoke`** PASS (when Local site up)  
- [ ] **`npm run theme:sync`** after CSS/JS; commit `assets/wp-theme/` when asked  

---

*Master log maintained for DigitalStudioz LocalWP + Divi 5. Append new rows; bump theme version in the cheat sheet when chrome ships. Operator: **`log fixes`** after each fix session.*
