"use client";
import { motion, useScroll, useTransform } from "framer-motion";


export default function SectionDivider() {
const { scrollYProgress } = useScroll();
const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);
return (
<div className="relative h-[1px] w-full bg-white/10 my-8">
<motion.div style={{ opacity: glow }} className="absolute inset-0 bg-gradient-to-r from-brand-500 via-accent-500 to-cyan-400 blur-sm" />
</div>
);
}