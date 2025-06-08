"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import FloatingObjects from "@/components/threejs/floating-objects"
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

export default function BackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[2, 2, 5]} intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} castShadow />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <FloatingObjects />
      </Float>
      <EffectComposer>
        <Bloom luminanceThreshold={10} intensity={1} />
        <Noise opacity={0.02} />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0015, 0.0012]}
        />
      </EffectComposer>
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}
