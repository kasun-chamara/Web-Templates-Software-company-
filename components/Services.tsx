"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, Brain, Code2, Shield, Layers, Zap, Rocket, ArrowUpRight } from "lucide-react";

/* ─── TypeScript interface for SVG props ──────────────────────────── */
interface SvgProps {
  accent: string;
  dim: boolean;
}

/* ─── SVG Illustrations ───────────────────────────────────────────── */

const WebPlatformSVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect x="4" y="4" width="152" height="92" rx="10" stroke={accent} strokeOpacity={dim ? "0.22" : "0.9"} strokeWidth="1"/>
    <rect x="4" y="4" width="152" height="18" rx="10" fill={accent} fillOpacity={dim ? "0.07" : "0.28"}/>
    <circle cx="18" cy="13" r="3.5" fill={accent} fillOpacity={dim ? 0.18 : 0.9}/>
    <circle cx="30" cy="13" r="3.5" fill={accent} fillOpacity={dim ? 0.12 : 0.65}/>
    <circle cx="42" cy="13" r="3.5" fill={accent} fillOpacity={dim ? 0.08 : 0.45}/>
    <rect x="56" y="8" width="80" height="9" rx="4.5" fill={accent} fillOpacity="0.09" stroke={accent} strokeOpacity={dim ? "0.18" : "0.4"} strokeWidth="0.6"/>
    <rect x="14" y="32" width="132" height="7" rx="2.5" fill={accent} fillOpacity={dim ? 0.07 : 0.5}/>
    <rect x="14" y="44" width="88" height="5" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.32}/>
    <rect x="14" y="54" width="110" height="5" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.32}/>
    <circle cx="26" cy="82" r="5" fill={accent} fillOpacity={dim ? 0.14 : 0.85}/>
    <circle cx="80" cy="76" r="5" fill={accent} fillOpacity={dim ? 0.14 : 0.85}/>
    <circle cx="134" cy="82" r="5" fill={accent} fillOpacity={dim ? 0.14 : 0.85}/>
    <line x1="31" y1="82" x2="75" y2="76" stroke={accent} strokeOpacity={dim ? 0.1 : 0.55} strokeWidth="0.9"/>
    <line x1="85" y1="76" x2="129" y2="82" stroke={accent} strokeOpacity={dim ? 0.1 : 0.55} strokeWidth="0.9"/>
  </svg>
);

const AISolutionsSVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <circle cx="45" cy="45" r="16" fill={accent} fillOpacity={dim ? 0.22 : 0.38} stroke={accent} strokeOpacity={dim ? "0.55" : "0.85"} strokeWidth="1.2"/>
    <circle cx="45" cy="45" r="8" fill={accent} fillOpacity={dim ? 0.55 : 0.85}/>
    {([[12,14],[78,14],[8,52],[82,52],[32,78],[58,78],[45,6]] as [number,number][]).map(([x,y],i) => (
      <g key={i}>
        <line x1={x} y1={y} x2="45" y2="45" stroke={accent} strokeOpacity={dim ? 0.22 : 0.42} strokeWidth="0.7" strokeDasharray="2.5 2"/>
        <circle cx={x} cy={y} r="4" fill={accent} fillOpacity={dim ? 0.45 : 0.75}/>
      </g>
    ))}
    <circle cx="45" cy="45" r="24" stroke={accent} strokeOpacity={dim ? 0.18 : 0.35} strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="45" cy="45" r="34" stroke={accent} strokeOpacity={dim ? 0.1 : 0.2} strokeWidth="0.5" strokeDasharray="2 5"/>
  </svg>
);

const BackendSVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={4 + i * 22} y="4" width="18" height="92" rx="3"
          fill={accent} fillOpacity={dim ? 0.04 : 0.22}
          stroke={accent} strokeOpacity={dim ? "0.18" : "0.65"} strokeWidth="0.8"/>
        {[0,1,2,3,4,5,6].map(j => (
          <rect key={j} x={6 + i * 22} y={10 + j * 12} width="14" height="8" rx="1.5"
            fill={accent} fillOpacity={dim ? 0.05 : (j === 2 ? 0.85 : 0.45)}/>
        ))}
        <circle cx={18 + i * 22} cy={96} r="2" fill={accent} fillOpacity={dim ? 0.2 : (i === 0 ? 1 : 0.65)}/>
      </g>
    ))}
  </svg>
);

const SecuritySVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <path d="M40 4 L64 14 L64 38 C64 54 40 70 40 70 C40 70 16 54 16 38 L16 14 Z"
      fill={accent} fillOpacity={dim ? 0.18 : 0.32} stroke={accent} strokeOpacity={dim ? "0.55" : "0.85"} strokeWidth="1.2"/>
    <path d="M40 14 L56 22 L56 38 C56 49 40 60 40 60 C40 60 24 49 24 38 L24 22 Z"
      fill={accent} fillOpacity={dim ? 0.12 : 0.22} stroke={accent} strokeOpacity={dim ? "0.38" : "0.6"} strokeWidth="0.7"/>
    <rect x="32" y="36" width="16" height="13" rx="2.5" fill={accent} fillOpacity={dim ? 0.75 : 1}/>
    <path d="M35 36 L35 31 C35 27.2 45 27.2 45 31 L45 36" stroke={accent} strokeOpacity={dim ? "0.9" : "1"} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    <circle cx="6" cy="40" r="3" fill={accent} fillOpacity={dim ? 0.45 : 0.7}/>
    <line x1="9" y1="40" x2="16" y2="40" stroke={accent} strokeOpacity={dim ? "0.3" : "0.5"} strokeWidth="0.7" strokeDasharray="2 2"/>
    <circle cx="74" cy="40" r="3" fill={accent} fillOpacity={dim ? 0.45 : 0.7}/>
    <line x1="71" y1="40" x2="64" y2="40" stroke={accent} strokeOpacity={dim ? "0.3" : "0.5"} strokeWidth="0.7" strokeDasharray="2 2"/>
  </svg>
);

const DesignSVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect x="4" y="4" width="34" height="72" rx="4" fill={accent} fillOpacity={dim ? 0.04 : 0.22} stroke={accent} strokeOpacity={dim ? "0.2" : "0.6"} strokeWidth="0.8"/>
    <rect x="9" y="10" width="24" height="16" rx="2" fill={accent} fillOpacity={dim ? 0.06 : 0.5}/>
    <rect x="9" y="30" width="24" height="10" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.35}/>
    <rect x="9" y="44" width="24" height="10" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.35}/>
    <rect x="9" y="58" width="24" height="12" rx="2" fill={accent} fillOpacity={dim ? 0.06 : 0.42}/>
    <rect x="44" y="4" width="82" height="72" rx="5" fill={accent} fillOpacity={dim ? 0.03 : 0.16} stroke={accent} strokeOpacity={dim ? "0.22" : "0.55"} strokeWidth="0.8"/>
    <rect x="50" y="10" width="70" height="12" rx="2" fill={accent} fillOpacity={dim ? 0.08 : 0.55}/>
    <rect x="50" y="26" width="34" height="34" rx="2" fill={accent} fillOpacity={dim ? 0.05 : 0.35}/>
    <rect x="88" y="26" width="32" height="15" rx="2" fill={accent} fillOpacity={dim ? 0.06 : 0.42}/>
    <rect x="88" y="45" width="32" height="15" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.28}/>
    <rect x="50" y="64" width="70" height="7" rx="2" fill={accent} fillOpacity={dim ? 0.04 : 0.28}/>
    <circle cx="67" cy="43" r="4" stroke={accent} strokeOpacity={dim ? "0.4" : "1"} strokeWidth="0.9" fill="none"/>
    <line x1="67" y1="37" x2="67" y2="40" stroke={accent} strokeOpacity={dim ? "0.4" : "1"} strokeWidth="0.9"/>
    <line x1="67" y1="46" x2="67" y2="49" stroke={accent} strokeOpacity={dim ? "0.4" : "1"} strokeWidth="0.9"/>
    <line x1="61" y1="43" x2="64" y2="43" stroke={accent} strokeOpacity={dim ? "0.4" : "1"} strokeWidth="0.9"/>
    <line x1="70" y1="43" x2="73" y2="43" stroke={accent} strokeOpacity={dim ? "0.4" : "1"} strokeWidth="0.9"/>
  </svg>
);

