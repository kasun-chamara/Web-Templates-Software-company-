"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Rocket, TrendingUp, Crown, Check } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plans = [
  {
    icon: Rocket,
    badge: "Launch & Book",
    price: "Free",
    subPrice: null,
    tagline: "Perfect for starting your online presence",
    features: [
      "Mini 1-Page Website (logo, photos, map)",
      "Online Booking Widget",
      "Google Business Profile setup",
      "1 Social Profile (FB/IG)",
      "14-day email support",
    ],
    note: "Free forever with active booking widget",
    cta: "Get Started Free",
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    popular: false,
    offset: "lg:mt-16",
  },
  {
    icon: TrendingUp,
    badge: "Grow Local",
    price: "$99",
    subPrice: "setup + $29/mo",
    tagline: "Ideal for growing your local business",
    features: [
      "5-Page Custom Website + domain",
      "Local SEO + Google submission",
      "3 Social Profiles + 3 posts/mo (3 months)",
      "Email/SMS reminders",
      "Monthly analytics report",
      "3 months priority support",
    ],
    note: null,
    cta: "Choose Plan",
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-orange-500/30",
    popular: true,
    offset: "lg:mt-0",
  },
  {
    icon: Crown,
    badge: "Dominate the Block",
    price: "$299",
    subPrice: "setup + $79/mo",
    tagline: "Complete solution for market dominance",
    features: [
      "Unlimited-Page Pro Site + blog",
      "Local SEO + $100 Google Ads credit",
      "5+ Socials + Reels plan (6 posts/mo)",
      "Waitlists, loyalty, staff calendars",
      "Auto-review booster",
      "Dedicated manager + quarterly plan",
    ],
    note: null,
    cta: "Choose Plan",
    gradient: "from-violet-500 to-indigo-600",
    glow: "shadow-indigo-500/20",
    popular: false,
    offset: "lg:mt-16",
  },
];

// Squiggle mesh lines tuned for a light background
const MESH_LINES = [
  {
    id: "pricingMesh1",
    from: "#f59e0b",
    via: "#f59e0b",
    to: "#818cf8",
    d1: "M-100 120 Q 250 30 500 120 T 1000 120 T 1500 120",
    d2: "M-100 120 Q 250 210 500 120 T 1000 120 T 1500 120",
    duration: 13,
    delay: 0,
    strokeOpacity: 0.25,
  },
  {
    id: "pricingMesh2",
    from: "#34d399",
    via: "#34d399",
    to: "#6366f1",
    d1: "M-100 460 Q 300 360 600 460 T 1200 460 T 1600 460",
    d2: "M-100 460 Q 300 560 600 460 T 1200 460 T 1600 460",
    duration: 16,
    delay: 1.2,
    strokeOpacity: 0.2,
  },
  {
    id: "pricingMesh3",
    from: "#a78bfa",
    via: "#a78bfa",
    to: "#f59e0b",
    d1: "M-100 760 Q 280 660 560 760 T 1100 760 T 1600 760",
    d2: "M-100 760 Q 280 860 560 760 T 1100 760 T 1600 760",
    duration: 19,
    delay: 2.4,
    strokeOpacity: 0.2,
  },
];

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
      style={{ fontFamily: dmSans.style.fontFamily }}
    >
      {/* Mesh gradient + squiggle background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* soft color blobs forming the mesh base */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-orange-200/25 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[350px] rounded-full bg-indigo-200/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-emerald-200/20 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[350px] h-[300px] rounded-full bg-purple-200/15 blur-[100px]" />

        {/* animated squiggly mesh lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2
            className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-slate-900"
            style={{ fontFamily: playfair.style.fontFamily }}
          >
            Choose Your{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-600">
              Growth Plan
            </span>
          </h2>
          <p className="mt-5 text-[17px] text-slate-500 max-w-xl mx-auto">
            Professional website solutions designed to grow your business from startup to market leader
          </p>
        </motion.div>

        {/* Staggered / non-uniform grid — not a flat row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.badge} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = plan.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15,
      }}
      className={plan.offset}
    >
      <div
        className={`relative rounded-3xl bg-white border transition-all duration-500 hover:-translate-y-2 ${
          plan.popular
            ? "border-orange-300 shadow-2xl " + plan.glow
            : "border-slate-200 shadow-lg hover:shadow-xl " + plan.glow
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold uppercase tracking-wide shadow-lg">
            Most Popular
          </div>
        )}

        {/* Header band */}
        <div
          className={`rounded-t-3xl px-8 py-7 bg-gradient-to-br ${plan.gradient} flex items-center gap-3`}
        >
          <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-[17px] font-bold text-white uppercase tracking-wide">
            {plan.badge}
          </h3>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-extrabold text-slate-900 tracking-tight">
                {plan.price}
              </span>
              {plan.subPrice && (
                <span className="text-[14px] font-medium text-slate-400">
                  {plan.subPrice}
                </span>
              )}
            </div>
            <p className="text-[13px] text-slate-500 mt-2">{plan.tagline}</p>
          </div>

          <ul className="space-y-3.5 mb-7">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 h-4 w-4 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-[13.5px] text-slate-600 leading-snug">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          {plan.note && (
            <div className="mb-5 px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
              <p className="text-[12px] text-emerald-700 italic">{plan.note}</p>
            </div>
          )}

          <button
            className={`w-full py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-wide transition-all duration-300 ${
              plan.popular
                ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:scale-[1.02]`
                : "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </motion.div>
  );
}