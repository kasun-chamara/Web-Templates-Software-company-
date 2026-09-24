import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Globe,
  Sparkles,
  Server,
  ShieldCheck,
  Palette,
  Database,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  FlaskConical,
  ScanSearch,
  Rocket,
  Lock,
  Bot,
  FileText,
  TrendingUp,
  Search,
  Smartphone,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";

type Visual =
  | { kind: "web" }
  | { kind: "ai" }
  | { kind: "backend" }
  | { kind: "security" }
  | { kind: "design" };

interface Solution {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  tech: string[];
  visual: Visual;
}

const solutions: Solution[] = [
  {
    id: "web-platforms",
    icon: Globe,
    title: "Web Platforms",
    tagline: "Fast, responsive websites and web apps that convert.",
    desc: "From business websites to booking systems and customer portals, we build web platforms that load fast, rank well and are easy for your team to manage.",
    features: [
      "Custom websites, portals and web apps",
      "Booking, ordering and tracking systems",
      "Content management your team can use",
      "SEO-ready, mobile-first and accessible",
    ],
    tech: ["React", "Next.js", "Laravel", "Tailwind"],
    visual: { kind: "web" },
  },
  {
    id: "ai-solutions",
    icon: Sparkles,
    title: "AI Solutions",
    tagline: "Put AI to work on the tasks that slow you down.",
    desc: "We add practical AI to your product and operations — chat assistants, smart search, predictions and automation that save your team hours every week.",
    features: [
      "AI chat assistants and customer support bots",
      "Document, image and data processing",
      "Forecasting and recommendations",
      "Workflow automation with LLMs",
    ],
    tech: ["Python", "OpenAI", "Claude", "PyTorch"],
    visual: { kind: "ai" },
  },
  {
    id: "backend-systems",
    icon: Server,
    title: "Backend Systems",
    tagline: "The reliable engine behind your apps.",
    desc: "APIs, databases and real-time services designed to scale with you — powering order tracking, mobile apps and management dashboards without slowing down.",
    features: [
      "REST and GraphQL APIs",
      "Real-time updates and notifications",
      "Database design and optimisation",
      "Third-party and payment integrations",
    ],
    tech: ["Node.js", "Laravel", "PostgreSQL", "Redis"],
    visual: { kind: "backend" },
  },
  {
    id: "security-devops",
    icon: ShieldCheck,
    title: "Security & DevOps",
    tagline: "Ship often. Stay online. Stay secure.",
    desc: "Automated pipelines, cloud hosting and security hardening so every release goes out safely and your platform stays up around the clock.",
    features: [
      "CI/CD pipelines and automated testing",
      "Cloud hosting on AWS and Firebase",
      "SSL, backups and vulnerability scanning",
      "24/7 uptime monitoring and alerts",
    ],
    tech: ["AWS", "Docker", "GitHub Actions", "Cloudflare"],
    visual: { kind: "security" },
  },
  {
    id: "design-systems",
    icon: Palette,
    title: "Design Systems",
    tagline: "One consistent look across every screen.",
    desc: "Reusable components, design tokens and brand guidelines that keep your web and mobile products consistent — and help your team ship new screens faster.",
    features: [
      "UI/UX design and user testing",
      "Component libraries in Figma and code",
      "Design tokens and theming (light & dark)",
      "Brand identity and guidelines",
    ],
    tech: ["Figma", "Storybook", "React", "TypeScript"],
    visual: { kind: "design" },
  },
];

/* ─── Visuals ──────────────────────────────────────────── */
function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#FF2B00]/10 blur-3xl dark:bg-[#FF2B00]/15" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(26,4,0,0.45)] dark:border-zinc-800">
        {children}
      </div>
    </div>
  );
}

function DarkCanvas({ pattern = "dots" }: { pattern?: "dots" | "grid" }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0400] to-[#0d0100]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            pattern === "dots"
              ? "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)"
              : "linear-gradient(to right,rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.3) 1px,transparent 1px)",
          backgroundSize: pattern === "dots" ? "22px 22px" : "32px 32px",
        }}
      />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FF2B00]/30 blur-3xl" />
    </>
  );
}

