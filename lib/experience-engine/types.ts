export interface ChapterData {
  id: string
  marker: string
  title: string
  subtitle: string
  summary: string
  detail: string
  /** Optional icon/emoji for card header */
  icon?: string
}

export interface StatData {
  num: string
  label: string
}

export interface HdrPreset {
  label: string
  file: string
}

export interface BloomPreset {
  label: string
  intensity: number
}

export interface RotationPreset {
  label: string
  speed: number
}

export interface CameraPreset {
  label: string
  mode: 'static' | 'slow' | 'full'
}

export interface ExperienceConfig {
  /** Unique route identifier */
  id: string
  /** GLB model path */
  modelPath: string
  /** Base scale (before scroll factor) */
  defaultScale: number
  /** Scale added per scroll progress */
  scaleScrollFactor: number
  /** Base Y position */
  defaultY: number
  /** Y position change per scroll progress */
  yScrollFactor: number
  /** Chapter data */
  chapters: ChapterData[]
  /** Stats data */
  stats: StatData[]

  // Feature toggles
  showBloomControls?: boolean
  showRotationControls?: boolean
  showCameraControls?: boolean
  showMouseControls?: boolean
  showContactShadows?: boolean
  archiveLinkUrl?: string
  archiveLinkTitle?: string

  // Default UI state
  defaultHdrIndex?: number
  defaultBloomIndex?: number
  defaultRotationIndex?: number
  defaultCameraIndex?: number
  defaultMouseEnabled?: boolean
  defaultCursorEnabled?: boolean
}

export const EASE = 'power3.inOut'
export const ACCENT = '#c8a45c'
export const ACCENT_DIM = 'rgba(200, 164, 92, 0.12)'
export const ACCENT_GLOW = 'rgba(200, 164, 92, 0.15)'
export const GOLD_BRIGHT = '#d4b872'
export const GOLD_DIM = '#a8883e'
export const WARM_CREAM = '#e8e2d9'
export const TEXT_MUTED = '#a1a1aa'
export const TEXT_DIM = '#52525b'
export const TEXT_PRIMARY = '#f4f4f5'
export const BG_VOID = '#0a0a0b'
export const BG_CANVAS = '#111113'
