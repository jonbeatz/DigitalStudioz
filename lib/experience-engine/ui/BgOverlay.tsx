'use client'

import { ReactNode } from 'react'

export function BgOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full" style={{
          background: '#050505',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.9) 100%)'
        }} />
      </div>
      {/* Subtle green ambient glows */}
      <div className="fixed top-1/4 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-0 pointer-events-none opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
          transform: 'translate(30%, -20%)',
        }}
      />
      <div className="fixed bottom-1/4 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #34d399 0%, transparent 70%)',
          transform: 'translate(-30%, 20%)',
        }}
      />
      {children}
    </div>
  )
}
