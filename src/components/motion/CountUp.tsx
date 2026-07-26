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
 * Viewport-triggered count-up.
 *
 * Hardened against:
 * - React Strict Mode double-mount (RAF id in ref; restart-safe)
 * - Parent opacity:0 / transform (IO still sees layout boxes)
 * - Missed IO callbacks (scroll/resize + long safety net)
 * - Worker/hydration races (starts only after mount flag)
 */
export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  className,
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);
  const endRef = useRef(end);
  endRef.current = end;

  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const el = nodeRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cancelRaf = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const finish = () => {
      cancelRaf();
      setValue(endRef.current);
      setDone(true);
      startedRef.current = true;
    };

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (reduce) {
        finish();
        return;
      }

      // Restart from zero every successful trigger
      setDone(false);
      setValue(0);
      const target = endRef.current;
      const start = performance.now();
      const ms = Math.max(0.4, duration) * 1000;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(target * eased);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
          setDone(true);
          rafRef.current = 0;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const inView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      // Generous band — stats often sit mid-scroll inside transformed parents
      return rect.top < vh * 0.92 && rect.bottom > vh * 0.05;
    };

    if (inView()) animate();

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              animate();
              io?.disconnect();
              break;
            }
          }
        },
        {
          threshold: [0, 0.05, 0.1, 0.2],
          rootMargin: "0px 0px -5% 0px",
        },
      );
      io.observe(el);
    }

    const onScrollOrResize = () => {
      if (!startedRef.current && inView()) {
        animate();
        window.removeEventListener("scroll", onScrollOrResize, true);
        window.removeEventListener("resize", onScrollOrResize);
      }
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true, capture: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Absolute safety — never leave R0 on screen
    const safety = window.setTimeout(() => {
      if (!startedRef.current) finish();
      else if (!done) {
        // Animation started but stalled
        finish();
      }
    }, 3500);

    // Extra belt: if still zero after 6s, force end
    const hard = window.setTimeout(finish, 6000);

    return () => {
      io?.disconnect();
      window.clearTimeout(safety);
      window.clearTimeout(hard);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      cancelRaf();
      // Allow re-run after Strict Mode cleanup / remount
      startedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `done` read only inside timeout
  }, [mounted, end, duration]);

  const display = done ? end : value;
  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-ZA");

  return (
    <span
      ref={nodeRef}
      className={className}
      data-count-end={end}
      data-count-done={done ? "1" : "0"}
      data-count-mounted={mounted ? "1" : "0"}
      aria-label={`${prefix}${decimals > 0 ? end.toFixed(decimals) : end}${suffix}`}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
