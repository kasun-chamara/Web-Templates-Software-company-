"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Video,
  Monitor,
  MonitorSmartphone,
  Wrench,
  CalendarCheck,
  Plug,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Lock,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const tools = [
  { icon: Video, name: "Zoom", desc: "Video meetings", color: "#2D8CFF", from: "#5CA8FF", to: "#0B5FCC", href: "https://zoom.us/download" },
  { icon: Monitor, name: "AnyDesk", desc: "Remote desktop", color: "#EF4B36", from: "#FF7A63", to: "#C62E1F", href: "https://anydesk.com/en/downloads" },
  { icon: MonitorSmartphone, name: "TeamViewer", desc: "Remote support", color: "#0E8EE9", from: "#0E8EE9", to: "#00305F", href: "https://www.teamviewer.com/en/download/" },
  { icon: Wrench, name: "AnyViewer", desc: "Remote access", color: "#0E9F6E", from: "#3DCF9E", to: "#076A4C", href: "https://www.anyviewer.com/download.html" },
];

const steps = [
  { icon: CalendarCheck, title: "Book a session", desc: "Message us on WhatsApp or through the contact page." },
  { icon: Plug, title: "Connect your way", desc: "Join with the tool you already use — no complex setup." },
  { icon: CheckCircle2, title: "We fix it live", desc: "Watch us solve it on screen and ask anything as we go." },
];

export default function RemoteSupport() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(15,23,42,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,43,0,0.10) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF2B00]" />
            Help when you need it
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Remote{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #FF7A45)" }}
            >
              Support
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-500 dark:text-zinc-400">
            Book a session and we&apos;ll connect to your screen with your preferred tool — to fix issues,
            walk you through features or train your team.
          </p>
        </div>

        {/* How it works */}
        <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-7 hidden h-[2px] bg-gradient-to-r from-[#FFB020] via-[#FF2B00] to-[#7A1600] opacity-60 sm:block" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A45] to-[#FF2B00] text-white shadow-[0_12px_28px_-10px_rgba(255,43,0,0.6)] ring-4 ring-white dark:ring-zinc-950">
                <Icon className="h-6 w-6" />
                <span className="font-num absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1A0400] text-[10px] font-bold text-white dark:bg-white dark:text-[#1A0400]">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-slate-500 dark:text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.a
                key={t.name}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_4px_20px_-8px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1.5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)]"
              >
                {/* Brand-coloured glow + border on hover */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${t.color}22, transparent 70%)`,
                    boxShadow: `inset 0 0 0 1px ${t.color}66`,
                  }}
                />
                <span className="relative">
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                  />
                  <span
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </span>
                <div className="relative">
                  <div className="text-base font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="mt-0.5 text-sm text-slate-500 dark:text-zinc-400">{t.desc}</div>
                </div>
                <span
                  className="relative inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-semibold opacity-70 transition-all duration-300 group-hover:opacity-100"
                  style={{ color: t.color, background: `${t.color}14` }}
                >
                  Download
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Help bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative mt-10 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8"
          style={{ background: "linear-gradient(120deg, #1A0400 0%, #3a0a00 60%, #FF2B00 140%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.2px)",
              backgroundSize: "18px 18px",
              maskImage: "radial-gradient(circle at 100% 50%, black 0%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle at 100% 50%, black 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="text-xl font-bold text-white">Need help right now?</div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
              <Lock className="h-3.5 w-3.5" /> Secure, encrypted sessions — you stay in control of your screen.
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href="https://wa.me/447751981261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1A0400] transition-transform hover:-translate-y-0.5"
            >
              Book a session <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
