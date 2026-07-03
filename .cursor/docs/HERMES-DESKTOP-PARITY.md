# Hermes Desktop ↔ DigitalStudioz Parity (Experiment)

**Purpose:** Make Hermes Desktop sessions behave like Cursor sessions when working on **DigitalStudioz** — same docs, memory, cwd, and layout rules.

**Status:** Experimental (2026-07-03). **Default:** use **Cursor** as the primary Draven cockpit for DigitalStudioz. Hermes Desktop is optional — bridge work via shared memory + docs (below).

---

## Run in Hermes Desktop UI

Run these in a **Hermes Desktop** terminal (or ask Hermes to run them) before pasting the session prompt.

### Stack already up (default — use this first)

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run deepseek:status
# If :4000 + :4040 are online → use light probes only:
npm run session:start
```

### Cold PC boot — full stack (both :4000 and :4040 offline)

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run deepseek:status
# Only when deepseek:status shows LiteLLM :4000 and ngrok :4040 OFFLINE:
npm run session:start -- -Full
```

**Do not** run `-Full` when `:4000` and `:4040` are already online — it force-restarts LiteLLM and can spawn a duplicate proxy (e.g. on `:41803`) while Hermes looks stuck for several minutes.

---

## Why this exists

Hermes Desktop and Cursor use **different config channels**:

| Channel | Cursor | Hermes Desktop |
|---------|--------|----------------|
| Workspace default | Open repo (DigitalStudioz) | **JonBeatz** profile + `D:\Hermes\projects\JonBeatz` |
| MCPs | `.cursor/mcp.json` + plugins | `%LOCALAPPDATA%\hermes\profiles\jonbeatz\config.yaml` |
| Skills | Repo `.cursor/skills/` | Hermes skills hub (separate copy) |
| Mem0 | `digitalstudioz_memories` | Often defaults to `jonbeatz_memories` |

Without an explicit parity ritual, Hermes will use the wrong profile context.

---

## Cursor as primary Draven cockpit (recommended)

**Use Cursor for daily DigitalStudioz work.** Hermes Desktop, Telegram, and CLI are **satellite UIs** — same brain *when you bridge correctly*, not automatic chat sync.

### One driver per task

| Do | Don't |
|----|-------|
| Pick **Cursor OR Hermes** as the active agent for one task | Run both agents editing the same files at once |
| Share the **stack once** (`deepseek:status` → light `session:start`) | Run `session:start -Full` from both UIs the same session |
| **Export** Hermes takeaways to Matrix + Draven Mem0 before switching to Cursor | Assume Hermes chat history appears in Cursor automatically |

Closing Hermes Desktop **does not** stop Cursor, Draven Mem0, SOUL.md, LiteLLM, or the Telegram gateway — only that app's chat session ends.

**PC login (2026-07-03):** `Master-Startup.ps1` runs with `-SkipDesktop` — Telegram gateway + LiteLLM + ngrok auto-start; Hermes Desktop GUI does **not**. Open on demand from JonBeatz: `npm run hermes:desktop-ready`. See `HERMES-FULL-CONTROL-SETUP.md` § PC boot after restart.

### Memory architecture (what is shared vs siloed)

| Layer | Hermes Desktop | Cursor (Draven) | Shared? |
|-------|----------------|-----------------|---------|
| **Chat transcripts** | Hermes session DB + FTS5 | Cursor agent transcripts | ❌ Separate |
| **Hermes built-in memory** | `memory_enabled` in `config.yaml` | Not auto-loaded | ❌ Hermes-only |
| **SOUL / personality** | `%LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md` | Cursor rules + optional read | ⚠️ Same identity, different injection |
| **Project Mem0** | Often `jonbeatz_memories` | `digitalstudioz_memories` | ❌ Unless parity prompt |
| **Draven Mem0** | `npm run draven:search/add` | Same commands from repo root | ✅ **`draven_memories`** |
| **The Matrix (docs)** | ReCall, TRUTH, project-log | Same Git files | ✅ **Shared** |
| **Skills** | Hermes hub (copy) | Repo `.cursor/skills/` | ⚠️ **Repo wins** |
| **MCPs** | Subset in `config.yaml` | `.cursor/mcp.json` + plugins | ⚠️ Cursor fuller |
| **Subagents** | Hermes `delegation` orchestrator | Cursor Task / subagents | ❌ Different systems |

