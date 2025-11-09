"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, ShoppingCart, Database, Network, ArrowRight, Plug,
  Zap, ShieldCheck, Gauge, Cloud, ServerCog, Layers, ImageIcon
} from "lucide-react";
import ScreenshotGallery from "@/components/ScreenshotGallery";

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-5xl mx-auto px-4 mt-12 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full text-sm bg-white/10 light:bg-black/10 border border-white/10">
      {children}
    </span>
  );
}

export default function FainziProjectPage() {
  const shots = [
    {
      src: "/projects/fainzi/search.jpg",
      alt: "Search and results layout",
      caption: "Search results with normalized product cards & price badges.",
    },
    {
      src: "/projects/fainzi/product.jpg",
      alt: "Product detail",
      caption: "Product detail with store list, history sparkline and AI notes.",
    },
    {
      src: "/projects/fainzi/admin.jpg",
      alt: "Admin interface",
      caption: "Admin tools: ingestion status, mappings, and re-crawl controls.",
    },
  ];

  return (
    <main className="pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/15" />
          <div className="absolute -bottom-20 -right-24 w-[560px] h-[560px] rounded-full blur-3xl bg-cyan-500/15" />
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Fainzi — AI-Powered Price Comparison for Australia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-lg opacity-85 max-w-3xl"
          >
            Fainzi automatically compares Australian online stores, normalizes product data,
            and recommends the best price — powered by an AI matching pipeline and scalable ingestion.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Next.js 14</Pill>
            <Pill>TypeScript</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Node & Express</Pill>
            <Pill>PostgreSQL + Prisma</Pill>
            <Pill>Redis Cache</Pill>
            <Pill>AI Product Normalization</Pill>
          </div>

          {/* No live demo – show screenshots + contact */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10">
              <ImageIcon className="w-4 h-4" />
              Live demo unavailable — hosting pending. See screenshots below.
            </span>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl button-3d bg-brand-600 text-white hover:-translate-y-0.5"
            >
              Request a private walkthrough <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <Section title="Screenshots">
        <ScreenshotGallery shots={shots} cols={3} />
        <p className="text-sm opacity-75 mt-3">
        </p>
      </Section>

      {/* QUICK FACTS */}
      <Section title="Quick facts">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: <Search className="w-4 h-4" />, k: "Indexed products", v: "2M+" },
            { icon: <ShoppingCart className="w-4 h-4" />, k: "Connected stores", v: "50+" },
            { icon: <Gauge className="w-4 h-4" />, k: "Avg search latency", v: "< 250ms" },
          ].map((it) => (
            <div key={it.k} className="rounded-2xl glass p-4 border border-white/10">
              <div className="flex items-center gap-2 text-sm opacity-80">{it.icon} {it.k}</div>
              <div className="text-2xl font-semibold mt-1">{it.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CURRENT STATUS */}
      <Section title="Current status">
        <div className="rounded-2xl glass p-5 border border-white/10 leading-relaxed opacity-90">
          Backend is complete (auth, ingestion, normalization, caching, admin tools).
          For real-time price feeds, Fainzi requires **official API access / data-sharing agreements**
          with major AU retailers. These integrations are being arranged; once available, public
          live demo will be enabled.
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section title="What’s inside">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: <Database className="w-4 h-4" />,
              title: "Ingestion & Normalization",
              desc:
                "Crawlers and APIs consolidate SKUs; AI maps titles/attributes to canonical products.",
            },
            {
              icon: <Network className="w-4 h-4" />,
              title: "Store Adapters",
              desc:
                "Adapter layer per retailer — throttling, retries, structure-aware parsing, and fallbacks.",
            },
            {
              icon: <ServerCog className="w-4 h-4" />,
              title: "Search & Ranking",
              desc:
                "Postgres + trigram indexing and custom scoring surfacing the best price/availability.",
            },
            {
              icon: <Cloud className="w-4 h-4" />,
              title: "Caching & Queues",
              desc:
                "Redis cache for hot queries, background jobs for refresh windows and invalidation.",
            },
            {
              icon: <ShieldCheck className="w-4 h-4" />,
              title: "Compliance-ready",
              desc:
                "Respects robots, rate limits, and moves to partner APIs when contracts are active.",
            },
            {
              icon: <Layers className="w-4 h-4" />,
              title: "Admin & Observability",
              desc:
                "Per-store health, ingestion logs, mapping conflicts, and re-index controls.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl glass p-4 border border-white/10">
              <div className="flex items-center gap-2 font-medium">
                {f.icon} {f.title}
              </div>
              <p className="opacity-80 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="Want to see more?" className="mt-14">
        <div className="rounded-2xl glass p-5 border border-white/10 flex flex-wrap items-center gap-3">
          <span className="opacity-85">
            I can provide a private walkthrough of the admin panel and codebase.
          </span>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl button-3d bg-brand-600 text-white hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </main>
  );
}
