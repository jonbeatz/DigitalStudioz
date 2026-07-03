# DigitalStudioz — Start Here

## First Time?

1. Read `.cursor/plans/DIGITALSTUDIOZ-PLAN.md` — the full build plan
2. Read `.cursor/prompts/Master-Build-Prompt.md` — agent conventions
3. Run `npm run dev` to start dev server on port 3000

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run session:start:full` | Cold boot — DeepSeek + ngrok + Mem0 |
| `npm run backup:quick` | Standard backup to `G:\Hermes_Project_BackUpz\DigitalStudioz\` |

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main route (config wrapper) |
| `app/layout.tsx` | Root layout (fonts, Lenis, Cursor) |
| `app/globals.css` | Design tokens (Studio Green) |
| `lib/experience-engine/` | The engine — DO NOT MODIFY internals casually |
| `.cursor/prompts/Master-Build-Prompt.md` | Master prompt for AI agents |

## Architecture

DigitalStudioz uses a **config-driven Experience Engine** ported from VaderLabz and customized for the **Studio Green** taste:

- **Engine**: `lib/experience-engine/engine.tsx` — `createStudioExperience(config)`
- **3D Scene**: Procedural abstract geometry (icosahedron + wireframe torus knot + orbiting spheres)
- **Scroll**: Lenis + GSAP + ScrollTrigger
- **Text Reveals**: SplitType on chapter titles
- **Custom Cursor**: Green dot (additive overlay — never hides OS cursor)
- **Studio Rails**: Side navigation with scroll progress
- **Hero**: Full-bleed FLUX-generated image (`public/images/ds-hero-v1.jpg`)
- **Chapters**: Alternating image + card layout with MAVRA-generated assets

## Protected Hero Components

Do NOT modify these unless explicitly asked:
- `engine.tsx`
- `scene/Scene3D.tsx`, `scene/SceneModel.tsx`
- `types.ts`, `config.ts`

## Brand (Studio Green — current)

- **Accent**: `#22c55e` (Studio Green)
- **Secondary**: `#34d399` (Mint)
- **Background**: `#050505` (deep black) / `#111111` (surface)
- **Tagline**: "Think Big. Build Bold."
- **Gradient**: `linear-gradient(135deg, #22c55e, #34d399)`

> **Note:** The original plan used Cyber Amethyst (`#d946ef`). The site was redesigned to Studio Green on 2026-07-01. Always follow `globals.css` tokens as source of truth.

## Mem0

Collection: `digitalstudioz_memories` (isolated from all other profiles).
Configured in `.env.local`. Run `npm run mem0:preflight` before search/add.
