'use client'

import React, { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { HDR_PRESETS, BLOOM_PRESETS, ROTATION_PRESETS, CAMERA_PRESETS } from './config'
import { EASE, ACCENT, TEXT_DIM, TEXT_PRIMARY, TEXT_MUTED } from './types'
import type { ExperienceConfig, HdrPreset, BloomPreset, RotationPreset, CameraPreset } from './types'

// UI
import { TopNav } from './ui/TopNav'
import { ChapterSection } from './ui/ChapterSection'
import { ArticleOverlay } from './ui/ArticleOverlay'
import { LoadingScreen } from './ui/LoadingScreen'
import { ScrollPrompt } from './ui/ScrollPrompt'
import { StatsStrip } from './ui/StatsStrip'
import { HeroAnimation } from './ui/HeroAnimation'
import { BgOverlay } from './ui/BgOverlay'
import { BackToTop } from './ui/BackToTop'

import { useCursor } from '@/lib/cursor-context'

const Scene3D = dynamic(
  () => import('./scene/Scene3D').then((m) => m.Scene3D),
  { ssr: false }
)

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-8 md:py-12">
      <div className="h-px w-12 md:w-20" style={{ background: 'var(--border-subtle)' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, opacity: 0.4 }} />
      <div className="h-px w-12 md:w-20" style={{ background: 'var(--border-subtle)' }} />
    </div>
  )
}

