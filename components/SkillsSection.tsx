"use client";

import { motion } from "framer-motion";
import { Cpu, Boxes, Server, Wrench } from "lucide-react";

type Skill = { name: string; lvl: 1 | 2 | 3 | 4 | 5 };
type Group = { title: string; subtitle: string; icon: React.ReactNode; skills: Skill[]; tags: string[] };

function LevelDots({ lvl }: { lvl: Skill["lvl"] }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < lvl;
        return (
          <span
            key={i}
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              active ? "bg-emerald-400" : "bg-white/15 light:bg-black/15"
            }`}
          />
        );
      })}
    </div>
  );
}

function SkillRow({ name, lvl, i }: Skill & { i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.02 * i }}
      className="flex items-center justify-between py-1.5"
    >
      <span className="opacity-90">{name}</span>
      <LevelDots lvl={lvl} />
    </motion.li>
  );
}

function Card({ g }: { g: Group }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl glass p-5 border border-white/10"
      style={{
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.05), 0 18px 40px rgba(0,0,0,0.16)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="grid place-items-center w-9 h-9 rounded-xl bg-white/10 light:bg-black/10 border border-white/10">
          {g.icon}
        </div>
        <div>
          <div className="font-semibold">{g.title}</div>
          <div className="text-sm opacity-70">{g.subtitle}</div>
        </div>
      </div>

      <ul className="mt-4">
        {g.skills.map((s, i) => (
          <SkillRow key={s.name} {...s} i={i} />
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {g.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full text-xs bg-white/8 light:bg-black/10 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const groups: Group[] = [
    {
      title: "Core Frontend",
      subtitle: "UI systems & interactions",
      icon: <Boxes className="w-4.5 h-4.5" />,
      skills: [
        { name: "Next.js / React", lvl: 5 },
        { name: "TypeScript", lvl: 5 },
        { name: "TailwindCSS", lvl: 5 },
        { name: "Framer Motion", lvl: 4 },
        { name: "Accessibility (a11y)", lvl: 4 },
        { name: "Design systems", lvl: 4 },
      ],
      tags: ["App Router", "RSC", "Shadcn", "Radix"],
    },
    {
      title: "Backend & Data",
      subtitle: "APIs, auth & persistence",
      icon: <Server className="w-4.5 h-4.5" />,
      skills: [
        { name: "Node.js / API Routes", lvl: 4 },
        { name: "Prisma / SQL", lvl: 4 },
        { name: "Auth (NextAuth/JWT)", lvl: 4 },
        { name: "Caching / ISR", lvl: 4 },
        { name: "tRPC / REST", lvl: 3 },
        { name: "Redis / Postgres", lvl: 3 },
      ],
      tags: ["Edge", "ISR", "SSG"],
    },
    {
      title: "DX & Delivery",
      subtitle: "Quality gates & speed",
      icon: <Wrench className="w-4.5 h-4.5" />,
      skills: [
        { name: "CI/CD (Vercel/GH)", lvl: 4 },
        { name: "Testing (Vitest/RTL)", lvl: 3 },
        { name: "Lint/Format/Husky", lvl: 5 },
        { name: "Analytics & A/B tests", lvl: 3 },
        { name: "Bundles & Code split", lvl: 4 },
        { name: "Image/Font strategy", lvl: 4 },
      ],
      tags: ["Vercel", "GH Actions", "ESLint", "Sentry"],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills & Stack</h2>
        <p className="opacity-75 mt-1">
          A crisp view of my strengths — simple, readable, and to the point.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <Card key={g.title} g={g} />
        ))}
      </div>

      {/* tiny footnote strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-6 rounded-2xl glass px-4 py-3 border border-white/10 text-sm opacity-85"
      >
        Proficiency shown as 1–5 subtle dots. Ask for a tailored skill matrix if
        you want more granularity for your project.
      </motion.div>
    </section>
  );
}
