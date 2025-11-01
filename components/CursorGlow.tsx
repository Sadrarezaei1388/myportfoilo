"use client";

import { useEffect, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";

type Props = {
  /** قطر نقطه (px) — خیلی کوچک می‌خوای: 40–70 */
  size?: number;
  /** شدت روشنایی مرکز (0..1) */
  intensity?: number;
  /** درصد محوشدن شعاع (0..100) */
  falloff?: number;
  /** رنگ به صورت rgb() بدون آلفا */
  rgb?: [number, number, number];
  /** شفافیت کلی لایه (0..1) */
  opacity?: number;
  /** لایه بالای بک‌گراند ولی زیر نوبار: z-40 مناسب، نوبار شما z-50 است */
  zIndexClass?: string; // مثل "z-40"
  /** در موبایل/تاچ غیرفعال شود؟ پیش‌فرض true */
  disableOnTouch?: boolean;
};

export default function CursorGlow({
  size = 56,                  // خیلی کوچک
  intensity = 0.35,           // مرکز روشن
  falloff = 58,               // محوشدن تا شفاف
  rgb = [253, 224, 71],       // زرد (Tailwind amber-300)
  opacity = 0.9,              // شفافیت کلی لایه
  zIndexClass = "z-40",
  disableOnTouch = true,
}: Props) {
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(50); // درصد افقی
  const my = useMotionValue(50); // درصد عمودی

  // اگر reduced-motion یا تاچ باشد: فیکس روی مرکز بماند
  useEffect(() => {
    if (prefersReduced) return;
    if (disableOnTouch && typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        (navigator as any).maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;
      if (isTouch) return;
    }

    let raf = 0;
    let targetX = 50;
    let targetY = 50;

    const handler = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      targetX = (e.clientX / vw) * 100;
      targetY = (e.clientY / vh) * 100;
      // از rAF برای کاهش فشار رندر استفاده می‌کنیم
      if (!raf) {
        raf = window.requestAnimationFrame(() => {
          mx.set(targetX);
          my.set(targetY);
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mx, my, prefersReduced, disableOnTouch]);

  // کمی فنر برای دنبال کردن نرم‌تر نشان بده
  const sx = useTransform(mx, (v) => v);
  const sy = useTransform(my, (v) => v);

  // گرادیِنت مرکزی زرد خیلی کوچک
  const [r, g, b] = rgb;
  const glow = useMotionTemplate`
    radial-gradient(${size}px ${size}px at ${sx}% ${sy}%,
      rgba(${r}, ${g}, ${b}, ${intensity}) 0%,
      rgba(${r}, ${g}, ${b}, 0) ${falloff}%)
  `;

  // یک حلقه‌ی خارجی خیلی ملایم برای زیبایی روی پس‌زمینه‌های روشن
  const outer = useMemo(
    () =>
      `radial-gradient(${size * 2}px ${size * 2}px at 50% 50%,
        rgba(${r}, ${g}, ${b}, 0.07), transparent 60%)`,
    [size, r, g, b]
  );

  // اگر reduced-motion: نقطه ثابت وسط صفحه (یا می‌تونی کامل مخفی کنی)
  const baseStyle =
    prefersReduced
      ? {
          background: `radial-gradient(${size}px ${size}px at 50% 50%,
              rgba(${r}, ${g}, ${b}, ${intensity}), transparent ${falloff}%)`,
        }
      : { backgroundImage: glow as any };

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed inset-0 ${zIndexClass}`}
      style={{
        opacity,
        mixBlendMode: "screen", // روی تیره می‌درخشد، روی روشن هم لطیف می‌ماند
        ...baseStyle,
      }}
    >
      {/* حلقه بیرونی خیلی لطیف */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: outer,
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
