# YouTube Channel Watchlist — Divi 5 / WP / AI (Jul 2026)

**Date:** 2026-07-18  
**Purpose:** Mine Jon’s favorite channels for tips that accelerate DigitalStudioz LocalWP + Divi 5.9.  
**Companion:** [youtube-research-findings.md](./youtube-research-findings.md) (earlier Ferdy / NovaMira / MCP deep dives)  
**Catalog:** Fold actionable items into [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) when applied.

**Stack context:** Warm Premium tokens · TB header `30` · child `dgtl-digitalstudioz-theme` · CSS sticky + gold hamburger (pseudo-elements) · prefer native Divi sticky when FE registry works.

---

## Executive verdict

| Priority | Channels | Why |
|----------|----------|-----|
| **Watch first** | Pee-Aye Creative, Elegant Themes, Websites4Beginners, System22, Teach Web With Mark | Divi 5 variables/presets, sticky headers, hamburger, Theme Builder |
| **Strong secondary** | Ferdy.com, Ania Romanska, WP AI Success Hub | Full builds, ACF/Loop, NovaMira+Divi AI |
| **Selective** | Josh Hall, Darrel Wilson | Overview / child-theme mental model; less D5 UI depth |
| **Low Divi yield** | WPTuts (pivoted to Bricks), WP Jakson (core WP), WP Minute (industry news) | Strategy / hygiene only |

