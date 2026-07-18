# Nav HTML revert snapshot — Theme Builder header 30

**Date:** 2026-07-18  
**Live layout:** TB header post **30** (template **32** → header **30**)  
**Backup JSON:** `Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/dsz-branded/backups/header-30-html-nav-20260718.json`  
**HTML snippet:** `…/backups/header-30-html-snippet-20260718.html`  
**Experiment reference (Menu only, not live):** header layout **35**

## How it worked (pre–Menu module)

| Piece | Implementation |
|-------|----------------|
| Structure | One Text module (`DS Header Chrome`) inside section → row → column |
| Shell | `.ds-site-header` / `.ds-site-header__inner` |
| Logo | `.ds-logo` → `/` (`Digital` + `Studioz`) |
| Links | Hardcoded `<nav class="ds-nav" id="ds-primary-nav">` |
| CTA | `.ds-btn.ds-btn-primary.ds-header-cta` → `/#contact` |
| Mobile toggle | `.ds-nav-toggle` + `js/core-scripts.js` |
| Styles | Child `style.css` `.ds-nav*` (desktop + ≤980px drawer) |
| Glass | `.et-l--header` + `#ds-nav-glass-override` (unchanged by Menu migration) |

## Menu item URLs (desired order)

1. Work → `/#work`  
2. Services → `/#services`  
3. Process → `/#process`  
4. About → `/#about`  
5. Contact → `/#contact`

## Rendered HTML (snapshot)

```html
<div class="ds-site-header"><div class="ds-site-header__inner"><a class="ds-logo" href="/"><span>Digital</span>Studioz</a><nav class="ds-nav" id="ds-primary-nav" aria-label="Primary"><a href="/#work">Work</a><a href="/#services">Services</a><a href="/#process">Process</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><a class="ds-btn ds-btn-primary ds-header-cta" href="/#contact">Start a Project</a><button type="button" class="ds-nav-toggle" aria-expanded="false" aria-controls="ds-primary-nav" aria-label="Open menu"></button></div></div>
```

## Revert steps

1. Restore `post_content` on post **30** from `header-30-html-nav-20260718.json` → key `post_content`
2. Purge `wp-content/et-cache/30` (and `15` if needed)
3. Hard-refresh — HTML chrome + prior CSS/JS return

```powershell
$env:PHPRC = "C:/Users/JONBEATZ/AppData/Roaming/Local/run/ufauI-YD2/conf/php"
$php = "C:\Users\JONBEATZ\AppData\Roaming\Local\lightning-services\php-8.4.10+0\bin\win64\php.exe"
$wp = "C:\Program Files (x86)\Local\resources\extraResources\bin\wp-cli\wp-cli.phar"
$path = "D:\Hermes\projects\Local-WP\DigitalStudioz-WP\app\public"
& $php $wp eval-file "D:/Hermes/projects/Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/dsz-branded/_restore-header-30-from-backup.php" --path=$path
```

## Post-migration (current live)

TB **30** = Logo Text + Divi Menu (Primary **4**) + Button CTA. Child theme **0.6.0** styles + mobile toggle. Rebuild: `_build-header-menu-native.php`.
