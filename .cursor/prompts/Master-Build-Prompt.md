# DigitalStudioz Master Build Prompt

Use this prompt when asking Cursor/Claude to build or modify DigitalStudioz experience pages.

---

## Project Identity

- **Project:** DigitalStudioz — Full-Service Digital Studio
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 + custom globals.css
- **3D Stack:** React Three Fiber + @react-three/drei + @react-three/postprocessing
- **Animation:** GSAP + ScrollTrigger + Lenis
- **Text splitting:** SplitType (for cinematic text reveals)
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
DO NOT modify engine internals unless explicitly asked. The engine is:

```
lib/experience-engine/
  index.ts          ← barrel export
  engine.tsx        ← createStudioExperience(config) — the main factory
  types.ts          ← ExperienceConfig + shared types
  config.ts         ← HDR_PRESETS, BLOOM_PRESETS, etc.
  scene/
    Scene3D.tsx     ← Canvas + lights + Environment + EffectComposer + Bloom
    SceneModel.tsx  ← 3D abstract model with emissive/glow logic
  ui/               ← All UI components (ported from VaderLabx, adapted for magenta/cyan)
```

### Route File Pattern
Each route file should be ~30 lines — a config wrapper, nothing more.

## Key Conventions

### Protected Components
The following are HERO components. DO NOT modify them unless explicitly asked:
- `lib/experience-engine/engine.tsx`
- `lib/experience-engine/scene/Scene3D.tsx`
- `lib/experience-engine/scene/SceneModel.tsx`
- `lib/experience-engine/types.ts`
- `lib/experience-engine/config.ts`

### Custom Cursor
The custom magenta dot is an ADDITIVE OVERLAY on top of the OS cursor.
- NEVER set `document.body.style.cursor = 'none'`
- NEVER set `body { cursor: none }` in CSS

### Scroll Animation
- `ChapterSection` uses GSAP + ScrollTrigger with a `panelRef`
- The `panelRef` must be on the inner content wrapper, not the outer section
- Hero text uses `HeroAnimation` component with GSAP letter animation

### 3D Scene
- Canvas parent MUST have `position: fixed` or absolute positioning (via Tailwind)
- Bloom is handled by `EffectComposer` in Scene3D
- Model emissive is applied to all meshes with `toneMapped = false`
- `dpr={[1, 1.5]}`, `gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}`

### Media
- Store all media in `public/media/`
- GLB models in `public/models/`
- Images in `public/images/`

## Multi-Agent Safety Rules

1. **Never** rewrite route files as full pages — they are config wrappers
2. **Never** touch the engine or scene components unless the task says "engine" or "scene"
3. **Never** set `cursor: none` — the cursor is always an additive overlay
4. **Never** duplicate globals.css or layout files — routes share the root layout
5. **Always** verify build exits 0 after changes
6. **Always** start dev server on port 3000 after build passes
7. **Always** protect approved hero sections when refining lower sections

## Build Verification

```bash
npm run build    # Must exit 0
```

After build, if port 3000 is free:
```bash
npm run dev      # Verify localhost:3000 responds
```
