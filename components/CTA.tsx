"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

/* ── Email capture form ── */
function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-semibold"
        style={{ background: "rgba(255,43,0,0.08)", border: "1px solid rgba(255,43,0,0.3)", color: "#751400" }}
      >
        <Check className="w-4 h-4 shrink-0" style={{ color: "#FF2B00" }} />
        Thanks — we&apos;ll be in touch at {email} within 24 hours.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
    >
      <div className="relative flex-1">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 bg-white dark:bg-zinc-900 outline-none transition-colors duration-300 border border-slate-900/15 dark:border-zinc-800 focus:border-[#FF2B00]"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
        style={{
          backgroundImage: "linear-gradient(90deg, #FF2B00)",
          boxShadow: "0 4px 20px rgba(255,43,0,0.3)",
        }}
      >
        Get Started
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

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
          <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-slate-900 dark:text-white">
            {w}
          </motion.span>
        ))}
      </span>
      <span className="block mt-1">
        {words2.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-slate-900 dark:text-white">
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

    // Alternating orange/black theme tones for the meteors
    const COLORS = [
      { r: 255, g: 43,  b: 0   },  // #FF2B00
      { r: 209, g: 35,  b: 0   },  // #D12300
      { r: 117, g: 20,  b: 0   },  // #751400
      { r: 26,  g: 4,   b: 0   },  // #1A0400 (near black)
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
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      className="relative py-24 overflow-hidden bg-white dark:bg-zinc-950 sm:py-32 md:py-40"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <MouseGlow x={x} y={y} color="rgba(255,43,0,0.3)" midColor="rgba(255,43,0,0.08)" />

      {/* Meteor shower */}
      <MeteorCanvas />

      {/* Very light orange tint in centre so meteors pop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255,43,0,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
        style={{
          width: "55%",
          background: "linear-gradient(90deg, transparent, rgba(255,43,0,0.3), transparent)",
        }}
      />

      {/* Bottom edge line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
        style={{
          width: "35%",
          background: "linear-gradient(90deg, transparent, rgba(255,43,0,0.15), transparent)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,43,0,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — illustration */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <Image
              src="/images/Email campaign-pana.svg"
              alt="Email campaign illustration"
              width={950}
              height={500}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>

          {/* Right — copy + email form */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full text-slate-900 dark:text-white bg-white/85 dark:bg-zinc-900/85 border border-slate-900/25 dark:border-zinc-700"
                style={{
                  backdropFilter: "blur(6px)",
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle" style={{ background: "#FF2B00" }} />
                Ready to Build
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[36px] sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              <WordReveal line1="Let's Build Something" line2="That Lasts" />
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              Whether you&apos;re an early-stage startup or an enterprise team,
              we&apos;re ready to engineer your next breakthrough.
            </p>

            {/* Email form */}
            <EmailForm />

            {/* Divider + footnote */}
            <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
              <div
                className="w-32 h-px"
                style={{
                  background: "linear-gradient(90deg, rgba(255,43,0,0.4), transparent)",
                }}
              />
              <p className="text-slate-400 dark:text-zinc-500 text-xs tracking-wide">
                Response within 24 hours &nbsp;·&nbsp; No NDAs needed to start a conversation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}