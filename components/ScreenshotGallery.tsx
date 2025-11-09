"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

type Shot = {
  src: string;
  alt?: string;
  w?: number;
  h?: number;
  caption?: string;
};

export default function ScreenshotGallery({
  shots,
  cols = 3,
}: {
  shots: Shot[];
  cols?: 2 | 3 | 4;
}) {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <div>
      {/* Grid */}
      <div
        className={`grid gap-4 ${
          cols === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : cols === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {shots.map((s, i) => (
          <button
            key={s.src + i}
            onClick={() => setOpen(i)}
            className="group relative rounded-xl overflow-hidden border border-white/10 light:border-black/10 bg-white/5"
            aria-label={`Open screenshot ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt ?? `screenshot ${i + 1}`}
              className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute right-2 text-black bg-black top-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md glass border border-white/10">
              <Maximize2 className="w-3.5 h-3.5" />
              View
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ y: 10, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute -top-10 right-0 text-white/90 hover:text-white inline-flex items-center gap-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" /> Close
              </button>

              <div className="rounded-2xl overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shots[open].src}
                  alt={shots[open].alt ?? "screenshot"}
                  className="w-full h-auto object-contain"
                />
              </div>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
