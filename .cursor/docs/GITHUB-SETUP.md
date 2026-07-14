# GitHub Setup — DigitalStudioz

**Repo:** `https://github.com/jonbeatz/DigitalStudioz`

---

## Branch model

| Branch | Purpose |
|--------|---------|
| **`main`** | Stable default, releases |
| **`DigitalStudioz-Project-v1`** | Active development milestone |

---

## README (auto-created on bootstrap)

Bootstrap copies **`README.md`** from the shared skeleton with badges, status table, and TRUTH banner — same layout as [JonBeatz-Command-Center](https://github.com/jonbeatz/JonBeatz-Command-Center).

After first UI milestone:

1. Add hero screenshot to `public/media/`
2. Update README status table and screenshots section
3. Run `npm run version:sync` after version bumps

Style guide: `.cursor/skills/GitHub-README-Template/SKILL.md`

---

## Topics (About)

Bootstrap with `-GitHub` sets: `hermes`, `digitalstudioz`, and `nextjs` (when `-Website`).

Manual update:

```powershell
@'
{"names":["hermes","digitalstudioz","nextjs"]}
'@ | gh api -X PUT repos/jonbeatz/DigitalStudioz/topics `
  -H "Accept: application/vnd.github+json" --input -
```

---

## Releases

```powershell
npm run version:sync
npm run release
```

Scripts installed by bootstrap: `scripts/github-release.ps1`, `scripts/sync-version.py`

Or manually:

```powershell
git tag v1.0.0
git push origin v1.0.0
gh release create v1.0.0 --title "DigitalStudioz v1.0.0" --generate-notes --latest
```

See `.cursor/prompts/Release-Version.md` for full ritual.

---

## Create remote (if not bootstrapped with `-GitHub`)

```powershell
gh repo create jonbeatz/DigitalStudioz --public --description "DigitalStudioz — Full-service digital studio showcase. 3D web, AI integration, full-stack dev." --source . --remote origin --push
git branch DigitalStudioz-Project-v1
git push -u origin DigitalStudioz-Project-v1
```

Then set topics and run `npm run release`.

---

## GitHub Pages

Workflow: `.github/workflows/deploy-pages.yml` (when `-Website` or `-GitHub` bootstrap)  
Enable: Repo → Settings → Pages → Source: **GitHub Actions**

> Node-only apps (Clerk, API routes) should use Hostinger Node deploy instead — see `HOSTINGER-DEPLOY.md`.

---

*Bootstrap template — 2026-07-14*
