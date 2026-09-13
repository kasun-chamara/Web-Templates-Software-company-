"use client";

import { useState, useEffect, useRef } from "react";
import MouseGlow from "./MouseGlow";
import { useMouseGlow } from "./useMouseGlow";

const features = [
  {
    id: 1,
    title: "Custom-Built Solutions, Tuned to Your Business",
    description:
      "We architect software that fits your exact workflow — not the other way around. Every system we build is designed with your team, your data, and your scale in mind.",
    tags: ["Web Apps", "APIs", "SaaS"],
    visual: "dashboard",
    accent: "#FF2B00",
  },
  {
    id: 2,
    title: "Seamless Delivery, Zero Friction",
    description:
      "From sprint planning to deployment, our process is transparent and fast. CI/CD pipelines, automated testing, and agile iteration keep your project moving.",
    visual: "pipeline",
    accent: "#D12300",
  },
  {
    id: 3,
    title: "Security, Quality & Full Accountability",
    description:
      "Every line of code is reviewed, tested, and auditable. We follow best practices for security and compliance so you can ship with confidence.",
    visual: "shield",
    accent: "#751400",
  },
];

// ---------- Visuals ----------

function DashboardVisual() {
  return (
    <div className="visual-dashboard">
      {[
        { label: "UI/UX Design", time: "2d", color: "#FF2B00" },
        { label: "API Integration", time: "5d", color: "#FF7A3D" },
        { label: "Deployment", time: "1d", color: "#FF2B00" },
      ].map((item, i) => (
        <div key={i} className="dash-row" style={{ animationDelay: `${i * 0.15}s` }}>
          <span className="dash-dot" style={{ background: item.color }} />
          <span className="dash-label">{item.label}</span>
          <span className="dash-badge" style={{ borderColor: item.color, color: item.color }}>
            ⏱ {item.time}
          </span>
        </div>
      ))}
      <div className="dash-desc">
        Builds scalable, maintainable systems using modern frameworks and cloud-native architecture.
      </div>
      <div className="dash-tags">
        {["React", "Node.js", "AWS"].map((t) => (
          <span key={t} className="dash-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

function PipelineVisual() {
  const steps = [
    { label: "Planning & Scoping", done: true },
    { label: "Development Sprint", done: true },
    { label: "Code Review & QA", done: true },
    { label: "Staging Deploy", done: false, active: true },
    { label: "Production Release", done: false },
  ];
  return (
    <div className="visual-pipeline">
      <div className="pipeline-title">Release Pipeline</div>
      {steps.map((s, i) => (
        <div key={i} className="pipe-row" style={{ animationDelay: `${i * 0.1}s` }}>
          <span
            className="pipe-icon"
            style={{
              background: s.done ? "#FF2B00" : s.active ? "#FF7A3D" : "transparent",
              border: s.done || s.active ? "none" : "1.5px solid #444",
            }}
          >
            {s.done ? "✓" : s.active ? "●" : ""}
          </span>
          <span className="pipe-label" style={{ color: s.done ? "#FFC9A8" : s.active ? "#FFD9BB" : "#555" }}>
            {s.label}
          </span>
          <span className="pipe-time">{`${(i + 1) * 10}s`}</span>
        </div>
      ))}
    </div>
  );
}

function ShieldVisual() {
  return (
    <div className="visual-shield">
      <div className="shield-wrap">
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="shield-svg">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF2B00" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#751400" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            d="M60 8 L108 28 L108 72 C108 98 86 118 60 130 C34 118 12 98 12 72 L12 28 Z"
            fill="url(#shieldGrad)"
            stroke="#FF2B00"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M60 22 L96 38 L96 70 C96 90 80 106 60 116 C40 106 24 90 24 70 L24 38 Z"
            fill="none"
            stroke="#FF2B00"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
          {[30, 37, 44, 51, 58, 65, 72].map((r, i) => (
            <circle
              key={i}
              cx="60"
              cy="72"
              r={r - 20}
              fill="none"
              stroke="#FF2B00"
              strokeWidth="1.2"
              strokeOpacity={0.15 + i * 0.07}
              strokeDasharray={i % 2 === 0 ? "none" : "4 3"}
            />
          ))}
          <circle cx="60" cy="72" r="6" fill="#FF2B00" fillOpacity="0.6" />
        </svg>
        <div className="shield-label">SOC 2 Ready</div>
        <div className="shield-sublabel">Fully auditable · Zero trust architecture</div>
      </div>
    </div>
  );
}

function CardVisual({ type }: { type: string }) {
  if (type === "dashboard") return <DashboardVisual />;
  if (type === "pipeline") return <PipelineVisual />;
  return <ShieldVisual />;
}

// ---------- Animated Card ----------

function AnimatedCard({
  feature,
  index,
  expanded,
  onToggle,
}: {
  feature: (typeof features)[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 180);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bft-card ${expanded ? "bft-card--open" : ""} ${visible ? "bft-card--visible" : ""}`}
      style={{ "--accent": feature.accent } as React.CSSProperties}
    >
      <div className="bft-card-visual">
        <CardVisual type={feature.visual} />
      </div>
      <div className="bft-card-footer">
        <div className="bft-card-text">
          <h3 className="bft-card-title">
            {feature.title}
          </h3>
          <p className={`bft-card-desc ${expanded ? "bft-card-desc--open" : ""}`}>
            {feature.description}
          </p>
        </div>
        <button className="bft-plus" onClick={onToggle} aria-label="Expand">
          <span className={expanded ? "bft-plus--x" : ""}>+</span>
        </button>
      </div>
    </div>
  );
}

// ---------- Main Section ----------

export default function BuiltForTeams() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { x, y, handleMove, handleLeave } = useMouseGlow();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Outer wrapper - provides the side padding so the dark box floats.
           Background matches the dark sections above/below so the padding gaps
           do not show the page background between them. */
        .bft-outer {
          padding: 0 42px;
          background: #1A0400;
        }

        /* ── The dark section itself — now has border-radius ── */
        .bft-section {
          position: relative;
          overflow: hidden;
          background: #0a0400;
          padding: 96px 48px;
          min-height: 100vh;
          color: #fff;
          border-radius: 40px;
        }

        /* Dot-grid texture — distinct from Testimonials' line grid */
        .bft-dots {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image: radial-gradient(circle, rgba(255,122,61,0.8) 1.4px, transparent 1.4px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 30%, black 20%, transparent 90%);
          mask-image: radial-gradient(ellipse 75% 65% at 50% 30%, black 20%, transparent 90%);
        }

        /* Header */
        .bft-header {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto 72px auto;
        }

        .bft-heading {
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #fff;
          margin: 0;
          max-width: 520px;
        }

        .bft-heading-accent {
          color: #d1d5db;
        }

        .bft-subtext {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.75;
          max-width: 400px;
          margin: 6px 0 0 0;
        }

        /* Grid */
        .bft-grid {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .bft-outer { padding: 0 16px; }
          .bft-grid { grid-template-columns: 1fr; }
          .bft-header { flex-direction: column; }
          .bft-section { padding: 64px 24px; border-radius: 24px; }
        }

        /* Card */
        .bft-card {
          background: #131313;
          border: 1px solid #1f1f1f;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;

          opacity: 0;
          transform: translateY(60px);
          transition:
            opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease;
        }

        .bft-card--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bft-card:hover {
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
        }

        .bft-card--open {
          border-color: color-mix(in srgb, var(--accent) 60%, transparent);
        }

        /* Visual area */
        .bft-card-visual {
          padding: 32px 24px 24px;
          flex: 1;
          min-height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent) 6%, transparent) 0%, transparent 70%);
        }

        /* Footer */
        .bft-card-footer {
          padding: 20px 24px 24px;
          border-top: 1px solid #1f1f1f;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .bft-card-text { flex: 1; }

        .bft-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #f0f0f0;
          margin: 0;
          line-height: 1.45;
        }

        .bft-card-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.6;
          margin: 10px 0 0 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease;
        }

        .bft-card-desc--open {
          max-height: 140px;
          opacity: 1;
        }

        /* Plus button */
        .bft-plus {
          background: #1e1e1e;
          border: 1px solid #2a2a2a;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          min-width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 1.25rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          line-height: 1;
          padding: 0;
        }

        .bft-plus:hover { background: #2a2a2a; color: #fff; }

        .bft-plus span {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .bft-plus--x { transform: rotate(45deg); }

        /* ---- Dashboard visual ---- */
        .visual-dashboard {
          width: 100%;
          background: #0f0f0f;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dash-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          background: #161616;
          border-radius: 8px;
          animation: slideIn 0.4s ease both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .dash-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .dash-label { font-size: 0.8rem; color: #ccc; flex: 1; }
        .dash-badge {
          font-size: 0.7rem;
          border: 1px solid;
          border-radius: 999px;
          padding: 2px 8px;
          white-space: nowrap;
        }
        .dash-desc { font-size: 0.72rem; color: #444; line-height: 1.5; padding: 4px 2px; }
        .dash-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .dash-tag {
          font-size: 0.7rem;
          background: #1e1e1e;
          border: 1px solid #2a2a2a;
          border-radius: 6px;
          padding: 3px 10px;
          color: #777;
        }

        /* ---- Pipeline visual ---- */
        .visual-pipeline {
          width: 100%;
          background: #0f0f0f;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 20px;
        }

        .pipeline-title {
          font-size: 0.75rem;
          color: #555;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .pipe-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 0;
          animation: slideIn 0.4s ease both;
        }

        .pipe-icon {
          width: 18px; height: 18px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem; color: #000; flex-shrink: 0; font-weight: 700;
        }

        .pipe-label { font-size: 0.8rem; flex: 1; }
        .pipe-time { font-size: 0.7rem; color: #3a3a3a; }

        /* ---- Shield visual ---- */
        .visual-shield {
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 12px 0;
        }

        .shield-wrap {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }

        .shield-svg {
          width: 120px; height: 140px;
          filter: drop-shadow(0 0 24px rgba(255,43,0,0.25));
          animation: shieldPulse 3s ease-in-out infinite;
        }

        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(255,43,0,0.18)); }
          50%       { filter: drop-shadow(0 0 32px rgba(255,43,0,0.4)); }
        }

        .shield-label { font-size: 0.85rem; font-weight: 600; color: #FFB088; letter-spacing: 0.02em; }
        .shield-sublabel { font-size: 0.72rem; color: #555; text-align: center; }
      ` }} />

      {/* Outer wrapper adds side padding so black section floats with rounded corners */}
      <div className="bft-outer">
        <section className="bft-section" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <div className="bft-dots" />
          <MouseGlow x={x} y={y} color="rgba(255,122,61,0.5)" midColor="rgba(255,43,0,0.18)" />

          {/* Header */}
          <div className="bft-header">
            <h2 className="bft-heading">
              Built for Fast Moving<br />
              <span className="bft-heading-accent">Teams That Need Results.</span>
            </h2>
            <p className="bft-subtext">
              We embed with your team, ship production-ready software, and maintain full transparency
              at every step. Every decision is traceable. Every outcome is owned.
            </p>
          </div>

          {/* Cards */}
          <div className="bft-grid">
            {features.map((f, i) => (
              <AnimatedCard
                key={f.id}
                feature={f}
                index={i}
                expanded={expanded === f.id}
                onToggle={() => setExpanded(expanded === f.id ? null : f.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}