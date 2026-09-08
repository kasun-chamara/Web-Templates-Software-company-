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
    title: "Orbit Design System",
    client: "Stripe",
    category: "Product · Design Systems",
    desc: "A unified component library and design-token pipeline adopted across 14 product teams — cutting UI build time by 60% and eliminating visual drift at scale.",
    tech: ["React", "TypeScript", "Storybook", "Figma API"],
    metric: "60% faster builds",
    image: "/images/project-1.jpg",
    accent: "#6366f1",
  },
  {
    title: "Pulse Analytics",
    client: "Shopify",
    category: "Data · Dashboard",
    desc: "Real-time merchant analytics surfacing revenue signals and inventory risk across 1M+ active stores.",
    tech: ["Next.js", "D3.js", "Kafka"],
    metric: "1M+ stores",
    image: "/images/project-2.jpg",
    accent: "#0ea5e9",
  },
  {
    title: "ClearPath AI",
    client: "Waymo",
    category: "AI · Mobility",
    desc: "A reinforcement-learning route engine that shaved 40ms off autonomous-vehicle decision latency, keeping the fleet reactive in dense urban traffic.",
    tech: ["Python", "PyTorch", "Rust"],
    metric: "40ms faster",
    image: "/images/project-3.jpg",
    accent: "#10b981",
  },
  {
    title: "Vault Security",
    client: "Coinbase",
    category: "Crypto · Infrastructure",
    desc: "Zero-knowledge custody with multi-party-computation signing, protecting $8B+ in digital assets without a single point of key compromise.",
    tech: ["Go", "Solidity", "AWS HSM"],
    metric: "$8B+ secured",
    image: "/images/project-4.jpg",
    accent: "#f59e0b",
  },
];

const metrics: Metric[] = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 500, suffix: "M+", label: "Users served" },
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
    <article className="group relative grid w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] lg:grid-cols-[1.05fr_1fr]">
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-60 blur-3xl"
        style={{ background: project.accent }}
      />

      {/* Text side */}
      <div className="relative z-10 flex flex-col justify-between gap-8 p-8 sm:p-10 lg:p-12">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-num text-[11px] font-semibold tracking-[0.2em] text-slate-500">
              {String(index + 1).padStart(2, "0")}
              <span className="text-slate-400"> / {String(total).padStart(2, "0")}</span>
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[13px] font-medium text-slate-500">
            for {project.client}
          </p>

          <p className="mt-5 max-w-md text-[14px] font-light leading-relaxed text-slate-600">
            {project.desc}
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-5">
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-[12px] font-semibold text-slate-600">
              {project.metric}
            </span>
            <a
              href="/work"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 transition-colors hover:text-slate-500"
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className="relative min-h-[280px] overflow-hidden lg:min-h-[440px]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.client}`}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent lg:bg-gradient-to-l" />
      </div>
    </article>
  );
}

/* ─── Sticky stacking wrapper ─────────────────────────── */
function StackCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Cards further down the stack settle to a slightly smaller scale as they get buried.
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-[120px] flex min-h-[66vh] items-start justify-center pt-3 md:min-h-[78vh] md:items-center md:pt-0"
    >
      <motion.div
        style={{ scale, top: `${index * 24}px` }}
        className="relative w-full origin-top"
      >
        <ProjectCard project={project} index={index} total={total} />
      </motion.div>
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
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative bg-[#84ceff04] py-24 md:py-32"
    >
      {/* Decorative layers (clipped so they never break the sticky stack) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#00405310]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
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
              "radial-gradient(circle, rgba(0,92,246,0.5) 0%, rgba(59,130,246,0.16) 40%, transparent 70%)",
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
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Selected work
            </span>

            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Building products
              <br />
              <span className="font-normal text-slate-400">that scale globally</span>
            </h2>

            <p className="mt-4 max-w-sm text-[15px] font-light leading-relaxed text-slate-500">
              From government platforms to AI-powered enterprise systems —
              trusted by millions worldwide.
            </p>

            {/* Metrics */}
            <div
              ref={metricsRef}
              className="mt-8 max-w-sm divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between px-5 py-4"
                >
                  <span className="font-num text-xl font-bold tracking-tight text-slate-900">
                    <Counter value={m.value} suffix={m.suffix} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/work"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-slate-700"
            >
              All projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* ── Stacking project cards ── */}
          <div className="relative flex-1">
            {projects.map((p, i) => (
              <StackCard key={p.title} project={p} index={i} total={projects.length} />
            ))}
          </div>
        </div>

        {/* ── Trust strip ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex flex-col items-start gap-3 border-t border-slate-100 pt-10 sm:flex-row sm:items-center sm:gap-8"
        >
          <span className="flex-shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-700">
            Trusted by
          </span>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-[work-marquee_22s_linear_infinite] gap-10">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-[14px] font-medium text-slate-500"
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
  );
}
