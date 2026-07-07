# DigitalStudioz — Project Log

## 2026-07-04 — Start Project + ComfyUI MCP ecosystem work

**Session in DigitalStudioz workspace; primary deliverable was JonBeatz + skeleton ComfyUI MCP setup.**

- **Start Project ritual:** Stack warm; voice (OmniVoice) verified working.
- **Clarified:** LM Studio auto-launch on Start Project only when API offline; Obsidian optional for vault writes.
- **ComfyUI MCP:** Added local **`comfyui-mcp`** to JonBeatz project MCP + `sync:mcp-env`; documented in `IMAGE-WORKFLOW.md`; skeleton v1.17.3 optional manifest entry. Pushed JonBeatz `e41793c`, _core-scripts `f213a70`. No Comfy Cloud MCP.
- DigitalStudioz repo unchanged (`57ccbbb`).

## 2026-07-03 (Late Night) — Responsive design + responsive-by-default policy

**Mobile-first layout shipped for the live site; responsive design is now the default for all new websites.**

- Added `lib/experience-engine/ui/useMediaQuery.ts` (`useMediaQuery` + `useBreakpoints`: mobile ≤767, tablet 768–1023, desktop ≥1024) and `MobileMenu.tsx` (full-screen hamburger overlay, body scroll lock, staggered links).
- Updated `engine.tsx` — all sections adapt grid columns, flex direction, font sizes, and section padding via `isMobile`/`isTablet` and `S.mq()` helper; hamburger nav on tablet + mobile.
- **`digitalstudioz-layout` skill v2.1.0** — responsive-by-default rule, breakpoint table, responsive grid recipes, mobile nav docs, responsive pre-edit checklist. Commit `4277d97`.
- **`_core-scripts` taste catalog** — header notice that `--Website` scaffolds include responsive hooks + hamburger nav. Commit `cc77bc5`.
- Operator confirmed mobile layout improved. Draven memory stored.

## 2026-07-03 — Skill library v1.14.0 + skill/doc sync workflow

**Design/interaction skills sweep + a real sync workflow so projects stop drifting from the shared library.**

- **5 new library skills** (in `_core-scripts/shared-profile-content/skills`): `Scroll-Motion` (Lenis + GSAP 2026 stack), `Scroll-Video-Sequence` (Apple-style canvas frame-scrub on scroll), `Component-Registries` (shadcn ecosystem — Aceternity/Magic UI/Cult UI/Origin UI), `View-Transitions` (native morphs), `Motion-Accessibility` (reduced-motion + CWV gate). Vendored Anthropic `frontend-design` anti-slop brief.
- **`sync-skills.ps1`** — `npm run sync:skills` pulls the canonical library into `.cursor/skills` (refreshes shared, **preserves `digitalstudioz-layout`**); `sync:skills:global` installs to `~/.claude/skills`. **Auto-runs at Start Project** via `session-start.ps1`.
- **`sync-docs.ps1`** — `npm run sync:docs` (preview-by-default, `-Write` to apply) placeholder-aware refresh of universal docs; guards against unresolved placeholders; only touches docs that already exist unless `-AddMissing`. Local doc edits (e.g. our `sync:hermes-mcp` note) are surfaced in `git diff`, never silently clobbered. `.cursor/docs/.docsync.json` holds the project description.
- Committed + pushed across hermes-core-scripts + all 3 profiles.

## 2026-07-03 — Skeleton v1.13.0 backported to all live profiles

**Retrofitted the new v1.13.0 assets into JonBeatz, DigitalStudioz, VaderLabz** via new idempotent `shared-profile-content/scripts/backport-skeleton-assets.ps1` (skip-if-exists, templatized agents, safe hook activation).

