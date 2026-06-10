"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  "Engineering excellence over quick fixes",
  "Transparent communication at every stage",
  "Performance and accessibility by default",
  "Long-term partnerships, not one-time jobs",
  "Open source contributions and community",
];

const stats = [
  { value: "50+", label: "Projects", trend: "+13% YoY" },
  { value: "15+", label: "Engineers", trend: "Top talent" },
  { value: "04",  label: "Years",     trend: "Industry" },
];

const expertise = [
  "Frontend Architecture",
  "Backend Systems",
  "AI/ML Integration",
  "Cloud Infrastructure",
  "Mobile Development",
  "UX Engineering",
];

const FULL_TEXT = '"Building systems that matter"';

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isLeftInView  = useInView(leftRef,  { once: true, margin: "-80px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-80px" });

  const [typedText, setTypedText]         = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i <= FULL_TEXT.length) {
        setTypedText(FULL_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(iv);
        setTimeout(() => setCursorVisible(false), 1200);
      }
    }, 48);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* ── Font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;700&display=swap');
      `}</style>

      <section
        id="about"
        className="relative py-28 overflow-hidden bg-[#000000]"
        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      >
        {/* ── Neon glow blobs ── */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/35 blur-[130px]" />
          <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[110px]" />
          <div className="absolute bottom-10 -right-20 w-[340px] h-[340px] rounded-full bg-blue-500/40 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] rounded-full bg-indigo-600/10 blur-[90px]" />
        </div>

        {/* ── Dot-grid overlay ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.2] bg-repeat"
          style={{
            backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-10 bg-blue-400/40" />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-blue-400/70">
              About us
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── LEFT ── */}
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, y: 24 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:pr-14 lg:border-r lg:border-blue-900/40 pb-14 lg:pb-0"
            >
              {/* Heading */}
              <h2
                className="text-5xl md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                We engineer,
                <br />
                <em className="not-italic text-blue-400/60">not just build.</em>
              </h2>

              <p className="text-[15px] leading-[1.75] text-slate-400 max-w-md mb-10">
                A product engineering studio that partners with startups and enterprises
                to design, build, and scale systems that drive real business value.
              </p>

              {/* Stats strip */}
              <div className="flex border-t border-b border-blue-900/40 mb-10">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`flex-1 py-5 px-4 cursor-default transition-colors hover:bg-blue-950/40 ${
                      i < stats.length - 1 ? "border-r border-blue-900/40" : ""
                    }`}
                  >
                    <div
                      className="text-[34px] leading-none text-white mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-slate-500 mb-0.5">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-blue-500/60">
                      {s.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expertise chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {expertise.map((item, i) => (
                  <span
                    key={i}
                    className="text-[12px] px-3 py-1.5 rounded-full border border-blue-900/50 text-slate-400 hover:border-blue-500/60 hover:text-blue-300 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/about"
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors shadow-[0_0_24px_rgba(59,130,246,0.35)]"
                >
                  Our Story →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 rounded-lg border border-blue-900/50 text-slate-400 text-[13px] hover:border-blue-500/60 hover:text-blue-300 transition-all"
                >
                  Work With Us
                </a>
              </div>
            </motion.div>

            {/* ── RIGHT ── */}
            <motion.div
              ref={rightRef}
              initial={{ opacity: 0, y: 24 }}
              animate={isRightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              className="lg:pl-14 pt-14 lg:pt-0"
            >
              {/* Terminal */}
              <div
                className="bg-[#070c18] border border-blue-900/40 rounded-xl p-5 mb-8 text-[12.5px] leading-[1.7] shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                style={{ fontFamily: "'DM Sans', monospace" }}
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-slate-500">
                  <span className="text-blue-400">$ </span>cat team.json
                </div>
                <div className="mt-2 pl-3 border-l-2 border-blue-900/50 space-y-0.5">
                  <div>
                    <span className="text-slate-500">&quot;mission&quot;: </span>
                    <span className="text-cyan-300">{typedText}</span>
                    {cursorVisible && (
                      <span className="inline-block w-[7px] h-[13px] bg-cyan-400 align-[-2px] animate-pulse" />
                    )}
                  </div>
                  <div>
                    <span className="text-slate-500">&quot;engineers&quot;: </span>
                    <span className="text-blue-300">15+</span>
                  </div>
                  <div>
                    <span className="text-slate-500">&quot;experience&quot;: </span>
                    <span className="text-blue-300">&quot;4+ years&quot;</span>
                  </div>
                  <div>
                    <span className="text-slate-500">&quot;status&quot;: </span>
                    <span className="text-blue-300">&quot;ready to ship 🚀&quot;</span>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-blue-900/80">
                  // compiled with ❤ and too much coffee
                </div>
              </div>

              {/* Values */}
              <div className="text-[11px] uppercase tracking-[0.1em] text-blue-900 font-medium mb-3">
                Core values
              </div>
              <div className="divide-y divide-blue-950/60">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 cursor-default group"
                  >
                    <span className="text-[10px] text-blue-900 pt-0.5 min-w-[20px] group-hover:text-blue-500 transition-colors"
                      style={{ fontFamily: "'DM Sans', monospace" }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-[14px] text-slate-500 leading-snug group-hover:text-slate-200 transition-colors">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}