# Home → Divi-native pass (DigitalStudioz)

**Date:** 2026-07-18 · **Home page ID:** 15 · **Child theme:** `dgtl-digitalstudioz-theme` **0.7.5**

**Chrome / spacing issues SoT:** [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md)

## Wave 3.8 — Footer Menus + mobile center (0.7.5)

| Item | Status |
|------|--------|
| Footer link columns | Divi **Menu** modules → WP **9/10/11** |
| Mobile footer layout | Centered stack + gutters |
| `menu.advanced.menuId` | Required (else Primary fallback) |

## Wave 3.6 — Nav right + mobile stack (0.7.3–0.7.4)

| Item | Status |
|------|--------|
| Desktop menu → CTA | Links right-aligned next to button (**0.7.3**) |
| Mobile Services/Process/About/Stats/Footer | Full-width stack ≤980 (**0.7.4**) |
| Back-to-top vs footer credit | Raised 72/88px — no overlap |

## Wave 3.7 — Ops (no theme bump)

| Item | Status |
|------|--------|
| Theme git mirror | `assets/wp-theme/` + `theme:sync` / `theme:backup` |
| Home smoke | `npm run wp:smoke` PASS @1440/390 |
| Cadence | [DEV-WORKFLOW.md](./DEV-WORKFLOW.md) · Problems-Solutions **§L** |

## Wave 3.5 — Spacing polish (0.7.1–0.7.2)

| Item | Status |
|------|--------|
| Contact body → CTAs | **32px** (para `margin-bottom`) |
| Intro → content boxes | **~36px** (intro mb 20 + section rowGap 16) |
| Featured side cards | Pad **20**; stack gap **16–32**; not touching |
| Services gutters / pad | **~28px** / **20px** |
| Process intro leftover | Fixed **0.7.2** — minh only on `:has(.ds-svc-num)` |

## Wave 3.4 — Next.js spacing match + Divi unlock (2026-07-18)

| Item | Status |
|------|--------|
| Divi column `row-gap:30px` | **Killed** on Home sections (was doubling all margins) |
| Hero stack | **12 / 24 / 40** (matches `engine.tsx`) |
| Section outer pad | **100 / 80 / 60** (`S.sec`) in Divi attrs (**0.7.0**) |
| Spacing ownership | **0.7.0** VB attrs; CSS lock removed; soft `row-gap:0` only |
| Footer 31 | Native Text/Heading (**0.7.0**) |
| Mobile drawer | Light frost **0.6.4** |
| Nav Menu | Divi Menu module **0.6.0+** |

## Wave 3.3 — fonts + tight cards (2026-07-18)

| Item | Status |
|------|--------|
| Fonts | **Inter** + **JetBrains Mono** via `--font-sans` / `--font-mono` (match `:3000`) |
| Nav scroll | **v0.5.5+:** glass on `.et-l--header` (**0.94 → 0.28**); sticky OFF |
| Header nav | **v0.6.0:** Divi **Menu** module → WP Primary (**4**) + Logo Text + CTA Button — see NAV-HTML-REVERT.md for HTML backup |
| Featured | Shorter + tight overlay text |
| Side cards | Skinnier pad (refined again in 0.7.1) |
| Index nums | `#443B2B` |
| Stats | Bold + centered labels |

| Item | Status |
|------|--------|
| Hero | **Centered** like Contact (560px stack + centered CTAs) |
| Quote | Centered card + **80% dark** overlay |
| Nav scroll | **74%** black (was 84%) |
| Cards | `#18181B` · Work/Services landscape · Process portrait |
| Labels | JetBrains Mono + gold `.ds-section-label` |
| About image | Smaller (max 420×360) |
| Headings | weight **700** |

## Wave 3.1 — opacity + rhythm

| Item | Status |
|------|--------|
| Nav opacity | **94% → 74% on scroll** — see [DIVI5-Layout-Polish-Log.md](./DIVI5-Layout-Polish-Log.md) |
| Section padding | **56px** |
| Hero optical center | Fixed overlay header + equal **72px** pad |

## Wave 3 — layout polish

| Item | Status |
|------|--------|
| Card gaps / nums | Process 16px · Services 24px · muted gold nums |
| Work / Services / Process / About / Quote / Contact | Divi-native modules |

## Wave 2 (prior)

| Item | Status |
|------|--------|
| Mousewheel slow | Fixed — Divi `divi_smooth_scroll` **off** |
| Hero CTAs | Real `divi/button` side-by-side |

## Remaining

| Surface | Notes |
|---------|--------|
| TB header **30** Menu module | **Done v0.6.0** — Logo + Menu(4) + Button; HTML backup in NAV-HTML-REVERT |
| Button Customizer pad | Child `!important` 14/28 bridge |
| Fine visual QA | Hard-refresh `:local` vs refs (Process/Services card height, About hairline) |

## Protect

TB **30/31/32**. Never re-import Launch Variables/TB over live Gold & Grey.

## Rebuild

```powershell
$env:PHPRC = "C:/Users/JONBEATZ/AppData/Roaming/Local/run/ufauI-YD2/conf/php"
$php = "C:\Users\JONBEATZ\AppData\Roaming\Local\lightning-services\php-8.4.10+0\bin\win64\php.exe"
$wp = "C:\Program Files (x86)\Local\resources\extraResources\bin\wp-cli\wp-cli.phar"
$path = "D:\Hermes\projects\Local-WP\DigitalStudioz-WP\app\public"
& $php $wp eval-file "D:/Hermes/projects/Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/dsz-branded/_fix-header-opacity.php" --path=$path
& $php $wp eval-file "D:/Hermes/projects/Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/dsz-branded/_build-home-warm-premium.php" --path=$path
```

Purge `wp-content/et-cache/15` after rebuild. Hard-refresh the front.
