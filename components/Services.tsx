"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";
import {
  Globe,
  ShoppingCart,
  Palette,
  Search,
  Wrench,
  ShieldCheck,
  Sparkles,
  Megaphone,
  Mail,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites built with React, Next.js & Laravel — fast, responsive, and ready to convert.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Online stores with secure checkout, inventory management, and optimized product pages.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-tested interfaces that reduce friction and keep customers engaged longer.",
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    desc: "Technical SEO, Core Web Vitals fixes, and speed work that moves you up in Google.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Monthly updates, uptime monitoring, and bug fixes so your site never goes down.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "SSL setup, vulnerability scanning, and hardening for genuine peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Creative & Branding",
    desc: "Logo design, brand guidelines, and visual identity that makes you recognizable.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Google Ads, social campaigns, and analytics-driven strategies that bring real leads.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Automated sequences, newsletter design, and A/B testing that improve open rates.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "AWS, Firebase, and cloud infrastructure setup — configured for reliability and scale.",
  },
];

const iconGradients = [
  "linear-gradient(135deg, #3B82F6, #4F46E5)",
  "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  "linear-gradient(135deg, #EC4899, #E11D48)",
  "linear-gradient(135deg, #10B981, #0D9488)",
  "linear-gradient(135deg, #F59E0B, #EA580C)",
];

function ServiceCard({ svc, index }: { svc: ServiceItem; index: number }) {
  const Icon = svc.icon;
  const gradient = iconGradients[index % iconGradients.length];
  return (
    <div
      className="reveal group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF2B00]/40 hover:shadow-[0_20px_40px_-16px_rgba(255,43,0,0.25)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: "#FF2B00" }}
      />

      {/* Small dot texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(ellipse 90% 90% at 100% 0%, black 0%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 100% 0%, black 0%, transparent 85%)",
        }}
      />

      <div className="mb-6 flex items-start justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          style={{ backgroundImage: gradient }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF2B00] dark:text-zinc-600" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{svc.title}</h3>
      <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400">{svc.desc}</p>

      <div
        className="mt-5 h-px w-0 bg-gradient-to-r from-[#FF2B00] to-transparent transition-all duration-500 group-hover:w-full"
      />
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden bg-white py-32 dark:bg-zinc-950"
    >
      <MouseGlow x={x} y={y} color="rgba(255,43,0,0.35)" midColor="rgba(255,43,0,0.1)" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(15,23,42,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,43,0,0.12) 0%,transparent 70%)" }}
      />

      {/* Ambient light-orange blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-[6%] h-72 w-72 rounded-full bg-orange-200/30 blur-[130px]" />
        <div className="absolute bottom-0 left-[4%] h-64 w-64 rounded-full bg-orange-100/50 blur-[120px]" />
      </div>

      {/* Animated squiggle line */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full opacity-60"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="servicesSquiggle" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF2B00" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF7A3D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF2B00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          fill="none"
          stroke="url(#servicesSquiggle)"
          strokeWidth="1.5"
          initial={{ d: "M-100 120 Q 260 60 520 120 T 1040 120 T 1600 120" }}
          animate={{
            d: [
              "M-100 120 Q 260 60 520 120 T 1040 120 T 1600 120",
              "M-100 120 Q 260 180 520 120 T 1040 120 T 1600 120",
              "M-100 120 Q 260 60 520 120 T 1040 120 T 1600 120",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-white to-transparent dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-white to-transparent dark:from-zinc-950" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #FF2B00, transparent)" }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.35em]" style={{ color: "#FF2B00" }}>What We Offer</span>
          </div>
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-7xl">
              Services Built
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #751400)" }}
              >
                to Grow You
              </span>
            </h2>
            <div className="space-y-6">
              <p className="max-w-sm text-base leading-relaxed text-slate-500 dark:text-zinc-400">
                A full-service digital team — from first line of code to the
                campaign that brings customers through the door.
              </p>
              <div className="flex gap-8 pt-2">
                {[
                  { val: "10", sub: "Core Services" },
                  { val: "10+", sub: "Projects Delivered" },
                  { val: "100%", sub: "Client Satisfaction" },
                ].map(({ val, sub }) => (
                  <div key={sub} className="flex flex-col gap-1">
                    <span className="font-num text-2xl font-bold text-slate-900 dark:text-white">{val}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal mt-20 flex items-center justify-between border-t border-dashed pt-10"
          style={{ borderColor: "rgba(255,43,0,0.3)" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500">All services available globally</p>
          <Link
            href="/services"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(90deg, #FF2B00)" }}
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 8px 24px -6px rgba(255,43,0,0.4)",
                  "0 10px 34px -4px rgba(255,43,0,0.6)",
                  "0 8px 24px -6px rgba(255,43,0,0.4)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 text-xs font-semibold uppercase tracking-widest text-white">
              View all services
            </span>
            <ArrowUpRight className="relative z-10 h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
