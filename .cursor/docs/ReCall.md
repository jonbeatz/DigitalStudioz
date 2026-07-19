# DigitalStudioz — ReCall Update

## LEFT OFF — 2026-07-18 (resume here)

**Where we stopped:** Theme **0.8.1** — footer credit Divi columns + responsive brand-above / centered menu trio. Not ready for Hostinger live yet (WPvivid full backup when go-live).

**Working on:** DigitalStudioz **WP + Divi 5** Warm Premium on `https://digitalstudioz.local` — LocalWP `Local-WP/DigitalStudioz-WP`. Child theme **0.8.1**.

**SoT right now:**
| Artifact | Role |
|----------|------|
| **[DIVI5-Problems-Solutions.md](./divi-wp-dev/DIVI5-Problems-Solutions.md)** | **Master issues → solutions** (§F–§O; theme **0.8.1**) |
| **[DIVI5-Native-Audit.md](./divi-wp-dev/DIVI5-Native-Audit.md)** | Re-grade + debt |
| **[DEV-WORKFLOW.md](./divi-wp-dev/DEV-WORKFLOW.md)** | Daily cadence + theme:sync / wp:smoke |
| Page **15** Home | Live |
| TB **30/31/32** | Protect — footer Menus **9/10/11**; credit `1/2\|1/2` |
| Theme git mirror | `assets/wp-theme/dgtl-digitalstudioz-theme` (`npm run theme:sync`) |
| Revert credit bar | `Local-WP/.../.cursor/assets/revert-footer-credit-columns.php` |

**Next session priorities:**
1. **D5:** Customizer button pad 14/28 → drop CSS `!important`.
2. **D2:** Typography Variables/presets carefully.
3. Optional: Hostinger first go-live via **WPvivid files+DB** (domain `digitalstudioz.com` already on account) — only when Jon says ready.
4. After Divi/WP fix: **`log fixes`** → **`npm run theme:sync`** → commit when asked.

**Resume:** **Open Project** (warm) or **Start Project** (cold).

**Docs hub:** `.cursor/docs/divi-wp-dev/` — Problems-Solutions **§O**. Shortcut: **`log fixes`**.

---

## Session: 2026-07-18 — Theme 0.7.6–0.8.1 footer credit columns + mobile grid

- Credit bar: Divi `1/2|1/2` Text modules (keep real columns); backups + `wp_slash` gotcha (without it logo → `u003ca…`).
- Mobile: brand centered above; SERVICES|COMPANY|CONNECT in one row; **0.8.1** centers menu content under brand.
- Hostinger: thinking ahead only — WPvivid full migrate later; not Node FTPS.
- Theme **0.8.1** synced to git mirror.

---

## Session: 2026-07-18 — Theme 0.7.5 footer Menus + mobile center

- TB 31: HTML lists → Menu modules (WP **9/10/11**). Gotcha: must use `menu.advanced.menuId` or Divi falls back to Primary.
- Mobile footer: gutters + centered stack; tablet brand full-width + 3 link cols.
- Backup: `footer-31-pre-menu-swap.html`. `theme:sync` + `wp:smoke` PASS.
- Docs: Problems-Solutions §N; Native Audit D3/D14 DONE (~95%).

---

## Session: 2026-07-18 — Native Audit re-grade (~93%)

- Compared baseline 0.6.6 audit (~88%) → live **0.7.4** (~93% overall; TB chrome +10 pts).
- D7: deleted draft layouts 35/36. D14 prep: Footer Services/Studio/Connect menus **9/10/11** populated.
- Open: D2 typography, D5 button pad. Keep: D4 chrome, D10 hex, D11 mobile stack.
- Doc: `divi-wp-dev/DIVI5-Native-Audit.md` + Problems-Solutions §M.

---

## Session: 2026-07-18 — Ops upgrades (theme mirror + smoke + workflow)

- **`npm run theme:sync` / `theme:backup` / `theme:push`** — LocalWP SoT ↔ `assets/wp-theme/`; zip under `G:\Hermes_Project_BackUpz\DigitalStudioz\themes\`.
- **`npm run wp:smoke`** — Playwright guards: Contact→CTA ≤80px, Services/Process stack @390, back-top vs credit.
- **DEV-WORKFLOW.md** + End-Project / START-HERE / MASTER-COMMANDS wired.

---
