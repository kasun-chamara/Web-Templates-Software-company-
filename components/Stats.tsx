"use client";

import React from "react";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";
import {
  Cloud,
  Server,
  Database,
  GitBranch,
  Terminal,
  Box,
  Boxes,
  ShieldCheck,
  Cpu,
  Workflow,
} from "lucide-react";

const tools = [
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "CI/CD Pipelines", icon: Workflow },
  { name: "Version Control", icon: GitBranch },
  { name: "Containerization", icon: Box },
  { name: "Orchestration", icon: Boxes },
  { name: "Databases", icon: Database },
  { name: "API Services", icon: Server },
  { name: "Security & Compliance", icon: ShieldCheck },
  { name: "Automation", icon: Terminal },
  { name: "System Performance", icon: Cpu },
];

// Soft squiggle lines, drawn in orange tones only
const MESH_LINES = [
  {
    id: "statsSquiggle1",
    d1: "M-100 60 Q 250 10 500 60 T 1000 60 T 1600 60",
    d2: "M-100 60 Q 250 110 500 60 T 1000 60 T 1600 60",
    duration: 14,
    delay: 0,
    strokeOpacity: 0.5,
  },
  {
    id: "statsSquiggle2",
    d1: "M-100 260 Q 300 210 600 260 T 1200 260 T 1700 260",
    d2: "M-100 260 Q 300 310 600 260 T 1200 260 T 1700 260",
    duration: 18,
    delay: 1.5,
    strokeOpacity: 0.35,
  },
];

export default function Stats() {
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: "#1A0400" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <MouseGlow x={x} y={y} color="rgba(255,122,61,0.5)" midColor="rgba(255,43,0,0.18)" />

      {/* Black vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #000000 100%)" }}
      />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-[#FF7A3D]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-[#FF2B00]/25 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 blur-[140px]" />
      </div>

      {/* Animated squiggle lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {MESH_LINES.map((line) => (
            <linearGradient key={line.id} id={line.id} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFB088" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFB088" stopOpacity={line.strokeOpacity} />
              <stop offset="100%" stopColor="#FFB088" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {MESH_LINES.map((line) => (
          <motion.path
            key={line.id}
            fill="none"
            stroke={`url(#${line.id})`}
            strokeWidth="1.5"
            initial={{ d: line.d1 }}
            animate={{ d: [line.d1, line.d2, line.d1] }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: line.delay,
            }}
          />
        ))}
      </svg>

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20">
        {/* Section header */}
        <div className="text-center mb-12 px-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Our Stack
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white mb-3">
            Built With the Right Tools
          </h2>
          <p className="text-white/70 text-lg">
            The engineering stack behind every product we ship
          </p>
        </div>

        {/* Marquee */}
        <div className="space-y-6">
          <div className="relative">
            <div className="flex w-max whitespace-nowrap animate-marquee-reverse">
              {[...tools, ...tools].map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`${tool.name}-${i}`}
                    className="group mr-3 sm:mr-6 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-4 w-4" style={{ color: "#FF2B00" }} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white/85 uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats badges */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-14 px-4">
          {[
            { number: "10+", label: "Tools & Platforms" },
            { number: "99.9%", label: "Uptime SLA" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="font-num text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-reverse {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        @media (max-width: 639px) {
          .animate-marquee-reverse {
            animation-duration: 22s;
          }
        }
      `}</style>
    </section>
  );
}
