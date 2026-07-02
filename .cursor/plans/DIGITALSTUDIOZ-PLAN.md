# DigitalStudioz — Build Plan

## Brand Identity

**DigitalStudioz** — A premium digital services agency showcase. This site demonstrates everything JonBeatz can build: 3D web experiences, AI integration, full-stack development, design systems, and automation.

### Concept Formula (MAVRA Method)

| Element | Answer |
|---------|--------|
| Product | Premium digital services — 3D web, AI, full-stack dev, automation |
| Emotion | Awe, trust, ambition — "they can build anything" |
| Ritual | Watching code/geometry assemble into something beautiful |
| Environment | Deep space cyberpunk studio — dark matter, neon grids, floating UI |
| Transformation | Static wireframe → fully realized 3D experience (the build process itself) |

### Taste Selection: Cyber Amethyst (#d946ef)

From the 3D Website Taste Catalog, **Cyber Amethyst** best fits the DigitalStudioz brand — creative, expressive, high-tech:

| Token | Value |
|-------|-------|
| Accent | `#d946ef` |
| Bright | `#e879f9` |
| Dim | `#a21caf` |
| Background | `#030105` |
| Surface | `#08020a` |
| Card | `#0d0512` |
| Text | `#f5f0ff` |
| Scroll shift | → `#22d3ee` (cyan) |
| Mood | Neon, cyberpunk, night market |

### Accent Palette Shift
- Primary: `#d946ef` (magenta/purple — creative energy)
- Secondary: `#22d3ee` (cyan — technology/trust)
- Gradient: `#d946ef → #22d3ee` (the creative-to-technical spectrum)

## Architecture

Based on VaderLabz Experience Engine + MAVRA Build Guide:

```
DigitalStudioz/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, Lenis, Cursor, GSAP)
│   ├── globals.css         ← Design tokens + reset + studio rails
│   ├── page.tsx            ← Main route (config wrapper only)
│   └── archive/page.tsx    ← Legacy/fallback
├── lib/
│   ├── experience-engine/  ← Ported from VaderLabz, customized
│   │   ├── engine.tsx
│   │   ├── types.ts
│   │   ├── config.ts
│   │   ├── index.ts
│   │   ├── scene/
│   │   │   ├── Scene3D.tsx
│   │   │   └── SceneModel.tsx   ← Replaces SaberModel for DigitalStudioz
│   │   └── ui/
│   │       ├── HeroAnimation.tsx
│   │       ├── ChapterSection.tsx
│   │       ├── TopNav.tsx
│   │       ├── BgOverlay.tsx
│   │       ├── ScrollPrompt.tsx
│   │       ├── ProgressBar.tsx
│   │       ├── StatsStrip.tsx
│   │       ├── ClosingQuote.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── BackToTop.tsx
│   │       ├── ArticleOverlay.tsx
│   │       └── AccordionSection.tsx
│   ├── lenis-provider.tsx
│   └── cursor-context.tsx
├── components/
│   ├── CustomCursor.tsx
│   ├── StudioRails.tsx
│   └── StudioLogo.tsx        ← New: DigitalStudioz logo component
├── public/
│   ├── media/                ← All assets
│   ├── models/               ← GLB/GLTF 3D models
│   ├── images/               ← Static images
│   └── videos/               ← Loop videos
└── .cursor/
    ├── docs/
    │   └── START-HERE.md
    └── prompts/
        └── Master-Build-Prompt.md
```

## Section Plan (MAVRA Chapter Structure)

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | 3D scene with floating geometric abstract model + scroll-scrubbed intro. Tagline: "Think Big. Build Bold." |
| 2 | **Story / Origin** | The DigitalStudioz origin story — one developer's journey from code to full-service studio |
| 3 | **Services / Anatomy** | Bento grid showcase: 3D Web, AI Integration, Full-Stack, Automation, UI/UX Design, Consulting |
| 4 | **Work / Portfolio** | Project showcases with hover reveal cards |
| 5 | **Process / Ritual** | How DigitalStudioz works — concept → design → build → deploy → iterate |
| 6 | **Stats / Proof** | Metrics, projects delivered, technologies mastered |
| 7 | **Contact / CTA** | "Let's Build Something Bold" — form + social links |
| 8 | **Footer** | Brand mark + essential links |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom globals.css
- **3D:** React Three Fiber + @react-three/drei + @react-three/postprocessing
- **Animation:** GSAP + ScrollTrigger + Lenis
- **Text splitting:** SplitType
- **Node:** >= 18

## Key Differences from VaderLabz

1. **Accent color**: Magenta/cyan (`#d946ef` / `#22d3ee`) instead of red (`#ff2a36`)
2. **3D Model**: Abstract geometric shapes (icosahedron/torus knot) instead of lightsaber
3. **Hero Model**: A procedural geometric sculpture that morphs/rotates on scroll
4. **Brand voice**: Studio/agency instead of lab/playground
5. **Background**: Cyber amethyst aesthetic with grid lines and particle effects
6. **Service bento grid**: New component inspired by NovaMira's bento design language
7. **Portfolio cards**: Hover-reveal cards with project thumbnails
