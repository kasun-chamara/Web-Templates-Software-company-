"use client";

import Link from "next/link";
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center rounded-full border dark:border-zinc-700 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white dark:bg-zinc-900 dark:text-zinc-300 shadow-sm">
            Now accepting projects
          </span>

          <h1 className="mt-6 sm:mt-8 max-w-5xl mx-auto text-[46px] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-[1.08]">
            Building Digital
            <br />
            <span className="neon-text">Systems That Work</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg text-slate-500 dark:text-zinc-400 px-2">
            We build enterprise platforms, SaaS products, AI solutions and
            scalable software for modern businesses.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link href="/contact" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto">
              Start Project
              <ArrowRight size={18} />
            </Link>

            <Link href="/work" className="border border-[#FF2B00] px-6 py-3 rounded-xl bg-white dark:bg-transparent text-[#FF2B00] dark:text-[#FF5A33] w-full sm:w-auto text-center font-semibold transition-colors duration-200 hover:bg-[#FF2B00] hover:text-white dark:hover:bg-[#FF2B00] dark:hover:text-white">
              View Work
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>

      <style jsx>{`
        .neon-text {
          /* Light theme: deep brand reds on white */
          background-image: linear-gradient(
            90deg,
            #ff2b00 0%,
            #b91c1c 25%,
            #ff7a45 50%,
            #b91c1c 75%,
            #ff2b00 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 6px 24px rgba(255, 43, 0, 0.18));
          animation: neonMove 8s linear infinite;
        }

        /* Dark theme: bright orange -> peach highlight, never near-black */
        :global(.dark) .neon-text {
          background-image: linear-gradient(
            90deg,
            #ff2b00 0%,
            #ff7a45 25%,
            #ffd3bd 50%,
            #ff7a45 75%,
            #ff2b00 100%
          );
          filter: drop-shadow(0 0 28px rgba(255, 43, 0, 0.35));
        }

        @keyframes neonMove {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: -200% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .neon-text {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}