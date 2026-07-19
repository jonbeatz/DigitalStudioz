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

## Current Taste: Warm Premium (LOCKED — production)

Canonical for the live temp site **and** the WordPress + Divi 5 rebuild. Full tokens: `WARM-PREMIUM-PALETTE.md`. Tactile Brutalism / cyan `#00ffcc` is **retired**.

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
| Radius | 8px controls / 16px cards |
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

## WordPress + Divi 5 (production build — 2026-07-18)

| Item | Path / note |
|------|-------------|
| LocalWP site | `D:\Hermes\projects\Local-WP\DigitalStudioz-WP` → `https://digitalstudioz.local` |
| Child theme (live SoT) | `wp-content/themes/dgtl-digitalstudioz-theme` (+ `js/core-scripts.js`, `acf-json/`) |
| Theme git mirror | `assets/wp-theme/dgtl-digitalstudioz-theme` — sync with `npm run theme:sync` |
| Front page | Static **Home** (page ID `15`) |
| MCP setup | WP folder `.cursor/docs/MCP-SETUP.md` + `.cursor/mcp.json` |
| **WP/Divi docs hub** | `.cursor/docs/divi-wp-dev/README.md` — catalog, issues, PRDs, research |
| **Dev workflow** | `divi-wp-dev/DEV-WORKFLOW.md` — measure → fix → verify → log fixes → theme:sync |
| **Setup catalog** | `divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` — working stack, checklist, issues/fixes |
| This Next.js site | Keep as Warm Premium **content/layout reference** until WP homepage matches |

### Chat shortcuts (WP/Divi fixes)

| Say | Does |
|-----|------|
| **log fixes** | Write session fixes into `DIVI5-Problems-Solutions.md` + ISSUES + catalog + ReCall ([Log-Fixes.md](../prompts/Log-Fixes.md)) |
| **log fixes and mem0** | Same + Mem0/Draven |
| **update docs** | Full fleet/profile doc sync (broader than log fixes) |

### WP theme + smoke commands

```powershell
npm run theme:sync      # LocalWP → git mirror
npm run theme:backup    # sync + zip under G:\Hermes_Project_BackUpz\DigitalStudioz\themes\
npm run theme:push      # mirror → LocalWP (restore)
npm run wp:smoke        # Home layout guards @ 390 + 1440 (Local site up)
```

Agent MCPs (all verified green): `local-wp`, `novamira-digitalstudioz`, `wpmcp-digitalstudioz`, `acf-mcp`, `ia-webmaster-bridge`. Prefer `http://digitalstudioz.local` for Node MCP URLs (Local self-signed HTTPS).

## Documentation Index

| Doc | Purpose |
|-----|---------|
| `TRUTH.md` | Constitution |
| `WARM-PREMIUM-PALETTE.md` | Design tokens |
| `ReCall.md` | Session history |
| `divi-wp-dev/` | **Central WP/Divi notes** (catalog, PRDs, issues, YouTube) |
| `divi-wp-dev/DEV-WORKFLOW.md` | Daily WP/Divi cadence + theme sync / smoke |
| `divi-wp-dev/DIVI5-Problems-Solutions.md` | **Master** chrome/layout issue → solution log |
| `divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` | Living Divi5/LocalWP success + failure catalog |
| `divi-wp-dev/ISSUES-RESOLVED.md` | Short fix index (details in catalog / Problems-Solutions) |
| `TROUBLESHOOTING.md` | Known issues + layout recovery |
| `HERMES-DESKTOP-PARITY.md` | **Cursor = primary**; handoff, memory bridge, **multi-agent rules** |
| `HERMES-FULL-CONTROL-SETUP.md` | Hermes Desktop browser CDP + computer_use setup prompts |
| `SKILL-INDEX.md` | Skills catalog |
| `MEM0-LMSTUDIO.md` | Memory + LM Studio |
| `GITHUB-SETUP.md` | Repo setup |
| `HOSTINGER-DEPLOY.md` | Live deploy |
