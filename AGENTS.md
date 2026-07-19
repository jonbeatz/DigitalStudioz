# Agent Instructions — DigitalStudioz Profile

## First time here?

1. Read **`TRUTH.md`** — constitution, core rules, connections.
2. Read **`.cursor/docs/START-HERE.md`** — daily ritual and doc order.
3. Read **`.cursor/docs/ReCall.md`** — recent session history.
4. Read **`.cursor/skills/digitalstudioz-layout/SKILL.md`** — **before any `engine.tsx` work** (v2.0.0 inline lock).
5. Read **`.cursor/docs/MASTER-COMMANDS.md`** — all available commands.
6. Browse **`SKILL-INDEX.md`** — available domain skills and what they cover.
7. **Hermes Desktop?** **Cursor is primary** — read **`.cursor/docs/HERMES-DESKTOP-PARITY.md`** (cockpit, handoff, multi-agent rules).

## Shared Brain Reference

This project was bootstrapped from the **shared profile content** at
`D:\Hermes\projects\_core-scripts\shared-profile-content\`. See the ecosystem
layout in **`PROJECT-STRUCTURE.md`** (in that same repo).

## Documentation Hierarchy

| Priority | Document | Purpose |
|----------|----------|---------|
| 1 | `TRUTH.md` | Constitution |
| 2 | START-HERE.md | Daily ops |
| 3 | MASTER-COMMANDS.md | Command reference |
| 4 | MEM0-LMSTUDIO.md | Memory + local LLM |
| 5 | ENV-VARS-REFERENCE.md | Env var registry |
| 6 | HOSTINGER-DEPLOY.md | Live site deploy |
| 7 | GITHUB-SETUP.md | GitHub repo + Pages |
| 8 | TROUBLESHOOTING.md | Known issues |

## Session Rituals

| Trigger | Action |
|---------|--------|
| Start Project / Start Session | Read TRUTH + START-HERE + ReCall, search Mem0, print status |
| End Project / Close Session | Summarize, update ReCall, optionally save Mem0 |
| **log fixes** / record fixes | Write Divi/WP issues→solutions (`Log-Fixes.md` → Problems-Solutions + ISSUES + catalog) then `theme:sync` |
| Update Docs | Sync version, encoding check, align docs (broader fleet sync) |
| Backup Project | Run interactive backup flow per project convention |

## Backup

```powershell
npm run backup:quick    # Standard backup, auto folder name, no prompts
npm run backup:full     # Full mirror — includes everything
npm run theme:sync      # LocalWP Divi child → assets/wp-theme/
npm run theme:backup    # sync + zip under G:\Hermes_Project_BackUpz\DigitalStudioz\themes\
npm run wp:smoke        # Home layout guards (Local site up)
```

Backups go to `G:\Hermes_Project_BackUpz\DigitalStudioz\` with sequential naming. Theme zip backups: `...\themes\`.

## Skills Index

Available domain skills (see `SKILL-INDEX.md` for full list with tags):

- **Layout (mandatory for page work):** digitalstudioz-layout v2.0.0 — inline `S` object in `engine.tsx`; no Tailwind layout in page shell
- **Design:** NovaMira-Design, Premium-UI, DesignMD, MSC-UI-Taste
- **3D:** Three.js-Ops, WebGL-UI, 3D-Modeling, 3D-Scroll, R3F-Gotchas
- **Git/DevOps:** GitHub-Ops, Workflow-Ops, Checkpoint-Restore
- **Deploy:** Deploy-FTP-Node, Docs-Governance, Hostinger-Ops
- **Automation:** Google-Workspace, Image-Workflow

## Core Rules

- **Environment:** Windows 10/11 PowerShell. No bash heredocs.
- **UTF-8:** Never rewrite .md from PowerShell without -Encoding UTF8.
- **Mem0:** Uses `digitalstudioz_memories` collection — **isolated** from VaderLabz, JonBeatz, MSC, and all other profiles. Configured in `.env.local`. Never switch or share collections.
- **Draven:** Shared `draven_memories` collection across all profiles — store AI assistant cross-session context only.
- **Boundaries:** Stay within this profile. Do not mix other profiles' context.
- **Recovery:** Run recovery commands yourself — don't only tell the operator.
- **Backup root:** `G:\Hermes_Project_BackUpz\DigitalStudioz\`

---

*Created: 2026-07-01*
