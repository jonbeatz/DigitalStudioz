# 🏗️ DIGITALSTUDIOZ.COM — MASTER COMPLETE BLUEPRINT
### Jedi Master Final Edition · July 17, 2026

> **WHAT THIS IS:** The single most complete document for building a WordPress + Divi 5 + AI-assisted professional studio website. Every tool, every link, every pattern, every lesson from 4 comprehensive research passes. Hand this to Cursor and it knows everything.
>
> **Design (2026-07-17):** Production aesthetic is **Warm Premium** (gold `#c8a45c`, void `#0a0a0b`, cream `#e8e2d9`) — matching the current Next.js temp site. Tactile Brutalism / cyan is retired. Canonical tokens: `.cursor/docs/WARM-PREMIUM-PALETTE.md`. Markdown in this folder is source of truth; companion `.pdf` copies may lag until regenerated.

---

## 📋 TABLE OF CONTENTS

1. Core Infrastructure
2. Complete Reference Library (50+ Links)
3. Three-Layer AI Architecture
4. Master Workflow Diagram
5. Full Directory Structure + File Architecture
6. Data-First Jedi Workflow (4 Phases)
7. Screenshot-to-Divi Build Pattern
8. Development Playbooks (7 Scenarios)
9. .cursorrules — Law of the Land
10. ACF + AI Workflow (JSON-First)
11. Deployment Pipeline
12. AI Model Strategy (5 Models Compared)
13. Design Direction: Warm Premium (canonical)
14. Best Studio Websites 2026 (12 Analyzed)
15. New Tools Discovered (July 2026)
16. YouTube Research — All 11 Videos
17. Gemini Conversation — Key Insights
14. divi5-skill — JSON-Native Divi 5 Page Generation (NEW)
15. PDF Generation Setup
16. Scope Boundaries
17. First Session Setup Checklist

---

# MASTER PRD — DigitalStudioz.com
### Version: FINAL-v3 · Jedi Master Blueprint
**Date:** July 17, 2026
**Project:** DigitalStudioz.com (Data-Driven Media Studio Portal | Warm Premium)
**Host Environment:** LocalWP (or EnvKit) → Hostinger via WP-CLI + GitHub Actions
**Core Stack:** Divi 5 + ACF PRO + Fluent Stack + Three-Layer MCP Architecture

