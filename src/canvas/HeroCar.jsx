import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function CarModel() {
  const groupRef = useRef()
  const wheelsRef = useRef([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
    wheelsRef.current.forEach((wheel) => {
      if (wheel) wheel.rotation.x += 0.02
    })
  })

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#0a0a0d',
        metalness: 0.95,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.5,
      }),
    []
  )

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#00d4ff',
        metalness: 0.9,
        roughness: 0.2,
        emissive: '#0088cc',
        emissiveIntensity: 0.4,
      }),
    []
  )

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#001a2e',
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.6,
        opacity: 0.5,
        transparent: true,
      }),
    []
  )

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1}>
      {/* Lower body */}
      <mesh material={bodyMaterial} position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[4.2, 0.6, 1.8]} />
      </mesh>

      {/* Hood - sloped */}
      <mesh material={bodyMaterial} position={[1.4, 0.7, 0]} rotation={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[1.6, 0.3, 1.7]} />
      </mesh>

      {/* Trunk */}
      <mesh material={bodyMaterial} position={[-1.5, 0.7, 0]} rotation={[0, 0, 0.08]} castShadow>
        <boxGeometry args={[1.3, 0.35, 1.7]} />
      </mesh>

      {/* Cabin / roof */}
      <mesh material={bodyMaterial} position={[-0.1, 1.1, 0]} castShadow>
        <boxGeometry args={[2.1, 0.5, 1.55]} />
      </mesh>

      {/* Windshield */}
      <mesh material={glassMaterial} position={[0.95, 1.05, 0]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.05, 0.65, 1.5]} />
      </mesh>

      {/* Rear window */}
      <mesh material={glassMaterial} position={[-1.05, 1.05, 0]} rotation={[0, 0, 0.55]}>
        <boxGeometry args={[0.05, 0.65, 1.5]} />
      </mesh>

      {/* Side windows */}
      <mesh material={glassMaterial} position={[0.1, 1.12, 0.78]}>
        <boxGeometry args={[1.5, 0.4, 0.04]} />
      </mesh>
      <mesh material={glassMaterial} position={[0.1, 1.12, -0.78]}>
        <boxGeometry args={[1.5, 0.4, 0.04]} />
      </mesh>

      {/* Front grille */}
      <mesh material={accentMaterial} position={[2.05, 0.4, 0]}>
        <boxGeometry args={[0.1, 0.25, 1.4]} />
      </mesh>

      {/* Headlights */}
      <mesh position={[2.08, 0.55, 0.7]}>
        <boxGeometry args={[0.05, 0.15, 0.4]} />
        <meshPhysicalMaterial color="#ffffff" emissive="#88ccff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[2.08, 0.55, -0.7]}>
        <boxGeometry args={[0.05, 0.15, 0.4]} />
        <meshPhysicalMaterial color="#ffffff" emissive="#88ccff" emissiveIntensity={2} />
      </mesh>

      {/* Tail lights */}
      <mesh position={[-2.08, 0.6, 0.7]}>
        <boxGeometry args={[0.05, 0.12, 0.45]} />
        <meshPhysicalMaterial color="#ff2244" emissive="#ff0033" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[-2.08, 0.6, -0.7]}>
        <boxGeometry args={[0.05, 0.12, 0.45]} />
        <meshPhysicalMaterial color="#ff2244" emissive="#ff0033" emissiveIntensity={1.5} />
      </mesh>

      {/* Wheels */}
      {[
        [1.35, 0, 0.95],
        [1.35, 0, -0.95],
        [-1.35, 0, 0.95],
        [-1.35, 0, -0.95],
      ].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh
            ref={(el) => (wheelsRef.current[i] = el)}
            rotation={[0, 0, Math.PI / 2]}
            castShadow
          >
            <cylinderGeometry args={[0.42, 0.42, 0.32, 24]} />
            <meshPhysicalMaterial color="#0a0a0d" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.34, 12]} />
            <meshPhysicalMaterial color="#262630" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Underglow */}
      <pointLight position={[0, 0.05, 0]} intensity={2} color="#00d4ff" distance={4} />
    </group>
  )
}

export default function HeroCar() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2.5, 5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 4, -5]} intensity={0.6} color="#88ccff" />
        <spotLight position={[0, 6, 0]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CarModel />
        </Float>

        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.6}
          scale={10}
          blur={2.5}
          far={4}
          color="#000000"
        />

        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  )
}