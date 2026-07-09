"use client";

import React from "react";
import Image from "next/image";
import { Flame, Heart, ShieldCheck, Leaf, Sparkles } from "lucide-react";

const ingredients = [
  {
    id: 1,
    title: "Paraffin & Petroleum Free",
    description: "Indulge in pure soy wax entirely free of paraffin, derived from sustainable crops for a clean, non-toxic, eco-safe burn.",
    icon: Flame
  },
  {
    id: 2,
    title: "100% Cruelty-Free",
    description: "Crafted with respect for all life. Zero animal testing or animal-derived ingredients in any stage of our production.",
    icon: Heart
  },
  {
    id: 3,
    title: "Zero Phthalates",
    description: "Enjoy deep, rich fragrances formulated without hazardous binders, phthalate solvents, or synthetic release agents.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Pure Plant-Based Vegan",
    description: "100% organic soy wax blends paired with hand-braided natural cotton wicks for a sustainable, green aroma.",
    icon: Leaf
  }
];

export default function NaturalIngredients() {
  return (
    <section 
      className="py-28 bg-gradient-to-b from-white via-[#faf0f1] to-white text-luxury-black overflow-hidden relative z-10 border-b border-zinc-100"
      style={{
        backgroundImage: "url('/images/bg_floral.png')",
        backgroundSize: "contain",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* Background Decorative SVG Floral line art */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[400px] md:w-[500px] md:h-[650px] opacity-20 pointer-events-none select-none z-0">
        <svg
          className="w-full h-full text-[#d8bf9c]/40"
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
          <path d="M68,55 C60,48 55,50 68,55 Z" fill="currentColor" fillOpacity="0.03" />
          <path d="M25,88 C18,92 20,98 25,88 Z" fill="currentColor" fillOpacity="0.03" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Purity checklist */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header with luxury styling */}
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#782029] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Pure Soy Wax Scenting
              </span>
              <h2 className="font-serif text-[15px] sm:text-2.5xl md:text-3.5xl lg:text-[40px] font-bold tracking-tight text-luxury-black whitespace-nowrap">
                Eco-Friendly & Natural Ingredients
              </h2>
              {/* Luxury gradient line separator */}
              <div className="w-20 h-[2.5px] bg-gradient-to-r from-[#782029] to-[#d8bf9c]/60 mt-6" />
            </div>

            {/* Checklist items in premium cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {ingredients.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className="flex flex-col p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-zinc-150/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(120,32,41,0.05)] hover:border-[#782029]/20 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    
                    {/* Outline Icon Wrapper */}
                    <div className="w-12 h-12 rounded-full border border-[#782029]/20 bg-[#fdfbf7] flex items-center justify-center text-[#782029] group-hover:bg-[#782029] group-hover:text-white transition-all duration-300 mb-5 flex-shrink-0">
                      <Icon className="w-5.5 h-5.5 stroke-[1.25]" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-base font-bold text-luxury-black group-hover:text-[#782029] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[12px] text-zinc-500 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Arched product showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Outer double border arched frame container */}
            <div className="relative w-full aspect-[4/5] max-w-[350px] rounded-t-full border border-[#d8bf9c]/30 p-4 bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-visible">
              
              {/* Spinning luxury brand badge seal (Top-Left) */}
              <div className="absolute -top-4 -left-4 w-22 h-22 rounded-full border border-[#d8bf9c]/40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center shadow-lg z-20 hover:scale-105 transition-transform duration-300">
                <span className="text-[7.5px] font-bold tracking-[0.25em] text-[#782029] uppercase text-center font-serif leading-tight">
                  Pure<br/>Organic
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#782029] mt-1 shadow-sm" />
              </div>

              {/* Verified badge seal (Bottom-Right) */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-[#d8bf9c]/20 bg-[#fdfbf7]/90 backdrop-blur-sm flex items-center justify-center shadow-md z-20 text-[7px] font-bold tracking-[0.25em] text-zinc-400 uppercase text-center font-sans leading-tight">
                Hand Poured<br/>in India
              </div>

              {/* Inner arched image frame */}
              <div className="relative w-full h-full rounded-t-full border border-[#782029]/15 overflow-hidden">
                <Image
                  src="/images/Collection/Collection_4.webp"
                  alt="Natural Ingredients Gift Set Showcase"
                  fill
                  sizes="(max-width: 768px) 350px, 450px"
                  className="object-cover rounded-t-full transition-transform duration-1000 hover:scale-104"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
