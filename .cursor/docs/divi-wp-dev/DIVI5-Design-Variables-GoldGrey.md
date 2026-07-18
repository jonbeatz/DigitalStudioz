# Divi 5 Design Variables — Gold & Grey Implementation

**Date:** 2026-07-18  
**Site:** `digitalstudioz.local` (Live LocalWP build — protect TB header 30 / footer 31)  
**Assets:** `.cursor/assets/Divi-Xtraz/`  
**Brand palette (provisional):** Gold & Grey Sophistication (Jon — may change later)

---

## Verdict

| Pack | Role for DSZ | Import on live site? |
|------|----------------|----------------------|
| **Global Typography System — Fluid Scale** | Correct *structure* for type (clamp) + color slots + OG presets | **Yes — variables + presets first** |
| **Divi 5 Launch Design System** | Full teaching kit (hundreds of presets, pages, TB templates) | **No full dump on live** — sandbox only, or cherry-pick section layouts later |
| **DSZ remapped Variables JSON** | Fluid pack colors remapped to Gold & Grey | **Yes — use this instead of stock blue/orange** |

**Correct-way order (Pee-Aye / ET):**  
`Design Variables (colors + sizes) → Option Group Presets → Element Presets → layouts`  
Never paint hex on every module first.

---

## Palette → Divi semantic slots

| Your name | Hex | Divi Variable Manager label |
|-----------|-----|-------------------------------|
| **Gold1** | `#D3B670` | **Primary Color** (+ auto tints/shades) |
| **Slate Blue** | `#5B6F7A` | **Secondary Color** + **Link Color** |
| **Warm Off-White** | `#F5F0E8` | **Heading Text Color** (dark-site primary text) |
| **LightGrey** | `#817E79` | **Body Text Color** (muted / secondary text) |
| **DarkGrey1** | `#121212` | **DSZ DarkGrey1** + map “Black” / page BG |
| **Deep Charcoal** | `#2A2826` | **DSZ Deep Charcoal** (cards / surfaces) |
| **Satin Gold** | `#E8CD9A` | **DSZ Satin Gold** (hover / soft gold) |
| **Soft Umber** | `#8A7A6A` | **DSZ Soft Umber** (dividers / placeholders) |

**Notes on your palette (review):**

- Strong dark-premium set; Gold1 + DarkGrey1 + LightGrey match what we already ship on the hero/nav.
- **Slate Blue as links/secondary CTAs** is a deliberate cool counterpoint — keep for forms/charts; **primary buttons stay Gold1** (don’t make Secondary the main CTA).
- Warm Off-White `#F5F0E8` is slightly brighter than old Warm Premium cream `#e8e2d9` — fine for “for now.”
- DarkGrey1 `#121212` replaces void `#0a0a0b` — slightly softer; sync child CSS when you adopt Variables as SoT.
- Relative HSL tints on Primary/Secondary (built into Fluid pack) give you hover/glow variants without inventing more hex.

**Child CSS (temporary bridge):** keep `:root` tokens in `style.css` until modules use Variables; then thin CSS to structural-only (hamburger, sticky).

**Live status (2026-07-18):** Steps 1–2 + draft Type Spec **done** (agent API import + DB verify).

| Layer | Status |
|-------|--------|
| Customizer colors (Primary/Secondary/Heading/Body/Link) | ✅ Gold & Grey |
| DSZ* named swatches | ✅ 8 brand colors |
| Fluid number vars (`text-xs`…`text-4xl`, spacing) | ✅ 26 active clamps |
| Fonts | ✅ Heading + Body = Mulish |
| Typography presets | ✅ 30 module + 39 group (H1–H6, Body, Body Large/Small, Eyebrow, Caption, Chip, …) |
| Draft Type Spec page | ✅ ID **48** `DSZ Type Spec (Fluid Scale)` |

**Scripts (Local WP assets):**  
`Divi-Xtraz/dsz-branded/_import-fluid-presets.php` · `_verify-fluid-setup.php` · `_import-type-spec-page.php`

