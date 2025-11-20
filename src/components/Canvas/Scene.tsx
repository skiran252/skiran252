import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, Float, MeshTransmissionMaterial, Environment, Lightformer, Sparkles, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function GlassShapes() {
    return (
        <group>
            {/* Main Centerpiece - Large Torus */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <torusGeometry args={[2.5, 0.8, 16, 100]} />
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        thickness={3}
                        roughness={0.2}
                        transmission={0.6}
                        ior={1.5}
                        chromaticAberration={1}
                        anisotropy={0.1} // Reduced
                        distortion={0.2}
                        distortionScale={0.5}
                        temporalDistortion={0.1}
                        color="#c7d2fe"
                        resolution={512} // Optimized
                        samples={4} // Optimized
                    />
                </mesh>
            </Float>

            {/* Floating Crystal - Icosahedron */}
            <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-3, 2, -2]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        thickness={2}
                        roughness={0.2}
                        transmission={0.6}
                        ior={1.5}
                        chromaticAberration={0.5}
                        anisotropy={0.1} // Reduced
                        color="#fbcfe8"
                        resolution={512} // Optimized
                        samples={4} // Optimized
                    />
                </mesh>
            </Float>

            {/* Floating Sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[3, -1, -3]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <MeshTransmissionMaterial
                        backside
                        thickness={2}
                        roughness={0.2}
                        transmission={0.6}
                        ior={1.2}
                        chromaticAberration={0.8}
                        anisotropy={0.1} // Reduced
                        color="#bae6fd"
                        resolution={512} // Optimized
                        samples={4} // Optimized
                    />
                </mesh>
            </Float>
        </group>
    );
}



function NeuralNetwork() {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 50; i++) {
            p.push(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
        }
        return new Float32Array(p);
    }, []);

    return (
        <group>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length / 3}
                        args={[points, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.1}
                    color="#818cf8"
                    sizeAttenuation={true}
                    transparent
                    opacity={0.8}
                />
            </points>
            {/* Abstract connections */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 0, 0]} scale={2}>
                    <icosahedronGeometry args={[1, 2]} />
                    <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.1} />
                </mesh>
            </Float>
        </group>
    );
}

function AICore() {
    const group = useRef<THREE.Group>(null!);

    useFrame((_state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.5;
            group.current.rotation.z += delta * 0.2;
        }
    });

    return (
        <group ref={group}>
            {/* Core */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Glowing Eye */}
            <mesh position={[0, 0, 1.4]}>
                <circleGeometry args={[0.3, 32]} />
                <meshBasicMaterial color="#f43f5e" toneMapped={false} />
            </mesh>
            <pointLight position={[0, 0, 2]} color="#f43f5e" intensity={2} distance={5} />

            {/* Orbiting Rings */}
            <group rotation={[Math.PI / 3, 0, 0]}>
                <mesh>
                    <torusGeometry args={[2.2, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#f43f5e" emissive="#f43f5e" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </group>
            <group rotation={[-Math.PI / 3, 0, 0]}>
                <mesh>
                    <torusGeometry args={[2.8, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </group>
        </group>
    );
}

function Narrative() {
    const scroll = useScroll();
    const prismRef = useRef<THREE.Group>(null!);
    const neuralRef = useRef<THREE.Group>(null!);
    const aiRef = useRef<THREE.Group>(null!);

    useFrame(() => {
        const r1 = scroll.range(0, 0.35); // Prism visibility - stays longer
        const r2 = scroll.curve(0.25, 0.5); // Neural visibility - overlaps
        const r3 = scroll.range(0.6, 0.4); // AI visibility - starts earlier

        if (prismRef.current) {
            // Prism moves up but stays visible longer
            prismRef.current.position.y = r1 * 8;
            prismRef.current.scale.setScalar(1 - r1 * 0.8); // Don't disappear completely
            prismRef.current.rotation.x = r1 * 0.5;
        }

        if (neuralRef.current) {
            // Neural network pulses and rotates
            neuralRef.current.scale.setScalar(r2 * 1.8);
            neuralRef.current.rotation.y += 0.005;
            neuralRef.current.position.z = -2 + Math.sin(scroll.offset * Math.PI) * 2;
        }

        if (aiRef.current) {
            // AI Core moves in from back
            aiRef.current.position.z = -8 + (r3 * 8);
            aiRef.current.scale.setScalar(r3);
            aiRef.current.rotation.y += 0.02;
        }
    });

    return (
        <>
            <group ref={prismRef}>
                <GlassShapes />
            </group>

            <group ref={neuralRef} scale={0}>
                <NeuralNetwork />
            </group>

            <group ref={aiRef} scale={0} position={[0, 0, -5]}>
                <AICore />
            </group>
        </>
    );
}

export default function Scene({ children }: { children: React.ReactNode }) {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0080" />

            <Environment preset="city">
                <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
            </Environment>

            <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.2} color="#ffffff" />

            <ScrollControls pages={5} damping={0.3}>
                <Narrative />
                <Scroll html style={{ width: '100%', height: '100%' }}>
                    {children}
                </Scroll>
            </ScrollControls>

            <EffectComposer>
                <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                <ChromaticAberration offset={[0.002, 0.002]} />
            </EffectComposer>
        </Canvas>
    );
}
