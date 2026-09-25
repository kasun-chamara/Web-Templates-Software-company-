"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 shadow-sm" : "py-6 bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500 opacity-20" />
            <div className="absolute inset-1 bg-blue-500 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500 delay-75" />
            <Zap className="absolute inset-0 m-auto w-4 h-4 text-white z-10" />
          </div> */}
          <Image
            src="/images/Theme_2.png"
            alt="Kapingar Software Solutions"
            width={132}
            height={139}
            priority
            className="block dark:hidden h-12 w-auto mix-blend-multiply"
          />
          <Image
            src="/images/Theme_1.png"
            alt="Kapingar Software Solutions"
            width={132}
            height={139}
            priority
            className="hidden dark:block h-12 w-auto"
          />
          <span className="text-2xl font-bold text-black dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
            KAPINGAR
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`animated-link text-sm transition-colors duration-200 ${
                  pathname === link.href ? "font-bold text-[#FF2B00] dark:text-[#FF5A33]" : "font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}

        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl flex items-center gap-2">Get Started</Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[calc(100dvh-80px)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
              className={`transition-colors py-2 border-b border-slate-100 dark:border-zinc-800 ${
                pathname === link.href ? "font-bold text-[#FF2B00] dark:text-[#FF5A33]" : "font-medium text-slate-600 dark:text-zinc-400 hover:text-[#FF2B00] dark:hover:text-[#FF5A33]"
              }`}
              style={{ fontFamily: "var(--font-display)" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 flex w-full items-center justify-center rounded-xl bg-[#FF2B00] px-6 py-3 font-semibold text-white shadow-[0_10px_24px_-10px_rgba(255,43,0,0.7)] transition-colors hover:bg-[#e02600]">Get Started</Link>
        </div>
      </div>
    </header>
  );
}