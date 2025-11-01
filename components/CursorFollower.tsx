"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type Ripple = { id: number; x: number; y: number };

function isTouchOrCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  const hasTouch =
    "ontouchstart" in window ||
    (navigator as any).maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0;
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  return hasTouch || coarse;
}

export default function CursorFollower() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  const ringX = useSpring(x, { stiffness: 340, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 340, damping: 32, mass: 0.6 });
  const dotX  = useSpring(x, { stiffness: 560, damping: 36, mass: 0.4 });
  const dotY  = useSpring(y, { stiffness: 560, damping: 36, mass: 0.4 });

  useEffect(() => {
    setIsCoarse(isTouchOrCoarsePointer());
    const mm = window.matchMedia?.("(pointer: coarse)");
    const onChange = () => setIsCoarse(isTouchOrCoarsePointer());
    mm?.addEventListener?.("change", onChange);
    return () => mm?.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled || isCoarse) return;
    document.body.classList.add("custom-cursor");
    return () => document.body.classList.remove("custom-cursor");
  }, [enabled, isCoarse]);

  useEffect(() => {
    if (prefersReduced || isCoarse) return;

    let raf = 0;

    const moveHandler = (e: MouseEvent) => {
      const nx = e.clientX, ny = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          x.set(nx); y.set(ny); raf = 0;
        });
      }
      if (!enabled) setEnabled(true);
    };

    const downHandler = (e: MouseEvent) => {
      const id = ++rippleIdRef.current;
      setRipples(prev => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    };

    window.addEventListener("mousemove", moveHandler, { passive: true });
    window.addEventListener("mousedown", downHandler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mousedown", downHandler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y, prefersReduced, isCoarse, enabled]);

  if (prefersReduced || isCoarse) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] cursor-layer mix-blend-screen"
      aria-hidden
    >
      {/* ring */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute" animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <div className="cursor-ring w-[28px] h-[28px] -ml-[14px] -mt-[14px] rounded-full" />
      </motion.div>

      {/* dot */}
      <motion.div style={{ x: dotX, y: dotY }} className="absolute" animate={{ opacity: 1 }} transition={{ duration: 0.18 }}>
        <div className="cursor-dot w-2 h-2 -ml-1 -mt-1 rounded-full" />
      </motion.div>

      {/* click ripples */}
      {ripples.map(r => (
        <motion.span
          key={r.id}
          className="absolute rounded-full cursor-ripple"
          style={{ left: r.x, top: r.y, width: 40, height: 40, marginLeft: -20, marginTop: -20 }}
          initial={{ opacity: 0.55, scale: 0.6 }}
          animate={{ opacity: 0, scale: 2.3 }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}
