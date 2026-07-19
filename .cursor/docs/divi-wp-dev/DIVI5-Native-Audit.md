# Divi 5 Native Audit — Re-grade (DigitalStudioz LocalWP)

**Audit date:** 2026-07-18 (evening) · **Read-only FE** + live IAWB / WP-CLI evidence  
**Compared against:** Baseline Native Audit (same day, theme **0.6.6** → target **0.7.0**)  
**Live theme now:** `dgtl-digitalstudioz-theme` **0.7.5** (audit body measured at **0.7.4**; **0.7.5** closed D3/D14)  
**Core assets:** Home **15** · TB header **30** / footer **31** / template **32**  
**Live site:** nothing rewritten during this audit except **safe debt cleanup** noted in §Fixes applied

---

## Grades (old → new)

| Surface | Baseline (0.6.6) | Now (0.7.4) | Delta |
|---------|------------------|-------------|-------|
| **Overall Divi-native** | ~**88%** | ~**93%** → **~95%** @0.7.5 | **+7** |
| **Home modules** | ~**95%** | ~**96%** | +1 |
| **Theme Builder chrome** | ~**80%** | ~**90%** → **~94%** @0.7.5 | **+14** |
| Letter (overall) | B+ | **A−** → **A** @0.7.5 | |

### Why the jump

| Baseline gap | Status now |
|--------------|------------|
| Spacing lock fought VB (D1) | **Resolved** in **0.7.0** — spacing in Divi attrs; CSS lock stripped |
| Footer TB 31 one HTML blob (D3) | **Mostly resolved** — native Text/Heading modules; link columns still HTML `<ul>` |
| TB dup 37 + drafts (D7) | **Resolved** — 37 gone earlier; drafts **35/36 deleted** this audit |
| Dead `--ds-header-bottom` (D8) | **Resolved** — absent from `core-scripts.js` |
| Typography / button pad CSS (D2/D5) | **Still open** — intentional next slice |
| Glass / drawer chrome (D4) | **Keep** — Divi still cannot replace |

---

## Evidence snapshot (live)

| Check | Result |
|-------|--------|
| Theme `style.css` Version | **0.7.4** |
| Home blocks | **133** total · 8 sections · text 49 / heading 25 / button 4 / image 1 · **0 `divi/code`** |
| Home `$variable(` refs | **84** (same class as baseline) |
| Home `groupPreset` | **78** |
| Home `rowGap` attrs | **42** (spacing unlocked into builder) |
| Home `"margin"` attrs | **94** |
| Hard hex surfaces (sampled palette) | **6** on Home content (BGs still intentional hex — D10) |
| Header TB 30 | Text logo (HTML-in-Text) + **Menu** + **Button** |
| Footer TB 31 | **21** blocks · text 7 / heading 3 · **no Code** · logo + 3 HTML lists + bar + back-top |
| Live TB templates | **Only 32** (30/31 layouts) — drafts 35/36 **deleted** |
| JS MutationObserver | **None** |
| JS `--ds-header-bottom` | **None** |
| Customizer fonts | Heading/Body **Inter**; Primary `#D3B670` etc. live |
| WP Menus | Primary **4** + new **Footer Services (9)** / **Studio (10)** / **Connect (11)** (prep for Menu modules) |
| Child CSS `!important` count | **~444** (mostly chrome / hero / mobile — not a full spacing lock) |
| Soft `row-gap` safety | Present (thin) — expected |

---

## What is already real Divi

| Surface | State | Notes |
|---------|-------|-------|
| Home page **15** | **Strong** | Stock modules only; spacing + rowGap in VB attrs |
| Design Variables | **Strong** | ~84 text/CTA variable refs; Gold & Grey pack live |
| Header TB **30** | **Good** | Menu + Button native; logo still Text+HTML (intentional dual-color) |
| Footer TB **31** | **Good−** | Native modules (was Weak HTML blob); link columns still HTML lists |
| Section/card BGs | Intentional hex | Keep until variable BGs emit reliably (D10) |
| Glass nav / hamburger | Keep CSS/JS | Necessary chrome (D4) |
| Mobile multi-col stack | Keep CSS | Divi phone `row+nowrap` — **0.7.4** bridge |

---

## Debt scoreboard — baseline D1–D10 vs now

| ID | Item | Baseline | Now | Action left |
|----|------|----------|-----|-------------|
| **D1** | Spacing lock (margins / pads / row-gap) | High — fights VB | **DONE (0.7.0)** | Keep soft `row-gap:0` only; edit spacing in VB |
| **D2** | Hero/label/num/stat typography `!important` | High | **OPEN** | Map to Variables / presets; strip font `!important` when cascade matches |
| **D3** | Footer TB 31 HTML blob | High | **DONE (0.7.5)** | Menu modules on WP **9/10/11** |
| **D4** | Glass nav + sticky kill + drawer JS | Med — keep | **KEEP** | No migrate until Divi native equivalents |
| **D5** | Button pad `14×28` override | Med | **OPEN** | Align Theme Customizer button pad, then drop CSS `!important` |
| **D6** | Global Inter force | Med | **PARTIAL** | Customizer Inter set; thin CSS `--font-sans` remains |
| **D7** | Duplicate TB 37 / drafts 35–36 | Med | **DONE** | 37 deleted earlier; **35/36 force-deleted** this audit |
| **D8** | Dead `--ds-header-bottom` JS | Low | **DONE** | Setter gone; drawer uses `top:100%` |
| **D9** | IAWB + AI Editor dual writers | Med | **STANDING** | One writer per post per pass |
| **D10** | Hex BGs vs Variables | Low | **KEEP** | Hex for multi-section BGs until Divi emits variables reliably |

