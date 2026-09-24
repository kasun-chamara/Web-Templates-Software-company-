"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import { MdLocationPin } from "react-icons/md";

// Pin positions as % of the map image (top/left), approximated from real
// lat/lng for each hub against the map's equirectangular-style crop.
const pins = [
  { top: "24%", left: "16%", label: "Vancouver" },
  { top: "57%", left: "29%", label: "Bogotá" },
  { top: "17%", left: "53%", label: "Oslo" },
  { top: "61%", left: "60%", label: "Nairobi" },
  { top: "59%", left: "79%", label: "Singapore" },
  { top: "85%", left: "92%", label: "Sydney" },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/kapingar/posts/", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

function PinMarker({ top, left, label, delay }: { top: string; left: string; label: string; delay: number }) {
  return (
    <div
      className="group absolute -translate-x-1/2 -translate-y-full"
      style={{ top, left }}
    >
      <span
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: "rgba(255,43,0,0.4)",
          animation: `pin-ping 2.4s ease-out infinite`,
          animationDelay: `${delay}s`,
        }}
      />
      <MdLocationPin className="h-7 w-7 drop-shadow-[0_4px_6px_rgba(255,43,0,0.5)]" style={{ color: "#FF2B00" }} />
      <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}

function WorldMapVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full blur-[70px]"
        style={{ background: "rgba(255,43,0,0.1)" }}
      />

      <div className="relative" style={{ aspectRatio: "750 / 500" }}>
        <Image
          src="/images/map.svg"
          alt="World map showing our client locations"
          fill
          className="object-contain block dark:hidden"
          priority
        />
        <Image
          src="/images/mapdark.svg"
          alt="World map showing our client locations"
          fill
          className="object-contain hidden dark:block"
          priority
        />
        {pins.map((p, i) => (
          <PinMarker key={p.label} top={p.top} left={p.left} label={p.label} delay={i * 0.3} />
        ))}
      </div>

      <style jsx>{`
        @keyframes pin-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%,
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(15,23,42,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,43,0,0.10) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left — copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-zinc-400 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF2B00" }} />
            Global Reach
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Trusted by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #1A0400)" }}
            >
              clients
            </span>
            <br />
            across the globe
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 dark:text-zinc-400">
            From local startups to businesses overseas, we&apos;ve partnered with 250+
            clients in 10+ countries — delivering digital solutions that work no
            matter where you&apos;re based.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundImage: "linear-gradient(90deg, #FF2B00)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </Link>

            <div className="flex items-center gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 transition-all duration-200 hover:border-[#FF2B00]/40 hover:text-[#FF2B00]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — world map visual */}
        <WorldMapVisual />
      </div>
    </section>
  );
}
