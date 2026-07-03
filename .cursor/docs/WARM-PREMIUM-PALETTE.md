# Warm Premium — Design Token System

**Origin:** Apple dark aesthetic × Superhuman warm cream × Muted gold signature
**Mood:** Warm, luxurious, crafted, editorial, premium
**Vibe:** A luxury watch brand meets a design studio — timeless, not trendy

---

## Color Palette

### Backgrounds (Luminance Stacking — Linear method)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-void` | `#0a0a0b` | Deepest background — hero, full-bleed sections |
| `--bg-canvas` | `#111113` | Main page background |
| `--bg-surface` | `#18181b` | Card surfaces, panels |
| `--bg-elevated` | `#1f1f23` | Hover states, elevated cards |
| `--bg-glass` | `rgba(15, 15, 17, 0.85)` | Glassmorphism surfaces |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#f4f4f5` | Primary text, headings |
| `--text-secondary` | `#a1a1aa` | Body text |
| `--text-tertiary` | `#71717a` | Muted labels |
| `--text-dim` | `#52525b` | Minimum contrast |

### Accent — Muted Gold

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#c8a45c` | Primary accent — buttons, links, highlights |
| `--gold-bright` | `#d4b872` | Hover states, bright accents |
| `--gold-dim` | `#a8883e` | Darker accent, pressed states |
| `--gold-glow` | `rgba(200, 164, 92, 0.15)` | Ambient glow / shadow tint |
| `--gold-subtle` | `rgba(200, 164, 92, 0.06)` | Subtle backgrounds |

### Warm Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--warm-cream` | `#e8e2d9` | Alternate body text, badges |
| `--warm-surface` | `#2a2825` | Warm card surface |
| `--warm-border` | `rgba(232, 226, 217, 0.08)` | Warm-tinted borders |
| `--warm-overlay` | `rgba(232, 226, 217, 0.03)` | Subtle warm overlay on dark |

### Borders & Dividers

| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `rgba(255, 255, 255, 0.05)` | Default borders |
| `--border-default` | `rgba(255, 255, 255, 0.08)` | Stronger borders |
| `--border-gold` | `rgba(200, 164, 92, 0.12)` | Gold-tinted borders |
| `--border-warm` | `rgba(232, 226, 217, 0.08)` | Warm section dividers |

### Shadows

| Token | Value |
|-------|-------|
| `--shadow-border` | `0px 0px 0px 1px rgba(255, 255, 255, 0.06)` |
| `--shadow-card` | `0px 0px 0px 1px rgba(200, 164, 92, 0.1), 0px 2px 2px rgba(0,0,0,0.3), 0px 8px 8px -8px rgba(0,0,0,0.2)` |
| `--shadow-gold-glow` | `0px 30px 45px -30px rgba(200, 164, 92, 0.2), 0px 18px 36px -18px rgba(0,0,0,0.3)` |
| `--shadow-elevated` | `0px 0px 0px 1px rgba(255, 255, 255, 0.08), 0px 4px 6px rgba(0,0,0,0.2), 0px 12px 24px -12px rgba(0,0,0,0.4)` |

---

## Typography System

| Element | Font | Weight | Size | Line Height | Tracking |
|---------|------|--------|------|-------------|----------|
| Display hero | Inter/Sans | **250** (ultra-light) | 64–96px | 0.95 | -0.03em |
| Section heading | Inter/Sans | **300** (light) | 40–56px | 1.05 | -0.02em |
| Card title | Inter/Sans | **450** | 20–24px | 1.15 | -0.01em |
| Body | Inter/Sans | 400 | 15–16px | 1.60 | 0 |
| Small/Mono | JetBrains Mono | 450 | 11–12px | 1.40 | +0.05em |
| Gold badge | JetBrains Mono | 500 | 10–11px | 1.00 | +0.12em |

**Key Typography Rules:**
- Ultra-light (250/300) for large headings — ethereal, luxurious, anti-convention
- Warm cream (#e8e2d9) for secondary body text to offset cold white
- Gold-tinted ultra-light display text for hero moments
- ALL CAPS + positive tracking + JetBrains Mono for section labels (SpaceX-inspired)
- Only 3 weights used: 250/300 (display), 400/450 (body), 500 (mono/labels)

---

## Section Layout Patterns

### Type A: Full-Viewport Hero (SpaceX-style)
- 100vh minimum
- Void-black background
- Centered text overlay on atmospheric image/scene
- Gold-gradient CTA
- Scroll indicator at bottom

### Type B: Cinematic Scene (SpaceX hybrid)
- 90–100vh per scene
- Alternating void-black ↔ warm-surface backgrounds
- Full-bleed imagery as section background
- Text overlaid on image with warm glass panel

### Type C: Asymmetric Bento Grid (bento hybrid)
- Contained in max-width container
- 2–3 column asymmetric grid
- Mix of image, text, and card elements
- Gold border accents on featured cells
- Warm-tinted glassmorphism on cards

### Type D: Stats/Proof Strip
- Full-width, centered
- Warm gold dividers between metrics
- Ultra-large numbers in weight 300
- Warm cream labels

---

## Button Styles

| Variant | Style |
|---------|-------|
| **Primary** | Gold gradient bg, void-black text, 8px radius, `font-mono text-xs tracking-[0.12em] uppercase` |
| **Secondary** | Glass dark bg (`rgba(255,255,255,0.04)`), warm cream text, 1px warm border, 8px radius |
| **Ghost** | Transparent, warm cream text, gold underline on hover |
| **Gold pill** | Gold bg, void-black text, 9999px radius, hover scale 1.05 |

---

## Glassmorphism (Card System)

```css
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-gold);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
}
```

---

## Signature Design Moves

1. **Gold-tinted shadows** — All elevated elements get gold ambient glow
2. **Warm cream secondary text** — Offsets cold white on dark surfaces
3. **Ultra-light gold headings** — Weight 250/300 for ethereal authority
4. **Luminance stacking** — Elevation via bg opacity, not shadows
5. **Binary radius system** — 8px (small elements) and 16px (cards/containers)
6. **Warm surface alternation** — Sections alternate void-black ↔ warm charcoal
7. **Gold-accented borders** — `rgba(200,164,92,0.12)` instead of white borders
8. **Mono labels with positive tracking** — Section markers in JetBrains Mono
