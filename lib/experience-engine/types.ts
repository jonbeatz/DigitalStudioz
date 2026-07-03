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
export const ACCENT = '#22c55e'
export const ACCENT_DIM = 'rgba(34, 197, 94, 0.12)'
export const SECONDARY = '#34d399'
export const TEXT_MUTED = '#888888'
export const TEXT_DIM = '#555555'
export const TEXT_PRIMARY = '#e8e8e8'
export const BG_DEEP = '#050505'
