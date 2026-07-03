'use client'

import { useMemo, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { RotationPreset, CameraPreset } from '../types'
import { ACCENT, GOLD_DIM } from '../types'

interface SceneModelProps {
  modelPath: string
  defaultScale: number
  scaleScrollFactor: number
  defaultY: number
  yScrollFactor: number
  rotationSpeed: RotationPreset
  cameraPreset: CameraPreset
  mouseEnabled: boolean
}

/**
 * Atmospheric particle field — subtle warm gold dust floating in the void.
 * Replaces the old torus/icosahedron geometry for a cleaner Warm Premium feel.
 */
function AtmosphericParticles({
  defaultScale,
  scaleScrollFactor,
  defaultY,
  yScrollFactor,
  rotationSpeed,
  mouseEnabled,
}: {
  defaultScale: number
  scaleScrollFactor: number
  defaultY: number
  yScrollFactor: number
  rotationSpeed: RotationPreset
  cameraPreset: CameraPreset
  mouseEnabled: boolean
}) {
  const meshRef = useRef<THREE.Group>(null!)
  const scrollY = useRef(0)
  const mouseTarget = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const particleSystem = useMemo(() => {
    const group = new THREE.Group()

    // Warm gold particle field
    const count = 200
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4
      pos[i * 3 + 2] = r * Math.cos(phi)
      sizes[i] = 0.01 + Math.random() * 0.02
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(ACCENT),
      size: 0.025,
      transparent: true,
      opacity: 0.2,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geo, mat)
    points.position.y = -0.5
    group.add(points)

    // Tiny inner glow sphere
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(GOLD_DIM),
        transparent: true,
        opacity: 0.1,
      })
    )
    glow.position.set(0, -0.2, 0)
    group.add(glow)

    return group
  }, [ACCENT, GOLD_DIM])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const g = meshRef.current

    const s = defaultScale + scaleScrollFactor * scrollY.current
    g.scale.setScalar(s)
    g.position.y = defaultY + yScrollFactor * scrollY.current

    if (rotationSpeed.speed > 0) {
      g.rotation.y += rotationSpeed.speed * delta * 0.5
    }

    if (mouseEnabled) {
      g.rotation.y += (mouseTarget.current.x * 0.3 - g.rotation.y) * delta * 0.3
      g.rotation.x += (-mouseTarget.current.y * 0.2 - g.rotation.x) * delta * 0.3
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={particleSystem} />
    </group>
  )
}

export default function SceneModel(props: SceneModelProps) {
  return <AtmosphericParticles {...props} />
}
