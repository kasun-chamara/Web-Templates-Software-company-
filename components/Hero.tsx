"use client";


import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#84ceff04]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#00405310]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-white shadow-sm">
             Now accepting projects
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-slate-900">
            Building Digital
            <br />
            Systems That Work
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-500">
            We build enterprise platforms, SaaS products, AI solutions and
            scalable software for modern businesses.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
              Start Project
              <ArrowRight size={18} />
            </button>

            <button className="border px-6 py-3 rounded-xl bg-white">
              View Work
            </button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}