const PerformanceSVG = ({ accent, dim }: SvgProps) => (
  <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <path d="M30 68 A38 38 0 0 1 106 68" stroke={accent} strokeOpacity={dim ? "0.28" : "0.45"} strokeWidth="7" strokeLinecap="round"/>
    <path d="M30 68 A38 38 0 0 1 86 32" stroke={accent} strokeOpacity={dim ? "0.7" : "1"} strokeWidth="7" strokeLinecap="round"/>
    <line x1="68" y1="68" x2="86" y2="32" stroke={accent} strokeOpacity={dim ? "0.85" : "1"} strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="68" cy="68" r="5" fill={accent} fillOpacity={dim ? 0.75 : 1}/>
    {[0,1,2,3,4,5].map(i => {
      const a = (-180 + i * 36) * Math.PI / 180;
      return <line key={i}
        x1={68 + 32 * Math.cos(a)} y1={68 + 32 * Math.sin(a)}
        x2={68 + 38 * Math.cos(a)} y2={68 + 38 * Math.sin(a)}
        stroke={accent} strokeOpacity={dim ? "0.38" : "0.65"} strokeWidth="1.2"/>;
    })}
    <line x1="128" y1="8" x2="128" y2="72" stroke={accent} strokeOpacity="0.15" strokeWidth="0.6"/>
    {[
      { x: 138, h: 18, o: 0.35 },
      { x: 153, h: 36, o: 0.5 },
      { x: 168, h: 26, o: 0.38 },
      { x: 183, h: 58, o: 0.85 },
      { x: 198, h: 44, o: 0.6 },
      { x: 213, h: 32, o: 0.45 },
    ].map(({ x, h, o }) => (
      <rect key={x} x={x} y={72 - h} width="10" height={h} rx="2.5"
        fill={accent} fillOpacity={dim ? o * 0.6 : o}/>
    ))}
  </svg>
);

/* ── Mobile SVG (rocket trail) ───────────────────────────────────── */
const MobileSVG = ({ dim }: { dim: boolean }) => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    {/* phone outline */}
    <rect x="28" y="8" width="64" height="110" rx="12"
      fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"/>
    <rect x="34" y="18" width="52" height="82" rx="4"
      fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6"/>
    {/* home bar */}
    <rect x="48" y="108" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.18)"/>
    {/* screen content skeletons */}
    <rect x="38" y="24" width="44" height="6" rx="2" fill={`rgba(255,255,255,${dim ? 0.08 : 0.28})`}/>
    <rect x="38" y="34" width="30" height="4" rx="2" fill={`rgba(255,255,255,${dim ? 0.05 : 0.14})`}/>
    <rect x="38" y="44" width="44" height="22" rx="3" fill={`rgba(255,255,255,${dim ? 0.04 : 0.1})`}/>
    <rect x="38" y="70" width="20" height="4" rx="2" fill={`rgba(255,255,255,${dim ? 0.05 : 0.14})`}/>
    <rect x="38" y="78" width="44" height="4" rx="2" fill={`rgba(255,255,255,${dim ? 0.03 : 0.08})`}/>
    <rect x="38" y="86" width="32" height="4" rx="2" fill={`rgba(255,255,255,${dim ? 0.03 : 0.08})`}/>
    {/* signal dots top right */}
    <circle cx="78" cy="13" r="2" fill={`rgba(255,255,255,${dim ? 0.2 : 0.6})`}/>
    <circle cx="84" cy="13" r="2" fill={`rgba(255,255,255,${dim ? 0.12 : 0.35})`}/>
    <circle cx="90" cy="13" r="2" fill={`rgba(255,255,255,${dim ? 0.07 : 0.18})`}/>
  </svg>
);