> **What This Document Is:** The complete, single-source blueprint for building DigitalStudioz.com with AI-assisted development. Cursor can read this file and understand every tool, every link, every pattern, and every rule it needs to execute the build.

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
- **Canonical:** Warm Premium (matches live Next.js temp site) — see `.cursor/docs/WARM-PREMIUM-PALETTE.md`
- Colors: `#0a0a0b` void / `#111113` canvas / `#18181b` surface / `#c8a45c` gold accent / `#e8e2d9` warm cream

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
| Borders | Gold-tinted `rgba(200,164,92,0.12)` + subtle warm borders (not harsh #333) |
| Background (void) | `#0a0a0b` |
| Background (canvas) | `#111113` |
| Surface | `#18181b` / elevated `#1f1f23` |
| Text primary | `#f4f4f5` |
| Text secondary | `#a1a1aa` / warm cream `#e8e2d9` |
| Accent | `#c8a45c` (muted gold) · hover `#d4b872` · dim `#a8883e` |
| Shadows | Gold ambient glow — luminance stacking, not flat hard edges |
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

## 14. divi5-skill — JSON-Native Divi 5 Page Generation (NEW — July 17, 2026)

**GitHub:** [github.com/divilovewp/divi5-skill](https://github.com/divilovewp/divi5-skill) ⭐16 · Updated TODAY

> **What makes this different:** Unlike IA Webmaster Bridge (which builds pages via MCP function calls), divi5-skill has the AI **write Divi 5 JSON block structures directly**. No MCP server needed for page building — just attach the skill files and the AI generates valid Divi 5 JSON.

### How It Works
The AI reads modular `.md` skill files that teach it Divi 5's internal JSON format. Then it:
1. **Writes** valid Divi 5 block JSON
2. **Pastes** it into the WordPress code editor (Divi → Wireframe View → Paste)
3. **OR** pushes it via REST API
4. **OR** uses the **Divi Connect plugin** for live publishing directly to a running site

### 15 Skill Files

| File | Covers | When to Attach |
|------|--------|---------------|
| `DIVI5-BASE.md` | Core rules, nesting, common mistakes, validation | **Always** |
| `DIVI5-DESIGN-PROCESS.md` | Discovery questions → page plan → blueprint → self-critique | **Always** |
| `DIVI5-LAYOUT.md` | Sections, rows, columns, groups, Grid layout | Building structure |
| `DIVI5-STYLING.md` | Backgrounds, gradients, borders, typography, text effects, framing, aspect-ratio | Styling anything |
| `DIVI5-MODULES-CONTENT.md` | Heading, text, button, image, blurb, CTA, testimonial, team-member, icon, divider, code, SVG, timeline, breadcrumbs | Content sections |
| `DIVI5-MODULES-INTERACTIVE.md` | Accordion, toggle, tabs, contact-form, signup, dropdown, interactions | Interactive elements |
| `DIVI5-MODULES-MEDIA.md` | Video, gallery, slider, video-slider, lottie, audio, before-after-image | Media sections |
| `DIVI5-MODULES-DATA.md` | Counters, pricing tables, social, table-of-contents, instagram-feed | Data displays |
| `DIVI5-MODULES-DYNAMIC.md` | Blog, portfolio, post*, menu, search, login, sidebar, comments, map + **Loop Builder** | Dynamic/query content |
| `DIVI5-MODULES-WOOCOMMERCE.md` | Shop, single-product, cart & checkout modules | E-commerce |
| `DIVI5-WORDPRESS.md` | Creating pages via REST API | Programmatic publishing |
| `DIVI5-PRESETS.md` | Global Presets — storage format, REST endpoint, Python helpers | Design systems |
| `DIVI5-CONNECT.md` | **Divi Connect plugin** — read design system, create pages live, manage tokens | Live publishing |
| `DIVI5-PATTERNS.md` | Real-world layout patterns + Python generation helpers | Rapid prototyping |
| `DIVI5-COVERAGE.md` | What's confirmed, source-verified, and untested | Reference |

### Quick-Start Combinations

**Build a landing page (JSON only):**
```
BASE + DESIGN-PROCESS + LAYOUT + STYLING + MODULES-CONTENT + PATTERNS
```

**Build + publish live via Divi Connect:**
```
BASE + DESIGN-PROCESS + CONNECT + LAYOUT + STYLING + MODULES-CONTENT + PATTERNS
```

**Build + import via REST API / WP-CLI:**
```
BASE + LAYOUT + STYLING + MODULES-CONTENT + WORDPRESS + PATTERNS
```

### How It Fits With Our MCP Stack

```
PATH A (MCP — function calls):
  Cursor → IA Webmaster Bridge MCP → WordPress → Divi 5 modules

PATH B (JSON — direct generation):
  Cursor + divi5-skill files → AI writes Divi 5 JSON → paste/API/Connect
```

**When to use PATH A (IAWB):** You want AI to interact with a running WordPress site — build pages, query modules, manage Theme Builder. Best for iterative building on a live dev site.

**When to use PATH B (divi5-skill):** You want AI to generate complete page layouts as JSON that you review before applying. Best for rapid prototyping, offline design, or when you don't have an MCP server running.

**They're complementary — not competitors.** Use both: divi5-skill for rapid JSON generation of sections, IAWB for live Theme Builder management and design system application.

### Setup
```bash
git clone https://github.com/divilovewp/divi5-skill.git
# Attach the .md files to your Cursor/Claude project
# Select the files based on what you're building (see Quick-Start above)
```

### End-to-End Workflow (Step-by-Step)

```bash
# 1. Clone the skill files
git clone https://github.com/divilovewp/divi5-skill.git D:/Hermes/tools/divi5-skill

# 2. In Cursor, attach the skill files to your project:
#    - Drag DIVI5-BASE.md + DIVI5-DESIGN-PROCESS.md into Cursor context
#    - Add module files for what you're building (MODULES-CONTENT, MODULES-MEDIA, etc.)
#    - Add DIVI5-PATTERNS.md for layout inspiration

# 3. Start with the design process:
#    Prompt: "I want to build a [hero/portfolio/contact] section for DigitalStudioz.
#            Style: Warm Premium (#0a0a0b void, #c8a45c gold, #e8e2d9 cream, 8px/16px radius).
#            Ask me discovery questions first, then plan the page."

# 4. AI asks questions → answers → AI plans the page:
#    - Intent: What's this page for?
#    - Narrative: What story does it tell?
#    - Blueprint: Section-by-section structure
#    - Design System: Colors, fonts, spacing
#    - Self-Critique: What could be better?

# 5. AI generates Divi 5 JSON:
#    - Copy the JSON output
#    - In WordPress: Edit page → Use Divi Builder → Wireframe View (bottom-left icon)
#    - Paste JSON into the wireframe editor
#    - Switch back to Visual Builder → page renders as native Divi modules

# 6. Iterate:
#    - "The hero image is too dark. Make it lighter."
#    - "The CTA button needs #c8a45c gold background."
#    - AI regenerates corrected JSON → paste again

# 7. For live publishing without manual paste:
#    - Install Divi Connect plugin on WordPress site
#    - AI uses CONNECT.md skills to push pages directly to live site
#    - No copy-paste needed — real-time publishing
```

### Comparison: All Three Divi 5 Page-Building Methods

| Method | How | Speed | Control | Best For |
|--------|-----|-------|---------|----------|
| **IA Webmaster Bridge** | MCP function calls → live WordPress | Medium | High — see changes in real time | Iterative building on running dev site |
| **divi5-skill** | AI writes JSON → paste into editor | Fast | High — review before applying | Rapid prototyping, offline design |
| **Divi5 Toolkit** | CSS generation + validation | Fast | CSS only | Styling, accessibility audits |
| **Divi AI (built-in)** | Native Divi 5 prompt → sections | Very fast | Low — AI decides layout | Quick sections, unlimited generations |

**Recommended workflow:** Use divi5-skill for the initial JSON generation of each section, IAWB for Theme Builder and design system application, Divi5 Toolkit for CSS polish and validation, and Divi AI for quick throwaway sections.

---

## 15. PDF Generation (Local + Cloud)

| Method | Tool | When |
|--------|------|------|
| **Online** | Google Docs API (markdown → Doc → PDF) | Drive backup included |
| **Offline** | xhtml2pdf (pure Python, no deps) | Local-only, instant |

---

## 15. WordPress 7.0 "Armstrong" — New Capabilities (July 2026)

> **WP 7.0.2 is current** (released July 17, 2026 — TODAY). 7.1 Beta 1 already in flight. This is the most consequential WordPress release for AI-assisted development in the platform's history.

### Three Features That Directly Help DigitalStudioz

| Feature | Why It Matters For Us |
|---|---|
| **AI Client in Core** | Provider-agnostic PHP API for text/image/speech/video generation. AI can generate content, alt text, excerpts, meta descriptions — all from PHP hooks. No plugin needed. |
| **Client-Side Abilities API + WebMCP** | Explicitly built for "browser agents/extensions and WebMCP." Hermes Browser Extension can discover and execute WordPress abilities natively via REST API (`/wp-abilities/v1/`). This bridges Hermes → WordPress directly. |
| **PHP-Only Block Registration** | Create Gutenberg blocks with zero JavaScript. `autoRegister` flag auto-generates inspector controls from PHP attributes. AI can generate complete blocks as pure PHP — no Webpack, no build step. Huge for our Theme Conversion Playbook. |

### AI Client — Code Example

```php
// Structured JSON with schema — AI generates structured data
$json = wp_ai_client_prompt('List 5 popular WordPress plugins with their primary category.')
    ->as_json_response($schema)
    ->generate_text();

// Model preferences with auto-fallback across providers
$result = wp_ai_client_prompt('Summarize the history of the printing press.')
    ->using_model_preference('claude-sonnet-4-6', 'gemini-3.1-pro-preview', 'gpt-5.4')
    ->generate_text_result();

// Feature detection
if (wp_ai_client_is_supported_for_text_generation()) {
    // AI features available
}
```

### PHP-Only Block Registration — No JavaScript Needed

```php
register_block_type('dgtl/project-card', [
    'title'      => 'Project Card',
    'attributes' => [
        'title'   => ['type' => 'string', 'default' => 'Project'],
        'count'   => ['type' => 'integer', 'default' => 5],
        'enabled' => ['type' => 'boolean', 'default' => true],
        'size'    => ['type' => 'string', 'enum' => ['small', 'medium', 'large']],
    ],
    'render_callback' => function($attributes) {
        // PHP rendering logic — AI can generate this
        return sprintf('<div class="dgtl-project-card">%s</div>', esc_html($attributes['title']));
    },
    'supports' => ['autoRegister' => true], // Auto-generate inspector controls
]);
```

### Other WP 7.0 Wins

| Feature | Benefit |
|---|---|
| **Block-level custom CSS** | Per-block styling right in the editor |
| **Responsive block visibility** | Show/hide blocks by device without custom code |
| **Command Palette** (Ctrl+K) | Keyboard-navigate the entire admin |
| **Font Library** | Central font management for all theme types |
| **Visual Revisions** | Slider comparison between page versions |
| **Connectors API** | Centralized API key management (Anthropic, Google, OpenAI presets) |
| **New Blocks** | Breadcrumbs, Icons, Headings — all auto-adaptive |
| **Divi 5.1 stable** | Released March 2026, weekly updates, no WP 7.0 compatibility issues |

### What WP 7.0 Doesn't Have (Yet)

- ❌ No native MCP server (but WebMCP via Client-Side Abilities API is the foundation)
- ❌ No dark mode admin
- ❌ No `wp ai` CLI commands
- ❌ API key encryption still pending (#64789)
- ❌ PHP-only blocks limited to basic attribute types (Fields API integration planned)

### Key Opportunities for Our Workflows

| Opportunity | WP 7.0 Feature | How It Helps |
|---|---|---|
| AI content migration | WP AI Client | Generate alt text, excerpts, meta during Next.js → WP conversion |
| AI block generation | PHP-only block registration | AI writes complete blocks as pure PHP — no JS toolchain |
| Browser agent integration | Abilities API + WebMCP | Hermes Extension discovers/executes WP abilities directly |
| Provider flexibility | Connectors API + model preferences | Claude for reasoning, GPT for generation, auto-fallback |
| Classic → Block conversion | PHP-only blocks + contentOnly mode | Easier migration from shortcode/classic themes |
| Mobile responsiveness | Block-level visibility controls | Per-device layout without custom CSS |
| Visual QA | Visual Revisions | Compare pre/post conversion states |

### Sources
- [WP 7.0 Release Post](https://wordpress.org/news/2026/05/wordpress-7-0-armstrong/)
- [WP 7.0 Field Guide](https://make.wordpress.org/core/2026/05/14/wordpress-7-0-field-guide/)
- [AI Client Dev Note](https://make.wordpress.org/core/2026/03/24/introducing-the-ai-client-in-wordpress-7-0/)
- [Client-Side Abilities API](https://make.wordpress.org/core/2026/03/24/client-side-abilities-api-in-wordpress-7-0/)
- [Connectors API](https://make.wordpress.org/core/2026/03/18/introducing-the-connectors-api-in-wordpress-7-0/)
- [PHP-Only Block Registration](https://make.wordpress.org/core/2026/03/03/php-only-block-registration/)
- [Divi 5.1 Release](https://www.elegantthemes.com/blog/divi-resources/divi-5-1-release-notes)

---

## 16. Client AI Blog Service — Additional Standout Plugins (July 2026)

Three plugins discovered in additional research that outperform the general market:

| Plugin | Installs | Standout Feature | Cost |
|--------|----------|-------------|------|
| **AI Puffer** (formerly AI Power) | 30,000+ | Automation engine: scheduled recurring tasks, voice agents, drag-drop AI Forms, vector DB training, WooCommerce AI credits | Free + Pro |
| **AI Bud** (WebFactory) | 10,000+ | Model fine-tuning (unique in WP), bulk title→content generator, multi-model (OpenAI/Claude/Gemini/OpenRouter) | Free + Pro |
| **Dominopost** | New | Full article structure: auto ToC, CTA buttons, key takeaways, copyright-free images, keyword clustering, OpenRouter+NVIDIA support | Free tier |

### 5-Plugin Balanced AI Stack (For Client Sites)
**Concept from wpoptimizers.com:** Don't use one monolithic AI plugin. Separate concerns:

| Role | Plugin | Purpose |
|------|--------|---------|
| **Content AI** | WPWriter or Dominopost | Blog posts, article structure |
| **SEO AI** | Rank Math + AI Puffer | Keywords, meta, schema |
| **Image AI** | FAL.ai integration or Dominopost | Featured images, in-article |
| **Chat AI** | AI Engine or AI Puffer | Visitor chatbot |
| **Automation** | AI Puffer or n8n | Scheduled tasks, workflows |

**Benefits:** Better performance, easier troubleshooting, modular upgrades, no single-plugin lock-in.

### Plugin Testing Methodology (Before Recommending to Clients)
1. Same 5 article types tested (roundup, how-to, comparison, local SEO, news)
2. Hemingway readability check (< Grade 8 target)
3. Originality.ai plagiarism check
4. Server resource monitoring (Lighthouse + Core Web Vitals)
5. Cost-per-article at 10-15 articles/month

### What NOT to Use
- ❌ Plugins not tested with WP 6.7+
- ❌ Article spinners (2024 tech)
- ❌ GPT-3.5-only plugins
- ❌ CodeCanyon one-time purchases (no ongoing support)
- ❌ Elementor-specific plugins (not our stack)
- ❌ Plugins closed by WP.org for security reasons

---

## 17. Scope Boundaries

❌ No 3D/WebGL · No React/Webpack (Phase 1-3) · No Tailwind conflicts · No Divi 4 · No Docker · Clean slate

**Phase 4+:** Custom Divi 5 React modules, scroll animations, API integrations

---

*FINAL-v3 · July 17, 2026*
*Sources: Original PRD v1 + 4 Research Passes (Hermes MCPs, 11 YouTube videos, Full Gemini conversation, Awwwards studio analysis, July 2026 GitHub discovery, Cursor pricing research)*


---

## 16. 📹 COMPLETE YOUTUBE RESEARCH (11 Videos)

# YouTube Research Findings — Divi 5 + WordPress + AI Development

**Date:** 2026-07-17
**Videos Analyzed:** 11 YouTube tutorials

---

## Video-by-Video Key Takeaways

### 1. Ferdy Korpershoek — Cloud Design → WordPress + Divi
**Link:** https://youtu.be/l5xO7sZRpwY

- **Hostinger AI onboarding:** Create blank WordPress site via Hostinger wizard. Skip AI builder, choose "blank website." Free domain included for 1 year. CDN hosting auto-selects closest server.
- **design.md for design systems:** Use [getdesign.md](https://getdesign.md) to grab professional design tokens from real brands (Dell, Bugatti, Apple). Copy the full DESIGN.md text into Cloud AI as a design system. Takes ~15 min to generate.
- **Claude Projects workflow:** Create a project in Claude, paste the design system, then every page built in that project inherits the tokens. "Prototype → Select design system → Describe what you want."
- **Screenshot references:** Use Chrome extension "Go Full Page" to capture entire reference websites. Drag into Cloud AI as visual reference.
- **ChatGPT for prompt engineering:** Ask ChatGPT: "Make this prompt for a Cloud AI design website much more in-depth." Paste the result. Better outputs than writing prompts manually.
- **Hicks Field connector:** Connect Cloud AI to AI image generators to auto-fill placeholder images.

### 2. Ferdy Korpershoek — Novamira + Cloud Design → WordPress
**Link:** https://youtu.be/IlAECXrUGR0

- **Novamira Cloud-to-WordPress pipeline:** Design in Cloud → Novamira pushes directly to WordPress live site. No migration plugins needed. Pages, images, menus all transfer automatically.
- **Bloxy theme:** After pushing to WordPress, switch to Bloxy (free lightweight theme) for speed. Use Theme Builder for global header/footer. Novamira handles the content; Bloxy handles performance.
- **Real-time sync:** Changes made in Cloud AI appear on WordPress within seconds via Novamira. Two-way — edit in either place.
- **Form testing:** WPForms integration tested — email delivery works out of the box after changing the notification email.
- **Mobile optimization:** Novamira transfers responsive designs. Ferdy manually tweaked mobile menu colors/styling post-transfer.
- **SVG logo via ChatGPT:** "Create a transparent SVG logo based on this homepage. Crop the SVG to the size of the logo." ChatGPT generates it, upload via WordPress customizer.

### 3. Priscilla — Claude + Novamira Vibe Coding (15-min websites)
**Link:** https://youtu.be/oVQ7hoX5DW8

- **Free tier works:** Built two websites in 15 minutes using only the free Novamira plugin. No coding.
- **Novamira setup:** Install plugin → Configuration → Turn on abilities → Generate application password → Give password to Codex/Claude via prompt.
- **15-min result:** Blank WordPress → fully designed site with forms, SEO metadata, images in 15 min.

### 4. Divi-specific test with Novamira + Codex
**Link:** https://youtu.be/dZauIYVbg0Y

**Critical Finding — Divi modules pitfall:**
- First attempt: Codex built the entire page as one HTML text block inside a single Divi module. NOT usable for editing.
- **Fix:** Must explicitly instruct AI: "Rebuild using separate Divi modules — Hero, Blurb, Heading, Testimonial, Image, CTA, Button. Use Theme Builder for global header/footer."
- Second attempt with explicit instructions: 10 sections, 11 rows, 26 columns. Proper Divi structure.
- **Iteration workflow:** Take screenshots of problems → tell AI "this isn't working" → AI fixes. Repeated 4-5 rounds to get polished result.

### 5. Priscilla — Claude + Divi Shortcode Method
**Link:** https://youtu.be/eUeOZzKVDLY

**Alternate approach — Divi shortcode paste:**
- Claude generates Divi shortcode format directly
- Paste into WordPress text editor (code view) → Switch to Divi Builder → All modules appear as native Divi sections
- **Project setup in Claude:** Create a Claude Project with business details (colors, fonts, vibe, tagline, SEO goal, Divi output rules)
- **Prompt formula:** "Build me a WordPress homepage using Divi in Divi shortcode format, ready to paste into the WordPress text editor."
- **Result:** 3-4 min generation → paste → native Divi blocks with all colors/themes applied

### 6. Mac — Divi 5 Design System Workflow (DV University Redesign)
**Link:** https://youtu.be/EX3owyrDNA0

- **ChatGPT for site audit + redesign plan:** "Take a look at [domain] and design a high-end website that looks like it was designed by a professional design agency. Include very important pages and suggested copy." ChatGPT returns full page plan + design critique.
- **Crafter Pro design system:** Premium Divi 5 design system. Import via Divi → Theme Options → Import/Export. Two files: presets.json + variables.json. Merge or override.
- **Design token customization:** Create your own preset variant (e.g., "M eyebrow" vs "K eyebrow") with custom letter-spacing, font-weight, size. Save as preset. Apply everywhere.
- **ZipWP:** Alternative to LocalWP — cloud-based WordPress sandbox. Create blank site, install Divi, import design system. Faster than local setup.

### 7. Divi AI (Built-in Divi 5 AI) — Prompt Engineering
**Link:** https://youtu.be/w8UM-wQg2lY

- **Divi's native AI:** Built directly into Divi 5. Generate entire pages, sections, images, and text from prompts within the Visual Builder.
- **Global settings control:** AI-generated colors/styles can be changed globally via Divi → Theme Options → General → Layout Settings. Changes propagate to all pages.
- **Prompt tips:** "Be specific — descriptive words like 'minimalist' and 'clean lines' instead of just 'modern.'" Unlimited generations, no credits to burn.
- **Reference websites:** "Study other websites you like and describe their look and feel. Use AI tools like Gemini or ChatGPT to help describe these sites."

### 8. Novamira + Claude Extension — Live Editing
**Link:** https://youtu.be/pZ960XZJpow

- **Claude Chrome Extension:** Connected to WordPress via Novamira. Claude takes screenshots of live site, identifies problems, edits directly.
- **Snapshots:** Novamira has built-in snapshots. Before any AI edit, take a snapshot. Revert if needed. Star important ones to prevent auto-deletion.
- **Iterative refinement pattern:** "I don't like what you did. Do better." Claude resizes browser to test responsive. Refines.
- **Visual feedback:** Claude takes screenshots at multiple resolutions to verify its own work.

### 9. Cursor + WordPress MCP — Direct WordPress Control
**Link:** https://youtu.be/1hGSUAdRxiU

**This is the most relevant video for Jon's setup.**

- **Two-plugin WordPress MCP stack:**
  1. **MCP Adapter** — bridges WordPress to AI tools via REST API
  2. **WSP WordPress MCP** — ability management (toggle read/write per post type, pages, media, comments, Elementor)
- **Setup:** Install both plugins → configure abilities in MCP settings → copy config JSON → paste into Cursor's `.cursor/mcp.json` → replace dummy password with WordPress application password
- **Capabilities:** Create blog posts directly from Cursor. Read existing content. Analyze SEO. Manage comments. Create Elementor layouts.
- **Application password:** Users → Edit user → scroll to bottom → "Add New Application Password." This is the secret key.
- **Elementor support:** When Elementor plugin is active, new abilities appear: list/create Elementor pages, add widgets, update elements.

### 10. Cursor + WordPress Theme Development (HTML → WordPress)
**Link:** https://youtu.be/J0JFfLIyyAQ

- **Cursor as WordPress theme builder:** AI converts static HTML templates to full WordPress themes with proper structure (functions.php, header.php, footer.php, style.css).
- **Pitfall:** AI sometimes creates files in the wrong directory. Must verify file locations.
- **Iteration approach:** "Work on one thing at a time. Give AI small, specific tasks rather than large prompts. Review each change before moving on."
- **Child theme approach:** Use Generate Child Theme plugin → point Cursor at child theme folder → AI modifies only child theme files.

### 11. Cursor AI for WordPress (Advanced Developer Perspective)
**Link:** https://youtu.be/3_TiyKdPNq4

- **Pitfalls identified:** AI-generated code often doesn't follow WordPress coding standards. May use deprecated functions. Doesn't understand plugin compatibility.
- **Best practice:** Ask AI to "review this code as a PHP WordPress developer" before making changes. Let it analyze structure first.
- **One task at a time:** "Don't give AI too many tasks. It performs poorly with complex multi-step instructions."

---

## Key Patterns Across All 11 Videos

### Pattern 1: Design System First
Every successful build starts with a design system. Whether it's Claude's design system, Crafter Pro, or [getdesign.md](https://getdesign.md) — define colors, fonts, spacing BEFORE building pages.

### Pattern 2: Iterative Refinement (4-5 rounds)
Nobody gets it right on the first prompt. Expect:
1. Rough layout (wrong)
2. Fix structure (getting closer)
3. Polish details (almost there)
4. Screenshot feedback (fine-tuning)
5. Final touches

### Pattern 3: Explicit Divi Module Instructions
AI defaults to building everything in one HTML block. Must explicitly say: "Use separate Divi modules — Hero, Blurb, Heading, Testimonial, Image, CTA, Button. Use Theme Builder for global header/footer."

### Pattern 4: Multiple AI Tools in Pipeline
- **ChatGPT** — prompt engineering, site audit, copy suggestions, logo SVG generation
- **Claude/Cloud Design** — visual design, layout generation
- **Novamira** — bridge to WordPress
- **Cursor** — code-level WordPress development, theme building

### Pattern 5: Screenshot-Based Feedback
Most effective way to guide AI: take screenshot of problem → "fix this" → AI sees exactly what you mean.

---

## New Tools to Add to PRD v2

| Tool | Purpose | Source |
|------|---------|--------|
| **getdesign.md** | Grab design tokens from real brands (Dell, Apple, Bugatti) | Video 1 |
| **WP MCP Adapter + WSP WordPress MCP** | Two-plugin stack for direct Cursor-to-WordPress control | Video 9 |
| **Go Full Page (Chrome extension)** | Full-page screenshots of reference websites | Video 1 |
| **ZipWP** | Cloud-based WordPress sandbox (alternative to LocalWP) | Video 6 |
| **Crafter Pro** | Paid Divi 5 design system with presets + variables | Video 6 |
| **Bloxy Theme** | Free lightweight WordPress theme (speed-optimized) | Video 2 |

## New Workflow Tips to Add to PRD v2

1. **ChatGPT for site audits:** Before building, ask ChatGPT: "Review [domain]. Design a high-end website with suggested pages and copy."
2. **ChatGPT for prompt engineering:** "Make this prompt for Divi 5 website generation much more in-depth." Paste the AI-refined prompt.
3. **Explicit Divi module instruction:** Always tell AI: "Break this into separate Divi modules — NOT one HTML block."
4. **Theme Builder rule:** "Headers and footers go in Theme Builder, not on individual pages."
5. **Snapshots before every AI edit:** Take Novamira snapshot. Can revert instantly.
6. **Small, specific tasks:** Don't give AI the whole website at once. One section at a time.
7. **Screenshot feedback:** Screenshot problem + "fix this" = fastest iteration pattern.


---

## 17. 🌐 STUDIO WEBSITE ANALYSIS (12 Sites)

# Digital Studio Website Layout Research — 2026
## Dark Mode · Warm Premium · Bento-Grid Patterns

> **Production design lock (2026-07-17):** DigitalStudioz.com ships **Warm Premium** (gold `#c8a45c`, void `#0a0a0b`, cream `#e8e2d9`). The Awwwards research below is competitive inspiration only — do **not** adopt acid cyan, 0px brutalist borders, or glitch typography as brand system.

> **Research Date:** July 17, 2026  
> **Sources:** Awwwards Nominees (Studio category + Dark filter), SiteInspire, direct site visits  
> **Purpose:** Competitive layout inspiration only — production brand = Warm Premium

---

## Executive Summary

The 2026 landscape for digital studio websites includes three converging trends (research context):
1. **Dark Mode Maximalism** — #000000, #121212, or near-black backgrounds with high-contrast typography and cinematic lighting
2. **Tactile / Digital Brutalism** — raw typography, glitch/ASCII aesthetics, visible grid lines (**not** DigitalStudioz brand)
3. **Bento-Grid / Asymmetric Layouts** — modular card systems — **compatible** with Warm Premium

**DigitalStudioz ships Warm Premium** (gold `#c8a45c`, void `#0a0a0b`, cream `#e8e2d9`, soft 8px/16px radius). Use trend 1 darkness + trend 3 bento patterns; skip cyan/glitch brutalism as the brand system.

---

## Site-by-Site Analysis (Top 12)

### 1. Revelatio Studio
**URL:** https://revelatio.studio/  
**Awwwards:** Nominee (Jul 2026) — Built with Webflow, GSAP, WebGL  
**Style:** Dark Mode + Digital Brutalism + Glitch Typography

**What makes it exceptional:**
- Hero uses ASCII/character-art CRT monitor aesthetic — a pixelated group photo rendered in typographic characters inside a curved bezel frame
- Headline uses glitched typography: "Brandin=$ Produ^! Desi!* & Code+ On? integra%+# visio&%"
- Pure #000000 background with white pill-shaped navigation floating top-left
- Mechanical odometer-style animated stat counters (Since, Projects, Countries, Recognitions)
- Scrolling city-name ticker tape in the middle section
- Results section uses a bento-like grid of metric cards with icons

**Key Sections:**
- Hero (CRT art + glitch headline + tagline)
- Services (4-pill list: Branding, Website, Product, Code)
- Featured Work (horizontal scroll of project cards with embedded video)
- Cities Ticker (scrolling location reel)
- Stats Dashboard (odometer counters)
- Results Grid (bento-grid of 19 metric cards: +30%, +250%, +300k visits, etc.)
- Testimonials
- Process section
- Footer

**Notable Design Elements:**
- Pill-shaped navigation (dark grey, ~rgba(30,30,30,0.9))
- Glitched/glyph typography as brand identity
- Odometer number animations (mechanical digit-flip feel)
- Cookie consent: sleek dark pill bottom-right

**Divi 5 Replicability:**
- ✅ Dark background, pill nav, stat cards, bento results grid — all achievable with Divi row/column/module combos
- ✅ Typography choices and color palette fully replicable
- ⚠️ Odometer counters need custom JS (or a count-up module)
- ⚠️ Glitched typography needs CSS text effects or custom module
- ❌ CRT/ASCII hero art needs custom WebGL/canvas (or pre-rendered image/video)

---

### 2. Silent Partners Studio
**URL:** https://silentpartnersstudio.com/  
**Awwwards:** Nominee (Jul 2026) — Webflow, Figma  
**Style:** Dark Mode + Minimalist Frame + Cinematic

**What makes it exceptional:**
- Stripped-down frame layout — all UI pushed to screen edges, center is pure visual
- Hero: full-viewport cinematic background (bokeh, crystalline particles, dark with cyan/magenta highlights)
- Massive stacked brand typography: "SILENT PARTNERS STUDIO" in bold white sans-serif
- No visible buttons, borders, or traditional nav — links are plain edge-text
- Custom cursor (tiny white dot in center of viewport)
- Left nav links (Reel, Work, About), right side language toggle (Fr)
- Bottom corners: social links (IG, FB, TB), location markers (MTL / LA)
- Bottom center: email contact
- Project index: expandable list with scrollable work reel (Krug, Florence + Machine, Panic!, Maroon 5, etc.)

**Key Sections:**
- Hero (fullscreen video/art + brand name + edge navigation)
- Work Index (scrollable project list — entertainment industry focus)
- Reel (video showreel)
- About page
- Contact (email form)

**Notable Design Elements:**
- "Frame within a frame" — content exists at edges, center breathes
- Custom cursor dot
- S logo (stylized S with horizontal strike-through)
- #000000-dominant with cyan/teal/magenta accent glows from background imagery

**Divi 5 Replicability:**
- ✅ Edge-positioned nav, frame layout, dark background fully achievable
- ✅ Fullscreen hero section with fullwidth row
- ⚠️ Custom cursor needs CSS/JS
- ❌ Cinematic particle/3D background needs video or WebGL

---

### 3. Cinética Studio
**URL:** https://www.cinetica.studio/  
**Awwwards:** Listed (Digital & Immersive Studio)  
**Style:** Dark Mode + Glitch/Glyph Brutalism + Immersive 3D

**What makes it exceptional:**
- Extends Revelatio's glitch typography into an entire brand system — headings use Unicode glyphs/symbols interspersed with text
- Hero: "Awar⟡⊗⇝ᛝ❥ᛝ⚤✧♪ digital studio crafting high-impact content, imm𓇼∞❥⊗♪♪ & int⊛㊡⚚❥⊗↫㊡✮ experiences"
- Section headers written entirely in glyphs: "(WH⊗↫⊗⚚ᕯ⟡✧✮♪", "(OURᕯ𓇼∞⚚❃ㅩ⇝⇝✮"
- Video background hero with directional blur/particle effects
- Two-column "creative divisions" layout (Digital Content & CGI vs Immersive & Interactive)
- Client logo marquee (Netflix, YouTube, Coca-Cola, Duolingo, Mattel, Intel, etc.)
- Loading screen with "LOADING NEW REALITY..." and timestamp

**Key Sections:**
- Hero (video + glitch headline)
- About / Philosophy
- Creative Divisions (2-column)
- Client Roster (logo grid)
- Services (Immersive Experiences, Digital Content, CGI, XR, Motion Capture)
- Projects (card grid with hover previews)
- Contact / FAQ

**Notable Design Elements:**
- Sections separated by glyph-character headers
- Date/time display in footer/lower section
- Dark mode throughout with neon accent glows
- Cookie consent: dark overlay

**Divi 5 Replicability:**
- ✅ Client logo grid, two-column layouts, service cards — all Divi-native
- ✅ Dark background and color palette
- ⚠️ Glyph typography requires Unicode character insertion (works in text modules)
- ❌ Video background hero with particle effects needs custom code
- ❌ 3D/immersive previews need WebGL

---

### 4. Obys Agency
**URL:** https://obys.agency/  
**Style:** Dark Mode + Horizontal Scroll + Experimental Minimalism

**What makes it exceptional:**
- Initial landing: pure black screen with tiny central graphic and number "53" at right edge — acts as a gate
- Once entered: horizontal-scrolling project index (marquee-style, multiple rows at different speeds)
- Projects listed in repetitive scrolling bands: Makhno, Source Unknown, Autex, Odin's Crow, etc.
- Toggle between Vertical/Horizontal layout modes
- Zero traditional navigation — pure portfolio-as-experience
- Known for: Porsche Taycan, Peter Lindbergh, Glyphic Biotechnologies projects
- Dark background with white typography, minimal color

**Key Sections:**
- Gate/Landing (click-to-enter)
- Horizontal Project Index (infinite scroll bands)
- Individual Project Pages

**Notable Design Elements:**
- Click-to-enter gate builds anticipation
- Horizontal scrolling breaks vertical browsing habit
- Repetitive project names create rhythmic visual pattern
- Number counter (53) — ambiguous meaning adds mystery

**Divi 5 Replicability:**
- ✅ Dark gate page with centered CTA achievable
- ⚠️ Horizontal scroll layout needs custom CSS (overflow-x + scroll-snap)
- ❌ Multi-speed parallax scroll bands need custom JavaScript

---

### 5. YUNGBLD Creative Studio
**URL:** https://www.yungbld.com/  
**Style:** Dark Mode + Bento-Grid Portfolio + Youth Culture

**What makes it exceptional:**
- Navigation: minimal left-side (about, projects, services) + YUNGBLD logo center
- Portfolio uses a bento-grid of project thumbnails in varying aspect ratios
- Projects shown as raw image cards: "Group 485618.png", "Screenshot 2026-03-09...", "FEATURED SITE PHOTO.png"
- Audio toggle (background music/sound)
- Contact form accessible via button
- "c r e a t i v e s t u d i o" spaced-out heading
- General Info and View All Projects buttons anchored to viewport

**Key Sections:**
- Hero (brand mark + spaced heading)
- Bento Portfolio Grid (mixed-size image cards)
- About (expandable)
- Projects (filtered view)
- Services
- Contact (modal form)

**Notable Design Elements:**
- Raw file-name-as-title aesthetic (brutalist)
- Audio element (rare in agency sites)
- Sparse, confident white space
- Mixed-size card grid (true bento)

**Divi 5 Replicability:**
- ✅ Bento-grid portfolio — Divi Gallery + custom CSS grid or multi-column row layouts
- ✅ Minimal nav, dark background
- ⚠️ Audio toggle needs custom JS
- ✅ Contact modal achievable with Divi popup

---

### 6. Ferr Studio
**URL:** Listed on Awwwards (Jun 2026 Nominee) — Webflow, WebGL, Cinema 4D  
**Style:** Dark Mode + Premium Retail + 3D Product Interaction

**What makes it exceptional:**
- Designer's own words: "convey the feeling of a premium store experience"
- Infinite scroll with seamless page transitions
- Glitch modal burger menu
- 3D product viewer — users can rotate and click on products
- 404 page doubles as a landing page
- Clean yet comprehensive navigation
- Dark background with premium/luxury feel (not brutalist, but dark luxury)

**Key Sections:**
- Hero (3D product showcase)
- Infinite Scroll Portfolio
- Glitch Menu Overlay
- Product Detail (3D viewer)
- 404 / Alternative Landing

**Notable Design Elements:**
- Glitch transitions (menu open/close)
- 3D product interaction (rotate to view)
- Seamless infinite scroll (SPA feel)
- Premium dark palette (deep charcoal, not pure black)

**Divi 5 Replicability:**
- ✅ Dark luxury palette, clean navigation
- ⚠️ Infinite scroll needs custom JS + AJAX loading
- ⚠️ Glitch menu effect needs CSS animations
- ❌ 3D product viewer needs Three.js/WebGL

---

### 7. Sukumar Swain (Wix Dark)
**URL:** Listed on Awwwards (dark-mode filter)  
**Style:** Dark Mode + Portfolio + Wix Studio

**What makes it exceptional:**
- Tagged as "Wix Dark" — demonstrates dark mode portfolio achievable on Wix/Divi-level platforms
- Clean dark portfolio layout with card-based work showcase
- Dark atmospheric design with minimal color accents
- Built entirely on Wix Studio (proves these layouts work on page builders)

**Divi 5 Replicability:**
- ✅ Fully replicable — this is a page-builder dark site, exactly the Divi 5 sweet spot

---

### 8. 2xA Studio
**URL:** Listed on Awwwards (Jun 2026 Nominee) — HTML5, CSS, JS  
**Style:** Dark Mode + Code-Driven + Amsterdam/Athens Duo

**What makes it exceptional:**
- "A code-driven design studio operating between Amsterdam and Athens"
- Team member focus (video elements on Awwwards show team members)
- Explorations section (experimental work)
- Custom 404 page
- Page loading animations
- Built with vanilla HTML/CSS/JS (no Webflow/framework)

**Key Sections:**
- Hero (brand + location duality)
- Team Members (video profiles)
- About Us
- Explorations (experimental work)
- Contact Page
- 404 Page (custom)

**Notable Design Elements:**
- Code-driven = lightweight, fast, unique
- Video team bios (personality-forward)
- Loading animation as brand moment

**Divi 5 Replicability:**
- ✅ Code-driven aesthetic can be replicated (Divi allows custom CSS)
- ✅ Team section, about, contact all standard
- ⚠️ Custom page transitions need JS
- ⚠️ Video backgrounds/team bios need careful Divi video module use

---

### 9. Studio K95
**URL:** Listed on Awwwards (dark-mode + studio filters)  
**Style:** Dark Mode + "Light in the Darkness" concept

**What makes it exceptional:**
- Tagged "Light in the Darkness" on Awwwards — plays with light/dark contrast thematically
- Studio portfolio with dark aesthetic
- Listed in multiple Awwwards categories (dark, studio, portfolio)

**Divi 5 Replicability:**
- ✅ Light/dark contrast concept fully replicable
- ✅ Portfolio layout achievable with Divi modules

---

### 10. Paysages Studio
**URL:** Listed on Awwwards (Studio nominees, 2026)  
**Style:** Studio Portfolio (specifics from Awwwards listing)

**What makes it exceptional:**
- Part of the 2026 Awwwards Studio nominee cohort
- French/European design sensibility
- Listed alongside top-tier studios

---

### 11. Studio Modular
**URL:** Listed on Awwwards (Studio nominees, 2026)  
**Style:** Modular Design System

**What makes it exceptional:**
- Name implies modular approach — likely uses component-based bento/modular grid
- Awwwards nominee in Studio category

---

### 12. Demande Spéciale
**URL:** Listed on Awwwards (Studio nominees, 2026)  
**Style:** French Creative Studio

**What makes it exceptional:**
- Part of the 2026 Awwwards Studio nominees
- French design studio aesthetic

---

## Pattern Analysis: What's Working in 2026

### The Dark Mode Spectrum
| Style | Hex | Who Uses It |
|-------|-----|-------------|
| Pure Black | #000000 | Revelatio, Obys, Cinética, Silent Partners |
| Near-Black | #121212 | Ferr Studio, YUNGBLD |
| Dark Charcoal | #1a1a1a | Premium/luxury variants |
| Deep Navy-Black | #0a0a14 | Sites wanting subtle blue undertone |

### Typography Trends
1. **Massive Sans-Serif Headlines** — Inter/Helvetica/DM Sans at 80-120px on hero
2. **Glyph/Glitch Typography** — Unicode symbols interspersed with text (Revelatio, Cinética)
3. **Spaced-Out Minimal** — letter-spacing: 0.2-0.5em for headings (YUNGBLD)
4. **Mono/Code Aesthetic** — Monospace for data, labels, counters
5. **Outline/Stroke Text** — Used for secondary headings on dark backgrounds

### Bento-Grid Patterns
1. **Mixed-Size Cards** — 1x1, 2x1, 2x2, 1x2 tiles in CSS Grid
2. **Image-First Cards** — Title/description minimal, image does the work
3. **Metric Bento** — Numbers/stats in card grid (Revelatio's results section)
4. **Client Logo Bento** — Brand logos in uniform or mixed-size grid
5. **Project Bento** — Portfolio items in asymmetric grid with hover reveals

### Brutalist Elements That Survived into 2026
1. **Visible Borders** — 1px white/light borders on dark backgrounds
2. **Raw Typography** — No text-shadow, no gradient text, just flat color
3. **Grid Lines Visible** — CSS grid gaps shown as actual lines
4. **Monospace Counters** — Tabular numbers, odometer-style
5. **"Unstyled" Interactive States** — Simple color inversion on hover, no transitions
6. **File-Name Aesthetics** — Using raw filenames as titles (YUNGBLD)

---

## What Divi 5 Can Replicate (Without Custom Code)

| Element | Divi 5 Approach |
|---------|----------------|
| Dark background (#000000, #121212) | Theme Customizer → Background Color |
| Pill-shaped navigation | Custom CSS class on Menu module |
| Bento-grid portfolio | CSS Grid on Gallery/Portfolio module |
| Edge/frame layout | Custom padding/margins + absolute positioning |
| Glitch/glyph typography | Unicode in Text modules + CSS text effects |
| Client logo grid | Image module grid |
| Stat/metric cards | Blurb/Number Counter modules in grid |
| Spaced typography | Letter-spacing in Design tab |
| Cookie consent bar | Divi Code module or plugin |
| Contact modal | Divi Popup builder |

## What Needs Custom Code (JS/CSS/WebGL)

| Element | Technology Required |
|---------|-------------------|
| Odometer counters | JS animation library (odometer.js) |
| Horizontal scroll bands | CSS overflow-x + JS scroll handling |
| 3D product viewers | Three.js / WebGL |
| CRT/ASCII art | Canvas API or pre-rendered asset |
| Cinematic particle backgrounds | Three.js / p5.js / video |
| Glitch transitions | CSS clip-path + JS animation |
| Multi-speed parallax | JS scroll-triggered transforms |
| Custom cursors | CSS cursor + JS tracking |
| Audio integration | Web Audio API or simple HTML5 audio |

---

## Recommended Approach for DigitalStudioz

Based on this research + the locked Warm Premium system:

1. **Foundation:** Void `#0a0a0b` / canvas `#111113` / surface `#18181b` (not pure cyan-brutalist #121212 systems)
2. **Accent:** Muted gold `#c8a45c` (never acid cyan `#00ffcc`)
3. **Typography:** Ultra-light display + JetBrains Mono labels; warm cream secondary text
4. **Layout:** Asymmetric bento Work grid + Services cards — match current Next.js showcase
5. **Hero:** Full-viewport atmospheric + gold headline + "Think Big. Build Bold."
6. **Radius / glass:** 8px / 16px · glass-card · gold-tinted borders & shadows
7. **Motion:** FadeUp / CSS-driven — keep Phase 1–3 free of heavy WebGL unless later approved
8. **Primary reference:** Live temp site + `nextjs-warm-premium-temp-reference-2026-07-17` backup — not Awwwards cyan brutalism clones

---

*Research compiled from live site visits, Awwwards nominee listings, SiteInspire, and design trend analysis. URLs verified July 17, 2026.*


---

## 18. 🔧 JULY 2026 TOOL DISCOVERY

# WordPress + Divi 5 + AI Development Tools — July 2026 Discovery Report

**Date:** July 17, 2026  
**Scope:** New tools, MCP servers, plugins, and workflows released in the last 30 days  
**Sources searched:** GitHub API (created:>2026-06-17), WordPress.org Plugin Repository API, web browsers

---

## 🔥 TIER 1 — MUST-KNOW (Directly relevant to Divi 5 + AI development)

### 1. wpmcp (GitHub: wpmcp/wpmcp) ⭐1 | PHP
- **"AI builds your site and physically CAN'T wreck it"**
- MCP server for WordPress with snapshot-before-every-write and one-click rollback
- **Builder-agnostic safety** — snapshots at WordPress data layer, so rollback works for ANY page builder including Divi
- Runs as a single WordPress plugin, no separate local proxy process
- Free, open source (GPL-2.0), PHP >= 8.1, WP >= 6.9
- **Key differentiator**: The safety engine is enforced in code, not by convention
- URL: https://github.com/wpmcp/wpmcp

### 2. MGD_Divi5-Dev_SKILL (GitHub: MichaelGahnDESIGN/MGD_Divi5-Dev_SKILL) ⭐0
- **German-language skill for Claude Code & ChatGPT Codex for Divi 5 development**
- 18 specialized slash commands:
  - `/divi-install`, `/divi-install-docker` — local dev environment setup
  - `/divi-childtheme` — child theme with correct structure, local fonts, enqueue
  - `/divi-module` — **native Divi 5 custom module creation (React/TSX + PHP Traits)**
  - `/divi-design-system` — design variables, fluid typography with clamp(), presets
  - `/divi-animations` — animation libraries, scroll effects, Three.js
  - `/divi-plugin` — new WordPress plugin for Divi
  - `/divi-theme-builder` — headers, footers, templates
  - `/divi-ai` — Divi AI workflow, limits, DSGVO compliance
  - `/divi-deploy`, `/divi-debug`, `/divi-release`, `/divi-optimize`
- Enforces: local fonts/assets, DSGVO compliance, commercial-use-friendly libraries
- URL: https://github.com/MichaelGahnDESIGN/MGD_Divi5-Dev_SKILL

### 3. Squad Modules Lite – Free Divi 5 & Divi 4 Modules (WP Plugin) | v4.4.1 | 1,000+ active
- **65 free Divi modules + 8 extensions — largest free Divi library**
- Native in Divi 5 Visual Builder AND Divi 4 — "nothing to migrate"
- Updated: July 14, 2026
- URL: https://wordpress.org/plugins/squad-modules-lite/

### 4. JHMG Converter For Elementor to Divi 5 (WP Plugin) | v2.1.0 | 100+ active
- **Migrate Elementor pages and templates to Divi 5**
- Unlimited single-page JSON imports for free
- Pro add-on: kit imports, global headers, footer
- Updated: July 12, 2026
- URL: https://wordpress.org/plugins/jhmg-converter-for-elementor-to-divi-5/

---

## ⭐ TIER 2 — HIGHLY RELEVANT (WordPress MCP servers & AI integrations)

### 5. wpguard-mcp (GitHub: cgallic/wpguard-mcp) ⭐0 | Python
- **Closed-by-default MCP server** — named verbs are the front door, raw eval is a gated escape hatch
- Three-tier access: recon (read-only) → guarded named verbs → raw eval
- Dry-runs by default, backup before writes, change-approval gates
- **Architecturally different from most WordPress MCPs** (which put raw PHP at front door)
- URL: https://github.com/cgallic/wpguard-mcp

### 6. Agent2Wp (GitHub: Marksab001/Agent2Wp) ⭐0 | PHP
- Connect AI agents to WordPress via MCP — execute PHP, manage files, control WP-CLI directly
- Supports: Post management, File access, Elementor support, WP-CLI integration, WooCommerce
- Works with Claude Desktop and Cursor
- URL: https://github.com/Marksab001/Agent2Wp

### 7. mcp-wp-cli-terminus (GitHub: EarthmanWeb/mcp-wp-cli-terminus) ⭐0 | Python
- WP-CLI over local Docker, Pantheon Terminus, or SSH
- **Byte-faithfully copies posts/meta between environments with checksum verification**
- Solves known WP-CLI bugs (newline truncation, STDIN hangs on Terminus, MAX_ARG_STRLEN)
- URL: https://github.com/EarthmanWeb/mcp-wp-cli-terminus

### 8. wp-blockmarkup-mcp-server (GitHub: zaherg/wp-blockmarkup-mcp-server) ⭐1 | JavaScript
- Extract, validate, and index every Gutenberg block from real source code
- Docker deployment, authenticated HTTP mode, persistent SQLite storage
- Forked from pluginslab/wp-blockmarkup-mcp (upstream v1.1.1, May 2026)
- Prevents AI from guessing Gutenberg markup — uses real block schemas
- URL: https://github.com/zaherg/wp-blockmarkup-mcp-server

### 9. acf-mcp-server (GitHub: symonbaikov/acf-mcp-server) ⭐1 | TypeScript
- **MCP server for safely managing WordPress ACF Pro Local JSON**
- TypeScript, Zod, Vitest, `@modelcontextprotocol/sdk`
- JSON-first ACF Local JSON repository, no direct SQL/arbitrary PHP
- dryRun support, automatic backups, WP-CLI sync tools
- ACF 6.8 runtime-readiness audits, Schema.org mapping audits
- URL: https://github.com/symonbaikov/acf-mcp-server

### 10. WP-MCP-Plugin (GitHub: iamdenzen/WP-MCP-Plugin) ⭐2 | PHP
- Turn any WordPress website into a secure MCP server
- OAuth 2.1, fine-grained scopes, ACF support, WooCommerce, custom post types
- Production-ready, extensible tool registry
- URL: https://github.com/iamdenzen/WP-MCP-Plugin

### 11. F.R.I.D.A.Y MCP (GitHub: barumoot/friday-mcp) ⭐0
- **Block-editor-focused MCP server** — block-level editing vs full-post replacement
- Real-time sync with open Gutenberg editor (undo/redo, snapshot + block refs)
- Japanese-origin, supports ~40 tools, FileBird folder management
- Multi-site, SWELL theme blog parts support
- URL: https://github.com/barumoot/friday-mcp

### 12. F.R.I.D.A.Y MCP (GitHub: barumoot/friday-mcp) ⭐0
- WordPress MCP server + editor plugin for Claude Code
- URL: https://github.com/barumoot/friday-mcp

---

## 🔧 TIER 3 — NOTABLE PLUGINS & TOOLS

### WordPress MCP Plugins (WP.org — all updated July 2026)

| Plugin | Active Installs | Key Feature |
|--------|----------------|-------------|
| **AI Engine** (v3.6.2) | 100,000+ | Chatbot, AI Framework & MCP for WordPress |
| **Royal MCP** (v1.4.35) | 8,000+ | Security-first MCP; Elementor tools, OAuth, rate limiting |
| **Easy MCP AI** (v1.7.9) | 4,000+ | 242 tools, GA4, Search Console, SEO |
| **WPVibe MCP** (v1.9.1) | 4,000+ | Theme editing, content management via AI |
| **StifLi Flex MCP** (v3.3.13) | 1,000+ | MCP server with Undo, AI Copilot & Chat Agent |
| **Enable Abilities for MCP** (v2.0.18) | 1,000+ | Manage which WordPress Abilities are exposed to MCP |
| **WSP MCP** (v2.6.1) | 200+ | Built-in MCP server, no companion plugin needed |
| **WEBO MCP** (v2.6.16) | 30+ | JSON-RPC tools over REST, n8n support |
| **IATO MCP** (v1.11.0) | 100+ | AI agents audit/fix sites in single workflow |

### Divi 5 Module Plugins (WP.org — Updated July 2026)

| Plugin | Active Installs | Key Feature |
|--------|----------------|-------------|
| **Divi Torque Lite** (v4.8.2) | 50,000+ | 25+ free Divi modules |
| **Squad Modules Lite** (v4.4.1) | 1,000+ | 65 free Divi 5 modules, largest free library |
| **Divi Carousel Lite** (v2.0.1) | 6,000+ | Responsive carousel & slider modules |
| **Timeline Module for Divi** (v1.2.4) | 3,000+ | Timeline/history module |
| **Events Calendar Modules for Divi** (v1.1.9) | 2,000+ | The Events Calendar integration |
| **JHMG Converter Elementor → Divi 5** (v2.1.0) | 100+ | Elementor to Divi 5 migration |

### AI-Enabled Plugins Worth Noting

| Plugin | Active Installs | Why Notable |
|--------|----------------|-------------|
| **Desktop Mode** (v0.9.5) | 2,000+ | **By Automattic** — turns wp-admin into desktop OS with AI assistant |
| **MxChat** (v3.2.13) | 2,000+ | Train ChatGPT/Claude/Gemini/Grok on your content |
| **AI Share & Summarize** (v2.2.2) | 1,000+ | WP 7.0 AI Connectors — inline AI summary + sharing |
| **SEO Booster** (v7.3.2) | 1,000+ | AI via WordPress 7 Connectors |
| **YLabs Connector for WPWriter** (v1.12.0) | 1,000+ | AI blog posts/pages with OpenAI/Claude/Gemini |

---

## 🏗️ LOCALWP ALTERNATIVES & ENVIRONMENT TOOLS

### EnvKit (GitHub: Env-Kit/envkit-releases) ⭐429 | Windows & macOS
- **Free Laragon/XAMPP/Herd alternative** — desktop tray app
- nginx OR Apache, multiple PHP versions, MySQL/MariaDB, PostgreSQL, Redis, MongoDB, Mailpit, Node.js, Python
- **Built-in MCP server** for AI assistants (Claude Code/Desktop, Cursor, Windsurf, VS Code, Zed, OpenCode, Gemini CLI, PhpStorm)
- Trusted `.test` HTTPS, PATH sync, per-project Git panel
- v0.32.0-beta.8: PhpStorm/Junie AI support, community fixes
- URL: https://github.com/Env-Kit/envkit-releases

### sysblok-mcp-bundle (GitHub: sysblok/sysblok-mcp-bundle) ⭐0 | Shell
- Local MCP servers (WordPress, Planka, Google Docs/Sheets/Drive) bundled for agent-driven setup
- Minimal-prerequisite approach
- URL: https://github.com/sysblok/sysblok-mcp-bundle

---

## 🔒 AI SAFETY & GOVERNANCE TOOLS

### Reeflex (GitHub: Reeflex-io/reeflex) ⭐0 | Python
- **"Seatbelt for AI acting on your systems"** — deterministic, open-source governance gate
- Also available as n8n node: reeflex/n8n-nodes-reeflex
- URL: https://github.com/Reeflex-io/reeflex

### agent-safety (GitHub: stephen1204paul/agent-safety) ⭐0 | PHP
- Capability-scoped permission gates, human approval flow, tamper-evident audit logging
- For AI agents on WordPress (MCP context)
- URL: https://github.com/stephen1204paul/agent-safety

---

## 🌐 AI-READY WORDPRESS ECOSYSTEM

### GEO Forge (GitHub: leonardozhe/geo-forge) ⭐0 | PHP
- Transforms WooCommerce stores from AI-blind to Agent-Ready
- Implements: llms.txt, MCP, A2A (Agent-to-Agent), structured data, markdown negotiation
- URL: https://github.com/leonardozhe/geo-forge

### wpagent (GitHub: lucasartel/wpagent) ⭐0 | PHP
- WordPress AI agents plugin with local knowledge, user memory, WordPress AI Connectors, OpenRouter fallback
- URL: https://github.com/lucasartel/wpagent

### x402-wordpress (GitHub: RegardV/x402-wordpress) ⭐0 | PHP
- Sell files, endpoints, and answers to AI agents for USDC over x402 protocol
- Self-custodial WordPress plugin, 0% fees
- URL: https://github.com/RegardV/x402-wordpress

---

## 📋 RECOMMENDATIONS FOR JonBeatz WORKSPACE

### Immediate Wins:
1. **Install wpmcp** — safety-first AI editing for any WordPress site (Divi-compatible by design)
2. **Adopt MGD_Divi5-Dev_SKILL** — the `/divi-module` command for native Divi 5 React/TSX module creation is gold
3. **Evaluate EnvKit** — far better than LocalWP if you want AI-driven local dev (built-in MCP)
4. **Evaluate acf-mcp-server** — if using ACF Pro, this gives AI-safe field group management via Local JSON

### Worth Watching:
- **wpguard-mcp** — if you want closed-by-default safety (named verbs only, no raw PHP by default)
- **wp-blockmarkup-mcp-server** — for block schema validation (not Divi-specific but useful for hybrid sites)
- **JHMG Converter** — Elementor → Divi 5 migration tool (low installs but actively maintained)

### Ecosystem Trend:
The WordPress ecosystem is rapidly adopting MCP — there are now **12+ WordPress MCP plugins** on the official repository, most updated within the last 2 weeks. The Divi 5 ecosystem has strong third-party module support (Squad Modules: 65 free modules, Divi Torque: 50K+ installs). The **safety-first** pattern (wpmcp, wpguard-mcp, agent-safety) is emerging as a differentiator in the MCP space.


---

## 19. 📄 PDF GENERATION SETUP

### Local PDF (Offline)
```python
# xhtml2pdf — pure Python, no GTK, no Docker
import markdown
from xhtml2pdf import pisa
html = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
pisa.CreatePDF(html, dest=output_path)
```
**Installed:** xhtml2pdf 0.2.17 in Hermes venv. Works offline. 0 dependencies.

### Cloud PDF (Online)
Google Docs API: markdown → Google Doc → export as PDF.
Authenticated via google_token.json in Hermes profile.

---

## 20. 📊 AI MODEL COMPARISON MATRIX

| Model | LiveCodeBench | SWE-bench Pro | Cost/M Out | Context | Best For |
|-------|--------------|--------------|------------|---------|----------|
| Cursor Composer 2.5 | Not public | Not public | Included | — | Tab complete, inline |
| Grok 4.5 | New (no data) | ~16K tok/task | $3/M (promo) | — | Multi-file architecture |
| DeepSeek V4 Pro | #1 | Strong | $0.87/M | 1M | Pure coding |
| GLM 5.2 | Strong | #1 | $4.40/M | 1M | Whole-repo refactoring |
| Kimi K3 | Competitive | New | $15/M out | 1M | Vision-in-the-loop |

### Priority: 60% Composer → 25% Grok → 10% DeepSeek → 5% GLM

---

## 21. 💰 COST ESTIMATE

| Item | Cost |
|------|------|
| ACF PRO (annual) | ~$49/yr |
| Divi 5 Theme | Included in Elegant Themes |
| Hostinger Hosting | ~$5-10/mo |
| Brevo SMTP | Free tier |
| All MCP plugins | FREE |
| Grok 4.5 (promo until Jul 21) | $1/M in / $3/M out |
| DeepSeek V4 Pro | ~$0.87/M output |
| Total estimated monthly | ~$15-25 |

---

## 22. TIMELINE

| Phase | Task | Est. Time |
|-------|------|-----------|
| 1 | LocalWP setup + plugin install | 30 min |
| 2 | ACF schema + CPT registration | 1-2 hrs |
| 3 | Design system + first page build | 2-3 hrs |
| 4 | Full site build (all pages) | 4-6 hrs |
| 5 | Responsive polish + testing | 1-2 hrs |
| 6 | Deploy to Hostinger | 30 min |
| **Total** | | **10-14 hours** |

---

*MASTER COMPLETE · July 17, 2026*
*Sources: Original PRD v1 + Hermes MCP Research + 11 YouTube Videos + Full Gemini Conversation + Awwwards Studio Analysis + July 2026 GitHub Discovery + Cursor Pricing Research*
