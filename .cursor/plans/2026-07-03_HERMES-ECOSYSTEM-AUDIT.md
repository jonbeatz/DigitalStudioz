# Hermes Ecosystem Master Audit & Upgrade Plan

**Date:** 2026-07-03  
**Scope:** `D:\Hermes` (projects, apps, assets, boot stack, MCP, agents, profiles)  
**Operator:** Jon · Primary cockpit: **Cursor** · Satellite: Hermes Desktop / Telegram  

---

## Executive summary

The Hermes ecosystem is **structurally sound** — clear three-zone layout (Factory / Office / Vault), mature `_core-scripts` shared brain, and a recently fixed PC boot policy (`-SkipDesktop`, single Startup entry).

**Top risks today are not missing fancy tools** — they are:

1. **Stale broken shortcuts** (Google API / `custom-scriptz` paths)
2. **Profile script divergence** (JonBeatz vs shared `session-start -Full` force-restarts LiteLLM)
3. **Split doctor/status scripts** (DigitalStudioz `boot:doctor` ≠ real boot audit)
4. **Tooling sprawl without a single `stack:status` ritual**

**MCP posture:** Already above average (GitHub, Hostinger×4, Playwright, Tavily, fetch, fal-ai, Stripe/Vercel/Firebase plugins). **Missing high-ROI add:** **Context7** (version-accurate library docs). Do **not** bulk-mirror Cursor MCPs into Hermes.

---

## Scorecard (honest)

| Area | Grade | Notes |
|------|-------|-------|
| Boot / Telegram | **A-** | Fast path works; dual gateway path (task + Master-Startup) remains |
| Cursor MCP | **A** | 14 global + project + plugins; no Context7 |
| Hermes off-Cursor | **A-** | Full-control validated 2026-07-03 |
| Shared scripts (_core-scripts) | **B+** | README stale; JonBeatz forked copies |
| Profile parity | **B** | DS/VaderLabz delegate; JonBeatz diverges on `-Full` |
| Shortcuts / operator UX | **C+** | Broken copies in `assets\shortcuts\` |
| Profile registry | **C** | Only jonbeatz + msc in `profiles.json` |
| Framework alignment | **C** | Next 14–16 drift across repos |
| Credential hygiene | **B-** | `.env.local.master` + gitignored SFTP doc on disk — verify never committed |

---

## Architecture (what runs when)

### PC login (automatic)

```
Startup\Master-Startup.lnk → VBS → Master-Startup.ps1 -Quiet -SkipDesktop
  PHASE 1: Telegram gateway + EnsureLoginTask
  PHASE 1b: Early partial iPhone ping
  PHASE 2: Hermes Desktop SKIPPED
  PHASE 3: LiteLLM :4000 + ngrok :4040 (background if down)
  PHASE 3b: Full ONLINE ping when :4000 ready

