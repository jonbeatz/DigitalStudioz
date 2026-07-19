# TRUTH.md — DigitalStudioz Profile

**Version:** 0.3.0
**Profile root:** D:\Hermes\projects\DigitalStudioz

## Identity & Governance

- **Name:** DigitalStudioz
- **Slug:** digitalstudioz
- **Type:** Full-service digital studio showcase
- **OS/Shell:** Windows 10/11 + PowerShell
- **Purpose:** 3D web experiences, AI integration, full-stack development, automation, UI/UX design

## Core Connections

- **Paid AI Backend:** LiteLLM proxy at `http://127.0.0.1:4000/v1` (DeepSeek V4)
- **Free Local Brain:** LM Studio at `http://127.0.0.1:1234` (qwen3-4b-instruct or similar)
- **Memory Store:** Mem0 — collection `digitalstudioz_memories`
- **Draven Memory:** `draven_memories` / `qdrant_draven` (AI assistant cross-session)
- **GitHub:** [github.com/jonbeatz/DigitalStudioz](https://github.com/jonbeatz/DigitalStudioz)
- **GitHub Pages:** [jonbeatz.github.io/DigitalStudioz](https://jonbeatz.github.io/DigitalStudioz/)
- **Hostinger (live):** hPanel + credentials in `.env.local` — see `.cursor/docs/HOSTINGER-DEPLOY.md`

## Core Rules

- **Voice:** OmniVoice primary for ritual speaks (Start/End Project, explicit `draven:speak`). Edge TTS backup only if Omni fails. Ritual-only — never auto-read chat replies or Mem0 recall.
- **Pathing:** All global scripts reside in `D:\Hermes\projects\_core-scripts\`. Profile switcher registry must use workspace paths (git repo roots).
- **Page layout:** `engine.tsx` uses inline `S` object only — see `.cursor/skills/digitalstudioz-layout/SKILL.md` v2.0.0. Do not add Tailwind layout to engine.tsx without operator approval.
- **Design system:** **Warm Premium** is canonical for the temp Next.js site and the WP + Divi 5 production rebuild — see `.cursor/docs/WARM-PREMIUM-PALETTE.md`. Tactile Brutalism / cyan `#00ffcc` is retired.
- **Hermes Desktop:** Use `.cursor/docs/HERMES-DESKTOP-PARITY.md` for Cursor-equivalent sessions (experiment).
- **JSON Security:** Never use PowerShell to write JSON (BOM issues). Use Python or write_file.
- **UTF-8 / Markdown:** Never rewrite .md / .mdc with PowerShell Get-Content / Set-Content without -Encoding UTF8. Prefer Python scripts for version badge updates. Run encoding checks before doc commits.
- **PowerShell:** This is a Windows environment. All scripts are PowerShell (.ps1). No bash heredocs.

## Profile Reading Order

1. `TRUTH.md` — This file (identity)
2. `.cursor/docs/START-HERE.md` — Daily rituals
3. `.cursor/docs/ReCall.md` — Ongoing memory
4. `.cursor/docs/MASTER-COMMANDS.md` — Command reference
5. Skills referenced in SKILL-INDEX.md — Domain expertise
6. `.cursor/skills/digitalstudioz-layout/SKILL.md` — **before editing `engine.tsx`** (layout v2.0.0 lock)

## WordPress production path (2026-07-18)

- **LocalWP site:** `D:\Hermes\projects\Local-WP\DigitalStudioz-WP` (domain `digitalstudioz.local`)
- **Cursor workspace:** Multi-root — this Next.js profile + DigitalStudioz-WP together
- **Stack:** WP 7.0.2 · Divi 5.9 · child `dgtl-digitalstudioz-theme` **0.7.4** · ACF PRO · Novamira · wpmcp · IAWB
- **Theme live SoT:** LocalWP `wp-content/themes/dgtl-digitalstudioz-theme`
- **Theme git mirror:** `assets/wp-theme/dgtl-digitalstudioz-theme` — `npm run theme:sync` / `theme:backup` / `theme:push`
- **Home smoke:** `npm run wp:smoke` (Local site up)
- **WP cadence:** `.cursor/docs/divi-wp-dev/DEV-WORKFLOW.md` · after fixes say **`log fixes`**
- **MCP config:** `DigitalStudioz-WP/.cursor/mcp.json` (project-scoped; see `.cursor/docs/MCP-SETUP.md` in the WP folder)
- **WP/Divi docs hub:** `.cursor/docs/divi-wp-dev/` — catalog, issues, PRDs (keep fleet docs out of that folder)
- **Setup catalog:** `.cursor/docs/divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` — verified stack, checklist, issues/fixes (git-backed SoT)
- **Master issues log:** `.cursor/docs/divi-wp-dev/DIVI5-Problems-Solutions.md`
- **Design:** Warm Premium only — same tokens as this Next.js reference site

## Isolation Rules

- This profile is self-contained in `D:\Hermes\projects\DigitalStudioz` for the Next.js reference + Hermes docs.
- WordPress runtime lives under `Local-WP\DigitalStudioz-WP` — do not put WP core inside this Next.js root.
- Keep memories in the `digitalstudioz_memories` collection only — **never** share with VaderLabz, JonBeatz, or MSC.
- Draven memory (`draven_memories`) is shared across all profiles — use for AI assistant cross-session context only.

## Backup

- **Backup root (this repo):** `G:\Hermes_Project_BackUpz\DigitalStudioz\`
- **Quick:** `npm run backup:quick` — **Next.js profile only** (does not include LocalWP)
- **Full:** `npm run backup:full` — same scope
- **WordPress:** Use WPvivid and/or Local export / copy of `Local-WP\DigitalStudioz-WP` separately

---

*Created: 2026-07-01*
