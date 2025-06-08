import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box } from "@react-three/drei"

export default function FloatingObjects() {
  const group = useRef()
  const group2 = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.001
  })

  useFrame(() => {
    group2.current.rotation.y -= 0.001
  })

  return (
    <>
      <group ref={group2}>
        <Sphere args={[0.05, 32, 32]} position={[0, 3, -2]}>
          <meshStandardMaterial
            color={"#fff"}
            roughness={0.9}
            metalness={0.3}
            emissive="#fff" // 💡 color of the emission
            emissiveIntensity={2}
          />
        </Sphere>

        <Sphere args={[0.005, 32, 32]} position={[-1, 0.5, -1]}>
          <meshStandardMaterial
            color={"#fff"}
            roughness={0.9}
            metalness={0.3}
            emissive="#fff" // 💡 color of the emission
            emissiveIntensity={2}
          />
        </Sphere>
      </group>

      <group ref={group}>
        <Sphere args={[0.1, 32, 32]} position={[-1, -0.5, -1]}>
          <meshStandardMaterial
            color={"#fff"}
            roughness={0.9}
            metalness={0.3}
            emissive="#fff" // 💡 color of the emission
            emissiveIntensity={2}
          />
        </Sphere>

        <Sphere args={[0.025, 32, 32]} position={[1.2, -0.5, -1]}>
          <meshStandardMaterial
            color={"#fff"}
            roughness={0.9}
            metalness={0.3}
            emissive="#fff" // 💡 color of the emission
            emissiveIntensity={2}
          />
        </Sphere>
      </group>
    </>
  )
}
