"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Compass,
  Code2,
  TrendingUp,
  Server,
  ShieldCheck,
  Brain,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import React from "react";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const values = [
  "Engineering excellence over quick fixes",
  "Transparent communication at every stage",
  "Performance and accessibility by default",
  "Long-term partnerships, not one-time jobs",
  "Open source contributions and community",
];

const projectCategories = [
  {
    icon: Compass,
    number: "01",
    title: "Digital Transformation & Consulting",
    desc: "We help businesses embrace digital transformation through strategic consulting, process optimization, and innovative technology solutions that improve efficiency, agility, and long-term growth.",
    tags: ["Technology Strategy", "Experience Design", "Infrastructure & Platforms", "Data-Driven Organization"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Code2,
    number: "02",
    title: "Software Development & Engineering",
    desc: "We design and develop reliable, scalable, and high-performance software solutions tailored to your business requirements, from web applications to enterprise systems.",
    tags: ["Full-Stack Development", "API Architecture", "Cloud Infrastructure", "Performance Optimization"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Product & Business Services",
    desc: "We turn ideas into successful digital products by combining business strategy, product development, and user-focused solutions that create real value for businesses and their customers.",
    tags: ["Product Strategy", "Market Research", "User Experience", "Business Growth"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Server,
    number: "04",
    title: "Platform & Advanced Capabilities",
    desc: "We build scalable digital platforms with advanced capabilities, integrations, APIs, cloud technologies, and modern architectures designed to support evolving business needs.",
    tags: ["Microservices", "Real-time Systems", "Scalability", "DevOps & Deployment"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance & Testing",
    desc: "We ensure software quality, reliability, security, and performance through comprehensive testing and quality assurance processes, delivering stable and dependable digital products.",
    tags: ["Automated Testing", "Performance Testing", "Security Testing", "QA Strategy"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Brain,
    number: "06",
    title: "Artificial Intelligence & Data",
    desc: "We leverage artificial intelligence, machine learning, and data-driven technologies to uncover insights, automate processes, improve decision-making, and create smarter business solutions.",
    tags: ["Machine Learning", "Data Analytics", "AI Integration", "Predictive Modeling"],
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

const secondaryExpertise = [
  "Custom Integrations",
  "Legacy System Modernization",
  "Enterprise Support",
  "Training & Knowledge Transfer",
  "Compliance & Security",
  "Continuous Optimization",
];

const EASE = [0.22, 1, 0.36, 1] as const;

// Static-ish squiggle paths (kept simple/perf-friendly, animated via slow d morph)
const MESH_LINES = [
  {
    id: "meshLine1",
    from: "#60a5fa",
    via: "#27F5A6",
    to: "#a78bfa",
    d1: "M-100 150 Q 250 50 500 150 T 1000 150 T 1500 150",
    d2: "M-100 150 Q 250 250 500 150 T 1000 150 T 1500 150",
    duration: 12,
    delay: 0,
    strokeOpacity: 0.4,
  },
  {
    id: "meshLine2",
    from: "#F54927",
    via: "#F52761",
    to: "#F52727",
    d1: "M-100 420 Q 300 320 600 420 T 1200 420 T 1600 420",
    d2: "M-100 420 Q 300 520 600 420 T 1200 420 T 1600 420",
    duration: 15,
    delay: 1,
    strokeOpacity: 0.3,
  },
  {
    id: "meshLine3",
    from: "#e879f9",
    via: "#e879f9",
    to: "#60a5fa",
    d1: "M-100 680 Q 280 580 560 680 T 1100 680 T 1600 680",
    d2: "M-100 680 Q 280 780 560 680 T 1100 680 T 1600 680",
    duration: 18,
    delay: 2,
    strokeOpacity: 0.25,
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-80px" });

  // Tracks which right-side card is currently "active" (scrolled to the top zone)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleActiveChange = useCallback((index: number, active: boolean) => {
    setActiveIndex((prev) => {
      if (active) return index;
      // Only clear if the card leaving was the one currently shown
      return prev === index ? null : prev;
    });
  }, []);

  // Fall back to the first category so the mirror card is never empty
  const activeItem =
    activeIndex !== null ? projectCategories[activeIndex] : projectCategories[0];

  const { x: glowX, y: glowY, handleMove, handleLeave } = useMouseGlow();

  return (
    <div className="px-3 sm:px-6">
      <section
        id="about"
        className="relative rounded-[32px] py-24 sm:rounded-[40px] sm:py-32"
        style={{ background: "linear-gradient(135deg, #751400 0%, #1A0400 65%)" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <MouseGlow x={glowX} y={glowY} color="rgba(255,122,61,0.5)" midColor="rgba(255,43,0,0.18)" />

        {/* Mesh gradient + squiggle background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[32px] sm:rounded-[40px]">
          <div className="absolute -top-40 left-1/4 h-[400px] w-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute top-1/2 -right-40 h-[400px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-cyan-600/10 blur-[110px]" />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 100%)",
            }}
          />

          {/* animated squiggly mesh lines */}
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {MESH_LINES.map((line) => (
                <linearGradient key={line.id} id={line.id} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={line.from} stopOpacity="0" />
                  <stop offset="50%" stopColor={line.via} stopOpacity={line.strokeOpacity} />
                  <stop offset="100%" stopColor={line.to} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>

            {MESH_LINES.map((line) => (
              <motion.path
                key={line.id}
                fill="none"
                stroke={`url(#${line.id})`}
                strokeWidth="1.5"
                initial={{ d: line.d1 }}
                animate={{ d: [line.d1, line.d2, line.d1] }}
                transition={{
                  duration: line.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: line.delay,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, y: 24 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative z-10 w-full flex-shrink-0 p-6 lg:sticky lg:top-24 lg:h-fit lg:w-[440px] lg:p-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                What we do
              </span>

              <h2 className="mt-6 text-[44px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px]">
                Services built
                <br />
                <span className="text-slate-400">to compound</span>
              </h2>

              <p className="mt-6 max-w-sm text-[16px] leading-[1.7] text-slate-300">
                Engineering excellence meets human-centric design. Our values
                reflect in our results.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[13px] font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Active card mirror */}
              <div className="relative mt-8 flex min-h-[92px] items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex ?? "default"}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="flex w-full items-center gap-4"
                  >
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeItem.gradient} shadow-lg ring-1 ring-white/20`}
                    >
                      {React.createElement(activeItem.icon, {
                        className: "h-6 w-6 text-white",
                      })}
                    </div>
                    <div>
                      <span className="block font-num text-[13px] text-white/40">
                        {activeItem.number}
                      </span>
                      <h4 className="text-[18px] font-bold leading-tight text-white">
                        {activeItem.title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Scroll to explore all services
              </p>
            </motion.div>

            <div className="flex w-full flex-col gap-4">
              {projectCategories.map((item, i) => (
                <ProjectCardWithScroll
                  key={i}
                  item={item}
                  index={i}
                  onActiveChange={handleActiveChange}
                />
              ))}

              <ScrollRevealDiv delay={0.2}>
                <div className="rounded-3xl border border-slate-200 bg-white p-7">
                  <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    Our Values
                  </div>
                  <div className="divide-y divide-slate-100">
                    {values.map((v, i) => (
                      <div key={i} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                        <span className="min-w-[24px] pt-0.5 font-num text-[11px] font-semibold text-slate-300">
                          0{i + 1}
                        </span>
                        <span className="text-[14px] leading-snug text-slate-600">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollRevealDiv>
            </div>
          </div>

          {/* Secondary expertise strip */}
          <ScrollRevealDiv delay={0.1}>
            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Also in our toolkit
              </div>
              <div className="flex flex-wrap gap-2">
                {secondaryExpertise.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] text-slate-200 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollRevealDiv>
        </div>
      </section>
    </div>
  );
}

function ProjectCardWithScroll({
  item,
  index,
  onActiveChange,
}: {
  item: (typeof projectCategories)[number];
  index: number;
  onActiveChange: (index: number, active: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isAtTop = useInView(ref, { margin: "-40% 0px -55% 0px" });

  useEffect(() => {
    onActiveChange(index, isAtTop);
  }, [isAtTop, index, onActiveChange]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
    >
      <ProjectCard item={item} index={index} isActive={isAtTop} />
    </motion.div>
  );
}

function ScrollRevealDiv({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  item,
  index,
  isActive = false,
}: {
  item: (typeof projectCategories)[number];
  index: number;
  isActive?: boolean;
}) {
  const Icon = item.icon;
  const isFeatured = index === 0;
  const solid = isFeatured || isActive;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-7 transition-all duration-500 sm:p-8 ${
        solid
          ? "border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]"
          : "border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-white/20"
      }`}
    >
      {/* Accent wash on active/featured */}
      {solid && (
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl`}
        />
      )}

      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span
            className={`block font-num text-[13px] transition-colors duration-500 ${
              solid ? "text-slate-300" : "text-white/30"
            }`}
          >
            {item.number}
          </span>
          <h3
            className={`mt-2 text-[20px] font-bold leading-tight transition-colors duration-500 sm:text-[22px] ${
              solid ? "text-slate-900" : "text-white"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg ring-1 ring-white/20`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>

      <p
        className={`mb-5 text-[14px] leading-[1.7] transition-colors duration-500 ${
          solid ? "text-slate-600" : "text-slate-300"
        }`}
      >
        {item.desc}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors duration-500 ${
              solid
                ? "border-slate-200 bg-slate-50 text-slate-600"
                : "border-white/15 bg-white/5 text-slate-200"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all hover:gap-2.5 ${
          solid ? "text-slate-900" : "text-white"
        }`}
      >
        Learn more <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
