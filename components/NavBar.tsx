"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ModeToggle from "@/components/ModeToggle";

/* ------------------- HireMeButton (همان قبلی) ------------------- */
function HireMeButton() {
  const [hovered, setHovered] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const on = () => { setHovered(true); setPulseKey(k => k + 1); };
  const off = () => setHovered(false);

  return (
    <motion.button
      onMouseEnter={on}
      onMouseLeave={off}
      onFocus={on}
      onBlur={off}
      aria-label="Hire me"
      className="
        relative overflow-hidden rounded-2xl
        h-[40px] min-w-[104px] px-4
        md:h-[44px] md:min-w-[120px] md:px-5
        font-semibold text-white button-3d bg-brand-600
        focus:outline-none focus:ring-2 ring-brand-500
        inline-flex items-center justify-center will-change-transform
      "
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={false}
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <motion.span
          key={`sweep-${pulseKey}`}
          className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </motion.span>
      <span className="z-10">Hire me</span>
      <motion.span
        className="absolute inset-0 rounded-2xl"
        initial={false}
        animate={hovered ? { boxShadow: "0 0 0 8px rgba(59,130,246,0.18)" } : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
        transition={{ duration: 0.28 }}
        aria-hidden="true"
      />
    </motion.button>
  );
}

/* ------------------- NavBar ------------------- */
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="h-[3px] bg-gradient-to-r from-brand-500 via-accent-500 to-cyan-400 origin-left"
      />

      <nav className={`mx-3 sm:mx-4 md:mx-auto max-w-6xl transition-all ${scrolled ? "mt-3" : "mt-6"}`}>
        <div
          className="
            relative rounded-2xl px-3 py-2 sm:px-4 sm:py-3
            flex items-center justify-between gap-2
            border border-white/10 glass
            backdrop-blur-2xl backdrop-saturate-150
          "
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
            boxShadow: scrolled
              ? "0 12px 42px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(255,255,255,0.06)"
              : "0 24px 64px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(255,255,255,0.06)",
            WebkitBackdropFilter: "blur(24px)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* برند: اجازهٔ چندخطی بدون سه‌نقطه + فاصله ثابت 10px از دکمه */}
          <Link
            href="#"
            title="Sadra | Full-Stack Developer"
            className="
              flex-1 min-w-0 mr-[10px]
              font-extrabold tracking-wide gradient-text
              text-base sm:text-2xl
              whitespace-normal break-words
              leading-snug
            "
          >
            Sadra | Full-Stack Developer
          </Link>

          {/* راست: دکمه‌ها (فیکس عرض) تا متن زیرشون نره و همیشه فاصله بماند */}
          <div className="flex-none flex items-center gap-2.5 sm:gap-4">
            <HireMeButton />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
