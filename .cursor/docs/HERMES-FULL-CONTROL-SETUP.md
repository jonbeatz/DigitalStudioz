# Hermes Desktop — Full Browser + System Control (On Deck)

**Purpose:** One-time setup so Hermes Desktop has **browser control** (navigate, CDP debug, localhost testing) and **computer use** (desktop/apps) ready when you are **not** in Cursor.

**Profile:** `jonbeatz` → `%LOCALAPPDATA%\hermes\profiles\jonbeatz\config.yaml`

**Status:** Full-control setup is **done** (2026-07-03). Use the **MASTER PROMPT** below at the start of every off-Cursor Hermes session.

---

## MASTER PROMPT (paste this — one prompt for everything)

Copy the entire block below as your **first message** in Hermes Desktop whenever you want Draven on deck off-Cursor (maintenance + full control + safe defaults). Replace `[MY TASK]` at the end.

```
Hermes master session — Draven off-Cursor cockpit.

IDENTITY
- You are Draven (SOUL: %LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md)
- Profile: jonbeatz | Default workspace: D:\Hermes\projects\JonBeatz
- Cursor is primary for DigitalStudioz coding — Hermes is satellite unless I say otherwise

SAFETY (non-negotiable)
- approvals.mode stays manual — confirm before computer_use clicks/types on apps
- Do NOT run session:start -Full if deepseek:status shows :4000 + :4040 already online
- Do NOT bulk-install skills or MCPs — ~95 skills already loaded; only fix what's broken
- Do NOT patch config.yaml unless doctor fails — Hermes may block security-sensitive writes; report and give me manual steps instead
- One driver per task — do not assume Cursor is working the same files in parallel

── PHASE 1: Pre-flight (run all) ──
cd D:\Hermes\projects\JonBeatz
npm run sync:mcp-env
npm run sync:hermes-mcp
npm run hermes:full-control
hermes computer-use doctor

── PHASE 2: Skill sync (repo wins — only if DigitalStudioz work) ──
If my task touches DigitalStudioz OR engine.tsx:
  Copy D:\Hermes\projects\DigitalStudioz\.cursor\skills\digitalstudioz-layout\SKILL.md
    → %LOCALAPPDATA%\hermes\profiles\jonbeatz\skills\design\digitalstudioz-layout\SKILL.md
  cwd for commands: D:\Hermes\projects\DigitalStudioz
  Mem0: digitalstudioz_memories only (not jonbeatz_memories)
  LAYOUT LOCK: engine.tsx = inline const S only — NO Tailwind layout in engine.tsx
  Read: TRUTH.md → START-HERE.md → ReCall.md before edits

── PHASE 3: Optional deepen (only if doctor passed and not already installed) ──
cua-driver skills status — if pack missing: cua-driver skills install

── PHASE 4: Memory recall ──
cd D:\Hermes\projects\DigitalStudioz
npm run mem0:preflight
npm run mem0:search -- "current priorities"
npm run draven:search -- "recent cross-session context"

ACTIVE CAPABILITIES THIS SESSION
- browser + browser_cdp (CDP :9222)
- computer_use (desktop/apps)
- terminal, file, vision, web, delegation (max 2 children if I ask for parallel work)
- MCPs: GitHub + Hostinger (after sync)

DO NOT ADD unless I explicitly ask
- Playwright MCP, Tavily MCP, mass skill installs, Nous Portal, loosening delegation limits

── DELIVERABLE before my task ──
Short status table:
| Check | Pass/Fail |
| CDP :9222 | |
| LiteLLM :4000 (deepseek:status) | |
| cua-driver doctor | |
| MCP sync | |
| layout skill v2.0.0 (if DS) | |

Then say "On deck — ready for task" and wait.

MY TASK: [MY TASK]
```

---

## What you get after setup

| Capability | Tools |
|------------|--------|
| **Web browse + test** | `browser_navigate`, `browser_click`, `browser_snapshot`, `browser_console`, `browser_screenshot` |
| **CDP debugging** | `browser_cdp` (Chrome DevTools Protocol) — requires CDP endpoint on `:9222` |
| **Localhost / LAN** | `browser.auto_local_for_private_urls: true` + `allow_private_urls` for dev URLs |
| **Full desktop control** | `computer_use` via `cua-driver` (background clicks/type/scroll — real cursor does not move) |
| **Terminal / files / vision** | Already in `platform_toolsets.cli` |

