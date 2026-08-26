"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkle, Flame, Heart, Gem } from "lucide-react";

const features = [
  {
    id: 1,
    num: "01",
    title: "Premium Quality",
    description: "Meticulously crafted with 100% organic soy wax and pure cotton wicks for a soot-free, eco-friendly burn.",
    icon: <Sparkle className="w-6.5 h-6.5 stroke-[1.25]" />
  },
  {
    id: 2,
    num: "02",
    title: "Long-Lasting Fragrance",
    description: "Infused with rich essential oils curated by master perfumers to create long-lasting, deep sensory notes.",
    icon: <Flame className="w-6.5 h-6.5 stroke-[1.25]" />
  },
  {
    id: 3,
    num: "03",
    title: "Crafted With Care",
    description: "Each signature vessel is individually hand-poured in micro-batches to guarantee absolute luxury and precision.",
    icon: <Heart className="w-6.5 h-6.5 stroke-[1.25]" />
  },
  {
    id: 4,
    num: "04",
    title: "Made for Moments",
    description: "Designed to evoke distinct memories, invite calm, and elevate the aesthetic harmony of your sanctuaries.",
    icon: <Gem className="w-6.5 h-6.5 stroke-[1.25]" />
  }
];

export default function WhyChooseUs() {
  const [isEntryVisible, setIsEntryVisible] = useState(false);
  const sectionRef = useRef(null);

  // Staggered entry animation on load and scroll
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEntryVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#faf8f5] overflow-hidden relative z-10 border-t border-[#d8bf9c]/25"
    >
      {/* Decorative luxury red gradient glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#761e27]/3 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#761e27]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 px-4">
          {/* Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] mb-3 leading-none">
            WHY TWIN FLAME
          </span>

          {/* Main Title */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#761e27] leading-tight">
            More Than <span className="italic font-serif text-[#b8986c] mr-1">Fragrance.</span> It’s an Experience.
          </h2>

          {/* Ornate Gold Divider */}
          <div className="flex items-center justify-center gap-3.5 my-3 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#d8bf9c]/60" />
            <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
              <span>✦</span>
              <span className="text-[12px] opacity-90 scale-110">✧</span>
              <span>✦</span>
            </div>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#d8bf9c]/60" />
          </div>
        </div>

        {/* Feature Cards Grid (Staggered Entry Animation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            return (
              <div
                key={item.id}
                style={{
                  transitionDelay: `${idx * 120}ms`
                }}
                className={`group bg-[#fefcf9] p-8 rounded-[20px] border border-[#d8bf9c]/35 hover:border-[#d8bf9c] shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(118,30,39,0.12)] hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${
                  isEntryVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                {/* 1. Inset Gold Border Frame (Double-Border Luxury Look) */}
                <div className="absolute inset-3 border border-[#d8bf9c]/25 rounded-[14px] pointer-events-none z-20 transition-colors duration-300 group-hover:border-[#d8bf9c]/55" />

                {/* 2. Floating Card Number (Top-Right) */}
                <div className="absolute top-5 right-5 font-serif italic text-2xl font-bold text-[#d8bf9c]/70 select-none group-hover:scale-105 transition-transform duration-300">
                  {item.num}
                </div>

                {/* Decorative Soft Radial Background Glow on Card Hover */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#761e27]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* 3. Gold Lined Wine-Red Circle Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-[#761e27] border border-[#d8bf9c]/35 flex items-center justify-center text-[#d8bf9c] mb-6 shadow-md group-hover:scale-105 transition-all duration-300 z-10">
                  {item.icon}
                </div>

                {/* 4. Card Title in Serif & Wine Red */}
                <h3 className="font-serif text-lg font-bold text-[#761e27] mb-3 tracking-wide transition-colors duration-300 z-10">
                  {item.title}
                </h3>

                {/* 5. Card Description */}
                <p className="font-sans text-xs md:text-sm text-[#761e27]/75 font-light leading-relaxed px-1 z-10">
                  {item.description}
                </p>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
