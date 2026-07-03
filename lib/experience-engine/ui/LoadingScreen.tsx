'use client'

import { useEffect, useRef, useState } from 'react'
import { BG_VOID } from '../types'

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const total = 60
    const t = setInterval(() => {
      frame++
      setProgress(Math.min(Math.round((frame / total) * 100), 100))
      if (frame >= total) { clearInterval(t); setTimeout(onComplete, 200) }
    }, 40)
    return () => clearInterval(t)
  }, [onComplete])

  return (
    <div id="ds-loading" className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ background: BG_VOID }}>
      <div className="font-sans text-xl font-bold tracking-[-0.02em] mb-12"
        style={{ color: '#f4f4f5' }}
      >
        <span style={{ color: '#c8a45c' }}>DIGITAL</span>STUDIOZ
      </div>
      <div className="w-[200px] md:w-[280px] h-[3px] bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
        <div ref={barRef} className="h-full rounded-full transition-all duration-150"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #c8a45c, #d4b872)' }}
        />
      </div>
      <div className="text-xs font-mono tracking-[0.15em] mt-4" style={{ color: '#555555' }}>{progress}%</div>
    </div>
  )
}
