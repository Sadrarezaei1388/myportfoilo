"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  FileDown,
  Globe2,
  MapPin,
  Sparkles,
  Mail,
} from "lucide-react";
import avatar from "@/public/IMG_0194 (1).jpeg"
import Image from "next/image";
type Metric = { label: string; value: string };

type Props = {
  name?: string;
  role?: string;
  location?: string;
  availability?: string;
  metrics?: Metric[];
  cvHref?: string;
};

export default function AboutProfileCard({
  name = "Sadra",
  role = "Full-stack Developer • Next.js / TS",
  location = "Brisbane, Australia",
  availability = "Available for freelance & full-time",
  metrics = [
    { label: "Years", value: "7+" },
    { label: "Projects", value: "40+" },
    { label: "CSAT", value: "98%" },
  ],
  cvHref = "/cv.pdf",
}: Props) {
  const reduced = useReducedMotion();

  const btnVariants = {
    rest: { y: 0 },
    hover: reduced ? { y: 0 } : { y: -2 },
  } as const;

  const textVariants = {
    rest: { opacity: 1 },
    hover: reduced ? { opacity: 1 } : { opacity: 0 },
  } as const;

  const iconVariants = {
    rest: { opacity: 0, scale: 0.6 },
    hover: reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 },
  } as const;

  const haloVariants = {
    rest: { background: "transparent" },
    hover: reduced
      ? { background: "transparent" }
      : {
          background:
            "radial-gradient(220px 140px at 50% 50%, rgba(255,255,255,0.18), transparent 60%)",
        },
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="relative rounded-3xl overflow-hidden"
    >
      {/* gradient ring frame */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          padding: 1,
          background:
            "linear-gradient(135deg, rgba(96,165,250,0.45), rgba(34,197,94,0.45))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className="relative rounded-3xl glass"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.06), 0 18px 48px rgba(0,0,0,0.14)",
        }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative w-14 h-14 rounded-2xl grid place-items-center glass">
              <Image src={avatar} alt="avatar"/>
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold truncate">{name}</h3>
                <BadgeCheck className="w-4 h-4 opacity-80" />
              </div>
              <p className="text-sm opacity-75 mt-0.5">{role}</p>
              <div className="flex items-center gap-2 text-sm opacity-85 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
                <span className="opacity-40">•</span>
                <Globe2 className="w-4 h-4" />
                <span>Available worldwide</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm glass border border-white/10">
            <Sparkles className="w-4 h-4" />
            <span>{availability}</span>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-white/10 light:bg-black/10" />

          {/* Metrics */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 p-3 text-center"
              >
                <div className="text-xl font-semibold leading-none">
                  {m.value}
                </div>
                <div className="text-xs opacity-70 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Value bullets */}
          <div className="mt-6 space-y-2">
            {[
              {
                t: "Type-safe, modular architecture",
                d: "Scalable mono-repos, clean boundaries, DX-first.",
              },
              {
                t: "Performance & accessibility",
                d: "Lighthouse-friendly, WCAG-aware, real-world budgets.",
              },
              {
                t: "Interactive storytelling",
                d: "Meaningful motion with Framer Motion & RSC.",
              },
            ].map((it) => (
              <div
                key={it.t}
                className="flex items-start gap-3 rounded-xl px-3 py-2 bg-white/5 light:bg-black/5 border border-white/10"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-500" />
                <div>
                  <div className="text-sm font-medium">{it.t}</div>
                  <div className="text-sm opacity-80">{it.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Download CV — دقیقاً مثل دکمه View work در Hero */}
            <motion.a
              href={cvHref}
              className="relative inline-flex items-center justify-center px-4 py-3 rounded-2xl button-3d bg-brand-600 text-white overflow-hidden focus:outline-none focus:ring-2 ring-brand-500"
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="rest"
              variants={btnVariants}
            >
              {/* متن */}
              <motion.span
                className="relative z-20"
                variants={textVariants}
                transition={{ duration: 0.18 }}
              >
                Download CV
              </motion.span>

              {/* آیکون وسط */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 grid place-items-center z-30"
                variants={iconVariants}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <FileDown className="w-5 h-5" />
              </motion.span>

              {/* هاله نور زیر همه */}
              <motion.span
                aria-hidden
                className="absolute inset-0 z-10"
                variants={haloVariants}
                transition={{ duration: 0.22 }}
              />
            </motion.a>

            {/* Let’s talk — هاور مینیمال */}
            <motion.a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-3 rounded-2xl glass overflow-hidden focus:outline-none focus:ring-2 ring-brand-500"
              whileHover={reduced ? {} : { y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="relative">Let’s talk</span>
              <Mail className="w-4 h-4 relative" />
            </motion.a>
          </div>

          <p className="mt-3 text-xs opacity-70">
            The “Download CV” button saves my résumé as PDF to your device.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