### New / clarified debts (post-0.7.0)

| ID | Item | Sev | Notes |
|----|------|-----|-------|
| **D11** | Mobile stack CSS ≤980 | Med — necessary | Keep until Divi phone columns stack natively |
| **D12** | Theme outside git | Med | **DONE** — `assets/wp-theme/` + `theme:sync` / `wp:smoke` (§L) |
| **D13** | Logo = Text+HTML (header + footer) | Low | Intentional dual-color; Image+Menu only if brand accepts single-color logo |
| **D14** | Footer lists still HTML-in-Text | Med | **DONE (0.7.5)** — Menu modules; edit via Appearance → Menus |

---

## Where Divi Builder can / cannot win (updated)

### Restored to Builder (vs baseline)

- Module **margins** for hero / intros / cards (spacing lock gone)
- Section **padding** authored in VB
- Column **rowGap** in attrs (soft CSS safety only)
- Card column padding editable when not overridden by remaining chrome CSS

### Still blocked / bridged by child CSS

- Hero H1 / label / sub **typography** (`!important` sizes/weights)
- `.ds-section-label` mono + gold
- Service/process index number styles
- Stats + quote typography / veil
- Button pad **14×28** on hero/contact (Customizer bridge)
- Header glass opacity / hamburger / frost drawer
- Mobile column stacks ≤980
- Back-to-top position vs footer credit

### Still editable in Builder

- All copy and images  
- Button labels / URLs  
- Menu items (Appearance → Menus — Primary + footer menus)  
- Most section background hex  
- Design Variable text colors where CSS does not override  
- Presets (~78 groupPreset usages)  
- Spacing attrs on Home (primary rhythm)

---

## Upgrade path refresh (do not break look)

| Phase | Baseline plan | Status |
|-------|---------------|--------|
| **1** Unlock spacing in Builder | Gap 0 + Next stacks → strip lock | **DONE (0.7.0–0.7.2)** |
| **2** Typography → Variables / presets | Remove font `!important` | **Next slice** |
| **3** Footer native + button Customizer | Rebuild footer; drop pad CSS | **Footer modules done**; Menu swap + D5 **next** |
| **4** Chrome stays CSS/JS | Glass / drawer / sticky kill | **Keep** (+ mobile stack D11) |

### Recommended next slice (highest ROI)

1. **D5:** Set Customizer / Button module pad to **14 / 28**, verify FE, remove `padding: 14px 28px !important` bridge.
2. **D2 (careful):** One typography family at a time (section labels → nums → hero) onto presets; measure with `wp:smoke` + visual QA.

---

## Workflow connections (health)

| Tool | Role | Health |
|------|------|--------|
| IAWB | Primary Divi R/W | Green |
| AI Editor Divi5 | Validate-then-save (secondary) | Green |
| local-wp | WP-CLI / logs | Green |
| acf-mcp | ACF schema | Partial |
| Novamira / wpmcp MCP | Disabled until HTTP routes fixed | Off |
| Child CSS/JS | Chrome + thin bridges (not full spacing lock) | Active but thinner |
| Next `engine.tsx` | Visual spacing SoT (reference) | Canonical |
| `theme:sync` / `wp:smoke` | Theme git + Home guards | Ready (§L) |

**Rule:** one MCP writer per post per pass.

---

## Strengths to protect

- Home = stock Divi modules (no Code modules)
- Header Menu migration (no HTML nav / no MutationObserver)
- Protect TB **30 / 31 / 32**
- Design Variables on text — expand, don’t abandon
- Spacing owned by VB (don’t re-lock with `!important` margins)
- Theme git mirror + smoke after chrome edits

---

## Fixes applied during this audit

| Fix | Detail |
|-----|--------|
| **D7** | Force-deleted draft layouts **35** (header) and **36** (footer) |
| **D14 prep** | Created + populated WP menus **Footer Services (9)**, **Studio (10)**, **Connect (11)** for upcoming Menu-module swap |

No FE visual change from these (menus not yet wired into TB 31).

---

## Verify after next native slice

```powershell
npm run wp:smoke
npm run theme:sync   # if CSS changed
```

Checklist: footer columns editable via Appearance → Menus · button pad without CSS `!important` · no draft TB layouts · TB 30/31/32 intact.

---

## Sources

- Live theme `style.css` / `js/core-scripts.js` (LocalWP)
- IAWB: Home 15, Header 30, Footer 31, TB list, global data
- WP-CLI: menus, layout posts
- Docs: [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md) · [DIVI5-Home-Native-Pass.md](./DIVI5-Home-Native-Pass.md) · [DEV-WORKFLOW.md](./DEV-WORKFLOW.md)

**Environment:** WordPress 7.0.2 · Divi 5.9 · PHP 8.4.10 · theme **0.7.4**
