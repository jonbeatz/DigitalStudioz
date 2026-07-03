'use client'

import { useEffect, useRef } from 'react'
import { ACCENT, TEXT_DIM, TEXT_MUTED } from '../types'
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
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="rounded-2xl p-8 md:p-12" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
        }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-item flex flex-col items-center gap-2">
                <span className="font-sans text-3xl md:text-5xl font-bold leading-none" style={{ color: ACCENT }}>{s.num}</span>
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-center" style={{ color: TEXT_MUTED }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
