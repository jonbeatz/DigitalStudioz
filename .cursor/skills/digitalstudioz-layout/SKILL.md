---
name: digitalstudioz-layout
description: >-
  DigitalStudioz layout v2.1.0 — engine.tsx uses inline S object only (1200px
  container) with responsive breakpoints via JS (useBreakpoints hook).
  Mobile-first grids, hamburger nav. Do NOT add Tailwind layout classes to
  engine.tsx. Tailwind stays for other components.
---

# DigitalStudioz Layout — v2.1.0 (LOCKED)

## Production policy

| Scope | System |
|-------|--------|
| **`lib/experience-engine/engine.tsx`** | **Inline `const S = { ... }` only** — locked after 4 failed Tailwind refactors |
| **Responsive breakpoints** | **JS-level via `useBreakpoints()` hook** — `isMobile` (≤767px), `isTablet` (768-1023px), `isDesktop` (≥1024px). Grid columns, font sizes, padding, flex direction, and nav mode all adapt via these boolean values. See `ui/useMediaQuery.ts` and `ui/MobileMenu.tsx`. |
| **All other files** | Tailwind v4 freely (LoadingScreen, new components, shadcn, etc.) |
| **`globals.css`** | CSS custom properties + `.text-gradient` + `.glass-card` — no `@theme inline`, no `.section-container` |

**Do not convert `engine.tsx` to Tailwind layout** without operator approval and an isolated `tailwind-layout-spike` branch.

---

## Responsive-by-default rule

Every new or edited section **must** consider mobile + tablet layout. Patterns:

| Screen | Nav | Grid columns | Font scale | Padding |
|--------|-----|-------------|------------|---------|
| **Desktop (≥1024px)** | Full nav bar | As-designed | 100% | 100px sections |
| **Tablet (768-1023px)** | Hamburger menu | 2-col, or stacked | 75-80% | 80px sections |
| **Mobile (≤767px)** | Hamburger menu | 1-col, 2-col grid for dense content | 60-70% | 60px sections |

Implementation pattern (inline):
```tsx
const { isMobile, isTablet } = useBreakpoints()
// Then in section:
<div style={{
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
  gap: 24,
}}>
```

The `S` object uses an `mq()` helper for common tokens:
```tsx
h2: mq({ fontSize: 36, ... }, { mobile: { fontSize: 26 }, tablet: { fontSize: 30 } }),
```

## Mobile navigation

- **Desktop (≥1024px):** full nav links + CTA button as rendered server-side
- **Tablet + Mobile:** hamburger icon (3 stacked lines) opens `MobileMenu` — full-screen overlay with animated staggered links, ✕ close button, body scroll lock
- See `lib/experience-engine/ui/MobileMenu.tsx`

---

## Why inline is locked for engine.tsx

Tailwind is **not** banned project-wide. Repeated attempts to use Tailwind layout **inside this monolithic engine file** failed (squished/off-center layout, broken builds). Causes included:

1. **Mixing** — same property in `className` and `style` (confirmed bug)
2. **Wrong width** — `max-w-7xl` (1280px) vs design spec 1200px
3. **Incomplete refactors** — partial Tailwind migrations mid-rewrite
4. **Possible** Tailwind v4 `@apply` / Turbopack edge cases — **unproven**; needs isolated spike to confirm

**Empirical result:** inline `S` object works every time. Tailwind layout in `engine.tsx` regresses repeatedly.

---

## The `S` object (single source of truth)

```tsx
const S = {
  inner: mq({ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }, { mobile: { padding: '0 16px' } }),
  sec: (bg) => mq({ padding: '100px 0', background: bg }, { mobile: { padding: '60px 0' }, tablet: { padding: '80px 0' } }),
  secA: mq({ padding: '100px 0', background: 'var(--bg-canvas)' }, { mobile: { padding: '60px 0' }, tablet: { padding: '80px 0' } }),
  label: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 },
  h2: mq({ fontSize: 36, ... }, { mobile: { fontSize: 26 }, tablet: { fontSize: 30 } }),
  sub: mq({ fontSize: 16, ... }, { mobile: { fontSize: 15, marginBottom: 32 }, tablet: { marginBottom: 40 } }),
  card: mq({ ... }, { mobile: { padding: 24 } }),
  glass: mq({ ... }, { mobile: { padding: '32px 24px' }, tablet: { padding: '40px 32px' } }),
  cta: { /* gold gradient button */ },
  ctaO: { /* outline button */ },
}
```

