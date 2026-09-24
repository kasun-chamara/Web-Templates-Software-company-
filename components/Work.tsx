"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  animate,
  type MotionValue,
} from "framer-motion";

interface Project {
  title: string;
  client: string;
  category: string;
  desc: string;
  tech: string[];
  metric: string;
  image: string;
  accent: string;
}

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const projects: Project[] = [
  {
    title: "Design Systems",
    client: "One consistent look across every screen",
    category: "Product · Design Systems",
    desc: "We build reusable component libraries and design-token pipelines, so your team ships new screens faster and your product looks the same everywhere.",
    tech: ["React", "TypeScript", "Storybook", "Figma API"],
    metric: "Faster UI builds",
    image: "/images/project-1.jpg",
    accent: "#FF2B00",
  },
  {
    title: "Analytics Dashboards",
    client: "Your numbers, live and easy to read",
    category: "Data · Dashboard",
    desc: "We build real-time dashboards that turn your sales, customer and inventory data into clear signals you can act on.",
    tech: ["Next.js", "D3.js", "Kafka"],
    metric: "Real-time insights",
    image: "/images/project-2.jpg",
    accent: "#FF7A45",
  },
  {
    title: "AI Solutions",
    client: "Smarter decisions, automated",
    category: "AI · Automation",
    desc: "We design and train machine-learning models that automate decisions, predict outcomes and remove repetitive work from your operations.",
    tech: ["Python", "PyTorch", "Rust"],
    metric: "Automated workflows",
    image: "/images/project-3.jpg",
    accent: "#B91C1C",
  },
  {
    title: "Security & Blockchain",
    client: "Protection built in from day one",
    category: "Crypto · Infrastructure",
    desc: "We build secure infrastructure — from encrypted key management to blockchain smart contracts — with no single point of failure.",
    tech: ["Go", "Solidity", "AWS HSM"],
    metric: "Security-first",
    image: "/images/project-4.jpg",
    accent: "#7A1600",
  },
];

const metrics: Metric[] = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 10, suffix: "K+", label: "Users served" },
  { value: 50, suffix: "+", label: "Enterprise clients" },
];

const trustedBy = ["Microsoft", "Google", "Amazon", "Meta", "Netflix", "Airbnb"];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Animated counter ─────────────────────────────────── */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [display, setDisplay] = useState("0");
  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ─── Project card (Orbit style) ───────────────────────── */
function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <article
      className="group relative grid w-full overflow-hidden rounded-3xl bg-white/85 dark:bg-zinc-900/85 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] dark:shadow-black/40 backdrop-blur-2xl lg:grid-cols-[1.05fr_1fr]"
    >
      {/* Text side */}
      <div className="relative z-10 flex flex-col justify-between gap-5 p-6 sm:gap-8 sm:p-10 lg:p-12">
        <div>
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="font-num text-[11px] font-semibold tracking-[0.2em] text-slate-500 dark:text-zinc-400">
              {String(index + 1).padStart(2, "0")}
              <span className="text-slate-400 dark:text-zinc-500"> / {String(total).padStart(2, "0")}</span>
            </span>
            <span className="h-3 w-px bg-slate-300 dark:bg-zinc-700" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[13px] font-medium text-slate-500 dark:text-zinc-400">
            {project.client}
          </p>

          <p className="mt-3 line-clamp-3 max-w-md text-[13px] font-light leading-relaxed sm:mt-5 sm:line-clamp-none sm:text-[14px] text-slate-600 dark:text-zinc-400">
            {project.desc}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-800/70 px-3 py-1 text-[11px] text-slate-600 dark:text-zinc-400 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-slate-200 dark:border-zinc-800 pt-4 sm:pt-5">
            <span className="rounded-full border border-slate-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-800/70 whitespace-nowrap px-3.5 py-1.5 text-[12px] font-semibold text-slate-600 dark:text-zinc-400 backdrop-blur-sm">
              {project.metric}
            </span>
            <a
              href="/work"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-slate-900 dark:text-white transition-colors hover:text-slate-500 dark:hover:text-zinc-400"
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className="relative h-32 overflow-hidden sm:h-auto sm:min-h-[280px] lg:min-h-[440px]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.client}`}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-l" />
      </div>
    </article>
  );
}