**Bridge rule:** Anything important from Hermes must land in **`draven_memories`**, **`digitalstudioz_memories`**, or **`ReCall.md`** — or Cursor won't see it.

### Cursor session ritual (DigitalStudioz)

Run from repo root at **Start Project** or when resuming work:

```powershell
cd D:\Hermes\projects\DigitalStudioz

# Stack — skip -Full if already online (see top of this doc)
npm run deepseek:status
npm run session:start
# Cold boot only: npm run session:start -- -Full

# Memory
npm run mem0:preflight
npm run mem0:search -- "DigitalStudioz current priorities"
npm run draven:search -- "recent Draven decisions cross-project"
```

**Mandatory reads (agents):** `TRUTH.md` → `START-HERE.md` → `ReCall.md` → `digitalstudioz-layout/SKILL.md`.

**Optional Draven SOUL load** — when you want full Matrix protocol in Cursor, say:

> Read `%LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md` and operate as Draven per SOUL + TRUTH.

Or invoke: *"Mission briefing, load The Matrix"* / *"I sense a disturbance in The Matrix"* (SOUL recovery rituals).

**Voice (ritual only):**

```powershell
npm run draven:speak -- "DigitalStudioz online. We are ready to build."
```

### Handoff: Hermes → Cursor

After substantive work in Hermes Desktop, **before** switching to Cursor:

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run mem0:add -- "Session [date]: [project takeaway]"
npm run draven:add -- "DigitalStudioz [date]: [cross-session Draven context]"
```

Update `ReCall.md` (and `project-log.md` if milestone). In Cursor, open with: *"Continue from ReCall — last Hermes session exported to Draven Mem0."*

### Handoff: Cursor → Hermes

Before opening Hermes for a related task:

1. Run Cursor **End Project** closeout (`ReCall.md` + optional `draven:add`).
2. In Hermes, paste the **Session start prompt** (below) — do not rely on JonBeatz defaults.
3. Run `npm run deepseek:status` — light probes only if stack is up.

### Cursor closeout (End Project)

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run mem0:add -- "Session [date]: [one-line takeaway]"
npm run draven:add -- "DigitalStudioz Cursor session [date]: [key context]"
# Update ReCall.md + project-log.md per End-Project.md
```

### What each UI is best for

| Use **Cursor** when… | Use **Hermes** when… |
|----------------------|----------------------|
| DigitalStudioz repo open, layout/engine/build | Phone / Telegram gateway agent |
| Full MCP + plugin set needed | Hermes Desktop UI or voice-first flow |
| Git-integrated coding agent | JonBeatz-primary work (native profile) |
| Primary Draven copilot for this project | Long-running gateway tasks off-IDE |

### Extra recommendations

