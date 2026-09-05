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
  FaUser,
} from "react-icons/fa";

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
      className={`absolute z-10 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-2 pr-4 py-1.5 shadow-lg ${className}`}
    >
      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 text-xs">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold text-slate-800">{title}</div>
        {subtitle && (
          <div className="text-[10px] text-slate-500 -mt-0.5">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

function IconChip({ icon, className = "" }: { icon: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg ${className}`}
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
      <div className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
        {value}
      </div>
      <div className={`text-xs ${dark ? "text-white/80" : "text-slate-600"}`}>
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
    <div className={`relative rounded-3xl overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />
      )}
      {children}
    </div>
  );
}

/* ---------- Main component ---------- */

export default function HeroVisual() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-7xl">
        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-[48px] pointer-events-none" />

        <div className="bg-white rounded-[40px] overflow-hidden border shadow-2xl relative z-10">
          {/* Browser Header */}
          <div className="h-16 border-b flex items-center px-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <div className="w-3 h-3 rounded-full bg-blue-900" />
            </div>
            <div className="mx-auto flex items-center gap-2 bg-slate-100 px-8 py-2 rounded-full text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              https://youragency.com
            </div>
          </div>

          {/* Bento Grid */}
          <div className="p-5">
            <div className="grid grid-cols-12 gap-4">
              {/* LEFT: tall hero tile */}
              <div className="relative col-span-12 lg:col-span-5 flex flex-col gap-4">
                <Tile src="/images/team.jpg" alt="Team" className="h-[463px]">
                  <Badge
                    icon={<FaBrain />}
                    title="AI-Driven"
                    subtitle="Innovation"
                    className="top-4 left-4"
                  />
                  <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Est. 2014
                  </div>
                  <StatOverlay
                    value="10+"
                    label="Years of Innovation"
                    className="bottom-4 left-4"
                  />
                </Tile>

                <Tile src="/images/office.jpg" alt="Office" className="h-[180px]" overlay={false} />

                {/* Floating avatar-stack badge, overlapping bottom-left of the stack */}
                <div className="absolute -bottom-3 -left-3 z-20 flex items-center gap-2 bg-white shadow-lg rounded-full pl-1.5 pr-4 py-1.5">
                  <div className="flex -space-x-2">
                    {["bg-green-700", "bg-slate-700", "bg-blue-900", "bg-slate-400"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${c} border-2 border-white flex items-center justify-center text-white`}
                        >
                          <FaUser className="h-3 w-3" />
                        </div>
                      )
                    )}
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-semibold text-slate-800">
                      100+ Team
                    </div>
                    <div className="text-[10px] text-slate-500 -mt-0.5">Engineers</div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Tile src="/images/code.jpg" alt="Code" className="h-56">
                    <Badge
                      icon={<FaGlobe />}
                      title="Global Reach"
                      className="top-4 left-4"
                    />
                    <StatOverlay
                      value="30+"
                      label="Gov &amp; Health Partners"
                      className="bottom-3 left-4"
                    />
                  </Tile>

                  <div className="relative h-56 rounded-3xl overflow-hidden bg-slate-900">
                    <IconChip
                      icon={<FaAward className="text-slate-300" />}
                      className="top-4 right-4 bg-slate-800"
                    />
                    <StatOverlay
                      value="50+"
                      label="Platforms Delivered"
                      className="bottom-3 left-4"
                    />
                    <div className="absolute -right-3 bottom-8 z-10 bg-white/95 backdrop-blur rounded-full pl-2 pr-4 py-1.5 shadow-lg flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs">
                        <FaShieldAlt />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800">
                        Trusted Since 2014
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
                  <Image
                    src="/images/workspace.jpg"
                    alt="Workspace"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                  />
                  <Badge
                    icon={<FaBrain className="text-black" />}
                    title="AI-Driven"
                    subtitle="Engineering"
                    className="top-4 left-4 bg-slate-900/80 [&>div:first-child]:!text-black [&>div>div:first-child]:!text-white [&>div>div:last-child]:!text-slate-300"
                  />
                  <StatOverlay
                    value="100+"
                    label="Engineers"
                    className="bottom-3 right-4 text-right"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Tile src="/images/laptop.jpg" alt="Laptop" className="h-44" />
                  <Tile src="/images/programming.jpg" alt="Programming" className="h-44" />
                  <div className="relative h-44 rounded-3xl overflow-hidden bg-gradient-to-b ">
                    <Image
                      src="/images/server.jpg"
                      alt="Server"
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-slate-600 text-xs">
                      <FaPalette />
                    </div>
                    <div className="absolute bottom-3 left-3 z-10">
                      <div className="text-[10px] tracking-wide text-slate-700 font-medium">
                        Design-first
                      </div>
                      <div className="text-lg font-bold text-slate-900 -mt-0.5">UI/UX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements outside the main card */}
        <div className="hidden xl:block absolute -left-24 top-44 z-20">
          <TerminalCard />
        </div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-36 top-1 bg-white shadow-xl rounded-3xl p-5 z-20 border border-blue-100"
        >
          <FaReact className="text-4xl text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -right-10 top-60 bg-green-500 shadow-xl rounded-3xl p-5 z-20"
        >
          <FaShieldAlt className="text-2xl text-white" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -left-10 bottom-40 bg-slate-700 shadow-xl rounded-3xl p-5 z-20"
        >
          <FaServer className="text-3xl text-white" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute right-20 bg-white shadow-xl rounded-3xl p-5 z-20 border border-red-100"
        >
          <FaCode className="text-3xl text-red-600" />
        </motion.div>
      </div>
    </div>
  );
}