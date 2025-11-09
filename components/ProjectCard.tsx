// components/ProjectCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // مسیر داخل /public، بهتره با / شروع شه
  href?: string;     // مثل "/projects/marketly/"  (اسلش انتهایی مهم است)
};

function ensureTrailingSlash(path: string) {
  return path.endsWith("/") ? path : path + "/";
}
function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : "/" + path;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  href,
}: Props) {
  const to = href ? ensureTrailingSlash(href) : undefined;
  const src = imageUrl ? ensureLeadingSlash(imageUrl) : undefined;

  // تمام کارت کلیک‌پذیر باشد؛ از next/link استفاده می‌کنیم که basePath را اعمال کند
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    to ? (
      <Link
        href={to}
        className="block focus:outline-none focus-visible:ring-2 ring-brand-500 rounded-3xl"
        aria-label={title}
      >
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <TiltCard className="group">
        {/* Header / Media */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
          {src ? (
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/40 to-cyan-500/35" />
          )}

          {/* subtle gloss */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 mix-blend-overlay" />

          {/* corner badge */}
          <div className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs glass border border-white/10">
            Case Study
          </div>

          {/* bottom overlay info */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="h-[1px] w-full bg-white/10 light:bg-black/10 mb-3 opacity-70" />
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-80">Featured</div>
              {to && (
                <span className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold leading-tight">{title}</h3>
            {to && (
              <span
                className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10
                           w-9 h-9 glass transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </div>

          <p className="opacity-80 mt-2 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/12 light:bg-black/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer CTA */}
          {to && (
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                View project <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>
      </TiltCard>
    </Wrapper>
  );
}
