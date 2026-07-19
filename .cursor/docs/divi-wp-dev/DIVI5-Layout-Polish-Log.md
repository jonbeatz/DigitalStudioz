# Layout & chrome polish log — Home / Header

**Site:** `digitalstudioz.local` · **Home:** page **15** · **TB header:** **30**  
**Child theme:** `dgtl-digitalstudioz-theme` **0.8.1**  
**Updated:** 2026-07-18

**Master issues/solutions:** [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md) (SoT when docs disagree).

---

## Footer credit columns + responsive grid (v0.7.6–0.8.1)

TB 31 credit → Divi `1/2|1/2`. ≤980: brand centered above; three menus centered under brand. See [§O](./DIVI5-Problems-Solutions.md#o-footer-credit-columns--responsive-grid).

---

## Footer Menu modules + mobile center (v0.7.5)

TB 31 HTML lists → Divi Menu (WP 9/10/11). Mobile footer centered (override Divi phone right-align). See [§N](./DIVI5-Problems-Solutions.md#n-footer-menu-modules--mobile-center).

---

## Ops upgrades (theme mirror + smoke — 2026-07-18)

No layout CSS change. Theme stays **0.7.4**. Added git mirror + `wp:smoke` + [DEV-WORKFLOW.md](./DEV-WORKFLOW.md). See [Problems-Solutions §L](./DIVI5-Problems-Solutions.md#l-theme-git-mirror--home-smoke--cadence).

---

## Mobile stack + back-to-top (v0.7.4)

Services/Process/About/Stats/Footer forced to full-width stack ≤980px (Divi kept `row+nowrap`). Back-to-top `bottom: 72px` / `88px` mobile. See [Problems-Solutions §K](./DIVI5-Problems-Solutions.md#k-mobile-stack--back-to-top-clearance).

---

## Header menu right of bar (v0.7.3)

Middle Menu column grows; `.et_pb_menu__wrap` flex-end so Work→Contact sit next to Start a Project. Logo remains Text+HTML. See [§J](./DIVI5-Problems-Solutions.md#j-header-menu-links-right-next-to-cta).

---

## Spacing polish 0.7.1 → 0.7.2 (intro dead space + Process minh)

### Operator ask
Contact CTAs need air above buttons; close dead space under intros; Featured side cards shorter + not touching.

### What worked
| Fix | Result |
|-----|--------|
| Contact para `mb:32px` | Buttons no longer glued to body |
| Intro mb 20 + section `rowGap:16` | Intro→cards ~**36px** (was ~136) |
| Side cards pad 20 + 16px stack gap | Separated, less tall |
| Process minh scoped `:has(.ds-svc-num)` (**0.7.2**) | Process intro matches Work/Services |

Full tables: [Problems-Solutions §F.5–F.6](./DIVI5-Problems-Solutions.md#f5-spacing-polish-071--intro-dead-space-contact-ctas-featured-sides).

---

## Divi-native unlock (v0.7.0)

Home spacing moved into Visual Builder attrs; CSS spacing lock removed; footer **31** native Text/Heading. Soft column `row-gap:0` safety only. See [Problems-Solutions §F.3](./DIVI5-Problems-Solutions.md#f3-solution-path-066--070).

---

## Spacing lock vs Next.js (v0.6.5 → **0.6.6**)

### Symptom
Text stacks (hero, intros, cards) had too much vertical air vs Next.js reference.

### Problem
Divi 5 columns use `flex` + **`row-gap: 30px`** *plus* module margins → Next’s 12px became 42px live. Section pads were also ~56px vs Next `S.sec` 100px.

### Solution
Child CSS “Spacing lock”: zero column row-gap; lock Next margins (hero 12/24/40, intros 12/16/48, cards 8/8/24, services 16/12); section pad 100/80/60. Measured with Playwright. **Superseded by 0.7.0 unlock** (attrs in VB).

Full table + never-again: [DIVI5-Problems-Solutions.md §F](./DIVI5-Problems-Solutions.md#f-spacing-vs-nextjs-text-stacks--section-pad).

---

## Mobile drawer frost (v0.6.4)

Drawer BG `rgba(10,10,11,0.94)` + `backdrop-filter: blur(18px)` — light frost, denser than scrolled nav glass (~0.28). See Problems-Solutions §D.

---

## Proper Divi Menu navigation (v0.6.0)

### Change
Replaced free-form HTML `.ds-nav` in TB header **30** with:

| Module | Role |
|--------|------|
| Text | Logo `.ds-logo` |
| **Menu** | WP **Primary** menu ID **4** (class `ds-primary-menu`) |
| Button | Start a Project → `/#contact` |

### Workflow
Edit links under **Appearance → Menus → Primary**. Anchors stay custom links; new pages are added there (do not enable auto-add pages).

### Mobile
Divi does not enqueue `script-library-menu.js` for this TB header. Child `core-scripts.js` toggles `.mobile_nav` and clones `#menu-primary` into `.et_mobile_menu`.

**v0.6.1:** Divi’s hamburger glyph had `content: none` (invisible). Gold 3-bar / X is now drawn with CSS pseudo-elements on `.mobile_menu_bar` (same approach as the old `.ds-nav-toggle`).

**v0.6.3:** Drawer still looked low with admin bar — switched to `position:absolute; top:100%` on fixed header (no CSS-var gap) + zero top padding. Full issue/solution table: [DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md).

### Revert
See [NAV-HTML-REVERT.md](./NAV-HTML-REVERT.md) + `_restore-header-30-from-backup.php`  
Backup: `…/backups/header-30-html-nav-20260718.json`

### Build script
`_build-header-menu-native.php`

---

## On-scroll nav broken when logged in (v0.5.5)

### Symptom
Nav looks solid / wrong after scroll (esp. with WP admin bar). Opacity cue hard to see.

### Problem
Two fixed layers fought:
1. Child CSS: `header.et-l--header` → `position:fixed; top:32px` (admin bar)
2. Divi sticky: inner `.et_pb_section` → `position:fixed; top:0; z-index:10010`

Chrome (logo/links) detached from the glass background. Scrolled alpha `0.40` also looked nearly solid over dark sections.

### Solution
- **Disable Divi sticky** on TB header **30** (`_fix-header-disable-sticky.php`)
- CSS forces header sections `position:relative` even if sticky classes linger
- Raise header `z-index` to **10020**
- Scrolled glass **0.28** + light bottom border (clearly see-through)
- Theme **0.5.5**

### Verify
Logged in → scroll over Quote/Work → bar lightens and content shows through; logo stays aligned with the glass.

### Symptom
Browser dialog: **Page Unresponsive** on `https://digitalstudioz.local/` — refresh hangs / black screen.

### Problem
`MutationObserver` on the TB header section called `clearHeaderChildBgs()`, which wrote `style` attributes → observer fired again → **infinite loop** → main thread freeze. A “guarded” version could still fight Divi’s sticky style writes and hang.

### Solution
- **Removed** `MutationObserver` + `clearHeaderChildBgs` entirely from `js/core-scripts.js`
- Nav glass relies on CSS + TB transparent section BG + `#ds-nav-glass-override` only
- Theme bump **0.5.4** for hard cache bust
- Close frozen browser tabs (they keep the old JS in memory until the process dies)

### Verify
Close all `digitalstudioz.local` tabs → open a **new** tab → page paints and stays responsive.

---

## Header nav opacity — root cause + fix (v0.5.1 → **0.5.2**)

### Symptom
After scroll the bar still looked **solid black** — content under the nav (quote copper glow, etc.) was not visible through it.

### Problem (measured live)
**Three** opaque sources stacked / fought the glass:

| Layer | What was wrong |
|-------|----------------|
| Child CSS `.et-l--header .et_pb_section` | Painted **`var(--bg-void)`** (`#121212` solid) — killed see-through |
| Divi TB sticky section BG | Emitted **`rgba(10,10,11,0.94)`** in dynamic CSS **after** our stylesheet |
| `.ds-site-header` shell | Also held opacity → 0.94 + translucent ≈ solid |

Even when the shell went translucent, the section underneath stayed solid → **looked fully opaque**.

Earlier attempts also failed because:
1. `rgba(..., var(--alpha))` / `rgb(... / var())` declarations were dropped by the browser
2. CSS transparent selectors targeted `.ds-header` but the live section **often lacks** that class
3. 0.94 → 0.74 alone is too subtle on dark pages
4. Setting sticky=0.84 in Divi fails — sticky paints at scrollY≈0, so opacity felt “backwards”

### Solution (v0.5.2)
1. Put glass **only** on `header.et-l--header`:
   - Default: `rgba(10,10,11,0.94)`
   - Scrolled (`.is-scrolled`): `rgba(10,10,11,0.40)` + lighter blur
2. Header section CSS uses **transparent** (footer alone keeps `--bg-void`)
3. TB layout **30**: default + sticky section BG → **`rgba(0,0,0,0)`** (`_fix-header-opacity.php`)
4. Late `wp_footer` style `#ds-nav-glass-override` (priority 999) beats Divi dynamic CSS
5. JS `clearHeaderChildBgs()` + `MutationObserver` as belt-and-suspenders

### Verify
Hard-refresh (`?ver=0.5.2`) → scroll over Quote/Work → content must show through the bar.  
DevTools: `.et-l--header` ≈ `0.40`, section/shell ≈ `transparent`. View-source should include `ds-nav-glass-override`.

---

## Fonts (global — match Next.js `:3000`)

| Token | Value |
|-------|--------|
| `--font-sans` | **Inter**, system-ui, -apple-system, sans-serif |
| `--font-mono` | **JetBrains Mono**, Space Mono, Courier New |

Loaded via Google Fonts in `functions.php`.

---

## Cards / stats / index (v0.4.8+)

| Item | Fix |
|------|-----|
| Featured | minHeight **340**, pad **20/24**, tight overlay text |
| Side Work cards | pad **20/28**, gap **16px** |
| Index nums | **`#443B2B`** (`--index-muted`) |
| Stats | weight **800**, labels centered |

---

## Hero + Quote centering (v0.4.5–0.4.6)

| Surface | Fix |
|---------|-----|
| Hero | Centered like Contact — `560px` stack |
| Quote | Grid `place-items: center` + 80% dark overlay |

---

## Related

- [DIVI5-Home-Native-Pass.md](./DIVI5-Home-Native-Pass.md)
- [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) §4.12 sticky header
- Next.js SoT: `lib/experience-engine/engine.tsx`
