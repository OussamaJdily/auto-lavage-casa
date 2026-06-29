import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 800 }) {
  const points = useRef()
  const velocities = useMemo(() => {
    const v = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      v[i * 3] = (Math.random() - 0.5) * 0.01
      v[i * 3 + 1] = -Math.random() * 0.02 - 0.005
      v[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }
    return v
  }, [count])

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = Math.random() * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    const pos = points.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      if (pos[i * 3 + 1] < -2) {
        pos[i * 3] = (Math.random() - 0.5) * 14
        pos[i * 3 + 1] = 8
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00d4ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function WavePlane() {
  const meshRef = useRef()
  const materialRef = useRef()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#001a33') },
      uColorB: { value: new THREE.Color('#003366') },
    }),
    []
  )

  return (
    <mesh ref={meshRef} position={[0, -3, -2]} rotation={[-Math.PI / 6, 0, 0]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          varying float vElevation;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = sin(pos.x * 0.5 + uTime) * 0.3
                            + cos(pos.y * 0.7 + uTime * 0.8) * 0.3
                            + sin((pos.x + pos.y) * 0.3 + uTime * 0.5) * 0.2;
            pos.z += elevation;
            vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          uniform float uTime;
          varying vec2 vUv;
          varying float vElevation;
          void main() {
            float mixValue = (vElevation + 0.5) * 0.5;
            vec3 color = mix(uColorA, uColorB, mixValue);
            float alpha = 0.6 + vElevation * 0.4;
            gl_FragColor = vec4(color, alpha * 0.3);
          }
        `}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function WaterBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <Particles count={600} />
      <WavePlane />
    </Canvas>
  )
}