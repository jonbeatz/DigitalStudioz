# DigitalStudioz — Start Here (v0.4)

## First Time?

1. Read `TRUTH.md` — project constitution
2. Read `.cursor/docs/ReCall.md` — session history and decisions
3. Read the `digitalstudioz-layout` skill — **critical** for avoiding Tailwind layout conflicts
4. Run `npm run dev` to start dev server on port 3000

## Layout Rules (MANDATORY)

**Do NOT use Tailwind utility classes for layout/spacing in engine.tsx.**

All spacing, grids, and positioning use inline JavaScript `style={}` objects. See the `digitalstudioz-layout` skill for the exact pattern. The one exception: `hidden md:flex` for responsive visibility toggles.

## Current Taste: Warm Premium

| Token | Value |
|-------|-------|
| Accent (Gold) | `#c8a45c` |
| Gold Bright | `#d4b872` |
| Warm Cream | `#e8e2d9` |
| Background (Void) | `#0a0a0b` |
| Background (Canvas) | `#111113` |
| Surface | `#18181b` |
| Container max-width | 1200px |
| Section padding | 100px top/bottom |
| Tagline | "Think Big. Build Bold." |

## Page Structure (8 sections, ~5030px)

1. **Hero** — Full-viewport, centered headline, gold accent, scroll indicator
2. **Work** — 2:1 grid (featured project + sidebar cards)
3. **Services** — 3-column grid (6 services with numbering)
4. **Process** — 5-column grid (Concept → Design → Build → Deploy → Iterate)
5. **About** — Flex 1:1 (text left, image right)
6. **Stats** — 4-column metric strip
7. **Quote** — Full-width glass card with atmospheric background
8. **Contact** — Centered CTA with gold button + GitHub link
9. **Footer** — 4-column grid with copyright

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Production build |
| `npm run backup:quick` | Standard backup to `G:\Hermes_Project_BackUpz\DigitalStudioz\` |

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Config wrapper with chapter data |
| `app/layout.tsx` | Root layout (fonts, Lenis, cursor) |
| `app/globals.css` | CSS custom properties (colors, reset, utilities) |
| `lib/experience-engine/engine.tsx` | **The entire page** — all sections in one component with inline styles |
| `lib/experience-engine/types.ts` | Color constants and shared types |
| `.cursor/docs/WARM-PREMIUM-PALETTE.md` | Full design token documentation |
| `.cursor/docs/ReCall.md` | Session history and root cause analysis |

## Design Decisions (Locked 2026-07-03)

| Decision | Value |
|----------|-------|
| **Layout** | 100% inline styles, no Tailwind layout classes |
| **Container** | 1200px max-width, centered |
| **3D** | Removed — no WebGL canvas |
| **Nav** | Transparent → solid on scroll, gold "Start a Project" CTA |
| **Sections** | 100px vertical padding, consistent rhythm |
| **Grids** | CSS grid with `gridTemplateColumns`, not flexbox |
| **Images** | 8 FLUX-generated Warm Premium demo images |

## Documentation Index

| Doc | Purpose |
|-----|---------|
| `TRUTH.md` | Constitution |
| `WARM-PREMIUM-PALETTE.md` | Design token system |
| `ReCall.md` | Session history |
| `SKILL-INDEX.md` | Domain skills catalog |
| `ENV-VARS-REFERENCE.md` | Environment variables |
| `MEM0-LMSTUDIO.md` | Memory + local LLM |
| `GITHUB-SETUP.md` | Repo setup |
| `HOSTINGER-DEPLOY.md` | Live site deploy |