/* ─── Service data ────────────────────────────────────────────────── */
interface Stat { label: string; sub: string }
interface Service {
  icon: React.ElementType;
  SVG: React.ComponentType<SvgProps> | React.ComponentType<{ dim: boolean }>;
  svgWrapClass: string;
  svgStyle: React.CSSProperties;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  accentMuted: string;
  accentBorder: string;
  number: string;
  size: "large" | "medium" | "small" | "wide";
  alwaysColoured: boolean;
  minH: string;
  isWhite?: boolean;
  stats?: Stat[];
}

const services: Service[] = [
  {
    icon: Globe, SVG: WebPlatformSVG,
    svgWrapClass: "absolute bottom-10 left-100 right-5",
    svgStyle: { height: "130px", opacity: 1 },
    title: "Web Platforms",
    desc: "High-performance web applications built with Next.js, React, and modern stacks. From MVPs to enterprise-scale platforms. We create fast, scalable, and user-focused web applications that deliver exceptional performance across all devices. Leveraging modern technologies such as Next.js, React, TypeScript, and cloud-native architectures, we build solutions that are reliable, secure, and ready for growth.",
    tags: ["Next.js", "React", "TypeScript"],
    accent: "#3B82F6", accentMuted: "rgba(59,130,246,0.12)", accentBorder: "rgba(59,130,246,0.4)",
    number: "01", size: "large",
    alwaysColoured: false,
    minH: "450px",
    stats: [{ label: "50+", sub: "Platforms Shipped" }, { label: "99.9%", sub: "Uptime SLA" }],
  },
  {
    icon: Brain, SVG: AISolutionsSVG,
    svgWrapClass: "absolute top-56 right-0 left-50",
    svgStyle: { width: "360px", height: "220px", opacity: 1 },
    title: "AI Solutions",
    desc: "Custom AI integrations, LLM-powered workflows, and intelligent automation systems that transform how you operate.",
    tags: ["OpenAI", "LangChain", "RAG"],
    accent: "#A855F7", accentMuted: "rgba(168,85,247,0.14)", accentBorder: "rgba(168,85,247,0.45)",
    number: "02", size: "medium",
    alwaysColoured: true,
    minH: "380px",
    stats: [{ label: "24/7", sub: "Intelligent Ops" }],
  },
  {
    icon: Code2, SVG: BackendSVG,
    svgWrapClass: "absolute top-0 right-0 -bottom-40",
    svgStyle: { width: "120px", opacity: 1 },
    title: "Backend Systems",
    desc: "We design and develop scalable APIs, microservices, and distributed systems that support growing business demands while maintaining high performance and availability. Our architectures are built with reliability, security, and maintainability in mind, ensuring seamless communication between services and applications",
    tags: ["Node.js", "Go", "PostgreSQL"],
    accent: "#10B981", accentMuted: "rgba(16,185,129,0.12)", accentBorder: "rgba(16,185,129,0.4)",
    number: "03", size: "small",
    alwaysColoured: false,
    minH: "400px",
  },
  {
    icon: Shield, SVG: SecuritySVG,
    svgWrapClass: "absolute bottom-4 right-4",
    svgStyle: { width: "180px", height: "180px", opacity: 1 },
    title: "Security & DevOps",
    desc: "CI/CD pipelines, infrastructure-as-code, and security-first architecture for production confidence.",
    tags: ["AWS", "Docker", "Terraform"],
    accent: "#EF4444", accentMuted: "rgba(239,68,68,0.14)", accentBorder: "rgba(239,68,68,0.45)",
    number: "04", size: "small",
    alwaysColoured: true,
    minH: "360px",
  },
  {
    icon: Layers, SVG: DesignSVG,
    svgWrapClass: "absolute bottom-0 left-30 right-0",
    svgStyle: { height: "70px", opacity: 1 },
    title: "Design Systems",
    desc: "Cohesive design systems and component libraries that scale across products and teams with precision.",
    tags: ["Figma", "Storybook", "CSS"],
    accent: "#6366F1", accentMuted: "rgba(99,102,241,0.14)", accentBorder: "rgba(99,102,241,0.45)",
    number: "05", size: "medium",
    alwaysColoured: false,
    minH: "381px",
    stats: [{ label: "100%", sub: "Design Consistency" }, { label: "3×", sub: "Faster Shipping" }],
  },
  {
    icon: Zap, SVG: PerformanceSVG,
    svgWrapClass: "absolute top-0 right-0 bottom-0",
    svgStyle: { width: "55%", opacity: 1 },
    title: "Performance",
    desc: "We conduct comprehensive code audits, performance assessments, and architectural reviews to identify bottlenecks that impact speed, scalability, and maintainability. By analyzing every layer of your application, we uncover opportunities to improve efficiency and deliver a smoother user experience.",
    tags: ["Core Web Vitals", "CDN", "Caching"],
    accent: "#F59E0B", accentMuted: "rgba(245,158,11,0.14)", accentBorder: "rgba(245,158,11,0.45)",
    number: "06", size: "wide",
    alwaysColoured: true,
    minH: "350px",
  },
  {
    icon: Rocket, SVG: MobileSVG as React.ComponentType<SvgProps>,
    svgWrapClass: "absolute bottom-0 right-4",
    svgStyle: { width: "90px", height: "140px", opacity: 1 },
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile experiences built for speed, delight, and millions of users. iOS and Android, done right.",
    tags: ["React Native", "Swift", "Kotlin"],
    /* white text on dark — accent is white so all the existing colour logic just works */
    accent: "#ffffff", accentMuted: "rgba(255,255,255,0.06)", accentBorder: "rgba(255,255,255,0.22)",
    number: "07", size: "medium",
    alwaysColoured: false,   /* grey dark default → white-accented on hover */
    minH: "300px",
    //stats: [{ label: "4.9★", sub: "Avg App Rating" }, { label: "2M+", sub: "Downloads" }],
  },
];

