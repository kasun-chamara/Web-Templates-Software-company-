"use client";

import { motion, type MotionValue } from "framer-motion";

export default function MouseGlow({
  x,
  y,
  size = 520,
  color = "rgba(255,43,0,0.5)",
  midColor = "rgba(255,43,0,0.16)",
  className = "hidden md:block",
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  size?: number;
  color?: string;
  midColor?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-[2] rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background: `radial-gradient(circle, ${color} 0%, ${midColor} 40%, transparent 70%)`,
        filter: "blur(80px)",
      }}
    />
  );
}
