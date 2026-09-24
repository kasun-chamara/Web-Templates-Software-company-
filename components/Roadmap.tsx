"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench,
  TrendingUp,
  Check,
  Flag,
  Bug,
  Search,
  Bell,
  Users,
  CircleDollarSign,
  GitBranch,
  MessageCircle,
  Calendar,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Stage {
  id: string;
  icon: React.ElementType;
  phase: string;
  title: string;
  duration: string;
  desc: string;
  deliverables: string[];
  color: string;
}

const stages: Stage[] = [
  {
    id: "discovery",
    icon: Lightbulb,
    phase: "Idea",
    title: "Discovery & Consultation",
    duration: "Week 1",
    desc: "We listen first. A free call to understand your business, your users and the problem the product must solve.",
    deliverables: ["Project brief", "Goals & success metrics", "Feasibility check"],
    color: "#FFB020",
  },
  {
    id: "planning",
    icon: ClipboardList,
    phase: "Plan",
    title: "Planning & Strategy",
    duration: "Week 1–2",
    desc: "We turn the idea into a clear plan — features, tech stack, milestones and a fixed quote, so there are no surprises.",
    deliverables: ["Feature scope", "Tech stack", "Timeline & quote"],
    color: "#FF8A3D",
  },
  {
    id: "design",
    icon: PenTool,
    phase: "Design",
    title: "UI/UX Design",
    duration: "Week 2–4",
    desc: "Wireframes, then pixel-perfect designs and a clickable prototype you can test before a single line of code.",
    deliverables: ["Wireframes", "Clickable prototype", "Design system"],
    color: "#FF5A1F",
  },
  {
    id: "development",
    icon: Code2,
    phase: "Build",
    title: "Development",
    duration: "Week 4–10",
    desc: "Agile sprints for web, mobile and backend. You see real progress every week with live demo links.",
    deliverables: ["Weekly demos", "Web & mobile apps", "APIs & integrations"],
    color: "#FF2B00",
  },
  {
    id: "testing",
    icon: ShieldCheck,
    phase: "Test",
    title: "Testing & QA",
    duration: "Throughout",
    desc: "Automated and manual testing on real devices, plus performance and security checks, so launch day is calm.",
    deliverables: ["Automated tests", "Security scan", "Performance audit"],
    color: "#D12300",
  },
  {
    id: "launch",
    icon: Rocket,
    phase: "Launch",
    title: "Deployment & Launch",
    duration: "Launch week",
    desc: "Cloud setup, CI/CD pipelines, app-store submission and a smooth go-live — with the team on standby.",
    deliverables: ["Cloud hosting", "CI/CD pipeline", "Go-live"],
    color: "#B91C1C",
  },
  {
    id: "support",
    icon: Wrench,
    phase: "Care",
    title: "Support & Maintenance",
    duration: "Ongoing",
    desc: "24/7 uptime monitoring, security updates and fast bug fixes to keep your product healthy after launch.",
    deliverables: ["Uptime monitoring", "Updates & fixes", "Backups"],
    color: "#7A1600",
  },
  {
    id: "growth",
    icon: TrendingUp,
    phase: "Grow",
    title: "Growth & Scale",
    duration: "Ongoing",
    desc: "Analytics, SEO and new features driven by real user data — we help your product grow with your business.",
    deliverables: ["Analytics & reports", "SEO & marketing", "New features"],
    color: "#1A0400",
  },
];

