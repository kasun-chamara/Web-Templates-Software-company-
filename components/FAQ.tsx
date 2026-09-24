"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircle, Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "How much does a website or app cost?",
    a: "Every project is different, so we quote after a free consultation once we understand your goals and features. You get a clear, fixed quote before any work starts — no hidden costs. You can also see our starter plans in the Pricing section.",
  },
  {
    q: "How long does a project take?",
    a: "A business website usually takes 2–4 weeks. Web apps, mobile apps and custom platforms typically take 6–12 weeks depending on scope. We agree the timeline with you in the planning stage and share progress every week.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Once the project is paid in full, the source code, designs and content created for you are yours. We hand everything over with documentation so any team can maintain it.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing support and maintenance — uptime monitoring, security updates, backups and bug fixes — so your product stays fast, safe and online.",
  },
  {
    q: "Do you work with clients outside the UK?",
    a: "Absolutely. We work remotely with clients around the world and communicate by video call, email and WhatsApp in your time zone.",
  },
  {
    q: "What technologies do you use?",
    a: "We choose the right tools for each project — commonly React, Next.js, Laravel and Node.js for web; React Native and Flutter for mobile; and AWS or Firebase for cloud hosting.",
  },
  {
    q: "How will I stay updated during the project?",
    a: "You get a dedicated contact, weekly progress updates and a live demo link so you can see and test your product as it is being built.",
  },
  {
    q: "Can you improve or take over my existing website or app?",
    a: "Yes. We can audit your current product, fix issues, improve speed and SEO, add new features, or rebuild it on a modern stack if that is the better option.",
  },
];

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-[#FF2B00]/40 bg-white shadow-[0_18px_40px_-20px_rgba(255,43,0,0.35)] dark:bg-zinc-900"
          : "border-slate-200 bg-white hover:border-slate-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span
          className={`font-num text-xs font-semibold tracking-[0.15em] transition-colors ${
            open ? "text-[#FF2B00]" : "text-slate-400 dark:text-zinc-500"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-[15px] font-semibold text-slate-900 dark:text-white sm:text-base">{q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-45 bg-[#FF2B00] text-white" : "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="px-5 pb-6 pl-[3.25rem] text-[15px] leading-relaxed text-slate-500 dark:text-zinc-400 sm:px-6 sm:pl-[3.75rem]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-20 dark:bg-zinc-950 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.12) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 20% 30%, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 20% 30%, black 10%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-[120px] dark:bg-[#FF2B00]/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Left */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2B00]/20 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FF2B00] dark:bg-zinc-900">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF2B00]" />
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Questions?
            <br />
            <span className="text-slate-400 dark:text-zinc-500">We&apos;ve got answers.</span>
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-500 dark:text-zinc-400">
            Everything you need to know about working with Kapingar — from pricing and timelines to support
            after launch.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-base font-semibold text-slate-900 dark:text-white">Still have a question?</div>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">Talk to us directly — we reply within 24 hours.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/447751981261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black"
              >
                <Mail className="h-4 w-4" /> Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
