'use client'

import { useEffect } from 'react'
import { TEXT_PRIMARY, TEXT_DIM, ACCENT, TEXT_MUTED } from '../types'
import type { ChapterData } from '../types'

interface ArticleOverlayProps {
  chapter: ChapterData
  onClose: () => void
}

export function ArticleOverlay({ chapter, onClose }: ArticleOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(16px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-10 rounded-2xl"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(255,255,255,0.06)]"
          style={{ color: TEXT_DIM }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Content */}
        <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
          {chapter.marker} — {chapter.subtitle}
        </div>
        <h2 className="font-sans text-2xl md:text-3xl font-semibold leading-[1.1] mb-6"
          style={{ color: TEXT_PRIMARY }}
          dangerouslySetInnerHTML={{ __html: chapter.title }}
        />
        <div className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: TEXT_MUTED }}>
          {chapter.detail}
        </div>
      </div>
    </div>
  )
}
