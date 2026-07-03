'use client'

import { useEffect, useRef } from 'react'
import { EASE, TEXT_PRIMARY, TEXT_DIM, ACCENT, TEXT_MUTED, WARM_CREAM } from '../types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ClosingQuote() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: EASE,
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 45%', toggleActions: 'play none none reverse' },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-card p-10 md:p-14">
            <div className="font-sans text-2xl md:text-4xl font-light italic leading-tight mb-4" style={{ color: TEXT_PRIMARY }}>
              <span style={{ color: ACCENT }}>&ldquo;</span>Think big. Build bold. Create without limits.<span style={{ color: ACCENT }}>&rdquo;</span>
            </div>
            <div className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: TEXT_DIM }}>
              &mdash; DigitalStudioz
            </div>
            <div className="flex items-center justify-center gap-3 mt-8 mb-4">
              <div className="h-px w-10" style={{ background: 'var(--border-gold)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
              <div className="h-px w-10" style={{ background: 'var(--border-gold)' }} />
            </div>
            <div className="font-mono text-[0.5rem] tracking-[0.35em] uppercase" style={{ color: TEXT_MUTED }}>
              DigitalStudioz Warm Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
