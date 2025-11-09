"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChefHat, ServerCog, Database, ShieldCheck, Gauge, Workflow,
  ArrowRight, Layers, Globe2, Smartphone, GitBranch
} from "lucide-react";
import Image from "next/image";
import akk1 from 'public/1-rs.png'
import akk2 from 'public/2-rs.png'

/* ---------- Small helpers ---------- */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-12">
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

/* ---------- Placeholder visual (no external images needed) ---------- */
function PlaceholderShot({ label = "Screenshot placeholder" }: { label?: string }) {
  return (
    <div className="relative rounded-2xl border border-white/10 light:border-black/10 overflow-hidden bg-gradient-to-br from-slate-900/40 to-slate-800/30 light:from-slate-100 light:to-white">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 light:border-black/10">
        <span className="w-3 h-3 rounded-full bg-rose-400/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
        <div className="ml-3 text-xs opacity-70">{label}</div>
      </div>
      {/* skeleton blocks */}
      <div className="p-5 grid gap-3">
        <div className="h-8 rounded-md bg-white/10 light:bg-black/10" />
        <div className="h-40 rounded-xl bg-white/10 light:bg-black/10" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 rounded-lg bg-white/10 light:bg-black/10" />
          <div className="h-24 rounded-lg bg-white/10 light:bg-black/10" />
          <div className="h-24 rounded-lg bg-white/10 light:bg-black/10" />
        </div>
      </div>
    </div>
  );
}

export default function RestaurantProjectPage() {
  return (
    <main className="pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-3xl bg-emerald-500/15" />
          <div className="absolute -bottom-20 -right-24 w-[560px] h-[560px] rounded-full blur-3xl bg-brand-500/15" />
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Restaurant Platform — Full-stack Ordering & Admin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-lg opacity-85 max-w-3xl"
          >
            A production-grade restaurant system with online ordering, menu & inventory
            management, roles/permissions, and an analytics dashboard. Built for speed,
            reliability and a clean operator experience.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Next.js 14 (App Router)</Pill>
            <Pill>TypeScript</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Prisma + PostgreSQL</Pill>
            <Pill>NextAuth (JWT)</Pill>
            <Pill>Stripe (optional)</Pill>
            <Pill>Framer Motion</Pill>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Live link (placeholder) */}


            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass hover:-translate-y-0.5"
            >
              Request a demo
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-10">
          <Image src={akk1} alt="restaurant"/>
        
        </div>
      </section>

      {/* QUICK FACTS */}
      <Section title="Quick facts">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: <ChefHat className="w-4 h-4" />, k: "Menu items", v: "200+" },
            { icon: <ServerCog className="w-4 h-4" />, k: "Orders/day capacity", v: "5k+" },
            { icon: <Gauge className="w-4 h-4" />, k: "P95 page load", v: "< 1.2s" },
          ].map((it) => (
            <div key={it.k} className="rounded-2xl glass p-4 border border-white/10">
              <div className="flex items-center gap-2 text-sm opacity-80">{it.icon} {it.k}</div>
              <div className="text-2xl font-semibold mt-1">{it.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section title="Key features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl glass p-5 border border-white/10">
            <h3 className="font-semibold flex items-center gap-2"><Globe2 className="w-4 h-4" /> Public ordering</h3>
            <ul className="mt-2 list-disc pl-5 opacity-90 space-y-1">
              <li>Browse menu, dietary filters, add to cart, checkout</li>
              <li>Real-time stock & item availability</li>
              <li>Coupon codes, order notes, pickup/delivery toggles</li>
            </ul>
          </div>

          <div className="rounded-2xl glass p-5 border border-white/10">
            <h3 className="font-semibold flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Admin & roles</h3>
            <ul className="mt-2 list-disc pl-5 opacity-90 space-y-1">
              <li>Role-based access: Admin, Manager, Staff</li>
              <li>Menu, categories, modifiers, inventory, pricing</li>
              <li>Orders table with status, refunds, receipts</li>
            </ul>
          </div>

          <div className="rounded-2xl glass p-5 border border-white/10">
            <h3 className="font-semibold flex items-center gap-2"><Smartphone className="w-4 h-4" /> Kiosk/POS friendly</h3>
            <ul className="mt-2 list-disc pl-5 opacity-90 space-y-1">
              <li>Touch-first layouts & large hit-targets</li>
              <li>Offline-first cart, graceful retry</li>
            </ul>
          </div>

          <div className="rounded-2xl glass p-5 border border-white/10">
            <h3 className="font-semibold flex items-center gap-2"><Database className="w-4 h-4" /> Data & analytics</h3>
            <ul className="mt-2 list-disc pl-5 opacity-90 space-y-1">
              <li>Top sellers, hourly heatmaps, cohort revenue</li>
              <li>CSV export, weekly email reports</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ADMIN PLACEHOLDER */}
      <Section title="Admin Dashboard (placeholder view)">
                  <Image src={akk2} alt="restaurant"/>

      </Section>

      {/* ARCHITECTURE */}
      <Section title="Architecture overview">
        <div className="rounded-2xl glass p-5 border border-white/10">
          <div className="flex flex-wrap gap-2 mb-3">
            <Pill><Layers className="w-4 h-4" /> App Router + RSC</Pill>
            <Pill><Workflow className="w-4 h-4" /> Server Actions</Pill>
            <Pill><GitBranch className="w-4 h-4" /> Prisma</Pill>
          </div>
          <pre className="whitespace-pre-wrap text-sm opacity-90 overflow-x-auto">
{`Client (Next.js + Tailwind)
   └─ Public ordering UI (SSR/ISR)
   └─ Admin (protected routes, NextAuth)

API (Next.js Route Handlers + Server Actions)
   ├─ /api/menu      (GET/POST/PATCH)
   ├─ /api/orders    (GET/POST/PATCH/refund)
   ├─ /api/inventory (GET/PUT)
   └─ /api/auth      (NextAuth, JWT)

Database (PostgreSQL via Prisma)
   ├─ Item, Category, Modifier
   ├─ Order, OrderItem, Payment
   └─ User, Role, Session

Integrations
   ├─ Stripe (optional)
   └─ SMTP/Resend for order confirmations`}
          </pre>
        </div>
      </Section>

      {/* SAMPLE ENDPOINTS */}
      <Section title="Sample endpoints">
        <div className="rounded-2xl glass p-5 border border-white/10">
          <code className="text-sm">
{`GET  /api/menu?active=true
POST /api/orders
PATCH /api/orders/:id { status: "preparing" | "ready" | "completed" }`}
          </code>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Want a private demo?">
        <div className="rounded-2xl glass p-6 border border-white/10 flex flex-wrap items-center justify-between gap-3">
          <p className="opacity-85">
            Since the project isn’t hosted yet, I’ve included styled placeholders. I can walk you through
            the live dev environment or deploy a preview on Vercel/GitHub Pages.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl button-3d bg-brand-600 text-white hover:-translate-y-0.5"
          >
            Contact me <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </main>
  );
}