Parallel: Scheduled Task Hermes_Gateway_jonbeatz
Parallel: Scheduled Task cua-driver-serve (on demand for computer_use)
```

### Cursor Start Project (manual)

```
deepseek:status → session:start (light) OR session:start -Full (cold only)
Mem0 preflight → gateway ensure (JonBeatz only in light path)
```

### Hermes off-Cursor (manual)

```
cd JonBeatz && npm run hermes:desktop-ready → MASTER PROMPT in Desktop GUI
```

---

## P0 — Fix this week (safety + confusion)

| # | Item | Action | Effort |
|---|------|--------|--------|
| 1 | **Broken shortcuts** | Audit `D:\Hermes\assets\shortcuts\` + root `.lnk`; delete or retarget Google API / `custom-scriptz` / wrong profile-switcher paths | 30 min |
| 2 | **Unify `-Full` guard** | Port JonBeatz `Start-My-DeepSeek-API` skip-if-`:4000`-up into shared `session-start.ps1` — stop force-restart from DigitalStudioz | 1–2 hr |
| 3 | **Canonical `deepseek:status`** | One `_core-scripts` script checking `:4000`, `:4040`, gateway; all profiles point to it | 1 hr |
| 4 | **DigitalStudioz `boot:doctor`** | Point to JonBeatz `boot-doctor.ps1` or move doctor to `_core-scripts` | 30 min |
| 5 | **Fix HERMES-FULL-CONTROL doc** | cua-driver is scheduled task at login, not Master-Startup — table already mostly correct; remove any "Master-Startup launches cua" wording | 15 min |
| 6 | **Credential audit** | Confirm `siteground-access` + `.env.local.master` never in git history; rotate SFTP if ever exposed | 1 hr |

---

## P1 — High value (next 2 weeks)

### Operator UX

| # | Item | Action |
|---|------|--------|
| 7 | **`stack:status`** | New JonBeatz npm script: deepseek + gateway + LM Studio + Hermes process audit + last boot log timestamp |
| 8 | **Thin DS npm aliases** | From DigitalStudioz: `hermes:desktop-ready`, `sync:hermes-mcp`, `boot:setup`, `telegram:gateway` → delegate to JonBeatz scripts |
| 9 | **Shortcut consolidation** | Single canonical location: `D:\Hermes\*.lnk`; deprecate duplicate `assets\shortcuts\` or sync targets |
| 10 | **Rename misnamed scripts** | `google-doctor.ps1` / `google-status.ps1` → `deepseek-doctor` / `deepseek-api-status` (update package.json) |

### MCP (Cursor only — do not Hermes-bulk-sync)

| # | Server | Why | You have? |
|---|--------|-----|-----------|
| 11 | **Context7** (`@upstash/context7-mcp`) | Stops hallucinated Next/React/Three APIs — highest ROI 2026 add | **No** |
| 12 | GitHub MCP | PR/issue automation | **Yes** |
| 13 | Playwright MCP | E2E + localhost | **Yes** |
| 14 | Hostinger×4 | Deploy/DNS/VPS | **Yes** (Cursor + Hermes synced) |
| 15 | Tavily / fetch | Web research | **Yes** (Hermes has native `web`) |
| 16 | Firecrawl MCP | Deep scrape / research batches | **Partial** (Claude skill, not Cursor MCP) |
| 17 | Stripe / Vercel / Firebase plugins | Billing/deploy | **Yes** (Cursor plugins — keep Cursor-only) |

**Add Context7 to global `~/.cursor/mcp.json`:**

```json
"context7": {
  "command": "npx",
  "args": ["-y", "@upstash/context7-mcp"]
}
```

**Skip for now:** E2B, Composio bulk, duplicating Playwright into Hermes, adding 10+ MCPs (token budget + startup latency).

### Boot deduplication

| # | Item | Action |
|---|------|--------|
| 18 | **Gateway single owner** | Master-Startup PHASE 1: if scheduled task running, skip `gateway install --start-now` |
| 19 | **boot-doctor++** | Verify `Hermes_Gateway_jonbeatz` task exists; tail last `master-startup-*.log` + `telegram-notify.log` |

### Skills & memory

| # | Item | Action |
|---|------|--------|
| 20 | **`sync:hermes-skills`** | Script to copy DS layout skill + deploy skills to Hermes hub after repo changes |
| 21 | **Promote JonBeatz mem0-preflight** | Replace shared HTTP-only preflight in `_core-scripts` |

### Profile registry

| # | Item | Action |
|---|------|--------|
| 22 | **Adopt profiles in Profile Jedi** | Add DigitalStudioz, VaderLabz to `profiles.json` |

---

## P2 — Medium term (month)

| # | Item | Action |
|---|------|--------|
| 23 | **Framework alignment** | JonBeatz/JonBeatz.dev → Next 16; Kristina-Irwin Next 14→15/16 separate sprint |
| 24 | **JonBeatz script delegation** | Move telegram/mem0/session wrappers to `_core-scripts`; keep boot/image local |
| 25 | **Open-Generative-AI decision** | Add TRUTH.md + boundary doc OR archive |
| 26 | **VaderLabz `.env.local.example`** | Copy from shared template v1.12.0 |
| 27 | **JonBeatz.dev voice rename** | `jarvis:*` → `draven:*` |
| 28 | **_core-scripts README** | Remove dead model-engine/image-engine rows; document `_archive/google-api` |
| 29 | **ngrok URL handoff file** | After boot, write public URL to known path for Cursor paste |
| 30 | **Central ecosystem map** | One `PROJECT-STRUCTURE.md` link in every profile START-HERE (MSC external path) |

---

## P3 — Nice to have / avoid

### Do

- TaskBoardAI + hermes-workspace integration audit (ports 3001/3005) if kanban becomes daily driver
- Optional Hermes `agentmail` MCP if email automation needed off-Cursor
- DigitalStudioz minimal `.cursor/mcp.json` symlink to JonBeatz project MCPs if DS workspace needs browserbase without switching repos

### Do NOT

- Auto-start Hermes Desktop at login (reverted 2026-07-03 — keep `-SkipDesktop`)
- Bulk-install Hermes hub skills (already ~95)
- Mirror all Cursor MCPs into Hermes gateway (startup time + duplicate native toolsets)
- Run `session:start -Full` after PC boot when `:4000`+`:4040` already up
- Force-push or merge profile Mem0 collections

---

## Recommended upgrade sequence

### Sprint 1 — Stability (P0)

1. Shortcut cleanup + `npm run boot:setup`
2. Shared `-Full` skip-if-up
3. Canonical `deepseek:status` in `_core-scripts`
4. Fix DS `boot:doctor` → real audit
5. Credential history check

### Sprint 2 — Operator clarity (P1a)

6. `stack:status` script
7. DS npm aliases to JonBeatz
8. Add Context7 MCP globally
9. Gateway dedupe in Master-Startup PHASE 1
10. Rename google-* doctor scripts

### Sprint 3 — Parity (P1b)

11. `sync:hermes-skills`
12. Shared mem0-preflight promotion
13. Profile Jedi registry update
14. boot-doctor scheduled-task check

### Sprint 4 — Debt (P2)

15. Next.js alignment per repo
16. JonBeatz → shared script migration
17. Docs/README cleanup

---

## MCP inventory (current)

### Cursor global (~14)

github, filesystem, playwright, fetch, tavily, terminal-controller, sequential-thinking, desktop-commander, hostinger×4, browsermcp, fal-ai

### Cursor JonBeatz project only

21st-dev-magic, markdownify, browserbase, pencil, composio

### Cursor plugins (DigitalStudioz workspace)

cursor-ide-browser, stripe, vercel, firebase + mirrors

### Hermes jonbeatz profile

**Native toolsets:** browser, computer_use, terminal, file, vision, web, delegation, memory, skills, …  
**Synced MCPs:** github, hostinger×4  
**Not synced (by design):** playwright, tavily, stripe, vercel, firebase, browserbase

---

## Key file references

| Resource | Path |
|----------|------|
| Boot orchestrator | `D:\Hermes\projects\_core-scripts\Master-Startup.ps1` |
| Hidden login launcher | `D:\Hermes\projects\_core-scripts\Master-Startup-Hidden.vbs` |
| Boot audit | `D:\Hermes\projects\JonBeatz\scripts\boot-doctor.ps1` |
| Hermes config | `%LOCALAPPDATA%\hermes\profiles\jonbeatz\config.yaml` |
| Cursor global MCP | `%USERPROFILE%\.cursor\mcp.json` |
| Profile registry | `D:\Hermes\projects\_core-scripts\profile-switcher\profiles.json` |
| Full-control docs | `DigitalStudioz\.cursor\docs\HERMES-FULL-CONTROL-SETUP.md` |
| Parity docs | `DigitalStudioz\.cursor\docs\HERMES-DESKTOP-PARITY.md` |

---

## Success criteria (post-upgrade)

- [x] Zero broken shortcuts under `D:\Hermes\`
- [x] `npm run stack:status` green from JonBeatz after reboot
- [x] `session:start -Full` from DigitalStudioz never restarts warm LiteLLM
- [x] Context7 available in Cursor globally (reload Cursor once)
- [x] `boot:doctor` identical semantics from JonBeatz and DigitalStudioz
- [x] Profile Jedi lists DigitalStudioz + VaderLabz
- [x] LM Studio 81920 / parallel 2 (`npm run hermes:lmstudio -- -Force`)
- [x] Next.js: JonBeatz + JonBeatz.dev @ 16.2.10; Kristina @ 15.5.19; VaderLabz @ 16.2.10
- [x] ngrok handoff: `deepseek-api/logs/ngrok-public-url.txt`
- [ ] Kristina Next 15 → 16 (optional future — client site validated on 15.5.19)

---

*Audit agents: structure, MCP/tools, boot/session. Web research: Context7, GitHub, Playwright as 2026 baseline.*
