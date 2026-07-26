"use client";

import dynamic from "next/dynamic";

/** All 3D scenes are client-only + code-split — never in the SSR bundle path. */
export const EmberPolyhedron = dynamic(
  () => import("./EmberPolyhedron").then((m) => m.EmberPolyhedron),
  { ssr: false, loading: () => <div className="h-[300px] w-full" aria-hidden /> },
);

export const PlanOrbs = dynamic(
  () => import("./PlanOrbs").then((m) => m.PlanOrbs),
  { ssr: false, loading: () => <div className="h-[220px] w-full" aria-hidden /> },
);

export const LyraConstellation = dynamic(
  () => import("./LyraConstellation").then((m) => m.LyraConstellation),
  { ssr: false, loading: () => <div className="h-[260px] w-full" aria-hidden /> },
);
