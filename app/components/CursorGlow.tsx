"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [hovered, setHovered] = useState(false);
  // Stays false until the first mouse event, which also guarantees we never
  // render on the server or during hydration.
  const [visible, setVisible] = useState(false);

  // Position motion values initialized off-screen
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics config to create smooth liquid tracking lag
  const springConfig = { damping: 35, stiffness: 350, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Detect if hovering interactive items to dynamically expand the glow size
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // NOTE: deliberately avoid window.getComputedStyle() here — calling it on
      // every mouseover forces a synchronous style/layout recalc and causes jank.
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("a") ||
        !!target.closest("button");

      setHovered(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden lg:block overflow-hidden">
      {/* Large Outer Radial Glow */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-[30px] pointer-events-none mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 130 : 50,
          height: hovered ? 130 : 50,
          opacity: hovered ? 0.95 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
      
      {/* Tiny Sharp Precise Center Core */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_10px_#22d3ee]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 2.2 : 1,
          backgroundColor: hovered ? "#00ffff" : "#22d3ee",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
