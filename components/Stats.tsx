"use client";

import React from "react";

const logos = [
  { name: "AWS", color: "#FF9900",  },
  { name: "Google Cloud", color: "#4285F4", },
  { name: "Microsoft Azure", color: "#0078D4", },
  { name: "Vercel", color: "#000000" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Shopify", color: "#5E8E3E" },
  { name: "Figma", color: "#F24E1E"},
  { name: "Docker", color: "#2496ED"},
  { name: "Kubernetes", color: "#326CE5"},
  { name: "PostgreSQL", color: "#4169E1" },
];

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-purple-50/50 animate-gradient" />
      
      {/* Background blobs with improved colors */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-3000" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.1)' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent pointer-events-none z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-slate-100 via-slate-100/50 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20">
        
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-500 text-lg">Powered by cutting-edge technology partners</p>
        </div>

        {/* Marquee container */}
        <div className="space-y-6">
          

          {/* MARQUEE 2 - Left to Right (faded) */}
          <div className="relative opacity-60">
            <div className="flex gap-20 whitespace-nowrap animate-marquee-reverse">
              {[...logos].reverse().map((logo, i) => (
                <div
                  key={`rev-${logo.name}-${i}`}
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300 group-hover:w-3 group-hover:h-3"
                    style={{ backgroundColor: logo.color }}
                  />
                  <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                    {logo.name}
                  </span>
      
                </div>
              ))}
            </div>
          </div>

          {/* MARQUEE 3 - Right to Left (smaller, faster) */}
          <div className="relative opacity-40">
            <div className="flex gap-12 whitespace-nowrap animate-marquee-fast">
              {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={`small-${logo.name}-${i}`}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
                >
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide group-hover:text-slate-700 transition-colors duration-300">
                    {logo.name}
                  </span>
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: logo.color }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats badges */}
        <div className="flex justify-center gap-8 mt-12">
  {[
    { number: "10+", label: "Cloud Partners", from: "from-green-300", to: "to-blue-500" },
    { number: "99.9%", label: "Uptime SLA", from: "from-purple-500", to: "to-pink-500" },
    { number: "24/7", label: "Support", from: "from-orange-500", to: "to-red-500" },
  ].map((stat, i) => (
    <div key={i} className="text-center group cursor-pointer">
      
      <div
        className={`font-num text-3xl font-bold bg-gradient-to-r ${stat.from} ${stat.to} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}
      >
        {stat.number}
      </div>

      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
        {stat.label}
      </div>

    </div>
  ))}
</div>

      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-fast {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }

        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Smooth hover effects */
        .group:hover {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}