import Link from "next/link";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

const links = {
  Services: ["Web Platforms", "AI Solutions", "Backend Systems", "Security & DevOps", "Design Systems"],
  Company: ["About", "Work", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};
const socials = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hello@nexalab.io", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "#1A0300", borderColor: "#991800" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">

              <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                LOGO
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering high-performance digital systems for startups and enterprises. Based globally, working everywhere.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FF2B00] hover:border-[#FF2B00]/40 transition-all duration-200 bg-white/5">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/50 text-sm hover:text-[#FF2B00] transition-colors animated-link">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-6 h-px" style={{ background: "#FF2B00" }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} NexaLab. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-display)" }}>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
