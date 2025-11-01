"use client";
import { useRef } from "react";


export default function Marquee({ items }: { items: string[] }) {
const track = useRef<HTMLDivElement>(null);
return (
<div className="relative overflow-hidden py-6">
<div ref={track} className="flex gap-12 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] opacity-80">
{[...items, ...items].map((t, i) => (
<span key={i} className="whitespace-nowrap text-sm">{t}</span>
))}
</div>
<style jsx>{`
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`}</style>
</div>
);
}