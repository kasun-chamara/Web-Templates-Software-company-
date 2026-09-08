"use client";

import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#84ceff04]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f4f9ff]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white shadow-sm">
            Now accepting projects
          </span>

          <h1 className="mt-6 sm:mt-8 max-w-5xl mx-auto text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.08]">
            Building Digital
            <br />
            <span className="neon-text">Systems That Work</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg text-slate-500 px-2">
            We build enterprise platforms, SaaS products, AI solutions and
            scalable software for modern businesses.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto">
              Start Project
              <ArrowRight size={18} />
            </button>

            <button className="border px-6 py-3 rounded-xl bg-white w-full sm:w-auto">
              View Work
            </button>
          </div>
        </div>

        <HeroVisual />
      </div>

      <style jsx>{`
       .neon-text {
    background: linear-gradient(
      90deg,
      #1F2733,
      #FD1D1D,
      #3E4856,
      #1F2733,
      #111729
    );

    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    animation: neonMove 30s linear infinite;

    text-shadow: 0 0 20px rgba(100, 130, 160, 0.3);
  }

        @keyframes neonMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  );
}