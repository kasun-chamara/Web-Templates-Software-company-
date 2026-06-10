"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Project {
  title: string;
  client: string;
  category: string;
  desc: string;
  tech: string[];
  metric: string;
  image: string;
  featured?: boolean;
}

interface Metric {
  value: string;
  label: string;
}

const projects: Project[] = [
  {
    title: "Orbit Design System",
    client: "Stripe",
    category: "Product · Design Systems",
    desc: "Built a unified component library and design token system adopted across 14 product teams, cutting UI build time by 60% and eliminating visual inconsistencies at scale.",
    tech: ["React", "TypeScript", "Storybook", "Figma API"],
    metric: "60% faster builds",
    image: "/images/project-1.jpg",
    featured: true,
  },
  {
    title: "Pulse Analytics",
    client: "Shopify",
    category: "Data · Dashboard",
    desc: "Real-time merchant analytics platform surfacing revenue signals and inventory risk across 1M+ active stores.",
    tech: ["Next.js", "D3.js", "Kafka"],
    metric: "1M+ stores",
    image: "/images/project-2.jpg",
  },
  {
    title: "ClearPath AI",
    client: "Waymo",
    category: "AI · Mobility",
    desc: "Route optimisation engine using reinforcement learning to reduce autonomous vehicle decision latency by 40ms.",
    tech: ["Python", "PyTorch", "Rust"],
    metric: "40ms faster",
    image: "/images/project-3.jpg",
  },
  {
    title: "Vault Security",
    client: "Coinbase",
    category: "Crypto · Infrastructure",
    desc: "Zero-knowledge custody architecture protecting $8B+ in digital assets with multi-party computation signing.",
    tech: ["Go", "Solidity", "AWS HSM"],
    metric: "$8B+ secured",
    image: "/images/project-4.jpg",
  },
];

const metrics: Metric[] = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500M+", label: "Users served" },
  { value: "50+", label: "Enterprise clients" },
];

const trustedBy = ["Microsoft", "Google", "Amazon", "Meta", "Netflix"];

/* ─── Card ─────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white",
        "transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60",
        project.featured ? "col-span-2 grid grid-cols-2" : "flex flex-col",
      ].join(" ")}
    >
      {/* Image */}
      <div
        className={[
          "relative overflow-hidden bg-slate-100",
          project.featured ? "min-h-72 h-full" : "h-52 w-full",
        ].join(" ")}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={project.featured ? "50vw" : "(max-width: 768px) 100vw, 25vw"}
        />
        {/* subtle overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/5" />
      </div>

      {/* Content */}
      <div
        className={[
          "flex flex-col justify-between",
          project.featured ? "p-8 min-h-72" : "p-6 flex-1",
        ].join(" ")}
      >
        <div>
          <div className="mb-3 flex items-start justify-between gap-2">
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
              {project.category}
            </span>
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition-all duration-200 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <h3
            className={[
              "font-sans font-semibold leading-tight tracking-tight text-slate-900",
              project.featured ? "mb-2 text-2xl" : "mb-1.5 text-lg",
            ].join(" ")}
          >
            {project.title}
          </h3>

          <p className="mb-3 text-[12px] font-medium text-slate-400">
            {project.client}
          </p>

          <p className="text-[13px] font-light leading-relaxed text-slate-500">
            {project.desc}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="flex-shrink-0 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white">
            {project.metric}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────── */
export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -999, y: -999 });

  /* neon bubble */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    const onLeave = () => setMouse({ x: -999, y: -999 });
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* ── refs for staggered header reveals ── */
  const headerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "0px 0px -60px 0px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#84ceff04] py-24 md:py-32"
    >
      {/* Hero-matching gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#00405310] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* Mouse neon bubble */}
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          width: 520,
          height: 520,
          left: mouse.x - 260,
          top: mouse.y - 260,
          background:
            "radial-gradient(circle, rgba(0,92,246,0.55) 0%, rgba(59,130,246,0.18) 40%, transparent 70%)",
          filter: "blur(80px)",
          transition: "left 0.08s ease, top 0.08s ease",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          {/* Badge — matches Hero "Now accepting projects" pill */}
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-slate-600 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Featured projects
          </span>

          <h2 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            Building products
            <br />
            <span className="font-normal text-slate-400">
              that scale globally
            </span>
          </h2>

          <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-slate-500">
            From government platforms to AI-powered enterprise systems —
            trusted by millions worldwide.
          </p>
        </motion.div>

        {/* ── Metrics ── */}
        <motion.div
          ref={metricsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={metricsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mb-14"
        >
          <div className="inline-flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={[
                  "px-7 py-4 text-center",
                  i < metrics.length - 1 ? "border-r border-slate-200" : "",
                ].join(" ")}
              >
                <span className="block text-xl font-bold text-slate-900">
                  {m.value}
                </span>
                <span className="mt-0.5 block text-[11px] text-slate-400">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Cards grid — each animates up from bottom ── */}
        <div className="grid grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* ── CTA + Trust ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex items-center justify-between border-t border-slate-100 pt-10"
        >
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-700">
              Trusted by
            </span>
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-[13px] font-medium text-slate-500 transition-colors hover:text-blue-600"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Button — matches Hero "Start Project" style */}
          <button className="group flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-slate-700">
            All projects
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}