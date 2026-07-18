# MASTER PRD — DigitalStudioz.com
### Version: FINAL-v3 · Jedi Master Blueprint
**Date:** July 17, 2026
**Project:** DigitalStudioz.com (Data-Driven Media Studio Portal | Warm Premium)
**Host Environment:** LocalWP (or EnvKit) → Hostinger via WP-CLI + GitHub Actions
**Core Stack:** Divi 5 + ACF PRO + Fluent Stack + Three-Layer MCP Architecture

> **What This Document Is:** The complete, single-source blueprint for building DigitalStudioz.com with AI-assisted development. Cursor can read this file and understand every tool, every link, every pattern, and every rule it needs to execute the build.
>
> **Design lock (2026-07-17):** **Warm Premium** only — see `.cursor/docs/WARM-PREMIUM-PALETTE.md`. Tactile Brutalism / `#00ffcc` retired. Companion `.pdf` may lag; prefer this Markdown.

---

## 1. Core Infrastructure (Mandatory)

| Component | Choice | Purpose |
|-----------|--------|---------|
| **Theme** | `dgtl-digitalstudioz-theme` (Blank Child Theme) | Custom development base |
| **Data Backbone** | **ACF PRO** (official license) | Repeater Fields, Flexible Content, ACF Blocks — all required for Divi 5 Loop Builder |
| **Email** | **FluentSMTP** (Free) | Transactional email via Brevo |
| **Forms** | **Fluent Forms** (Free → Pro if needed) | ACF integration for form-to-CPT mapping |
| **SEO** | **Rank Math SEO** | CPT metadata → ACF fields → auto schema |
| **Security** | **Wordfence** (Production only) | WAF |
| **Migration** | **WP Migrate DB Pro + WP-CLI** | Staging → Production |

### ⚠️ ACF PRO is NOT Optional
The free version lacks three features your data-first architecture depends on:
- **Repeater Fields** — flexible lists (technologies, team, milestones)
- **Flexible Content Fields** — page builder inside ACF
- **ACF Blocks (PRO)** — custom Gutenberg blocks for Divi 5 Loop Builder

