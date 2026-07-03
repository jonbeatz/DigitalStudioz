# Update Docs — DigitalStudioz

## Trigger

**Update Docs**, **update docs and mem0**

---

## Step 1: Run sync

```powershell
npm run docs:sync
```

---

## Step 2: Version alignment

If version changed, run:

```powershell
npm run version:sync
```

Align version across `TRUTH.md`, `package.json`, `MASTER-COMMANDS.md`.

---

## Step 3: Encoding check

```powershell
npm run encoding:check
```

Fix any non-UTF8 markdown files before committing.

## Layout doc check (when engine.tsx touched)

If `lib/experience-engine/engine.tsx` changed, verify these still say **inline `S` only** (not Tailwind layout in engine):

- `.cursor/skills/digitalstudioz-layout/SKILL.md`
- `.cursor/docs/START-HERE.md`
- `.cursor/docs/ReCall.md`
- `TRUTH.md` / `AGENTS.md`
