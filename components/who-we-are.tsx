"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import Link from "next/link";
import { UtensilsCrossed, Car, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const stats = [
  { value: 3, suffix: "+", label: "YEARS ACTIVE" },
  { value: 5, suffix: "", label: "SERVICES LIVE" },
  { value: 5, suffix: "K+", label: "USERS SERVED" },
];

const tags = [
  { label: "Food & Restaurants", sub: "Ordering & management", icon: UtensilsCrossed },
  { label: "Driving Lessons", sub: "Bookings & packages", icon: Car },
  { label: "Astrology", sub: "Consultations & horoscopes", icon: Sparkles },
  { label: "Delivery Tracking", sub: "Real-time, web & mobile", icon: MapPin },
];

// One shared choreography for the left column — badge, then heading,
// then stats — rather than each piece animating on its own timer.
const leftContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { x: glowX, y: glowY, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative min-h-screen overflow-hidden bg-neutral-950"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Background photo + dark overlay — swap the URL for the real asset */}
      <div className="absolute inset-0">
        <img
          src="/images/team-silhouette.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(26,4,0,0.88) 0%, rgba(26,4,0,0.6) 55%, rgba(255,43,0,0.35) 100%)" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0100] to-transparent" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 60% 70% at 15% 50%, black 10%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 15% 50%, black 10%, transparent 80%)",
          }}
        />
      </div>

      <MouseGlow x={glowX} y={glowY} color="rgba(255,43,0,0.45)" midColor="rgba(255,43,0,0.15)" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left column */}
          <motion.div
            variants={leftContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div
              variants={rise}
              className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2 backdrop-blur-sm"
              style={{ borderColor: "rgba(255,43,0,0.35)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF2B00" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em]" style={{ color: "#FF7A45" }}>
                WHO WE ARE
              </span>
            </motion.div>

            <motion.h2
              variants={rise}
              className="text-[40px] font-extrabold leading-[1.1] text-white sm:text-[52px] lg:text-[58px]"
            >
              We fuel the
              <br />
              <span className="relative inline-block" style={{ color: "#FF2B00 " }}>
                digital revolution
                {/* <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute -bottom-1 left-0 h-[4px] w-full origin-left rounded-full bg-gradient-to-r from-[#FF2B00] via-[#FF7A45] to-transparent"
                /> */}
              </span>
              <br />
              by engineering what&apos;s next.
            </motion.h2>

            <motion.p variants={rise} className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              A product-minded team that designs, builds and runs the software behind everyday
              businesses — from first idea to live platform.
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FF2B00] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(255,43,0,0.7)] transition-transform hover:-translate-y-0.5"
              >
                See our work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Talk to us
              </Link>
            </motion.div>

            <motion.div variants={rise} className="mt-12 grid max-w-lg grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <Stat key={stat.label} stat={stat} isInView={isInView} delay={0.8 + i * 0.15} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF2B00]/25 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A45]/70 to-transparent" />
            <p className="relative border-l-2 border-[#FF2B00] pl-5 text-[18px] font-semibold leading-relaxed text-white sm:text-[19px]">
              We are a team of engineering-first problem-solvers, innovators,
              and lifelong learners — building everyday platforms that bring
              food, mobility, guidance, and delivery together in one place.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Founded in 2023,{" "}
              <span className="font-bold" style={{ color: "#FF2B00" }}>
                Kapingar
              </span>{" "}
              began with a mission to make
              everyday services simpler to find and easier to trust. Today we
              power{" "}
              <span className="font-semibold text-white/85">
                restaurant ordering, driving lesson bookings, astrology
                consultations, and real-time delivery tracking
              </span>{" "}
              — connecting customers, drivers, and service providers on a
              single, reliable platform.
            </p>

            <div className="my-8 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF7A45]">What we power</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tags.map(({ label, sub, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.9 + i * 0.1 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF2B00]/50 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7A45] to-[#FF2B00] text-white shadow-[0_8px_20px_-8px_rgba(255,43,0,0.8)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-white">{label}</span>
                    <span className="block truncate text-[12px] text-white/50">{sub}</span>
                  </span>
                  <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-emerald-400" title="Live" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  stat,
  isInView,
  delay,
}: {
  stat: (typeof stats)[number];
  isInView: boolean;
  delay: number;
}) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, stat.value, {
      duration: 1.1,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [isInView]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm">
      <span className="absolute left-4 top-0 h-[3px] w-6 rounded-b-full bg-[#FF2B00]" />
      <div className="font-num text-[28px] font-extrabold leading-none text-white sm:text-[32px]">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-2 text-[10px] font-medium tracking-[0.14em] text-white/55">
        {stat.label}
      </div>
    </div>
  );
}