- Each profile gained (9 assets): `.claude/agents/` (code-reviewer/doc-keeper/build-verifier), `.cursor/rules/library-docs.mdc` (Context7), `.githooks/pre-commit` (secrets scan, **auto-activated** via `core.hooksPath`), `.editorconfig`, `.prettierrc.json`, `.github/dependabot.yml`, `.gitattributes` (LF-for-hook; appended on JonBeatz which already had one).
- **Secrets hook verified** in a throwaway repo: blocks `sk-…` fake key (exit 1), passes clean commits (exit 0). Confirmed the hook file itself doesn't self-trigger (patterns are `[`-delimited).
- Staged only the backport paths per repo (VaderLabz had unrelated in-flight work — left untouched).
- **Fresh doctors green:** `stack:status` WARM (LiteLLM/ngrok/LM Studio/dev/Telegram all online, base URL clean); `boot:doctor` healthy (SkipDesktop, scheduled task, LM ctx 81920/parallel 2).
- Pushed: hermes-core-scripts, JonBeatz-Command-Center (v4), DigitalStudioz (main), VaderLabz (v3).
- **Deferred (by recommendation):** full boot-stack path-portability refactor — left as an isolated spike; additive `HERMES_PRIMARY_PROFILE_ROOT` override already in place. VaderLabz repo has loose objects — `git gc` maintenance suggested.

## 2026-07-03 — _core-scripts skeleton audit executed (P1+P2+P3)

**Deep audit of `_core-scripts` + `shared-profile-content` executed end-to-end. Skeleton bumped v1.12.0 → v1.13.0.** All JSON + PowerShell validated; `docs-update.ps1` runs clean; all 14 repointed script targets confirmed to exist.

- **P1 (broken/misleading):** repointed 8 dead targets in `templates/package.json` (telegram×4, log×2, `desktop`, `web:static`) to canonical JonBeatz/deepseek scripts + added `stack:status`, `deepseek:ngrok:handoff`, `boot:setup`, `telegram:gateway/sessions`, `sync:hermes-skills`. Deleted orphan `repair_shortcut.vbs` + `inspect_shortcut.vbs` (targeted retired `google-api`, contradicted `cleanup-hermes-shortcuts.ps1`). Retired all `google-api` path refs in MASTER-COMMANDS/INFRASTRUCTURE/TELEGRAM docs → `deepseek-api`. Removed dead `model-engine`/`image-engine` rows from `_core-scripts/.cursor/docs/TRUTH.md`.
- **P1/P2 (docs):** rewrote `UPGRADES-SYSTEMS.md` (JARVIS→Draven, `jarvis:speak`→`draven:speak`, telegram/mcp paths, MCP count 17→**13**, version stamp). Synced shared README (1.6.0→1.13.0, 17→13 servers, refreshed highlights). Removed duplicate `_archive/google-api` row + `litellm_verify`→`litellm-verify` typo in main README/UPGRADES.
- **P2 (scripts):** removed duplicate backup block in `bootstrap-new-project.ps1`; fixed `env-setup.ps1` (was resolving project root to `_core-scripts`, now targets calling project). Implemented real `docs-update.ps1` (encoding + version-alignment report). Renamed profile-template `start-google-api-desktop.ps1` → `deepseek` delegate.
- **P3 (modernization):** added `.claude/agents/` subagent defs (code-reviewer, doc-keeper, build-verifier), `rules/library-docs.mdc` (Context7 anti-hallucination), `.githooks/pre-commit` secrets scan (auto-activated on bootstrap), `.editorconfig`, `.prettierrc.json`, `.github/dependabot.yml`. `-Website` now scaffolds `layout.tsx`+`page.tsx`(ThreeBackground wired)+`globals.css`+`postcss.config.mjs` on **Tailwind v4**; migrated `Nextjs-Tailwind-Bootstrap` skill v3→v4; deduped `Background-Removal` in SKILL-INDEX. Additive `HERMES_PRIMARY_PROFILE_ROOT` override (non-breaking).

## 2026-07-03 — Ecosystem checkup + P1/P2 fixes

**Full Hermes operational audit executed (Cursor Opus + 3 parallel subagents). All doctors green.**

