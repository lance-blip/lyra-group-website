"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { CanvasHost } from "./CanvasHost";

function Orb({
  position,
  delay,
  color = "#1b2a4a",
}: {
  position: [number, number, number];
  delay: number;
  color?: string;
}) {
  const g = useRef<Group>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((state) => {
    if (!g.current || reduce) return;
    const t = state.clock.elapsedTime;
    const appear = Math.min(1, Math.max(0, (t - delay) / 0.8));
    const ease = 1 - Math.pow(1 - appear, 3);
    g.current.position.y = position[1] - (1 - ease) * 1.4;
    g.current.scale.setScalar(0.55 + ease * 0.45);
    g.current.rotation.y = t * 0.35 + delay;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.35}>
      <group ref={g} position={position}>
        <mesh>
          <sphereGeometry args={[0.72, 32, 32]} />
          <meshStandardMaterial
            color={color}
            metalness={0.45}
            roughness={0.35}
            emissive="#c4784a"
            emissiveIntensity={0.22}
          />
        </mesh>
        <mesh scale={1.08}>
          <sphereGeometry args={[0.72, 16, 16]} />
          <meshBasicMaterial color="#d4a574" wireframe transparent opacity={0.22} />
        </mesh>
        {/* centre ember core */}
        <mesh scale={0.28}>
          <sphereGeometry args={[0.72, 16, 16]} />
          <meshBasicMaterial color="#f0d2b0" />
        </mesh>
      </group>
    </Float>
  );
}

function OrbsScene() {
  const orbs = useMemo(
    () =>
      [
        { position: [-2.1, 0, 0] as [number, number, number], delay: 0.1 },
        { position: [0, 0.15, 0] as [number, number, number], delay: 0.45 },
        { position: [2.1, 0, 0] as [number, number, number], delay: 0.8 },
      ] as const,
    [],
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.05} color="#fff6ea" />
      <pointLight position={[0, -2, 2]} intensity={0.55} color="#d4a574" />
      {orbs.map((o, i) => (
        <Orb key={i} {...o} />
      ))}
    </>
  );
}

export function PlanOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <CanvasHost height={220}>
        <OrbsScene />
      </CanvasHost>
      {/* HTML labels — more reliable than drei Text without a bundled font */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-[4.5rem] font-mono text-sm font-bold text-lyra-accent-strong md:gap-28">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>
    </div>
  );
}
