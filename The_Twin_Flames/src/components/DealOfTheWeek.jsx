"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DealOfTheWeek() {
  const [isEntryVisible, setIsEntryVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer to trigger load/scroll entry animations bidirectionally
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEntryVisible(entry.isIntersecting);
      },
      { threshold: 0.12 } // trigger when 12% of the section is visible
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-br from-[#761e27] via-[#521319] to-[#30060a] overflow-hidden select-none relative z-10 border-t border-[#d8bf9c]/25"
    >
      
      {/* Subtle Background Decorative SVG Floral line art */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[320px] h-[420px] md:w-[550px] md:h-[700px] opacity-[0.06] pointer-events-none select-none z-0">
        <svg
          className="w-full h-full text-[#d8bf9c]"
          viewBox="0 0 100 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
        >
          <path d="M100,150 C85,120 70,80 85,30 C75,45 60,60 45,75 C30,90 15,100 0,110" />
          <circle cx="85" cy="30" r="3" />
          <path d="M85,25 C88,20 93,25 85,30" />
          <path d="M85,35 C82,40 77,35 85,30" />
          <path d="M80,30 C75,32 77,27 85,30" />
          <path d="M90,30 C95,28 93,33 85,30" />
          <circle cx="45" cy="75" r="4" />
          <path d="M45,69 C49,63 54,67 45,75" />
          <path d="M45,81 C41,87 36,83 45,75" />
          <path d="M39,75 C33,78 35,71 45,75" />
          <path d="M51,75 C57,72 55,79 45,75" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Arched Image Frame (Lifestyle/Candle Showcase) - Slides in from Left */}
          <div className={`lg:col-span-6 relative flex justify-center items-center transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${
            isEntryVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}>
            
            {/* Soft decorative background leaf vector sketch behind frame */}
            <div className="absolute left-[-10%] top-[-5%] w-[220px] h-[320px] opacity-[0.05] pointer-events-none select-none z-0 rotate-12">
              <svg 
                className="w-full h-full text-[#d8bf9c]" 
                viewBox="0 0 100 150" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.35"
              >
                <path d="M0,150 C20,110 30,70 10,20 C30,35 45,50 60,65 C75,80 85,90 100,100" />
                <circle cx="10" cy="20" r="2.5" />
              </svg>
            </div>

            {/* Arched Dome Container with 3px solid gold border and glow shadow */}
            <div className="relative w-full aspect-[4/5] max-w-[380px] md:max-w-[420px] bg-white rounded-t-full rounded-b-2xl border-[3px] border-[#d8bf9c] overflow-hidden shadow-[0_20px_50px_rgba(216,191,156,0.12)] z-10 transform hover:scale-[1.01] transition-transform duration-500 transform-gpu">
              <Image
                src="/images/our_products/the_flame_01.webp"
                alt="Twin Flame luxury lifestyle candle"
                fill
                sizes="(max-width: 768px) 380px, 420px"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-104"
                priority
              />
            </div>

          </div>

          {/* Right Column: Editorial "Our Story" Content - Slides in from Right */}
          <div className={`lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${
            isEntryVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}>
            
            {/* Header tags */}
            <div className="flex flex-col items-center lg:items-start space-y-3.5">
              {/* A. Small Brand Prefix */}
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] leading-none">
                OUR STORY
              </span>

              {/* B. Main Title with Italic Serif Accent (White text on dark theme) */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-white leading-tight">
                More Than <span className="italic font-serif text-[#d8bf9c] mr-1">Fragrance</span>
              </h2>

              {/* C. Ornate Gold Divider */}
              <div className="flex items-center gap-3.5 w-full justify-center lg:justify-start">
                <div className="h-[1px] w-14 bg-[#d8bf9c]/60" />
                <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
                  <span>✦</span>
                  <span className="text-[12px] opacity-90 scale-110">✧</span>
                  <span>✦</span>
                </div>
                <div className="h-[1px] w-14 bg-[#d8bf9c]/60" />
              </div>
            </div>

            {/* D. Description Paragraphs (zinc-300 for premium readability) */}
            <div className="space-y-4 max-w-lg font-sans text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
              <p>
                At Twin Flame, we believe fragrance is not simply something you smell. It is an emotional landscape, a sanctuary in a jar, and a silent language that binds fleeting moments to everlasting memories.
              </p>
              <p className="font-light text-zinc-400">
                We handcraft each candle using sustainably harvested pure soy wax, hand-braided organic cotton wicks, and botanically sourced essential oils, bringing peace, warmth, and light into your sacred spaces.
              </p>
            </div>

            {/* E. Custom Underlined link button */}
            <div className="pt-4 z-10">
              <Link 
                href="#story" 
                className="group relative inline-flex items-center gap-2 font-serif text-[17px] md:text-[19px] font-bold text-white hover:text-[#d8bf9c] pb-1 transition-colors duration-300 cursor-pointer"
              >
                Our Story
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-sm">→</span>
                {/* Expanding gold underline starting at 32px */}
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#d8bf9c] transition-all duration-500 group-hover:w-full" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
