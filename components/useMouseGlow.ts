"use client";

import { useMotionValue, useSpring } from "framer-motion";

export function useMouseGlow() {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const x = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  };

  const handleLeave = () => {
    mouseX.set(-999);
    mouseY.set(-999);
  };

  return { x, y, handleMove, handleLeave };
}
