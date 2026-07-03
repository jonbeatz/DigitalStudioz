'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { EASE, TEXT_PRIMARY, TEXT_DIM, TEXT_MUTED, ACCENT, ACCENT_DIM } from '../types'

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
      // Card fade-in
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE,
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 50%', toggleActions: 'play none none reverse' },
        },
      )

      // Image parallax
      if (img) {
        gsap.fromTo(img,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1, ease: EASE,
            scrollTrigger: { trigger: img, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' },
          },
        )
      }

      // SplitType line reveal on title
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
    <section id={chapter.id} ref={sectionRef} className="scroll-mt-28">
      <div className={`flex flex-col ${imageOnLeft !== false ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-stretch`}>
        {/* Image side */}
        {imageSrc && (
          <div ref={imageRef} className="flex-1 md:w-1/2 rounded-2xl overflow-hidden min-h-[220px] md:min-h-[320px] relative">
            <img
              src={imageSrc}
              alt={chapter.subtitle}
              className="w-full h-full absolute inset-0 object-cover"
              loading="lazy"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.6) 100%)',
            }} />
          </div>
        )}

        {/* Card side */}
        <div className={`flex-1 md:w-1/2 ${imageOnLeft !== false ? '' : ''}`}>
          <div
            ref={cardRef}
            className="relative p-8 md:p-10 rounded-2xl h-full transition-all duration-500 hover:scale-[1.005]"
            style={{
              background: 'var(--bg-card)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
          >
            {/* Marker badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] font-medium uppercase px-3 py-1 rounded-full"
                style={{ background: 'var(--accent-subtle)', color: ACCENT, border: '1px solid var(--border-accent)' }}
              >
                {chapter.marker}
              </span>
              <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase" style={{ color: TEXT_DIM }}>
                {chapter.subtitle}
              </span>
            </div>

            {/* Title with SplitType */}
            <h2
              ref={titleRef}
              className="font-sans text-2xl md:text-3xl font-semibold leading-[1.15] mb-4"
              style={{ color: TEXT_PRIMARY }}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: chapter.title }}
            />

            {/* Summary */}
            <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: TEXT_MUTED }}>
              {chapter.summary}
            </p>

            {/* Read more */}
            <button
              onClick={onReadMore}
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:gap-3"
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
