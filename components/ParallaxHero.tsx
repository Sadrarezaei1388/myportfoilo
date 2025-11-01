"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

type CTA = { href: string; label: string; variant?: "primary" | "ghost" };

type Props = {
  badge?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryCta?: CTA;   // View work
  secondaryCta?: CTA; // Get a quote
};

/* ---------- ViewWorkButton (متن پیش‌فرض، فلش با هاور) ---------- */
function ViewWorkButton({ href, label = "View work" }: { href: string; label?: string }) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative inline-flex items-center justify-center
                 h-[44px] min-w-[120px] rounded-2xl px-5
                 button-3d bg-brand-600 text-white focus:outline-none focus:ring-2 ring-brand-500
                 will-change-transform"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {/* نور سفید (sweep) روی هاور */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={false}
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <motion.span
          className="absolute -left-1/3 top-0 h-full w-1/3
                     bg-gradient-to-r from-white/0 via-white/28 to-white/0"
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: prefersReduced ? 0.4 : 0.75, ease: "easeInOut" }}
        />
      </motion.span>

      {/* مرکز دکمه: متن پیش‌فرض؛ فلش با هاور از بالا وارد می‌شود */}
      <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {hovered ? (
            <motion.span
              key="icon"
              className="flex items-center justify-center"
              initial={{ y: -26, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <ArrowDown className="w-5 h-5 drop-shadow" />
            </motion.span>
          ) : (
            <motion.span
              key="label"
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.a>
  );
}

/* ---------- QuoteButton (هاور: پس‌زمینه روشن + متن کاملاً سیاه) ---------- */
function QuoteButton({ href, label = "Get a quote" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center h-[44px] min-w-[120px]
                 rounded-2xl px-5 glass focus:outline-none focus:ring-2 ring-brand-500
                 transition-colors duration-200
                 hover:bg-white/85 light:hover:bg-white/90"
    >
      {/* متن: در هاور کاملاً سیاه شود */}
      <span
        className="
          opacity-90 transition-colors duration-150
          group-hover:text-black
          light:text-slate-800
        "
      >
        {label}
      </span>
    </a>
  );
}

export default function ParallaxHero({
  badge = "Available for freelance & full-time",
  title = "Building",
  highlight = "high-impact",
  subtitle = "I craft premium, animated, and conversion-driven websites using Next.js, TypeScript, Tailwind and Framer Motion.",
  primaryCta = { href: "#work", label: "View work", variant: "primary" },
  secondaryCta = { href: "#contact", label: "Get a quote", variant: "ghost" },
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  // پارالاکس موس
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.3 });
  const ry = useSpring(my, { stiffness: 120, damping: 20, mass: 0.3 });
  const orb1X = useTransform(rx, (v) => v * 12);
  const orb1Y = useTransform(ry, (v) => v * 10);
  const orb2X = useTransform(rx, (v) => v * -14);
  const orb2Y = useTransform(ry, (v) => v * 8);

  // عدم اتصال mousemove روی دیوایس لمسی یا reduced-motion
  const isTouchRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;

    isTouchRef.current =
      "ontouchstart" in window ||
      (navigator as any).maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;

    if (isTouchRef.current || prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX - w / 2) / w);
      my.set((e.clientY - h / 2) / h);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-40" aria-label="Hero">
      {/* Orbs پس‌زمینه */}
      <div className="absolute inset-0 pointer-events-none">
        {prefersReducedMotion ? (
          <>
            <div className="absolute w-40 h-40 rounded-full bg-brand-500/30 blur-2xl left-8 top-24" />
            <div className="absolute w-48 h-48 rounded-full bg-emerald-500/30 blur-2xl right-10 top-10" />
          </>
        ) : (
          <>
            <motion.div
              style={{ x: orb1X, y: orb1Y }}
              className="absolute w-40 h-40 rounded-full bg-brand-500/30 blur-2xl left-8 top-24 will-change-transform"
              aria-hidden="true"
            />
            <motion.div
              style={{ x: orb2X, y: orb2Y }}
              className="absolute w-48 h-48 rounded-full bg-emerald-500/30 blur-2xl right-10 top-10 will-change-transform"
              aria-hidden="true"
            />
          </>
        )}
      </div>

      {/* محتوا */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-4"
      >
        {!!badge && (
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm opacity-90
                       border border-white/20 glass relative overflow-hidden"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-white/10 to-transparent" />
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span className="relative">{badge}</span>
          </div>
        )}

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
          {title} <span className="gradient-text">{highlight}</span> interactive web experiences.
        </h1>

        {!!subtitle && (
          <p className="mt-6 text-lg md:text-xl opacity-80 max-w-2xl">
            {subtitle}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {primaryCta && <ViewWorkButton href={primaryCta.href} label={primaryCta.label} />}
          {secondaryCta && <QuoteButton href={secondaryCta.href} label={secondaryCta.label} />}
        </div>
      </motion.div>
    </section>
  );
}
