# GitHub Setup — DigitalStudioz (Ecosystem Template)

**Repo:** [github.com/jonbeatz/DigitalStudioz](https://github.com/jonbeatz/DigitalStudioz)  
**Profile:** [jonbeatz repositories](https://github.com/jonbeatz?tab=repositories)

Use this doc when creating or updating GitHub repos in the JonBeatz / Hermes ecosystem.

---

## 1. Create the remote repo

From the project root (after first local commit on `main`):

```powershell
gh repo create jonbeatz/DigitalStudioz `
  --public `
  --description "DigitalStudioz — Full-service digital studio showcase. 3D web, AI integration, full-stack dev." `
  --source . `
  --remote origin
```

Push branches:

```powershell
git push -u origin main
git push -u origin DigitalStudioz-Project-v1
```

---

## 2. Branch model

| Branch | Purpose |
|--------|---------|
| **`main`** | Stable default on GitHub. Tagged releases. GitHub Pages deploys from here. |
| **`DigitalStudioz-Project-v1`** | Active development (mirrors VaderLabz `VaderLabz-Project-vN` pattern). |
| **`DigitalStudioz-Project-v2`** | Next milestone branch after branch cut ritual. |

**Rules**

- Do **not** force-push `main`.
- Cut a new `DigitalStudioz-Project-v{N}` branch at milestones; tag `vN.0.0` on release.
- Merge to `main` only when a milestone is verified (build + smoke test).

---

## 3. README template

Follow **`.cursor/skills/GitHub-README-Template/SKILL.md`** (shared skeleton) or copy structure from:

- **Canonical:** `D:\Hermes\projects\JonBeatz\README.md`
- **Web project reference:** `D:\Hermes\projects\VaderLabz\README.md`

Required sections:

1. Title + tagline + shields.io badge row (with `logo=` icons)
2. Hero screenshot (`public/images/ds-hero-v1.jpg` or dedicated screenshot PNG)
3. Source-of-truth banner → `TRUTH.md` + `START-HERE.md`
4. Current Status table (version, stack, live URL, verified build)
5. Numbered sections: Overview, Tech Stack, Routes, Quick Start, Architecture, Commands, Docs
6. MIT License footer

---

## 4. GitHub Pages (Next.js static export)

**Preview URL:** `https://jonbeatz.github.io/DigitalStudioz/`

The workflow **`.github/workflows/deploy-pages.yml`** builds with `GITHUB_PAGES=true`, which sets:

- `output: 'export'` in `next.config.ts`
- `basePath: '/DigitalStudioz'` for project-page hosting

**Local dev (no basePath):**

```powershell
npm run dev
```

**Test GitHub Pages build locally:**

```powershell
$env:GITHUB_PAGES = "true"; npm run build
# Static output in out/
```

**Enable Pages in GitHub UI (one-time):**

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. After first workflow run, site is live at the preview URL above

**Custom domain later:** Add `CNAME` file + DNS; remove or adjust `basePath` in `next.config.ts`.

---

## 5. Releases

```powershell
# After version bump in package.json + TRUTH.md
git tag v0.3.0
git push origin v0.3.0
gh release create v0.3.0 --title "v0.3.0 — MAVRA pipeline + Studio Green" --notes-file CHANGELOG.md --latest
```

Or from package.json (when `release` script is wired):

```powershell
npm run release
```

---

## 6. New project checklist (copy for future repos)

- [ ] `TRUTH.md`, `AGENTS.md`, `.cursor/docs/START-HERE.md`
- [ ] `README.md` per GitHub-README-Template skill
- [ ] `LICENSE` (MIT)
- [ ] `.env.local.example` (never commit `.env.local`)
- [ ] `scripts/project-backup.mjs` with correct backup root
- [ ] `.gitignore` — `.env*.local`, `.cursor/mcp.json`, `.next/`
- [ ] `gh repo create` + push `main` + dev branch
- [ ] GitHub Pages workflow (if static-export compatible)
- [ ] First release tag `v0.1.0` or current milestone version

---

*Created: 2026-07-03*
