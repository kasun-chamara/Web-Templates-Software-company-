import About from "@/components/About";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — NexaLab" };

const team = [
  { name: "Alex Chen", role: "Co-Founder & CTO", avatar: "AC", specialty: "Systems Architecture" },
  { name: "Mara Osei", role: "Co-Founder & CEO", avatar: "MO", specialty: "Product Strategy" },
  { name: "Daniel Park", role: "Lead Engineer", avatar: "DP", specialty: "AI & ML" },
  { name: "Sofia Reyes", role: "Head of Design", avatar: "SR", specialty: "Design Systems" },
  { name: "Kai Nambiar", role: "DevOps Lead", avatar: "KN", specialty: "Cloud & Infrastructure" },
  { name: "Yuki Tanaka", role: "Senior Engineer", avatar: "YT", specialty: "Frontend & Performance" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">About Us</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 mt-4 leading-[1.08]">
            Engineers Who<span className="gradient-text block">Give a Damn</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg mt-6 leading-relaxed">40+ engineers, designers, and strategists obsessed with building digital systems that stand the test of time.</p>
        </div>
      </section>
      <About />
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-14">
            <span className="section-tag mb-4">The Team</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">People Behind the Code</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "var(--font-display)" }}>{m.avatar}</div>
                <div className="text-slate-900 font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>{m.name}</div>
                <div className="text-blue-500 text-xs mt-1" style={{ fontFamily: "var(--font-display)" }}>{m.role}</div>
                <div className="text-slate-400 text-xs mt-2">{m.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
