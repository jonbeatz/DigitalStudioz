'use client'

import { useMemo, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { RotationPreset, CameraPreset } from '../types'
import { ACCENT, SECONDARY } from '../types'

interface SceneModelProps {
  modelPath: string
  defaultScale: number
  scaleScrollFactor: number
  defaultY: number
  yScrollFactor: number
  rotationSpeed: RotationPreset
  cameraMode: CameraPreset
  mouseEnabled: boolean
}

// Subtle procedural abstract geometry — atmospheric background, not a hero
function ProceduralModel() {
  const groupRefLocal = useRef<THREE.Group>(null!)
  const sphereRefs = useRef<THREE.Object3D[]>([])

  const geometry = useMemo(() => {
    const group = new THREE.Group()

    // Central icosahedron — very dim
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.4, 1),
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ACCENT),
        emissive: new THREE.Color(ACCENT),
        emissiveIntensity: 0.15,
        metalness: 0.6,
        roughness: 0.4,
        transparent: true,
        opacity: 0.2,
        wireframe: true,
      })
    )
    ico.position.set(0, 0, 0)
    ico.userData.isCore = true
    group.add(ico)

    // Inner core — just a tiny glow
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 12, 12),
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(SECONDARY),
        emissive: new THREE.Color(SECONDARY),
        emissiveIntensity: 0.1,
        transparent: true,
        opacity: 0.15,
      })
    )
    core.position.set(0, 0, 0)
    group.add(core)

    // Sparse orbiting particles
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 6, 6),
        new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(ACCENT),
          emissive: new THREE.Color(ACCENT),
          emissiveIntensity: 0.3,
          transparent: true,
          opacity: 0.2,
        })
      )
      sphere.position.set(Math.cos(angle) * 0.8, Math.sin(angle * 2) * 0.3, Math.sin(angle) * 0.8)
      sphere.userData = { angle, radius: 0.8, speed: 0.15 + Math.random() * 0.1, orbitIndex: i }
      sphereRefs.current.push(sphere)
      group.add(sphere)
    }

    return group
  }, [])

  useFrame((state, delta) => {
    geometry.children.forEach((child) => {
      if (child.userData?.angle !== undefined) {
        const data = child.userData
        data.angle += delta * data.speed
        child.position.x = Math.cos(data.angle) * data.radius
        child.position.z = Math.sin(data.angle) * data.radius
        child.position.y = Math.sin(data.angle * 2) * 0.3
      }
      if (child.userData?.isCore && child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshPhysicalMaterial
        if (mat) {
          mat.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
        }
      }
    })
  })

  return <primitive object={geometry} />
}

export function SceneModel({
  modelPath, defaultScale, scaleScrollFactor, defaultY, yScrollFactor,
  rotationSpeed, cameraMode, mouseEnabled,
}: SceneModelProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })
  const progressRef = useRef(0)

  // Track scroll progress
  useEffect(() => {
    const update = () => {
      if (typeof window === 'undefined') return
      const total = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current = total > 0 ? window.scrollY / total : 0
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Mouse parallax — subtle
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  useFrame((state, delta) => {
    const g = groupRef.current
    if (!g) return
    const p = progressRef.current

    // Very slow rotation
    g.rotation.y += delta * rotationSpeed.speed * 0.3
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.02 + p * 0.04

    // Subtle mouse parallax
    if (mouseEnabled) {
      g.rotation.z += (mouseRef.current.x * 0.01 - g.rotation.z) * 0.02
    }

    // Scale and Y position
    const scale = Math.max(0.1, defaultScale + p * scaleScrollFactor)
    g.scale.setScalar(scale)
    g.position.y = defaultY + p * yScrollFactor

    // Camera orbit — very restrained
    if (cameraMode.mode === 'full') {
      const orbitAngle = p * Math.PI * 2
      camera.position.x = Math.sin(orbitAngle) * 6
      camera.position.z = Math.cos(orbitAngle) * 6
      camera.position.y = 1.0 - p * 0.3
      camera.lookAt(0, 0, 0)
    } else if (cameraMode.mode === 'slow') {
      const orbitAngle = p * Math.PI
      camera.position.x = Math.sin(orbitAngle) * 5
      camera.position.z = Math.cos(orbitAngle) * 5
      camera.position.y = 0.6
      camera.lookAt(0, 0, 0)
    } else {
      camera.position.x = 0
      camera.position.z = 6
      camera.position.y = 0.3
      camera.lookAt(0, 0, 0)
    }
  })

  return (
    <group ref={groupRef}>
      <ProceduralModel />
    </group>
  )
}
