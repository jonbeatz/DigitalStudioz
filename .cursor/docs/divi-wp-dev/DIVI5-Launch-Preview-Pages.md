# DSZ Brand System pages + Launch freebie notes

**Date:** 2026-07-18 (updated — Divi SoT v0.3.4 + agent save/CSS gotchas)  
**Site:** `digitalstudioz.local`  
**Hub:** `.cursor/docs/divi-wp-dev/`  
**Catalog:** [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) §4.13–§4.14  
**Child theme:** `dgtl-digitalstudioz-theme` **v0.3.4+**

---

## Living brand walls (two pages)

### 1) Divi-editable SoT — edit here

**URL:** https://digitalstudioz.local/dsz-brand-system-divi/  
**VB:** https://digitalstudioz.local/dsz-brand-system-divi/?et_fb=1

| Detail | Value |
|--------|--------|
| Page ID | **57** |
| Title | DSZ Brand System (Divi) |
| What it is | Dark Gold & Grey wall — **real Divi 5 modules** |
| Modules | Section / Row / Column + Heading / Text (+ Home `.ds-btn` HTML for CTAs) |
| Text colors | `$variable(…gcid-…)$` — Primary, Heading, Body, Soft Umber, etc. |
| Section / card / chip BGs | **Hex** (`#121212`, `#2A2826`, swatch hex) — Divi emits CSS reliably |
| Presets | Fluid OG: H1–H6, Body, Body Large, Eyebrow, Caption |
| Buttons | Same as Home: `.ds-btn-primary` / `.ds-btn-ghost` (child CSS — gradient, 8px radius, hover) |
| Look | Dual-color **Gold & Grey** title · 12px rounded charcoal cards · 8 chips · field shells |
| Builder | `_et_pb_use_builder=on` · **default** template |
| Rebuild | `Local-WP/.../Divi-Xtraz/dsz-branded/_build-brand-system-divi.php` |

Changing Primary / Heading / Body in Variable Manager **does** restyle text on this page. Section/card paint uses hex so Visual Builder + dynamic CSS stay stable (see § Agent gotchas).

### 2) CSS reference — not Divi-editable

**URL:** https://digitalstudioz.local/dsz-brand-system/

| Detail | Value |
|--------|--------|
| Page ID | **54** |
| Title | DSZ Brand System (CSS reference) |
| Implementation | `page-dsz-brand-system.php` + `inc/brand-system-markup.php` + `.ds-brand*` in `style.css` |
| Builder | `_et_pb_use_builder=off` — **never** “Edit with Divi” (infinite spinner) |
| Body class | `page-dsz-brand-system` |

**Section vocabulary:** [DIVI5-Section-Patterns.md](./DIVI5-Section-Patterns.md)

Old ET wall URLs **301** → `/dsz-brand-system/`:  
`/dsz-design-system-elements/` · `/dsz-design-system-og-presets/` · `/dsz-type-spec-fluid/`

---

## Agent gotchas — Divi 5 page compose (verified 2026-07-18)

These bit us while building page **57**. Follow this when scripting Divi layouts.

### A) Raw HTML in block JSON → front shows code dump

| | |
|--|--|
| **Symptom** | Front shows raw `<!-- wp:divi/text {"builderVersion":…` as visible text (white page of JSON). |
| **Cause** | Raw `<p>` (or any `<…>`) inside module attrs → `wp_insert_post` / kses **HTML-escapes** nested module comments to `&lt;!-- wp:divi/…`. Outer section/row/column parse; leaves become text. |
| **Fix** | After `wp_json_encode( $attrs, JSON_UNESCAPED_SLASHES \| JSON_UNESCAPED_UNICODE )`, replace `<`→`\u003c` and `>`→`\u003e` in the JSON string. Prefer plain text when HTML isn’t required. |
| **Also** | Always pass `wp_slash( $content )` into `wp_insert_post` / `wp_update_post` (WP expects slashed data; otherwise `\u003c` backslashes get stripped). |

### B) Variable-only section backgrounds → white page

| | |
|--|--|
| **Symptom** | Modules render, but sections stay **white**; swatch chips invisible / zero paint. `:root { --gcid-dsz-darkgrey1: #121212 }` exists, but **no** `background-color` rules for `.et_pb_section_*`. |
| **Cause** | Complex pages + `$variable(gcid-…)` on section/column backgrounds sometimes fail to emit module CSS in `et-cache/{id}/`. Simple one-section tests can work; brand wall did not. |
| **Fix** | Use **hex** for section / card / chip backgrounds (`#121212`, `#2A2826`, `#D3B670`, …). Keep `$variable(gcid-*)` for **text** colors. Purge `wp-content/et-cache/{pageId}/` after rebuild. |
| **Verify** | Unified CSS contains `.et-l--post … .et_pb_section_N{background-color:#121212!important}`; computed section BG `rgb(18,18,18)`. |

