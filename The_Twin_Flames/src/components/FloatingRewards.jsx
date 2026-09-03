"use client";

import React from "react";
import Link from "next/link";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingRewards() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -8, 0] // Smooth, slow continuous vertical floating up & down
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <Link
        href="#all-products"
        aria-label="Twin Flame Exclusive Collection"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#761e27] hover:bg-[#8c2530] text-white border-2 border-[#d8bf9c]/80 shadow-[0_8px_25px_rgba(118,30,39,0.35)] cursor-pointer select-none group backdrop-blur-xs transition-all duration-300 hover:scale-105"
      >
        {/* Gift Icon */}
        <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[#f8eddc] group-hover:rotate-12 transition-transform duration-300">
          <Gift className="w-4 h-4 text-[#f8eddc]" />
        </span>

        {/* Text */}
        <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-white drop-shadow-xs pr-1">
          Twin Flame
        </span>
      </Link>
    </motion.div>
  );
}
