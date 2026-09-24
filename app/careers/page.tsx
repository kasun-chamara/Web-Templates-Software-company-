import type { Metadata } from "next";
import {
  Globe,
  Clock,
  GraduationCap,
  Rocket,
  Users,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
  Send,
  MessageSquare,
  ClipboardCheck,
  PartyPopper,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Kapingar",
  description: "Join Kapingar and build real products for real businesses — web, mobile, AI and cloud.",
};

const EMAIL = "info@kapingar.com";
const applyHref = (role: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Application — ${role}`)}&body=${encodeURIComponent(
    "Hi Kapingar team,\n\nI'd like to apply for this role. My CV and portfolio are attached.\n\nThanks,"
  )}`;

const perks = [
  { icon: Globe, title: "Remote-friendly", desc: "Work from where you do your best work, with a team spread across time zones." },
  { icon: Clock, title: "Flexible hours", desc: "We care about great results, not about when you clock in." },
  { icon: Rocket, title: "Real products", desc: "Ship live platforms, apps and AI features used by real customers every day." },
  { icon: GraduationCap, title: "Keep learning", desc: "Work with a modern stack and grow your skills on every project." },
  { icon: Users, title: "Small, senior team", desc: "No layers of management — your ideas get heard and your work gets seen." },
  { icon: HeartHandshake, title: "Supportive culture", desc: "Honest feedback, pair-programming and teammates who help each other win." },
];

const roles = [
  { icon: ShieldCheck, title: "QA / Test Engineer", team: "Quality", stack: ["Automated testing", "Manual QA", "Bug tracking"] },
];

const steps = [
  { icon: Send, title: "Apply", desc: "Send your CV and portfolio or GitHub." },
  { icon: MessageSquare, title: "Intro call", desc: "A friendly 30-minute chat about you and the role." },
  { icon: ClipboardCheck, title: "Skills task", desc: "A short, practical task — no trick questions." },
  { icon: PartyPopper, title: "Offer", desc: "We move fast and give you a clear answer." },
];

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">Careers</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mt-4 leading-[1.08]">
            Build What&apos;s Next<span className="gradient-text block">With Kapingar</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed">
            We&apos;re a team of engineers, designers and marketers building real products for real businesses.
            If you love shipping great work, we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#roles" className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white dark:bg-white dark:text-black">
              See open roles <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={applyHref("Open application")}
              className="inline-flex items-center justify-center rounded-xl border border-[#FF2B00] px-6 py-3 font-semibold text-[#FF2B00] transition-colors hover:bg-[#FF2B00] hover:text-white dark:text-[#FF5A33] dark:hover:text-white"
            >
              Send your CV
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-zinc-900/40 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2B00]">Why Kapingar</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A place to do the best work of your career
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF2B00]/40 hover:shadow-[0_20px_40px_-20px_rgba(255,43,0,0.35)] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF2B00] to-[#7A1600] shadow-lg shadow-[#FF2B00]/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-950 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2B00]">Open positions</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">We&apos;re hiring now</h2>
            </div>
            <p className="max-w-xs text-sm text-slate-500 dark:text-zinc-400">
              One role open right now. More roles will be listed here as the team grows.
            </p>
          </div>

          <div className="space-y-3">
            {roles.map(({ icon: Icon, title, team, stack }) => (
              <a
                key={title}
                href={applyHref(title)}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#FF2B00]/40 hover:shadow-[0_18px_40px_-20px_rgba(255,43,0,0.35)] dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF2B00] transition-colors group-hover:bg-[#FF2B00] group-hover:text-white dark:bg-zinc-800 dark:group-hover:bg-[#FF2B00] dark:group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-[#FF2B00] dark:text-white dark:group-hover:text-[#FF5A33]">{title}</h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {team}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      Remote-friendly
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FF2B00]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#FF2B00]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF2B00]" /> Hiring now
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {stack.map((t) => (
                      <span key={t} className="text-[12px] text-slate-500 dark:text-zinc-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all group-hover:bg-[#FF2B00] dark:bg-white dark:text-black dark:group-hover:bg-[#FF2B00] dark:group-hover:text-white sm:self-center">
                  Apply <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>

          {/* Open application */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border-2 border-dashed border-[#FF2B00]/30 bg-orange-50/50 p-6 dark:bg-[#FF2B00]/5 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">Don&apos;t see your role?</div>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                Send an open application — great people always have a place here.
              </p>
            </div>
            <a href={applyHref("Open application")} className="btn-primary whitespace-nowrap">
              Send open application
            </a>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(180deg, #1A0400 0%, #0a0400 100%)" }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1.2px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 90%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF7A45]">Hiring process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, fast and human</h2>
          </div>
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-[2px] bg-gradient-to-r from-[#FFB020] via-[#FF2B00] to-[#7A1600] lg:block" />
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A45] to-[#FF2B00] shadow-[0_12px_30px_-8px_rgba(255,43,0,0.6)] ring-4 ring-[#1A0400]">
                  <Icon className="h-7 w-7 text-white" />
                  <span className="font-num absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#1A0400]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
