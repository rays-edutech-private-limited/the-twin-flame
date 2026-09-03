"use client";

import React from "react";

const marqueeItems = [
  "Soft glow. Signature scents. Thoughtful rituals.",
  "100% Handpoured natural soy wax & essential oils.",
  "A sanctuary of warmth, memory and sacred calm.",
  "Artisan crackling wooden wicks & bespoke fragrance notes.",
  "Clean burning, non-toxic luxury home aromatics.",
  "Crafted with love for mindful everyday living.",
];

// Colorful & Realistic Animated Diya/Deep with burning flame effect
const RealisticAnimatedDiya = () => (
  <div className="relative inline-flex items-center justify-center shrink-0 mx-6 sm:mx-8 group/diya">
    {/* Ambient Warm Flame Glow */}
    <div className="absolute -top-1 w-4 h-4 rounded-full bg-amber-400/30 blur-[3px] animate-pulse pointer-events-none" />

    <svg
      className="w-5 h-5 sm:w-5.5 sm:h-5.5 overflow-visible filter drop-shadow-[0_1px_3px_rgba(200,100,0,0.3)]"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Colorful Metallic Luxury Brass / Terracotta Diya Bowl Gradient */}
        <linearGradient id="diyaBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7d488" />
          <stop offset="30%" stopColor="#d89635" />
          <stop offset="65%" stopColor="#9e4e16" />
          <stop offset="100%" stopColor="#5c2609" />
        </linearGradient>

        {/* Diya Rim Highlight Gradient */}
        <linearGradient id="diyaRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffe6a3" />
          <stop offset="50%" stopColor="#c7892b" />
          <stop offset="100%" stopColor="#ffe6a3" />
        </linearGradient>

        {/* Melted Soy Wax Pool Radial Gradient */}
        <radialGradient id="waxGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="50%" stopColor="#fae0b0" />
          <stop offset="100%" stopColor="#b88337" />
        </radialGradient>

        {/* Vibrant Outer Flame Gradient (Red -> Orange -> Gold -> Light Yellow) */}
        <linearGradient id="outerFlameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#e62e00" />
          <stop offset="25%" stopColor="#ff6a00" />
          <stop offset="70%" stopColor="#ffb700" />
          <stop offset="100%" stopColor="#fff7a1" />
        </linearGradient>

        {/* Inner Flame Core (Blue base -> Pure White -> Warm Golden Tip) */}
        <linearGradient id="innerFlameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.75" />
          <stop offset="25%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#fffde7" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* 1. Diya Shadow & Base */}
      <ellipse cx="18" cy="27" rx="6" ry="1.5" fill="#3a1c05" opacity="0.25" />

      {/* 2. Diya Bowl (Traditional Indian Luxury Brass/Clay Silhouette) */}
      <path
        d="M6 19 C6 25.5 10.8 28 18 28 C25.2 28 30 25.5 30 19 C30 16.8 25 15.2 18 15.2 C11 15.2 6 16.8 6 19 Z"
        fill="url(#diyaBowlGrad)"
        stroke="#522306"
        strokeWidth="0.5"
      />

      {/* 3. Golden Rim & Melted Wax Pool */}
      <ellipse
        cx="18"
        cy="18.5"
        rx="11.5"
        ry="3.5"
        fill="url(#waxGrad)"
        stroke="url(#diyaRimGrad)"
        strokeWidth="0.75"
      />

      {/* 4. Candle Wick */}
      <line
        x1="18"
        y1="18.5"
        x2="18"
        y2="14.5"
        stroke="#241103"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* 5. Realistic Animated Burning & Flickering Flame */}
      <g className="animate-flame-flicker" style={{ transformOrigin: "18px 15.5px" }}>
        {/* Outer Radiant Flame */}
        <path
          d="M18 3 C18 3 13.2 8.5 13.2 12 C13.2 14.8 15.3 16.5 18 16.5 C20.7 16.5 22.8 14.8 22.8 12 C22.8 8.5 18 3 18 3 Z"
          fill="url(#outerFlameGrad)"
          filter="drop-shadow(0 0 2.5px rgba(255, 120, 0, 0.9))"
        />

        {/* Inner Luminous Core */}
        <path
          d="M18 6.5 C18 6.5 15.4 10 15.4 12.2 C15.4 14 16.5 15.5 18 15.5 C19.5 15.5 20.6 14 20.6 12.2 C20.6 10 18 6.5 18 6.5 Z"
          fill="url(#innerFlameGrad)"
        />

      {/* White Hot Center Sparkle */}
        <ellipse cx="18" cy="13" rx="1" ry="1.6" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

// Alias to ensure backward compatibility with stale HMR caches
const CandleIcon = RealisticAnimatedDiya;

export default function CandleMarquee() {
  return (
    <div className="w-full bg-[#faf7f2] border-t border-[#761e27]/25 border-b-2 border-[#761e27] py-2 sm:py-2.5 overflow-hidden select-none relative z-20">
      {/* Left/Right subtle gradient fades for continuous blend */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling marquee track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Set 1 */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, index) => (
            <div key={`m1-${index}`} className="flex items-center">
              <span className="font-serif text-xs sm:text-sm md:text-[15px] font-normal tracking-[0.14em] text-[#761e27] whitespace-nowrap">
                {item}
              </span>
              <RealisticAnimatedDiya />
            </div>
          ))}
        </div>

        {/* Set 2 (for seamless loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div key={`m2-${index}`} className="flex items-center">
              <span className="font-serif text-xs sm:text-sm md:text-[15px] font-normal tracking-[0.14em] text-[#761e27] whitespace-nowrap">
                {item}
              </span>
              <RealisticAnimatedDiya />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
