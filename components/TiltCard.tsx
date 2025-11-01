"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  glareSize?: number; // قطر گِلِیر (px)
  glareOpacity?: number; // شدت
  glareFalloff?: number; // میزان محو شدن
};

/**
 * TiltCard (نسخه نهایی)
 * ✅ تیلت مغناطیسی + گِلِیر پویا
 * ✅ گِلِیر فقط وقتی موس روی کارت میاد ظاهر میشه
 * ✅ افکت لیفت نرم
 */
export default function TiltCard({
  children,
  className = "",
  glareSize = 120,
  glareOpacity = 0.22,
  glareFalloff = 55,
}: Props) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Normalized cursor position [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tilt transforms
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  // Glare position (درصدی)
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  // Gradient string with motion template
  const glareBg = useMotionTemplate`
    radial-gradient(${glareSize}px ${glareSize}px at ${glareX}% ${glareY}%,
      rgba(255,255,255,${glareOpacity}), transparent ${glareFalloff}%)
  `;

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function onEnter() {
    setHovered(true);
  }

  function onLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={prefersReduced ? undefined : onMove}
      onMouseEnter={prefersReduced ? undefined : onEnter}
      onMouseLeave={prefersReduced ? undefined : onLeave}
      style={
        prefersReduced
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      className={`relative rounded-3xl glass card-3d will-change-transform transition-transform duration-200 ${className}`}
      whileHover={prefersReduced ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      {/* Border aura */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.18)",
        }}
      />

      {/* Glare layer (visible only on hover) */}
      {!prefersReduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background: glareBg,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      )}

      {/* محتوا */}
      <div className="relative rounded-3xl overflow-hidden">{children}</div>
    </motion.div>
  );
}
