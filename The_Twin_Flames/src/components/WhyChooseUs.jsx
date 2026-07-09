"use client";

import React from "react";
import { Sparkles, Wind, Leaf, Gem } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Artisanal Pouring",
    description: "Each candle is individually hand-poured in micro-batches using 100% natural, biodegradable soy wax blends for a slower, cleaner burn.",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Master Perfumery",
    description: "Meticulously layered botanicals and fine essential oils curated by master perfumers to create deep, memorable sensory moods.",
    icon: Wind
  },
  {
    id: 3,
    title: "Eco-Conscious Purity",
    description: "Entirely free from parabens, phthalates, and lead wicks. Enjoy a clean, soot-free aroma that is fully safe for your family and space.",
    icon: Leaf
  },
  {
    id: 4,
    title: "Luxurious Presentation",
    description: "Housed in reusable frosted containers, solid brass vessels, and finished with signature gold lids that instantly elevate any home decor.",
    icon: Gem
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#faf8f5] overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-20 px-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#782029] flex items-center justify-center gap-1.5">
            The Soul of Twin Flame
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black">
            Why Choose Us
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Crafting more than just fragrances. We design clean, sensory experiences that fill your space with light, memory, and warmth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white p-8 rounded-3xl border border-zinc-150/40 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(120,32,41,0.12)] hover:border-[#782029]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden"
              >
                
                {/* Decorative Soft Radial Background Glow on Card Hover */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#782029]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Circle Icon Ring */}
                <div className="w-16 h-16 rounded-full bg-[#fdfbf7] border border-[#782029]/20 group-hover:border-[#782029]/50 group-hover:bg-[#782029] group-hover:text-white flex items-center justify-center text-[#782029] mb-6 shadow-[0_2px_6px_rgba(0,0,0,0.01)] group-hover:scale-105 transition-all duration-500">
                  <Icon className="w-6.5 h-6.5 stroke-[1.25]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-lg font-bold text-luxury-black mb-3 tracking-wide transition-colors duration-300 group-hover:text-[#782029]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
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
