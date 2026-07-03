'use client'

import { TEXT_PRIMARY, TEXT_DIM, ACCENT, TEXT_MUTED } from '../types'

export function TopNav({ chapters, archiveLinkUrl, archiveLinkTitle }: {
  chapters: { id: string; marker: string; title: string }[]
  archiveLinkUrl?: string
  archiveLinkTitle?: string
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.7) 70%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-base font-bold tracking-[-0.02em] transition-opacity duration-300 hover:opacity-80"
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
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: TEXT_MUTED }}
            >
              {ch.marker} — {ch.title.replace(/<[^>]*>/g, '')}
            </button>
          ))}
        </div>

        {/* Mobile contact */}
        <a href="#contact"
          className="md:hidden font-mono text-[0.6rem] tracking-[0.15em] uppercase px-4 py-2 rounded-full transition-all duration-300"
          style={{ color: '#000', background: 'linear-gradient(135deg, #22c55e, #34d399)' }}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
