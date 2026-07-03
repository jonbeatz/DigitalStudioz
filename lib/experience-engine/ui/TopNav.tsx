'use client'

import { useState, useEffect } from 'react'
import { TEXT_PRIMARY, TEXT_DIM, ACCENT, TEXT_MUTED, WARM_CREAM } from '../types'

export function TopNav({ chapters, archiveLinkUrl, archiveLinkTitle }: {
  chapters: { id: string; marker: string; title: string }[]
  archiveLinkUrl?: string
  archiveLinkTitle?: string
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-[var(--shadow-elevated)]' : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(10, 10, 11, 0.92)'
          : 'linear-gradient(180deg, rgba(10,10,11,0.6) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid var(--border-warm)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 md:px-16 py-4">
        {/* Brand */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-base font-medium tracking-[-0.02em] transition-opacity duration-300 hover:opacity-80"
          style={{ color: TEXT_PRIMARY }}
        >
          <span style={{ color: ACCENT }}>DIGITAL</span>STUDIOZ
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {chapters.map((ch) => (
            <button key={ch.id} onClick={() => {
              const el = document.getElementById(ch.id)
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 100
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
              className="font-mono text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: scrolled ? TEXT_MUTED : 'rgba(161,161,170,0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--text-muted)' : 'rgba(161,161,170,0.7)'}
            >
              {ch.title.replace(/<[^>]*>/g, '')}
            </button>
          ))}

          {/* Gold CTA */}
          <a href="#contact"
            className="font-mono text-[0.55rem] tracking-[0.15em] uppercase px-5 py-2.5 rounded-[var(--radius-sm)] transition-all duration-300 hover:scale-105"
            style={{ color: '#0a0a0b', background: 'linear-gradient(135deg, #c8a45c, #d4b872)' }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile CTA */}
        <a href="#contact"
          className="md:hidden font-mono text-[0.55rem] tracking-[0.15em] uppercase px-4 py-2 rounded-[var(--radius-sm)] transition-all duration-300"
          style={{ color: '#0a0a0b', background: 'linear-gradient(135deg, #c8a45c, #d4b872)' }}
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}
