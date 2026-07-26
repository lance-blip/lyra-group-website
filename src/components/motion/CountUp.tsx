"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

/**
 * Viewport-triggered count-up using native IntersectionObserver.
 * Always lands on `end` — never stuck at 0 if the observer misses.
 */
export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setValue(end);
        setDone(true);
        return;
      }

      let raf = 0;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(end * eased);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setValue(end);
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    // Fallback: if already visible on mount (or observer fails), still animate
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      const cleanup = run();
      return typeof cleanup === "function" ? cleanup : undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);

    // Absolute safety: after 4s if never triggered, snap to end
    const safety = window.setTimeout(() => {
      if (!started.current) {
        setValue(end);
        setDone(true);
        started.current = true;
      }
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [end, duration]);

  const formatted =
    decimals > 0
      ? (done ? end : value).toFixed(decimals)
      : Math.round(done ? end : value).toLocaleString("en-ZA");

  return (
    <span ref={ref} className={className} data-count-end={end} data-count-done={done ? "1" : "0"}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
