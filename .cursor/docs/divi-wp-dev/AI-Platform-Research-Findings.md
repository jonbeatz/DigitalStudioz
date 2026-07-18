# 🧠 AI Platform Research — Key Lessons for DigitalStudioz
### What We Can Learn From Marblism, Sintra, Arahi, Lindy, Agently & WordPress MCP
**Date:** July 17, 2026

---

## Top 8 Actionable Additions

### 1. Natural-Language-to-Divi Pipeline 🏆
**Inspired by:** Arahi.ai's plain-English automation builder

User says: "Create a services page with hero, 3 service cards, testimonials, and contact CTA"
→ Hermes → IA Webmaster Bridge MCP (105 Divi 5 modules) → Page built with design tokens applied

### 2. DigitalStudioz AI Team Personas
**Inspired by:** Marblism's named AI employees (Eva, Sonny, Stan, Penny, Rachel, Linda)

Five AI agents for the website:
- **Dex** (Design) — Builds Divi 5 pages, applies brand, keeps responsive
- **Sage** (SEO) — Audits site, fixes meta, tracks rankings
- **Pen** (Content) — Writes posts, updates stale content
- **Dash** (Performance) — Monitors Core Web Vitals
- **Vault** (DevOps) — Handles deployments and backups

### 3. SKILL.md Pack for Divi 5
**Inspired by:** Agently.now's skill-as-markdown (82 built-in skills)

Pre-built skill files:
- `divi-landing-page.skill.md`
- `divi-seo-audit.skill.md`
- `divi-design-system.skill.md`
- `divi-deploy.skill.md`
- `divi-performance.skill.md`

### 4. Human-in-the-Loop Approval Gates
**Inspired by:** Arahi.ai + wpmcp snapshot-before-write

Before any production write: snapshot → diff → approval → apply

### 5. Site Brain (Per-Client Knowledge Base)
**Inspired by:** Agently.dev's Company Brain concept

YAML file per client with brand tokens, site structure, SEO data, performance history

### 6. Multi-Site Management
**Inspired by:** TheGuideX's 46-tool MCP architecture

Single `sites.json` managing all client sites with application passwords

### 7. Tiered Service Packaging
**Inspired by:** Sintra.ai à la carte + Arahi credit-based pricing

Starter (Content+SEO) → Pro (+Design+Performance) → Agency (+DevOps+Dashboard)

### 8. Weekly Site Health Briefing
**Inspired by:** Lindy.ai's proactive anticipatory briefing

Weekly cron → audit → Telegram/email report with performance, SEO, security, content gaps

---

## Platform Comparison: Our Stack vs. The Market

| Feature | Market Price | Our Stack | 
|---|---|---|
| Marblism AI employees | $97/mo | Hermes + MCP (free) |
| Sintra individual helpers | $39/mo each | Hermes personas (free) |
| Arahi natural-language automation | $49-349/mo | English-to-Divi pipeline (free) |
| Lindy executive assistant | $50-60/mo | Hermes + Telegram (free) |
| Agently.now skill platform | $15/mo or $349 lifetime | Hermes skills (free) |
| Agently.dev Work OS | $69/mo | Hermes + n8n (free) |

**Combined market value of features we can replicate: $320-630/month. Our cost: $0.**

---

## WordPress MCP Ecosystem Status (July 2026)

- WP 6.9: Abilities API (PHP)
- WP 7.0: JS layer + AI Client in core
- Official `wordpress/mcp-adapter` v0.5.0
- 20+ WordPress MCP servers, 12+ WP.org MCP plugins
- WooCommerce MCP in production use (validated)
- WordPress Playground MCP for zero-install demos
- IA Webmaster Bridge: 108 tools, 105 Divi 5 modules (free, GPL-3.0)
- Divi 5 could register modules as Abilities → future opportunity

---

## What We're Already Doing Right

Our stack already matches or beats every paid platform in capability:
- Hermes = Lindy's assistant + Agently's skill engine + Arahi's natural-language interface
- n8n = Arahi's automation builder (self-hosted and free)
- MCP adapter + IAWB = Marblism's AI employees (but for Divi 5 specifically)
- LiteLLM gateway = Agently's multi-model switching
- Telegram gateway = Lindy's iMessage/SMS interface

**The gap isn't capability — it's packaging.** These platforms wrap powerful AI into simple UX. We have the power; now we need the personas, skill packs, and approval gates that make it accessible.
