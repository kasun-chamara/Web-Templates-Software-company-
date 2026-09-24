"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "447751981261";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      <motion.button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
        style={{ pointerEvents: showTop ? "auto" : "none", background: "#FF2B00" }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: "#25D366" }}
      >
        <FaWhatsapp className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
