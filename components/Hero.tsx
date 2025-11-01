"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(34,197,94,.45)" }}
      whileTap={{ y: 0 }}
      className="button-3d bg-accent-600 px-5 py-3 rounded-2xl font-semibold"
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-40">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -z-10 w-[1200px] h-[1200px] bg-radial rounded-full left-1/2 -translate-x-1/2 top-[-30%] blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-sm text-slate-300">
          <Sparkles className="w-4 h-4" />
          Available for freelance & full-time
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
          Building <span className="gradient-text">high‑impact</span> interactive web experiences.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
          I craft premium, animated, and conversion‑driven websites using Next.js, TypeScript, Tailwind and Framer Motion.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="px-6 py-3 rounded-2xl button-3d bg-brand-600 inline-flex items-center gap-2">
            View work <ArrowRight className="w-4 h-4" />
          </a>
          <MagneticButton>Get a quote</MagneticButton>
        </div>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-brand-500/30 blur-2xl left-8 top-24"
        animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-emerald-500/30 blur-2xl right-10 top-10"
        animate={{ y: [0, 16, 0], x: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
