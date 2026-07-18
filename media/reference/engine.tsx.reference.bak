'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ACCENT, TEXT_DIM, TEXT_PRIMARY, TEXT_MUTED, WARM_CREAM } from './types'
import type { ExperienceConfig } from './types'
import { LoadingScreen } from './ui/LoadingScreen'
import MobileMenu from './ui/MobileMenu'
import { useBreakpoints } from './ui/useMediaQuery'

/* Responsive helpers */
const BP = { tablet: 768, desktop: 1024 } as const
function r<T>(v: T, tablet?: T, mobile?: T): T { return tablet ?? v }
/* mq returns styles merged with media-query-aware overrides */
function mq(base: React.CSSProperties, m: { tablet?: React.CSSProperties; mobile?: React.CSSProperties }): React.CSSProperties {
  return { ...base, ...m.tablet, ...m.mobile }
}

/* ── Scroll reveal: fade-up on intersection ── */
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  const [v, s] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { s(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el)
    return () => o.disconnect()
  }, [ref])
  return v
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null!)
  const vis = useReveal(ref)
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const S = {
  inner: mq({ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }, { mobile: { padding: '0 16px' } }),
  sec: (bg: string) => mq({ padding: '100px 0', background: bg }, { mobile: { padding: '60px 0' }, tablet: { padding: '80px 0' } }),
  secA: mq({ padding: '100px 0', background: 'var(--bg-canvas)' }, { mobile: { padding: '60px 0' }, tablet: { padding: '80px 0' } }),
  secTight: mq({ padding: '80px 0', background: 'var(--bg-canvas)' }, { mobile: { padding: '48px 0' }, tablet: { padding: '60px 0' } }),
  label: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 12 } as React.CSSProperties,
  h2: mq({ fontSize: 36, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT_PRIMARY, marginBottom: 16 }, { mobile: { fontSize: 26 }, tablet: { fontSize: 30 } }),
  sub: mq({ fontSize: 16, lineHeight: 1.6, color: TEXT_MUTED, maxWidth: 560, marginBottom: 48 }, { mobile: { fontSize: 15, marginBottom: 32 }, tablet: { marginBottom: 40 } }),
  card: mq({ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: 32 }, { mobile: { padding: 24 } }),
  glass: mq({ background: 'rgba(15,15,17,0.85)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-gold)', borderRadius: 16, padding: '48px 40px' }, { mobile: { padding: '32px 24px' }, tablet: { padding: '40px 32px' } }),
  cta: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 14, fontWeight: 600, border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(135deg, #c8a45c, #d4b872)', color: '#0a0a0b', textDecoration: 'none' } as React.CSSProperties,
  ctaO: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 14, fontWeight: 600, border: '1px solid var(--warm-border)', borderRadius: 8, cursor: 'pointer', transition: 'all 0.3s ease', background: 'transparent', color: WARM_CREAM, textDecoration: 'none' } as React.CSSProperties,
}

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function createStudioExperience(config: ExperienceConfig) {
  return function Home() {
    const [loading, setLoading] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { isMobile, isTablet } = useBreakpoints()

    useEffect(() => {
      const f = () => setScrolled(window.scrollY > 80)
      window.addEventListener('scroll', f, { passive: true })
      return () => window.removeEventListener('scroll', f)
    }, [])

    const scrollTo = (id: string) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
      <>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.7s' }}>

          {/* NAV */}
          <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            padding: '16px 0', transition: 'all 0.4s ease',
            background: scrolled ? 'rgba(10,10,11,0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid var(--warm-border)' : '1px solid transparent',
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ fontSize: 18, fontWeight: 600, color: TEXT_PRIMARY, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.02em' }}>
                <span style={{ color: ACCENT }}>Digital</span>Studioz
              </button>

              {/* Desktop nav */}
              {!isMobile && !isTablet && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                  {NAV.map(item => (
                    <button key={item.id} onClick={() => scrollTo(item.id)}
                      style={{ fontSize: 14, color: scrolled ? TEXT_MUTED : 'rgba(161,161,170,0.7)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(161,161,170,0.7)'}>
                      {item.label}
                    </button>
                  ))}
                  <button onClick={() => scrollTo('contact')}
                    style={{ ...S.cta, fontSize: 13, padding: '10px 20px' }}>
                    Start a Project
                  </button>
                </div>
              )}

              {/* Mobile / tablet hamburger */}
              {(isMobile || isTablet) && (
                <button
                  onClick={() => setMenuOpen(true)}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4,
                  }}
                  aria-label="Open menu"
                >
                  <span style={{ display: 'block', width: 22, height: 2, background: TEXT_PRIMARY, borderRadius: 1, transition: 'all 0.3s' }} />
                  <span style={{ display: 'block', width: 22, height: 2, background: TEXT_PRIMARY, borderRadius: 1, transition: 'all 0.3s' }} />
                  <span style={{ display: 'block', width: 22, height: 2, background: TEXT_PRIMARY, borderRadius: 1, transition: 'all 0.3s' }} />
                </button>
              )}
            </div>
          </header>

          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} scrollTo={scrollTo} />

          {/* HERO */}
          <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg-void)' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <img src="/images/ds-demo-hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35) contrast(1.1)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,11,0.2) 0%, #0a0a0b 100%)' }} />
            </div>
            <div style={S.inner}>
              <div style={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
                <FadeUp>
                  <div style={S.label}>Digital Studio</div>
                </FadeUp>
                <FadeUp delay={100}>
                  <h1 style={{ fontSize: isMobile ? 32 : isTablet ? 42 : 56, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: TEXT_PRIMARY, marginBottom: 24 }}>
                    We Build <span className="text-gradient">Digital</span><br /><span className="text-gradient">Experiences</span>
                  </h1>
                </FadeUp>
                <FadeUp delay={200}>
                  <p style={{ fontSize: 17, lineHeight: 1.6, color: WARM_CREAM, opacity: 0.65, maxWidth: 480, marginBottom: 40 }}>
                    3D web, AI integration, full-stack development, and automation — built with precision by a studio that codes.
                  </p>
                </FadeUp>
                <FadeUp delay={300}>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <button onClick={() => scrollTo('work')} style={S.cta}>View Our Work</button>
                    <button onClick={() => scrollTo('contact')} style={S.ctaO}>Get in Touch</button>
                  </div>
                </FadeUp>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: TEXT_DIM }}>Scroll</span>
              <div style={{ width: 1, height: 32, background: ACCENT, opacity: 0.3 }} />
            </div>
          </section>

          {/* WORK */}
          <section id="work" style={S.secA}>
            <div style={S.inner}>
              <FadeUp>
                <div style={S.label}>Our Work</div>
                <h2 style={S.h2}>Featured <span className="text-gradient">Projects</span></h2>
                <p style={S.sub}>Each project is a proof point of what the DigitalStudioz system can deliver.</p>
              </FadeUp>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '2fr 1fr', gap: 24 }}>
                <FadeUp delay={100}>
                  <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 420, cursor: 'pointer', background: 'var(--bg-surface)' }}>
                    <img src="/images/ds-demo-work-1.jpg" alt="VaderLabz" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(10,10,11,0.9) 100%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>VaderLabz</div>
                      <h3 style={{ fontSize: 22, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 4 }}>3D Scroll-Driven Experience</h3>
                      <p style={{ fontSize: 14, color: TEXT_MUTED }}>React Three Fiber, GSAP, Lenis</p>
                    </div>
                  </div>
                </FadeUp>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <FadeUp delay={200}>
                    <div style={{ ...S.card, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>MyStudioChannel</div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 8 }}>Content Platform</h3>
                        <p style={{ fontSize: 14, lineHeight: 1.6, color: TEXT_MUTED }}>Hostinger-hosted with MCP integrations.</p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginTop: 24 }}>View Project →</span>
                    </div>
                  </FadeUp>
                  <FadeUp delay={300}>
                    <div style={{ ...S.card, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>Profile Jedi</div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 8 }}>Profile Ecosystem</h3>
                        <p style={{ fontSize: 14, lineHeight: 1.6, color: TEXT_MUTED }}>Shared rules, skills, prompts.</p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginTop: 24 }}>View Project →</span>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" style={S.sec('var(--bg-void)')}>
            <div style={S.inner}>
              <FadeUp>
                <div style={S.label}>Services</div>
                <h2 style={S.h2}>What We <span className="text-gradient">Build</span></h2>
                <p style={S.sub}>Full-service digital studio capabilities.</p>
              </FadeUp>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 24 }}>
                {[
                  ['01', '3D Web Experiences', 'React Three Fiber, GSAP, WebGL, and immersive brand experiences.'],
                  ['02', 'AI Integration', 'LLM workflows, Mem0 vector memory, RAG pipelines, MCP tool access.'],
                  ['03', 'Full-Stack Development', 'Next.js, Node.js, databases, auth, and cloud deployments.'],
                  ['04', 'Automation & DevOps', 'PowerShell pipelines, CI/CD, backups, infrastructure-as-code.'],
                  ['05', 'UI/UX Design', 'Dark-mode interfaces, glassmorphism, bento grids, design tokens.'],
                  ['06', 'Consulting', 'Architecture review, system design, scaling strategy.'],
                ].map(([num, title, desc], i) => (
                  <FadeUp key={num} delay={i * 80}>
                    <div style={S.card}>
                      <div style={{ fontSize: 36, fontWeight: 700, color: ACCENT, opacity: 0.2, marginBottom: 16 }}>{num}</div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 12 }}>{title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: TEXT_MUTED }}>{desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" style={S.secA}>
            <div style={S.inner}>
              <FadeUp>
                <div style={S.label}>Process</div>
                <h2 style={S.h2}>How We <span className="text-gradient">Build</span></h2>
                <p style={S.sub}>A repeatable methodology for consistent quality.</p>
              </FadeUp>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)', gap: 16 }}>
                {[
                  ['01', 'Concept', 'Define the vision.'],
                  ['02', 'Design', 'Lock the taste.'],
                  ['03', 'Build', 'Scaffold from engine.'],
                  ['04', 'Deploy', 'Automated pipelines.'],
                  ['05', 'Iterate', 'Refine continuously.'],
                ].map(([num, title, desc], i) => (
                  <FadeUp key={num} delay={i * 80}>
                    <div style={S.card}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: ACCENT, opacity: 0.25, marginBottom: 16 }}>{num}</div>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 8 }}>{title}</h3>
                      <p style={{ fontSize: 13, lineHeight: 1.5, color: TEXT_MUTED }}>{desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" style={S.sec('var(--bg-void)')}>
            <div style={S.inner}>
              <div style={{ display: 'flex', flexDirection: isMobile || isTablet ? 'column' : 'row', gap: isMobile ? 32 : 64, alignItems: 'center' }}>
                <FadeUp>
                  <div style={{ flex: 1 }}>
                    <div style={S.label}>About</div>
                    <h2 style={{ ...S.h2, marginBottom: 24 }}>The <span className="text-gradient">Origin Story</span></h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_MUTED, marginBottom: 20 }}>
                      From a single terminal window to a full-service digital studio — born from the belief that great code and bold design can build anything.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_MUTED, marginBottom: 32 }}>
                      We built a system instead of rebuilding every time. The shared skeleton, the engine, the studio — it all comes together here.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ flex: 1, height: 1, background: 'var(--border-gold)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, whiteSpace: 'nowrap' }}>Think Big. Build Bold.</span>
                      <div style={{ flex: 1, height: 1, background: 'var(--border-gold)' }} />
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={200}>
                  <div style={{ flex: 1 }}>
                    <img src="/images/ds-demo-about.jpg" alt="Digital Studio" style={{ width: '100%', borderRadius: 12, filter: 'brightness(0.65)', maxHeight: 420, objectFit: 'cover' }} />
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section style={S.secTight}>
            <div style={S.inner}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 24 : 32, textAlign: 'center' }}>
                {config.stats.map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 42, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>{stat.num}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEXT_MUTED }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <section style={{ position: 'relative', padding: '140px 0', overflow: 'hidden', background: 'var(--bg-void)' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <img src="/images/ds-demo-bg-atmo.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)', opacity: 0.4 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #0a0a0b 0%, rgba(10,10,11,0.3) 50%, #0a0a0b 100%)' }} />
            </div>
            <FadeUp>
              <div style={{ ...S.inner, position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ maxWidth: 720, margin: '0 auto', ...S.glass }}>
                  <div style={{ fontSize: 24, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, color: TEXT_PRIMARY, marginBottom: 24 }}>
                    <span style={{ color: ACCENT }}>"</span>Think big. Build bold. Create without limits.<span style={{ color: ACCENT }}>"</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: 32 }}>— DigitalStudioz</div>
                  <div style={{ width: 48, height: 1, margin: '0 auto', background: 'var(--border-gold)' }} />
                </div>
              </div>
            </FadeUp>
          </section>

          {/* CONTACT */}
          <section id="contact" style={S.sec('var(--bg-canvas)')}>
            <div style={{ ...S.inner, textAlign: 'center' }}>
              <FadeUp>
                <div style={{ maxWidth: 560, margin: '0 auto' }}>
                  <div style={S.label}>Contact</div>
                  <h2 style={{ ...S.h2, textAlign: 'center' }}>Let's <span className="text-gradient">Build Together</span></h2>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: TEXT_MUTED, marginBottom: 40 }}>
                    Every project starts with a conversation. Reach out and let's create something bold.
                  </p>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:jonbeatz@digitalstudioz.dev" style={S.cta}>
                      Start a Project
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                    <a href="https://github.com/jonbeatz" target="_blank" rel="noopener noreferrer" style={S.ctaO}>View GitHub</a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{ borderTop: '1px solid var(--warm-border)', padding: '64px 0', background: 'var(--bg-void)' }}>
            <div style={S.inner}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 32 : 48 }}>
                <div style={isMobile ? { gridColumn: '1 / -1', marginBottom: 8 } : {}}>
                  <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', color: TEXT_PRIMARY, marginBottom: 12 }}>
                    <span style={{ color: ACCENT }}>Digital</span>Studioz
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: TEXT_MUTED, maxWidth: 200 }}>Full-service digital studio. We build 3D, AI, and automation systems.</p>
                </div>
                {[
                  ['Services', ['3D Web', 'AI Integration', 'Full-Stack', 'Automation', 'UI/UX']],
                  ['Company', ['About', 'Work', 'Process', 'Contact']],
                  ['Connect', ['GitHub', 'Email']],
                ].map(([title, links]) => (
                  <div key={title as string}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>{title}</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {(links as string[]).map(link => (
                        <li key={link}>
                          <span style={{ fontSize: 14, color: TEXT_MUTED, cursor: 'pointer', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>{link}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--warm-border)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 8 : 0, justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'center' }}>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: TEXT_DIM }}>&copy; {new Date().getFullYear()} DigitalStudioz</span>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: TEXT_DIM }}>Built with DigitalStudioz</span>
              </div>
            </div>
          </footer>

          {/* Back to top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 40, height: 40, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--gold-subtle)', border: '1px solid var(--border-gold)', color: ACCENT, cursor: 'pointer',
              opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' as const : 'none' as const,
              transition: 'all 0.3s ease',
            }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </>
    )
  }
}
