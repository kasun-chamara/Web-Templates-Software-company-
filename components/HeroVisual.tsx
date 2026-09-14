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
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[11px] text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
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

function Tile({
  src,
  alt,
  className = "",
  children,
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-slate-200/60 dark:ring-white/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      )}
      {children}
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
              youragency.com
            </div>
          </div>

          {/* Bento Grid */}
          <div className="p-3 sm:p-5">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* LEFT: tall hero tile */}
              <div className="relative col-span-12 flex flex-col gap-3 sm:gap-4 lg:col-span-5">
                <Tile src="/images/team.jpg" alt="Team" className="h-[340px] sm:h-[463px]">
                  <Badge
                    icon={<FaBrain />}
                    title="AI-Driven"
                    subtitle="Innovation"
                    className="left-4 top-4"
                  />
                  <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/40 px-3 py-1.5 text-xs text-white ring-1 ring-white/10 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Est. 2014
                  </div>
                  <StatOverlay
                    value="10+"
                    label="Years of Innovation"
                    className="bottom-4 left-4"
                  />
                </Tile>

                <Tile
                  src="/images/office.jpg"
                  alt="Office"
                  className="h-[130px] sm:h-[180px]"
                  overlay={false}
                />

                {/* Floating avatar-stack badge */}
                <div className="absolute -bottom-3 z-20 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 shadow-[0_12px_32px_-10px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/70 backdrop-blur dark:bg-zinc-900/90 dark:shadow-black/30 dark:ring-zinc-800">
                  <div className="flex -space-x-2">
                    {["bg-slate-800", "bg-slate-600", "bg-blue-700", "bg-blue-500"].map(
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
                      100+ Team
                    </div>
                    <div className="-mt-0.5 text-[10px] text-slate-500 dark:text-zinc-400">Engineers</div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-12 flex flex-col gap-3 sm:gap-4 lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Tile src="/images/code.jpg" alt="Code" className="h-44 sm:h-56">
                    <Badge
                      icon={<FaGlobe />}
                      title="Global Reach"
                      className="left-4 top-4"
                    />
                    <StatOverlay
                      value="30+"
                      label="Gov & Health Partners"
                      className="bottom-3 left-4"
                    />
                  </Tile>

                  <div className="relative h-44 overflow-hidden rounded-2xl bg-slate-950 ring-1 ring-slate-800 sm:h-56">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.35), transparent 55%)",
                      }}
                    />
                    <IconChip
                      icon={<FaAward className="text-blue-300" />}
                      className="right-4 top-4 bg-slate-800"
                    />
                    <StatOverlay
                      value="50+"
                      label="Platforms Delivered"
                      className="bottom-3 left-4"
                    />
                    <div className="absolute -right-3 bottom-8 z-10 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2 pr-4 shadow-lg ring-1 ring-slate-200/70 backdrop-blur dark:bg-zinc-900/90 dark:shadow-black/30 dark:ring-zinc-800">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <FaShieldAlt />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800 dark:text-white">
                        Trusted Since 2014
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 to-blue-950 ring-1 ring-slate-800 sm:h-56">
                  <Image
                    src="/images/workspace.jpg"
                    alt="Workspace"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <Badge
                    icon={<FaBrain />}
                    title="AI-Driven"
                    subtitle="Engineering"
                    className="left-4 top-4"
                  />
                  <StatOverlay
                    value="100+"
                    label="Engineers"
                    className="bottom-3 right-4 text-right"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <Tile src="/images/laptop.jpg" alt="Laptop" className="h-28 sm:h-44" />
                  <Tile src="/images/programming.jpg" alt="Programming" className="h-28 sm:h-44" />
                  <div className="relative h-28 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/60 dark:bg-zinc-900 dark:ring-zinc-800 sm:h-44">
                    <Image
                      src="/images/server.jpg"
                      alt="Server"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-zinc-900 dark:via-zinc-900/40" />
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
                  </div>
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
          <FaShieldAlt className="text-2xl text-blue-600" />
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
    </div>
  );
}
