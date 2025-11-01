"use client";
import { motion } from "framer-motion";

export default function ExperienceItem({
  role, company, period, points
}: {
  role: string; company: string; period: string; points: string[];
}) {
  return (
    <motion.div whileHover={{ x: 4 }} className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-lg">{role}</h4>
          <p className="text-slate-300">{company}</p>
        </div>
        <span className="text-xs text-slate-400">{period}</span>
      </div>
      <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </motion.div>
  );
}