**Playlist** `PL0OE197pZ6MpGQU1IfA3RYvEWhlou73Ej` ≈ **Websites4Beginners Divi 5 Module 2** series (Ep #1–27). Start Ep 6, 16, 18.

---

## Top 15 watch-next (ranked for DSZ)

| # | Video | Channel | DSZ payoff |
|---|-------|---------|------------|
| 1 | [Variables vs Presets](https://www.youtube.com/watch?v=6ZuDSc0dQLA) | Pee-Aye | Map Warm Premium → Variables → Option Group → Element presets |
| 2 | [Theme Builder in Divi 5](https://www.youtube.com/watch?v=9KdCA0aDqbo) | Elegant Themes | Global header/footer baseline |
| 3 | [Step 2: Global Header & Footer](https://www.youtube.com/watch?v=-skJ5OTe6yU) | Mark | Practical TB build |
| 4 | [Ep #18 Transparent Header](https://www.youtube.com/watch?v=7o-9F299pZw) | W4B | Native sticky transparent (no CSS) |
| 5 | [Transparent Navbar color on scroll](https://www.youtube.com/watch?v=3jH8USOMtIA) | System22 | Sticky-state bg / link color |
| 6 | [Ep #6 Variable Manager](https://www.youtube.com/watch?v=yRQjW3ZgcRw) | W4B | Tokens + clamp |
| 7 | [Replace Static Styles with Variables](https://www.youtube.com/watch?v=17J-jk0Tg_k) | Elegant Themes | Migrate hard-coded CSS colors into Variable Manager |
| 8 | [Stack Presets](https://www.youtube.com/watch?v=eHGrlo3fxAc) | Elegant Themes | Modular button/spacing nests |
| 9 | [Ep #16 Hamburger & Dropdown](https://www.youtube.com/watch?v=68Zs69yRKMw) | W4B | Gold hamburger via Menu module icons |
| 10 | [Header + Mega Menu mobile](https://www.youtube.com/watch?v=eE7DQkB7_ps) | Ferdy | Nav depth / responsive |
| 11 | [Entire TB Header Fixed](https://www.youtube.com/watch?v=VuN_m_j0ofQ) | Pee-Aye | Fallback if multi-section sticky fails (**D4 pattern** — retest on 5.9) |
| 12 | [Builder Experience Helper](https://www.youtube.com/watch?v=NT3mSeyGSfk) | Pee-Aye | Builder UX for long LocalWP sessions |
| 13 | [Divi Assistant 2.0 D5](https://www.youtube.com/watch?v=HMmQS6nznEg) | Pee-Aye | Toolkit eval (HTML cleaner, globals) |
| 14 | [ACF CPT in Divi 5](https://www.youtube.com/watch?v=YcaXZpi7sd0) | Ferdy | Dynamic content path |
| 15 | [NovaMira Skills + Divi](https://www.youtube.com/watch?v=fW_Vlzf--yg) | WP AI Success Hub | AI → Divi page workflow |

**Bonus sticky (no-code logo swap):** [Divi 5 Header: Transparent, Sticky & Logo Swap](https://www.youtube.com/watch?v=dtfCb5-A4zo) (DiviCoaching / ET-adjacent) — sticky-state bg, dual-logo opacity, hamburger icon color per sticky+phone.

---

## Cross-cutting tips → our stack

### Design system order (Pee-Aye + ET)
1. **Design Variables** — colors (`#0a0a0b`, `#D3B670`, cream), fonts, spacing, gradients  
2. **Option Group Presets** — typography / spacing / borders groups  
3. **Element Presets** (+ **stacked/nested**) — Gold Button, Menu Dark, etc.  
4. Child-theme CSS only for what Divi still can’t do (our hamburger pseudo-elements, CSS sticky fallback)

### Sticky header (prefer native)
- Section **Scroll Effects → Stick to Top**  
- **Z-index 999** on sticky section (ET Part 6)  
- Style **sticky state** separately: bg, menu text, hamburger icon color  
- Absolute row over hero for transparent overlap ([ET Help](https://help.elegantthemes.com/en/articles/14003959-how-to-create-a-transparent-fixed-header-layout-that-overlaps-the-page-s-content-in-divi-5))  
- Hero needs top padding so content isn’t under header  
- Optional 1-liner CSS for transitions: `selector * { transition: all 0.4s ease-in-out; }`  
- **Our experiment:** IAWB sticky attrs alone didn’t enqueue `script-library-sticky-elements.js` — Save Sticky in VB Theme Builder, then re-verify FE before dropping CSS sticky

### Gold hamburger
- W4B Ep #16 / Menu module **Icons → Hamburger menu icon color** (desktop + sticky + phone)  
- Keep child CSS `::before/::after` if free-form HTML button stays (Divi collapses empty spans)  
- Mark: slide-in **Canvases** as modern alternative to classic hamburger drawer

### Theme Builder hygiene (ET Part 6)
- Flexbox Group: logo + Menu + CTA (`Space Between`, wrap)  
- Remove logo from Menu module when using separate Image / Site Logo dynamic  
- **Interactions** for breakpoint show/hide (CTA/social) instead of only Visibility  
- Preview with **Show Theme Builder Layouts**  
- Export TB templates as JSON backups  
- Mobile gotcha: Menu sizing **Grow to Fill** or dropdown stays icon-width

### AI → Divi
- Explicit: separate Divi modules, not one HTML block (existing findings)  
- Pee-Aye: [Clean messy HTML from ChatGPT/Word](https://www.youtube.com/watch?v=jUvKGV6uoNk) before paste  
- Ferdy Claude Design + WP AI Success Hub NovaMira for prompt patterns

### Child theme
- Josh Hall mental model still valid: CSS/JS in `dgtl-digitalstudioz-theme`, never Divi parent  
- Don’t park long-term CSS only in Theme Options

---

## Per-channel notes

### Pee-Aye Creative — highest tip density
Also: [Hide header until scroll](https://www.youtube.com/watch?v=RT0DN8qfGRI), [Anchor offset for fixed headers](https://www.youtube.com/watch?v=lgEtey8KQBY), [Header color on scroll](https://www.youtube.com/watch?v=0V-e71txujY), [Import/export Divi 5 variables](https://www.youtube.com/watch?v=XgOiRhMgEQk), [Sizing/spacing system](https://www.youtube.com/watch?v=e0GyAlZqfuA), free **Migration Helper**.

Blog: [Variables vs Presets](https://www.peeayecreative.com/divi-5-design-system-variables-presets/) · [Header category](https://www.peeayecreative.com/category/tutorials/divi-header/)

### Elegant Themes — official D5
Mastery course Parts 3–8 (variables → presets → homepage → header → footer → TB).  
[Part 6 Custom Header](https://www.elegantthemes.com/blog/divi-resources/part-6-building-a-custom-header-and-navigation-in-divi-5) is the written companion to sticky + z-index + Interactions.

### Websites4Beginners — structured course (= your playlist)
Ep 6 variables · Ep 16 hamburger · Ep 18 transparent · Ep 19 image variables · Ep 27 global sections.

### System22
[Transparent → color on scroll](https://www.youtube.com/watch?v=3jH8USOMtIA) · [Gradient on scroll](https://www.youtube.com/watch?v=StFxv9vdK5A) · Flexbox header packs · mega menu / Dropdown module.

### Teach Web With Mark
Essentials course · Step 1 global design · Step 2 header/footer · Style presets · Canvas slide-in menu.

### Ferdy.com
2026 Divi 5 full builds · ACF CPT · TB blog layouts · Claude Design → Divi (see also `youtube-research-findings.md`).

### Ania Romanska
D5 loves list · Loop + ACF · older transparent sticky layouts (D4 patterns — dissect, prefer D5 sticky).

### Josh Hall / Darrel Wilson
D5 migrate timing / full beginner tutorials; child theme explained (D4 depth, still correct).

### WP AI Success Hub
NovaMira + Codex Divi realism · skills → contact page · Pro on live WP.

### WPTuts / WP Jakson / WP Minute
WPTuts largely left Divi → use System22/W4B for sticky. Jakson = core WP/FSE. WP Minute = WP 7 / AI industry context.

---

## Plugins / tools to evaluate

| Tool | Priority | Why for DSZ |
|------|----------|-------------|
| Divi **Variable Manager + Stacked Presets** (built-in) | Do first | Replace scattered hex in child CSS where possible |
| **Divi Assistant** (Pee-Aye) | Trial | HTML cleaner, globals, D5 UI |
| **Builder Experience Helper** | Trial | Long VB sessions |
| **Migration Helper** (free) | Keep if D4 leftovers | Checklist |
| **Dynamic Content Helper** | If ACF-heavy | Edit fields in builder |
| NovaMira / Claude (already in) | Keep | Pair with “separate modules” rule |

---

## Suggested next builds (from this research)

1. **Port Warm Premium into Divi Design Variables** (colors + spacing) — stop relying only on `:root` in child CSS for module-level styles.  
2. **VB Save Sticky on header 30** — retest FE sticky registry; if green, thin CSS sticky.  
3. **Watch W4B Ep 16 + 18** — decide whether Menu-module hamburger can replace free-form toggle long-term (client-editable).  
4. **Trial Pee-Aye Assistant** for AI paste cleanup + Builder Experience Helper.  
5. **Export Theme Builder JSON** backup of template 32 / layouts 30–31.

---

## Method / limits

- Channel RSS + oEmbed + Firecrawl blog scrapes + companion research agent (2026-07-18).  
- YouTube playlist API often 403 from this environment — playlist contents inferred from W4B Ep titles.  
- Prefer Divi 5 videos; Divi 4 sticky/hamburger CSS marked as pattern-only.