---

## Incident log — Design Variables import (2026-07-18)

### Symptom
After “importing” `DSZ-GoldGrey-Fluid-Global-Variables.json`, Variable Manager still showed Divi defaults:

- Primary / Secondary → `#2EA3F2`
- Heading / Body → `#666666`

Meanwhile Link / black / gray / **DSZ *** swatches looked partly correct. Hero gold still came from **child CSS / free-form HTML**, not from Primary.

### What we tried (and why it failed)

| Attempt | Result |
|---------|--------|
| **A. Divi Library → Import & Export** the variables JSON | Created library layout post `DSZ-GoldGrey-Fluid-Global-Variables`. Partially merged some colors + numbers into the DB. **Did not** set Primary/Secondary/Heading/Body in the UI. |
| **B. Write `gcid-primary-color` etc. into `et_divi['et_global_data']['global_colors']` via PHP** | Values appeared in raw option dump, but Variable Manager **still** showed `#2ea3f2` / `#666`. |
| **C. Exit + reopen VB after (B)** | Still blue Primary — proved UI was not reading those IDs from `et_global_data`. |

### Root cause (Divi 5.9 source)

In `Divi/includes/builder-5/server/Packages/GlobalData/GlobalData.php`:

1. **Primary / Secondary / Heading / Body / Link** map to **Theme Customizer** option names:

   | Variable Manager label | Customizer option | Default |
   |------------------------|-------------------|---------|
   | Primary Color | `accent_color` | `#2ea3f2` |
   | Secondary Color | `secondary_accent_color` | `#2ea3f2` |
   | Heading Text Color | `header_color` | `#666666` |
   | Body Text Color | `font_color` | `#666666` |
   | Link Color | `link_color` | `#2ea3f2` |

2. `GlobalData::get_global_colors()` **unsets** those five IDs from `et_global_data`, then **rebuilds** them from `et_get_option( accent_color | … )`.

3. `GlobalData::set_global_colors()` does the opposite correctly: when those IDs are in a payload, it calls `et_update_option( option_name, color )` and **removes** them from `et_global_data` before save.

So: writing only `et_global_data` for Primary is a no-op for the Variable Manager. Library import is the wrong door for a full variables package (ET docs: Variable Manager ↑↓ icon).

### Fix that worked

```text
et_update_option( 'accent_color', '#D3B670' );
et_update_option( 'secondary_accent_color', '#5B6F7A' );
et_update_option( 'header_color', '#F5F0E8' );
et_update_option( 'font_color', '#817E79' );
et_update_option( 'link_color', '#5B6F7A' );
```

Then clear Divi static resources + **full Exit / re-open Visual Builder** (VB caches bootstrap global colors until reload).

Script kept for reference (do not commit secrets):  
`Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/dsz-branded/_fix-customizer-colors.php`

### Correct import path next time

1. Visual Builder → **Variable Manager** → **↑↓** at top of panel → **Import** (not Divi Library).  
2. Or set the five Customizer colors manually / via `et_update_option`.  
3. Named brand swatches (DSZ Gold1, etc.) live in `et_global_data.global_colors` — scroll the Colors list.  
4. Trash leftover Library layout `DSZ-GoldGrey-Fluid-Global-Variables` when convenient (cosmetic clutter only).

### Operator verification (passed)

Screenshot 2026-07-18: Primary gold, Secondary slate, Heading off-white, Body grey, Link slate — matches palette.

---

## What’s in each download

### A) `divi-5-design-system-official-launch/`

Huge production kit:

- Global Variables (colors + spacing numbers — mostly **px / breakpoint**, not clamp)
- Hundreds of Element + Option Group presets (nested/stacked)
- Section + page layouts, Theme Builder templates, optional Customizer

**ET import order (sandbox):** Presets → Global Variables → Sections → Pages → Theme Builder → Customizer optional.

