# Log Fixes — Divi / LocalWP issues → solutions

**Triggers (any of these):**

| Say this | Same action |
|----------|-------------|
| **log fixes** | Full write-up |
| **record fixes** | Full write-up |
| **log solutions** | Full write-up |
| **document fixes** | Full write-up |
| **update fixes** | Full write-up |

**With memory:** `log fixes and mem0` — also Mem0 + Draven one-liners.

> Shorter than **update docs** (fleet/version sync). Use this after a Divi/WP chrome or layout fix so the master problem→solution log stays current.

---

## Phase 0: Gather session fixes

From this chat (and theme `style.css` Version if changed), list each:

1. **Symptom** (what Jon saw)
2. **Root cause** (1–2 lines)
3. **Fix that worked** (theme ver / file / rule)
4. **Never again** (one line)

Skip trivia. Prefer reusable gotchas.

---

## Phase 1: Write master log first

Edit **`.cursor/docs/divi-wp-dev/DIVI5-Problems-Solutions.md`**:

1. Bump **Child theme** version + **Updated** date in the header.
2. Add/extend the matching section (A–K or new letter).
3. Append theme version to the **cheat sheet**.
4. Add **Never again** / verify checklist bullets when relevant.

When docs disagree on WP/Divi chrome: **Problems-Solutions wins**.

---

## Phase 2: Indexes + companions

| File | Action |
|------|--------|
| `divi-wp-dev/ISSUES-RESOLVED.md` | New dated table at **top** |
| `divi-wp-dev/DIVI5-LocalWP-Setup-Catalog.md` §4 | New rows at **top** of issues table |
| `divi-wp-dev/DIVI5-Layout-Polish-Log.md` | Short section if chrome/layout |
| `divi-wp-dev/DIVI5-Home-Native-Pass.md` | Wave bullet if Home |
| `ReCall.md` | LEFT OFF + session bullets |
| `project-log.md` | One dated entry at top |

---

## Phase 3: LocalWP mirror

Copy (UTF-8 safe) from DigitalStudioz → LocalWP:

- `DIVI5-Problems-Solutions.md` → `Local-WP/DigitalStudioz-WP/.cursor/docs/`
- `DIVI5-LocalWP-Setup-Catalog.md` → `…/DIVI5-SETUP-CATALOG.md`
- `ISSUES-RESOLVED.md` → WP `.cursor/docs/`

```powershell
[System.IO.File]::Copy(
  "$dsz\.cursor\docs\divi-wp-dev\DIVI5-Problems-Solutions.md",
  "$wp\.cursor\docs\DIVI5-Problems-Solutions.md", $true)
```

---

## Phase 4: Theme mirror + smoke (when CSS/JS or Home layout changed)

```powershell
npm run theme:sync      # LocalWP → assets/wp-theme/
npm run wp:smoke        # optional but preferred after layout chrome
npm run encoding:check
```

Milestone zip: `npm run theme:backup`. Cadence: [DEV-WORKFLOW.md](../docs/divi-wp-dev/DEV-WORKFLOW.md).

---

## Phase 5: Report

- Theme version(s) documented
- Sections/files touched
- Whether `theme:sync` / `wp:smoke` ran
- Short operator cheat sheet: **next time say `log fixes`**

End with: **"Ready to commit when you say so."** (do **not** auto-commit).

---

## Phase 5b (only if `log fixes and mem0`)

```powershell
npm run mem0:add -- "YYYY-MM-DD: [one-line Divi/WP fix summary + Problems-Solutions §X]"
npm run draven:add -- "DSZ Divi: [same one-liner]"
```

Optional vault: session note under `03_AI_Memory/Sessions/` + link from `01_Projects/DigitalStudioz.md` if the fix is cross-session important.

---

## Not this prompt

| Want | Use instead |
|------|-------------|
| Full fleet doc sync / version / TOOLS-* | **update docs** |
| One-line CLI stub only | `npm run log:fix` |
| Day-end closeout | **End Project** |
