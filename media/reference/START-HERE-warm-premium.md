# DigitalStudioz — Start Here (v0.5)

## First Time?

1. Read `TRUTH.md` — project constitution
2. Read `.cursor/docs/ReCall.md` — session history and locked decisions
3. Read `.cursor/skills/digitalstudioz-layout/SKILL.md` — **mandatory before touching engine.tsx**
4. **Hermes Desktop?** **Cursor is primary** — paste **MASTER PROMPT** from `HERMES-FULL-CONTROL-SETUP.md` for off-Cursor sessions. **PC login does not open Desktop** (`-SkipDesktop`); Telegram + stack still auto-start. Open Desktop: `npm run hermes:desktop-ready` from JonBeatz.
5. Run `npm run dev` — port 3000

## Layout Rules (MANDATORY — v2.0.0 LOCKED)

**`engine.tsx` = inline `S` object only.** Do not add Tailwind layout classes to the page shell.

| File | Layout system |
|------|---------------|
| `lib/experience-engine/engine.tsx` | Inline `const S = { inner, sec, card... }` |
| Everything else | Tailwind v4 OK (LoadingScreen, new components, etc.) |
| `globals.css` | CSS variables + `.text-gradient` + `.glass-card` |

```tsx
<section style={S.secA}>
  <div style={S.inner}>
    <h2 style={S.h2}>Title <span className="text-gradient">Gold</span></h2>
  </div>
</section>
```

Container: **1200px** via `S.inner`. Section padding: **100px 0** via `S.sec` / `S.secA`.

**Why:** Four Tailwind-in-engine attempts failed. Inline works reliably. See ReCall.md.

## Current Taste: Warm Premium

| Token | Value |
|-------|-------|
| Accent (Gold) | `#c8a45c` |
| Gold Bright | `#d4b872` |
| Warm Cream | `#e8e2d9` |
| Background (Void) | `#0a0a0b` |
| Background (Canvas) | `#111113` |
| Surface | `#18181b` |
| Container | 1200px (`S.inner`) |
| Section padding | 100px top/bottom |
| Tagline | "Think Big. Build Bold." |

## Page Structure (8 sections)

1. **Hero** — Full-viewport, FadeUp reveals, gold headline
2. **Work** — 2:1 bento grid
3. **Services** — 3-column grid (6 cards)
4. **Process** — 5-column grid
5. **About** — Flex 1:1 text + image
6. **Stats** — 4-column metrics
7. **Quote** — Glass card over atmospheric bg
8. **Contact** — Centered CTA
9. **Footer** — 4-column

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Production build gate |
| `npm run backup:quick` | Backup to `G:\Hermes_Project_BackUpz\DigitalStudioz\` |

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Config wrapper |
| `app/layout.tsx` | Fonts + Lenis (no StudioRails, no CustomCursor) |
| `app/globals.css` | Design tokens + utilities |
| `lib/experience-engine/engine.tsx` | **Entire live page** — inline `S` + FadeUp |
| `lib/experience-engine/types.ts` | Color constants |
| `.cursor/skills/digitalstudioz-layout/SKILL.md` | Layout lock v2.0.0 |
| `.cursor/docs/WARM-PREMIUM-PALETTE.md` | Full token reference |
| `.cursor/docs/ReCall.md` | Session history |

## Design Decisions (Locked 2026-07-03)

| Decision | Value |
|----------|-------|
| **Layout (engine.tsx)** | Inline `S` object — no Tailwind layout |
| **Container** | 1200px centered |
| **3D canvas** | Not on main page |
| **Nav** | In engine.tsx — transparent → solid on scroll |
| **Rails / cursor** | Unmounted from layout (components kept in repo) |
| **Animations** | FadeUp scroll reveals |
| **Images** | 8 `ds-demo-*.jpg` Warm Premium assets |

## Documentation Index

| Doc | Purpose |
|-----|---------|
| `TRUTH.md` | Constitution |
| `WARM-PREMIUM-PALETTE.md` | Design tokens |
| `ReCall.md` | Session history |
| `TROUBLESHOOTING.md` | Known issues + layout recovery |
| `HERMES-DESKTOP-PARITY.md` | **Cursor = primary**; handoff, memory bridge, **multi-agent rules** |
| `HERMES-FULL-CONTROL-SETUP.md` | Hermes Desktop browser CDP + computer_use setup prompts |
| `SKILL-INDEX.md` | Skills catalog |
| `MEM0-LMSTUDIO.md` | Memory + LM Studio |
| `GITHUB-SETUP.md` | Repo setup |
| `HOSTINGER-DEPLOY.md` | Live deploy |
