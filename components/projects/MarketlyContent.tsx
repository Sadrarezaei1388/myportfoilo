// components/projects/MarketlyContent.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Gauge, Rocket, Sparkles } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-white/10 light:bg-black/10 border border-white/10">
      {children}
    </span>
  );
}

export default function MarketlyContent() {
  // ✅ پیش‌فرض‌های ایمیل (می‌تونی آدرس رو عوض کنی)
  const email = "hello@yourdomain.com";
  const subject = encodeURIComponent("Project inquiry (Marketly-style)");
  const body = encodeURIComponent(
    `Hi Sajad,

I'd like to discuss a Marketly-style product for my business.
Here’s a brief about my needs:
- ...

Budget/Timeline (approx): 
- ...

Thanks!`
  );
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-32">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl glass p-6 md:p-8 relative overflow-hidden"
      >
        {/* soft background shapes */}
        <div className="pointer-events-none absolute -right-10 -top-10 w-64 h-64 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Pill><Sparkles className="w-4 h-4" /> AI • Forex</Pill>
            <Pill><Gauge className="w-4 h-4" /> Realtime Analysis</Pill>
            <Pill><Rocket className="w-4 h-4" /> Next.js 14 • RSC</Pill>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.08]">
            Marketly — <span className="gradient-text">AI Forex Advisor</span>
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-85 max-w-3xl leading-relaxed">
            Marketly uses AI to analyze live forex market data, score currency pairs by
            momentum, volume and sentiment, and give you actionable buy/wait/avoid signals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="https://marketlee.ir" // ← put your real live URL here
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl button-3d bg-brand-600 text-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 ring-brand-500"
            >
              Live demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass hover:-translate-y-0.5 focus:outline-none focus:ring-2 ring-brand-500"
            >
              Explore features
            </a>
          </div>
        </div>
      </motion.section>

      {/* Preview / Gallery */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          "https://images.unsplash.com/photo-1551281044-8b89f03a3f5b?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl overflow-hidden glass border border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="w-full h-56 object-cover" />
          </motion.div>
        ))}
      </section>

      {/* Features & Stack */}
      <section id="features" className="mt-10 grid lg:grid-cols-[1.3fr_.9fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl glass p-6"
        >
          <h2 className="text-xl font-semibold">Key features</h2>
          <ul className="mt-4 space-y-3">
            {[
              "AI model ranks pairs by composite score (momentum, volume, sentiment).",
              "Actionable signals (Buy / Watch / Avoid) with short reasoning.",
              "Real-time dashboard with interactive charts and pro filters.",
              "Personal watchlist, email alerts, and daily digest.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <span className="opacity-90">{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-base font-semibold">Architecture notes</h3>
          <p className="mt-2 opacity-85">
            App Router + Server Actions for server-side fetch, streaming updates, and smart caching.
            Role-based access (RLS), rate limiting, and typed endpoints with Zod.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "Node", "Prisma", "Postgres"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-white/10 light:bg-black/10 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* KPIs / Results */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-3xl glass p-6"
        >
          <h2 className="text-xl font-semibold">Impact</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { label: "Page Speed", value: "98/100" },
              { label: "TTFB", value: "90ms" },
              { label: "DAU", value: "1.4k+" },
              { label: "Email CTR", value: "27%" },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl glass p-4 text-center border border-white/10">
                <div className="text-2xl font-semibold">{m.value}</div>
                <div className="text-xs opacity-70">{m.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm opacity-80">
            * Sample figures for demo. Replace with your real project metrics.
          </p>
        </motion.div>
      </section>

      {/* CTA bottom */}
      <section className="mt-10 rounded-3xl glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">Interested in something like this?</div>
          <div className="opacity-80">I can design and build a tailored Marketly-style product for your business.</div>
        </div>
        <div className="flex items-center gap-3">
          {/* ✅ به‌جای Link از mailto استفاده شد */}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass hover:-translate-y-0.5 focus:outline-none focus:ring-2 ring-brand-500"
            
          >
            Contact me
          </a>
          <Link
            href="https://marketlee.ir" // ← live URL
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl button-3d bg-brand-600 text-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 ring-brand-500"
          >
            Live demo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
