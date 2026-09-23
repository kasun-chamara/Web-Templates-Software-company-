"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rocket, X } from "lucide-react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(26,4,0,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md rounded-3xl border border-slate-900/[0.08] bg-white p-8 text-center shadow-2xl dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/30"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>

            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_8px_24px_-4px_rgba(255,43,0,0.5)]"
              style={{ backgroundImage: "linear-gradient(135deg, #FF2B00, #1A0400)" }}
            >
              <Rocket className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-[28px]">
              Let&apos;s Build Something Great
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-zinc-400 sm:text-base">
              A motivated team ready to bring your vision to life — a free
              consultation, no NDAs needed to start a conversation.
            </p>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF2B00)",
                boxShadow: "0 4px 20px rgba(255,43,0,0.3)",
              }}
            >
              Start a Conversation
              <Rocket className="h-4 w-4" />
            </Link>

            <p className="mt-4 text-xs tracking-wide text-slate-400 dark:text-zinc-500">
              We&apos;ll scope your project and reply within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