/* ─── Sticky stacking wrapper ─────────────────────────────
   All cards share a single sticky box driven by one continuous
   scroll progress. Each card owns a segment of that progress: it
   slides up from below into its resting peek offset during its own
   segment, then — because the box never un-sticks between segments —
   it holds that exact position for the rest of the stack instead of
   scrolling away once its own segment ends. */
function StackCard({
  project,
  index,
  total,
  progress,
  travel,
  peek,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  travel: number;
  peek: number;
}) {
  const segStart = index / total;
  const segEnd = (index + 1) / total;

  // Cards further down the stack settle to a slightly smaller scale as they get buried.
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [segStart, segEnd], [1, targetScale]);

  const peekOffset = index * peek;
  const y = useTransform(progress, [segStart, segEnd], [index === 0 ? 0 : travel, peekOffset]);

  return (
    <motion.div
      style={{ scale, y, zIndex: index }}
      className="absolute inset-x-0 top-0 origin-top"
    >
      <ProjectCard project={project} index={index} total={total} />
    </motion.div>
  );
}

function ProjectStack({ projects }: { projects: Project[] }) {
  const total = projects.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(800);
  const [peek, setPeek] = useState(24);

  useEffect(() => {
    const measure = () => {
      if (boxRef.current) setTravel(boxRef.current.offsetHeight);
      setPeek(window.innerWidth < 640 ? 12 : 24);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      data-testid="work-stack-scroller"
      className="relative"
      style={{ height: `${total * 100}vh` }}
    >
      <div
        ref={boxRef}
        className="sticky top-[96px] h-[calc(100svh-112px)] overflow-hidden sm:top-[120px] sm:h-auto sm:min-h-[66vh] md:min-h-[78vh]"
      >
        {projects.map((project, index) => (
          <StackCard
            key={project.title}
            project={project}
            index={index}
            total={total}
            progress={scrollYProgress}
            travel={travel}
            peek={peek}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────── */
export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  };
  const handleLeave = () => {
    mouseX.set(-999);
    mouseY.set(-999);
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div className="px-3 sm:px-6">
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative rounded-[32px] py-24 sm:rounded-[40px] md:py-32"
      style={{ background: "#0d0100" }}
    >
      {/* Decorative layers (clipped so they never break the sticky stack) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px] sm:rounded-[40px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0400] to-[#0d0100]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            opacity: 0.3,
          }}
        />
        <motion.div
          className="absolute z-0 hidden rounded-full md:block"
          style={{
            width: 520,
            height: 520,
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(255,43,0,0.5) 0%, rgba(255,43,0,0.16) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* ── Sticky info column — stays visible while the cards stack ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:sticky lg:top-[120px] lg:h-fit lg:w-[35%] lg:flex-shrink-0 lg:self-start"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF2B00" }} />
              Selected work
            </span>

            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Trusted by clients
              <br />
              <span className="font-normal text-white/40">around the world</span>
            </h2>

            <p className="mt-4 max-w-sm text-[15px] font-light leading-relaxed text-white/55">
              From growing startups to AI-powered enterprise systems —
              trusted by millions worldwide.
            </p>

            {/* Metrics */}
            <div
              ref={metricsRef}
              className="mt-8 max-w-sm divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between px-5 py-4"
                >
                  <span className="font-num text-xl font-bold tracking-tight text-white">
                    <Counter value={m.value} suffix={m.suffix} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/work"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[13px] font-medium text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              All projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* ── Stacking project cards ── */}
          <div className="relative flex-1">
            <ProjectStack projects={projects} />
          </div>
        </div>

        {/* ── Trust strip ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex flex-col items-start gap-3 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:gap-8"
        >
          <span className="flex-shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
            Trusted by
          </span>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-[work-marquee_22s_linear_infinite] gap-10">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-[14px] font-medium text-white/45"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes work-marquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
    </div>
  );
}
