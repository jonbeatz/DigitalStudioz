# 🔌 Custom WordPress Plugin + Divi 5 Module Development Playbook
### Complete Best Practices, Tools & Workflows
**Version:** 1.0 · July 17, 2026

> **What This Is:** Everything you need to build professional WordPress plugins and Divi 5 custom modules. Official docs, boilerplates, security standards, testing frameworks, CI/CD, deployment — all in one place.

---

## Part 1: WordPress Plugin Development

### Official Documentation
| Resource | URL |
|---|---|
| Plugin Developer Handbook | https://developer.wordpress.org/plugins/ |
| Security Handbook | https://developer.wordpress.org/apis/security/ |
| Coding Standards | https://developer.wordpress.org/coding-standards/ |
| Block Editor Handbook | https://developer.wordpress.org/block-editor/ |
| REST API Handbook | https://developer.wordpress.org/rest-api/ |

**Pro tip:** Append `?output_format=md` to any wordpress.org page for LLM-friendly Markdown.

### Best Boilerplate: DevinVinson/WordPress-Plugin-Boilerplate (7.8K ⭐)
The gold standard. Clean OOP architecture with admin/public separation, activator/deactivator hooks, i18n support.

```
plugin-name/
├── plugin-name.php              # Main file
├── admin/                       # Admin hooks
├── includes/                    # Core logic
├── public/                      # Frontend hooks
└── languages/                   # Translations
```

### Security: 5 Guiding Principles
1. Never trust user input
2. Escape as late as possible
3. Escape everything from untrusted sources
4. Never assume anything
5. Validation/rejection > sanitization

**Every PHP file must start with:** `defined('ABSPATH') || exit;`

**Key functions:** `current_user_can()`, `wp_nonce_field()`, `sanitize_email()`, `esc_html()`, `esc_url()`, `wp_kses_post()`, `$wpdb->prepare()`

### Modern PHP Standards
- PSR-4 autoloading via Composer
- PHP 7.4 minimum (WP 7.0 requirement)
- Namespaces: `MyPlugin\Admin\ClassName`
- WPCS via PHP_CodeSniffer: `vendor/bin/phpcs --standard=WordPress`

### Testing
- **PHPUnit:** `wp scaffold plugin-tests` → `vendor/bin/phpunit`
- **wp-env:** `npm install -g @wordpress/env` → `wp-env start`
- **WordPress Playground:** [wordpress.org/playground](https://wordpress.org/playground) — WebAssembly, no install needed

### CI/CD
- **GitHub Actions:** Test matrix (PHP 7.4 + 8.2 × WP 6.5 + latest)
- **SVN Deploy:** [10up/action-wordpress-plugin-deploy](https://github.com/10up/action-wordpress-plugin-deploy) (655 ⭐)
- **Build:** `wp dist-archive ./ my-plugin.zip`

---

## Part 2: Divi 5 Custom Module Development

### Key Architecture Change
Divi 5 is a **full React rewrite**. Divi 4 shortcodes → React components + JSON blocks. `create-divi-extension` is **deprecated**.

### Best Resources
| Resource | Type |
|---|---|
| [16wells.github.io/divi-docs](https://16wells.github.io/divi-docs/) | LLM-friendly, exhaustive API/module docs |
| [divilovewp/divi5-skill](https://github.com/divilovewp/divi5-skill) | 15 `.md` skill files for JSON-native generation |
| [oaris-dev/diviops](https://github.com/oaris-dev/diviops) | MCP server + WP plugin for Divi 5 |
| Squad Modules Lite | 65+ free Divi 5 modules — best reference implementation |
| [cjsimon2/Divi5-ToolKit](https://github.com/cjsimon2/Divi5-ToolKit) | CSS generation, WCAG, CWV |

### Divi 5 Module Registration (Conceptual)
```javascript
registerModule({
    name: 'my-custom-module',
    title: 'My Custom Module',
    attributes: {
        title: { type: 'string', default: 'Hello' },
        color: { type: 'string', default: '#000' }
    },
    render: ({ attributes }) => (
        <div style={{ color: attributes.color }}>
            <h2>{attributes.title}</h2>
        </div>
    )
});
```

### ACF + Divi 5
- ACF PRO required for Repeater, Flexible Content, ACF Blocks
- [acf-mcp-server](https://github.com/symonbaikov/acf-mcp-server) for JSON-first field group management
- Divi 5 Dynamic Content pulls ACF values → Loop Builder displays repeater data

---

## Part 3: Development Environment

| Tool | Best For |
|---|---|
| **LocalWP** | Quick WP sites, non-technical use |
| **EnvKit** (429 ⭐) | AI-driven dev, built-in MCP server |
| **wp-env** | Plugin/theme dev, automated testing |
| **WordPress Playground** | Instant testing, zero install |

### IDE Setup
- **Cursor:** Composer 2.5 (60%), Grok 4.5 (25%), DeepSeek V4 (10%), GLM 5.2 (5%)
- **VS Code:** PHP Intelephense, WP Snippets, Xdebug, PHPCS

---

## Quick-Start: New Plugin From Scratch

```bash
wp scaffold plugin my-plugin
composer init --name="jonbeatz/my-plugin" --type="wordpress-plugin"
composer require --dev wp-coding-standards/wpcs phpunit/phpunit
wp scaffold plugin-tests my-plugin
wp-env start
vendor/bin/phpcs --standard=WordPress .
vendor/bin/phpunit
composer install --no-dev --optimize-autoloader
wp dist-archive ./ my-plugin.zip
```

---

*Plugin & Module Dev Playbook v1.0 · July 17, 2026*
*Sources: Official WP docs, GitHub repos (7.8K+ ⭐), Divi 5 community resources, 10up CI/CD tools*
