"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

/* ── Word-by-word reveal ── */
function WordReveal({ line1, line2 }: { line1: string; line2: string }) {
  const words1 = line1.split(" ");
  const words2 = line2.split(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const word = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      className="block"
    >
      <span className="block">
        {words1.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-slate-900">
            {w}
          </motion.span>
        ))}
      </span>
      <span className="block mt-1">
        {words2.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-slate-900">
            {w}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}

/* ── Meteor shower — black & blue ── */
function MeteorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Meteor = {
      x: number; y: number;
      len: number; speed: number;
      alpha: number; width: number;
      delay: number; elapsed: number;
      colorIdx: number;
    };

    // Alternating blue tones for the meteors
    const COLORS = [
      { r: 30,  g: 64,  b: 175 },  // blue-800
      { r: 37,  g: 99,  b: 235 },  // blue-600
      { r: 14,  g: 165, b: 233 },  // sky-500
      { r: 15,  g: 23,  b: 42  },  // slate-950 (near black)
      { r: 59,  g: 130, b: 246 },  // blue-500
    ];

    const METEOR_COUNT = 22;
    const ANGLE = Math.PI / 5;
    const cos = Math.cos(ANGLE);
    const sin = Math.sin(ANGLE);

    const spawnMeteor = (): Meteor => ({
      x: Math.random() * (canvas.width + canvas.height * 0.6),
      y: -Math.random() * canvas.height * 0.4,
      len: Math.random() * 160 + 90,
      speed: Math.random() * 4.5 + 3.5,
      alpha: Math.random() * 0.6 + 0.25,
      width: Math.random() * 1.4 + 0.5,
      delay: Math.random() * 140,
      elapsed: 0,
      colorIdx: Math.floor(Math.random() * COLORS.length),
    });

    const meteors: Meteor[] = Array.from({ length: METEOR_COUNT }, spawnMeteor);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const m of meteors) {
        m.elapsed++;
        if (m.elapsed < m.delay) continue;

        m.x += m.speed * cos;
        m.y += m.speed * sin;

        const tx = m.x - m.len * cos;
        const ty = m.y - m.len * sin;

        const c = COLORS[m.colorIdx];
        const grad = ctx.createLinearGradient(tx, ty, m.x, m.y);
        grad.addColorStop(0,   `rgba(${c.r},${c.g},${c.b},0)`);
        grad.addColorStop(0.5, `rgba(${c.r},${c.g},${c.b},${m.alpha * 0.35})`);
        grad.addColorStop(1,   `rgba(${c.r},${c.g},${c.b},${m.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // bright head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${m.alpha})`;
        ctx.fill();

        // soft glow halo around head
        const glow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.width * 6);
        glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${m.alpha * 0.3})`);
        glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        if (m.x > canvas.width + m.len || m.y > canvas.height + m.len) {
          Object.assign(m, spawnMeteor());
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-white sm:py-32 md:py-40">

      {/* Meteor shower */}
      <MeteorCanvas />

      {/* Very light blue tint in centre so meteors pop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(219,234,254,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
        style={{
          width: "55%",
          background: "linear-gradient(90deg, transparent, rgba(30,64,175,0.25), transparent)",
        }}
      />

      {/* Bottom edge line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
        style={{
          width: "35%",
          background: "linear-gradient(90deg, transparent, rgba(30,64,175,0.12), transparent)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(30,64,175,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge — black text + black border */}
        <div className="inline-flex items-center gap-2 mb-10">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full text-slate-900"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(15,23,42,0.25)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 mr-2 align-middle" />
            Ready to Build
          </span>
        </div>

        {/* Headline — all black */}
        <h2 className="text-[40px] sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <WordReveal line1="Let's Build Something" line2="That Lasts" />
        </h2>

        {/* Subtext */}
        <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10 sm:mb-14">
          Whether you&apos;re an early-stage startup or an enterprise team,
          we&apos;re ready to engineer your next breakthrough.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* Primary — solid black */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-slate-900 transition-all duration-300 hover:bg-slate-700"
            style={{ boxShadow: "0 4px 20px rgba(15,23,42,0.22)" }}
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Ghost — black border + black text */}
          <a
            href="mailto:hello@nexalab.io"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-white transition-all duration-300 border border-slate-900 hover:bg-slate-50"
            style={{ backdropFilter: "blur(6px)" }}
          >
            <Mail className="w-4 h-4 text-slate-900" />
            hello@nexalab.io
          </a>
        </div>

        {/* Divider + footnote */}
        <div className="mt-14 sm:mt-20 flex flex-col items-center gap-4">
          <div
            className="w-32 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(30,64,175,0.3), transparent)",
            }}
          />
          <p className="text-slate-400 text-xs tracking-wide">
            Response within 24 hours &nbsp;·&nbsp; No NDAs needed to start a conversation
          </p>
        </div>

      </div>
    </section>
  );
}