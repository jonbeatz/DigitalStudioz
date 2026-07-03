# DigitalStudioz — Full-Service Digital Studio

**Think Big. Build Bold.** Premium scroll-driven showcase for 3D web experiences, AI integration, full-stack development, and automation.

[![Platform](https://img.shields.io/badge/Platform-Web-22c55e?logo=google-chrome)](https://github.com/jonbeatz/DigitalStudioz)
[![Version](https://img.shields.io/badge/version-0.3.0-blue)](https://github.com/jonbeatz/DigitalStudioz/releases)
[![Release](https://img.shields.io/github/v/release/jonbeatz/DigitalStudioz?label=release&sort=semver)](https://github.com/jonbeatz/DigitalStudioz/releases)
[![Repo](https://img.shields.io/badge/GitHub-jonbeatz%2FDigitalStudioz-181717?logo=github)](https://github.com/jonbeatz/DigitalStudioz)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-gold)](https://docs.pmnd.rs/react-three-fiber)
[![Pages](https://img.shields.io/badge/GitHub_Pages-live-222?logo=githubpages)](https://jonbeatz.github.io/DigitalStudioz/)

![DigitalStudioz Hero](public/images/ds-hero-v1.jpg)

---

> **Single source of truth:** Read **[`TRUTH.md`](TRUTH.md)** first, then **[`.cursor/docs/START-HERE.md`](.cursor/docs/START-HERE.md)**.

## Current Status

| Metric | Value |
| :--- | :--- |
| **Version** | `v0.3.0` · [Latest release](https://github.com/jonbeatz/DigitalStudioz/releases) |
| **Stack** | Next.js 16 (App Router) + Lenis + inline layout engine |
| **Taste** | Warm Premium — gold `#c8a45c`, cream `#e8e2d9`, void `#0a0a0b` |
| **Layout** | Inline `S` object in `engine.tsx` (1200px container) — see layout skill v2.0.0 |
| **Live Preview** | [jonbeatz.github.io/DigitalStudioz](https://jonbeatz.github.io/DigitalStudioz/) |
| **Memory** | Mem0 + Qdrant (`digitalstudioz_memories` collection) |
| **AI Backend** | LiteLLM (DeepSeek V4 proxy) + LM Studio (local) |
| **Verified** | `npm run build` — clean static generation |
| **Status** | Active development on `main` |

---

## Screenshots

### Hero — MAVRA-generated full-bleed image

![DigitalStudioz Hero](public/images/ds-hero-v1.jpg)
*Warm Premium hero with FLUX-generated imagery, gold accent, and FadeUp scroll reveals.*

### Chapter sections — alternating image + card layout

![Abstract Core chapter](public/images/ds-01-abstract-core.jpg)
*Five chapters with custom MAVRA assets, SplitType line reveals, and GSAP scroll animations.*

---

## 1. Project Overview

DigitalStudioz is a **full-service digital studio showcase** demonstrating what the JonBeatz ecosystem can build:

- **Warm Premium** design system (gold, warm cream, void-black)
- **SpaceX-style** 8-scene page layout with FadeUp scroll reveals
- Config-driven **Experience Engine** — `engine.tsx` is the full live page
- **Inline layout lock** — `const S` object (1200px container); Tailwind for other components
- 8 FLUX-generated demo images (`ds-demo-*.jpg`)
- Hermes profile infrastructure — Mem0, Draven memory, session rituals, backup scripts

**Profile root:** `D:\Hermes\projects\DigitalStudioz`

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16 (App Router, React 19) | Frontend + routing |
| **3D Engine** | Three.js / React-Three-Fiber / Drei | Procedural geometry + HDR environments |
| **Post-FX** | @react-three/postprocessing | Bloom and scene polish |
| **Animation** | GSAP + ScrollTrigger | Scroll-driven reveals |
| **Scroll** | Lenis | Smooth scroll foundation |
| **Typography** | SplitType | Line-by-line chapter title reveals |
| **Styling** | CSS custom properties + inline `S` layout in engine; Tailwind v4 for other components | Warm Premium tokens |
| **AI Agent** | Draven (Hermes co-pilot) | Cross-session AI assistant |
| **Memory** | Mem0 + Qdrant (local) | Isolated `digitalstudioz_memories` |
| **Deploy** | GitHub Pages (static export) + optional Hostinger | Preview + production |

---

## 3. Pages & Routes

| Route | Description |
|-------|-------------|
| **`/`** | Main showcase — 8 scenes, stats, contact, FadeUp reveals |

---

## 4. Quick Start

```powershell
git clone https://github.com/jonbeatz/DigitalStudioz.git
cd DigitalStudioz
npm install
copy .env.local.example .env.local   # then edit Mem0 vars if needed
npm run dev                            # http://localhost:3000
```

Verify the baseline gate:

```powershell
npm run build
```

**Agent ritual:** Say **Start Project** in Cursor for full cold-start — see [START-HERE.md](.cursor/docs/START-HERE.md).

---

## 5. Architecture

```
DigitalStudioz/
├── app/
│   ├── page.tsx              # Config wrapper
│   ├── layout.tsx            # Fonts + Lenis (no StudioRails/CustomCursor)
│   └── globals.css           # Warm Premium design tokens
├── lib/experience-engine/
│   ├── engine.tsx            # Full live page — inline S + FadeUp
│   ├── types.ts              # Color constants
│   └── ui/                   # Legacy components (not wired to main page)
├── public/images/            # ds-demo-*.jpg Warm Premium assets
├── scripts/
│   └── project-backup.mjs    # G:\Hermes_Project_BackUpz\DigitalStudioz\
└── .cursor/docs/             # START-HERE, ReCall, GITHUB-SETUP
```

---

## 6. Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build |
| `npm run build:pages` | Static export for GitHub Pages |
| `npm run session:start:full` | Cold boot — DeepSeek + ngrok + Mem0 |
| `npm run mem0:search -- "query"` | Search project memories |
| `npm run backup:quick` | Standard backup (no prompts) |

Full reference: [MASTER-COMMANDS.md](.cursor/docs/MASTER-COMMANDS.md)

---

## 7. Documentation

| Document | Purpose |
|----------|---------|
| [TRUTH.md](TRUTH.md) | Profile constitution |
| [START-HERE.md](.cursor/docs/START-HERE.md) | Daily ops + brand tokens |
| [ReCall.md](.cursor/docs/ReCall.md) | Session history |
| [GITHUB-SETUP.md](.cursor/docs/GITHUB-SETUP.md) | Repo, branches, Pages, releases |
| [DIGITALSTUDIOZ-PLAN.md](.cursor/plans/DIGITALSTUDIOZ-PLAN.md) | Original build plan |

---

## 8. Design System — Warm Premium

| Token | Value |
|-------|-------|
| Accent (Gold) | `#c8a45c` |
| Warm Cream | `#e8e2d9` |
| Background (Void) | `#0a0a0b` |
| Background (Canvas) | `#111113` |
| Gradient | `linear-gradient(135deg, #c8a45c, #d4b872)` |
| Layout | Inline `S` object — 1200px container (see layout skill) |
| Tagline | Think Big. Build Bold. |

Full reference: [WARM-PREMIUM-PALETTE.md](.cursor/docs/WARM-PREMIUM-PALETTE.md)

---

## License

MIT — see [LICENSE](LICENSE).

---

*Part of the [JonBeatz](https://github.com/jonbeatz) ecosystem.*
