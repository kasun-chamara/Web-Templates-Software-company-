"use client";

import { Star } from "lucide-react";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const testimonials = [
  {
    name: "Sarah Mitchell",
    avatar: "SM",
    quote:
      "Kapingar didn't just build our platform — they fundamentally understood our business and made architectural decisions that saved us years of technical debt.",
    stars: 5,
  },
  {
    name: "James Okonkwo",
    avatar: "JO",
    quote:
      "Delivering a national-scale identity system on time and under budget seemed impossible. Kapingar made it look routine. Exceptional engineering culture.",
    stars: 5,
  },
  {
    name: "Priya Sundaram",
    avatar: "PS",
    quote:
      "We've worked with many agencies. Kapingar is different — they push back when needed, propose better solutions, and own the outcome like it's their own product.",
    stars: 5,
  },
  {
    name: "Carlos Reyes",
    avatar: "CR",
    quote:
      "The code quality, documentation, and handoff process were impeccable. Six months after launch, our internal team had zero trouble maintaining the codebase.",
    stars: 5,
  },
  {
    name: "Aiko Tanaka",
    avatar: "AT",
    quote:
      "From first brief to final delivery, Kapingar was the most communicative and technically sharp team we've ever hired. They simply get it.",
    stars: 5,
  },
  {
    name: "Lena Brandt",
    avatar: "LB",
    quote:
      "Our compliance requirements were complex and ever-changing. Kapingar adapted without blinking — flexible architecture, solid delivery.",
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
  { value: "100%", label: "Client satisfaction" },
  { value: "10+", label: "Projects delivered" },
  { value: "5.0", label: "Average rating" },
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
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF2B00" }} />
              Testimonials
            </span>

            <div>
              <h2
                className="font-bold leading-[1.08] tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)" }}
              >
                Built for Teams
                <br />
                <span className="text-white/40">Who Ship.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
                From early-stage startups to growing businesses — teams that care about
                quality, speed and reliable support choose Kapingar.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-[#FF2B00]/40 hover:bg-white/[0.06] sm:p-5"
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-num font-bold leading-none tracking-tight text-white"
                      style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                    >
                      {s.value}
                    </span>
                    {s.label === "Average rating" && (
                      <Star className="h-4 w-4 fill-[#FF2B00] text-[#FF2B00]" />
                    )}
                  </div>
                  <div className="mt-2 text-[10px] uppercase leading-tight tracking-[0.14em] text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
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