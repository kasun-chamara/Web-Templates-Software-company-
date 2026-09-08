"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

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
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      {/* Background photo + dark overlay — swap the URL for the real asset */}
      <div className="absolute inset-0">
        <img
          src="/images/team-silhouette.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

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
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200/25 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              <span className="text-[11px] font-semibold tracking-[0.18em] text-rose-200/90">
                WHO WE ARE
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              className="text-[40px] font-extrabold leading-[1.1] text-white sm:text-[52px] lg:text-[58px]"
            >
              We fuel the
              <br />
              <span className="relative inline-block text-rose-300">
                digital revolution
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ originX: 0 }}
                  className="absolute -bottom-2 left-0 h-[3px] w-full bg-rose-300/70"
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
              Founded in 2020, Kapingar began with a mission to make
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
                  className="rounded-full border border-white/15 px-4 py-2 text-[12.5px] font-medium text-white/80"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="fixed bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-rose-300/90 text-neutral-900 shadow-lg"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
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