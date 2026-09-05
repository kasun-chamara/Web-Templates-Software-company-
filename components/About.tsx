"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Compass, Code2, TrendingUp, Server, ShieldCheck, Brain, ArrowRight } from "lucide-react";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const stats = [
  { value: "50+", label: "Projects", tone: "bg-amber-50 border-amber-100" },
  { value: "15+", label: "Engineers", tone: "bg-blue-50 border-blue-100" },
  { value: "04", label: "Years", tone: "bg-emerald-50 border-emerald-100" },
];

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

const secondaryExpertise = ["Custom Integrations", "Legacy System Modernization", "Enterprise Support", "Training & Knowledge Transfer", "Compliance & Security", "Continuous Optimization"];

const FULL_TEXT = '"Building systems that matter"';

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
    strokeOpacity: 0.5,
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
    strokeOpacity: 0.4,
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
    strokeOpacity: 0.35,
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-80px" });

  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

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
  const activeItem = activeIndex !== null ? projectCategories[activeIndex] : projectCategories[0];

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
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ fontFamily: dmSans.style.fontFamily }}
    >
      {/* Mesh gradient + squiggle background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* soft color blobs forming the mesh base */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-fuchsia-600/5 blur-[100px]" />

        {/* animated squiggly mesh lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70"
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative lg:sticky lg:top-24 z-10 lg:h-fit w-full lg:w-[520px] p-10 lg:p-12 flex-shrink-0"
          >
            <h2
              className="relative text-[56px] leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              What We Do
            </h2>

            <p className="relative mt-6 text-[18px] leading-[1.7] text-slate-300">
              Engineering excellence meets human-centric design. Our values reflect in our results.
            </p>

            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 text-[13px] font-medium hover:bg-slate-100 transition-colors mt-8"
            >
              TALK TO US
            </a>

            {/* Active card mirror — the shell/border/background is ALWAYS visible; only the icon/number/title inside animate/swap as the active card on the right changes */}
            <div className="relative mt-8 min-h-[86px] flex items-center gap-4 p-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex ?? "default"}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 w-full"
                >
                  <div
                    className={`h-14 w-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${activeItem.gradient} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(activeItem.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div>
                    <span className="text-[16px] font-extrabold text-white/40 block">
                      {activeItem.number}
                    </span>
                    <h4 className="text-[20px] font-bold text-white leading-tight">
                      {activeItem.title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex flex-col items-start gap-2 mt-10">
              {secondaryExpertise.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[12px] px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div ref={rightRef} className="w-full flex flex-col gap-5">
            {projectCategories.map((item, i) => (
              <ProjectCardWithScroll
                key={i}
                item={item}
                index={i}
                onActiveChange={handleActiveChange}
              />
            ))}

            <ScrollRevealDiv delay={0.8}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-[11px] uppercase tracking-[0.1em] text-slate-400 font-medium mb-4">
                  Our Values
                </div>
                <div className="divide-y divide-slate-200 space-y-4">
                  {values.map((v, i) => (
                    <div key={i} className="flex items-start gap-3 pt-4 first:pt-0">
                      <span className="text-[10px] text-slate-400 pt-0.5 min-w-[20px] font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-[14px] text-slate-600 leading-snug">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollRevealDiv>
          </div>
        </div>
      </div>
    </section>
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
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.12 }}
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
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
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

  // Featured (first) card — always solid white, matches the "open" reference card.
  if (isFeatured) {
    return (
      <div className="relative rounded-3xl border border-slate-200 bg-white text-slate-900 p-8">
        <div
          className={`absolute top-6 right-6 h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div className="pr-16 mb-5">
          <span className="text-[32px] leading-none font-extrabold text-slate-200 block mb-3">
            {item.number}
          </span>
          <h3 className="text-[22px] font-bold text-slate-900 leading-tight">{item.title}</h3>
        </div>

        <p className="text-[14px] leading-[1.7] text-slate-600 mb-5">{item.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] tracking-wide font-semibold uppercase px-3.5 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-slate-900 hover:gap-2.5 transition-all"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  // Other cards: glassmorphism by default, solid white once they're active at the top.
  return (
    <div
      className={`relative rounded-3xl p-8 group cursor-pointer transition-all duration-500 ${
        isActive
          ? "bg-white border border-slate-200 shadow-lg"
          : "bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div
        className={`absolute top-6 right-6 h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      <div className={`pr-16 mb-5 ${index === 5 ? "flex items-baseline gap-3" : ""}`}>
        <span
          className={`text-[32px] leading-none font-extrabold ${index === 5 ? "shrink-0" : "block mb-3"} transition-colors duration-500 ${
            isActive ? "text-slate-200" : "text-white/30"
          }`}
        >
          {item.number}
        </span>
        <h3
          className={`${index === 5 ? "text-[24px]" : "text-[20px]"} font-bold leading-tight transition-colors duration-500 ${
            isActive ? "text-slate-900" : "text-white"
          }`}
        >
          {item.title}
        </h3>
      </div>

      <p
        className={`text-[14px] leading-[1.7] mb-5 transition-colors duration-500 ${
          isActive ? "text-slate-600" : "text-slate-300"
        }`}
      >
        {item.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[11px] tracking-wide font-semibold uppercase px-3.5 py-2 rounded-full border transition-colors duration-500 ${
              isActive
                ? "border-slate-200 bg-slate-50 text-slate-700"
                : "border-white/20 bg-white/5 text-slate-200"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className={`inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide hover:gap-2.5 transition-all ${
          isActive ? "text-slate-900" : "text-white"
        }`}
      >
        Learn more <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}