# Divi / WordPress Dev — DigitalStudioz

**Central home** for LocalWP + Divi 5 + WP playbooks, issues, and research.  
Keep fleet/profile docs (START-HERE, TOOLS-*, Hostinger, etc.) in `.cursor/docs/` — put **new WP/Divi notes here**.

**LocalWP site:** `D:\Hermes\projects\Local-WP\DigitalStudioz-WP` · `https://digitalstudioz.local`

---

## Start here (reading order)

| Priority | Doc | Role |
|----------|-----|------|
| 0 | [DEV-WORKFLOW.md](./DEV-WORKFLOW.md) | Daily cadence: measure → fix → verify → **log fixes** → `theme:sync` |
| **0b** | **[DIVI5-Native-Audit.md](./DIVI5-Native-Audit.md)** | **Re-grade** vs 0.6.6 baseline — overall **~93%** (was ~88%); debt D1–D14 |
| 1 | [DIVI5-LocalWP-Setup-Catalog.md](./DIVI5-LocalWP-Setup-Catalog.md) | Living SoT — stack, checklist, fixes |
| **1b** | **[DIVI5-Problems-Solutions.md](./DIVI5-Problems-Solutions.md)** | **Master chrome/MCP issues → solutions** (nav → spacing → **mobile 0.7.4**, MCP). After fixes: say **`log fixes`**. |
| 2 | [ISSUES-RESOLVED.md](./ISSUES-RESOLVED.md) | Short fix index |
| 3 | [DIVI5-Design-Variables-GoldGrey.md](./DIVI5-Design-Variables-GoldGrey.md) | Design Variables + Fluid type |
| 4 | [DIVI5-Launch-Preview-Pages.md](./DIVI5-Launch-Preview-Pages.md) | Brand walls 54+57 + ET incident + **agent compose gotchas** |
| 5 | [DIVI5-Section-Patterns.md](./DIVI5-Section-Patterns.md) | Jon→Divi section vocabulary + `style-wall` / CTAs |
| 5b | [DIVI5-Home-Native-Pass.md](./DIVI5-Home-Native-Pass.md) | Home 15 Divi-native pass + remaining HTML chrome |
| 5c | [DIVI5-Layout-Polish-Log.md](./DIVI5-Layout-Polish-Log.md) | Nav opacity, section padding, hero center — problems → solutions |
| 6 | [WP-Divi5-Dev-PRD-FINAL-v3.md](./WP-Divi5-Dev-PRD-FINAL-v3.md) | Product PRD (current) |
| 7 | [youtube-channel-watchlist-2026-07.md](./youtube-channel-watchlist-2026-07.md) | Divi YouTube watchlist |
| **7b** | **[DIVI5-EXTERNAL-KB.md](./DIVI5-EXTERNAL-KB.md)** | External Divi 5 KB grades — 16wells docs, divi5-skill, ToolKit |
| **8** | **[HOSTINGER-WP-SYNC.md](./HOSTINGER-WP-SYNC.md)** | Local → live WPvivid + theme-only push (no full wipe every time) |

**Shared design tokens (Next.js + WP):** stay in parent docs → [`../WARM-PREMIUM-PALETTE.md`](../WARM-PREMIUM-PALETTE.md)

**WP workspace mirror (MCP day-to-day):**  
`Local-WP/DigitalStudioz-WP/.cursor/docs/` (`DIVI5-SETUP-CATALOG.md`, `MCP-SETUP.md`)

---

## Catalog

### Setup & issues
| File | Notes |
|------|--------|
| `DEV-WORKFLOW.md` | Cadence + `theme:sync` / `theme:backup` / `wp:smoke` |
| `DIVI5-Native-Audit.md` | Native % grades + debt scoreboard (re-audit 0.7.4) |
| `DIVI5-Problems-Solutions.md` | **Master** chrome/MCP issue → solution log (nav, freeze, menu, mobile, spacing, MCP) |
| `DIVI5-LocalWP-Setup-Catalog.md` | Verified stack, sequence, gotchas |
| `ISSUES-RESOLVED.md` | One-line index → details in Problems-Solutions / catalog |
| `DIVI5-Design-Variables-GoldGrey.md` | Gold & Grey Variables + Fluid presets |
| `DIVI5-Launch-Preview-Pages.md` | Brand walls 54+57 + ET wall incident + agent save/CSS gotchas |
| `DIVI5-Section-Patterns.md` | Plain-language section patterns → Divi best-practice builds |

### PRDs & playbooks
| File | Notes |
|------|--------|
| `WP-Divi5-Dev-PRD-FINAL-v3.md` (+ `.pdf`) | Current PRD |
| `WP-Divi5-Dev-PRD-MASTER-COMPLETE.md` (+ `.pdf`) | Full master PRD |
| `WP7-Theme-Development-Playbook.md` (+ `.pdf`) | WP 7 theme |
| `WP-Theme-Development-Conversion-Playbook.md` (+ `.pdf`) | Theme conversion |
| `WP-Plugin-Divi5-Module-Dev-Playbook.md` (+ `.pdf`) | Divi 5 modules |
| `WooCommerce-AI-Dev-Playbook.md` (+ `.pdf`) | Woo + AI |
| `AI-Blog-Automation-Playbook.md` (+ `.pdf`) | Blog automation |
| `AI-Platform-Research-Findings.md` | Platform research |

### Research
| File | Notes |
|------|--------|
| `youtube-channel-watchlist-2026-07.md` | Ranked Divi/WP channels |
| `youtube-research-findings.md` | Mining notes |

---

## Where to write new notes

1. **New fix / gotcha** → append catalog §Issues (§4.x), then one row in `ISSUES-RESOLVED.md`
2. **Design Variables / presets / hex-vs-variable BGs** → `DIVI5-Design-Variables-GoldGrey.md`
3. **Brand walls / Divi compose scripts** → `DIVI5-Launch-Preview-Pages.md`
4. **Session work** → also `../ReCall.md` + vault when substantive
5. **Do not** dump large WP write-ups into `.cursor/docs/` root

Assets / scripts stay on the WP machine:  
`Local-WP/DigitalStudioz-WP/.cursor/assets/Divi-Xtraz/`

**Child theme git mirror (DigitalStudioz repo):**  
`assets/wp-theme/dgtl-digitalstudioz-theme` — `npm run theme:sync` after CSS/JS changes.
