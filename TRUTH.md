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

## Core Rules

- **Voice:** OmniVoice primary for ritual speaks (Start/End Project, explicit `draven:speak`). Edge TTS backup only if Omni fails. Ritual-only — never auto-read chat replies or Mem0 recall.
- **Pathing:** All global scripts reside in `D:\Hermes\projects\_core-scripts\`. Profile switcher registry must use workspace paths (git repo roots).
- **JSON Security:** Never use PowerShell to write JSON (BOM issues). Use Python or write_file.
- **UTF-8 / Markdown:** Never rewrite .md / .mdc with PowerShell Get-Content / Set-Content without -Encoding UTF8. Prefer Python scripts for version badge updates. Run encoding checks before doc commits.
- **PowerShell:** This is a Windows environment. All scripts are PowerShell (.ps1). No bash heredocs.

## Profile Reading Order

1. `TRUTH.md` — This file (identity)
2. `.cursor/docs/START-HERE.md` — Daily rituals
3. `.cursor/docs/ReCall.md` — Ongoing memory
4. `.cursor/docs/MASTER-COMMANDS.md` — Command reference
5. Skills referenced in SKILL-INDEX.md — Domain expertise

## Isolation Rules

- This profile is self-contained in `D:\Hermes\projects\DigitalStudioz`.
- Keep memories in the `digitalstudioz_memories` collection only — **never** share with VaderLabz, JonBeatz, or MSC.
- Draven memory (`draven_memories`) is shared across all profiles — use for AI assistant cross-session context only.
- All changes stay within this workspace.

## Backup

- **Backup root:** `G:\Hermes_Project_BackUpz\DigitalStudioz\`
- **Quick:** `npm run backup:quick`
- **Full:** `npm run backup:full`

---

*Created: 2026-07-01*
