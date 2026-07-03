# Start Project — DigitalStudioz Initialization

## Trigger
**Start Project**, **Begin Project**, **Start Session**, **Cold Start**

---

## Step 1: Session Stack & Engine Check

Run from the **DigitalStudioz** profile root:

```powershell
npm run deepseek:status
# If LiteLLM :4000 + ngrok :4040 already online → light probes only:
npm run session:start
# Cold PC boot only (both offline):
# npm run session:start -- -Full
```

**Start Project on cold boot = `-Full`:** Mem0 preflight + **DeepSeek LiteLLM :4000** + **ngrok** (Cursor Agent HTTPS). If the stack is already up from Cursor or Hermes, **do not** re-run `-Full` — duplicates LiteLLM. See `.cursor/docs/HERMES-DESKTOP-PARITY.md` (Cursor as primary Draven cockpit).

| Mode | Command | When |
|------|---------|------|
| **Start Project** | `npm run session:start -- -Full` (or `npm run session:start:full`) | Cold boot - DeepSeek + ngrok + Mem0 |
| Light probes | `npm run session:start` | Quick check only - no paid stack |
| Paid local only | `npm run deepseek:on` | Hermes / Telegram without ngrok |
| ngrok only | `npm run deepseek:ngrok` | Add tunnel (force-restarts proxy with ngrok) |

**Engine audit:** Verify `D:\Hermes\projects\_core-scripts\` exists - `deepseek-api/`, `telegram-gateway/`, `voice-engine/`, `shared-profile-content/`.

**Voice check:** `DRAVEN_VOICE_POLICY=ritual` in `.env.local` - speak **only** Start greeting, End farewell, explicit "speak/say", optional errors. **Never** auto-read replies.

**Voice greeting (Start Project only):**

```powershell
npm run draven:speak -- "DigitalStudioz online. We are ready to build."
```

---

## Step 2: Document Reads (Mandatory)

Read these files **before** doing anything else:

1. **`TRUTH.md`** — Project constitution, Mem0 collection, backup root
2. **`.cursor/docs/START-HERE.md`** — Daily ops + layout lock (v0.5)
3. **`.cursor/docs/ReCall.md`** — Ongoing session history
4. **`.cursor/docs/project-log.md`** — Full project history
5. **`.cursor/skills/digitalstudioz-layout/SKILL.md`** — **Mandatory before any `engine.tsx` edit** (v2.0.0 inline lock)

---

## Step 3: Memory Recall

```powershell
npm run mem0:search -- "DigitalStudioz project context"
npm run draven:search -- "DigitalStudioz session context"
```

If LM Studio is offline, skip Mem0 and rely on ReCall.md.

**Draven SOUL (optional):** For full Matrix protocol, agent may read `%LOCALAPPDATA%\hermes\profiles\jonbeatz\SOUL.md` when operator requests Mission Briefing or Draven identity lock. Hermes chat history does **not** auto-sync — use `draven:search` + ReCall.md.

---

## Step 4: Environment Handshake

- Confirm `.env.local` exists with correct `MEM0_USER_ID=digitalstudioz`, `MEM0_COLLECTION=digitalstudioz_memories`
- If missing, run `npm run env:setup`
- Print a one-line status summary