/* ─── ServiceCard ─────────────────────────────────────────────────── */
function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const { SVG, icon: Icon } = svc;
  const [hovered, setHovered] = useState(false);
  const isLarge = svc.size === "large";
  const isWide  = svc.size === "wide";
  const colSpan = isLarge || isWide ? "lg:col-span-2" : "lg:col-span-1";
  const padding = isLarge ? "p-8" : isWide ? "p-7" : "p-6";
  const extraPb = (isLarge || svc.size === "medium") && svc.svgWrapClass.includes("bottom-0") && !svc.svgWrapClass.includes("right-4")
    ? "pb-36" : "";

  const ac = svc.alwaysColoured;

  const cardBg = hovered
    ? `${svc.accent}22`
    : ac ? `${svc.accent}0d` : "rgba(255,255,255,0.025)";

  const cardBorder = hovered
    ? svc.accentBorder
    : ac ? `${svc.accent}55` : "rgba(255,255,255,0.07)";

  const cardShadow = hovered
    ? `0 32px 64px -16px ${svc.accent}40, 0 0 0 1px ${svc.accentBorder}`
    : ac ? `0 8px 24px -8px ${svc.accent}28` : "none";

  const glowOpacity  = hovered ? 1 : ac ? 0.5 : 0.25;
  const svgOpacity   = hovered ? 1 : ac ? 0.55 : 0.28;
  const iconBg       = hovered ? svc.accent : ac ? `${svc.accent}30` : "rgba(255,255,255,0.07)";
  const iconColor    = hovered ? (svc.accent === "#ffffff" ? "#111" : "#fff") : ac ? svc.accent : "rgba(255,255,255,0.5)";
  const numColor     = hovered ? svc.accent : ac ? `${svc.accent}99` : "rgba(255,255,255,0.18)";
  const descColor    = hovered ? "rgba(255,255,255,0.65)" : ac ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.3)";
  const statColor    = hovered ? svc.accent : ac ? `${svc.accent}cc` : "rgba(255,255,255,0.65)";
  const tagBg        = hovered ? `${svc.accent}25` : ac ? `${svc.accent}18` : "rgba(255,255,255,0.04)";
  const tagColor     = hovered ? svc.accent : ac ? `${svc.accent}cc` : "rgba(255,255,255,0.28)";
  const tagBorder    = hovered ? svc.accentBorder : ac ? `${svc.accent}44` : "rgba(255,255,255,0.06)";
  const sweepWidth   = hovered ? "100%" : ac ? "35%" : "0%";

  /* MobileSVG only needs dim, not accent */
  const svgNode = svc.number === "07"
    ? <MobileSVG dim={!hovered} />
    : <SVG accent={svc.accent} dim={!hovered} />;

  return (
    <div
      className={`group relative ${colSpan} reveal`}
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer flex flex-col ${padding} ${extraPb}`}
        style={{
          background: cardBg,
          borderColor: cardBorder,
          height: svc.minH,
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: cardShadow,
        }}
      >
        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Glow orb */}
        <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle, ${svc.accent}1c 0%, transparent 70%)`,
            opacity: glowOpacity,
          }}
        />

        {/* Illustration */}
        <div
          className={`${svc.svgWrapClass} pointer-events-none z-0`}
          style={{
            ...svc.svgStyle,
            opacity: svgOpacity,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {svgNode}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">

          {/* Top row */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500"
              style={{
                background: iconBg,
                transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0deg)",
              }}
            >
              <Icon className="w-5 h-5" style={{ color: iconColor }} />
            </div>
            <span className="font-mono text-xs tracking-[0.22em] transition-colors duration-300" style={{ color: numColor }}>
              {svc.number}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-white/90 leading-tight tracking-tight mb-3 ${isLarge ? "text-3xl" : isWide ? "text-2xl" : "text-xl"}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {svc.title}
          </h3>

          {/* Desc */}
          <p
            className="text-sm leading-relaxed mb-5 flex-grow transition-colors duration-300"
            style={{
              color: descColor,
              maxWidth: svc.size === "small" && svc.svgWrapClass.includes("right-0 bottom-0 top-0") ? "calc(100% - 64px)" : "100%",
            }}
          >
            {svc.desc}
          </p>

          {/* Stats */}
          {svc.stats && (
            <div className="flex gap-6 mb-4 pt-3 border-t" style={{ borderColor: ac ? `${svc.accent}22` : "rgba(255,255,255,0.06)" }}>
              {svc.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-bold transition-colors duration-300"
                    style={{ color: statColor, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {s.label}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {svc.tags.map(tag => (
              <span key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wide transition-all duration-300"
                style={{ background: tagBg, color: tagColor, border: `1px solid ${tagBorder}` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Explore */}
          <div className="flex items-center gap-2 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-6px)" }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: svc.accent }}>Explore</span>
            <ArrowUpRight className="w-3 h-3" style={{ color: svc.accent }} />
          </div>
        </div>

        {/* Bottom sweep */}
        <div className="absolute bottom-0 left-0 h-[2px] transition-all duration-700"
          style={{ background: `linear-gradient(to right, ${svc.accent}, transparent)`, width: sweepWidth }}
        />
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */
export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#080808" }}>

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.022) 1px,transparent 1px)`,
        backgroundSize: "60px 60px",
      }}/>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(99,102,241,0.07) 0%,transparent 70%)",
      }}/>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none z-10"/>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10"/>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="reveal mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"/>
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/30 font-medium">Mission-Critical Domains</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Sector<br/>
              <em className="not-italic" style={{
                background: "linear-gradient(135deg,#fff 0%,#fff 40%,#fff 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Intelligence</em>
            </h2>
            <div className="space-y-6">
              <p className="text-white/40 text-base leading-relaxed max-w-sm">
                We design and ship trusted digital systems where resilience, transparency,
                and performance are expected at national scale.
              </p>
              <div className="flex gap-8 pt-2">
                {[
                  { val: "12+", sub: "Enterprise Builds" },
                  { val: "4",   sub: "Core Sectors" },
                  { val: "4Y+", sub: "Experience" },
                ].map(({ val, sub }) => (
                  <div key={sub} className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white/90" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{val}</span>
                    <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.28)" }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {services.map((svc, i) => <ServiceCard key={i} svc={svc} index={i} />)}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-20 flex items-center justify-between border-t pt-10"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/20">All services available globally</p>
          <button
            className="group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white/45 group-hover:text-white/75 transition-colors duration-300">
              View all services
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/65 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"/>
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .reveal { opacity:0; transform:translateY(24px); transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),transform 0.8s cubic-bezier(0.4,0,0.2,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
      `}</style>
    </section>
  );
}