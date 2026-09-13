"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "/contact" },
];

const products = [
  {
    name: "Algochurn",
    description: "Prepare for tech interviews like never before.",
    href: "#",
    thumb: "algochurn" as const,
  },
  {
    name: "Tailwind Master Kit",
    description: "Production ready Tailwind CSS components for your next project.",
    href: "#",
    thumb: "tailwind" as const,
  },
];

function AlgochurnThumb() {
  return (
    <div className="w-[110px] h-[68px] rounded-lg overflow-hidden flex-shrink-0 bg-[#1e1530] flex items-center justify-center">
      <div className="w-[85%] flex flex-col gap-[5px]">
        <div className="h-[5px] rounded-full bg-[#7c5cbf] w-[80%]" />
        <div className="h-[5px] rounded-full bg-[#4a90d9] w-[55%]" />
        <div className="h-[5px] rounded-full bg-[#5b3fa0] w-[70%]" />
        <div className="h-[5px] rounded-full bg-[#4a90d9] w-[40%]" />
      </div>
    </div>
  );
}

function TailwindThumb() {
  return (
    <div className="w-[110px] h-[68px] rounded-lg overflow-hidden flex-shrink-0 bg-[#f1f5f9] flex items-center justify-center">
      <div className="w-[85%] flex flex-col gap-[3px]">
        <div className="h-[6px] bg-[#e2e8f0] rounded-sm mb-1" />
        <div className="flex gap-[3px]">
          <div className="h-[10px] rounded-sm bg-[#3b82f6] flex-1" />
          <div className="h-[10px] rounded-sm bg-[#e2e8f0] flex-1" />
        </div>
        <div className="flex gap-[3px]">
          <div className="h-[10px] rounded-sm bg-[#e2e8f0] flex-1" />
          <div className="h-[10px] rounded-sm bg-[#ef4444] flex-1" />
        </div>
        <div className="flex gap-[2px] mt-1">
          <div className="w-[9px] h-[9px] rounded-full bg-[#3b82f6]" />
          <div className="w-[9px] h-[9px] rounded-full bg-[#8b5cf6]" />
          <div className="w-[9px] h-[9px] rounded-full bg-[#f59e0b]" />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showProducts = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setProductsOpen(true);
  };

  const hideProducts = () => {
    hideTimer.current = setTimeout(() => setProductsOpen(false), 80);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" : "py-6 bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500 opacity-20" />
            <div className="absolute inset-1 bg-blue-500 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500 delay-75" />
            <Zap className="absolute inset-0 m-auto w-4 h-4 text-white z-10" />
          </div> */}
          <span className="text-2xl font-bold text-black" style={{ fontFamily: "var(--font-display)" }}>
            LOGO
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`animated-link text-sm transition-colors duration-200 ${
                  pathname === link.href ? "font-bold text-[#FF2B00]" : "font-medium text-slate-500 hover:text-slate-900"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Products dropdown */}
          <li
            className="relative"
            onMouseEnter={showProducts}
            onMouseLeave={hideProducts}
          >
            <button
              className="animated-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[520px] transition-all duration-200 ${
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              {/* Arrow */}
              <div className="flex justify-center mb-[-1px]">
                <div className="w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 relative z-10" />
              </div>

              {/* Panel */}
              <div className="bg-white border border-slate-200 rounded-2xl p-3 grid grid-cols-2 gap-2 shadow-lg shadow-slate-100">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 group"
                  >
                    {product.thumb === "algochurn" ? <AlgochurnThumb /> : <TailwindThumb />}
                    <div>
                      <p className="text-[14px] font-semibold text-slate-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {product.name}
                      </p>
                      <p className="text-[12px] text-slate-500 leading-snug">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">Get Started</Link>
        </div>

        <button className="md:hidden text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
              className={`transition-colors py-2 border-b border-slate-100 ${
                pathname === link.href ? "font-bold text-[#FF2B00]" : "font-medium text-slate-600 hover:text-[#FF2B00]"
              }`}
              style={{ fontFamily: "var(--font-display)" }}>
              {link.label}
            </Link>
          ))}
          {/* Products in mobile menu */}
          <div className="py-2 border-b border-slate-100">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Products</p>
            {products.map((product) => (
              <Link key={product.name} href={product.href} onClick={() => setOpen(false)}
                className="text-slate-600 hover:text-[#FF2B00] transition-colors font-medium py-1.5 block">
                {product.name}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-2 w-fit">Get Started</Link>
        </div>
      </div>
    </header>
  );
}