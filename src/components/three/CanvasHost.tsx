"use client";

import dynamic from "next/dynamic";
import { ComponentType, ReactNode, Suspense, useEffect, useState } from "react";

type CanvasHostProps = {
  className?: string;
  /** Min height so layout doesn't collapse before R3F mounts */
  height?: number | string;
  children: ReactNode;
  /** Disable on mobile if needed for perf — default false */
  desktopOnly?: boolean;
};

/**
 * Lazy R3F Canvas wrapper — only mounts on client after idle,
 * never blocks first paint. Falls back to empty shell if WebGL unavailable.
 */
const LazyCanvas = dynamic(
  () =>
    import("@react-three/fiber").then((mod) => {
      const { Canvas } = mod;
      function BoundCanvas({
        children,
        className,
      }: {
        children: ReactNode;
        className?: string;
      }) {
        return (
          <Canvas
            className={className}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            camera={{ position: [0, 0, 5], fov: 42 }}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          >
            {children}
          </Canvas>
        );
      }
      return BoundCanvas as ComponentType<{ children: ReactNode; className?: string }>;
    }),
  { ssr: false, loading: () => null },
);

export function CanvasHost({
  className = "",
  height = 280,
  children,
  desktopOnly = false,
}: CanvasHostProps) {
  const [ready, setReady] = useState(false);
  const [allow, setAllow] = useState(true);

  useEffect(() => {
    if (desktopOnly && window.matchMedia("(max-width: 767px)").matches) {
      setAllow(false);
      return;
    }

    let cancelled = false;
    const start = () => {
      if (!cancelled) setReady(true);
    };

    // Prefer idle callback; fall back to short timeout
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(start, { timeout: 1200 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }

    const t = window.setTimeout(start, 200);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [desktopOnly]);

  if (!allow) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
      aria-hidden
    >
      {ready ? (
        <Suspense fallback={null}>
          <LazyCanvas>{children}</LazyCanvas>
        </Suspense>
      ) : null}
    </div>
  );
}
