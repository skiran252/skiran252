import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, Stars, Float, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
    const mesh = useRef<THREE.Points>(null!);

    // Generate random positions
    const particlesPosition = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        particlesPosition[i3] = (Math.random() - 0.5) * 10;
        particlesPosition[i3 + 1] = (Math.random() - 0.5) * 10;
        particlesPosition[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = time * 0.05;
        mesh.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00f3ff"
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function NeuralNetwork() {
    // Placeholder for a more complex neural network visualization
    // For now, using a group of floating nodes connected by lines could be cool, 
    // but let's start with a dynamic particle field representing "data".
    return (
        <group>
            <Particles count={2000} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial color="#7000ff" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
                <mesh position={[2, 1, -2]}>
                    <octahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#00f3ff" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>
            <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
                <mesh position={[-2, -1, -1]}>
                    <dodecahedronGeometry args={[0.6]} />
                    <meshStandardMaterial color="#00f3ff" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>
        </group>
    )
}

export default function Scene({ children }: { children: React.ReactNode }) {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000ff" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={500} scale={10} size={2} speed={0.4} opacity={0.5} color="#00f3ff" />

            <NeuralNetwork />

            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.5} />
            </EffectComposer>

            <ScrollControls pages={5} damping={0.3}>
                <Scroll>
                    {/* 3D objects that move with scroll can go here */}
                </Scroll>
                <Scroll html style={{ width: '100%', height: '100%' }}>
                    {children}
                </Scroll>
            </ScrollControls>
        </Canvas>
    );
}
