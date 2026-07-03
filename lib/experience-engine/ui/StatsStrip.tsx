'use client'

import { useEffect, useRef } from 'react'
import { ACCENT, TEXT_DIM, TEXT_MUTED, WARM_CREAM } from '../types'
import type { StatData } from '../types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StatsStrip({ stats, ease }: { stats: StatData[]; ease: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.stat-item'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease, stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 50%', toggleActions: 'play none none reverse' },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [ease])

  return (
    <section ref={ref} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="glass-card p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-item flex flex-col items-center gap-3">
                <span className="font-sans text-4xl md:text-6xl font-[300] leading-none" style={{ color: ACCENT }}>{s.num}</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-center" style={{ color: WARM_CREAM, opacity: 0.6 }}>{s.label}</span>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12" style={{ background: 'var(--border-gold)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
