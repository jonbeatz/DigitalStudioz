# WP / Divi 5 — Dev workflow (DigitalStudioz)

**Site:** `https://digitalstudioz.local/` · **Home 15** · **TB 30/31/32** · Theme `dgtl-digitalstudioz-theme`  
**Master issues log:** [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md)  
**Shortcut after every fix session:** say **`log fixes`**

---

## Cadence (best workflow)

```
measure → smallest fix → verify @ 390 + 1440 → log fixes → theme:sync → commit when asked
```

| Step | Do |
|------|----|
| 1. Measure | Screenshot or CDP / `npm run wp:smoke` |
| 2. Fix | Divi VB attrs first; thin CSS bridge only if FE drops values |
| 3. Verify | Phone **390** + desktop **1440** (tablet 768 if grid changed) |
| 4. Document | **`log fixes`** (or `log fixes and mem0` on milestones) |
| 5. Theme git | **`npm run theme:sync`** then commit `assets/wp-theme/` |
| 6. Milestone zip | **`npm run theme:backup`** → `G:\Hermes_Project_BackUpz\DigitalStudioz\themes\` |

This beats “big rebuild scripts” for everyday polish. Keep PHP rebuilds for brand walls / cold rebuilds only.

---

## Theme locations

| Role | Path |
|------|------|
| **Live SoT (edit here)** | `Local-WP/DigitalStudioz-WP/app/public/wp-content/themes/dgtl-digitalstudioz-theme` |
| **Git mirror** | `DigitalStudioz/assets/wp-theme/dgtl-digitalstudioz-theme` |
| **Zip backups** | `G:\Hermes_Project_BackUpz\DigitalStudioz\themes\` |

```powershell
npm run theme:sync      # LocalWP → git mirror
npm run theme:backup    # sync + zip with version stamp
npm run theme:push      # mirror → LocalWP (restore)
npm run wp:smoke        # Home layout guards (needs Local site up)
```

---

## MCP write rule

**One writer per save:** IAWB *or* AI Editor — never both on the same edit.  
Local WP MCP = CLI / health / logs. Child CSS/JS = glass nav, hamburger, mobile stack bridges.

---

## Protect

- TB **30 / 31 / 32** — backup before rewrites  
- Do not re-import Launch Variables over live Gold & Grey  
- No MutationObservers that write watched `style`  
- Prefer `log fixes` over dumping long “update all our docs” paragraphs  

---

## Related

- [Log-Fixes.md](../prompts/Log-Fixes.md)  
- [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md)  
- [ISSUES-RESOLVED.md](./ISSUES-RESOLVED.md)  