function WebVisual() {
  return (
    <VisualFrame>
      <DarkCanvas pattern="grid" />

      {/* Browser window */}
      <div className="absolute left-[7%] top-[12%] w-[72%] overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl dark:bg-zinc-900">
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-800">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 rounded-md bg-white px-2 py-0.5 text-[8px] text-slate-400 dark:bg-zinc-900 dark:text-zinc-500 sm:text-[9px]">
            yourbusiness.com
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-14 rounded-full bg-[#FF2B00]" />
            <div className="flex gap-2">
              <div className="h-1.5 w-6 rounded-full bg-slate-200 dark:bg-zinc-700" />
              <div className="h-1.5 w-6 rounded-full bg-slate-200 dark:bg-zinc-700" />
              <div className="h-1.5 w-6 rounded-full bg-slate-200 dark:bg-zinc-700" />
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#FF2B00] to-[#7A1600] p-4">
            <div className="h-2.5 w-3/5 rounded-full bg-white/90" />
            <div className="mt-2 h-1.5 w-2/5 rounded-full bg-white/50" />
            <div className="mt-3 h-4 w-16 rounded-md bg-white" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((k) => (
              <div key={k} className="rounded-md border border-slate-200 p-2 dark:border-zinc-800">
                <div className="h-6 rounded bg-slate-100 dark:bg-zinc-800" />
                <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-slate-200 dark:bg-zinc-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[8%] right-[7%] w-[26%] overflow-hidden rounded-2xl border-4 border-zinc-800 bg-white shadow-2xl dark:bg-zinc-900">
        <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-zinc-800" />
        <div className="space-y-2 p-2.5">
          <div className="h-2 w-10 rounded-full bg-[#FF2B00]" />
          <div className="h-12 rounded-lg bg-gradient-to-br from-[#FF7A45] to-[#FF2B00]" />
          <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-zinc-700" />
          <div className="h-1.5 w-3/4 rounded-full bg-slate-200 dark:bg-zinc-700" />
          <div className="h-5 rounded-md bg-slate-900 dark:bg-white" />
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute right-[5%] top-[10%] flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
        <Zap className="h-3 w-3 text-[#FF7A45]" /> Fast load
      </div>
      <div className="absolute bottom-[8%] left-[7%] flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-white backdrop-blur-md">
        <Smartphone className="h-3.5 w-3.5 text-[#FF7A45]" />
        <CalendarCheck className="h-3.5 w-3.5 text-[#FF7A45]" />
        <ShoppingBag className="h-3.5 w-3.5 text-[#FF7A45]" />
      </div>
    </VisualFrame>
  );
}

const aiTasks = [
  { icon: FileText, label: "Docs" },
  { icon: Search, label: "Search" },
  { icon: TrendingUp, label: "Forecast" },
];

function AIVisual() {
  return (
    <VisualFrame>
      <DarkCanvas />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Chat window */}
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF2B00] to-[#7A1600]">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="text-[12px] font-semibold text-white">AI Assistant</span>
              <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Online
              </span>
            </div>

            <div className="space-y-2.5 text-[11px] leading-snug">
              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-white px-3 py-2 text-slate-800">
                Where is my order #2041?
              </div>
              <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-[#FF2B00] px-3 py-2 text-white">
                It&apos;s out for delivery — arriving in about 12 minutes.
              </div>
              <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white/15 px-3 py-2.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/80" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/80 [animation-delay:0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/80 [animation-delay:0.3s]" />
              </div>
            </div>
          </div>

          {/* Automation tasks */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {aiTasks.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 py-3 backdrop-blur-md"
              >
                <Icon className="h-4 w-4 text-[#FF7A45]" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF2B00] shadow-[0_0_30px_rgba(255,43,0,0.6)]">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
    </VisualFrame>
  );
}

const swatches = ["#FF2B00", "#FF7A45", "#B91C1C", "#1A0400", "#F8FAFC"];

function DesignVisual() {
  return (
    <VisualFrame>
      <DarkCanvas />

      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-7">
        {/* Colour tokens */}
        <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60 sm:text-[10px]">Colors</span>
          <div className="mt-3 flex -space-x-2">
            {swatches.map((c) => (
              <span
                key={c}
                className="h-7 w-7 rounded-full border-2 border-[#1A0400] sm:h-9 sm:w-9"
                style={{ background: c }}
              />
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#FF2B00] to-[#FF7A45]" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Typography */}
        <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60 sm:text-[10px]">Type</span>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-4xl font-bold leading-none text-white sm:text-5xl">Aa</span>
            <span className="mb-1 text-lg font-light leading-none text-white/50">Aa</span>
          </div>
          <span className="mt-2 block text-[9px] text-white/50 sm:text-[10px]">Inter · 12 / 16 / 24 / 48</span>
        </div>

        {/* Components */}
        <div className="col-span-2 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60 sm:text-[10px]">Components</span>
          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="rounded-lg bg-[#FF2B00] px-3 py-1.5 text-[10px] font-semibold text-white sm:text-[11px]">Primary</span>
            <span className="rounded-lg border border-white/30 px-3 py-1.5 text-[10px] font-semibold text-white sm:text-[11px]">Secondary</span>
            <span className="flex h-5 w-9 items-center rounded-full bg-[#FF2B00] p-0.5">
              <span className="ml-auto h-4 w-4 rounded-full bg-white" />
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#FF2B00]">
              <Check className="h-3 w-3 text-white" />
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2">
              <Search className="h-3 w-3 text-slate-400" />
              <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2">
              <div className="h-4 w-4 rounded-md bg-gradient-to-br from-[#FF7A45] to-[#FF2B00]" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-4/5 rounded-full bg-slate-300" />
                <div className="h-1 w-1/2 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

const backendNodes = [
  { icon: Database, label: "Database", x: 16, y: 22 },
  { icon: Zap, label: "Real-time", x: 84, y: 22 },
  { icon: Layers, label: "Services", x: 16, y: 78 },
  { icon: Cloud, label: "Integrations", x: 84, y: 78 },
];

function BackendVisual() {
  return (
    <VisualFrame>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0400] to-[#0d0100]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {backendNodes.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="#FF2B00"
            strokeOpacity="0.6"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            className="solutions-flow"
          />
        ))}
      </svg>

      {/* Central API node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-ping rounded-2xl bg-[#FF2B00]/30" />
        <div className="relative flex flex-col items-center gap-1 rounded-2xl bg-[#FF2B00] px-5 py-4 text-white shadow-[0_0_40px_rgba(255,43,0,0.5)]">
          <Server className="h-6 w-6" />
          <span className="text-[11px] font-bold uppercase tracking-widest">API</span>
        </div>
      </div>

      {backendNodes.map(({ icon: Icon, label, x, y }) => (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
            <Icon className="h-4 w-4 text-[#FF7A45]" />
            <span className="text-[11px] font-semibold">{label}</span>
          </div>
        </div>
      ))}
    </VisualFrame>
  );
}

const pipeline = [
  { icon: GitBranch, label: "Commit" },
  { icon: FlaskConical, label: "Test" },
  { icon: ScanSearch, label: "Scan" },
  { icon: Rocket, label: "Deploy" },
];

function SecurityVisual() {
  return (
    <VisualFrame>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0400] to-[#0d0100]" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.4) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6">
        {/* Shield */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#FF2B00]/40 blur-2xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[#FF2B00]/40 bg-gradient-to-br from-[#FF2B00] to-[#7A1600] shadow-[0_0_50px_rgba(255,43,0,0.45)] sm:h-28 sm:w-28">
            <ShieldCheck className="h-12 w-12 text-white sm:h-14 sm:w-14" />
          </div>
          <div className="absolute -right-3 -top-3 flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
            <Lock className="h-3 w-3" /> SSL
          </div>
        </div>

        {/* Pipeline */}
        <div className="flex w-full max-w-sm items-center justify-between">
          {pipeline.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
                  <Icon className="h-4 w-4 text-[#FF7A45]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">{label}</span>
              </div>
              {i < pipeline.length - 1 && (
                <div className="mx-1 mb-5 h-px flex-1 bg-gradient-to-r from-[#FF2B00] to-[#FF7A45]/30" />
              )}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          All systems operational
        </div>
      </div>
    </VisualFrame>
  );
}

function SolutionVisual({ solution }: { solution: Solution }) {
  const v = solution.visual;
  if (v.kind === "web") return <WebVisual />;
  if (v.kind === "ai") return <AIVisual />;
  if (v.kind === "backend") return <BackendVisual />;
  if (v.kind === "design") return <DesignVisual />;
  return <SecurityVisual />;
}

/* ─── Section ──────────────────────────────────────────── */
export default function Solutions() {
  return (
    <>
      <section className="bg-white pb-4 dark:bg-zinc-950">
      {/* In-page jump links */}
      <nav className="px-6">
        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {solutions.map(({ id, title, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#FF2B00]/40 hover:text-[#FF2B00] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-[#FF5A33]"
              >
                <Icon className="h-4 w-4" />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </section>

      {solutions.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 py-16 sm:py-24 ${
              reversed ? "bg-slate-50 dark:bg-zinc-900/40" : "bg-white dark:bg-zinc-950"
            }`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF2B00] to-[#7A1600] shadow-lg shadow-[#FF2B00]/25">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-num text-sm font-semibold tracking-[0.2em] text-slate-400 dark:text-zinc-500">
                    {String(i + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-lg font-medium text-[#FF2B00]">{s.tagline}</p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-zinc-400">{s.desc}</p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-zinc-300">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FF2B00]/10">
                        <Check className="h-3 w-3 text-[#FF2B00]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#FF2B00] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e02600]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                <SolutionVisual solution={s} />
              </div>
            </div>
          </section>
        );
      })}

      <style>{`
        @keyframes solutions-flow { to { stroke-dashoffset: -12; } }
        .solutions-flow { animation: solutions-flow 1.2s linear infinite; }
      `}</style>
    </>
  );
}
