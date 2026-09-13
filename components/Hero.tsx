"use client";

import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

export default function Hero() {
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <MouseGlow x={x} y={y} />

      {/* Mesh net pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(40,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 35%, black 20%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 35%, black 20%, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white shadow-sm">
            Now accepting projects
          </span>

          <h1 className="mt-6 sm:mt-8 max-w-5xl mx-auto text-[46px] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.08]">
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

            <button className="border border-[#FF2B00] px-6 py-3 rounded-xl bg-white text-[#FF2B00] w-full sm:w-auto font-semibold transition-colors duration-200 hover:bg-[#FF2B00] hover:text-white">
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
      #1A0400,
      #FF2B00,
      #7A1600,
      #1A0400,
      #FF2B00
    );

    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    animation: neonMove 30s linear infinite;

    text-shadow: 0 0 20px rgba(255, 43, 0, 0.3);
  }

        @keyframes neonMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  );
}