export default function createStudioExperience(config: ExperienceConfig) {
  return function StudioExperiencePage() {
    const [loading, setLoading] = useState(true)
    const [activeArticle, setActiveArticle] = useState<number | null>(null)
    const [currentHdrIndex, setCurrentHdrIndex] = useState(config.defaultHdrIndex ?? 0)
    const [currentBloomIndex, setCurrentBloomIndex] = useState(config.defaultBloomIndex ?? 1)
    const [currentRotationIndex, setCurrentRotationIndex] = useState(config.defaultRotationIndex ?? 0)
    const [currentCameraIndex, setCurrentCameraIndex] = useState(config.defaultCameraIndex ?? 0)
    const [mouseEnabled, setMouseEnabled] = useState(config.defaultMouseEnabled ?? true)
    const { setCursorEnabled } = useCursor()

    const handleLoadingComplete = useCallback(() => {
      const el = document.getElementById('ds-loading')
      if (el) {
        el.style.opacity = '0'
        setTimeout(() => setLoading(false), 400)
      } else {
        setLoading(false)
      }
    }, [])

    return (
      <>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

        {/* Subtle 3D atmospheric background */}
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0.5, 6], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
          >
            <Scene3D
              modelPath={config.modelPath}
              defaultScale={config.defaultScale}
              scaleScrollFactor={config.scaleScrollFactor}
              defaultY={config.defaultY}
              yScrollFactor={config.yScrollFactor}
              hdrPreset={HDR_PRESETS[currentHdrIndex]}
              bloomPreset={BLOOM_PRESETS[currentBloomIndex]}
              cameraMode={CAMERA_PRESETS[currentCameraIndex]}
              mouseEnabled={mouseEnabled}
              onRotationSpeed={ROTATION_PRESETS[currentRotationIndex]}
              showContactShadows={config.showContactShadows}
            />
          </Canvas>
        </div>

        {/* Content */}
        <BgOverlay>
          <div className={`relative z-30 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <TopNav
              chapters={config.chapters}
              archiveLinkUrl={config.archiveLinkUrl}
              archiveLinkTitle={config.archiveLinkTitle}
            />

            {/* ================================================================
                HERO — MAVRA style: full-bleed hero image + text overlay
                ================================================================ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Hero background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/ds-hero-v1.jpg"
                  alt="DigitalStudioz — Digital Experiences"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.6) contrast(1.1)',
                  }}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.7) 50%, #050505 100%)',
                }} />
              </div>

              {/* Green ambient glow */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-[1]"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, #22c55e 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-12 pt-24 pb-16 text-center">
                <HeroAnimation>
                  <div className="font-mono text-[0.65rem] tracking-[0.3em] mb-6" style={{ color: ACCENT }}>
                    DIGITAL STUDIO
                  </div>
                </HeroAnimation>

                <HeroAnimation>
                  <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
                    <span className="text-white">We Build</span>
                    <br />
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >Digital Experiences</span>
                  </h1>
                </HeroAnimation>

                <HeroAnimation>
                  <p className="max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed mb-10 text-white/70">
                    3D web experiences, AI integration, full-stack development, and automation —
                    built with precision by a studio that codes.
                  </p>
                </HeroAnimation>

                <HeroAnimation>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href={`#${config.chapters[0]?.id ?? 'story'}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.12em] text-black uppercase rounded-full transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #22c55e, #34d399)' }}
                    >
                      EXPLORE OUR WORK
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 hover:bg-white/10"
                      style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      GET IN TOUCH
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </HeroAnimation>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="font-mono text-[0.5rem] tracking-[0.2em] text-white/40">SCROLL</span>
                <svg width="16" height="24" viewBox="0 0 16 24" className="animate-bounce" style={{ animationDuration: '2s' }}>
                  <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
                  <circle cx="8" cy="8" r="2" fill="#22c55e" />
                </svg>
              </div>
            </section>

            {/* Spacer after hero */}
            <div className="h-12 md:h-24" />

            {/* ================================================================
                CHAPTER SECTIONS — Each with its own image + card overlay
                ================================================================ */}
            <div className="max-w-5xl mx-auto px-8 md:px-12">
              {config.chapters.map((ch, i) => (
                <React.Fragment key={ch.id}>
                  {i > 0 && <SectionDivider />}
                  <ChapterSection
                    chapter={{ ...ch, detail: '' }}
                    index={i}
                    imageSrc={`/images/${['ds-01-abstract-core','ds-02-wireframe-scene','ds-03-digital-tools','ds-04-ai-neural','ds-05-finished-product'][i]}.jpg`}
                    imageOnLeft={i % 2 === 0}
                    onReadMore={() => setActiveArticle(i)}
                  />
                </React.Fragment>
              ))}
            </div>

            <div className="h-8 md:h-16" />

            {/* Stats */}
            <StatsStrip stats={config.stats} ease={EASE} />

            <div className="h-4 md:h-8" />

            {/* ================================================================
                CLOSING SECTION — final hero-like spread
                ================================================================ */}
            <section className="relative py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/ds-bg-atmosphere-01.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.4) contrast(1.2)', opacity: 0.5 }}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, #050505 0%, rgba(5,5,5,0.3) 50%, #050505 100%)',
                }} />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
                <div
                  className="p-10 md:p-14 rounded-2xl"
                  style={{
                    background: 'rgba(5,5,5,0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="font-sans text-2xl md:text-4xl font-light italic leading-tight mb-4 text-white">
                    <span style={{ color: ACCENT }}>&ldquo;</span>Think big. Build bold. Create without limits.<span style={{ color: ACCENT }}>&rdquo;</span>
                  </div>
                  <div className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: TEXT_DIM }}>
                    &mdash; DigitalStudioz
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-8 mb-4">
                    <div className="h-px w-10" style={{ background: 'var(--border-accent)' }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                    <div className="h-px w-10" style={{ background: 'var(--border-accent)' }} />
                  </div>
                  <div className="font-mono text-[0.55rem] tracking-[0.3em] uppercase" style={{ color: TEXT_MUTED }}>
                    DigitalStudioz v1.0 &mdash; Built With DigitalStudioz
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================================
                FOOTER
                ================================================================ */}
            <footer className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="max-w-5xl mx-auto px-8 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
                  <div className="col-span-2 md:col-span-1">
                    <div className="font-sans text-lg font-bold tracking-[-0.02em] mb-4" style={{ color: TEXT_PRIMARY }}>
                      <span style={{ color: ACCENT }}>DIGITAL</span>STUDIOZ
                    </div>
                    <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: TEXT_MUTED }}>
                      Full-service digital studio. We build 3D experiences, AI platforms, and automation systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-5" style={{ color: TEXT_DIM }}>Services</h4>
                    <ul className="space-y-3">
                      {['3D Web', 'AI Integration', 'Full-Stack', 'Automation', 'UI/UX Design'].map((s) => (
                        <li key={s}>
                          <a href="#" className="text-sm transition-colors duration-200 hover:text-[var(--accent)]" style={{ color: TEXT_MUTED }}>{s}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-5" style={{ color: TEXT_DIM }}>Company</h4>
                    <ul className="space-y-3">
                      {['About', 'Work', 'Process', 'Contact'].map((s) => (
                        <li key={s}>
                          <a href="#" className="text-sm transition-colors duration-200 hover:text-[var(--accent)]" style={{ color: TEXT_MUTED }}>{s}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-5" style={{ color: TEXT_DIM }}>Connect</h4>
                    <ul className="space-y-3">
                      {['GitHub', 'Email', 'X / Twitter'].map((s) => (
                        <li key={s}>
                          <a href="#" className="text-sm transition-colors duration-200 hover:text-[var(--accent)]" style={{ color: TEXT_MUTED }}>{s}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-14 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="font-mono text-[0.55rem] tracking-[0.15em]" style={{ color: TEXT_DIM }}>
                    &copy; {new Date().getFullYear()} DigitalStudioz
                  </span>
                  <span className="font-mono text-[0.5rem] tracking-[0.15em]" style={{ color: TEXT_DIM }}>
                    BUILT WITH DIGITALSTUDIOZ
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </BgOverlay>

        {/* Overlays */}
        {activeArticle !== null && (
          <ArticleOverlay
            chapter={{ ...config.chapters[activeArticle], detail: config.chapters[activeArticle].detail }}
            onClose={() => setActiveArticle(null)}
          />
        )}

        {!loading && <ScrollPrompt />}
        <BackToTop />
      </>
    )
  }
}
