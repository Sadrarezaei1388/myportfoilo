"use client";
import { useEffect, useRef, useState } from "react";


const DATA = [
{ name: "A. Manager", role: "Product Lead", quote: "Delivered beyond expectations with stunning performance and polish." },
{ name: "B. Owner", role: "Agency", quote: "Animations feel premium and never get in the way of speed." },
{ name: "C. CTO", role: "Startup", quote: "Clean architecture, fast shipping, great communication." },
];


export default function Testimonials() {
const [idx, setIdx] = useState(0);
const timer = useRef<number | null>(null);
useEffect(()=>{ timer.current = window.setInterval(()=> setIdx(i => (i+1)%DATA.length), 3500); return ()=>{ if(timer.current) clearInterval(timer.current); }; },[]);
return (
<div className="glass rounded-3xl p-6">
<div className="min-h-[120px]">
<p className="text-lg">“{DATA[idx].quote}”</p>
<p className="text-sm opacity-70 mt-2">— {DATA[idx].name}, {DATA[idx].role}</p>
</div>
<div className="flex gap-2 mt-4">
{DATA.map((_, i)=> (
<button key={i} onClick={()=>setIdx(i)} className={`h-1.5 rounded-full transition-all ${i===idx?"w-8 bg-brand-600":"w-3 bg-white/20"}`} />
))}
</div>
</div>
);
}