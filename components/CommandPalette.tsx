"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, Terminal, User, Briefcase, Mail } from "lucide-react";


const ITEMS = [
{ label: "Go to Work", href: "#work", icon: Briefcase },
{ label: "Go to About", href: "#about", icon: User },
{ label: "Go to Skills", href: "#skills", icon: Terminal },
{ label: "Contact", href: "#contact", icon: Mail },
];


export default function CommandPalette() {
const [open, setOpen] = useState(false);
const [q, setQ] = useState("");


useEffect(() => {
const onKey = (e: KeyboardEvent) => {
if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(o => !o); }
if (e.key === "Escape") setOpen(false);
};
window.addEventListener("keydown", onKey);
return () => window.removeEventListener("keydown", onKey);
}, []);


const results = useMemo(() => ITEMS.filter(i => i.label.toLowerCase().includes(q.toLowerCase())), [q]);


if (!open) return null;
return (
<div className="fixed inset-0 z-[60] grid place-items-start pt-24 bg-black/50" onClick={() => setOpen(false)}>
<div className="glass w-full max-w-xl mx-auto rounded-2xl p-2" onClick={e => e.stopPropagation()}>
<div className="flex items-center gap-2 px-3 py-2">
<Search className="w-4 h-4 opacity-70" />
<input autoFocus placeholder="Type to search…" value={q} onChange={(e)=>setQ(e.target.value)} className="w-full bg-transparent outline-none py-2" />
<kbd className="text-xs opacity-60">Esc</kbd>
</div>
<div className="max-h-72 overflow-auto">
{results.map((r)=> {
const Icon = r.icon; return (
<a key={r.href} href={r.href} onClick={()=>setOpen(false)} className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl">
<Icon className="w-4 h-4"/><span>{r.label}</span>
</a>
);
})}
{results.length===0 && <div className="px-3 py-6 text-sm opacity-70">No results</div>}
</div>
</div>
</div>
);
}