1. **Sync layout skill to Hermes** after repo skill changes (command in [Skills parity](#skills-parity) below).
2. **Weekly:** `cd JonBeatz && npm run sync:hermes-mcp` if you use Hermes MCPs — keeps GitHub/Hostinger aligned.
3. **Never mix Mem0 collections** on DigitalStudioz — always `digitalstudioz_memories` + `draven_memories`.
4. **Decision lock** (from SOUL): big choices → update ReCall + `mem0:add` + `draven:add` in the same beat.
5. **Cursor has more tools** — prefer Cursor for deploy, browser verify, and plugin MCP work; Hermes for mobile/telegram continuity.
6. **One LiteLLM** on `:4000` — kill strays on `:41803` if `-Full` was run twice (see [Troubleshooting](#troubleshooting-hermes-stuck-on-sessionstart--full)).
7. **Full browser + desktop control off-Cursor** — see [HERMES-FULL-CONTROL-SETUP.md](HERMES-FULL-CONTROL-SETUP.md) (one-time setup prompt + session activation prompt).

---

## Multi-agent orchestration (safe defaults)

**Rule:** Two engines, one driver per task. Do not change Hermes `config.yaml` or Cursor settings for multi-agent — existing setup is already tuned.

### Two separate systems (do not mix on one task)

| You are in… | Multi-agent = | Engine |
|-------------|---------------|--------|
| **Cursor** (this IDE) | Task / subagents (`explore`, `shell`, `generalPurpose`, etc.) | Cursor-native |
| **Hermes** (Desktop / CLI / Telegram) | `delegation` orchestrator (max 3 concurrent + 3 async children) | Hermes-native |

They **do not** call each other. Bridge results via `draven:add` + `ReCall.md` when switching tools.

### Easiest setup (already in place — keep it)

| Layer | Status | Action |
|-------|--------|--------|
| Cursor parent + Tasks | ✅ Default | Use Cursor for DigitalStudioz coding + parallel research |
| Hermes `delegation` | ✅ Configured (`orchestrator_enabled`, `inherit_mcp_toolsets`, `subagent_auto_approve: false`) | **No change** |
| LiteLLM `:4000` | ✅ Shared stack | One stack per PC session; no duplicate `-Full` |
| Draven Mem0 | ✅ Cross-tool memory | Close every multi-agent session with `draven:add` |
| Hermes computer_use | ⚠️ Optional | Install only via [HERMES-FULL-CONTROL-SETUP.md](HERMES-FULL-CONTROL-SETUP.md) when needed |

### What to say (copy-paste phrases)

**In Cursor** — parallel research without breaking repo:

```
Run parallel Tasks: (1) explore agent — scan [topic] in repo/docs, (2) [second task if needed].
Synthesize only — do not edit engine.tsx or layout files unless I ask.
```

**In Hermes** — parallel off-IDE work:

```
Delegate up to 2 children: Child A — [research task]. Child B — [test/check task].
cwd D:\Hermes\projects\DigitalStudioz. Do not edit engine.tsx layout. approvals manual.
```

### Task routing (pick one primary)

| Job | Primary | Multi-agent |
|-----|---------|-------------|
| Code + build + git | **Cursor** | `explore` + parent implements |
| Browser/Playwright verify on `:3000` | **Cursor** | Parent or `explore` |
| CI failure summary | **Cursor** | `ci-investigator` Task |
| Phone / Telegram / away from IDE | **Hermes** | `delegation` children |
| Desktop app control (Mail, etc.) | **Hermes** | `computer_use` (after full-control setup) |
| Cross-session recall | **Both** | `draven:search` at start, `draven:add` at end |

### Safe don'ts (prevents breakage)

- ❌ Cursor + Hermes both editing the same files on the same task
- ❌ `session:start -Full` from both UIs when stack is already up
- ❌ Raising Hermes `max_spawn_depth` or `subagent_auto_approve` without a reason
- ❌ Expecting Hermes chat history in Cursor (or vice versa) without `draven:add`

### Multi-agent closeout (either UI)

```powershell
cd D:\Hermes\projects\DigitalStudioz
npm run draven:add -- "[date] Multi-agent [Cursor|Hermes]: [one-line outcome + open items]"
# Update ReCall.md if architecture or layout policy touched
```

---

## Pre-flight (once per PC session)

Run from **DigitalStudioz** repo root unless noted. **Stack commands:** see **Run in Hermes Desktop UI** at the top of this doc.

```powershell
# 1. Stack — light probes OR -Full per top section (after deepseek:status)
cd D:\Hermes\projects\DigitalStudioz
npm run deepseek:status
npm run session:start
# Cold boot only: npm run session:start -- -Full

# 2. Mem0 preflight (for search/add)
npm run mem0:preflight

# 3. MCP parity — from JonBeatz (syncs Hermes config.yaml MCPs)
cd D:\Hermes\projects\JonBeatz
npm run sync:mcp-env
npm run sync:hermes-mcp

# 4. Launch Hermes Desktop (JonBeatz shortcut is fine — we override context in chat)
cd D:\Hermes\projects\JonBeatz
npm run desktop
```

**Note:** `sync:hermes-mcp` only exists in **JonBeatz** `package.json`, not DigitalStudioz. It mirrors GitHub + Hostinger MCPs into Hermes — not the full Cursor plugin set.

---

## Session start prompt (paste into Hermes Desktop)

Copy everything in the block below as your **first message** when opening a DigitalStudioz task in Hermes Desktop:

```
DigitalStudioz parity session — treat this as a Cursor-equivalent cold start.

PROFILE BOUNDARY
- Active project: DigitalStudioz ONLY
- Repo root: D:\Hermes\projects\DigitalStudioz
- Do NOT use JonBeatz, VaderLabz, or MSC paths unless I explicitly ask
- All shell commands run from D:\Hermes\projects\DigitalStudioz

MANDATORY READS (in order)
1. D:\Hermes\projects\DigitalStudioz\TRUTH.md
2. D:\Hermes\projects\DigitalStudioz\.cursor\docs\START-HERE.md
3. D:\Hermes\projects\DigitalStudioz\.cursor\docs\ReCall.md
4. D:\Hermes\projects\DigitalStudioz\.cursor\skills\digitalstudioz-layout\SKILL.md (v2.0.0 LOCKED)

LAYOUT LOCK (non-negotiable)
- lib/experience-engine/engine.tsx uses inline const S = { ... } only
- NO Tailwind layout classes in engine.tsx
- Tailwind OK in other files (LoadingScreen, new components)
- Do not convert engine.tsx to Tailwind without my explicit approval

MEMORY
- Project Mem0: digitalstudioz_memories (MEM0_USER_ID=digitalstudioz)
- Run mem0 from DigitalStudioz root: npm run mem0:search -- "query"
- Draven cross-session: npm run draven:search -- "query"
- Do not use jonbeatz_memories or vaderlabz_memories for this task

VERIFY BASELINE
- npm run build (must exit 0)
- http://127.0.0.1:3000/ should return 200 if dev is running

After reading the files, confirm: cwd, layout policy, and current page structure in one short status block. Then wait for my task.
```

---

## What should match after parity

| Item | Expected |
|------|----------|
| **cwd** | `D:\Hermes\projects\DigitalStudioz` |
| **Layout policy** | Inline `S` in `engine.tsx` (skill v2.0.0) |
| **Docs authority** | TRUTH → START-HERE → ReCall → layout skill |
| **Mem0** | `digitalstudioz_memories` |
| **Build gate** | `npm run build` exit 0 after code changes |
| **layout.tsx** | Lenis only — no StudioRails, no CustomCursor |

---

## Skills parity

| Source | Location | Notes |
|--------|----------|-------|
| **Repo (Cursor truth)** | `DigitalStudioz\.cursor\skills\` | Authoritative for layout lock |
| **Hermes hub** | `%LOCALAPPDATA%\hermes\profiles\jonbeatz\skills\` | Separate copy — may drift |

If Hermes layout skill disagrees with the repo skill, **repo wins**.

To refresh Hermes copy after repo skill updates (manual experiment):

```powershell
$src = "D:\Hermes\projects\DigitalStudioz\.cursor\skills\digitalstudioz-layout"
$dst = "$env:LOCALAPPDATA\hermes\profiles\jonbeatz\skills\design\digitalstudioz-layout"
New-Item -ItemType Directory -Force -Path $dst | Out-Null
Copy-Item -Path "$src\SKILL.md" -Destination "$dst\SKILL.md" -Force
```

---

## MCP parity (honest limits)

| MCP / tool | Cursor | Hermes (after sync:hermes-mcp) |
|------------|--------|--------------------------------|
| GitHub | Yes | Yes |
| Hostinger ×4 | Yes | Yes |
| Tavily, Playwright, fetch | Cursor global | Not auto-synced |
| cursor-ide-browser | Cursor plugin | Hermes has built-in `browser` toolset (different) |
| Stripe, Vercel, Firebase plugins | Cursor | Not in Hermes unless added manually |

Hermes built-in toolsets still available: `terminal`, `file`, `web`, `vision`, `code_execution`, `skills`, `memory`, `image_gen`.

---

## 3D / GSAP / scroll work in Hermes

Still fully available — not blocked by the layout lock.

| Tech | In DigitalStudioz deps | Skills to invoke |
|------|------------------------|------------------|
| Lenis | Yes (`layout.tsx`) | — |
| GSAP | Yes (`package.json`) | `3D-Scroll`, site workflows |
| Three.js / R3F | Yes | `Three.js-Ops`, `3D-Website-Fusion`, `R3F-Gotchas` |
| New Tailwind project | N/A | `Nextjs-Tailwind-Bootstrap`, `Premium-UI` |

Layout lock applies **only** to `engine.tsx` in this repo — not new projects.

---

## End-of-session (parity closeout)

```powershell
cd D:\Hermes\projects\DigitalStudioz

# If substantive work done:
npm run mem0:add -- "Session [date]: [one-line takeaway]"
npm run draven:add -- "DigitalStudioz Hermes session [date]: [key context]"

# Update tracking docs if layout or architecture changed
# (ReCall.md, project-log.md — same as Cursor End Project)
```

---

## Experiment success criteria

Consider parity **working** when Hermes:

1. Runs commands from `D:\Hermes\projects\DigitalStudioz` without drifting to JonBeatz
2. Does not add Tailwind layout to `engine.tsx`
3. Reads repo docs before editing
4. Uses `digitalstudioz_memories` for project recall
5. Passes `npm run build` after changes

Consider parity **failed** if Hermes:

- Edits JonBeatz paths by default
- Converts `engine.tsx` to Tailwind layout
- Uses `jonbeatz_memories` for DigitalStudioz context
- Re-mounts StudioRails/CustomCursor in `layout.tsx`

---

## Troubleshooting: Hermes stuck on `session:start -Full`

**Symptom:** Hermes Desktop shows "thinking" for 3+ minutes after `npm run session:start -- -Full`. A second LiteLLM terminal may appear on a random port (e.g. **41803**).

**Cause:** `-Full` **force-restarts** LiteLLM + ngrok even when `:4000` / `:4040` are already online from Cursor or an earlier boot. The restart spawns a duplicate proxy; the second instance binds to an ephemeral port when `:4000` is taken.

**Fix:**

1. **Cancel** the stuck Hermes terminal task (stop / dismiss) — the stack is already fine.
2. Check status: `npm run deepseek:status` — expect LiteLLM `:4000` + ngrok `:4040` **online**.
3. If a stray LiteLLM popup remains on `:41803`, close that window or kill that PID — keep only the `:4000` instance.
4. **Do not re-run** `-Full` until a cold boot. Use `npm run session:start` (light probes) instead.

---

## Related docs

| Doc | Purpose |
|-----|---------|
| [START-HERE.md](START-HERE.md) | Daily ops + layout lock |
| [Start-Project.md](../prompts/Start-Project.md) | Cursor cold start — stack check before `-Full` |
| [ReCall.md](ReCall.md) | Session history |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) #12 | Layout regression recovery |
| [MEM0-LMSTUDIO.md](MEM0-LMSTUDIO.md) | Mem0 commands |
| [HERMES-FULL-CONTROL-SETUP.md](HERMES-FULL-CONTROL-SETUP.md) | Browser CDP + computer_use on-deck for Hermes Desktop |
| JonBeatz `npm run sync:hermes-mcp` | Hermes MCP sync |

---

*Experiment started: 2026-07-03*
