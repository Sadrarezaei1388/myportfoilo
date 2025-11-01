"use client";
import React from "react";
import TiltCard from "@/components/TiltCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tags: string[];
  // Optional: image or href later
  imageUrl?: string;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  href,
}: Props) {
  // Wrapper to allow whole card to be clickable if href is provided
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? (
      <a href={href} className="block focus:outline-none focus-visible:ring-2 ring-brand-500 rounded-3xl">
        {children}
      </a>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <TiltCard className="group">
        {/* Header / Media */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
          {/* background image or gradient */}
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/40 to-cyan-500/35" />
          )}

          {/* subtle gloss */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 mix-blend-overlay" />

          {/* corner badge (optional style) */}
          <div className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs glass border border-white/10">
            Case Study
          </div>

          {/* bottom overlay info */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="h-[1px] w-full bg-white/10 light:bg-black/10 mb-3 opacity-70" />
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-80">Featured</div>
              <motion.span
                className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Explore <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold leading-tight">{title}</h3>

            {/* Hover arrow micro interaction */}
            <motion.span
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10
                         w-9 h-9 glass"
              initial={false}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.18 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </div>

          <p className="opacity-80 mt-2 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/12 light:bg-black/10
                           border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer CTA (optional, hover reveal) */}
          {href && (
            <div className="mt-5">
              <motion.span
                className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                View project <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          )}
        </div>
      </TiltCard>
    </Wrapper>
  );
}
