# DigitalStudioz — Project Log

## 2026-07-18 — Theme 0.8.2 back-to-top + hero + Hostinger WP sync plan

- **0.8.2:** Back-to-top clickable at absolute bottom (`.ds-back-top-row` above Divi `z-index:4` grid).
- Hero: fal **FLUX.2 Klein 4B** → live **`ds-hero-klein-a.jpg`** (media 130); et-cache clear gotcha.
- Divi KB batch: 16wells docs / divi5-skill / ToolKit → fleet TOOLS-* + `DIVI5-EXTERNAL-KB.md`.
- Hostinger: live login verified; playbook **[HOSTINGER-WP-SYNC.md](./divi-wp-dev/HOSTINGER-WP-SYNC.md)** — Phase A when Jon says go-live; ongoing = theme-only push.
- Problems-Solutions **§K.5 / §P**; theme mirror **0.8.2**.

## 2026-07-18 — Theme 0.7.6–0.8.1 footer credit columns + responsive grid

- TB **31**: credit bar → Divi `1/2|1/2` Text (© / Built with); Menus **9/10/11** unchanged.
- **Gotcha:** `wp_update_post` needs **`wp_slash`** or Divi `\u` escapes corrupt FE.
- **0.8.0:** ≤980 brand centered above; three menus in a row (no 4-col squish/overlap).
- **0.8.1:** menu trio content centered under brand.
- Hostinger: deferred; when ready use WPvivid full files+DB (`digitalstudioz.com` exists).
- Problems-Solutions **§O**; theme mirror **0.8.1**.

## 2026-07-18 — Theme 0.7.5 footer Menu swap + mobile center

- TB **31**: three Menu modules → WP menus **9/10/11** (Services/Studio/Connect).
- Gotcha: `menu.advanced.menuId` required — else Primary fallback.
- Mobile footer centered; tablet 1+3 layout; gutters restored.
- `theme:sync` + `wp:smoke` PASS. Problems-Solutions **§N**. Native ~**95%**.

## 2026-07-18 — Native Audit re-grade (~93%) + D7 cleanup

- Re-audit vs 0.6.6 baseline: overall **~93%** (was ~88%); Home ~96%; TB chrome ~90%.
- **D7:** deleted draft TB layouts 35/36. **D14 prep:** WP menus Footer Services/Studio/Connect (**9/10/11**).
- Doc: [DIVI5-Native-Audit.md](./divi-wp-dev/DIVI5-Native-Audit.md); Problems-Solutions §M.
- Open next: footer Menu swap · button pad · typography `!important`.

## 2026-07-18 — Ops upgrades: theme mirror, wp:smoke, DEV-WORKFLOW

