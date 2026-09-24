"use client";

import Image from "next/image";
import TerminalCard from "./TerminalCard";
import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaReact,
  FaServer,
  FaCode,
  FaBrain,
  FaGlobe,
  FaAward,
  FaPalette,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaMousePointer,
  FaTools,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Small reusable pieces ---------- */

function Badge({
  icon,
  title,
  subtitle,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-2.5 rounded-full bg-white/80 py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.25)] ring-1 ring-black/5 backdrop-blur-md dark:bg-zinc-900/80 dark:shadow-black/30 dark:ring-white/10 ${className}`}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-[11px] text-[#FF2B00] dark:bg-orange-500/10 dark:text-[#FF5A33]">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold text-slate-800 dark:text-white">{title}</div>
        {subtitle && (
          <div className="-mt-0.5 text-[10px] text-slate-500 dark:text-zinc-400">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

function IconChip({ icon, className = "" }: { icon: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute z-10 flex h-9 w-9 items-center justify-center rounded-full shadow-lg ring-1 ring-white/10 ${className}`}
    >
      {icon}
    </div>
  );
}

function StatOverlay({
  value,
  label,
  className = "",
  dark = true,
}: {
  value: string;
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div
        className={`text-2xl font-semibold tracking-tight tabular-nums ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {value}
      </div>
      <div
        className={`text-[11px] font-medium uppercase tracking-[0.12em] ${
          dark ? "text-white/75" : "text-slate-500"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------- Vector art tiles ---------- */

function ArtTile({
  className = "",
  bg,
  delay = 0,
  dots = "light",
  children,
}: {
  className?: string;
  bg?: string;
  delay?: number;
  dots?: "light" | "dark";
  children?: React.ReactNode;
}) {
  const dot = dots === "dark" ? "rgba(15,23,42,0.22)" : "rgba(255,255,255,0.22)";
  const dotStrong = dots === "dark" ? "rgba(15,23,42,0.4)" : "rgba(255,255,255,0.45)";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-slate-200/60 transition-shadow duration-500 hover:shadow-[0_24px_50px_-20px_rgba(255,43,0,0.45)] dark:ring-white/10 ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      {/* Apple-style dot texture: fine even grid + halftone corner */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dot} 0.8px, transparent 1px)`,
          backgroundSize: "10px 10px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotStrong} 1.3px, transparent 1.6px)`,
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 55%)",
        }}
      />
      {children}
      {/* Shine sweep on hover */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 z-[5] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[120%] group-hover:opacity-100" />
    </motion.div>
  );
}

/** Mobile app screen */
function MobileArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.06]">
      <div className="hero-float h-[78%] w-[38%] min-w-[44px] rounded-xl border-[3px] border-slate-900 bg-white p-1.5 shadow-xl">
        <div className="mx-auto mb-1.5 h-0.5 w-1/3 rounded-full bg-slate-300" />
        <div className="h-[34%] rounded-md bg-gradient-to-br from-fuchsia-500 to-orange-400" />
        <div className="mt-1.5 space-y-1">
          <div className="h-1 w-full rounded-full bg-slate-200" />
          <div className="h-1 w-2/3 rounded-full bg-slate-200" />
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-1">
          <div className="h-3 rounded bg-sky-300" />
          <div className="h-3 rounded bg-emerald-300" />
        </div>
      </div>
      {/* Notification dot */}
      <div className="absolute right-[24%] top-[12%]">
        <span className="absolute inset-0 animate-ping rounded-full bg-yellow-300" />
        <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-yellow-300 text-[8px] font-bold text-slate-900 shadow-md">
          1
        </span>
      </div>
      <div className="hero-float absolute bottom-[16%] left-[14%] h-3 w-3 rotate-45 rounded-sm bg-white/80" style={{ animationDelay: "1s" }} />
    </div>
  );
}

/** Analytics bars */
function ChartArt() {
  const bars = [
    ["35%", "#38BDF8"], ["55%", "#A78BFA"], ["45%", "#F472B6"], ["75%", "#FF7A45"], ["62%", "#FFD166"],
  ];
  return (
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
      <div className="absolute inset-x-[14%] bottom-[18%] top-[22%] flex items-end justify-between gap-1.5">
        {bars.map(([h, c], i) => (
          <div
            key={i}
            className="hero-grow flex-1 rounded-t-md"
            style={{ height: h, background: c, animationDelay: `${0.5 + i * 0.12}s` }}
          />
        ))}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-x-[14%] bottom-[18%] top-[22%] h-[60%] w-[72%]">
        <polyline
          points="0,70 25,50 50,58 75,22 100,34"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
          className="hero-draw"
        />
      </svg>
      <div className="absolute left-[14%] top-[10%] flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold text-emerald-600 sm:text-[10px]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />▲ 24%
      </div>
    </div>
  );
}

