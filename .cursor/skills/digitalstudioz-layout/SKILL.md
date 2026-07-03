---
name: digitalstudioz-layout
description: >-
  DigitalStudioz layout v2.0.0 — engine.tsx uses inline S object only (1200px
  container). Do NOT add Tailwind layout classes to engine.tsx. Tailwind stays
  for other components. Use when editing engine.tsx, fixing squished layout,
  or adding page sections.
---

# DigitalStudioz Layout — v2.0.0 (LOCKED)

## Production policy

| Scope | System |
|-------|--------|
| **`lib/experience-engine/engine.tsx`** | **Inline `const S = { ... }` only** — locked after 4 failed Tailwind refactors |
| **All other files** | Tailwind v4 freely (LoadingScreen, new components, shadcn, etc.) |
| **`globals.css`** | CSS custom properties + `.text-gradient` + `.glass-card` — no `@theme inline`, no `.section-container` |

**Do not convert `engine.tsx` to Tailwind layout** without operator approval and an isolated `tailwind-layout-spike` branch.

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
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  sec: (bg: string) => ({ padding: '100px 0', background: bg }),
  secA: { padding: '100px 0', background: 'var(--bg-canvas)' },
  secTight: { padding: '80px 0', background: 'var(--bg-canvas)' },
  label: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 },
  h2: { fontSize: 36, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT_PRIMARY, marginBottom: 16 },
  sub: { fontSize: 16, lineHeight: 1.6, color: TEXT_MUTED, maxWidth: 560, marginBottom: 48 },
  card: { background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: 32 },
  glass: { background: 'rgba(15,15,17,0.85)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-gold)', borderRadius: 16, padding: '48px 40px' },
  cta: { /* gold gradient button */ },
  ctaO: { /* outline button */ },
}
```

Extend `S` for new tokens — do not add parallel Tailwind layout in the same file.

---

## Section shell (required pattern)

```tsx
<section id="work" style={S.secA}>
  <div style={S.inner}>
    <FadeUp>
      <div style={S.label}>Our Work</div>
      <h2 style={S.h2}>Featured <span className="text-gradient">Projects</span></h2>
      <p style={S.sub}>Subtitle copy.</p>
    </FadeUp>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
      {/* cards */}
    </div>
  </div>
</section>
```

**Only allowed `className` in engine.tsx:** `text-gradient` (decorative CSS utility).

---

## Grid recipes (inline)

| Section | `style` |
|---------|---------|
| Work bento | `display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24` |
| Services | `gridTemplateColumns: 'repeat(3, 1fr)', gap: 24` |
| Process | `gridTemplateColumns: 'repeat(5, 1fr)', gap: 16` |
| About | `display: 'flex', gap: 64, alignItems: 'center'` + `flex: 1` children |
| Stats | `gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center'` |
| Footer | `gridTemplateColumns: 'repeat(4, 1fr)', gap: 48` |

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

## Pre-edit checklist

- [ ] Read `S` object first — extend it, don't bypass
- [ ] New section uses `S.inner` wrapper
- [ ] No Tailwind layout classes added to engine.tsx
- [ ] Colors use `var(--*)` or types.ts constants
- [ ] `FadeUp` wrappers don't break flex/grid parent structure

---

## Post-edit verification

```powershell
npm run build
```

HTTP: `http://127.0.0.1:3000/` → 200. Visual: centered 1200px column, consistent padding.

---

## Regression recovery

If layout squished or build fails after an agent edit:

1. `git diff lib/experience-engine/engine.tsx` — look for Tailwind layout classes
2. Restore `S.inner` + `S.sec` pattern on every section
3. Confirm About/Contact sections have balanced JSX tags
4. Re-read this skill — **do not** "fix" by converting to Tailwind

---

## Future Tailwind spike (optional, non-production)

Branch: `tailwind-layout-spike`. Minimal 50-line test page with `.section-container` only. Compare Turbopack dev vs `next build`. Do not merge without operator sign-off.

---

## File map

| File | Role |
|------|------|
| `lib/experience-engine/engine.tsx` | **Live page** — inline `S` + FadeUp |
| `app/globals.css` | Tokens, reset, `.text-gradient`, `.glass-card` |
| `app/layout.tsx` | Fonts + Lenis only |
| `app/page.tsx` | Config wrapper |
| `lib/experience-engine/ui/*.tsx` | Legacy — not wired to live page |
