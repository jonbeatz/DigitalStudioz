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

## Mem0 Quick Reference

```powershell
npm run mem0:preflight   # Verify LM Studio
npm run mem0:search -- "query"
npm run mem0:add -- "text to remember"
npm run mem0:list
npm run sync:mcp-env     # Sync MCP tokens from .env.local to Cursor
```

Default model: **qwen3-4b-instruct-2507** @ LM Studio `:1234`  
Collection: `digitalstudioz_memories` (isolated — never share with other profiles)

## Hostinger (live deploy later)

1. Read [HOSTINGER-REFERENCE.md](.cursor/docs/HOSTINGER-REFERENCE.md)
2. Set `DIGITALSTUDIOZ_DOMAIN`, `DIGITALSTUDIOZ_*_ROOT` in `.env.local`
3. `npm run build` → FTPS upload → hPanel **Restart**
4. Full runbook: [HOSTINGER-DEPLOY.md](.cursor/docs/HOSTINGER-DEPLOY.md)

**Preview (no Hostinger):** [GitHub Pages](https://jonbeatz.github.io/DigitalStudioz/) — auto-deploys from `main`.

## Documentation Index

| Doc | Purpose |
|-----|---------|
| [TRUTH.md](../TRUTH.md) | Constitution |
| [ENV-VARS-REFERENCE.md](.cursor/docs/ENV-VARS-REFERENCE.md) | All env vars |
| [MEM0-LMSTUDIO.md](.cursor/docs/MEM0-LMSTUDIO.md) | Memory + local LLM |
| [CURSOR-LITELLM-BRIDGE.md](.cursor/docs/CURSOR-LITELLM-BRIDGE.md) | Cursor + DeepSeek + ngrok |
| [GITHUB-SETUP.md](.cursor/docs/GITHUB-SETUP.md) | Repo, branches, releases |
| [HOSTINGER-DEPLOY.md](.cursor/docs/HOSTINGER-DEPLOY.md) | Live site deploy |
| [SKILL-INDEX.md](../SKILL-INDEX.md) | Domain skills catalog |
