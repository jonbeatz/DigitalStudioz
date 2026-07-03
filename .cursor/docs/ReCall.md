# DigitalStudioz — ReCall Update

## Session: 2026-07-03 — Complete Warm Premium Redesign

### Major Milestone
After 3 rewrite iterations, the site looks correct. **Final approach: Tailwind for layout, CSS vars for tokens, inline styles only for dynamic JS state** — one system per property, no mixing.

### What Was Wrong (Root Cause — Clarified)

**Tailwind is NOT the problem.** The conflict was using **three systems on the same element**:

- Tailwind utilities (`py-20`, `px-6`, `max-w-7xl`) on `className`
- CSS custom properties (`var(--bg-void)`) for colors
- Inline `style={{ padding: '100px 0' }}` **overriding the same properties** Tailwind already set

Example of the bug:
```tsx
<section className="py-20 px-6" style={{ padding: '100px 0' }}>  // ❌ conflict
```

Also: `max-w-7xl` = 1280px fought our intended **1200px** container width.

**Symptoms:** squished-left content, inconsistent padding, misaligned grids.

### The Fix (Current — Locked)

1. **Tailwind owns layout** — `py-24 md:py-32`, grids, flex, responsive classes
2. **`.section-container` in globals.css** — `max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16`
3. **Inline `style` only for dynamic values** — scroll-dependent nav, animation delays, counters
4. **`@theme inline`** maps design tokens to Tailwind classes (`bg-bg-void`, `text-gold`)
5. **Never set the same property in both `className` and `style`**

### Key Architectural Decisions (Locked)
1. **Tailwind for layout** — spacing, grids, flex; maintainable long-term
2. **`.section-container`** — 1200px max-width (not `max-w-7xl` / 1280px)
3. **No 3D canvas** on main page — simpler load, no WebGL conflicts
4. **Colors from CSS custom properties** via Tailwind theme or `var(--*)` arbitrary syntax
5. **Semantic HTML** — `<section>`, `<header>`, `<footer>`, `<h1>`–`<h3>`
6. **Scroll animations** — `Reveal`, `Stagger`, `AnimatedNumber`, `HoverCard` in engine.tsx

### Current Page Structure
- 8 sections, ~5030px scroll height
- Hero → Work (2:1 grid) → Services (3-col grid) → Process (5-col grid) → About (flex 1:1) → Stats (4-col) → Quote → Contact → Footer
- All sections centered in max 1200px container
- Left padding 24-64px responsive

### Files Changed in This Session
- `.cursor/skills/digitalstudioz-layout/SKILL.md` — Layout skill (Tailwind + no-mixing rule)
- `app/globals.css` — `@theme inline`, `.section-container` at 1200px
- `lib/experience-engine/engine.tsx` — Tailwind layout refactor + scroll animations
- `lib/experience-engine/types.ts` — Color constants to Warm Premium
- `lib/experience-engine/scene/SceneModel.tsx` — Atmospheric particles only
- `lib/experience-engine/ui/*.tsx` — Various UI component color updates
- `app/page.tsx` — Chapter data trimmed
- All configs and prompt files updated