- **Fixed this session:** Google OAuth token (was revoked → re-authenticated, `Token valid`); `stack-status.ps1` doubled `/v1/v1` → normalized to single `/v1`.
- **P1 script parity:** repointed dead `telegram:*` / `log:*` / `sync:telegram-env` refs in DigitalStudioz + VaderLabz to JonBeatz canonical scripts (`_core-scripts\telegram-gateway\scripts\` and `_core-scripts\lib\log-*.ps1` never existed). Fixed VaderLabz `sync:mcp-env` (was missing `mcp-engine\scripts\sync-mcp-env.ps1`) → JonBeatz `sync-mcp-env.mjs`. Removed duplicate `deepseek:ngrok:handoff` key in DS.
- **P1 boot:** added warm-stack skip guard to JonBeatz `session-start.ps1` so `-Full` never force-restarts a healthy `:4000`/`:4040` (parity with shared `session-start.ps1`).
- **P2 parity:** added VaderLabz aliases `hermes:desktop-ready`, `telegram:gateway`, `telegram:sessions`, `sync:hermes-skills`. Added `FITNESS-CHECK.md` to DS + VaderLabz. Fixed stale skeleton header (v1.6.0 → v1.12.0). Untracked VaderLabz `.cursor/mcp.json` (env-refs only, no secret leak) + added `mcp.json.example`. Fixed stale `msc-new` MCP comment in `~/.cursor/mcp.json`. Clarified DS `sync:hermes-mcp` doc (runs from JonBeatz).
- **Security:** all 6 repos — no `.env.local`/credentials in git history; all gitignored.
- **Verified:** DS `telegram:doctor` now resolves; `boot:doctor` healthy; `stack:status` WARM, base URL clean.

## 2026-07-03 — Warm Premium + layout lock (v2.0.0)

**Layout policy locked after 4 failed Tailwind-in-engine attempts.**

- `engine.tsx`: inline `const S` object, 1200px container, FadeUp scroll reveals
- `layout.tsx`: Lenis only — StudioRails + CustomCursor unmounted
- `globals.css`: minimal tokens (no `@theme inline`, no `.section-container`)
- Skill: `.cursor/skills/digitalstudioz-layout/SKILL.md` v2.0.0
- All agent docs aligned: TRUTH, START-HERE v0.5, ReCall, AGENTS, Master-Build-Prompt, TROUBLESHOOTING #12
- Tailwind remains for non-engine components only

## v0.1.0 — 2026-07-01

**Initial scaffold.**

- Next.js 16 + TypeScript + Tailwind CSS v4
- Experience Engine ported from VaderLabz, adapted for Cyber Amethyst
- Procedural 3D geometry (icosahedron core, wireframe torus knot, orbiting spheres)
- 5 content sections: Story, Services, Work, Process, Contact
- All skeleton infrastructure: TRUTH.md, AGENTS.md, .cursor rules, Start/End Project rituals
- package.json with full script suite (session, mem0, draven, backup, deepseek, telegram)
- Build verified, HTTP smoke test passed

## v0.2.0 — 2026-07-01

**Full redesign: Studio Green theme + Huly/Antixor-inspired layout.**

- Color palette changed: purple/blue → green (#22c55e) + dark grey (#111) + black (#050505)
- Huly.io-inspired hero: massive "We Build Digital Experiences" headline
- Antixor-inspired card sections: centered, properly padded, not stuck to sides
- 3D model made much more subtle (emissive 1.5→0.15, scale 1.5→0.5, wireframe only)
- Proper multi-column footer with Services, Company, Connect links
- Spacing/layout overhaul: max-w-5xl containment, section dividers, proper padding

## v0.3.0 — 2026-07-01

**MAVRA Build Pipeline applied.**

- Concept formula: (Product) Digital studio / (Emotion) Precision & trust / (Ritual) Building with code / (Environment) Pure black + green geometric light / (Transformation) Abstract → polished
- 11-image asset library generated via FLUX.2 Klein 9B on fal.ai
- Named with ds- prefix convention (ds-hero-v1, ds-01-abstract-core, ds-02-wireframe-scene, etc.)
- Hero-first architecture: full-bleed hero image with scroll indicator
- Each chapter has custom image behind it with alternating left/right layout
- SplitType line reveals on chapter titles
- GSAP scroll-triggered fade-in + parallax on images
- HDR environment files copied from VaderLabz (neon_photostudio, colorful_studio, etc.)
- Build verified clean, HTTP 200
### 2026-07-04 — Personal session
- **Branch:** main
- **Changes:** Late night closeout: responsive design shipped + responsive-by-default policy documented across skill, ReCall, skeleton catalog
- **Status:** completed

### 2026-07-04 — Personal session
- **Branch:** main
- **Changes:** Jul 4 closeout: Start Project verified, local comfyui-mcp on JonBeatz and skeleton v1.17.3
- **Status:** completed