/** Design palette shapes with a moving cursor */
function DesignArt() {
  return (
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
      <div className="absolute left-[12%] top-[16%] h-[42%] w-[42%]">
        <div className="hero-float h-full w-full rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 opacity-90 mix-blend-multiply dark:mix-blend-screen" />
      </div>
      <div className="absolute left-[34%] top-[10%] h-[36%] w-[36%]">
        <div className="hero-float h-full w-full rotate-12 rounded-2xl bg-gradient-to-br from-sky-300 to-indigo-500 opacity-90 mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="absolute left-[28%] top-[34%]">
        <div className="hero-float h-0 w-0 border-x-[18px] border-b-[30px] border-x-transparent border-b-amber-400 opacity-90 sm:border-x-[26px] sm:border-b-[44px]" style={{ animationDelay: "2.2s" }} />
      </div>
      <div className="hero-cursor absolute left-[58%] top-[44%] z-[6] drop-shadow-md">
        <FaMousePointer className="text-sm text-slate-900 dark:text-white" />
        <span className="ml-3 mt-0.5 block w-fit rounded-md bg-[#FF2B00] px-1.5 py-0.5 text-[8px] font-bold text-white">You</span>
      </div>
    </div>
  );
}

/** Team of colourful people */
function TeamArt() {
  const people = [
    { x: 30, skin: "#F2C6A0", shirt: "#FFFFFF", hair: "#3B2314", scale: 0.9 },
    { x: 72, skin: "#8D5A3B", shirt: "#FF2B00", hair: "#1F140D", scale: 1.05 },
    { x: 116, skin: "#F5D0B5", shirt: "#FF7A45", hair: "#B45309", scale: 1.15 },
    { x: 160, skin: "#C68B63", shirt: "#E5E5E5", hair: "#111827", scale: 1 },
  ];
  return (
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
      <svg viewBox="0 0 200 90" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
        {/* connection arcs */}
        <path
          d="M30 34 Q 51 14 72 30 Q 94 10 116 26 Q 138 10 160 30"
          fill="none"
          stroke="#FF7A45"
          strokeOpacity="0.7"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          className="hero-flow"
        />
        {people.map((pp, i) => {
          const s = pp.scale;
          const headY = 90 - 44 * s;
          return (
            <g key={i} className="hero-bob" style={{ animationDelay: `${i * 0.35}s` }}>
              <path
                d={`M${pp.x - 17 * s} 90 Q ${pp.x - 17 * s} ${90 - 26 * s} ${pp.x} ${90 - 26 * s} Q ${pp.x + 17 * s} ${90 - 26 * s} ${pp.x + 17 * s} 90 Z`}
                fill={pp.shirt}
              />
              <circle cx={pp.x} cy={headY} r={10 * s} fill={pp.skin} />
              <path
                d={`M${pp.x - 10 * s} ${headY - 1 * s} A ${10 * s} ${10 * s} 0 0 1 ${pp.x + 10 * s} ${headY - 1 * s} Q ${pp.x} ${headY - 6 * s} ${pp.x - 10 * s} ${headY - 1 * s} Z`}
                fill={pp.hair}
              />
            </g>
          );
        })}
        {/* chat bubble with typing dots */}
        <g className="hero-bob">
          <rect x="128" y="4" width="34" height="16" rx="8" fill="white" />
          <path d="M136 20 L 134 25 L 141 20 Z" fill="white" />
          {["#FF2B00", "#1A0400", "#FF7A45"].map((c, i) => (
            <circle key={c} cx={138 + i * 7} cy="12" r="1.8" fill={c} className="hero-dot" style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </g>
        {/* sparkles */}
        <circle cx="12" cy="18" r="2" fill="#FF2B00" className="hero-twinkle" />
        <circle cx="188" cy="46" r="1.6" fill="#FF7A45" className="hero-twinkle" style={{ animationDelay: "0.8s" }} />
        <circle cx="96" cy="8" r="1.4" fill="white" className="hero-twinkle" style={{ animationDelay: "1.4s" }} />
      </svg>
    </div>
  );
}

/** Stacked platform layers — web, dashboard, mobile */
function PlatformsArt() {
  return (
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
      {/* back layer: website */}
      <div className="hero-float absolute right-[6%] top-[22%] w-[52%] -rotate-6 rounded-lg bg-gradient-to-br from-cyan-300 to-sky-500 p-2 shadow-xl">
        <div className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-white/80" />
          <span className="h-1 w-1 rounded-full bg-white/80" />
          <span className="h-1 w-1 rounded-full bg-white/80" />
        </div>
        <div className="mt-1.5 h-5 rounded bg-white/40 sm:h-7" />
        <div className="mt-1 h-1 w-2/3 rounded-full bg-white/60" />
      </div>
      {/* middle layer: dashboard */}
      <div className="hero-float absolute right-[14%] top-[38%] w-[46%] rotate-3 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 p-2 shadow-xl" style={{ animationDelay: "0.7s" }}>
        <div className="flex h-6 items-end gap-1 sm:h-8">
          {["40%", "70%", "55%", "90%", "65%"].map((h, i) => (
            <span key={i} className="hero-grow flex-1 rounded-sm bg-white/70" style={{ height: h, animationDelay: `${0.6 + i * 0.1}s` }} />
          ))}
        </div>
        <div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/60" />
      </div>
      {/* front layer: phone */}
      <div className="hero-float absolute right-[8%] top-[46%] h-[42%] w-[16%] min-w-[30px] -rotate-3 rounded-lg border-2 border-white/90 bg-gradient-to-b from-amber-300 to-orange-500 p-1 shadow-2xl" style={{ animationDelay: "1.4s" }}>
        <div className="mx-auto h-0.5 w-1/2 rounded-full bg-white/80" />
        <div className="mt-1 h-1/3 rounded bg-white/50" />
        <div className="mt-1 h-0.5 w-full rounded-full bg-white/70" />
        <div className="mt-0.5 h-0.5 w-2/3 rounded-full bg-white/70" />
      </div>
      {/* check badge */}
      <div className="absolute right-[48%] top-[64%] hidden sm:block">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-white shadow-lg">
          ✓
        </span>
      </div>
    </div>
  );
}

/* ---------- Floating element ---------- */

function Floater({
  className = "",
  animate,
  duration,
  delay = 0,
  children,
}: {
  className?: string;
  animate: Record<string, number[]>;
  duration: number;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl bg-white/90 p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 backdrop-blur dark:bg-zinc-900/90 dark:shadow-black/30 dark:ring-zinc-800"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------- Main component ---------- */

export default function HeroVisual() {
  return (
    <div className="relative flex w-full items-center justify-center px-2 py-6 sm:p-8 lg:min-h-screen">
      <div className="relative w-full max-w-7xl">
        {/* Ambient glow behind the frame */}
        <div className="pointer-events-none absolute -inset-x-10 -top-20 bottom-0 -z-10">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-orange-400/25 blur-[120px]" />
          <div className="absolute right-[8%] top-24 h-80 w-80 rounded-full bg-amber-300/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-500/15 blur-[110px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_40px_120px_-30px_rgba(15,23,42,0.4)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
        >
          {/* Browser Header */}
          <div className="flex h-12 items-center border-b border-slate-100 px-4 dark:border-zinc-800 sm:h-14 sm:px-5">
            <div className="flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3" style={{ background: "#FF2B00" }} />
              <div className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3" style={{ background: "#D12300" }} />
              <div className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3" style={{ background: "#751400" }} />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-full bg-slate-50 px-5 py-1.5 text-xs text-slate-400 ring-1 ring-slate-100 dark:bg-zinc-800 dark:text-zinc-500 dark:ring-zinc-700 sm:px-8 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Welcome to Kapingar
            </div>
          </div>

          {/* Bento Grid */}
          <div className="p-3 sm:p-5">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* LEFT: tall hero tile */}
              <div className="relative col-span-12 flex flex-col gap-3 sm:gap-4 lg:col-span-5">
                <ArtTile
                  delay={0.15}
                  className="h-[340px] sm:h-[463px]"
                  bg="radial-gradient(circle at 30% 20%, #FF7A45 0%, transparent 45%), radial-gradient(circle at 80% 80%, #A855F7 0%, transparent 50%), linear-gradient(135deg, #1A0400 0%, #3B0764 100%)"
                >
                  <Image
                    src="/images/team.jpg"
                    alt="AI-driven innovation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <Badge
                    icon={<FaBrain />}
                    title="AI-Driven"
                    subtitle="Innovation"
                    className="left-4 top-4"
                  />
                  <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/40 px-3 py-1.5 text-xs text-white ring-1 ring-white/10 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Est. 2023
                  </div>
                  <StatOverlay
                    value="3+"
                    label="Years of Innovation"
                    className="bottom-4 left-4"
                  />
                </ArtTile>

                <ArtTile
                  delay={0.45}
                  className="h-[130px] sm:h-[180px]"
                  bg="radial-gradient(circle at 85% 110%, rgba(255,43,0,0.55) 0%, transparent 55%), radial-gradient(circle at 10% 10%, rgba(255,122,69,0.35) 0%, transparent 40%), linear-gradient(135deg, #0d0100 0%, #1A0400 100%)"
                >
                  <TeamArt />
                </ArtTile>

                {/* Floating avatar-stack badge */}
                <div className="absolute -bottom-3 z-20 flex items-center gap-2.5 rounded-full bg-white/80 py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.25)] ring-1 ring-black/5 backdrop-blur-md dark:bg-zinc-900/80 dark:shadow-black/30 dark:ring-white/10">
                  <div className="flex -space-x-2">
                    {["bg-[#FF2B00]", "bg-black", "bg-[#FF7A45]", "bg-zinc-700"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${c} border-2 border-white text-white dark:border-zinc-900`}
                        >
                          <FaRegUser className="h-3 w-3" />
                        </div>
                      )
                    )}
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-semibold text-slate-800 dark:text-white">
                      Team
                    </div>
                    <div className="-mt-0.5 text-[10px] text-slate-500 dark:text-zinc-400">Engineers</div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-12 flex flex-col gap-3 sm:gap-4 lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <ArtTile
                    delay={0.25}
                    className="h-44 sm:h-56"
                    bg="linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #0E7490 100%)"
                  >
                    <Image
                      src="/images/code.jpg"
                      alt="Global reach"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <Badge
                      icon={<FaGlobe />}
                      title="Global Reach"
                      className="left-4 top-4"
                    />
                    <StatOverlay
                      value="10+"
                      label="Partners"
                      className="bottom-3 left-4"
                    />
                  </ArtTile>

                  <ArtTile
                    delay={0.32}
                    className="h-44 sm:h-56"
                    bg="radial-gradient(circle at 80% 30%, #F472B6 0%, transparent 45%), linear-gradient(135deg, #1A0400 0%, #7A1600 55%, #FF2B00 100%)"
                  >
                    <PlatformsArt />
                    <IconChip
                      icon={<FaAward className="text-amber-300" />}
                      className="right-4 top-4 bg-slate-800"
                    />
                    <StatOverlay
                      value="10+"
                      label="Platforms Delivered"
                      className="bottom-3 left-4"
                    />
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2 pr-4 shadow-lg ring-1 ring-slate-200/70 backdrop-blur dark:bg-zinc-900/90 dark:shadow-black/30 dark:ring-zinc-800">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-xs text-[#FF2B00] dark:bg-orange-500/10 dark:text-[#FF5A33]">
                        <FaShieldAlt />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800 dark:text-white">
                        Trusted Since 2023
                      </span>
                    </div>
                  </ArtTile>
                </div>

                <ArtTile
                  delay={0.4}
                  className="h-44 sm:h-56"
                  bg="linear-gradient(135deg, #020617 0%, #172554 100%)"
                >
                  <Image
                    src="/images/workspace.jpg"
                    alt="Workspace"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-40 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <Badge
                    icon={<FaTools />}
                    title="Modern Tech Stack"
                    subtitle="Tools & Frameworks"
                    className="left-4 top-4"
                  />
                  <StatOverlay
                    value="100+"
                    label="Tools"
                    className="bottom-3 right-4 text-right"
                  />
                </ArtTile>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <ArtTile delay={0.5} className="h-28 sm:h-44" bg="linear-gradient(135deg, #F97316 0%, #EC4899 100%)">
                    <MobileArt />
                  </ArtTile>
                  <ArtTile delay={0.58} className="h-28 sm:h-44" bg="linear-gradient(135deg, #0F172A 0%, #1E293B 100%)">
                    <ChartArt />
                  </ArtTile>
                  <ArtTile delay={0.66} dots="dark" className="h-28 bg-gradient-to-br from-amber-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800 sm:h-44">
                    <DesignArt />
                    <div className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs text-slate-600 ring-1 ring-slate-200/70 dark:bg-zinc-800/90 dark:text-zinc-400 dark:ring-zinc-700">
                      <FaPalette />
                    </div>
                    <div className="absolute bottom-3 left-3 z-10">
                      <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-zinc-400">
                        Design-first
                      </div>
                      <div className="-mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                        UI/UX
                      </div>
                    </div>
                  </ArtTile>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating elements outside the main card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="absolute -left-24 top-44 z-20 hidden xl:block"
        >
          <TerminalCard />
        </motion.div>

        <Floater
          className="-right-20 top-1 hidden xl:block 2xl:-right-36"
          animate={{ y: [0, -12, 0], rotate: [0, 6, 0, -6, 0] }}
          duration={6}
          delay={0.2}
        >
          <FaReact className="text-4xl text-blue-500" />
        </Floater>

        <Floater
          className="-right-6 top-60 hidden xl:block 2xl:-right-10"
          animate={{ y: [0, 14, 0] }}
          duration={5}
          delay={0.35}
        >
          <FaShieldAlt className="text-2xl text-[#FF2B00]" />
        </Floater>

        <Floater
          className="-left-6 bottom-40 hidden xl:block 2xl:-left-10"
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0, -8, 0] }}
          duration={5.5}
          delay={0.5}
        >
          <FaServer className="text-3xl text-slate-700 dark:text-zinc-300" />
        </Floater>

        <Floater
          className="right-8 -bottom-6 hidden xl:block 2xl:right-20"
          animate={{ y: [0, 12, 0] }}
          duration={4.5}
          delay={0.45}
        >
          <FaCode className="text-3xl text-slate-900 dark:text-white" />
        </Floater>
      </div>

      <style jsx global>{`
        @keyframes hero-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .hero-spin {
          animation: hero-spin 40s linear infinite;
        }

        @keyframes hero-flow {
          to {
            stroke-dashoffset: -8;
          }
        }
        .hero-flow {
          animation: hero-flow 1.4s linear infinite;
        }

        @keyframes hero-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.9);
            opacity: 0.05;
          }
        }
        .hero-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: hero-pulse 2.6s ease-in-out infinite;
        }

        @keyframes hero-float {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -6px;
          }
        }
        .hero-float {
          animation: hero-float 4s ease-in-out infinite;
        }

        @keyframes hero-bob {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -1.5px;
          }
        }
        .hero-bob {
          animation: hero-bob 3s ease-in-out infinite;
        }

        @keyframes hero-dot {
          0%,
          60%,
          100% {
            translate: 0 0;
          }
          30% {
            translate: 0 -2px;
          }
        }
        .hero-dot {
          animation: hero-dot 1.1s ease-in-out infinite;
        }

        @keyframes hero-twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
        .hero-twinkle {
          animation: hero-twinkle 2s ease-in-out infinite;
        }

        @keyframes hero-grow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
        .hero-grow {
          transform-origin: bottom;
          animation: hero-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes hero-type {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .hero-type {
          transform-origin: left;
          animation: hero-type 0.5s ease-out both;
        }

        @keyframes hero-draw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .hero-draw {
          stroke-dasharray: 100;
          animation: hero-draw 1.6s ease-out 1.1s both;
        }

        @keyframes hero-blink {
          50% {
            opacity: 0;
          }
        }
        .hero-blink {
          animation: hero-blink 1s steps(1) infinite;
        }

        @keyframes hero-cursor {
          0%,
          100% {
            translate: 0 0;
          }
          35% {
            translate: -34px -18px;
          }
          70% {
            translate: -12px 10px;
          }
        }
        .hero-cursor {
          animation: hero-cursor 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-spin,
          .hero-flow,
          .hero-pulse,
          .hero-float,
          .hero-bob,
          .hero-dot,
          .hero-twinkle,
          .hero-grow,
          .hero-type,
          .hero-draw,
          .hero-blink,
          .hero-cursor {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
