# DigitalStudioz — ReCall Update

## Session: 2026-07-03 (Night) — DeepSeek V4 unveiled + Cursor hangup fixed

- **Root truth:** From bootstrapping until this moment, both `deepseek-v4-pro` and `deepseek-v4-flash` in Cursor/Hermes were aliased via LiteLLM to the **legacy** `deepseek/deepseek-chat` endpoint. We were **never actually calling DeepSeek V4**. Both names hit the same old chat model — no Pro vs Flash difference existed.
- **v1.17.0 (commit `0541641`)** — corrected the backend: Pro now hits `deepseek/deepseek-v4-pro`, Flash hits `deepseek/deepseek-v4-flash`. Legacy `deepseek-chat` retires July 24, 2026.
- **v1.17.1 (commit `46a8f31`)** — Cursor hangup discovered: V4 Pro with thinking enabled returns **empty `content`** and **only `reasoning_content`** (chain-of-thought). Cursor Agent waits for visible content → hangs. **Fix:** both models set to `thinking: { type: disabled }` (not `reasoning_effort: none` — V4 API rejects that). New `litellm-verify-reasoning.mjs` catches reasoning-only replies. All paths verified: localhost + ngrok remote + Hermes billing mode = **ALL PASS**.
- **What stays the same:** Cursor URL `http://127.0.0.1:4000/v1`, key `sk-jonbeatz-deepseek-2026`, model names `deepseek-v4-pro` / `deepseek-v4-flash`. Hermes Desktop + Telegram unchanged.
- **Draven memory:** context saved — the two-model-looked-like-V4-but-wasn't gotcha is documented.

## Session: 2026-07-03 (Late) — DeepSeek V4 API via LiteLLM

- **Problem:** LiteLLM `litellm_config.yaml` mapped both `deepseek-v4-pro` and `deepseek-v4-flash` to the **legacy** backend `deepseek/deepseek-chat` — same endpoint twice. Legacy IDs retire **July 24, 2026**.
- **Fix (_core-scripts v1.17.0, commit `0541641`):**
  - `deepseek-v4-pro` → `deepseek/deepseek-v4-pro` with `reasoning_effort: high` + thinking enabled
  - `deepseek-v4-flash` → `deepseek/deepseek-v4-flash` with `reasoning_effort: low` + thinking disabled
  - **Friendly names unchanged** — Hermes Desktop, Telegram, Cursor still use `deepseek-v4-pro` / `deepseek-v4-flash` at `http://127.0.0.1:4000/v1`, key `sk-jonbeatz-deepseek-2026`
- **Verified:** `litellm-verify.mjs` PASS (models list + pro chat); flash smoke OK. LiteLLM **1.86.2** on port **4000**.
- **No reasoner** added — only Pro + Flash as requested.

## Session: 2026-07-03 (Eve) — Ecosystem health sweep + _core-scripts Context7

- **5-project health sweep** (MyStudioChannel, VaderLabz, DigitalStudioz, JonBeatz, JonBeatz.dev): all clean git trees, valid `package.json`, core docs present, **zero encoding/mojibake** across `.md`/`.mdc`/`.cursorrules`. Versions align with each `TRUTH.md`.
- **Fixes applied (committed + pushed):**
  - **MyStudioChannel:** pushed `MSC-Website-v10` to origin (was local-only → now tracked); renamed `package.json` name `my-project` → `mystudiochannel`; refreshed `TRUTH.md` timestamp.
  - **VaderLabz:** pinned `next` to exact **16.2.10** (was `^16.2.10`) in `package.json` + lockfile, to match ecosystem pinning.
- **_core-scripts audit → v1.16.0 (committed + pushed):** the always-on `library-docs.mdc` directs every agent to use **Context7**, but the canonical `mcp.json` manifest didn't declare it — new projects inherited the rule without the server. **Added `context7` to `shared-profile-content/mcp.json` (now 14 servers)**, updated the count in README + UPGRADES-SYSTEMS, and removed a stray `_mem0export.py`. Verified all 18 template script targets exist, 29 skills / 19 rules present, bootstrap sound.
- **Takeaway:** shared skeleton is healthy and now internally consistent (rule ↔ MCP manifest); any newly bootstrapped project inherits Context7 alongside the rule that depends on it.

## Session: 2026-07-03 (PM) — LM Studio VRAM fix + Obsidian/Mem0 verify

- **Corrects earlier "LM Studio tuned 81920/parallel 2" note** — that giant context was the *cause* of runaway VRAM (a 2.5 GB 4B model ballooned to ~14 GB). Not a leak; KV cache scales with `context × parallel`.
- **Fix:** every loadable LM Studio model set to **parallel 1** via the GUI ("Max Concurrent Predictions → 1"), which writes the *live vendor-keyed* config. 4B + 9B at **16384** context; everything else on the safe **8192** global default (`settings.json → defaultContextLength`).
- **Key gotcha:** LM Studio only reads **vendor-keyed** per-model configs (`qwen\`, `deepseek\`, `google\`, `flux\`, `jonbeatz\`). Old **download-source** configs (`unsloth\`, `bartowski\`, …) are **orphaned/ignored** — proven by loading the 14B (ignored its `bartowski\` 12288, used global 8192). Don't hand-edit; use the GUI.
- **Obsidian Copilot** verified talking to local **Qwen3.5 9B** (server logs matched chat timestamps). JIT load/switch works; Copilot model name must exactly match the LM Studio id.
- **Mem0** pipeline green (`mem0:preflight`) — shares the loaded 9B, no swap; parallel 1 is harmless (requests are sequential).
- **Vault:** added Draven's own section `03_AI_Memory/Draven/Draven.md`; appended full resolution to `02_Knowledge/Gotchas/LMStudio-context-eats-VRAM.md`.
- Knob locations: **LM Studio** = load/VRAM (context, parallel, GPU offload); **Obsidian Copilot** = generation (temperature, token limit, overrides per-request).

## Session: 2026-07-03 — Skill library v1.14.0 + sync workflow

- Central skill library is the **single source of truth** (`_core-scripts/shared-profile-content/skills`). Edit skills **there**, never per-project.
- New interactive-web skills available: **Scroll-Motion** (Lenis+GSAP), **Scroll-Video-Sequence** (Apple scroll frame-scrub), **Component-Registries** (shadcn ecosystem), **View-Transitions**, **Motion-Accessibility**, plus vendored **frontend-design**.
- `npm run sync:skills` refreshes this project's `.cursor/skills` from the library (keeps `digitalstudioz-layout`); auto-runs at Start Project. `npm run sync:docs` = preview doc drift, `-- -Write` to apply.

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
