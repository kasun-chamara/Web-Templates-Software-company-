"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const stats = [
  { value: 6, suffix: "+", label: "YEARS ACTIVE" },
  { value: 4, suffix: "", label: "SERVICES LIVE" },
  { value: 50, suffix: "K+", label: "USERS SERVED" },
];

const tags = ["Food & Restaurants", "Driving Lessons", "Astrology", "Delivery Tracking"];

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

            <motion.h1
              variants={rise}
              className="text-[40px] font-extrabold leading-[1.1] text-white sm:text-[52px] lg:text-[58px]"
            >
              We fuel the
              <br />
              <span className="relative inline-block" style={{ color: "#FF2B00 " }}>
                digital revolution
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute -bottom-2 left-0 h-[3px] w-full"
                />
              </span>
              <br />
              by engineering what&apos;s next.
            </motion.h1>

            <motion.div variants={rise} className="mt-14 flex gap-10 sm:gap-14">
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
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 backdrop-blur-xl"
          >
            <p className="text-[19px] font-semibold leading-relaxed text-white">
              We are a team of engineering-first problem-solvers, innovators,
              and lifelong learners — building everyday platforms that bring
              food, mobility, guidance, and delivery together in one place.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Founded in 2020,{" "}
              <span className="text-[19px] font-bold" style={{ color: "#FF2B00" }}>
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

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                  className="rounded-full border px-4 py-2 text-[12.5px] font-medium"
                  style={{ borderColor: "rgba(255,43,0,0.5)", color: "#FF2B00" }}
                >
                  {tag}
                </motion.span>
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
    <div>
      <div className="font-num text-[30px] font-extrabold text-white sm:text-[34px]">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-1 text-[11px] font-medium tracking-[0.1em] text-white/50">
        {stat.label}
      </div>
    </div>
  );
}