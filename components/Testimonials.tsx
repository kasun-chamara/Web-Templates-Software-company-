"use client";

import { Star } from "lucide-react";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

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
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #FF2B00, #1A0400)" } },
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #D12300, #1A0400)" } },
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #751400, #1A0400)" } },
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #FF2B00, #751400)" } },
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #D12300, #751400)" } },
  { bg: "", style: { backgroundImage: "linear-gradient(135deg, #FF2B00, #D12300)" } },
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
      <p className="text-slate-200 text-sm leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
          style={avatarColors[colorIdx].style}
        >
          {t.avatar}
        </div>
        <div>
          <div className="font-display text-white font-bold text-sm">
            {t.name}
          </div>
          <div className="text-slate-200 text-xs mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      className="relative py-20 overflow-hidden sm:py-24"
      style={{ background: "linear-gradient(180deg, #1A0400 0%, #0a0400 100%)" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <MouseGlow x={x} y={y} color="rgba(255,122,61,0.5)" midColor="rgba(255,43,0,0.18)" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF2B00, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-40 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D12300, transparent 70%)" }}
      />

      {/* Fade masks */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A0400] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0400] to-transparent z-10 pointer-events-none" />

      {/* Scroll animations via global CSS - no @import needed.
          Uses dangerouslySetInnerHTML instead of a plain style child: browsers treat
          <style> content as raw text (no entity decoding), but React HTML-escapes
          string children by default, which can desync server/client text and trigger
          a hydration mismatch the moment this block ever contains a special character. */}
      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="relative z-20 flex flex-col gap-8">

            {/* Terminal badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md" style={{ background: "rgba(255,43,0,0.1)", border: "1px solid rgba(255,43,0,0.2)" }}>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#FF7A45" }}>
                  &gt;_ client.reviews
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FF2B00" }} />
                <span className="font-mono text-[10px]" style={{ color: "#FF7A45" }}>live</span>
              </div>
            </div>

            {/* Heading */}
            <div>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-2 flex-shrink-0">
                  <div className="w-[2px] h-6 bg-gradient-to-b from-[#FF2B00] to-transparent" />
                  <div className="w-2.5 h-[2px]" style={{ background: "#FF2B00" }} />
                </div>
                <div>
                  <p className="text-slate-200 font-mono text-xs tracking-widest uppercase mb-3">
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
            <p className="text-slate-200 text-sm leading-relaxed max-w-[360px] pl-6 border-l border-white/10">
              From seed-stage startups to national governments organizations that care deeply about engineering craft choose NexaLab.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4 overflow-hidden group hover:border-[#FF2B00]/40 transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-tr-xl" style={{ borderTop: "1px solid rgba(255,43,0,0.3)", borderRight: "1px solid rgba(255,43,0,0.3)" }} />
                  <div className="text-xs font-mono mb-2" style={{ color: "#FF2B00" }}>
                    {s.icon}
                  </div>
                  <div
                    className="font-num font-bold tracking-tight bg-clip-text text-transparent leading-none mb-1"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      backgroundImage:
                        "linear-gradient(135deg, #ffffff 30%, #FF2B00 100%)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-slate-200 text-[10px] font-mono uppercase tracking-widest leading-tight">
                    {s.label}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2B00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Bottom separator */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-[1px] w-8 bg-gradient-to-r from-[#FF2B00] to-[#751400]" />
              <span className="text-slate-200 font-mono text-[11px] tracking-widest uppercase">
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