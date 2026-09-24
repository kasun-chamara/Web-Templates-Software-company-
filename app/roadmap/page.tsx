import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Roadmap — Kapingar" };

export default function RoadmapPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">Product Roadmap</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mt-4 leading-[1.08]">
            From Idea<span className="gradient-text block">To Launch &amp; Beyond</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed">
            Every product we build follows the same proven journey — eight clear stages, from the first
            conversation to a live product that keeps growing.
          </p>
        </div>
      </section>
      <Roadmap />
      <CTA />
    </>
  );
}
