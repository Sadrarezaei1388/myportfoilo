"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  strokeHeight?: number;     // ضخامت خط
  offsetY?: number;          // فاصله زیرخط تا پایین هر لاین (px)
  color?: string;            // رنگ خط (rgba برای ملایم بودن)
  lineDuration?: number;     // مدت کشیده‌شدن هر خط
  lineDelay?: number;        // تاخیر بین شروع خطوط
  lineGapExtra?: number;     // فاصله اضافه تا لاین بعدی (px)
  justify?: boolean;         // متن justify شود یا نه
  equalToLongest?: boolean;  // اگر true همه تا پایان بلندترین لاین می‌روند
  className?: string;
};

type Box = { left:number; right:number; top:number; bottom:number; height:number };
type Line = { left:number; right:number; bottom:number; height:number };

export default function AnimatedUnderlineParagraph({
  children,
  strokeHeight = 2,
  offsetY = 2,
  color = "rgba(34,197,94,0.28)",
  lineDuration = 1.35,
  lineDelay = 0.42,
  lineGapExtra = 6,
  justify = true,
  equalToLongest = false, // ✅ پیش‌فرض: هر لاین تا طول متن خودش
  className = "text-base md:text-lg",
}: Props) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [maxRight, setMaxRight] = useState(0);
  const inView = useInView(rootRef, { once: true, margin: "-10% 0% -10% 0%" });

  // ادغام rectها برای هر لاین واقعی (حل مشکل ایم/ایتالیک و باکس‌های ریز)
  const groupRectsToLines = (rects: DOMRect[], rootLeft: number, rootTop: number): Line[] => {
    const boxes: Box[] = rects
      .filter((r) => r.width > 1 && r.height > 1)
      .map((r) => ({
        left: r.left - rootLeft,
        right: r.right - rootLeft,
        top: r.top - rootTop,
        bottom: r.bottom - rootTop,
        height: r.height,
      }))
      .sort((a, b) => a.top - b.top);

    const clusters: Box[][] = [];
    for (const b of boxes) {
      // آستانه پویا بر اساس ارتفاع لاین برای اختلاف baseline
      const th = Math.max(3, b.height * 0.5);
      // پیدا کردن کلاستری که هم‌پوشانی عمودی خوبی دارد
      const found = clusters.find((c) => {
        const ct = c[0];
        const overlap = Math.min(ct.bottom, b.bottom) - Math.max(ct.top, b.top);
        return overlap > Math.min(ct.height, b.height) * 0.4 || Math.abs(ct.top - b.top) <= th;
      });
      if (found) found.push(b);
      else clusters.push([b]);
    }

    // ادغام نهایی هر کلاستر به یک لاین
    const merged: Line[] = clusters.map((cl) => {
      const left = Math.min(...cl.map((x) => x.left));
      const right = Math.max(...cl.map((x) => x.right));
      const bottom = Math.max(...cl.map((x) => x.bottom));
      const height = Math.max(...cl.map((x) => x.height));
      return { left, right, bottom, height };
    });

    // مرتب‌سازی از بالا به پایین
    merged.sort((a, b) => a.bottom - b.bottom);
    return merged;
  };

  const measure = () => {
    if (!textRef.current || !rootRef.current) return;
    const rootRect = rootRef.current.getBoundingClientRect();

    const range = document.createRange();
    range.selectNodeContents(textRef.current);
    const rects = Array.from(range.getClientRects());

    const mergedLines = groupRectsToLines(rects, rootRect.left, rootRect.top);
    setLines(mergedLines);
    setMaxRight(mergedLines.reduce((m, l) => Math.max(m, l.right), 0));
  };

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (rootRef.current) ro.observe(rootRef.current);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    (document as any).fonts?.ready?.then(() => measure()).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const underlineItems = useMemo(() => {
    return lines.map((ln, i) => {
      const delay = i * lineDelay;
      const top = ln.bottom + offsetY;
      const rightEdge = equalToLongest ? maxRight : ln.right; // ✅ لاین آخر فقط تا متن خودش
      const width = Math.max(0, rightEdge - ln.left);

      return (
        <motion.span
          key={`u-${i}-${width}`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: lineDuration, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            left: ln.left,
            top: top + lineGapExtra,
            width,
            height: strokeHeight,
            transformOrigin: "0% 50%",
            borderRadius: strokeHeight / 2,
            background: color,
            willChange: "transform",
            zIndex: 0,
          }}
        />
      );
    });
  }, [lines, inView, lineDuration, lineDelay, strokeHeight, offsetY, color, lineGapExtra, maxRight, equalToLongest]);

  const extraBottomSpace = strokeHeight + offsetY + lineGapExtra;

  return (
    <span ref={rootRef} className="relative inline-block w-full align-top" style={{ paddingBottom: extraBottomSpace }}>
      <span
        ref={textRef}
        className={className}
        style={{
          display: "inline-block",
          width: "100%",
          position: "relative",
          zIndex: 1,                      // متن همیشه روی زیرخط
          textAlign: justify ? "justify" as const : "start",
          textJustify: justify ? "inter-word" as const : undefined,
          // line-height را اگر خواستی همین‌جا دستی بده، نه با leading
        }}
      >
        {children}
      </span>

      <span aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
        {underlineItems}
      </span>
    </span>
  );
}
