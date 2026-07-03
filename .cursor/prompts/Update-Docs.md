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
