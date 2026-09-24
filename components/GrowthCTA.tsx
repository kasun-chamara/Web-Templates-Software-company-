"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Palette } from "lucide-react";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Years of Trust" },
  { value: "100%", label: "Client Satisfaction" },
];

const cards = [
  {
    icon: Rocket,
    label: "Platform Launch",
    sub: "Live in weeks, not months",
    className: "left-0 top-8 w-64 -rotate-6",
    delay: 0.1,
    glow: "255,43,0",
    hex: "#FF2B00",
  },
  {
    icon: ShieldCheck,
    label: "Security Audit",
    sub: "Pen-tested before ship",
    className: "right-2 top-0 w-64 rotate-6",
    delay: 0.2,
    glow: "209,35,0",
    hex: "#D12300",
  },
  {
    icon: Palette,
    label: "Product Design",
    sub: "Pixel-perfect, on-brand",
    className: "left-16 bottom-0 w-72 -rotate-2",
    delay: 0.3,
    glow: "117,20,0",
    hex: "#751400",
  },
];

type CardData = (typeof cards)[number];

function FloatingCard({ card: c }: { card: CardData }) {
  const [hovered, setHovered] = useState(false);
  const Icon = c.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE, delay: c.delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`absolute min-h-[250px] rounded-3xl border bg-white dark:bg-zinc-900 p-6 transition-colors duration-300 ${
        hovered ? "bg-orange-50/60 dark:bg-orange-950/30" : ""
      } ${c.className}`}
      style={{ borderColor: hovered ? `${c.hex}80` : "rgb(226 232 240)" }}
    >
      {/* Color patch glow behind the card */}
      <div
        className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] blur-2xl"
        style={{ background: `rgba(${c.glow},0.12)` }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5 + c.delay * 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_8px_20px_-4px_rgba(255,43,0,0.45)]"
          style={{ backgroundImage: "linear-gradient(135deg, #FF2B00, #A31B00)" }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="mt-5 space-y-2">
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-zinc-700" />
          <div className="h-2 w-4/5 rounded-full bg-slate-50 dark:bg-zinc-800" />
        </div>
        <div className="mt-4 text-sm font-semibold text-slate-800 dark:text-white">{c.label}</div>
        <div className="mt-0.5 text-xs text-slate-400 dark:text-zinc-500">{c.sub}</div>
      </motion.div>
    </motion.div>
  );
}

export default function GrowthCTA() {
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-zinc-950 py-24 sm:py-32"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <MouseGlow x={x} y={y} color="rgba(255,43,0,0.3)" midColor="rgba(255,43,0,0.08)" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-[26rem] w-[26rem] rounded-full bg-orange-200/30 blur-[140px]" />
        <div className="absolute bottom-0 right-[6%] h-[28rem] w-[28rem] rounded-full bg-orange-100/50 blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF2B00]/[0.06] blur-[130px]" />
      </div>

      {/* Dot grid, faded toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,43,0,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 90%)",
        }}
      />

      {/* Fine grain for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top edge line */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,43,0,0.35), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-zinc-400 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#FF2B00" }} />
            Open for New Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 text-[40px] font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            Have an Idea Worth
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #1A0400)" }}
            >
              Building?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-500 dark:text-zinc-400 sm:text-lg"
          >
            We partner with ambitious teams to design, build, and ship digital
            products that scale — from first prototype to national launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundImage: "linear-gradient(90deg, #FF2B00)" }}
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 8px 24px -6px rgba(255,43,0,0.4)",
                    "0 10px 34px -4px rgba(255,43,0,0.6)",
                    "0 8px 24px -6px rgba(255,43,0,0.4)",
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 flex items-center gap-2.5">
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 px-8 py-3.5 text-sm font-semibold text-slate-900 dark:text-white transition-all duration-300 hover:border-[#FF2B00]/40 hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              See Our Work
            </Link>
          </motion.div>

          <div className="mt-14 h-px w-full max-w-md bg-gradient-to-r from-slate-200 dark:from-zinc-800 via-slate-100 dark:via-zinc-900 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mt-8 flex max-w-md items-center gap-8"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="group cursor-default">
                  <div
                    className="h-[3px] w-6 rounded-full"
                    style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #1A0400)" }}
                  />
                  <div className="font-num mt-2 text-2xl font-bold text-slate-900 dark:text-white transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400 dark:text-zinc-500">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-slate-200 dark:bg-zinc-800" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — floating cards */}
        <div className="relative hidden h-[400px] lg:block">
          {/* Orbit ring for depth */}
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-200 dark:border-zinc-800" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/25 blur-[80px]" />

          {cards.map((c) => <FloatingCard key={c.label} card={c} />)}
        </div>
      </div>
    </section>
  );
}
