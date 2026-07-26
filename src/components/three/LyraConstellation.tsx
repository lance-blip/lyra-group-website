"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group } from "three";
import { CanvasHost } from "./CanvasHost";

/**
 * Stylised Lyra constellation (Vega + harp outline) — not a star atlas,
 * a brand-forward wireframe that reads as "constellation guidance".
 */
const LYRA_POINTS: [number, number, number][] = [
  [0, 1.35, 0], // Vega
  [-0.55, 0.55, 0.1],
  [0.55, 0.55, -0.1],
  [-0.85, -0.15, 0.05],
  [0.85, -0.15, -0.05],
  [-0.35, -0.95, 0.08],
  [0.35, -0.95, -0.08],
  [0, -1.45, 0],
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [5, 7],
  [6, 7],
  [3, 4],
];

function StarDots({ points }: { points: [number, number, number][] }) {
  return (
    <group>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i === 0 ? 0.09 : 0.055, 16, 16]} />
          <meshStandardMaterial
            color={i === 0 ? "#f0d2b0" : "#d4a574"}
            emissive={i === 0 ? "#d4a574" : "#c4784a"}
            emissiveIntensity={i === 0 ? 0.9 : 0.55}
            metalness={0.2}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function ConstellationScene({ subtle = false }: { subtle?: boolean }) {
  const g = useRef<Group>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = useMemo(
    () =>
      EDGES.map(([a, b]) => [LYRA_POINTS[a], LYRA_POINTS[b]] as [
        [number, number, number],
        [number, number, number],
      ]),
    [],
  );

  useFrame((state) => {
    if (!g.current || reduce) return;
    g.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.18;
    g.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <>
      <ambientLight intensity={subtle ? 0.35 : 0.5} />
      <pointLight position={[2, 2, 3]} intensity={0.7} color="#d4a574" />
      <group ref={g} scale={subtle ? 1.15 : 1.35}>
        <StarDots points={LYRA_POINTS} />
        {lines.map((pts, i) => (
          <Line
            key={i}
            points={pts}
            color="#d4a574"
            lineWidth={1.5}
            transparent
            opacity={subtle ? 0.45 : 0.7}
          />
        ))}
      </group>
    </>
  );
}

export function LyraConstellation({
  className = "",
  height = 260,
  subtle = false,
}: {
  className?: string;
  height?: number;
  subtle?: boolean;
}) {
  return (
    <CanvasHost className={className} height={height}>
      <ConstellationScene subtle={subtle} />
    </CanvasHost>
  );
}