**Risk on live DSZ:** TB import **overrides** our custom header/footer. Skip TB + full Pages on live.

### B) `divi-5-global-typography-system/`

Focused type system — **pick ONE scale**:

| Scale | Best when |
|-------|-----------|
| **Fluid** (recommended) | Premium sites; one `clamp()` per style; smoother resize |
| **Fixed** | You want exact px per desktop/tablet/phone |

Each folder (import in order):

1. `1. …_Theme-Customizer.json` — font weights baseline  
2. `2. …_Global-Variables.json` — colors + font-size vars  
3. `3. …_Presets.json` — OG presets (heading/text/button/field)  
4. `4. …_Layout.json` — **reference page only** (Library → private draft page)

### C) `dsz-branded/DSZ-GoldGrey-Fluid-Global-Variables.json`

Generated from Fluid Scale variables with:

- Primary → `#D3B670`, Secondary → `#5B6F7A`
- Heading → `#F5F0E8`, Body → `#817E79`, Link → `#5B6F7A`
- Extra **DSZ *** named colors for the full 8-swatch palette

---

## Recommended path on **live** `digitalstudioz.local`

### Before anything

1. **WPvivid backup** (or Local snapshot).  
2. Export Theme Builder template **32** (layouts 30/31) as JSON backup.  
3. Do **not** import Launch `Theme-Builder-Templates.json`.

### Step 1 — Variables (Gold & Grey)

> **CRITICAL:** Import variables from **Variable Manager → ↑↓ import/export icon** (top of that panel), **not** Divi Library.  
> Library import only creates a layout post (e.g. `DSZ-GoldGrey-Fluid-Global-Variables`) and may partially merge colors — it will **not** reliably set Primary/Secondary/Heading/Body.

1. Open any page in Visual Builder → **Variable Manager** (left sidebar).  
2. Click the **↑↓ Import/Export** icon at the **top of the Variables panel**.  
3. **Import** tab → upload:  
   `Divi-Xtraz/dsz-branded/DSZ-GoldGrey-Fluid-Global-Variables.json`  
4. Confirm **Colors**: Primary gold, Secondary slate, Heading off-white, Body grey, plus DSZ* swatches (**scroll** — list is long).  
5. Spot-check **Numbers**: text-xs…text-4xl clamp sizes.  
6. Click **Save Variables** if shown.

*(Step 1 complete on live site 2026-07-18 — see § Incident log above.)*

**Fallback:** In Variable Manager, manually edit Primary/Secondary/Heading/Body/Link to those hex values, and add DSZ* colors with **+**. Also works: Theme Customizer / `et_update_option` for `accent_color` etc.

### Step 2 — Typography presets ✅ (2026-07-18)

Imported via Divi API `GlobalPreset::process_presets_for_import()` from  
`…/Fluid Scale/3. Typography-Fluid-Scale_Presets.json` (not Library-only).

Verified in DB: Heading 1–6, Subheading, Body / Body Large / Body Small, Eyebrow, Caption, Chip, Text, Button, etc.

**UI check:** Visual Builder → **Preset Manager** → look under Font / Font Body groups.  
Apply those OG presets on new modules going forward.

**Re-run:** `php …/dsz-branded/_import-fluid-presets.php` (re-asserts colors + merges presets).

### Step 3 — Customizer (optional, light touch)

Import `1. Typography-Fluid-Scale_Theme-Customizer.json` **or** set heading/body weights manually.  
Avoid fighting our dark child CSS — Customizer is baseline only.  
Fonts already active: **Mulish** heading + body via Variables.

### Step 4 — Reference layout ✅ (draft page 48)

Created draft page **DSZ Type Spec (Fluid Scale)** (ID **48**) from  
`4. Typography-Fluid-Scale_Layout.json` Divi blocks.

- Edit: `https://digitalstudioz.local/wp-admin/post.php?post=48&action=edit`  
- Visual Builder: `https://digitalstudioz.local/?page_id=48&et_fb=1`  

