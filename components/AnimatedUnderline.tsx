"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  duration?: number;   // مدت انیمیشن بر حسب ثانیه
  delay?: number;      // تاخیر شروع
  thickness?: number;  // ضخامت خط (px)
  offsetY?: number;    // فاصله خط از پایین
};

export default function AnimatedUnderline({
  children,
  duration = 2.2,
  delay = 0.15,
  thickness = 3,
  offsetY = 4,
}: Props) {
  return (
    <span className="relative inline-block">
      {/* متن */}
      <span className="leading-7 opacity-90">{children}</span>

      {/* خط زیر متن: از چپ → راست، فقط بار اول */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -offsetY,
          height: thickness,
          transformOrigin: "0% 50%",
        }}
        className="rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-cyan-400 shadow-[0_0_14px_rgba(59,130,246,0.35)]"
      />
    </span>
  );
}
