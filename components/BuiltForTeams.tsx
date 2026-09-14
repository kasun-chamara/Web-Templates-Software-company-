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
    visual: "dashboard",
    chromeLabel: "workflow.build",
    accent: "#FF2B00",
  },
  {
    id: 2,
    title: "Seamless Delivery, Zero Friction",
    description:
      "From sprint planning to deployment, our process is transparent and fast. CI/CD pipelines, automated testing, and agile iteration keep your project moving.",
    visual: "pipeline",
    chromeLabel: "deploy.pipeline",
    accent: "#D12300",
  },
  {
    id: 3,
    title: "Security, Quality & Full Accountability",
    description:
      "Every line of code is reviewed, tested, and auditable. We follow best practices for security and compliance so you can ship with confidence.",
    visual: "shield",
    chromeLabel: "security.audit",
    accent: "#751400",
  },
  {
    id: 4,
    title: "Cloud Infrastructure That Scales With You",
    description:
      "We design cloud-native architecture on AWS, GCP, or Azure — auto-scaling, multi-region failover, and infrastructure as code from day one.",
    visual: "cloud",
    chromeLabel: "infra.scale",
    accent: "#FF7A3D",
  },
  {
    id: 5,
    title: "Dedicated Team, Direct Communication",
    description:
      "A named team, not a ticket queue. Weekly demos, a shared Slack channel, and a live project board — you always know exactly where things stand.",
    visual: "team",
    chromeLabel: "team.sync",
    accent: "#FF2B00",
  },
  {
    id: 6,
    title: "24/7 Support & Continuous Optimization",
    description:
      "Post-launch isn't the finish line. We monitor uptime, ship performance improvements, and stay on call for critical fixes long after go-live.",
    visual: "support",
    chromeLabel: "uptime.monitor",
    accent: "#A31B00",
  },
];

// ---------- Visuals ----------

