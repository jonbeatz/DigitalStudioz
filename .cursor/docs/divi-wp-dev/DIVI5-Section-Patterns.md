# Divi 5 section patterns — DigitalStudioz vocabulary

**Purpose:** When Jon says a plain-language layout (“header with centered text and a subtext”), map it to our **preferred Divi 5 build** — Variables / OG presets / Element presets first; child CSS only for chrome Divi can’t own cleanly.

**Status:** Living — append patterns as we ship sections.  
**Related:** [DIVI5-Design-Variables-GoldGrey.md](./DIVI5-Design-Variables-GoldGrey.md) · [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md) · catalog §4.8–§4.14

---

## Honest split: what is site-wide vs page-local

### Already site-wide (Divi / Customizer)

| Layer | Where | Applies to whole site? |
|-------|--------|-------------------------|
| Primary / Secondary / Heading / Body / Link colors | Theme Customizer → Variable Manager | **Yes** — when modules use those slots / variables |
| DSZ* named swatches | Variable Manager colors | **Yes** — when picked in modules |
| Fluid number vars (`text-xs`…`text-4xl`, spacing clamps) | Variable Manager numbers | **Yes** — when fields bind to them |
| Fonts (Mulish heading/body) | Variables / Customizer | **Yes** — defaults for new text |
| Fluid + Launch presets (H1–H6, Body, Button, …) | Preset Manager | **Yes** — when assigned to modules (not automatic on raw HTML) |
| Theme Builder header/footer | TB template 32 → 30/31 | **Yes** — global chrome |

### Brand System pages — which to use

| Page | URL | Divi VB? | Variables / presets? |
|------|-----|----------|----------------------|
| **Divi SoT (edit here)** | `/dsz-brand-system-divi/` (ID **57**) | **Yes** | Text: `$variable(gcid-*)` · BG: **hex** (reliable) · Fluid OG · Home `.ds-btn` |
| CSS reference | `/dsz-brand-system/` (ID **54**) | **No** (builder off — VB hangs) | Child PHP + `style.css` mirror |

**Rule going forward for real pages (Home, Services, brand walls, etc.):**  
`Design Variables → Option Group Presets → Element Presets → Divi modules (Flex)`  
- Text colors: bind Variables.  
- Section/card/chip backgrounds: prefer **hex** until variable BGs are proven to emit CSS on that page (catalog §4.14).  
- CTAs matching Home: `.ds-btn-primary` / `.ds-btn-ghost` (child CSS) until Button Element presets are locked 1:1.  
Child CSS also OK for: sticky header chrome, gold hamburger, dual-tone logo, dual-title span, killing Divi `.container::before`.  
Do **not** ship marketing pages as PHP templates when Divi can own them.

---

## How to speak patterns (Jon → agent)

| Jon says | Pattern ID | Preferred build |
|----------|------------|-----------------|
| “Centered header with a subtext” | `hero-center-stack` | See below |
| “Left text, big title, dual CTAs” (Home) | `hero-left-stack` | Home `#ds-hero` (exists) |
| “Gold button + ghost button” | `cta-pair-gold-ghost` | Prefer Home `.ds-btn-primary` + `.ds-btn-ghost` (verified on page 57); Button Element presets when locked |
| “Eyebrow above the title” | `eyebrow-label` | Text or Heading with H6 / Eyebrow OG preset; gold, tracked uppercase |
| “Dark section, off-white heading, grey body” | `surface-dark-copy` | Section BG **hex** `#121212` / charcoal; Heading/Body **variables** |
| “Brand / type / color wall” | `style-wall` | `/dsz-brand-system-divi/` (57) — see pattern below |
| “Dual color Gold & Grey title” | `title-dual-gold` | Heading HTML + `.ds-brand-title-gold` span (child CSS) |

---

## Pattern library

### `hero-left-stack` — Home hero (shipped)

**Jon language:** “Hero like the Next.js Warm Premium home — left text, gold title accent, dual CTAs, full-bleed bg.”

| Piece | Best practice |
|-------|----------------|
| Shell | Divi **Section** `#ds-hero` · Flex center · `minHeight` 100vh (+ child CSS `100svh` scoped to `#ds-hero` only) |
| BG | Divi section image + gradient overlay (native), not CSS `::before` |
| Content | Free-form HTML in **Text** module *or* Heading + Text + Button modules with presets |
| Classes | `.ds-hero-content` / `.ds-hero-eyebrow` / `.ds-hero-title` / `.ds-hero-sub` / `.ds-btn-primary` / `.ds-btn-ghost` |
| CSS | Child theme — OK for this chrome until fully preset-driven |
| Don’t | Apply hero `100vh` via bare `:first-of-type` (breaks TB / other pages) |

**Live:** Home page `15` · catalog §4.5–§4.10

---

### `hero-center-stack` — Centered title + subtext (requested vocabulary)

