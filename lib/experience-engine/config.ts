import type { HdrPreset, BloomPreset, RotationPreset, CameraPreset } from './types'

export const HDR_PRESETS: HdrPreset[] = [
  { label: 'Neon Studio', file: '/media/neon_photostudio_1k.exr' },
  { label: 'Colorful',    file: '/media/colorful_studio_1k.exr' },
  { label: 'Photo Studio', file: '/media/photo_studio_01_1k.exr' },
  { label: 'Office',      file: '/media/poly_haven_studio_1k.exr' },
]

export const BLOOM_PRESETS: BloomPreset[] = [
  { label: 'Off',   intensity: 0 },
  { label: 'Low',   intensity: 0.15 },
  { label: 'Med',   intensity: 0.3 },
  { label: 'High',  intensity: 0.6 },
]

export const ROTATION_PRESETS: RotationPreset[] = [
  { label: 'Off',  speed: 0 },
  { label: 'Slow', speed: 0.1 },
  { label: 'Norm', speed: 0.25 },
  { label: 'Fast', speed: 0.5 },
]

export const CAMERA_PRESETS: CameraPreset[] = [
  { label: 'Static', mode: 'static' },
  { label: 'Slow',   mode: 'slow' },
  { label: 'Full',   mode: 'full' },
]