Use as the visual checklist; do **not** make it the front page.

### Step 5 — Wire existing home/header gradually

| Area | Action |
|------|--------|
| New sections | Colors/spacing from Variables; type from OG presets |
| Hero / header free-form HTML | Keep working; slowly replace hard-coded `#D3B670` / `#817E79` in CSS with `var(--…)` **or** rebuild chrome with Menu module + Variables |
| Buttons | Assign Gold button Element preset once created (Primary fill + DarkGrey text) |

### Step 6 — Sync child theme tokens

Update `:root` in `style.css` to match palette SoT (Gold1, DarkGrey1, etc.) so CSS fallbacks don’t drift.

---

## Sandbox path (learn Launch Design System)

On a **blank** Local site (or duplicate):

1. Import Launch pack in ET order (Presets → Variables → Sections → Pages → TB).  
2. Recolor Primary/Secondary to Gold/Slate.  
3. Study stacked presets + Flex/Grid sections.  
4. Export **only** useful section layouts / presets → import into live Library.  
5. Never copy their TB header over ours unless you intentionally rebuild chrome.

---

## Do / Don’t

| Do | Don’t |
|----|-------|
| One typography scale (Fluid) | Import Fluid **and** Fixed on the same site |
| Change brand via **Primary/Secondary** (text/CTAs) | Hex-paint every *text* module |
| Hex for **section/card/chip backgrounds** until variable BGs emit CSS (catalog §4.14) | Assume `$variable(gcid-…)` on every BG works on complex pages |
| Keep DSZ TB header/footer | Import Launch TB templates on live |
| Brand SoT = page **57** Divi wall | Treat Launch Type Spec / Preset-Pages as brand look |
| WPvivid before imports | Skip backup |

---

## Variables vs hex for backgrounds (2026-07-18)

**Verified:** On brand page **57**, `$variable({"type":"color","value":{"name":"gcid-dsz-darkgrey1",…}})$` on section/column backgrounds left sections **white** — `:root` CSS vars existed, but `et-cache` emitted **no** `background-color` for post sections. A minimal one-section test page *did* resolve the same variable.

**Practice:**
- **Text / font color fields:** keep `$variable(gcid-primary-color)` etc.
- **Section / card / swatch chip backgrounds:** use palette **hex** (`#121212`, `#2A2826`, `#D3B670`, …) until Divi reliably emits variable BGs on multi-section pages.
- After any scripted rebuild: delete `wp-content/et-cache/{pageId}/` (or `ET_Core_PageResource::remove_static_resources`).

Full agent compose notes: [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md).

---

## After import — smoke checklist

- [x] Variable Manager shows Gold Primary + Slate Secondary (DB + prior VB confirm)  
- [x] Brand Divi wall page **57** — dark sections, chips, dual title, Home `.ds-btn`  
- [x] CSS reference page **54** — no Divi sidebar `::before` white line (v0.3.4)  
- [ ] Home still loads; sticky gold hamburger unchanged (operator spot-check)  
- [ ] Theme Builder still template 32 → header 30 / footer 31  
- [ ] Child CSS still enqueued (`style.css?ver=0.3.4+`)

---

## File map

```
.cursor/assets/Divi-Xtraz/
  divi-5-design-system-official-launch/JSON/   ← sandbox / cherry-pick
  divi-5-global-typography-system/
    Fluid Scale/                               ← live type system (preferred)
    Fixed Scale/                               ← alternate
  dsz-branded/
    DSZ-GoldGrey-Fluid-Global-Variables.json   ← use this for colors
    _build-brand-system-divi.php               ← rebuild page 57
    _fix-customizer-colors.php                ← Customizer semantic colors
```

Official posts:  
[Launch Design System](https://www.elegantthemes.com/blog/divi-resources/divi-5-launch-gift-design-system) ·  
[Global Typography System](https://www.elegantthemes.com/blog/divi-resources/global-typography-system-for-divi-5)
