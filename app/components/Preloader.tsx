"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Increment loading progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 200);
          return 100;
        }
        // Random incremental steps for smooth animation
        const increment = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030914]"
        >
          {/* Radial Gradient Glow behind Logo */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full" />
          
          <div className="relative flex flex-col items-center gap-6">
            {/* Double Spinning Rings Container */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500 border-b-transparent border-l-transparent shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-cyan-400 border-t-transparent border-r-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              />
              
              {/* Central Logo Symbol */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-16 h-16 relative z-10 flex items-center justify-center"
              >
                <Image
                  src="/1xplay.webp"
                  alt="1xPlay"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                />
              </motion.div>
            </div>

            {/* Brand Title Text */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-[var(--font-bebas)] text-3xl tracking-[5px] text-white"
              >
                1XPLAY
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[10px] uppercase tracking-[3px] text-cyan-400 font-bold mt-1.5"
              >
                Loading Universe
              </motion.p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="flex flex-col items-center gap-2.5 w-48 mt-2">
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-[12px] text-cyan-300 font-bold">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
