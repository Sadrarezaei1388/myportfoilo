// app/page.tsx
"use client";

import NavBar from "@/components/NavBar";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AboutProfileCard from "@/components/AboutProfileCard";
import AnimatedUnderlineParagraph from "@/components/AnimatedUnderlineParagraph";
import SkillsSection from "@/components/SkillsSection";

import { motion } from "framer-motion";
import { Code2, Sparkles, Gauge, Rocket, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <ParallaxHero />

      {/* Featured Work */}
      <Section
        id="work"
        title="Featured Work"
        subtitle="A selection of projects demonstrating interaction, performance and polish."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Marketly — Forex AI"
            description="AI-driven advisor that ranks forex pairs and suggests the best buys."
            tags={["Next.js", "TypeScript", "Tailwind", "Framer Motion", "AI"]}
            imageUrl="/still-life-arrangement-with-cryptocurrency.jpg"
            href="/projects/marketly" // ← wired to the case-study page
          />

<ProjectCard
  title="Restaurant Platform"
  description="Full-stack ordering system with admin panel, inventory, and analytics."
  tags={["Next.js","TypeScript","Tailwind","Prisma","NextAuth"]}
  imageUrl="/young-waiter-wearing-protective-face-mask-while-serving-food-his-guests-restaurant.jpg"
  href="/projects/restaurant"
/>


    <ProjectCard
      title="Fainzi – Price Comparison"
      description="High-speed Next.js app with smart scraping and real-time search."
      tags={["Next.js", "TypeScript", "Tailwind", "Playwright"]}
  imageUrl="happy-couple-looking-big-shop-display.jpg"

  href="/projects/fainzi"

    />
        </div>

        <Marquee
          items={[
            "React",
            "Next.js 14",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
            "Node",
            "Vercel",
            "CI/CD",
          ]}
        />
      </Section>

      {/* About */}
      <Section
        id="about"
        title="About me"
        subtitle="Full-stack web developer obsessed with delightful interactions & robust architecture."
      >
        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-6">
          <AboutProfileCard />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl glass p-6"
          >
            <AnimatedUnderlineParagraph
              strokeHeight={3}
              offsetY={2}
              lineDuration={1.6}
              lineDelay={0.42}
              lineGapExtra={6}
              color="rgba(34,197,94,0.28)"
              justify={true}
              equalToLongest={false}
              className="text-[19px] md:text-lg"
            >
              <span style={{ lineHeight: "2.1em" }}>
                I architect and build immersive, conversion-driven websites and
                platforms. My toolkit: Next.js 14, TypeScript, Tailwind, Framer
                Motion, and Node. I care about accessibility, performance, and
                micro-interactions that make users <em>feel</em> something.
              </span>
            </AnimatedUnderlineParagraph>

            <div className="mt-6">
              <h4 className="font-semibold text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                What I bring
              </h4>

              <ul className="mt-3 grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: <Code2 className="w-4 h-4" />,
                    title: "Clean architecture",
                    desc: "Type-safe, modular, and maintainable codebases.",
                  },
                  {
                    icon: <Gauge className="w-4 h-4" />,
                    title: "Performance first",
                    desc: "Lighthouse-friendly, instant feel, smart caching.",
                  },
                  {
                    icon: <Rocket className="w-4 h-4" />,
                    title: "Animations that serve UX",
                    desc: "Subtle motion that guides, not distracts.",
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4" />,
                    title: "Accessibility & QA",
                    desc: "WCAG-aware, tested components, robust flows.",
                  },
                ].map((it) => (
                  <motion.li
                    key={it.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl p-3 glass border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 grid place-items-center w-8 h-8 rounded-xl bg-white/10 light:bg-black/10">
                        {it.icon}
                      </div>
                      <div>
                        <div className="font-medium">{it.title}</div>
                        <div className="text-sm opacity-80">{it.desc}</div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills — New minimal section */}
      <SkillsSection />

      {/* Contact */}
      <Section
        id="contact"
        title="Let’s build something exceptional"
        subtitle="Tell me about your project and timelines."
      >
        <ContactForm />
        <Footer />
      </Section>
    </main>
  );
}
