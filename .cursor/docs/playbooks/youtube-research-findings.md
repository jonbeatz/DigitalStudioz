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
