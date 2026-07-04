'use client'
import React, { useEffect, useRef } from 'react'
import { ACCENT, TEXT_MUTED, TEXT_PRIMARY } from '../types'

const styles = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    zIndex: 100,
    background: 'rgba(10,10,11,0.92)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    opacity: 0,
    transition: 'opacity 0.35s ease',
  },
  link: (delay: number) => ({
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: '-0.02em',
    color: TEXT_MUTED,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '12px 24px',
    opacity: 0,
    transform: 'translateY(12px)',
    transition: `all 0.35s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  } as React.CSSProperties),
  linkOpen: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  cta: {
    marginTop: 16,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 28px',
    fontSize: 14,
    fontWeight: 600,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #c8a45c, #d4b872)',
    color: '#0a0a0b',
    textDecoration: 'none' as const,
    opacity: 0,
    transform: 'translateY(12px)',
    transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1) 200ms',
  },
  ctaOpen: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

interface Props {
  open: boolean
  onClose: () => void
  scrollTo: (id: string) => void
}

export default function MobileMenu({ open, onClose, scrollTo }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const handleNav = (id: string) => {
    onClose()
    setTimeout(() => scrollTo(id), 350)
  }

  return (
    <div
      ref={overlayRef}
      style={{ ...styles.overlay, opacity: open ? 1 : 0 }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20, width: 40, height: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent', border: 'none', cursor: 'pointer', color: TEXT_PRIMARY, fontSize: 28,
        }}
        aria-label="Close menu"
      >
        ✕
      </button>
      {NAV.map((item, i) => (
        <button
          key={item.id}
          onClick={() => handleNav(item.id)}
          style={{
            ...styles.link(i * 50),
            ...(open ? styles.linkOpen : {}),
          }}
          onMouseEnter={e => e.currentTarget.style.color = ACCENT}
          onMouseLeave={e => e.currentTarget.style.color = TEXT_MUTED}
        >
          {item.label}
        </button>
      ))}
      <button
        onClick={() => handleNav('contact')}
        style={{
          ...styles.cta,
          ...(open ? styles.ctaOpen : {}),
        }}
      >
        Start a Project
      </button>
    </div>
  )
}
