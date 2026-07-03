'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { EASE, TEXT_PRIMARY, TEXT_DIM, TEXT_MUTED, ACCENT, ACCENT_DIM, WARM_CREAM } from '../types'

gsap.registerPlugin(ScrollTrigger)

export function ChapterSection({ chapter, index, imageSrc, imageOnLeft, onReadMore }: {
  chapter: { id: string; marker: string; title: string; subtitle: string; summary: string; detail?: string; icon?: string }
  index: number
  imageSrc?: string
  imageOnLeft?: boolean
  onReadMore: () => void
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const img = imageRef.current
    const title = titleRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: EASE,
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 50%', toggleActions: 'play none none reverse' },
        },
      )

      if (img) {
        gsap.fromTo(img,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1, ease: EASE,
            scrollTrigger: { trigger: img, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' },
          },
        )
      }

      if (title) {
        const st = new SplitType(title, { types: 'lines' })
        const lines = st.lines
        if (lines) {
          gsap.fromTo(lines,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: EASE,
              scrollTrigger: { trigger: card, start: 'top 80%', end: 'top 45%', toggleActions: 'play none none reverse' },
            },
          )
        }
      }
    }, card)

    return () => ctx.revert()
  }, [])

  return (
    <section id={chapter.id} ref={sectionRef} className="scroll-mt-28 py-8 md:py-12">
      <div className={`flex flex-col ${imageOnLeft !== false ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-stretch`}>
        {/* Image side */}
        {imageSrc && (
          <div ref={imageRef} className="flex-1 md:w-1/2 rounded-[var(--radius-lg)] overflow-hidden min-h-[260px] md:min-h-[380px] relative">
            <img
              src={imageSrc}
              alt={chapter.subtitle}
              className="w-full h-full absolute inset-0 object-cover"
              loading="lazy"
              style={{ filter: 'brightness(0.65) contrast(1.05) saturate(0.85)' }}
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,11,0.5) 100%)',
            }} />
          </div>
        )}

        {/* Card side — warm premium glass */}
        <div className="flex-1 md:w-1/2">
          <div
            ref={cardRef}
            className="glass-card p-10 md:p-12 h-full transition-all duration-500 hover:scale-[1.008] hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Marker badge — gold */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="font-mono text-[0.55rem] tracking-[0.25em] font-medium uppercase px-3 py-1.5 rounded-[var(--radius-sm)]"
                style={{ background: 'var(--gold-subtle)', color: ACCENT, border: '1px solid var(--border-gold)' }}
              >
                {chapter.marker}
              </span>
              <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase" style={{ color: TEXT_DIM }}>
                {chapter.subtitle}
              </span>
            </div>

            {/* Title with SplitType */}
            <h2
              ref={titleRef}
              className="font-sans text-2xl md:text-3xl font-[300] leading-[1.15] mb-5"
              style={{ color: TEXT_PRIMARY }}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: chapter.title }}
            />

            {/* Summary — warm cream */}
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: WARM_CREAM, opacity: 0.7 }}>
              {chapter.summary}
            </p>

            {/* Read more — gold */}
            <button
              onClick={onReadMore}
              className="group inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:gap-3"
              style={{ color: ACCENT }}
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
