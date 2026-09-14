"use client";

import { Video, Monitor, Wrench } from "lucide-react";

const tools = [
  { icon: Video, name: "Zoom", desc: "Video meetings", color: "#2D8CFF", from: "#5CA8FF", to: "#0B5FCC" },
  { icon: Monitor, name: "AnyDesk", desc: "Remote desktop", color: "#EF4B36", from: "#FF7A63", to: "#C62E1F" },
  { icon: Monitor, name: "TeamViewer", desc: "Remote support", color: "#004C97", from: "#0E8EE9", to: "#00305F" },
  { icon: Wrench, name: "AnyViewer", desc: "Remote access", color: "#0E9F6E", from: "#3DCF9E", to: "#076A4C" },
];

export default function RemoteSupport() {
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
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,43,0,0.08) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Remote{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #FF2B00, #1A0400)" }}
          >
            Support
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-500 dark:text-zinc-400">
          Schedule meetings and get support via your preferred tool.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.1)] dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${t.color}66`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="mt-0.5 text-sm text-slate-500 dark:text-zinc-400">{t.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