**Note:** `/browser connect` is a **CLI slash command** — it does not run inside Desktop chat. This setup uses **`browser.cdp_url` in config.yaml** + a **CDP browser launch script** so Desktop sessions get CDP without slash commands.

---

## One-time setup prompt (paste into Hermes Desktop)

Copy everything in the block below as your **first message** in Hermes Desktop:

```
Hermes full-control setup — install and configure browser + computer_use for off-Cursor sessions.

ROLE
You are Draven. Workspace: D:\Hermes\projects\JonBeatz. Hermes profile: jonbeatz.
Config: %LOCALAPPDATA%\hermes\profiles\jonbeatz\config.yaml
This is a ONE-TIME setup ritual. Execute steps yourself via terminal — do not only list instructions.

GOAL
Leave Jon's PC with:
1) Full browser automation (local agent-browser + CDP on :9222 for browser_cdp)
2) computer_use / cua-driver installed and healthy
3) Toolsets enabled for Desktop/cli sessions
4) On-deck PowerShell scripts Jon can run before a session
5) A short status report when done

SAFETY
- approvals.mode stays manual — do not disable destructive-action approval
- Do not run npm run session:start -- -Full if deepseek:status shows :4000 and :4040 already online
- Do not commit secrets; use existing .env.local keys only if present

── STEP 1: Baseline checks ──
cd D:\Hermes\projects\JonBeatz
npm run deepseek:status
agent-browser --version
hermes computer-use status
hermes computer-use doctor 2>&1

── STEP 2: Install computer_use (cua-driver) ──
hermes computer-use install
hermes computer-use doctor
If doctor fails, report exact failing checks and fix per Hermes docs.

── STEP 3: Ensure agent-browser ──
If agent-browser missing:
  npm install -g agent-browser

── STEP 4: Patch config.yaml ──
Edit %LOCALAPPDATA%\hermes\profiles\jonbeatz\config.yaml (backup first):

browser:
  cdp_url: http://127.0.0.1:9222
  cloud_provider: local
  auto_local_for_private_urls: true
  allow_private_urls: true
  command_timeout: 120
  inactivity_timeout: 300
  record_sessions: false
  engine: auto

security:
  allow_private_urls: true

Ensure platform_toolsets.cli includes at minimum:
  browser, computer_use, terminal, file, vision, web, code_execution, delegation, memory, skills

If platform_toolsets.desktop or platform_toolsets.gui exists, mirror the same list.
Do NOT add computer_use or browser to agent.disabled_toolsets.

── STEP 5: Create on-deck scripts in JonBeatz ──
Create D:\Hermes\projects\JonBeatz\scripts\Start-Hermes-CdpBrowser.ps1:

  - Launches Edge (fallback Chrome) with --remote-debugging-port=9222
  - Uses user-data-dir: $env:LOCALAPPDATA\hermes\chrome-debug
  - Verifies http://127.0.0.1:9222/json/version responds
  - Prints "CDP ready on :9222"

Create D:\Hermes\projects\JonBeatz\scripts\Start-Hermes-FullControl.ps1:

  - Runs deepseek:status (no -Full if already online)
  - Runs Start-Hermes-CdpBrowser.ps1
  - Runs hermes computer-use doctor (exit 0 expected)
  - Prints checklist: CDP :9222, LiteLLM :4000, computer_use ok

Add npm scripts to JonBeatz package.json if missing:
  "hermes:cdp-browser": "powershell -ExecutionPolicy Bypass -File scripts/Start-Hermes-CdpBrowser.ps1"
  "hermes:full-control": "powershell -ExecutionPolicy Bypass -File scripts/Start-Hermes-FullControl.ps1"

── STEP 6: Optional cloud browser (only if keys exist) ──
If BROWSERBASE_API_KEY and BROWSERBASE_PROJECT_ID exist in JonBeatz .env.local, note they are available for public-site scraping. Do not require them for local dev.

── STEP 7: Verify end-to-end ──
Run: npm run hermes:full-control
Confirm :9222 CDP, :4000 LiteLLM, computer-use doctor pass.
Test browser: browser_navigate to http://127.0.0.1:3000 if dev server is up, else https://example.com — browser_snapshot.
If CDP active, test browser_cdp method Target.getTargets.

── STEP 8: Document ──
Append a short entry to D:\Hermes\projects\DigitalStudioz\.cursor\docs\ReCall.md under "Hermes full-control setup" with date, what was installed, script paths, and any doctor warnings.

── DELIVERABLE ──
Reply with a status table:
| Check | Pass/Fail | Notes |
CDP :9222, agent-browser, cua-driver, config patched, scripts created, browser smoke, computer_use doctor

List exact commands Jon runs before each off-Cursor session.
```

