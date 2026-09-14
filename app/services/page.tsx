import Services from "@/components/Services";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services — NexaLab" };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">Services</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mt-4 leading-[1.08]">
            What We<span className="gradient-text block">Build For You</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed">Every service is rooted in engineering discipline, design thinking, and a relentless focus on outcomes.</p>
        </div>
      </section>
      <Services />
      <CTA />
    </>
  );
}