**Purchase:** [advancedcustomfields.com/pro/](https://www.advancedcustomfields.com/pro/) — do NOT use GPL clubs (HustleWP etc.)

---

## 2. Complete Reference Links

### Core Tools
| Tool | Link |
|------|------|
| Cursor AI | [cursor.com](https://cursor.com) |
| Divi 5 Theme | [elegantthemes.com](https://www.elegantthemes.com/) |
| ACF PRO | [advancedcustomfields.com/pro/](https://www.advancedcustomfields.com/pro/) |
| LocalWP | [localwp.com](https://localwp.com) |
| Hostinger | [hostinger.com](https://www.hostinger.com) |
| Brevo (SMTP) | [brevo.com](https://www.brevo.com/) |

### WordPress Plugins
| Plugin | Link | Free/Paid |
|--------|------|-----------|
| FluentSMTP | [fluentsmtp.com](https://fluentsmtp.com) | Free |
| Fluent Forms | [fluentforms.com](https://fluentforms.com) | Free (Pro optional) |
| Rank Math SEO | [rankmath.com](https://rankmath.com) | Free |
| Wordfence | [wordfence.com](https://www.wordfence.com) | Free |
| WP Migrate DB Pro | [deliciousbrains.com](https://deliciousbrains.com/wp-migrate-db-pro/) | Paid |
| Squad Modules Lite | [WP.org](https://wordpress.org/plugins/squad-modules-lite/) | Free (65 Divi 5 modules) |
| AI Engine | [WP.org](https://wordpress.org/plugins/ai-engine/) | Free (100K+ installs) |

### MCP Servers (Primary Stack)
| MCP Server | Link | Tools | Cost |
|------------|------|-------|------|
| **LocalWP Agent Tools** (10up) | [GitHub](https://github.com/10up/localwp-agent-tools) | 12 tools — WP-CLI, logs, config, auto .cursor/mcp.json | FREE |
| **Novamira** | [GitHub](https://github.com/use-novamira/novamira) · [Site](https://novamira.ai) | PHP execution, filesystem, DB, snapshots | Free (Pro €49/yr) |
| **IA Webmaster Bridge** | [GitHub](https://github.com/RiusmaX/ia-webmaster-bridge) | 108 tools, 105 Divi 5 modules, Theme Builder, design system, SEO, 8-layer security | FREE (GPL-3.0) |
| **Divi5 Toolkit** | [GitHub](https://github.com/cjsimon2/Divi5-ToolKit) | CSS (4 formats), WCAG, CWV, validation | FREE |
| **WP MCP Adapter + WSP** | [GitHub](https://github.com/AgriciDaniel/wp-mcp-adapter) · [GitHub](https://github.com/AgriciDaniel/wsp-wordpress-mcp) | Direct Cursor→WordPress content management | FREE |

### Safety & New Tools (July 2026)
| Tool | Link | Why |
|------|------|-----|
| **wpmcp** | [GitHub](https://github.com/wpmcp/wpmcp) | Snapshot-before-every-write. AI CAN'T wreck your site. |
| **acf-mcp-server** | [GitHub](https://github.com/symonbaikov/acf-mcp-server) | AI-safe ACF JSON management. TypeScript, Zod, dryRun. |
| **MGD_Divi5-Dev_SKILL** | [GitHub](https://github.com/MichaelGahnDESIGN/MGD_Divi5-Dev_SKILL) | 18 Claude/Codex slash commands for Divi 5 |
| **EnvKit** | [GitHub](https://github.com/Env-Kit/envkit-releases) | LocalWP alternative w/ built-in MCP. ⭐429. |

### Divi 5 Documentation
| Resource | Link |
|----------|------|
| Elegant Themes Divi 5 Docs | [help.elegantthemes.com](https://help.elegantthemes.com/en/collections/10650977-divi-5) |
| Elegant Themes General | [elegantthemes.com/documentation/divi/](https://www.elegantthemes.com/documentation/divi/) |
| Community LLM-Friendly Docs | [16wells.github.io/divi-docs/](https://16wells.github.io/divi-docs/) |
| Loop Builder Guide | [diviflash.com](https://diviflash.com/divi-5-loop-builder/) |
| ACF + Loop Builder Video | [YouTube](https://www.youtube.com/watch?v=OoapR9iBCyU) |
| ACF Official Docs | [advancedcustomfields.com/resources/](https://www.advancedcustomfields.com/resources/) |
| ACF Blocks Docs | [advancedcustomfields.com/resources/blocks/](https://www.advancedcustomfields.com/resources/blocks/) |
| WP Block Editor Handbook | [developer.wordpress.org/block-editor/](https://developer.wordpress.org/block-editor/) |
| MCP Protocol Docs | [modelcontextprotocol.io](https://modelcontextprotocol.io) |
| Divi Forums | [elegantthemes.com/forum/](https://www.elegantthemes.com/forum/) |

### Design & Workflow Tools
| Tool | Link | Purpose |
|------|------|---------|
| getdesign.md | [getdesign.md](https://getdesign.md) | Brand design tokens |
| Go Full Page | Chrome Web Store | Full-page reference screenshots |
| ZipWP | [zipwp.com](https://zipwp.com) | Cloud WordPress sandbox |
| Crafter Pro | Via Elegant Themes | Paid Divi 5 design system |

---

## 3. Three-Layer AI Architecture

```
┌─────────────────────────────────────────────────┐
│  LAYER 1: Local Environment Control             │
│  LocalWP Agent Tools (10up) — 12 MCP tools      │
│  → WP-CLI, logs, config, start/stop services    │
│  → Auto-generates .cursor/mcp.json              │
├─────────────────────────────────────────────────┤
│  LAYER 2: WordPress Operations                  │
│  Novamira (Free) — PHP execution, filesystem    │
│  + wpmcp — safety snapshots, rollback           │
│  + acf-mcp-server — JSON-first ACF management   │
├─────────────────────────────────────────────────┤
│  LAYER 3: Divi 5 Page Building                  │
│  IA Webmaster Bridge — 108 tools, 105 modules   │
│  + Divi5 Toolkit — CSS, WCAG, validation        │
│  + MGD_Divi5-Dev_SKILL — 18 slash commands      │
├─────────────────────────────────────────────────┤
│  OPTIONAL: Direct Cursor→WordPress              │
│  WP MCP Adapter + WSP WordPress MCP             │
└─────────────────────────────────────────────────┘
```

---

## 4. Master Workflow Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                     DIGITALSTUDIOZ WORKFLOW                       │
│                                                                   │
│  ┌─────────┐    ┌──────────┐    ┌──────────┐    ┌─────────────┐  │
│  │ CURSOR   │───▶│ LocalWP  │───▶│ Novamira │───▶│  WordPress  │  │
│  │ + Agent  │    │ Agent    │    │ + wpmcp  │    │  + Divi 5   │  │
│  └────┬─────┘    └──────────┘    └────┬─────┘    └──────┬──────┘  │
│       │                               │                 │         │
│       │  PHP execution · filesystem · DB · snapshots     │         │
│       │  ACF JSON → wp acf sync · 105 Divi modules       │         │
│       │  IA Webmaster Bridge · Divi5 Toolkit             │         │
│       │                                                  │         │
│  ┌────┴──────────┐  ┌──────────────┐  ┌──────────────┐  │         │
│  │ Composer 2.5  │  │  Grok 4.5    │  │ DeepSeek V4  │  │         │
│  │ (Inline) 60%  │  │ (Complex)25% │  │ (Coding) 10% │  │         │
│  └───────────────┘  └──────────────┘  └──────────────┘  │         │
│                                                                   │
│  DEPLOY: LocalWP → GitHub → GitHub Actions → Hostinger           │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5. Complete Directory Structure

```
digitalstudioz-workspace/                  ← Git root
├── .cursorrules                           ← PHP/CSS rules + dgtl_ naming
├── .cursor/
│   ├── mcp.json                           ← All MCP endpoints
│   ├── rules/wordpress-coding-standards.mdc
│   └── docs/
│       └── WP-Divi5-Dev-PRD-FINAL-v3.md   ← This document
│
├── wp-content/
│   ├── themes/
│   │   ├── Divi/                          ← Parent (DO NOT EDIT)
│   │   └── dgtl-digitalstudioz-theme/     ← Child (ALL custom code)
│   │       ├── style.css
│   │       ├── functions.php              ← dgtl_ CPTs + enqueues
│   │       ├── acf-json/                  ← AI-generated ACF JSON
│   │       │   ├── group-dgtl-project-fields.json
│   │       │   ├── group-dgtl-service-fields.json
│   │       │   └── group-dgtl-team-fields.json
│   │       ├── template-parts/
│   │       │   ├── hero/dgtl-hero-portfolio.php
│   │       │   ├── cards/dgtl-card-project-bento.php
│   │       │   └── sections/dgtl-about-tactile.php
│   │       ├── inc/
│   │       │   ├── dgtl-acf-register.php
│   │       │   ├── dgtl-cpts.php
│   │       │   ├── dgtl-taxonomies.php
│   │       │   ├── dgtl-enqueue.php
│   │       │   └── dgtl-security.php
│   │       ├── assets/
│   │       │   ├── css/dgtl-tactile-brutalist.css
│   │       │   ├── js/dgtl-interactions.js
│   │       │   └── img/
│   │       └── screenshot.png
│   │
│   └── plugins/
│       ├── advanced-custom-fields-pro/
│       ├── fluent-smtp/
│       ├── fluentform/
│       ├── seo-by-rank-math/
│       └── wordfence/
│
├── reference/                            ← Old Next.js site (read-only)
├── docs/
├── .env.local                            ← API keys (gitignored)
├── .gitignore
└── README.md
```

### Naming Conventions
| Type | Convention | Example |
|------|-----------|---------|
| PHP functions | `dgtl_` prefix | `dgtl_register_cpts()` |
| CSS classes | `dgtl-` prefix | `.dgtl-hero-title` |
| Template parts | `dgtl-{type}-{name}.php` | `dgtl-card-project-bento.php` |
| ACF JSON | `group-dgtl-{cpt}-fields.json` | `group-dgtl-project-fields.json` |

---

## 6. Data-First Workflow

### Phase 1: ACF Schema
- Register CPTs via `dgtl_register_cpts()` — always `'show_in_rest' => true`
- AI writes ACF JSON → `wp acf sync`
- Location rules target CPTs (`dgtl_project`, `dgtl_service`)

### Phase 2: Template Build
- **Loop Builder** — never hardcode content
- **Dynamic Content** — stacked discs icon maps ACF→frontend
- **IAWB** builds pages via MCP — 105 modules, Theme Builder

### Phase 3: Design System
- Tokens-first via IA Webmaster Bridge
- **Canonical:** Warm Premium — see `.cursor/docs/WARM-PREMIUM-PALETTE.md`
- Colors: `#0a0a0b` void / `#111113` canvas / `#18181b` surface / `#c8a45c` gold / `#e8e2d9` cream

### Phase 4: Custom Code (Optional)
- Only build what Divi + Loop Builder can't do

---

## 7. Screenshot-to-Divi Build Pattern

```
Step 1: Go Full Page Chrome extension → capture reference site
Step 2: Feed to AI: "Rebuild this in Divi 5 using [modules list]"
Step 3: AI builds via IAWB or generates Divi shortcode
Step 4: Screenshot result → circle problems → "fix this"
Step 5: Repeat 2-4 rounds → responsive check
```

### ⚠️ CRITICAL — Never Skip This Instruction:
> "Use separate Divi modules — Hero, Blurb, Heading, Testimonial, Image, CTA, Button, Code Module (forms only). Break into separate rows/columns. Use Theme Builder for global header/footer — NOT on individual pages."

---

## 8. AI Model Strategy

### Priority Order

| Tier | Model | % | Cost | When |
|------|-------|---|------|------|
| **1** | Cursor Composer 2.5 | 60% | Included | Tab complete, Ctrl+K, CSS tweaks |
| **2** | Grok 4.5 (promo) | 25% | $1/M in / $3/M out | Complex multi-file, ACF refactoring |
| **3** | DeepSeek V4 Pro | 10% | ~$0.87/M out | Pure coding — PHP, React, CSS |
| **4** | GLM 5.2 | 5% | ~$4.40/M out | Massive refactoring, whole-repo queries |

### After July 21 (Grok promo ends):
```
45% Composer → 35% DeepSeek → 15% Grok → 5% GLM
```

### Cursor Setup
- Agent/Auto does NOT auto-use Grok. Open **model picker** (bottom-left) → select "Grok 4.5"
- Composer 2.5 = tab completions + Ctrl+K only

### Evaluation Method
Don't rank globally — rank by YOUR project:
1. Does the code WORK in LocalWP?
2. Is it using `dgtl_` naming?
3. Which model needs fewer manual edits? That one wins.

---

## 9. Design: Warm Premium (LOCKED — production)

> **Canonical source:** `.cursor/docs/WARM-PREMIUM-PALETTE.md` + live temp site `http://localhost:3000/`  
> **Frozen backup:** `G:\Hermes_Project_BackUpz\DigitalStudioz\nextjs-warm-premium-temp-reference-2026-07-17`  
> **Not used:** Tactile Brutalism / acid cyan `#00ffcc` / sharp 0px-border systems — retired for DigitalStudioz.com.

| Element | Spec |
|---------|------|
| Mood | Warm, luxurious, crafted, editorial — luxury watch × design studio |
| Corners | Binary radius: **8px** (controls) / **16px** (cards) — soft, not brutalist |
| Borders | Gold-tinted `rgba(200,164,92,0.12)` + subtle warm borders |
| Background (void) | `#0a0a0b` |
| Background (canvas) | `#111113` |
| Surface | `#18181b` / elevated `#1f1f23` |
| Text primary | `#f4f4f5` |
| Text secondary | `#a1a1aa` / warm cream `#e8e2d9` |
| Accent | `#c8a45c` (muted gold) · hover `#d4b872` · dim `#a8883e` |
| Shadows | Gold ambient glow — luminance stacking |
| Tagline | "Think Big. Build Bold." |

### Site Structure (match current Next.js showcase)
- **Nav:** Transparent → solid on scroll. Logo left. Work | Services | Process | About | Contact.
- **Hero:** Full-viewport void + FadeUp; gold-gradient headline; tagline mono badge.
- **Work:** 2:1 asymmetric bento grid with gold border accents.
- **Services:** 3-column card grid (glass / warm surface).
- **Process:** 5-step strip.
- **About:** 1:1 text + image.
- **Stats / Quote / Contact / Footer:** Warm Premium tokens throughout.

### Layout rules (carry into Divi 5)
- Container **1200px** · section padding **~100px** vertical
- Prefer glass cards + gold CTAs over cyan/brutalist modules
- Header/footer via Theme Builder; pages use separate Divi modules (never one HTML blob)

### Competitive references (inspiration only — do NOT adopt cyan brutalism)
- [silentpartnersstudio.com](https://silentpartnersstudio.com) — cinematic dark (adapt warmth, not cyan)
- [revelatio.studio](https://revelatio.studio) — bento / stats patterns (keep gold palette)
- Primary reference remains the **current DigitalStudioz Next.js site**

---

## 10. Development Playbooks

| Scenario | Method |
|----------|--------|
| **Blank site** | Set global vars first (colors, fonts, spacing) |
| **AI page build** | IAWB MCP — 105 modules, 79 typed builders |
| **Screenshot→Divi** | Capture → explicit module list → iterate 2-4 rounds |
| **ACF fields** | AI writes JSON → `wp acf sync` |
| **CSS** | Divi5 Toolkit — 4 formats + WCAG + CWV |
| **Deploy** | `git pull → wp search-replace → wp cache flush` |

---

## 11. .cursorrules

- `dgtl_` / `dgtl-` namespace on everything
- `defined('ABSPATH') || exit;` in every PHP file
- Native JSON block structure only — no legacy shortcodes
- Colors (Warm Premium): `#0a0a0b` / `#111113` / `#18181b` / `#c8a45c` / `#e8e2d9` — never `#00ffcc`
- All MCP layers active before development
- Novamira snapshot before every AI edit
- One task per prompt — never the whole site

---

## 12. Production Deployment

```bash
git pull origin main
wp core update --minor
wp plugin update --all
wp search-replace "local-site.local" "digitalstudioz.com" --all-tables
wp cache flush
wp rewrite flush
```

### Hardening Checklist
- [ ] Remove: Novamira, IAWB, Query Monitor, dev toolkits, .cursorrules
- [ ] Enable: Wordfence, WP Super Cache
- [ ] Set: `WP_DEBUG = false`
- [ ] Verify: Divi modules render, forms deliver, SEO metadata
- [ ] Backup: Full WPvivid before final deploy

---

## 13. Setup Checklist (First Session)

- [ ] Install LocalWP (or evaluate EnvKit)
- [ ] Install Divi 5 + create child theme
- [ ] Purchase & install ACF PRO
- [ ] Install: FluentSMTP, Fluent Forms, Rank Math SEO, Squad Modules Lite
- [ ] Install: LocalWP Agent Tools, Novamira, IA Webmaster Bridge, wpmcp
- [ ] Configure `.cursor/mcp.json` with all endpoints
- [ ] Create full directory structure (Section 5)
- [ ] Create `acf-json/` directory
- [ ] Write `functions.php` with `dgtl_register_cpts()` + `show_in_rest => true`
- [ ] First ACF field group as JSON → `wp acf sync`
- [ ] Set design tokens Warm Premium (#0a0a0b, #111113, #18181b, #c8a45c, #e8e2d9) — see WARM-PREMIUM-PALETTE.md
- [ ] Build first page: "Create a hero section with…"
- [ ] Verify Loop Builder + Dynamic Content
- [ ] Take first wpmcp snapshot

---

## 14. PDF Generation (Local + Cloud)

| Method | Tool | When |
|--------|------|------|
| **Online** | Google Docs API (markdown → Doc → PDF) | Drive backup included |
| **Offline** | xhtml2pdf (pure Python, no deps) | Local-only, instant |

---

## 15. Scope Boundaries

❌ No 3D/WebGL · No React/Webpack (Phase 1-3) · No Tailwind conflicts · No Divi 4 · No Docker · Clean slate

**Phase 4+:** Custom Divi 5 React modules, scroll animations, API integrations

---

*FINAL-v3 · July 17, 2026*
*Sources: Original PRD v1 + 4 Research Passes (Hermes MCPs, 11 YouTube videos, Full Gemini conversation, Awwwards studio analysis, July 2026 GitHub discovery, Cursor pricing research)*
