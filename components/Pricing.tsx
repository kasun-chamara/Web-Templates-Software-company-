"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, TrendingUp, Crown, Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    icon: Rocket,
    badge: "Launch & Book",
    price: "Free",
    subPrice: "forever",
    tagline: "Perfect for starting your online presence",
    features: [
      "Mini 1-Page Website (logo, photos, map)",
      "Online Booking Widget",
      "Google Business Profile setup",
      "1 Social Profile (FB/IG)",
      "14-day email support",
    ],
    note: "Free forever with active booking widget",
    cta: "Get started free",
    accent: "#10b981",
    popular: false,
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
    cta: "Choose Grow Local",
    accent: "#f59e0b",
    popular: true,
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
    cta: "Choose Dominate",
    accent: "#6366f1",
    popular: false,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-28 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            opacity: 0.25,
          }}
        />
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-amber-200/25 blur-[130px]" />
        <div className="absolute bottom-0 right-10 h-64 w-80 rounded-full bg-indigo-200/25 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Pricing
          </span>

          <h2 className="mt-6 text-[40px] leading-[1.05] tracking-tight text-slate-900 sm:text-[54px]">
            Choose your{" "}
            <span className="text-transparent [background-clip:text] [-webkit-background-clip:text] bg-gradient-to-r from-amber-500 to-indigo-600">
              growth plan
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] font-light leading-relaxed text-slate-500">
            Website solutions built to scale a local business from first booking
            to market leader.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.badge} plan={plan} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-slate-400">
          All plans include SSL, mobile-first design, and no long-term contract.
        </p>
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
  const dark = plan.popular;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
      className={dark ? "lg:-my-4" : ""}
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
          dark
            ? "border-slate-800 bg-slate-950 text-white shadow-[0_40px_100px_-30px_rgba(15,23,42,0.6)] lg:p-9"
            : "border-slate-200 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]"
        }`}
      >
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl"
          style={{ background: plan.accent }}
        />

        {plan.popular && (
          <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/15">
            Most popular
          </span>
        )}

        {/* Plan identity */}
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-white/10"
            style={{ background: `${plan.accent}1f`, color: plan.accent }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span
            className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${
              dark ? "text-white/70" : "text-slate-500"
            }`}
          >
            {plan.badge}
          </span>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-num text-[44px] font-extrabold tracking-tight">
            {plan.price}
          </span>
          <span
            className={`text-[13px] font-medium ${
              dark ? "text-white/50" : "text-slate-400"
            }`}
          >
            {plan.subPrice}
          </span>
        </div>
        <p
          className={`mt-2 text-[13px] ${dark ? "text-white/60" : "text-slate-500"}`}
        >
          {plan.tagline}
        </p>

        <div
          className={`my-7 h-px w-full ${dark ? "bg-white/10" : "bg-slate-100"}`}
        />

        {/* Features */}
        <ul className="flex-1 space-y-3.5">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: `${plan.accent}26`, color: plan.accent }}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
              </span>
              <span
                className={`text-[13.5px] leading-snug ${
                  dark ? "text-white/75" : "text-slate-600"
                }`}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {plan.note && (
          <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-2.5">
            <p className="text-[12px] italic text-emerald-700">{plan.note}</p>
          </div>
        )}

        <button
          className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[13px] font-semibold transition-all duration-300 ${
            dark
              ? "bg-white text-slate-900 hover:bg-slate-100"
              : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          {plan.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}
