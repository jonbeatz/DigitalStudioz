# 🤖 AI Blog Automation — Complete Playbook
### On-Demand & Scheduled AI Blog Post Creation for WordPress
**Version:** 1.0 · July 17, 2026
**Part of:** DigitalStudioz Project Toolkit

> **What This Is:** The complete guide to building an AI agent that can write blog posts, generate matching images, upload everything to WordPress, and do it on demand or on a schedule — all for free using the tools you already have.

---

## 🏆 Recommended Approach: Easy MCP AI + Hermes

**Why this wins:**
- Free. No paid plugins.
- Hermes already has AI + image generation (FAL.ai) + MCP support
- Natural language — just tell Hermes what you want
- Works on both local dev and live Hostinger
- Same stack you're already using for the Divi 5 build

---

## Step-by-Step Setup

### 1. Install Easy MCP AI on WordPress

**Plugin:** [Easy MCP AI](https://wordpress.org/plugins/easy-mcp-ai/) — 4,000+ active installs, 5.0 rating, 242 tools, 100% free.

```bash
# Via WP Admin: Plugins → Add New → Search "Easy MCP AI" → Install → Activate
# OR via WP-CLI:
wp plugin install easy-mcp-ai --activate
```

### 2. Generate API Key

1. WordPress Admin → Tools → Easy MCP
2. Click "Generate API Key"
3. Copy the MCP config snippet

### 3. Add to Hermes MCP Config

Add to your `.cursor/mcp.json` or Hermes MCP config:
```json
{
  "mcpServers": {
    "wordpress-blog": {
      "url": "https://your-site.com/wp-json/easy-mcp/v1",
      "headers": {
        "X-API-Key": "your-generated-key"
      }
    }
  }
}
```

### 4. That's It — Start Posting

---

## Usage: On-Demand Blog Posts

### Basic Post
> "Write a blog post about AI automation trends for 2026. Publish it to WordPress with category 'AI' and tags 'automation, 2026 trends'."

### Post With Featured Image
> "Write a blog post about the future of web design. Generate a featured image with FAL.ai showing a futuristic dark-mode website interface in Warm Premium style (#0a0a0b void, #c8a45c muted gold accents, soft glass cards). Upload the image as featured media and create the post with SEO meta description."

### Full Production Post
> "Create a complete WordPress blog post about [topic].
> - Title: SEO-optimized, under 60 characters
> - Content: 800-1200 words with H2 subheadings, bullet points
> - Featured image: Generate via FAL.ai at 1200×630px, matching the topic
> - Excerpt: 2-3 sentence compelling summary
> - Meta description: SEO-optimized, under 160 characters
> - Categories: [relevant categories]
> - Tags: 5-7 relevant tags
> - Schedule for: publish now / draft for review / schedule for [date]"

---

## Usage: Scheduled Automation

### Option A: Hermes Cron (Simplest)

```bash
# Set up a daily blog post cron in Hermes
hermes cron create \
  --name "Daily Blog Post" \
  --schedule "0 9 * * *" \
  --prompt "Write a WordPress blog post about a trending topic in web development or AI. Generate a FAL.ai featured image, upload both via Easy MCP to my WordPress site. Category: 'Tech'. Tags: auto-generate 5 relevant tags. Meta description included. Save as draft for my review."
```

### Option B: n8n Workflow (Most Powerful)

1. **Trigger:** Schedule node (e.g., every Monday at 8 AM)
2. **AI Agent node:** Generate blog post content + metadata
3. **HTTP Request → FAL.ai:** Generate featured image
4. **HTTP Request → WordPress REST API:** Upload image to media library
5. **WordPress node:** Create post with content + featured image + categories
6. *(Optional)* **Telegram/Slack node:** Notify you that a new draft is ready

### Option C: Python Script + System Cron (DIY)

```python
#!/usr/bin/env python3
"""Generate and post an AI blog article to WordPress."""
import requests, json, os

WP_URL = "https://your-site.com"
WP_USER = "your-username"
WP_PASS = "your-application-password"
FAL_KEY = os.environ["FAL_API_KEY"]

# 1. Generate content via your AI of choice (Hermes can drive this)
# 2. Generate image via FAL.ai
img_resp = requests.post(
    "https://fal.run/fal-ai/flux/dev",
    headers={"Authorization": f"Key {FAL_KEY}"},
    json={"prompt": "A professional blog header image about AI automation"}
)
image_url = img_resp.json()["images"][0]["url"]

# 3. Upload image to WordPress media library
img_data = requests.get(image_url).content
media_resp = requests.post(
    f"{WP_URL}/wp-json/wp/v2/media",
    headers={"Content-Disposition": "attachment; filename=featured.jpg"},
    data=img_data,
    auth=(WP_USER, WP_PASS)
)
media_id = media_resp.json()["id"]

# 4. Create post
post_data = {
    "title": "AI-Generated Blog Post Title",
    "content": "<!-- wp:paragraph --><p>Full blog content here...</p><!-- /wp:paragraph -->",
    "status": "draft",  # or "publish"
    "categories": [5],  # category IDs
    "tags": [12, 15],   # tag IDs
    "featured_media": media_id,
    "excerpt": "Compelling excerpt...",
    "meta": {"_yoast_wpseo_metadesc": "SEO meta description..."}
}
post_resp = requests.post(
    f"{WP_URL}/wp-json/wp/v2/posts",
    json=post_data,
    auth=(WP_USER, WP_PASS)
)
print(f"Post created: {post_resp.json()['link']}")
```

---

## Image Generation Specs

### FAL.ai Prompt Template for Blog Headers
```
Professional blog header image for an article about [TOPIC]. 
Style: Warm Premium — modern, clean, dark luxury aesthetic. 
Background: #0a0a0b void with subtle warm geometric patterns. 
Accent color: #c8a45c muted gold glow (never cyan). 
Composition: Centered, plenty of negative space for text overlay. 
Resolution: 1200×630px (optimized for social sharing). 
No text in the image — text will be overlaid by the theme.
```

### WordPress Image Sizes (Auto-Generated)
| Size | Dimensions | Usage |
|------|-----------|-------|
| Thumbnail | 150×150 | Archive listings |
| Medium | 300×300 | Blog grid |
| Large | 1024×1024 | Lightbox |
| Full | Original | Social sharing (1200×630) |

---

## WordPress REST API Quick Reference

### Authentication
```bash
# Create Application Password: WP Admin → Users → Edit User → Application Passwords
# Use with Basic Auth: username:application_password
```

### Endpoints
```bash
# Create post
curl -X POST "https://site.com/wp-json/wp/v2/posts" \
  -u "user:app-password" \
  -H "Content-Type: application/json" \
  -d '{"title":"Post Title","content":"Content","status":"draft"}'

# Upload media
curl -X POST "https://site.com/wp-json/wp/v2/media" \
  -u "user:app-password" \
  -F "file=@image.jpg"

# Get categories
curl "https://site.com/wp-json/wp/v2/categories"

# Get tags
curl "https://site.com/wp-json/wp/v2/tags"
```

---

## Free Tools vs Paid

| Tool | Free | Paid | Verdict |
|------|------|------|---------|
| **Easy MCP AI** | ✅ 242 tools | None | Use this |
| **WP MCP Ultimate** | ✅ 58 tools | None | Backup option |
| **AI Engine** | ✅ Core features | Pro for advanced | 100K+ installs |
| **n8n** | ✅ Self-hosted | Cloud ($20/mo) | For scheduling |
| **WP REST API** | ✅ Built-in | None | Most flexible |
| **FAL.ai** | ✅ Your existing credits | Pay-per-use | Already have it |
| **WP 7.0 AI Client** | ✅ In core | None | Foundation layer |

### Additional Standout Plugins (Client-Facing)

| Plugin | Installs | Best Feature | Cost |
|--------|----------|-------------|------|
| **AI Puffer** | 30,000+ | Automation engine: scheduled tasks, voice agents, WooCommerce AI credits | Free + Pro |
| **AI Bud** | 10,000+ | Model fine-tuning + bulk title→content | Free + Pro |
| **Dominopost** | New | Full article structure: auto ToC, CTAs, key takeaways, keyword clustering | Free tier |

**Total cost to implement: $0** — you already have all the pieces.

---

## Quick-Start: Test It Now

```bash
# 1. Install Easy MCP AI on your LocalWP dev site
# 2. Generate API key
# 3. Tell Hermes:
"Connect to my WordPress site using Easy MCP at [URL] with key [KEY]. 
Write a test blog post titled 'Hello World — AI Edition' with a short paragraph 
about AI-assisted blogging. Generate a simple featured image with FAL.ai. 
Save as draft on my WordPress site."
```

---

*AI Blog Automation Playbook v1.0 · July 17, 2026*
*Research: 10 approaches tested, 30+ repos analyzed, 8 plugins compared*
