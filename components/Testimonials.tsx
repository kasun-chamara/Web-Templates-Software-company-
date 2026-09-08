"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinTrack",
    avatar: "SM",
    quote:
      "NexaLab didn't just build our platform — they fundamentally understood our business and made architectural decisions that saved us years of technical debt.",
    stars: 5,
  },
  {
    name: "James Okonkwo",
    role: "Director of Digital, Ministry of Interior",
    avatar: "JO",
    quote:
      "Delivering a national-scale identity system on time and under budget seemed impossible. NexaLab made it look routine. Exceptional engineering culture.",
    stars: 5,
  },
  {
    name: "Priya Sundaram",
    role: "Founder, HealthOS",
    avatar: "PS",
    quote:
      "We've worked with many agencies. NexaLab is different — they push back when needed, propose better solutions, and own the outcome like it's their own product.",
    stars: 5,
  },
  {
    name: "Carlos Reyes",
    role: "VP Engineering, LogiChain",
    avatar: "CR",
    quote:
      "The code quality, documentation, and handoff process were impeccable. Six months after launch, our internal team had zero trouble maintaining the codebase.",
    stars: 5,
  },
  {
    name: "Aiko Tanaka",
    role: "Head of Product, Skyline AI",
    avatar: "AT",
    quote:
      "From first brief to final delivery, NexaLab was the most communicative and technically sharp team we've ever hired. They simply get it.",
    stars: 5,
  },
  {
    name: "Lena Brandt",
    role: "COO, TrustBridge",
    avatar: "LB",
    quote:
      "Our compliance requirements were complex and ever-changing. NexaLab adapted without blinking — flexible architecture, solid delivery.",
    stars: 5,
  },
];

const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const col2 = [...testimonials.slice(3), ...testimonials.slice(3)];

const avatarColors = [
  { bg: "bg-gradient-to-br from-violet-500 to-indigo-500" },
  { bg: "bg-gradient-to-br from-cyan-500 to-teal-400" },
  { bg: "bg-gradient-to-br from-rose-500 to-pink-400" },
  { bg: "bg-gradient-to-br from-amber-500 to-orange-400" },
  { bg: "bg-gradient-to-br from-emerald-500 to-green-400" },
  { bg: "bg-gradient-to-br from-blue-500 to-sky-400" },
];

const stats = [
  { value: "98%", label: "Client satisfaction", icon: "▲" },
  { value: "200+", label: "Projects delivered", icon: "◈" },
  { value: "5★", label: "Average rating", icon: "✦" },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const colorIdx = index % avatarColors.length;
  return (
    <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-sm">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.stars }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0 ${avatarColors[colorIdx].bg}`}
        >
          {t.avatar}
        </div>
        <div>
          <div className="font-display text-white font-bold text-sm">
            {t.name}
          </div>
          <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-[#080c14] overflow-hidden sm:py-24">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-40 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      {/* Fade masks */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080c14] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c14] to-transparent z-10 pointer-events-none" />

      {/* Scroll animations via global CSS — no @import needed */}
      <style>{`
        @keyframes scrollDown {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollUp {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-down {
          animation: scrollDown 18s linear infinite;
        }
        .animate-scroll-up {
          animation: scrollUp 18s linear infinite;
        }
        .animate-scroll-down:hover,
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="relative z-20 flex flex-col gap-8">

            {/* Terminal badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 font-mono text-[10px] tracking-widest uppercase">
                  &gt;_ client.reviews
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-mono text-[10px]">live</span>
              </div>
            </div>

            {/* Heading */}
            <div>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-2 flex-shrink-0">
                  <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500 to-transparent" />
                  <div className="w-2.5 h-[2px] bg-blue-500" />
                </div>
                <div>
                  <p className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-3">
                    // trusted by industry leaders
                  </p>
                  <h2
                    className="font-bold text-white leading-[1.08]"
                    style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)" }}
                  >
                    Built for Teams
                    <br />
                    <em
                      className="not-italic"
                      style={{
                        background:
                          "linear-gradient(120deg, #fff 0%, #fff 55%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Who Ship.
                    </em>
                  </h2>
                </div>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-[360px] pl-6 border-l border-white/10">
              From seed-stage startups to national governments — organizations that care deeply about engineering craft choose NexaLab.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4 overflow-hidden group hover:border-blue-500/40 transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500/30 rounded-tr-xl" />
                  <div className="text-slate-600 text-xs font-mono mb-2">{s.icon}</div>
                  <div
                    className="font-num font-bold tracking-tight bg-clip-text text-transparent leading-none mb-1"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      backgroundImage:
                        "linear-gradient(135deg, #ffffff 30%, #2563eb 100%)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest leading-tight">
                    {s.label}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Bottom separator */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-[1px] w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <span className="text-slate-500 font-mono text-[11px] tracking-widest uppercase">
                scroll to explore
              </span>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
          </div>

          {/* RIGHT — scroll columns */}
          <div className="relative flex h-[460px] gap-4 overflow-hidden sm:h-[550px] sm:gap-5">
            <div className="relative flex-1 overflow-hidden">
              <div className="animate-scroll-down">
                {col1.map((t, i) => (
                  <TestimonialCard key={`c1-${i}`} t={t} index={i} />
                ))}
              </div>
            </div>
            <div className="relative hidden flex-1 overflow-hidden sm:block">
              <div className="animate-scroll-up">
                {col2.map((t, i) => (
                  <TestimonialCard key={`c2-${i}`} t={t} index={i + 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}