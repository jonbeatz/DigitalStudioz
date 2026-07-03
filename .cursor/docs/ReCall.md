# DigitalStudioz — ReCall Update

## Session: 2026-07-03 — Warm Premium Redesign + Layout Lock

### Major Milestone

After multiple rewrite iterations, the site is stable on **inline `const S` layout in `engine.tsx`** with **FadeUp** scroll reveals. Tailwind remains in the project for non-engine components; **Tailwind layout inside `engine.tsx` is locked out** after repeated regressions.

### Root Cause (final, honest)

| Cause | Status |
|-------|--------|
| Mixing Tailwind + inline on **same property** | Confirmed — caused conflicts |
| `max-w-7xl` (1280px) vs 1200px design width | Confirmed contributor |
| `StudioRails` mounted alongside new nav | Confirmed — ghost STORY/SERVICES links |
| Incomplete Tailwind refactors / JSX errors | Confirmed — broke builds |
| Tailwind v4 + Turbopack incompatibility | **Unproven** — needs isolated spike branch |

### Production layout policy (LOCKED)

1. **`engine.tsx`:** inline `S` object — `maxWidth: 1200`, `padding: '100px 0'` sections
2. **`globals.css`:** CSS variables + reset + `.text-gradient` + `.glass-card` only
3. **`layout.tsx`:** Lenis only — `StudioRails` and `CustomCursor` **unmounted**
4. **Tailwind:** use freely in **other** files — not for engine.tsx page shell
5. **Skill:** `.cursor/skills/digitalstudioz-layout/SKILL.md` v2.0.0 documents locked patterns

### What worked

- Warm Premium palette (gold `#c8a45c`, cream `#e8e2d9`, void `#0a0a0b`)
- 8-scene page structure (Hero → Work → Services → Process → About → Stats → Quote → Contact → Footer)
- FadeUp IntersectionObserver reveals
- 8 FLUX demo images (`ds-demo-*.jpg`)
- Removing 3D canvas from main page flow
- Unmounting StudioRails (fixed top-of-page clutter)

### Current page structure

- ~5030px scroll height, 1200px centered container
- Hero → Work (2:1 grid) → Services (3-col) → Process (5-col) → About (1:1) → Stats → Quote → Contact → Footer

### Files changed (authoritative)

| File | State |
|------|-------|
| `lib/experience-engine/engine.tsx` | Inline `S` + FadeUp — **production** |
| `app/globals.css` | Minimal tokens — no `@theme inline` |
| `app/layout.tsx` | Lenis only — rails/cursor removed |
| `.cursor/skills/digitalstudioz-layout/SKILL.md` | v2.0.0 inline lock |
| `app/page.tsx` | Config wrapper |
| `lib/experience-engine/types.ts` | Warm Premium constants |

### Known open items

- No contact form (email link only)
- Mobile responsiveness not fully tested (fixed grid columns)
- README partially updated — see START-HERE for current architecture
- Future: `tailwind-layout-spike` branch if we want to prove Tailwind-in-engine

### Hard lesson

**Docs must match code.** Agents re-broke layout when START-HERE/skill said "use Tailwind in engine.tsx" while production code was inline. All docs now aligned to v2.0.0 inline lock.

### Hermes ↔ Cursor parity (2026-07-03)

Doc: `.cursor/docs/HERMES-DESKTOP-PARITY.md`

- **Cursor = primary Draven cockpit** for DigitalStudioz; Hermes Desktop/Telegram = satellite UIs
- Chat history does **not** auto-sync — bridge via `draven_memories`, `digitalstudioz_memories`, and `ReCall.md`
- Skip `session:start -Full` when `:4000` + `:4040` already online (duplicate LiteLLM on e.g. `:41803`)
- `Start-Project.md` updated: `deepseek:status` first, `-Full` only on cold boot
- Optional SOUL load from `%LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md` for Matrix rituals in Cursor
- Multi-agent: Cursor Task subagents (in IDE) vs Hermes `delegation` (Desktop/Telegram) — one driver per task; see parity doc § Multi-agent orchestration

---

## Hermes Full-Control Setup — 2026-07-03

One-time setup for off-Cursor sessions (browser + desktop control).

### What was installed
- **cua-driver v0.7.0** (`hermes computer-use install`) for computer_use / desktop automation
- **Edge CDP browser** launched on `:9222` via dedicated script

### Config changes (jonbeatz profile)
- `browser.cdp_url` → `http://127.0.0.1:9222`
- `browser.allow_private_urls` → `true`, timeouts increased
- `security.allow_private_urls` → `true`
- `platform_toolsets.cli` already included `browser` + `computer_use` (verified)

### Scripts created
- `D:\Hermes\projects\JonBeatz\scripts\Start-Hermes-CdpBrowser.ps1` — launches Edge on :9222
- `D:\Hermes\projects\JonBeatz\scripts\Start-Hermes-FullControl.ps1` — combined pre-flight
- npm scripts: `hermes:cdp-browser`, `hermes:full-control`

### Verifications
- CDP :9222 — tested with `browser_navigate` to example.com + `browser_console` JS eval
- cua-driver doctor — all checks pass (binary, platform, UIA, screen capture, MCP session active)
- LiteLLM :4000 — online (DeepSeek proxy)
- agent-browser v0.27.0 — installed globally
- Browserbase API keys present in `.env.local` for public-site scraping

### Pre-session commands
```bash
cd D:\Hermes\projects\JonBeatz
npm run hermes:full-control
```
Then confirm CDP :9222, LiteLLM :4000, computer_use doctor all OK.

### PC boot policy (2026-07-03)
- **Hermes Desktop GUI** no longer auto-starts at Windows login (`Master-Startup-Hidden.vbs` → `-SkipDesktop`)
- **Telegram gateway + LiteLLM + ngrok** still auto-start (Master-Startup + `Hermes_Gateway_jonbeatz` scheduled task)
- Removed duplicate `Startup\Hermes_Gateway_jonbeatz.cmd` via `npm run boot:setup`
- Open Desktop on demand: `npm run hermes:desktop-ready` (JonBeatz)
- Audit: `npm run boot:doctor`
- Docs synced: TELEGRAM-WORKFLOW, START-HERE, HERMES-DESKTOP-PARITY, MASTER-COMMANDS (JonBeatz + shared), `_core-scripts` TRUTH/README

### Ecosystem upgrade sprints (2026-07-03)
- **Sprint 1–3:** shortcut cleanup, stack-status, skip-if-up -Full, boot:doctor, Context7 MCP, sync:hermes-skills, profiles.json
- **Sprint 4 (2026-07-03):** LM Studio tuned 81920/parallel 2; Next.js JonBeatz + JonBeatz.dev → 16.2.10; Kristina → 15.5.19; VaderLabz → 16.2.10; VaderLabz `.env.local.example`; DS `sync:mcp-env` → JonBeatz canonical; ngrok handoff file `deepseek-api/logs/ngrok-public-url.txt`; Open-Generative-AI TRUTH.md
- Plan: `.cursor/plans/2026-07-03_HERMES-ECOSYSTEM-AUDIT.md`
