"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type State = { ok: boolean; msg: string };

export default function ContactForm() {
  const [status, setStatus] = useState<State | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const email = String(payload.email || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ ok: false, msg: "Please enter a valid email." });
      setLoading(false);
      return;
    }

    try {
      // 🔹 از Formspree استفاده می‌کنیم
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "✅ Thanks! Your message was sent successfully." });
        (e.target as HTMLFormElement).reset();
      } else {
        const txt = await res.text();
        throw new Error(txt || "Failed to send");
      }
    } catch (err) {
      setStatus({ ok: false, msg: "⚠️ Could not send. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  const inputBase = [
    "rounded-xl px-4 py-3 outline-none transition",
    "border shadow-sm placeholder:text-slate-500",
    "bg-white text-slate-900 border-slate-300",
    "dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder:text-slate-400",
    "focus:ring-2 ring-brand-600/70 dark:ring-brand-500/60",
  ].join(" ");

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={[
        "rounded-3xl p-6 grid gap-4",
        "bg-white/85 border border-slate-200 backdrop-blur-xl",
        "dark:bg-white/5 dark:border-white/10",
      ].join(" ")}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Your name" className={inputBase} autoComplete="name" />
        <input required type="email" name="email" placeholder="Email" className={inputBase} autoComplete="email" />
      </div>

      <input name="subject" placeholder="Subject" className={inputBase} />
      <textarea required name="message" rows={5} placeholder="Your message..." className={inputBase} />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        disabled={loading}
        className={[
          "justify-self-start px-6 py-3 rounded-2xl",
          "bg-brand-600 text-white",
          "shadow-sm hover:shadow-md hover:translate-y-[-2px]",
          "disabled:opacity-60 disabled:hover:translate-y-0",
        ].join(" ")}
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      {status && (
        <p className={`${status.ok ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"} text-sm`}>
          {status.msg}
        </p>
      )}
    </motion.form>
  );
}
