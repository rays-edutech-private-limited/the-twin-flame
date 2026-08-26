"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    num: "01",
    icon: "✦",
    tag: "MOOD",
    image: "/images/our_products/the_flame_06.png",
    title: "Shop by Mood",
    href: "#mood"
  },
  {
    num: "02",
    icon: "◇",
    tag: "ROOM",
    image: "/images/our_products/the_flame_02.jpeg",
    title: "Fragrance by Room",
    href: "#room"
  },
  {
    num: "03",
    icon: "♡",
    tag: "GIFT",
    image: "/images/our_products/the_flame_03.jpeg",
    title: "Find a Gift",
    href: "#gift"
  },
  {
    num: "04",
    icon: "✧",
    tag: "OCCASION",
    image: "/images/our_products/the_flame_04.jpeg",
    title: "Shop by Occasion",
    href: "#occasion"
  }
];

export default function Fragrance() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Set up intersection observer to track when section enters and exits viewport
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 md:py-32 bg-[#faf8f5] overflow-hidden select-none border-t border-[#d8bf9c]/25"
    >
      {/* Decorative luxury red gradient glows on white backdrop */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#761e27]/4 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] rounded-full bg-[#761e27]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header - High-end Editorial Luxury Design */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          
          {/* A. Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] mb-3.5 leading-none">
            THE ART OF ESSENTIALS
          </span>

          {/* B. Main Title with italic accent */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#761e27] leading-tight">
            Find Your <span className="italic font-serif text-[#b8986c] mr-1">Perfect</span> Fragrance
          </h2>

          {/* C. Ornate Gold Divider */}
          <div className="flex items-center justify-center gap-3.5 my-4 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#d8bf9c]/60" />
            <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
              <span>✦</span>
              <span className="text-[12px] opacity-90 scale-110">✧</span>
              <span>✦</span>
            </div>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#d8bf9c]/60" />
          </div>

          {/* D. Subtitle */}
          <p className="font-sans text-xs sm:text-sm tracking-widest text-[#761e27]/75 font-medium max-w-xl">
            Shop by the feeling, space, person or occasion.
          </p>
        </div>

        {/* Categories Grid - Symmetrical slide-in animations (2 Left together, 2 Right together) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 pt-4">
          {categories.map((cat, idx) => {
            const isLeft = idx < 2;
            
            // Stagger height offsets on desktop
            const staggerClass = idx % 2 === 0 
              ? "lg:-translate-y-4" 
              : "lg:translate-y-4";

            // Symmetrical slide-in animations with no staggered delay between card pairs
            const animationClass = isVisible
              ? "transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu opacity-100 translate-x-0"
              : `opacity-0 ${isLeft ? "-translate-x-24" : "translate-x-24"} pointer-events-none transform-gpu`;

            return (
              <div
                key={cat.tag}
                className={animationClass}
              >
                <Link
                  href={cat.href}
                  className={`group flex flex-col items-center justify-between p-5 bg-[#761e27] hover:bg-[#8c2530] rounded-[32px] border border-[#d8bf9c]/35 hover:border-[#d8bf9c] shadow-md hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 ease-out min-h-[490px] relative overflow-hidden transform-gpu ${staggerClass}`}
                >
                  {/* A. Elegant Large Background Number (White Tint) */}
                  <div className="absolute right-6 top-6 font-serif text-[4.5rem] font-bold text-white/5 group-hover:text-white/8 leading-none select-none transition-colors duration-500">
                    {cat.num}
                  </div>

                  {/* B. Arched Dome Image Container with 3px solid deep golden border */}
                  <div className="w-full aspect-[3/4] rounded-t-full rounded-b-[24px] overflow-hidden relative border-[3px] border-[#d8bf9c] shadow-inner z-10 mt-1">
                    
                    {/* Floating Category Tag Badge (White Capsule with Wine Red text) */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-[#faf8f5] px-4 py-1.5 rounded-full border border-[#d8bf9c]/35 text-[#761e27] text-[8.5px] font-bold tracking-[0.25em] shadow-md uppercase group-hover:bg-[#fffaf3] transition-colors duration-300">
                      <span className="mr-1 text-[#761e27]">{cat.icon}</span> {cat.tag}
                    </div>

                    <Image
                      src={cat.image}
                      alt={`Shop ${cat.tag.toLowerCase()} luxury candles`}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* C. Category Title Description (Ivory White) */}
                  <div className="flex flex-col items-center w-full mt-6 relative z-10">
                    <h3 className="font-serif text-[18px] xl:text-[20px] font-bold text-[#faf8f5] text-center transition-colors duration-300 group-hover:text-[#d8bf9c]">
                      {cat.title}
                    </h3>

                    {/* D. Gold Accent divider */}
                    <div className="flex items-center justify-center gap-2.5 my-3 w-full opacity-35">
                      <div className="h-[1px] w-6 bg-[#d8bf9c]" />
                      <span className="text-[#d8bf9c] text-[8px]">{cat.icon}</span>
                      <div className="h-[1px] w-6 bg-[#d8bf9c]" />
                    </div>
                  </div>

                  {/* E. Custom Underlined Footer Link (Gold text matching borders) */}
                  <span className="relative font-sans text-[9px] xl:text-[10px] font-bold tracking-[0.22em] uppercase text-[#d8bf9c] group-hover:text-white flex items-center gap-1.5 transition-colors duration-300 mb-2 mt-auto z-10 pb-0.5">
                    Explore 
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    {/* Expanding gold underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d8bf9c] transition-all duration-500 group-hover:w-full" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