Extend `S` for new tokens — do not add parallel Tailwind layout in the same file.

---

## Responsive grid recipes

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Work bento | `2fr 1fr` | `1fr` | `1fr` |
| Services | `repeat(3, 1fr)` | `repeat(2, 1fr)` | `1fr` |
| Process | `repeat(5, 1fr)` | `repeat(3, 1fr)` | `1fr 1fr` |
| About | `flex row` | `flex column` | `flex column` |
| Stats | `repeat(4, 1fr)` | `repeat(4, 1fr)` | `repeat(2, 1fr)` |
| Footer | `repeat(4, 1fr)` | `repeat(2, 1fr)` | `repeat(2, 1fr)` + brand full-width |

---

## Inline `style` is correct for

- All layout in `engine.tsx` (via `S`)
- Scroll-dependent nav background (`scrolled` state)
- `FadeUp` transition delay / opacity
- Back-to-top button visibility

---

## DO NOT in engine.tsx

- Tailwind layout: `py-*`, `px-*`, `max-w-*`, `flex`, `gap-*`, `grid`, `mx-auto`
- `.section-container` or `@apply` utilities
- Mix `className` padding with `style` padding on the **same element**
- Re-mount `StudioRails` or `CustomCursor` in `layout.tsx` without operator request
- Re-wire legacy UI (`TopNav`, `ChapterSection`, etc.) without full migration

---

## layout.tsx policy

```tsx
// Current — clean
<body>
  <LenisProvider>{children}</LenisProvider>
</body>
```

`StudioRails` and `CustomCursor` are **unmounted** (removed ghost STORY/SERVICES rail junk). Components remain in `components/` for future use.

---

## Pre-edit checklist (responsive-aware)

- [ ] Read `S` object first — extend it, don't bypass
- [ ] New section uses `S.inner` wrapper
- [ ] **Grid has mobile/tablet breakpoints** (use `isMobile`, `isTablet`)
- [ ] **Font sizes reduce on mobile** (use `mq()` or inline ternary)
- [ ] **Section padding adapts** (use `mq()` on sec/secA)
- [ ] No Tailwind layout classes added to engine.tsx
- [ ] Colors use `var(--*)` or types.ts constants
- [ ] `FadeUp` wrappers don't break flex/grid parent structure

---

## Post-edit verification

```powershell
npm run build
```

HTTP: `http://127.0.0.1:3000/` → 200. Visual: centered 1200px column, responsive across widths.

---

## Regression recovery

If layout squished or build fails after an agent edit:

1. `git diff lib/experience-engine/engine.tsx` — look for Tailwind layout classes
2. Restore `S.inner` + `S.sec` pattern on every section
3. Confirm responsive breakpoints use `isMobile`/`isTablet` consistently
4. Confirm `MobileMenu` import and state wiring are present
5. Re-read this skill — **do not** "fix" by converting to Tailwind

---

## Future Tailwind spike (optional, non-production)

Branch: `tailwind-layout-spike`. Minimal 50-line test page with `.section-container` only. Compare Turbopack dev vs `next build`. Do not merge without operator sign-off.

---

## File map

| File | Role |
|------|------|
| `lib/experience-engine/engine.tsx` | **Live page** — inline `S` + FadeUp + responsive |
| `lib/experience-engine/ui/useMediaQuery.ts` | `useMediaQuery` + `useBreakpoints` hooks |
| `lib/experience-engine/ui/MobileMenu.tsx` | Mobile hamburger overlay component |
| `app/globals.css` | Tokens, reset, `.text-gradient`, `.glass-card` |
| `app/layout.tsx` | Fonts + Lenis only |
| `app/page.tsx` | Config wrapper |
| `lib/experience-engine/ui/*.tsx` | Legacy — not wired to live page |
