---
name: digitalstudioz-layout
description: >-
  DigitalStudioz layout rules — Tailwind for spacing/layout, CSS vars for
  tokens, inline styles only for dynamic JS state. Prevents mixing systems on
  the same property. Use when editing engine.tsx, globals.css layout utilities,
  fixing squished/off-center layout, or adding sections.
---

# DigitalStudioz Layout

## Tailwind Is Fine — Mixing Is Not

**Tailwind CSS is the primary layout system.** Next.js + Tailwind v4 is the intended workflow.

The bug was **not** Tailwind. It was using **three systems on the same element/property**:

| System | Role |
|--------|------|
| **Tailwind** | Spacing, grids, flex, responsive layout |
| **CSS custom properties** (`globals.css`) | Colors, fonts, borders — design tokens |
| **Inline `style={{}}`** | **Dynamic values only** (scroll state, animation delay, counters) |

### Bad pattern (caused squished layout)

```tsx
// ❌ Same property set by TWO systems — browser picks unpredictably
<section
  className="py-20 md:py-28 px-6"   // Tailwind: 80px / 24px padding
  style={{ padding: '100px 0' }}     // Inline overrides vertical only
>
```

Also bad: `max-w-7xl` (1280px) on container **plus** inline `maxWidth: 1200` on a child.

### Good pattern (current standard)

```tsx
// ✅ Tailwind owns layout; CSS vars own colors; inline owns dynamic state only
<section className="py-24 md:py-32 bg-bg-canvas">
  <div className="section-container">
    <h2 className="text-3xl font-bold text-[var(--text-primary)]">...</h2>
  </div>
</section>

// ✅ Dynamic nav — inline is correct here (depends on scroll state)
<header
  className="fixed top-0 z-50 transition-all duration-500"
  style={{
    background: scrolled ? 'rgba(10,10,11,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
  }}
>
```

---

## Mandatory Rules

### DO

1. **Wrap section content in `.section-container`** — single source of truth for max-width + horizontal padding.
2. **Use Tailwind for** section padding (`py-24 md:py-32`), grids (`grid grid-cols-3 gap-6`), flex, gaps, responsive breakpoints.
3. **Use theme tokens** from `@theme inline` in `globals.css`: `bg-bg-void`, `text-gold`, `from-gold to-gold-bright`.
4. **Use arbitrary CSS var syntax** when no theme alias exists: `text-[var(--warm-cream)]`, `border-[var(--warm-border)]`.
5. **Use inline `style` only for** runtime/dynamic values: scroll-dependent nav, `transitionDelay`, `AnimatedNumber`, hover coords.
6. **Reuse typography class strings** at top of component: `section`, `labelCls`, `h2Cls`, `subtitleCls`.

### DO NOT

- Set the **same CSS property** in both `className` and `style` (padding, maxWidth, margin, gap)
- Stack container padding (`.section-container` + extra `px-*` on same wrapper without reason)
- Use `max-w-7xl` for page containers — design width is **1200px** (`.section-container` uses `max-w-[1200px]`)
- Re-wire legacy UI components (`TopNav`, `ChapterSection`, etc.) without migrating them to this pattern
- Add 3D `Scene3D` to main page without explicit operator request

---

## Container Utility (`globals.css`)

```css
.section-container {
  @apply mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-16;
}
```

**1200px**, not `max-w-7xl` (1280px). Every section follows:

```tsx
<section id="work" className="py-24 md:py-32 bg-bg-canvas">
  <div className="section-container">
    {/* content */}
  </div>
</section>
```

---

## Section Shell + Grid Recipes

```tsx
const section = 'py-24 md:py-32'

// Work bento
<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">

// Services
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Process
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">

// About
<div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

// Stats
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

// Footer
<div className="grid grid-cols-2 md:grid-cols-4 gap-10">
```

---

## Theme Tokens (`@theme inline`)

Defined in `app/globals.css` — use Tailwind class names, not raw hex in JSX when possible:

| Class | Maps to |
|-------|---------|
| `bg-bg-void` | `#0a0a0b` |
| `bg-bg-canvas` | `#111113` |
| `bg-bg-surface` | `#18181b` |
| `text-gold` | `#c8a45c` |
| `from-gold to-gold-bright` | CTA gradient |

Decorative utilities: `.text-gradient`, `.glass-card`

---

## Pre-Edit Checklist

- [ ] Section uses `className` for padding/background — not `style`
- [ ] Content wrapped in `.section-container`
- [ ] No duplicate property in `className` + `style`
- [ ] Dynamic values only in `style`
- [ ] Container is 1200px, not 1280

---

## Post-Edit Verification

```powershell
npm run build
```

HTTP smoke: `http://127.0.0.1:3000/` → 200. Visual: centered 1200px column, consistent padding, aligned grids.

---

## File Map

| File | Role |
|------|------|
| `lib/experience-engine/engine.tsx` | Live page — Tailwind layout + dynamic inline |
| `app/globals.css` | Tokens, `@theme inline`, `.section-container` |
| `app/page.tsx` | Config only |
| `lib/experience-engine/ui/*.tsx` | Legacy — not wired to live page |

---

## Regression Recovery

If layout looks squished again:

1. Grep `engine.tsx` for elements with **both** `className` padding/max-w **and** `style` padding/maxWidth
2. Pick one system per property — usually keep Tailwind, remove conflicting inline
3. Confirm every section has `.section-container` inner wrapper
4. Confirm container is `max-w-[1200px]`, not `max-w-7xl`