**Jon language:** “New header / hero with **centered** text and a **subtext**.”

| Piece | Best practice (Divi-first) |
|-------|----------------------------|
| Section | Dark BG (Variable: DarkGrey1 / void) · Flex · `alignItems: center` · `justifyContent: center` · padding generous |
| Layout | One row, one column · text-align **center** |
| Eyebrow (optional) | Small Text · OG **Eyebrow** / H6 preset · Primary/Satin gold |
| Title | **Heading** module · H1 or H2 OG preset · Heading color variable (off-white) · Fluid size var if bound |
| Subtext | **Text** module · Body / Body Large preset · Body color (LightGrey) · max-width ~36–40rem, centered with auto margins |
| CTA (optional) | Button Element preset (gold primary) ± ghost stacked |
| Prefer over | Hard-coded hex in module; giant free-form HTML unless matching Home chrome |

**CSS escape hatch:** only if Divi can’t center a constrained subtext column cleanly — prefer Flex + module alignment first.

---

### `cta-pair-gold-ghost`

**Jon language:** “Primary and ghost buttons” / “same buttons as the homepage.”

| Prefer (shipped) | Later |
|------------------|--------|
| HTML in Text module: `.ds-btn.ds-btn-primary` + `.ds-btn.ds-btn-ghost` (Home child CSS — gold gradient, 8px radius, brightness hover / gold border hover) | Button Element OG presets locked 1:1 with Home |

**Live:** Home `#ds-hero` · Brand Divi page **57** UI section.

---

### `style-wall` — Brand system (shipped)

**Jon language:** “Brand / type / color wall editable in Divi.”

| Piece | Build |
|-------|--------|
| Page | **57** `/dsz-brand-system-divi/` (not PHP 54) |
| Sections | Hex BG `#121212` · padding ~48–64px |
| Cards | Column BG `#2A2826` · radius **12px all corners** · light border · padding ~24–28px |
| Swatches | Text module chip: hex BG + `minHeight` 88px + radius 10px; labels Caption preset + variables |
| Type | Charcoal card column; Heading H1–H6 Fluid presets; Body / Caption |
| Title | `Gold & <span class="ds-brand-title-gold">Grey</span>` |
| CTAs / fields | `cta-pair-gold-ghost` + `.ds-brand__field*` shells |
| Rebuild | `_build-brand-system-divi.php` — see Launch-Preview **Agent gotchas** |

**Don’t:** Edit page 54 in VB; use `$variable()` alone for section BGs without verifying `et-cache` CSS.

---

### `eyebrow-label`

**Jon language:** “Small label above the headline.”

- Module: Text or Heading  
- Style: uppercase, wide tracking, gold (`Primary` / Satin)  
- Preset target: Font Body **Eyebrow** or Heading **H6** from Fluid pack  

---

### `surface-dark-copy`

**Jon language:** “Dark content section with heading and paragraph.”

- Section BG: prefer **hex** `#121212` / `#2A2826` (reliable CSS emit — §4.14); Variables OK after verify  
- Heading → Heading Text Color variable + H2/H3 preset  
- Body → Body Text Color + Body preset  
- Spacing → number variables (`space-*`) when wiring fields  

---

## Build checklist (every new section)

1. **Name the pattern** (add a row here if new).  
2. **Variables first** for text colors; **hex** for section/card BGs until variable BGs verified on that page.  
3. **OG preset** for type/spacing/border; **Element preset** for full module look.  
4. **Flex** section/row unless Grid is required.  
5. **IDs/classes** for any CSS chrome (`#ds-…` / `.ds-…`).  
6. **Child CSS** only if Divi can’t express it — document why in this file.  
7. **Scripted saves:** `\u003c` escape + `wp_slash`; purge `et-cache/{id}`.  
8. **Never** Import Launch TB templates on live.  

---

## Gap to close (explicit)

| Gap | Next step |
|-----|-----------|
| Variable-driven **section** backgrounds | Re-test `$variable(gcid-dsz-darkgrey1)` on BGs after Divi updates; until then keep hex on walls |
| Home hero still free-form HTML + child CSS | Gradually bind CTAs/type to Element/OG presets (Home already uses `.ds-btn`) |
| Default Element presets (star) not set | After gold button + body look locked, star defaults in Preset Manager |
| Button Element presets ≠ Home `.ds-btn` 1:1 | Optional: lock presets to match gradient/hover, then retire HTML CTAs on brand wall |

---

## Changelog

| Date | Note |
|------|------|
| 2026-07-18 | Created. Clarified Brand System page = CSS/template SoT, not Divi-module Variables. Seeded `hero-left-stack`, `hero-center-stack`, CTA/eyebrow/surface patterns. |
| 2026-07-18 | Page **57** Divi SoT shipped. Added `style-wall`, dual-title, Home `.ds-btn` CTAs, hex-BG rule, agent save gotchas. |
