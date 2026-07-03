# End Project — DigitalStudioz Closeout

## Trigger

**End Project**, **End Session**, **Close Session**, **Session Closeout**

---

## Step 1: Summarize

From conversation + any file changes under `D:\Hermes\projects\DigitalStudioz`:
- What was accomplished
- What's in progress
- Blockers (if any)

---

## Step 2: Update tracking docs

```powershell
npm run log:session -- "[short title]: [summary of session]"
```

Or append to **`.cursor/docs/project-log.md`**.

Update **`ReCall.md`** as needed.

If **`engine.tsx`** or layout docs changed, confirm **`digitalstudioz-layout` skill**, **`START-HERE.md`**, and **`TRUTH.md`** still agree (inline `S` lock — no Tailwind layout in engine).

---

## Step 3: Mem0 (if session was substantive)

```powershell
npm run mem0:preflight
npm run mem0:add -- "Session [date]: [one-line takeaway]"
npm run draven:add -- "DigitalStudioz session [date]: [key context for Draven]"
```

Skip if LM Studio is offline — note in project-log instead.

---

## Step 4: Shutdown

```powershell
npm run session:stop
```

Add `-- -StopDeepSeek` to also stop LiteLLM + ngrok if they were started.

---

## Step 5: Voice farewell (optional)

```powershell
npm run draven:speak -- "DigitalStudioz session complete. See you next time."
```
