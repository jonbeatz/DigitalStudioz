import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { LenisProvider } from '@/lib/lenis-provider'
import { CustomCursor } from '@/components/CustomCursor'
import { StudioRails } from '@/components/StudioRails'
import { CursorProvider } from '@/lib/cursor-context'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DigitalStudioz — Full-Service Digital Studio',
  description:
    '3D experiences, AI integration, full-stack development, and automation. Built with precision by DigitalStudioz.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <CursorProvider>
        <LenisProvider>
          <StudioRails />
          <CustomCursor />
          {children}
        </LenisProvider>
        </CursorProvider>
      </body>
    </html>
  )
}
