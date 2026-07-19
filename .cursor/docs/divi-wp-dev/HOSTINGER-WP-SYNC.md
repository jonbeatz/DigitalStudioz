# Local → Hostinger WordPress sync (WPvivid + theme push)

**Updated:** 2026-07-18  
**Local:** `https://digitalstudioz.local` · **Live:** `https://digitalstudioz.com`  
**Creds:** `.env.local` (`DIGITALSTUDIOZ_WP_*` / `DIGITALSTUDIOZ_WP_HOSTINGER_*`) — never commit.

---

## Short answer

| Question | Answer |
|----------|--------|
| Does a full WPvivid restore wipe live WP / Hostinger plugins? | **Yes** for whatever you restore. Free restore **replaces** themes, plugins, uploads, and/or DB with the backup — it does **not** merge. |
| Can we “update live without reinstalling WordPress every time”? | **Yes — after the first full migrate.** Day-to-day = push **theme (+ media/DB when needed)**, not full restore. |
| Easy free merge that keeps Hostinger plugins forever? | **No.** Free WPvivid has Entire / Files only / DB only — each mode still **overwrites** that slice. |

Official free transfer docs: [Transfer with Backup & Migration Free](https://docs.wpvivid.com/get-started-transfer-site.html) · [Migration overview](https://docs.wpvivid.com/overview-migration-free.html).

---

## What we found (probe 2026-07-18)

### Local (`digitalstudioz.local`)

| Item | Value |
|------|--------|
| WP | **7.0.2** |
| Theme | **Divi** parent + **`dgtl-digitalstudioz-theme` 0.8.2** |
| WPvivid | **Active** `wpvivid-backuprestore` **0.9.130** |
| Active stack | ACF PRO, Divi AI Editor, IAWB, Novamira(+Pro), wpmcp, Importer, WPvivid |

Local-only / agent tooling (do **not** need to stay active on live): IAWB, Novamira, wpmcp, ai-editor-divi5, etc.

### Live (`digitalstudioz.com`)

| Item | Value |
|------|--------|
| Hostinger root | `/home/u942711528/domains/digitalstudioz.com/public_html` |
| WPvivid | **Installed** (admin UI loads) |
| Hostinger defaults seen | `hostinger`, `hostinger-ai-assistant`, `hostinger-easy-onboarding`, `hostinger-reach`, **`litespeed-cache`** |
| Divi / DSZ child | **Not present yet** (still stock/blank install) |

---

## Recommended workflow (best smooth path)

### Phase A — One-time first go-live (full clone)

Accept that live becomes a copy of Local. Hostinger default plugins **will be replaced** unless you reinstall them after.

1. **hPanel:** take a Hostinger backup (safety net) before anything.
2. On **Local**, deactivate agent-only plugins you do not want active on live (IAWB, Novamira, wpmcp, ai-editor-divi5, …). Leave Divi + child theme + ACF + WPvivid.
3. On **Live** (destination): WPvivid → **Key** → Generate (8–24h) → copy key.  
   ([Auto-migration steps](https://docs.wpvivid.com/how-to-auto-migration-free.html))
4. On **Local** (source): WPvivid → **Auto-Migration** → paste key → choose **Database + Files (Entire website)** → Clone then Transfer.
5. On **Live**: Backup & Restore → scan received backup → **Restore** → confirm.
6. Log in with **Local’s** admin user (restore brings Local users). Re-save **Settings → Permalinks**.
7. **Optional after restore:** reinstall Hostinger helpers you still want (especially **LiteSpeed Cache** from Plugins / hPanel). Re-activate WPvivid if needed.
8. Smoke: `https://digitalstudioz.com/` hero, menus, Divi TB header/footer.

**If auto-migration fails** (timeout / firewall): manual path — backup on Local → download → upload on Live → restore ([manual transfer](https://docs.wpvivid.com/get-started-transfer-site.html)).

### Phase B — Ongoing updates (no full wipe)

Do **not** full-restore for every polish. Use layered push:

| Change type | Best push |
|-------------|-----------|
| Child theme CSS/JS/PHP | **Hostinger MCP** `hosting_deployWordpressTheme` (`domain=digitalstudioz.com`, `slug=dgtl-digitalstudioz-theme`, `themePath=…`, `activate=true`) **or** FTPS theme folder only |
| New media | Upload via Live Media library **or** sync `wp-content/uploads/` only |
| Divi pages / TB / menus / DB content | WPvivid **Only Database** transfer/restore **or** selective export (Pro custom content) — still overwrites DB tables in the backup |
| New plugins needed on live | Install on live (or include in a rare full sync) |
| Hostinger / LiteSpeed | Leave alone on live; never include “delete all plugins” workflows |

**Rule:** Full **Database + Files** restore = nuclear. Use only when you intentionally want Local to become Live again.

### Phase C — Optional Pro (later)

WPvivid **Pro** adds custom content selection / finer export ([Pro migration docs](https://docs.wpvivid.com/migrate-a-wordpress-site-directly.html)). Worth it if you often need “themes + uploads + selected tables” without touching Hostinger plugins.

---

## What WPvivid free modes actually do

| Mode | Effect on live |
|------|----------------|
| Database + Files | Replaces **everything** site-wise (closest to “wipe and match Local”) |
| All files (exclude DB) | Overwrites WP files/themes/plugins/uploads; **keeps live DB** (dangerous mismatch risk) |
| Only Database | Overwrites **DB only**; keeps live files (URLs/content swap; plugins files may not match) |

There is **no** free “add Local theme but keep Hostinger plugins” restore. That requires **not** restoring plugins (theme-only deploy / Pro custom / manual copy).

---

## Config checklist (ready now)

- [x] WPvivid on Local  
- [x] WPvivid on Live  
- [x] Creds in `.env.local`  
- [x] Hostinger API can see `digitalstudioz.com`  
- [ ] **Jon confirms** first full migrate date/time  
- [ ] hPanel backup before first restore  
- [ ] Deactivate local-only plugins before first transfer  
- [ ] After first go-live: use **theme deploy** for chrome, not full restore  

---

## Operator commands (when Jon says go)

**Theme-only push (ongoing):** ask agent to run Hostinger `hosting_deployWordpressTheme` for `dgtl-digitalstudioz-theme` from LocalWP path.

**First full migrate:** follow Phase A in this doc (agent can walk click-by-click; will **not** restore until you confirm).

---

## Security note

WP admin passwords live in `.env.local` (gitignored). Prefer **Application Passwords** for automation later. Do not paste passwords into chat.
