# DigitalStudioz — Warm Premium Redesign Plan

> **COMPLETED 2026-07-03.** Warm Premium palette and 8-scene layout shipped.
> **Layout lock (authoritative):** `engine.tsx` uses inline `const S` object — **not** Tailwind layout classes. See `.cursor/skills/digitalstudioz-layout/SKILL.md` v2.0.0. This plan's Tailwind layout notes are **historical only**.

> **Date:** 2026-07-03
> **Taste:** Warm Premium — deep charcoal, warm cream, muted gold (#c8a45c)
> **Layout:** SpaceX-style full-viewport scenes × asymmetric bento grids
> **Status:** Ready to execute

---

## 1. New Color Palette (Locked)

### Backgrounds (Luminance Stacking — Linear method)
| Token | Value |
|-------|-------|
| `--bg-void` | `#0a0a0b` |
| `--bg-canvas` | `#111113` |
| `--bg-surface` | `#18181b` |
| `--bg-elevated` | `#1f1f23` |
| `--bg-glass` | `rgba(15, 15, 17, 0.85)` |

### Text
| Token | Value |
|-------|-------|
| `--text-primary` | `#f4f4f5` |
| `--text-secondary` | `#a1a1aa` |
| `--text-tertiary` | `#71717a` |
| `--text-dim` | `#52525b` |

### Accent — Muted Gold
| Token | Value |
|-------|-------|
| `--gold` | `#c8a45c` |
| `--gold-bright` | `#d4b872` |
| `--gold-dim` | `#a8883e` |
| `--gold-glow` | `rgba(200, 164, 92, 0.15)` |
| `--gold-subtle` | `rgba(200, 164, 92, 0.06)` |

### Warm Neutrals
| Token | Value |
|-------|-------|
| `--warm-cream` | `#e8e2d9` |
| `--warm-surface` | `#2a2825` |
| `--warm-border` | `rgba(232, 226, 217, 0.08)` |

### Borders & Shadows
| Token | Value |
|-------|-------|
| `--border-subtle` | `rgba(255, 255, 255, 0.05)` |
| `--border-gold` | `rgba(200, 164, 92, 0.12)` |
| `--shadow-card` | `0px 0px 0px 1px rgba(200,164,92,0.1), 0px 2px 2px rgba(0,0,0,0.3)` |
| `--shadow-elevated` | `0px 0px 0px 1px rgba(255,255,255,0.08), 0px 4px 6px rgba(0,0,0,0.2)` |

---

## 2. Section Layout Architecture

### New Page Structure (informed by top studios)

```
1. HERO — Full-viewport, void-black, gold ultra-light headline, 3D atmospheric scene
2. FEATURED WORK — Asymmetric bento grid with project cards (filterable)
3. SERVICES — Bento grid: 3D Web, AI, Full-Stack, Automation, UI/UX
4. ABOUT/PHILOSOPHY — Split text + visual, cinematic scene
5. PROCESS — Numbered steps (01→05), spaced-letter headings
6. CLIENT LOGOS / TRUST — Partner showcase
7. CONTACT / CTA — Full-width "Let's Build" with gold CTA
8. FOOTER — Minimal: logo, nav, social, newsletter
```

### Section Types

| Type | Description | Source Inspiration |
|------|-------------|-------------------|
| **Type A: Full-Viewport** | 100vh, void-black, centered content, atmospheric bg | SpaceX, Koalition |
| **Type B: Cinematic Scene** | 85-100vh, alternating dark↔warm-surface, full-bleed imagery | SpaceX, Apple |
| **Type C: Asymmetric Bento** | Contained, 2-3 column asymmetric grid, glass cards | Koalition, Stripe |
| **Type D: Proof Strip** | Full-width metrics with gold dividers | DigitalStudioz original |
| **Type E: Quote/Testimonial** | Letter-spaced quote, gold accent | Torii Studio |

---

## 3. Files to Modify

| File | Action | What Changes |
|------|--------|-------------|
| `app/globals.css` | **Rewrite** tokens | Replace Studio Green → Warm Premium |
| `app/layout.tsx` | **Modify** | Update font loading, metadata |
| `app/page.tsx` | **Rewrite** chapter data | New sections, new copy, bento config |
| `lib/experience-engine/types.ts` | **Modify** | Update ACCENT, TEXT_PRIMARY, etc. |
| `lib/experience-engine/engine.tsx` | **Major rewrite** | New hero, new section patterns, proper spacing |
| `lib/experience-engine/ui/ChapterSection.tsx` | **Rewrite** | Transform into BentoSection + SceneSection variants |
| `lib/experience-engine/ui/HeroAnimation.tsx` | **Modify** | Gold-tinted animations, ultra-light weights |
| `lib/experience-engine/ui/StatsStrip.tsx` | **Modify** | Gold dividers, warm cream labels |
| `lib/experience-engine/ui/TopNav.tsx` | **Modify** | Transparent→solid sticky, gold CTA button |
| `lib/experience-engine/ui/ClosingQuote.tsx` | **Modify** | Letter-spaced quote styling |
| `lib/experience-engine/ui/AccordionSection.tsx` | **Modify** | Warm gold borders |
| `components/CustomCursor.tsx` | **Modify** | Gold cursor dot instead of green |
| `components/StudioRails.tsx` | **Modify** | Gold rail styling |
| `lib/cursor-context.tsx` | **Modify** | Gold cursor colors |
| `lib/lenis-provider.tsx` | Verify | Should need no changes |
| `.cursor/prompts/Master-Build-Prompt.md` | **Update** | New taste reference |
| `.cursor/docs/START-HERE.md` | **Update** | Brand tokens reference |
| `.cursor/docs/ReCall.md` | **Update** | Session log |

---

## 4. Implementation Order (bite-sized tasks)

### Phase 1 — Foundation (~20 min)
1. Update `types.ts` — new ACCENT, TEXT_PRIMARY, colors
2. Rewrite `globals.css` — Warm Premium design tokens
3. Update `Master-Build-Prompt.md` — new taste
4. Run build to verify

### Phase 2 — Hero & Nav (~20 min)
5. Restructure `engine.tsx` — void-black hero, proper 100vh
6. Update `HeroAnimation.tsx` — gold ultra-light styling
7. Update `TopNav.tsx` — transparent→solid sticky, gold CTA
8. Update `CustomCursor.tsx` + `StudioRails.tsx` — gold accents
9. Run build + visual check

### Phase 3 — Content Sections (~30 min)
10. Rewrite `page.tsx` — new chapter data, new section structure
11. Create `BentoSection` component (replaces ChapterSection for bento grids)
12. Create `CinematicScene` component (full-viewport scene sections)
13. Update `StatsStrip.tsx` — gold dividers, warm cream
14. Update `ClosingQuote.tsx` — letter-spaced premium styling
15. Run build + visual check

### Phase 4 — Polish & Verify (~15 min)
16. Test spacing, centering, responsiveness
17. Bento grid asymmetry check
18. Update all Matrix docs (ReCall, START-HERE)
19. Final build verification

---

## 5. Verification Steps

```bash
# After each phase:
npm run build
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000

# Final:
npm run build       # Exit 0
npm run lint        # Clean
```

---

## 6. Key Design Rules

1. **Gold is the ONLY accent** — no second accent color (Apple discipline)
2. **Ultra-light (250/300) for large headings** — ethereal weight
3. **Warm cream for secondary text** — offsets cold white-on-dark
4. **Binary radius system** — 8px (small), 16px (cards/containers)
5. **Spaced-letter section titles** — "S E R V I C E S" style
6. **Luminance stacking** — elevation via bg opacity, not shadows
7. **Full-viewport hero + alternating scenes** — SpaceX pacing
8. **Asymmetric bento for services/work** — Koalition-inspired
9. **Gold-tinted shadows** — `rgba(200,164,92,0.1)` for elevated elements
10. **Generous padding** — 120-160px section gaps, 32px component gaps
