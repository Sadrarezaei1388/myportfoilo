"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import ModeToggle from "@/components/ModeToggle";

/* ------------------- HireMeButton ------------------- */
function HireMeButton() {
  const [pulseKey, setPulseKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleHoverOn = () => {
    setHovered(true);
    setPulseKey((k) => k + 1); // restart animation
  };
  const handleHoverOff = () => setHovered(false);

  return (
    <motion.button
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
      onFocus={handleHoverOn}
      onBlur={handleHoverOff}
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
      {/* shiny sweep */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={false}
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <motion.span
          key={`sweep-${pulseKey}`}
          className="absolute -left-1/3 top-0 h-full w-1/3
                     bg-gradient-to-r from-white/0 via-white/25 to-white/0"
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </motion.span>

      {/* مرکز دکمه: یا متن یا آیکون (هر بار فقط یکی) */}
      <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {hovered ? (
            // آیکون کلیک — ورود از چپ به مرکز، خروج نرم به راست (کوتاه‌تر)
            <motion.span
              key={`icon-${pulseKey}`}
              className="flex items-center justify-center"
              initial={{ x: -24, opacity: 0, scale: 0.92, rotate: -5 }}
              animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
              exit={{ x: 18, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <MousePointerClick className="w-5 h-5 drop-shadow" />
            </motion.span>
          ) : (
            // متن — ورود/خروج سریع‌تر تا تداخل نشه
            <motion.span
              key="label"
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.18 }}
            >
              Hire me
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* glow نرم هنگام هاور */}
      <motion.span
        className="absolute inset-0 rounded-2xl"
        initial={false}
        animate={
          hovered
            ? { boxShadow: "0 0 0 8px rgba(59,130,246,0.18)" }
            : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
        }
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
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="h-[3px] bg-gradient-to-r from-brand-500 via-accent-500 to-cyan-400 origin-left"
      />

      {/* mx در موبایل برای فاصله از چپ/راست، در بزرگ‌نمایی مرکز می‌شود */}
      <nav
        className={`mx-3 sm:mx-4 md:mx-auto max-w-6xl transition-all ${
          scrolled ? "mt-3" : "mt-6"
        }`}
      >
        <div
          className={`
            relative rounded-2xl px-3 py-2
            sm:px-4 sm:py-3
            flex items-center justify-between
            border border-white/10
            glass
            backdrop-blur-2xl backdrop-saturate-150
          `}
          style={{
            // بلور قوی‌تر + لایه ملایم برای خوانایی
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
            boxShadow: scrolled
              ? "0 12px 42px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(255,255,255,0.06)"
              : "0 24px 64px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(255,255,255,0.06)",
            WebkitBackdropFilter: "blur(24px)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* برند */}
          <Link
            href="#"
            className="font-extrabold tracking-wide text-base sm:text-2xl  gradient-text"
          >
            Sadra | Full-Stack Developer
          </Link>

          {/* راست: Hire me + ModeToggle (بدون همبرگری در موبایل) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <HireMeButton />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
