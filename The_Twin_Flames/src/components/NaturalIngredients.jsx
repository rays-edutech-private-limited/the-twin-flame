"use client";

import React, { useState } from "react";
import Image from "next/image";

// Mock collection panels data using actual paths from the our_products folder
const panels = [
  {
    id: 1,
    title: "Festive Spark",
    desc: "Curated blends designed for special moments and celebrations. Elevate your holiday gatherings.",
    bgImage: "/images/our_products/the_flame_01.webp",
    thumbImage: "/images/our_products/bg_remove_02.png", // double candle transparent
    tag: "FESTIVE COLLECTION",
    btnText: "Explore Offers →",
    href: "#offers"
  },
  {
    id: 2,
    title: "Aroma Serenity",
    desc: "Breathe in the botanical purity of wild lavender and golden sandalwood. Calms the mind and spirit.",
    bgImage: "/images/our_products/the_flame_02.jpeg",
    thumbImage: "/images/our_products/bg_remove_candle.png", // single candle transparent
    tag: "SIGNATURE THERAPY",
    btnText: "Discover Aromas →",
    href: "#aromas"
  },
  {
    id: 3,
    title: "Luxe Gifting",
    desc: "Handcrafted hampers wrapped in custom gold foil cardboard. Perfect for the people you cherish.",
    bgImage: "/images/our_products/the_flame_03.jpeg",
    thumbImage: "/images/our_products/bg_remove_02.png", // double candle transparent
    tag: "LUXURY GIFT SETS",
    btnText: "Find Gifts →",
    href: "#gifting"
  },
  {
    id: 4,
    title: "Organic Soy",
    desc: "100% plant-based soy wax paired with organic cotton wicks for a soot-free, eco-friendly aroma.",
    bgImage: "/images/our_products/the_flame_04.jpeg",
    thumbImage: "/images/our_products/bg_remove_candle.png", // single candle transparent
    tag: "100% ORGANIC PURE",
    btnText: "Shop Organic →",
    href: "#organic"
  },
  {
    id: 5,
    title: "Pure Wellness",
    desc: "Hand-poured wellness essentials crafted to purify and calm your sanctuaries.",
    bgImage: "/images/our_products/the_flame_05.jpeg",
    thumbImage: "/images/our_products/bg_remove_candle.png", // single candle transparent
    tag: "WELLNESS ESSENTIALS",
    btnText: "Explore Wellness →",
    href: "#wellness"
  }
];

