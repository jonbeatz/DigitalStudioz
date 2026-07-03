# DigitalStudioz Master Build Prompt

Use this prompt when asking Cursor/Claude to build or modify DigitalStudioz experience pages.

---

## Project Identity

- **Project:** DigitalStudioz — Full-Service Digital Studio
- **Framework:** Next.js 16 (App Router)
- **Styling:** CSS custom properties in `globals.css` + **inline `S` object in `engine.tsx`** (layout locked v2.0.0)
- **Tailwind:** v4 installed — use in **non-engine** components only unless operator approves spike branch
- **Animation:** FadeUp (IntersectionObserver) in engine.tsx; Lenis smooth scroll
- **Node:** >= 18

## Taste: Warm Premium

| Token | Value |
|-------|-------|
| Accent (Gold) | `#c8a45c` |
| Gold Bright | `#d4b872` |
| Gold Dim | `#a8883e` |
| Warm Cream | `#e8e2d9` |
| Background (Void) | `#0a0a0b` |
| Background (Canvas) | `#111113` |
| Surface | `#18181b` |
| Text Primary | `#f4f4f5` |
| Text Secondary | `#a1a1aa` |
| Mood | Warm, luxurious, editorial, premium craft |

## Architecture

### Experience Engine (lib/experience-engine/)

```
lib/experience-engine/
  index.ts          ← barrel export
  engine.tsx        ← FULL LIVE PAGE — inline S object + FadeUp (read layout skill first)
  types.ts          ← ExperienceConfig + color constants
  config.ts         ← HDR presets (legacy)
  ui/               ← Legacy components — NOT wired to main page
```

### Layout Rules (CRITICAL — v2.0.0)

Read `.cursor/skills/digitalstudioz-layout/SKILL.md` before any engine.tsx edit.

- **engine.tsx:** inline `const S = { inner, sec, card... }` — **no Tailwind layout classes**
- **Container:** `maxWidth: 1200`, `padding: '0 24px'` via `S.inner`
- **Sections:** `S.sec(bg)` or `S.secA` — `padding: '100px 0'`
- **Allowed className in engine:** `text-gradient` only
- **Do not** convert engine.tsx to Tailwind without operator + spike branch

### Route File Pattern
Each route file should be a config wrapper — `app/page.tsx` exports `createStudioExperience(config)`.

## Key Conventions

### Protected Components
Modify `engine.tsx` only when the task explicitly requires page changes. Follow layout skill v2.0.0.

### layout.tsx
- **LenisProvider only** — do not re-mount `StudioRails` or `CustomCursor` without operator request
- Components remain in `components/` for future use

### Scroll Animation
- **FadeUp** in engine.tsx — IntersectionObserver fade-up
- Do not add GSAP/SplitType to engine without explicit ask

### 3D Scene (not on main page)
- Main page has **no WebGL canvas**
- Scene3D/SceneModel exist for future routes only

### Media
- Store all media in `public/media/`
- GLB models in `public/models/`
- Images in `public/images/`

## Multi-Agent Safety Rules

1. **Never** rewrite route files as full pages — they are config wrappers
2. **Never** add Tailwind layout classes to `engine.tsx` — use inline `S` object
3. **Never** mix `className` and `style` on the same CSS property in engine.tsx
4. **Never** re-mount StudioRails/CustomCursor in layout.tsx without operator ask
5. **Never** duplicate globals.css or layout files
6. **Always** read `digitalstudioz-layout` skill before engine edits
7. **Always** verify `npm run build` exits 0 after changes
8. **Always** start dev server on port 3000 after build passes

## Build Verification

```bash
npm run build    # Must exit 0
```

After build, if port 3000 is free:
```bash
npm run dev      # Verify localhost:3000 responds
```
