"use client";

import { useEffect, useState } from "react";

export default function LegalNav({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const update = () => {
      // The active section is the last one whose top has passed the navbar line.
      const line = 160;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = id;
      }
      // At the very bottom of the page, highlight the last section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = items[items.length - 1]?.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, [items]);

  return (
    <nav className="lg:sticky lg:top-32 lg:self-start">
      <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
        {items.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative block rounded-lg border px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-[#FF2B00]/40 bg-orange-50 font-semibold text-[#FF2B00] shadow-[0_8px_20px_-12px_rgba(255,43,0,0.5)] dark:bg-[#FF2B00]/10 dark:text-[#FF5A33]"
                    : "border-slate-200 font-medium text-slate-600 hover:border-[#FF2B00]/40 hover:text-[#FF2B00] dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-[#FF5A33] lg:border-transparent"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 hidden h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[#FF2B00] transition-opacity duration-300 lg:block ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