- **theme:sync / theme:backup / theme:push** — LocalWP child theme ↔ `assets/wp-theme/`; zip backups under `G:\Hermes_Project_BackUpz\DigitalStudioz\themes\`.
- **wp:smoke** — Playwright Home guards (nav gap, mobile stacks, back-top vs credit).
- **DEV-WORKFLOW.md** + End-Project / START-HERE / MASTER-COMMANDS.
- Visual QA 390/768/1440 — no regressions (theme stays **0.7.4**).

## 2026-07-18 — Nav right 0.7.3 + mobile stack 0.7.4 + `log fixes` shortcut

- **0.7.3:** Menu links hug Start a Project (middle col grow + menu wrap flex-end).
- **0.7.4:** Mobile stack for Services/Process/About/Stats/Footer; back-to-top 72/88px clear of credit.
- **Docs:** Problems-Solutions §J–§K; ISSUES-RESOLVED; catalog; ReCall.
- **Shortcut:** say **`log fixes`** → `.cursor/prompts/Log-Fixes.md` (also `record fixes` / `log solutions`).

## 2026-07-18 — Spacing polish 0.7.1–0.7.2 + Problems-Solutions docs

- **0.7.1:** Contact CTA air (para mb 32); intro→cards ~36px (section rowGap 16 + intro mb 20); Featured side pad/gap; Services gutters.
- **0.7.2:** Process intro dead space — CSS `min-height:200px` was on **all** process columns; scoped to `:has(.ds-svc-num)`.
- **Docs:** Expanded [DIVI5-Problems-Solutions.md](./divi-wp-dev/DIVI5-Problems-Solutions.md) §F.5–F.8 (best practices + never-again); catalog rows; ISSUES-RESOLVED; Layout Polish; Home Native; ReCall.
- **Operator:** Confirmed spacing “much better.” Theme live on LocalWP only (WP folder not git).

## 2026-07-18 — Home spacing lock + MCP stack + Problems-Solutions docs

- **Spacing:** Divi 5 column `row-gap:30px` stacked on module margins → Next 12px became ~42px. Child theme **0.6.6** spacing lock (zero column row-gap; hero 12/24/40 measured). Live theme on LocalWP only (WP folder not git).
- **Mobile chrome:** frost drawer **0.6.4**; Menu module path **0.6.0+**.
- **MCP:** AI Editor Divi5 free tier write-tested; keep **one** MCP entry (Local WP `.cursor/mcp.json`); Local WP MCP fixed (`type:http` + auth); Novamira/wpmcp MCP disabled until HTTP routes fixed. Operator default: **IAWB** primary, AI Editor secondary, local-wp for CLI/logs.
- **Docs:** Master `DIVI5-Problems-Solutions.md`; Layout Polish / Home Native / catalog / README / ISSUES-RESOLVED; WP `MCP-SETUP.md`; `AI_EDITOR_DIVI_API_KEY` in ENV-VARS.
- **Protect:** TB 30/31/32; no Launch Variables overwrite; no Pee-Aye buy for now.

## 2026-07-18 — Hermes profile default = digitalstudioz

- Aligned Hermes Desktop + CLI active from leftover `the-night-i-met-santa` / `jonbeatz` → **`digitalstudioz`**.
- Mem0 already isolated (`digitalstudioz_memories`) — no memory migration needed.
- Added `profile:align*` npm scripts; switcher `set-active` now updates LocalAppData CLI pointers.

## 2026-07-18 — End Project: brand walls documented + closeout

- Divi SoT page **57** + CSS ref **54**; agent compose gotchas (JSON `\u003c`/`wp_slash`, hex BGs, et-cache, no VB on 54) written into `divi-wp-dev/` + Local-WP mirrors.
- Child theme gutter fix (`.container::before`) noted as **v0.3.4** on LocalWP theme.
- **Left off / next:** Warm Premium Divi homepage from Next.js reference; protect TB 30/31/32.
- Closeout: Update Docs + Mem0 + vault + git push + `backup:full` + End Project ritual.

## 2026-07-18 — WP/Divi docs hub → `divi-wp-dev/`

- Consolidated playbooks, PRDs, YouTube research, and WP issues into `.cursor/docs/divi-wp-dev/` (see `README.md`).
- Pointers left at old `playbooks/` and root `ISSUES-RESOLVED.md`. Palette stays in parent docs.

## 2026-07-18 — Divi5 LocalWP setup catalog started

- Created living catalog: `.cursor/docs/divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` (git-backed SoT) + WP mirror `DIVI5-SETUP-CATALOG.md`.
- Captures verified stack, setup checklist, issues/fixes table, watch-outs, verify steps.
- Linked from TRUTH, START-HERE, ISSUES-RESOLVED, MCP-SETUP, vault hub.
- Rule: new LocalWP/Divi/MCP findings append to catalog first, then one-liner in `divi-wp-dev/ISSUES-RESOLVED.md`.
- **Later same day:** §4.5 hero match · §4.6 Theme Builder header/footer · **§4.7** TB “huge padding” = hero `100vh` CSS leak onto `.et-l--header` / `.et-l--footer` (fix: scope to `.et-l--post`).

## 2026-07-18 — LocalWP DigitalStudioz-WP live; MCP stack verified

**WordPress production path is running locally with full agent tooling.**

- Created / wired `D:\Hermes\projects\Local-WP\DigitalStudioz-WP` (WP 7.0.2, PHP 8.4.10, Divi 5.9, Warm Premium child theme).
- MCP: Local Agent Tools, Novamira, wpmcp (`wpmcp-server` registrar mu-plugin), ACF MCP, IA Webmaster Bridge — all green after HTTPS/TLS and WP-CLI PHP path fixes.
- Deactivated duplicate standalone `mcp-adapter` (files kept); Novamira ships the adapter.
- Child theme: removed blank `index.php`; added `js/core-scripts.js` + enqueue.
- Brave MCP can drive logged-in wp-admin. Next.js temp site remains design reference.
- Docs/Mem0/vault/Mnemosyne closeout this session; git push from DigitalStudioz profile (WP folder is not yet its own git repo).

## 2026-07-17 — Warm Premium locked as WP+Divi production design

**Closed the design fork:** keep current Next.js aesthetic for DigitalStudioz.com.

- Retired Tactile Brutalism / acid cyan (`#00ffcc`) from playbooks and agent rules.
- Canonical tokens remain Warm Premium (`#0a0a0b` / `#c8a45c` / `#e8e2d9`, 8px/16px radius) — `WARM-PREMIUM-PALETTE.md`.
- Updated: MASTER-COMPLETE + FINAL-v3 PRDs, AI-Blog playbook, START-HERE, ReCall, TRUTH, vault hub.
- Reference freeze backup: `nextjs-warm-premium-temp-reference-2026-07-17`. Companion PRD PDFs may lag Markdown.

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

### 2026-07-18 — Personal session
- **Branch:** main
- **Changes:** End Project: Divi brand SoT page 57 + agent gotchas documented; next = Warm Premium Divi homepage
- **Status:** completed
