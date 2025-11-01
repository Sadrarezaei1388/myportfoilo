"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionDivider from "@/components/SectionDivider";


export default function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode; }) {
const ref = useRef<HTMLDivElement>(null);
const inView = useInView(ref, { once: true, margin: "-100px" });
return (
<section id={id} ref={ref} className="py-20 md:py-28">
<div className="mx-auto max-w-6xl px-4">
<motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold">{title}</motion.h2>
{subtitle && <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="opacity-80 mt-3 max-w-2xl">{subtitle}</motion.p>}
<SectionDivider />
<motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="mt-10">{children}</motion.div>
</div>
</section>
);
}