"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Flame, Leaf, Gem } from "lucide-react";

const features = [
  {
    id: 1,
    num: "01",
    tag: "SOOT-FREE PURITY",
    title: "100% Organic Soy Wax",
    description:
      "Crafted exclusively from pure, renewable botanical plant waxes with lead-free cotton wicks for a clean, non-toxic burn.",
    icon: <Leaf className="w-5 h-5" />,
    badgeColor: "bg-[#fbf5ee] text-[#8e6c3e] border-[#ebd8c2]",
  },
  {
    id: 2,
    num: "02",
    tag: "MASTER PERFUMERY",
    title: "Master-Blended Fragrances",
    description:
      "Steeped with authentic IFRA-compliant essential oils for an evocative scent throw that gently fills your living space.",
    icon: <Flame className="w-5 h-5" />,
    badgeColor: "bg-[#fcf4f4] text-[#761e27] border-[#f0d6d6]",
  },
  {
    id: 3,
    num: "03",
    tag: "HANDCRAFTED IN INDIA",
    title: "Artisanal Micro-Batching",
    description:
      "Every signature vessel is individually hand-poured, cured, and precision-inspected to ensure peerless luxury standards.",
    icon: <Gem className="w-5 h-5" />,
    badgeColor: "bg-[#f8f4fb] text-[#6d4b82] border-[#e6d8ee]",
  },
  {
    id: 4,
    num: "04",
    tag: "CALMING SANCTUARY",
    title: "Curated Mindful Rituals",
    description:
      "Thoughtfully created to calm the mind, ground your emotions, and add warm atmospheric radiance to every room.",
    icon: <Sparkles className="w-5 h-5" />,
    badgeColor: "bg-[#fcf7ee] text-[#916b2a] border-[#eedfc0]",
  },
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
      { threshold: 0.12 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-28 bg-[#faf8f5] overflow-hidden relative z-10 border-t border-[#ebdcd0]"
    >
      {/* Radiant ambient luxury glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#d8bf9c]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#761e27]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 px-4">
          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Why Choose <span className="font-serif text-[#761e27]">Twin Flame</span>
          </h2>

          {/* Ornate Gold Botanical Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#b8986c]" />
            <span className="text-[#b8986c] text-[12px]">❖</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#b8986c]" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-[13.5px] text-zinc-500 max-w-xl font-normal tracking-wide leading-relaxed">
            Purity in every ingredient, soul in every pour. Discover the thoughtful craftsmanship that elevates our home aromatics into sacred daily rituals.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4 ARTISANAL PILLARS GRID (Staggered Interactive Luxury Cards)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {features.map((item, idx) => {
            return (
              <div
                key={item.id}
                style={{
                  transitionDelay: `${idx * 110}ms`,
                }}
                className={`group bg-white rounded-3xl p-6 sm:p-7 border border-[#ebdcd0] hover:border-[#b8986c] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(118,30,39,0.09)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col justify-between transform-gpu ${
                  isEntryVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
              >
                {/* Top Subtle Shimmer Border Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#761e27] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Soft Radial Ambient Corner Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#761e27]/4 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div>
                  {/* Top Row: Dual-Tone Icon Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#761e27] to-[#501319] text-[#eed5b9] flex items-center justify-center shadow-md border border-[#d8bf9c]/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {item.icon}
                    </div>

                    <span className="font-serif text-2xl font-normal text-[#d8bf9c]/70 select-none group-hover:text-[#761e27] transition-colors duration-300">
                      {item.num}
                    </span>
                  </div>

                  {/* Micro Tag */}
                  <div className="mb-2.5 relative z-10">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full border text-[9px] sm:text-[9.5px] font-bold tracking-wider uppercase font-sans ${item.badgeColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-[19px] font-bold text-[#181112] group-hover:text-[#761e27] transition-colors duration-300 mb-2.5 leading-snug relative z-10">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-normal relative z-10">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Accent Link Indicator */}
                <div className="pt-4 mt-4 border-t border-[#f2e7dc] flex items-center justify-between relative z-10 text-[11px] text-[#b8986c] font-sans font-semibold">
                  <span className="tracking-wide">Artisan Certified</span>
                  <span className="text-[#761e27] group-hover:translate-x-1 transition-transform duration-300">
                    ✦
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


