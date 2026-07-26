"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { CanvasHost } from "./CanvasHost";

/**
 * True Lyra asterism (simplified sky projection):
 * Vega (α Lyr) brightest, plus the parallelogram / trapezoid
 * (ζ, ε, β, γ Lyrae) that makes the constellation readable at a glance.
 *
 * Coordinates are brand-space, not RA/Dec — proportionally faithful.
 */
const LYRA_STARS: {
  id: string;
  pos: [number, number, number];
  r: number;
  bright?: boolean;
}[] = [
  { id: "vega", pos: [0.05, 1.35, 0.05], r: 0.11, bright: true }, // α
  { id: "zeta", pos: [-0.85, 0.15, 0.08], r: 0.06 }, // ζ — top-left of parallelogram
  { id: "epsilon", pos: [0.95, 0.28, -0.06], r: 0.055 }, // ε — top-right
  { id: "beta", pos: [-0.72, -1.05, 0.04], r: 0.065 }, // β — bottom-left
  { id: "gamma", pos: [0.78, -0.95, -0.04], r: 0.06 }, // γ — bottom-right
];

/** Edges: Vega → top of parallelogram, then the trapezoid loop */
const EDGES: [number, number][] = [
  [0, 1], // Vega – ζ
  [0, 2], // Vega – ε
  [1, 2], // ζ – ε (top)
  [1, 3], // ζ – β (left)
  [2, 4], // ε – γ (right)
  [3, 4], // β – γ (bottom)
];

function StarPoints() {
  const mats = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mats.current.forEach((mesh, i) => {
      if (!mesh) return;
      const base = LYRA_STARS[i]?.bright ? 1.05 : 0.7;
      const pulse = base + Math.sin(t * 1.6 + i * 0.9) * 0.22;
      const mat = mesh.material as { emissiveIntensity?: number };
      if (mat && typeof mat.emissiveIntensity === "number") {
        mat.emissiveIntensity = pulse;
      }
      const s = 1 + Math.sin(t * 1.4 + i) * 0.06;
      mesh.scale.setScalar(s);
    });
  });

  return (
    <group>
      {LYRA_STARS.map((star, i) => (
        <mesh
          key={star.id}
          position={star.pos}
          ref={(m) => {
            if (m) mats.current[i] = m;
          }}
        >
          <sphereGeometry args={[star.r, 20, 20]} />
          <meshStandardMaterial
            color={star.bright ? "#f0d2b0" : "#d4a574"}
            emissive={star.bright ? "#d4a574" : "#c4784a"}
            emissiveIntensity={star.bright ? 1.0 : 0.65}
            metalness={0.25}
            roughness={0.35}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function ConstellationScene({
  hero = false,
}: {
  hero?: boolean;
}) {
  const g = useRef<Group>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = useMemo(
    () =>
      EDGES.map(
        ([a, b]) =>
          [LYRA_STARS[a].pos, LYRA_STARS[b].pos] as [
            [number, number, number],
            [number, number, number],
          ],
      ),
    [],
  );

  useFrame((state) => {
    if (!g.current || reduce) return;
    // Slow continuous Y rotation + gentle breath on X
    g.current.rotation.y = state.clock.elapsedTime * 0.12;
    g.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.1;
  });

  const scale = hero ? 1.55 : 1.35;

  return (
    <>
      <ambientLight intensity={hero ? 0.28 : 0.45} />
      <pointLight position={[2.2, 2.4, 3]} intensity={0.85} color="#d4a574" />
      <pointLight position={[-2, -1, 2]} intensity={0.35} color="#8fa4c8" />
      <group ref={g} scale={scale}>
        <StarPoints />
        {lines.map((pts, i) => (
          <Line
            key={i}
            points={pts}
            color="#1B2A4A"
            lineWidth={hero ? 1.25 : 1.5}
            transparent
            opacity={hero ? 0.55 : 0.65}
          />
        ))}
        {/* Soft champagne hairline over indigo for depth on dark hero */}
        {hero
          ? lines.map((pts, i) => (
              <Line
                key={`glow-${i}`}
                points={pts}
                color="#d4a574"
                lineWidth={0.6}
                transparent
                opacity={0.22}
              />
            ))
          : null}
      </group>
    </>
  );
}

export function LyraConstellation({
  className = "",
  height = 260,
  subtle = false,
  hero = false,
}: {
  className?: string;
  height?: number | string;
  subtle?: boolean;
  /** Larger scale + slower spin for homepage hero focal */
  hero?: boolean;
}) {
  return (
    <CanvasHost
      className={className}
      height={height}
      // Hero still mounts on mobile — lightweight 5 spheres + lines
      desktopOnly={false}
    >
      <ConstellationScene hero={hero || subtle} />
    </CanvasHost>
  );
}