export default function NaturalIngredients() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : panels.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < panels.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] overflow-hidden select-none relative z-10 border-t border-[#d8bf9c]/25">
      
      {/* Subtle Background Decorative SVG Floral line art */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[320px] h-[420px] md:w-[550px] md:h-[700px] opacity-15 pointer-events-none select-none z-0">
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

      <div className="absolute left-[-5%] top-[-5%] w-[320px] h-[420px] opacity-10 pointer-events-none select-none z-0 rotate-180">
        <svg
          className="w-full h-full text-[#d8bf9c]"
          viewBox="0 0 100 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
        >
          <path d="M100,150 C85,120 70,80 85,30 C75,45 60,60 45,75 C30,90 15,100 0,110" />
          <circle cx="85" cy="30" r="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block (Responsive margins and fonts) */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-10 md:mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Small Brand Prefix */}
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em] xs:tracking-[0.45em] text-[#d8bf9c] mb-3 leading-none">
              CELEBRATE WITH SOMETHING SPECIAL
            </span>

            {/* Main Title with italic accent */}
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#761e27] leading-tight">
              Celebrate With <span className="italic font-serif text-[#b8986c] mr-1">Something</span> Special
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-xs sm:text-sm tracking-wide text-[#761e27]/80 mt-3 font-medium max-w-xl">
              Seasonal moments deserve thoughtful details. Explore our curated offers and gifting picks...
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#761e27]/30 flex items-center justify-center text-[#761e27] bg-transparent hover:bg-[#761e27] hover:text-white transition-all duration-300 cursor-pointer active:scale-95 text-sm md:text-base"
              aria-label="Previous Slide"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#761e27]/30 flex items-center justify-center text-[#761e27] bg-transparent hover:bg-[#761e27] hover:text-white transition-all duration-300 cursor-pointer active:scale-95 text-sm md:text-base"
              aria-label="Next Slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* 3D Accordion Slider Track (slower transition open timing, expanded mobile height to prevent clipping) */}
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-5 items-stretch justify-center relative min-h-[560px] md:min-h-[480px]">
          {panels.map((panel, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={panel.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group relative rounded-[28px] overflow-hidden cursor-pointer transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${
                  isActive
                    ? "flex-[4.5] md:flex-[4] lg:flex-[3.5] min-w-[260px] xs:min-w-[280px] md:min-w-[460px] border-2 border-[#d8bf9c] shadow-2xl scale-[1.01] -translate-y-0.5 md:-translate-y-1"
                    : "flex-[1] md:flex-[0.7] lg:flex-[0.6] min-w-[50px] md:min-w-[80px] border border-[#761e27]/10 hover:border-[#d8bf9c]/40 opacity-90 hover:opacity-100"
                }`}
              >
                {/* A. Background Image (Always visible on all panels) */}
                <Image
                  src={panel.bgImage}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className={`object-cover transition-all duration-1000 ease-out transform group-hover:scale-106 ${
                    isActive ? "brightness-95" : "brightness-[0.35]"
                  }`}
                />

                {/* B. Soft Wine-Red Tint Overlay for Collapsed Cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#761e27]/50 group-hover:bg-[#761e27]/35 transition-colors duration-500 z-10" />
                )}

                {/* C. Dynamic Overlay Content */}
                {isActive ? (
                  /* Expanded Active Panel Content: Bottom-Right aligned Text content */
                  <div className="absolute inset-0 z-20 flex flex-row items-end justify-end p-5 xs:p-6 md:p-8 gap-4 w-full h-full bg-black/15">
                    
                    {/* Right Side: Wine-Red Glassmorphism Text Card (w-full on mobile, bounded max-w for small S screens) */}
                    <div className="flex flex-col justify-center items-start text-left p-4 xs:p-5 md:p-6 bg-[#761e27]/90 backdrop-blur-md border border-[#d8bf9c]/45 rounded-2xl w-full max-w-[250px] xs:max-w-[280px] md:max-w-[290px] gap-2 md:gap-2.5 shadow-lg animate-fadeIn z-20">
                      <span className="text-[7px] md:text-[8px] font-bold tracking-[0.25em] text-[#d8bf9c] uppercase">
                        {panel.tag}
                      </span>
                      <h3 className="font-serif text-lg xs:text-xl md:text-2xl font-bold text-white tracking-wide leading-none">
                        {panel.title}
                      </h3>
                      <p className="font-sans text-[10px] xs:text-[11px] md:text-xs text-white/90 leading-relaxed font-light">
                        {panel.desc}
                      </p>
                      <a
                        href={panel.href}
                        className="mt-1 px-3.5 py-2 rounded-full bg-[#d8bf9c] hover:bg-[#fbf9f6] text-[#761e27] hover:scale-103 font-bold text-[8px] md:text-[8.5px] tracking-wider uppercase transition-all duration-300"
                      >
                        {panel.btnText}
                      </a>
                    </div>

                  </div>
                ) : (
                  /* Collapsed Inactive Panel Content: Vertical title on Desktop, Horizontal on Mobile to prevent clipping */
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-2 xs:p-3 bg-black/5">
                    <span 
                      className="font-serif font-bold text-xs xs:text-[13px] md:text-[16px] tracking-[0.15em] text-[#d8bf9c] uppercase whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180 text-center"
                    >
                      {panel.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                i === activeIndex 
                  ? "bg-[#761e27] scale-125" 
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
