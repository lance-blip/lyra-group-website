"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";
import { CanvasHost } from "./CanvasHost";

function EmberShape() {
  const mesh = useRef<Mesh>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((_, delta) => {
    if (!mesh.current || reduce) return;
    mesh.current.rotation.y += delta * 0.28;
    mesh.current.rotation.x += delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} color="#fff4e8" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#c4784a" />
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh ref={mesh} scale={1.35}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#c4784a"
            metalness={0.55}
            roughness={0.28}
            emissive="#d4a574"
            emissiveIntensity={0.18}
          />
        </mesh>
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#d4a574" wireframe transparent opacity={0.28} />
        </mesh>
      </Float>
    </>
  );
}

export function EmberPolyhedron({ className = "" }: { className?: string }) {
  return (
    <CanvasHost className={className} height={300}>
      <EmberShape />
    </CanvasHost>
  );
}
