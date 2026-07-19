# Divi 5 / LocalWP — Problems & Solutions (master log)

**Site:** `https://digitalstudioz.local/` · **Home:** page **15** · **TB:** header **30** / footer **31** / template **32**  
**Child theme:** `dgtl-digitalstudioz-theme` **0.7.2**  
**Updated:** 2026-07-18  
**SoT for this file:** when docs disagree on WP/Divi chrome issues, **this document wins** (then START-HERE / ReCall).

**Companions:** [NAV-HTML-REVERT.md](./NAV-HTML-REVERT.md) · [DIVI5-Layout-Polish-Log.md](./DIVI5-Layout-Polish-Log.md) · [DIVI5-Home-Native-Pass.md](./DIVI5-Home-Native-Pass.md) · [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) · WP day-to-day MCP: `Local-WP/DigitalStudioz-WP/.cursor/docs/MCP-SETUP.md` · Next spacing SoT: `lib/experience-engine/engine.tsx`

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
| **0.7.2** | Process intro `min-height:200px` scoped to **card columns only** (`:has(.ds-svc-num)`) |

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

---

## Verify checklist (after chrome / spacing / MCP changes)

- [ ] Hard-refresh Home; hero stack feels tight (not “30px air” between lines) — ≈ **12 / 24 / 40**  
- [ ] Work / Services / Process: intro→cards ≈ **36px** (not ~136+)  
- [ ] Contact: body→buttons ≈ **32px**  
- [ ] Featured side cards: not touching; pad ~**20**; gap ~**16–32**  
- [ ] Process intro column not stuck at `min-height:200px`  
- [ ] ≤980px: hamburger → frost drawer flush under bar → X closes → widen clears drawer  
- [ ] Scroll: nav glass lightens (~0.28); no freeze  
- [ ] Cursor MCP: single `ai-editor-divi5`, `local-wp` green, IAWB green  

---

*Master log maintained for DigitalStudioz LocalWP + Divi 5. Append new rows; bump theme version in the cheat sheet when chrome ships.*