### C) “Edit with Divi” hangs on page 54

| | |
|--|--|
| **Symptom** | Blue spinner forever on `/dsz-brand-system/?et_fb=1`. |
| **Cause** | PHP template wall — not Divi layout blocks. VB never initializes. |
| **Fix** | `_et_pb_use_builder=off` on page 54. Edit page **57** instead. |

### D) White vertical line on CSS reference page

| | |
|--|--|
| **Symptom** | Thin light line down the right of `/dsz-brand-system/` (aligned ~content edge). |
| **Cause** | Divi’s sidebar gutter: `#main-content .container::before { width:1px; background:#e2e2e2; height:100% }` — fires on non-VB templates even with **no** sidebar. |
| **Fix** | Child `style.css` v0.3.4+: kill `::before`/`::after` on brand page containers; force `#left-area` / article / entry full width. |
| **Verify** | `getComputedStyle(container,'::before').display === 'none'` and `width === '0px'`; no full-height 1–2px elements. |

### E) Dual-color title + Home buttons

| Need | Approach |
|------|----------|
| **Gold & Grey** (Grey in gold) | Heading HTML: `Gold & <span class="ds-brand-title-gold">Grey</span>` + child CSS `.page-id-57 .ds-brand-title-gold { color: var(--gold1) }` |
| Primary / Ghost CTAs | Same markup as Home: `<a class="ds-btn ds-btn-primary">` / `.ds-btn-ghost` inside a Text module (unicode-escaped HTML). Colors, 8px radius, gradient, hover live in child CSS. |
| Rounded cards | Column decoration: BG `#2A2826`, border-radius **all four corners** `12px`, light 1px border, padding ~24–28px. |
| Field shells | HTML spans `.ds-brand__field-label` / `.ds-brand__field` (kses-safe; shared CSS with page 54). |

### Do / don’t

| Do | Don’t |
|----|-------|
| Edit **`/dsz-brand-system-divi/`** in VB | Open Divi Builder on page 54 |
| Hex for section/card/chip BGs; variables for text | Assume `$variable()` on every BG will emit CSS |
| `wp_slash` + `\u003c` escape when HTML is required | Raw `<p>` in block JSON without escaping |
| Purge `et-cache/{id}` after scripted rebuilds | Paste giant brand HTML into one Text module |
| Kill Divi `.container::before` on brand templates | Import Launch Variables/TB over Gold & Grey / 30/31/32 |

---

## Incident log — ET walls looked terrible (page 54 origin)

### What Jon saw
White / sparse teaching pages (Fluid Scale, Quiet houses, low-contrast stacks). Drafts still opened for logged-in admins.

### Root causes

| # | Problem | Why it hurt |
|---|---------|-------------|
| 1 | Launch Preset-Pages / Fluid Type Spec | ET *teaching* inventories for a *light* kit — not DSZ brand |
| 2 | Heading `#F5F0E8` on white canvases | Token clash |
| 3 | Hero `:first-of-type { min-height:100vh }` | Leaked to every page |
| 4 | Drafts still viewable by slug when logged in | Old walls kept appearing |
| 5 | HTML dump into Divi Text | Mangled (JSON leak, tags stripped) |

### Fix (verified — “MUCH better”)
PHP template wall page **54** + `.ds-brand*` CSS; trash 48–50 + 301; hero scoped to `#ds-hero`.

---

## How pages are built

**Divi SoT:**

```
Local-WP/.../Divi-Xtraz/dsz-branded/_build-brand-system-divi.php
  → page 57 · dsz-brand-system-divi · builder on · default template
  → Local PHP 8.4.10 (not Winget)
```

**CSS reference:**

```
dgtl-digitalstudioz-theme/
  page-dsz-brand-system.php
  inc/brand-system-markup.php
  functions.php          ← body_class; 301; page-57 full-width classes
  style.css v0.3.4+      ← .ds-brand* · ::before kill · dual-title · .ds-btn
```

---

## Launch freebie JSON (reference only)

**Source:** `Local-WP/.../Divi-Xtraz/divi-5-design-system-official-launch/JSON/`

| File | On live DSZ |
|------|-------------|
| Preset-Pages | Trashed (48–50) — not brand wall |
| Presets.json | Merged (keep for modules) |
| Global-Variables | **Do not** overwrite Gold & Grey |
| Theme-Builder-Templates | **Do not** import (kills TB 30/31/32) |

---

## Related

- Variables / Customizer → [DIVI5-Design-Variables-GoldGrey.md](./DIVI5-Design-Variables-GoldGrey.md)  
- Patterns → [DIVI5-Section-Patterns.md](./DIVI5-Section-Patterns.md)  
- Index → [ISSUES-RESOLVED.md](./ISSUES-RESOLVED.md)  
- Catalog §4.13–§4.14 → [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md)
