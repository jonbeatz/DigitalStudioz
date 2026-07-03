'use client'

import React, { Suspense } from 'react'
import { Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'
import * as THREE from 'three'
import type { HdrPreset, BloomPreset, CameraPreset, RotationPreset } from '../types'
import SceneModel from './SceneModel'

interface Scene3DProps {
  modelPath: string
  defaultScale: number
  scaleScrollFactor: number
  defaultY: number
  yScrollFactor: number
  hdrPreset: HdrPreset
  bloomPreset: BloomPreset
  cameraMode: CameraPreset
  mouseEnabled: boolean
  onRotationSpeed: RotationPreset
  showContactShadows?: boolean
}

export function Scene3D(props: Scene3DProps) {
  return (
    <>
      {/* Very dim ambient and directional — atmosphere only */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#f4f4f5" />
      <directionalLight position={[-5, 3, -5]} intensity={0.2} color="#c8a45c" />
      <directionalLight position={[0, 5, 3]} intensity={0.1} color="#d4b872" />

      <Suspense fallback={null}>
        <SceneModel
          modelPath={props.modelPath}
          defaultScale={props.defaultScale}
          scaleScrollFactor={props.scaleScrollFactor}
          defaultY={props.defaultY}
          yScrollFactor={props.yScrollFactor}
          rotationSpeed={props.onRotationSpeed}
          cameraPreset={props.cameraMode}
          mouseEnabled={props.mouseEnabled}
        />
        <Environment files={props.hdrPreset.file} blur={0.4} />
        {props.showContactShadows && (
          <ContactShadows position={[0, -1.5, 0]} opacity={0.2} scale={8} blur={2.5} far={4} />
        )}
      </Suspense>

      {/* Subtle bloom */}
      {props.bloomPreset.intensity > 0 && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.05}
            intensity={props.bloomPreset.intensity * 0.5}
            mipmapBlur
            kernelSize={KernelSize.MEDIUM}
          />
        </EffectComposer>
      )}
    </>
  )
}