---

## Session activation prompt (paste when you need full control)

Use this at the **start** of a Hermes Desktop session (after one-time setup):

```
Hermes full-control session — browser + desktop on deck.

Before my task:
1. Run: cd D:\Hermes\projects\JonBeatz && npm run hermes:full-control
2. Confirm CDP :9222, LiteLLM :4000, computer_use doctor OK
3. Read SOUL.md: %LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md

ACTIVE TOOLSETS THIS SESSION
- browser (navigate, snapshot, console, screenshot, browser_cdp)
- computer_use (desktop/apps — ask approval before destructive clicks)
- terminal, file, vision, web

BOUNDARIES
- approvals.mode manual — confirm before computer_use clicks/types on non-browser apps
- For DigitalStudioz work: cwd D:\Hermes\projects\DigitalStudioz, mem0 digitalstudioz_memories, layout lock on engine.tsx
- Bridge takeaways to: npm run draven:add + ReCall.md when done

My task: [describe what you want tested or controlled]
```

---

## Operator quick reference (manual)

```powershell
# One command: pre-flight + open Desktop (recommended when you need Hermes off-Cursor)
cd D:\Hermes\projects\JonBeatz
npm run hermes:desktop-ready

# Or step by step:
npm run hermes:full-control   # CDP :9222 + cua-driver + DeepSeek
npm run desktop               # Electron GUI (jonbeatz profile)
# Then paste MASTER PROMPT in Hermes Desktop chat

# CDP browser only
npm run hermes:cdp-browser

# Health checks
hermes computer-use doctor
npm run deepseek:status
npm run boot:doctor           # audit boot shortcuts + gateway + ports
```

---

## PC boot after restart (2026-07-03 — recommended setup)

**What auto-starts at Windows login (no action needed):**

| Component | Auto at login? | Purpose |
|-----------|----------------|---------|
| **Telegram gateway** | Yes | iPhone agent listener (`hermes gateway run`) |
| **LiteLLM + ngrok** | Yes | LLM backend for Telegram (`:4000`, `:4040`) |
| **cua-driver serve** | Yes (Windows Scheduled Task at login) | Ready for `computer_use` when Desktop opens |
| **Hermes Desktop GUI** | **No** (`-SkipDesktop`) | Open on demand only |

**Entry point:** `Startup\Master-Startup.lnk` → hidden `Master-Startup.ps1 -Quiet -SkipDesktop`

**After reboot you should get:** early Telegram boot ping → full ONLINE ping when LiteLLM is ready. Telegram works **without** opening Hermes Desktop.

**When you need the Desktop app:**

```powershell
cd D:\Hermes\projects\JonBeatz
npm run hermes:desktop-ready
```

**Refresh boot config after script changes:**

```powershell
cd D:\Hermes\projects\JonBeatz
npm run boot:setup
npm run boot:doctor
```

**Manual full boot with Desktop** (debug only):

```powershell
powershell -File D:\Hermes\projects\_core-scripts\Master-Startup.ps1 -ShowWindows
# add nothing for Desktop, or omit -SkipDesktop if calling VBS manually
```

---

## Cursor vs Hermes (when to use which)

| Task | Use |
|------|-----|
| DigitalStudioz coding + build | **Cursor** (primary) |
| Phone / away-from-IDE browser test | **Hermes** + activation prompt |
| Control native apps (Mail, Explorer, etc.) | **Hermes computer_use** only |
| Raw CDP + Playwright in repo | **Cursor** MCPs |

---

## Related docs

| Doc | Purpose |
|-----|---------|
| [HERMES-DESKTOP-PARITY.md](HERMES-DESKTOP-PARITY.md) | Cursor ↔ Hermes memory bridge |
| [Hermes browser docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/browser) | Upstream browser reference |
| [Hermes computer use](https://hermes-agent.nousresearch.com/docs/user-guide/features/computer-use) | cua-driver install |
| [CDP protocol](https://chromedevtools.github.io/devtools-protocol/) | browser_cdp method reference |

---

*Created: 2026-07-03*