function ListVisual({
  items,
  desc,
  tags,
  prefix = "",
}: {
  items: { label: string; time: string; color: string }[];
  desc: string;
  tags: string[];
  prefix?: string;
}) {
  return (
    <div className="list-visual">
      {items.map((item, i) => (
        <div key={i} className="dash-row" style={{ animationDelay: `${i * 0.15}s` }}>
          <span className="dash-dot" style={{ background: item.color }} />
          <span className="dash-label">{item.label}</span>
          <span className="dash-badge" style={{ borderColor: item.color, color: item.color }}>
            {prefix}
            {item.time}
          </span>
        </div>
      ))}
      <div className="dash-desc">{desc}</div>
      <div className="dash-tags">
        {tags.map((t) => (
          <span key={t} className="dash-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <ListVisual
      prefix="⏱ "
      items={[
        { label: "UI/UX Design", time: "2d", color: "#FF2B00" },
        { label: "API Integration", time: "5d", color: "#FF7A3D" },
        { label: "Deployment", time: "1d", color: "#FF2B00" },
      ]}
      desc="Builds scalable, maintainable systems using modern frameworks and cloud-native architecture."
      tags={["React", "Node.js", "AWS"]}
    />
  );
}

function CloudVisual() {
  return (
    <ListVisual
      items={[
        { label: "Auto-Scaling", time: "Live", color: "#FF7A3D" },
        { label: "Multi-Region Failover", time: "Live", color: "#FF2B00" },
        { label: "Infra as Code", time: "CI/CD", color: "#FF7A3D" },
      ]}
      desc="Terraform-managed infrastructure with zero-downtime deploys and real-time monitoring."
      tags={["AWS", "Terraform", "Kubernetes"]}
    />
  );
}

function TeamVisual() {
  return (
    <ListVisual
      items={[
        { label: "Slack Channel", time: "Live", color: "#FF2B00" },
        { label: "Weekly Demo", time: "Fri", color: "#FF7A3D" },
        { label: "Project Board", time: "Live", color: "#FF2B00" },
      ]}
      desc="Direct access to your engineers — no account managers, no ticket queue in between."
      tags={["Slack", "Linear", "Notion"]}
    />
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
      {steps.map((s, i) => (
        <div key={i} className="pipe-row" style={{ animationDelay: `${i * 0.1}s` }}>
          <span
            className="pipe-icon"
            style={{
              background: s.done ? "#FF2B00" : s.active ? "#FF7A3D" : "transparent",
              border: s.done || s.active ? "none" : "1.5px solid #CBD5E1",
            }}
          >
            {s.done ? "✓" : s.active ? "●" : ""}
          </span>
          <span
            className={`pipe-label ${
              s.done ? "pipe-label--done" : s.active ? "pipe-label--active" : "pipe-label--pending"
            }`}
          >
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
  );
}

function SupportVisual() {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="shield-wrap">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="shield-svg">
        <circle className="support-track" cx="60" cy="60" r={radius} stroke="#E2E8F0" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#A31B00"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.02}
          transform="rotate(-90 60 60)"
        />
        <text className="support-value" x="60" y="56" textAnchor="middle" fontSize="19" fontWeight="700" fill="#0f172a">
          99.98%
        </text>
        <text className="support-label-text" x="60" y="74" textAnchor="middle" fontSize="9" fill="#94A3B8" letterSpacing="0.05em">
          UPTIME
        </text>
      </svg>
      <div className="shield-label">Uptime SLA</div>
      <div className="shield-sublabel">24/7 monitoring · &lt;1hr response time</div>
    </div>
  );
}

function CardVisual({ type }: { type: string }) {
  if (type === "dashboard") return <DashboardVisual />;
  if (type === "pipeline") return <PipelineVisual />;
  if (type === "shield") return <ShieldVisual />;
  if (type === "cloud") return <CloudVisual />;
  if (type === "team") return <TeamVisual />;
  return <SupportVisual />;
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
        <div className="visual-frame">
          <div className="visual-chrome">
            <div className="chrome-dots">
              <span className="chrome-dot" style={{ background: "#FF5F57" }} />
              <span className="chrome-dot" style={{ background: "#FEBC2E" }} />
              <span className="chrome-dot" style={{ background: "#28C840" }} />
            </div>
            <span className="chrome-title">{feature.chromeLabel}</span>
            <span className="chrome-index">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="visual-body">
            <CardVisual type={feature.visual} />
          </div>
        </div>
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
        /* Outer wrapper - provides the side padding so the section floats.
           Background matches the page background so the padding gaps
           do not show anything unexpected between them. */
        .bft-outer {
          padding: 0 42px;
          background: #fff;
        }

        /* ── The section itself — now has border-radius ── */
        .bft-section {
          position: relative;
          overflow: hidden;
          background: #fff;
          padding: 96px 48px;
          min-height: 100vh;
          color: #0f172a;
          border-radius: 40px;
          border: 1px solid #F1F5F9;
        }

        /* Dot-grid texture — distinct from Testimonials' line grid */
        .bft-dots {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image: radial-gradient(circle, rgba(255,43,0,0.35) 1.4px, transparent 1.4px);
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
          align-items: flex-end;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto 72px auto;
        }

        .bft-header-left {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bft-heading {
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #0f172a;
          margin: 0;
          max-width: 520px;
        }

        .bft-heading-accent {
          color: #94a3b8;
        }

        .bft-subtext {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 380px;
          margin: 0 0 6px 0;
          text-align: right;
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
          .bft-header { flex-direction: column; align-items: flex-start; }
          .bft-subtext { text-align: left; }
          .bft-section { padding: 64px 24px; border-radius: 24px; }
        }

        /* Card */
        .bft-card {
          position: relative;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);

          opacity: 0;
          transform: translateY(60px);
          transition:
            opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease,
            box-shadow 0.4s ease;
        }

        .bft-card--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bft-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          transform: scaleX(0);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 2;
        }

        .bft-card:hover::before,
        .bft-card--open::before {
          transform: scaleX(1);
        }

        .bft-card:hover {
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
          transform: translateY(-6px);
          box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.12);
        }

        .bft-card--visible.bft-card:hover {
          transform: translateY(-6px);
        }

        .bft-card--open {
          border-color: color-mix(in srgb, var(--accent) 60%, transparent);
        }

        /* Visual area */
        .bft-card-visual {
          padding: 20px 20px 0 20px;
          flex: 1;
          min-height: 232px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-frame {
          width: 100%;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          background: #fff;
        }

        .visual-chrome {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          background: #F8FAFC;
          border-bottom: 1px solid #EDF1F5;
        }

        .chrome-dots { display: flex; gap: 5px; }
        .chrome-dot { width: 7px; height: 7px; border-radius: 50%; opacity: 0.85; }

        .chrome-title {
          font-size: 0.68rem;
          color: #94A3B8;
          letter-spacing: 0.03em;
        }

        .chrome-index {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 600;
          color: #CBD5E1;
          font-variant-numeric: tabular-nums;
        }

        .visual-body {
          padding: 20px;
          min-height: 172px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 75%);
        }

        /* Footer */
        .bft-card-footer {
          padding: 20px 24px 24px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .bft-card-text { flex: 1; }

        .bft-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.45;
        }

        .bft-card-desc {
          font-size: 0.875rem;
          color: #64748b;
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
          background: #fff;
          border: 1.5px solid #E2E8F0;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          min-width: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          line-height: 1;
          padding: 0;
          flex-shrink: 0;
        }

        .bft-plus:hover,
        .bft-card--open .bft-plus {
          background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 65%, #1A0400));
          border-color: transparent;
          color: #fff;
          transform: scale(1.08);
        }

        .bft-plus span {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .bft-plus--x { transform: rotate(45deg); }

        /* ---- List visual (dashboard / cloud / team) ---- */
        .list-visual {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dash-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          background: #F8FAFC;
          border: 1px solid #EDF1F5;
          border-radius: 8px;
          animation: slideIn 0.4s ease both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .dash-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .dash-label { font-size: 0.8rem; color: #334155; flex: 1; }
        .dash-badge {
          font-size: 0.7rem;
          border: 1px solid;
          border-radius: 999px;
          padding: 2px 8px;
          white-space: nowrap;
        }
        .dash-desc { font-size: 0.72rem; color: #94A3B8; line-height: 1.5; padding: 4px 2px; }
        .dash-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .dash-tag {
          font-size: 0.7rem;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 3px 10px;
          color: #64748B;
        }

        /* ---- Pipeline visual ---- */
        .visual-pipeline {
          width: 100%;
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
        .pipe-time { font-size: 0.7rem; color: #CBD5E1; }

        /* ---- Shield / ring visual ---- */
        .shield-wrap {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }

        .shield-svg {
          width: 108px; height: 126px;
          filter: drop-shadow(0 0 24px rgba(255,43,0,0.25));
          animation: shieldPulse 3s ease-in-out infinite;
        }

        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(255,43,0,0.18)); }
          50%       { filter: drop-shadow(0 0 32px rgba(255,43,0,0.4)); }
        }

        .shield-label { font-size: 0.85rem; font-weight: 600; color: #D12300; letter-spacing: 0.02em; }
        .shield-sublabel { font-size: 0.72rem; color: #94A3B8; text-align: center; }

        .pipe-label--done { color: #0f172a; }
        .pipe-label--active { color: #D12300; }
        .pipe-label--pending { color: #94A3B8; }

        /* ── Dark mode overrides ── */
        .dark .bft-outer {
          background: #09090b;
        }

        .dark .bft-section {
          background: #09090b;
          color: #fff;
          border-color: #27272a;
        }

        .dark .bft-heading {
          color: #fff;
        }

        .dark .bft-heading-accent {
          color: #71717a;
        }

        .dark .bft-subtext {
          color: #a1a1aa;
        }

        .dark .bft-card {
          background: #18181b;
          border-color: #27272a;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .dark .bft-card:hover {
          box-shadow: 0 24px 50px -12px rgba(0,0,0,0.5);
        }

        .dark .visual-frame {
          border-color: #27272a;
          background: #18181b;
        }

        .dark .visual-chrome {
          background: #27272a;
          border-bottom-color: #3f3f46;
        }

        .dark .chrome-title {
          color: #71717a;
        }

        .dark .chrome-index {
          color: #52525b;
        }

        .dark .bft-card-title {
          color: #fff;
        }

        .dark .bft-card-desc {
          color: #a1a1aa;
        }

        .dark .bft-plus {
          background: #18181b;
          border-color: #3f3f46;
          color: #71717a;
        }

        .dark .dash-row {
          background: #27272a;
          border-color: #3f3f46;
        }

        .dark .dash-label {
          color: #e4e4e7;
        }

        .dark .dash-desc {
          color: #71717a;
        }

        .dark .dash-tag {
          background: #27272a;
          border-color: #3f3f46;
          color: #a1a1aa;
        }

        .dark .pipe-time {
          color: #71717a;
        }

        .dark .pipe-label--done {
          color: #fff;
        }

        .dark .pipe-label--pending {
          color: #71717a;
        }

        .dark .shield-sublabel {
          color: #71717a;
        }

        .dark .support-track {
          stroke: #3f3f46;
        }

        .dark .support-value {
          fill: #fff;
        }

        .dark .support-label-text {
          fill: #71717a;
        }
      ` }} />

      {/* Outer wrapper adds side padding so black section floats with rounded corners */}
      <div className="bft-outer">
        <section className="bft-section" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <div className="bft-dots" />
          <MouseGlow x={x} y={y} color="rgba(255,43,0,0.3)" midColor="rgba(255,43,0,0.08)" />

          {/* Header */}
          <div className="bft-header">
            <div className="bft-header-left">
              <span className="section-tag">WHY TEAMS CHOOSE US</span>
              <h2 className="bft-heading">
                Built for Fast Moving<br />
                <span className="bft-heading-accent">Teams That Need Results.</span>
              </h2>
            </div>
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
