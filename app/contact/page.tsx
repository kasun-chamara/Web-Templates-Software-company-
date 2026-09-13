"use client";
import { useState } from "react";
import { Send, MapPin, Mail, Clock } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "hello@nexalab.io" },
  { icon: MapPin, label: "HQ", value: "San Francisco, CA · Remote-first" },
  { icon: Clock, label: "Response", value: "Within 24 hours" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: "" });
  const [sent, setSent] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">Contact</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 mt-4 leading-[1.08]">
            Start a<span className="gradient-text block">Conversation</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg mt-6">No pitches, no NDAs required — just an honest conversation about your project.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#FF2B00]" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-display)" }}>{label}</div>
                  <div className="text-slate-800 font-medium">{value}</div>
                </div>
              </div>
            ))}
            <div className="glass-card rounded-2xl p-6 mt-8">
              <div className="text-[#FF2B00] font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Our Process</div>
              <ul className="space-y-3 text-slate-500 text-sm">
                {["Discovery call (30 min)", "Proposal & scope in 3 days", "Kickoff within 2 weeks", "Weekly progress updates"].map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-50 text-[#FF2B00] text-xs flex items-center justify-center font-bold flex-shrink-0 border border-orange-100" style={{ fontFamily: "var(--font-display)" }}>{i + 1}</span>{step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 glass-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>Message Sent!</h3>
                <p className="text-slate-500">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", placeholder: "Alex Johnson", type: "text" },
                    { name: "email", label: "Work Email", placeholder: "alex@company.com", type: "email" },
                    { name: "company", label: "Company", placeholder: "Acme Inc.", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>{f.label}</label>
                      <input type={f.type} name={f.name} value={(form as Record<string, string>)[f.name]} onChange={handle} placeholder={f.placeholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF2B00] focus:ring-2 focus:ring-orange-50 transition-all" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handle}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#FF2B00] focus:ring-2 focus:ring-orange-50 transition-all">
                      <option value="">Select range...</option>
                      <option>$10k – $25k</option>
                      <option>$25k – $50k</option>
                      <option>$50k – $100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Tell us about your project</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5}
                    placeholder="What are you building? What's the challenge? What does success look like?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF2B00] focus:ring-2 focus:ring-orange-50 transition-all resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