/* ─── Overview strip ─────────────────────────────────────── */
function StageStrip() {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="relative overflow-x-auto pb-4 [scrollbar-width:none]">
        <div className="relative flex min-w-[760px] items-start justify-between">
          {/* connector line */}
          <div className="absolute left-[6%] right-[6%] top-7 h-[3px] rounded-full bg-slate-200 dark:bg-zinc-800" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute left-[6%] right-[6%] top-7 h-[3px] origin-left rounded-full"
            style={{ background: "linear-gradient(90deg, #FFB020, #FF2B00, #1A0400)" }}
          />
          {stages.map(({ id, icon: Icon, phase, color }, i) => (
            <motion.a
              key={id}
              href={`#${id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.12 }}
              className="group relative z-10 flex w-[12%] flex-col items-center gap-3 text-center"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 dark:ring-zinc-950"
                style={{ background: color, boxShadow: `0 10px 24px -8px ${color}` }}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-num text-[10px] font-semibold tracking-[0.2em] text-slate-400 dark:text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="-mt-2 text-sm font-semibold text-slate-800 transition-colors group-hover:text-[#FF2B00] dark:text-zinc-200">
                {phase}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Stage illustrations ───────────────────────────────── */
function Panel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl sm:h-60"
      style={{
        background: `radial-gradient(circle at 85% 15%, ${color}66 0%, transparent 45%), linear-gradient(135deg, #1A0400 0%, #0d0100 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 0.8px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">{children}</div>
    </div>
  );
}

const glass = "rounded-xl border border-white/15 bg-white/10 backdrop-blur-md";

function DiscoveryArt() {
  return (
    <>
      {/* Glowing bulb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex flex-col items-center">
          <span className="absolute -inset-6 rounded-full bg-[#FFB020]/30 blur-2xl" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <span
              key={deg}
              className="rm-twinkle absolute left-1/2 top-[34px] h-2 w-[3px] -translate-x-1/2 rounded-full bg-[#FFD166]"
              style={{ transform: `rotate(${deg}deg) translateY(-50px)`, transformOrigin: "50% 0", animationDelay: `${deg / 180}s` }}
            />
          ))}
          <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[#FFE08A] to-[#FFB020] shadow-[0_0_40px_rgba(255,176,32,0.7)]">
            <Lightbulb className="h-9 w-9 text-[#7A1600]" />
          </div>
          <div className="relative -mt-1 h-3 w-8 rounded-b-md bg-zinc-300" />
          <div className="relative mt-0.5 h-1.5 w-6 rounded-b bg-zinc-400" />
        </div>
      </div>
      {/* Chat bubbles */}
      <div className="rm-float absolute left-[6%] top-[14%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[10px] font-semibold text-slate-800 shadow-lg sm:text-[11px]">
        What&apos;s the goal?
      </div>
      <div className="rm-float absolute bottom-[16%] right-[6%] rounded-2xl rounded-br-sm bg-[#FF2B00] px-3 py-2 text-[10px] font-semibold text-white shadow-lg sm:text-[11px]" style={{ animationDelay: "1.2s" }}>
        Who are the users?
      </div>
      {/* Sticky notes */}
      <div className="absolute bottom-[14%] left-[8%] h-12 w-12 -rotate-6 rounded-md bg-[#FFD166] p-1.5 shadow-lg">
        <div className="h-1 w-full rounded bg-[#7A1600]/40" />
        <div className="mt-1 h-1 w-2/3 rounded bg-[#7A1600]/40" />
        <div className="mt-1 h-1 w-3/4 rounded bg-[#7A1600]/40" />
      </div>
      <div className="absolute right-[10%] top-[14%] flex h-10 w-10 rotate-6 items-center justify-center rounded-md bg-[#FF8A3D] shadow-lg">
        <MessageCircle className="h-5 w-5 text-white" />
      </div>
    </>
  );
}

function PlanningArt() {
  const cols = [
    { title: "To do", cards: ["#FFB020", "#FF8A3D"] },
    { title: "Doing", cards: ["#FF2B00"] },
    { title: "Done", cards: ["#34D399", "#34D399", "#34D399"] },
  ];
  return (
    <>
      <div className={`absolute left-[6%] right-[26%] top-[12%] p-3 ${glass}`}>
        <div className="grid grid-cols-3 gap-2">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-white/70">{c.title}</div>
              <div className="space-y-1.5">
                {c.cards.map((col, i) => (
                  <div key={i} className="rounded-md bg-white/90 p-1.5">
                    <div className="h-1 w-3/4 rounded-full" style={{ background: col }} />
                    <div className="mt-1 h-1 w-1/2 rounded-full bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Gantt bars */}
      <div className={`absolute bottom-[10%] left-[6%] right-[26%] space-y-1.5 p-3 ${glass}`}>
        {[["0%", "30%", "#FFB020"], ["20%", "40%", "#FF8A3D"], ["45%", "45%", "#FF2B00"]].map(([l, w, c], i) => (
          <div key={i} className="relative h-2 rounded-full bg-white/10">
            <div className="rm-grow-x absolute h-full rounded-full" style={{ left: l, width: w, background: c, animationDelay: `${0.3 + i * 0.2}s` }} />
          </div>
        ))}
      </div>
      {/* Calendar + checklist */}
      <div className="rm-float absolute right-[5%] top-[14%] flex w-[17%] min-w-[54px] flex-col items-center rounded-xl bg-white p-2 shadow-xl">
        <Calendar className="h-5 w-5 text-[#FF2B00]" />
        <span className="mt-1 text-[9px] font-bold text-slate-800">Milestones</span>
      </div>
      <div className="rm-float absolute bottom-[12%] right-[5%] w-[17%] min-w-[54px] space-y-1 rounded-xl bg-white p-2 shadow-xl" style={{ animationDelay: "1s" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="flex h-2.5 w-2.5 items-center justify-center rounded-sm bg-[#FF2B00]">
              <Check className="h-2 w-2 text-white" />
            </span>
            <span className="h-1 flex-1 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
    </>
  );
}

function DesignArt() {
  return (
    <>
      {/* Wireframe */}
      <div className="absolute left-[8%] top-[16%] h-[68%] w-[26%] rounded-xl border-2 border-dashed border-white/40 p-2">
        <div className="h-[30%] rounded border border-dashed border-white/40" />
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/30" />
        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-white/30" />
        <div className="mt-2 grid grid-cols-2 gap-1">
          <div className="h-5 rounded border border-dashed border-white/40" />
          <div className="h-5 rounded border border-dashed border-white/40" />
        </div>
      </div>
      {/* Arrow */}
      <svg viewBox="0 0 60 20" className="absolute left-[37%] top-1/2 w-[12%] -translate-y-1/2">
        <path d="M2 10 H 52" stroke="#FF8A3D" strokeWidth="2.5" strokeDasharray="4 4" className="rm-dash" />
        <path d="M46 4 L 56 10 L 46 16" fill="none" stroke="#FF8A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Final design */}
      <div className="rm-float absolute left-[52%] top-[12%] h-[76%] w-[28%] overflow-hidden rounded-xl bg-white p-2 shadow-2xl">
        <div className="h-[30%] rounded-md bg-gradient-to-br from-[#FF8A3D] to-[#FF2B00]" />
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-slate-800" />
        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-slate-300" />
        <div className="mt-2 grid grid-cols-2 gap-1">
          <div className="h-5 rounded bg-[#FFD166]" />
          <div className="h-5 rounded bg-[#1A0400]" />
        </div>
        <div className="mt-2 h-4 rounded-md bg-[#FF2B00]" />
      </div>
      {/* Pen tool curve */}
      <svg viewBox="0 0 100 40" className="absolute right-[3%] top-[8%] w-[20%]">
        <path d="M5 35 C 30 0, 70 0, 95 30" fill="none" stroke="white" strokeWidth="1.5" />
        <line x1="5" y1="35" x2="30" y2="5" stroke="white" strokeOpacity="0.4" />
        <rect x="2" y="32" width="6" height="6" fill="#FF2B00" />
        <rect x="92" y="27" width="6" height="6" fill="#FF2B00" />
        <circle cx="30" cy="5" r="3" fill="white" />
      </svg>
      {/* Swatches */}
      <div className="absolute bottom-[10%] right-[4%] flex -space-x-1.5">
        {["#FF2B00", "#FF8A3D", "#FFD166", "#1A0400", "#FFFFFF"].map((c) => (
          <span key={c} className="h-5 w-5 rounded-full border-2 border-[#1A0400]" style={{ background: c }} />
        ))}
      </div>
      <div className="absolute bottom-[26%] right-[6%] flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
        <PenTool className="h-4 w-4 text-white" />
      </div>
    </>
  );
}

function DevelopmentArt() {
  const lines = [
    ["#FF8A3D", "32%"], ["#FFD166", "55%"], ["#FFFFFF", "40%"], ["#FF2B00", "62%"], ["#FFB020", "35%"],
  ];
  return (
    <>
      <div className="absolute left-[6%] top-[12%] w-[58%] rounded-xl border border-white/10 bg-[#0d0100]/90 p-3 shadow-2xl">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="space-y-2">
          {lines.map(([c, w], i) => (
            <div key={i} className="flex items-center gap-2" style={{ paddingLeft: `${(i % 3) * 8}px` }}>
              <span className="w-3 text-right text-[8px] text-white/30">{i + 1}</span>
              <span className="rm-type h-1.5 rounded-full" style={{ width: w, background: c, animationDelay: `${0.3 + i * 0.15}s` }} />
              {i === lines.length - 1 && <span className="rm-blink h-2.5 w-[3px] bg-white" />}
            </div>
          ))}
        </div>
      </div>
      {/* Terminal */}
      <div className="rm-float absolute bottom-[10%] left-[30%] w-[46%] rounded-xl border border-white/10 bg-black/90 p-2.5 font-mono text-[9px] shadow-2xl sm:text-[10px]">
        <div className="text-white/60">$ npm run build</div>
        <div className="mt-1 text-emerald-400">✓ Build passed</div>
      </div>
      {/* Git branches */}
      <svg viewBox="0 0 40 100" className="absolute right-[8%] top-[10%] h-[80%]">
        <path d="M12 5 V 95" stroke="#FF8A3D" strokeWidth="2.5" />
        <path d="M12 30 C 12 42, 30 40, 30 52 V 62 C 30 74, 12 72, 12 82" fill="none" stroke="#FFD166" strokeWidth="2.5" />
        {[12, 30, 82].map((y) => <circle key={y} cx="12" cy={y} r="4.5" fill="#FF2B00" stroke="white" strokeWidth="1.5" />)}
        <circle cx="30" cy="56" r="4.5" fill="#FFD166" stroke="white" strokeWidth="1.5" />
      </svg>
      <div className="absolute right-[18%] top-[8%] flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
        <GitBranch className="h-3.5 w-3.5 text-white" />
      </div>
    </>
  );
}

function TestingArt() {
  const rows = ["Login flow", "Payments", "Mobile layout", "API security"];
  return (
    <>
      <div className="absolute left-[6%] top-[12%] w-[56%] space-y-2 rounded-xl bg-white p-3 shadow-2xl">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-800">Test suite</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-bold text-emerald-700">PASSING</span>
        </div>
        {rows.map((r, i) => (
          <div key={r} className="rm-pop flex items-center gap-2" style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
            <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
              <Check className="h-2.5 w-2.5 text-white" />
            </span>
            <span className="text-[9px] font-medium text-slate-600 sm:text-[10px]">{r}</span>
          </div>
        ))}
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="rm-grow-x h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ animationDelay: "1.2s" }} />
        </div>
      </div>
      {/* Magnifier over a bug */}
      <div className="rm-float absolute right-[8%] top-[18%]">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-white bg-white/10 backdrop-blur sm:h-24 sm:w-24">
          <Bug className="h-8 w-8 text-[#FF2B00]" />
          <span className="absolute -bottom-6 -right-4 h-10 w-3 rotate-[-45deg] rounded-full bg-white" />
        </div>
      </div>
      <div className="absolute bottom-[10%] right-[8%] flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
        <ShieldCheck className="h-3.5 w-3.5" /> Secure
      </div>
    </>
  );
}

function LaunchArt() {
  return (
    <>
      {/* Stars */}
      {[[10, 18], [22, 60], [78, 20], [88, 55], [60, 12], [40, 30]].map(([l, t], i) => (
        <span key={i} className="rm-twinkle absolute h-1.5 w-1.5 rounded-full bg-white" style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${i * 0.4}s` }} />
      ))}
      {/* Rocket + trail */}
      <div className="rm-float absolute left-1/2 top-[12%] -translate-x-1/2">
        <div className="relative flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.35)] sm:h-24 sm:w-24">
            <Rocket className="h-10 w-10 -rotate-45 text-[#FF2B00] sm:h-12 sm:w-12" />
          </div>
          <div className="rm-flame -mt-1 h-14 w-6 rounded-b-full bg-gradient-to-b from-[#FFD166] via-[#FF8A3D] to-transparent blur-[2px]" />
        </div>
      </div>
      {/* Clouds */}
      <div className="absolute -bottom-4 left-[-4%] h-16 w-40 rounded-full bg-white/90" />
      <div className="absolute -bottom-6 left-[22%] h-20 w-44 rounded-full bg-white" />
      <div className="absolute -bottom-4 right-[-6%] h-16 w-44 rounded-full bg-white/90" />
      {/* Live pill */}
      <div className="absolute right-[6%] top-[10%] flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-900 shadow-lg">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> LIVE
      </div>
      <div className={`absolute left-[6%] top-[10%] px-2.5 py-1.5 text-[9px] font-semibold text-white ${glass}`}>
        Deploying… <span className="text-emerald-300">100%</span>
      </div>
    </>
  );
}

function SupportArt() {
  const services = ["Website", "API", "Database"];
  return (
    <>
      <div className="absolute left-[6%] right-[30%] top-[12%] rounded-xl bg-white p-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-800">Uptime monitor</span>
          <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> All systems go
          </span>
        </div>
        <svg viewBox="0 0 200 40" className="mt-2 h-10 w-full" preserveAspectRatio="none">
          <polyline
            points="0,24 40,24 52,24 60,8 68,36 76,24 120,24 132,24 140,12 148,32 156,24 200,24"
            fill="none"
            stroke="#FF2B00"
            strokeWidth="2.5"
            strokeLinejoin="round"
            pathLength={100}
            className="rm-draw"
          />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[6%] right-[30%] space-y-1.5">
        {services.map((sv) => (
          <div key={sv} className={`flex items-center justify-between px-3 py-1.5 ${glass}`}>
            <span className="text-[10px] font-medium text-white">{sv}</span>
            <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Operational
            </span>
          </div>
        ))}
      </div>
      <div className="rm-float absolute right-[7%] top-[16%] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8A3D] to-[#FF2B00] shadow-xl">
        <Wrench className="h-7 w-7 text-white" />
      </div>
      <div className="rm-float absolute bottom-[14%] right-[9%] flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-xl" style={{ animationDelay: "1s" }}>
        <Bell className="h-5 w-5 text-[#FF2B00]" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
      </div>
    </>
  );
}

function GrowthArt() {
  const bars = ["28%", "40%", "36%", "55%", "68%", "82%"];
  return (
    <>
      <div className="absolute bottom-[12%] left-[6%] right-[34%] top-[18%] flex items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="rm-grow flex-1 rounded-t-md"
            style={{
              height: h,
              background: `linear-gradient(180deg, ${i === bars.length - 1 ? "#FF2B00" : "#FF8A3D"}, rgba(255,138,61,0.25))`,
              animationDelay: `${0.2 + i * 0.12}s`,
            }}
          />
        ))}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-[12%] left-[6%] right-[34%] top-[10%] h-[78%] w-[60%]">
        <polyline points="4,82 22,66 40,70 58,48 76,34 96,8" fill="none" stroke="white" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" pathLength={100} className="rm-draw" />
        <path d="M88 6 L 97 7 L 95 16" fill="none" stroke="white" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="rm-float absolute right-[5%] top-[14%] w-[26%] min-w-[80px] rounded-xl bg-white p-2.5 shadow-xl">
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 text-[#FF2B00]" />
          <span className="text-[9px] font-semibold text-slate-500">Users</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
          <TrendingUp className="h-3.5 w-3.5" /> Growing
        </div>
      </div>
      <div className="rm-float absolute bottom-[12%] right-[5%] w-[26%] min-w-[80px] rounded-xl bg-white p-2.5 shadow-xl" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center gap-1.5">
          <CircleDollarSign className="h-3.5 w-3.5 text-[#FF2B00]" />
          <span className="text-[9px] font-semibold text-slate-500">Revenue</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
          <TrendingUp className="h-3.5 w-3.5" /> Up
        </div>
      </div>
      <div className="absolute left-[6%] top-[8%] flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
        <Search className="h-3.5 w-3.5 text-white" />
      </div>
    </>
  );
}

const illustrations: Record<string, () => React.ReactElement> = {
  discovery: DiscoveryArt,
  planning: PlanningArt,
  design: DesignArt,
  development: DevelopmentArt,
  testing: TestingArt,
  launch: LaunchArt,
  support: SupportArt,
  growth: GrowthArt,
};

/* ─── Stage card ─────────────────────────────────────────── */
function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const Icon = stage.icon;
  const Art = illustrations[stage.id];
  const left = index % 2 === 0;

  return (
    <div id={stage.id} className="relative scroll-mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
      {/* Node on the line */}
      <div className="absolute left-6 top-8 z-10 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative"
        >
          <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: stage.color }} />
          <span
            className="relative flex h-12 w-12 items-center justify-center rounded-full text-white ring-4 ring-white dark:ring-zinc-950"
            style={{ background: stage.color, boxShadow: `0 0 30px -4px ${stage.color}` }}
          >
            <Icon className="h-5 w-5" />
          </span>
        </motion.div>
      </div>

      {/* Card: illustration on top, details below */}
      <motion.article
        initial={{ opacity: 0, x: left ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`group relative ml-16 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF2B00]/40 hover:shadow-[0_24px_50px_-20px_rgba(255,43,0,0.35)] dark:border-zinc-800 dark:bg-zinc-900 lg:ml-0 lg:row-start-1 ${
          left ? "lg:col-start-1" : "lg:col-start-2"
        }`}
      >
        <Panel color={stage.color}>{Art && <Art />}</Panel>

        <div className="p-4 pt-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
              style={{ background: stage.color }}
            >
              {String(index + 1).padStart(2, "0")} · {stage.phase}
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500 dark:border-zinc-700 dark:text-zinc-400">
              {stage.duration}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{stage.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-500 dark:text-zinc-400">{stage.desc}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {stage.deliverables.map((d) => (
              <li
                key={d}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
              >
                <Check className="h-3.5 w-3.5 text-[#FF2B00]" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* Opposite side (desktop): big stage label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        className={`hidden lg:row-start-1 lg:block ${left ? "lg:col-start-2 lg:text-left" : "lg:col-start-1 lg:text-right"}`}
      >
        <div
          className="font-num text-[120px] font-bold leading-none tracking-tighter"
          style={{ WebkitTextStroke: `2px ${stage.color}`, color: "transparent" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="mt-2 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: stage.color === "#1A0400" ? "#FF2B00" : stage.color }}>
          {stage.phase}
        </div>
        <div className="mt-1 text-slate-400 dark:text-zinc-500">{stage.duration}</div>
      </motion.div>
    </div>
  );
}

/* ─── Main timeline ──────────────────────────────────────── */
export default function Roadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const tipTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <>
      <section className="bg-white pb-16 dark:bg-zinc-950 sm:pb-20">
        <StageStrip />
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-zinc-900/40 sm:py-28">
        {/* dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.12) 1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Start marker */}
          <div className="mb-14 flex items-center gap-4 lg:flex-col lg:gap-3">
            <div className="relative">
              <span className="absolute -inset-3 rounded-full bg-[#FFB020]/30 blur-xl" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFE08A] to-[#FFB020] shadow-[0_0_40px_rgba(255,176,32,0.6)] ring-4 ring-white dark:ring-zinc-950">
                <Lightbulb className="h-8 w-8 text-[#7A1600]" />
              </span>
            </div>
            <div className="lg:text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF2B00]">Start here</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">Your idea</div>
            </div>
          </div>

          <div ref={trackRef} className="relative space-y-12 sm:space-y-16">
            {/* Track + animated progress line */}
            <div className="absolute bottom-0 left-[calc(1.5rem-1.5px)] top-0 w-[3px] rounded-full bg-slate-200 dark:bg-zinc-800 lg:left-[calc(50%-1.5px)]" />
            <motion.div
              className="absolute bottom-0 left-[calc(1.5rem-1.5px)] top-0 w-[3px] origin-top rounded-full lg:left-[calc(50%-1.5px)]"
              style={{
                scaleY: progress,
                background: "linear-gradient(180deg, #FFB020 0%, #FF2B00 50%, #1A0400 100%)",
              }}
            />
            <motion.div className="absolute left-6 z-20 lg:left-1/2" style={{ top: tipTop }}>
              <span className="block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2B00] shadow-[0_0_20px_6px_rgba(255,43,0,0.5)] ring-4 ring-white dark:ring-zinc-950" />
            </motion.div>

            {stages.map((stage, i) => (
              <StageCard key={stage.id} stage={stage} index={i} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-16 flex items-center gap-4 lg:flex-col lg:gap-3"
          >
            <div className="relative">
              <span className="absolute -inset-3 animate-pulse rounded-full bg-[#FF2B00]/30 blur-xl" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF2B00] to-[#7A1600] shadow-[0_0_40px_rgba(255,43,0,0.6)] ring-4 ring-white dark:ring-zinc-950">
                <Flag className="h-7 w-7 text-white" />
              </span>
            </div>
            <div className="lg:text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF2B00]">Finish line</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">A live product — and growing</div>
            </div>
          </motion.div>

          <p className="mt-6 text-sm text-slate-400 dark:text-zinc-500 lg:text-center">
            Timelines are typical — every project is scoped individually.
          </p>
        </div>
      </section>
      <style>{`
        @keyframes rm-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -6px; } }
        .rm-float { animation: rm-float 4s ease-in-out infinite; }
        @keyframes rm-twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        .rm-twinkle { animation: rm-twinkle 2s ease-in-out infinite; }
        @keyframes rm-type { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .rm-type { transform-origin: left; animation: rm-type 0.5s ease-out both; }
        @keyframes rm-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .rm-grow { transform-origin: bottom; animation: rm-grow 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        .rm-grow-x { transform-origin: left; animation: rm-type 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes rm-draw { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        .rm-draw { stroke-dasharray: 100; animation: rm-draw 2s ease-out 0.4s both; }
        @keyframes rm-dash { to { stroke-dashoffset: -16; } }
        .rm-dash { animation: rm-dash 1s linear infinite; }
        @keyframes rm-blink { 50% { opacity: 0; } }
        .rm-blink { animation: rm-blink 1s steps(1) infinite; }
        @keyframes rm-pop { from { opacity: 0; translate: -8px 0; } to { opacity: 1; translate: 0 0; } }
        .rm-pop { animation: rm-pop 0.4s ease-out both; }
        @keyframes rm-flame { 0%, 100% { scale: 1 1; opacity: 1; } 50% { scale: 0.85 1.15; opacity: 0.8; } }
        .rm-flame { transform-origin: top; animation: rm-flame 0.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rm-float, .rm-twinkle, .rm-type, .rm-grow, .rm-grow-x, .rm-draw, .rm-dash, .rm-blink, .rm-pop, .rm-flame { animation: none; }
        }
      `}</style>
    </>
  );
}
