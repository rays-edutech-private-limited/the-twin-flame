"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play, X, Leaf, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVGs for card icons to match the premium design exactly
const DiffuserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M7 14c0-2.8 2.2-5 5-5s5 2.2 5 5v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4Z" />
    <path d="M10 9V7h4v2" />
    <path d="M12 7V2" strokeLinecap="round" />
    <path d="M11 7L7.5 3.5" strokeLinecap="round" />
    <path d="M13 7l3.5-3.5" strokeLinecap="round" />
  </svg>
);

const CandleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="6" y="10" width="12" height="11" rx="2" />
    <path d="M12 10V8" strokeLinecap="round" />
    <path d="M12 3c-1 1.8-1.8 3-1.8 4.2a1.8 1.8 0 0 0 3.6 0C13.8 6 13 4.8 12 3Z" fill="currentColor" />
  </svg>
);

const LotusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M12 21c-1.8-3-1.8-6 0-9.5 1.8 3.5 1.8 6.5 0 9.5Z" />
    <path d="M12 21c-3.5-1-5.5-3.5-5.5-6 0-1.8 1.5-2.5 3-1 1.5 1.5 2 4 2.5 7Z" />
    <path d="M12 21c3.5-1 5.5-3.5 5.5-6 0-1.8-1.5-2.5-3-1-1.5 1.5-2 4-2.5 7Z" />
    <path d="M7 21h10" strokeLinecap="round" />
  </svg>
);

const QualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    <rect x="5" y="8" width="14" height="12" rx="3" />
    <path d="M12 12v3" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.5" fill="currentColor" />
  </svg>
);

const BackgroundLeavesLeft = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#bfa780] opacity-15">
    <path d="M10 10 Q 70 60 110 180" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 25 Q 50 15 45 35 Q 35 45 30 25 Z" fill="currentColor" />
    <path d="M50 45 Q 75 35 65 60 Q 50 65 50 45 Z" fill="currentColor" />
    <path d="M70 70 Q 100 65 85 90 Q 70 95 70 70 Z" fill="currentColor" />
    <path d="M85 105 Q 120 105 100 130 Q 85 130 85 105 Z" fill="currentColor" />
    <path d="M130 40 L132 43 L135 44 L132 45 L130 48 L128 45 L125 44 L128 43 Z" fill="currentColor" opacity="0.6" />
    <path d="M60 120 L61 122 L63 123 L61 124 L60 126 L59 124 L57 123 L59 122 Z" fill="currentColor" opacity="0.6" />
  </svg>
);

const collections = [
  {
    id: 1,
    title: "Signature Candles",
    subtitle: "SOY WAX & ESSENTIAL OILS",
    description: "Crafted with care. Made to inspire.",
    image: "/images/Collection/Collection_1.webp",
    youtubeId: "vyWOHrolfrQ",
    gridSpan: "md:col-span-7",
    buttonBg: "bg-[#e8d4b9] text-[#121212] hover:bg-[#ecd5b9]",
    icon: null
  },
  {
    id: 2,
    title: "Reed Diffusers",
    subtitle: "CONTINUOUS ROOM FRAGRANCE",
    description: "Effortless aroma. Everyday elegance.",
    image: "/images/Collection/collectio_2.webp",
    youtubeId: "TYq2uy4B7qo",
    gridSpan: "md:col-span-5",
    buttonBg: "bg-[#253243]/80 text-white hover:bg-[#2c3d52]/90 backdrop-blur-md border border-white/10",
    icon: <DiffuserIcon />
  },
  {
    id: 3,
    title: "Aroma Candles",
    subtitle: "WARMTH & GLOW",
    description: "Light. Relax. Unwind.",
    image: "/images/Collection/collection_3.webp",
    youtubeId: "6_bUUXyzdVM",
    gridSpan: "md:col-span-5",
    buttonBg: "bg-[#faf8f5]/85 text-[#121212] hover:bg-white backdrop-blur-md border border-white/10",
    icon: <CandleIcon />
  },
  {
    id: 4,
    title: "Wellness Collection",
    subtitle: "CALM & BALANCE",
    description: "For your mind, body & soul.",
    image: "/images/Collection/Collection_4.webp",
    youtubeId: "GQJ2AAQHeCc",
    gridSpan: "md:col-span-7",
    buttonBg: "bg-[#2b4c37]/80 text-white hover:bg-[#345c43]/90 backdrop-blur-md border border-white/10",
    icon: <LotusIcon />
  }
];

const features = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Natural Ingredients",
    subtitle: "Eco-friendly & safe"
  },
  {
    icon: <QualityIcon />,
    title: "Premium Quality",
    subtitle: "Finest fragrance oils"
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Handcrafted",
    subtitle: "Made with love"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Safe & Clean",
    subtitle: "Non-toxic & cruelty free"
  }
];

export default function Collections() {
  const [activeYoutubeId, setActiveYoutubeId] = useState(null);

  return (
    <section className="py-24 bg-luxury-cream relative z-10 overflow-hidden">
      {/* Background Decorative Illustrations */}
      <div className="absolute top-4 left-0 w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-0">
        <BackgroundLeavesLeft />
      </div>
      <div className="absolute top-4 right-0 w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-0 transform scale-x-[-1]">
        <BackgroundLeavesLeft />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center mb-16 space-y-2">
          {/* Decorative central leaf icon */}
          <div className="flex justify-center mb-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#bfa780] opacity-80">
              <path d="M12 2C8.5 6 8.5 10 12 13.5c3.5-3.5 3.5-7.5 0-11.5Z" />
              <path d="M12 13.5c-2.5.5-4.5 2-5.5 4-1-2 0-4.5 2-6 1.5 1.5 2.5 2 3.5 2Z" opacity="0.7" />
              <path d="M12 13.5c2.5.5 4.5 2 5.5 4 1-2 0-4.5-2-6-1.5 1.5-2.5 2-3.5 2Z" opacity="0.7" />
            </svg>
          </div>

          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#bfa780] block">
            Aesthetic Harmony
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black mt-2">
            Curated Collections
          </h2>

          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#bfa780]/60" />
            <span className="text-[#bfa780] text-[8px] transform rotate-45 border border-[#bfa780] p-[2px] bg-luxury-cream"></span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#bfa780]/60" />
          </div>

          <p className="font-sans text-xs md:text-sm text-zinc-500 font-light leading-relaxed max-w-xl mx-auto">
            Discover fragrances tailor-made for each corner of your home, designed to evoke distinct memories and vibes.
          </p>
        </div>

        {/* Asymmetric Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => setActiveYoutubeId(col.youtubeId)}
              className={`relative h-[300px] md:h-[370px] overflow-hidden rounded-[32px] group border border-zinc-200/40 shadow-lg cursor-pointer transition-all duration-500 ${col.gridSpan}`}
            >
              {/* Image Background (Acts as fallback / placeholder) */}
              <img
                src={col.image}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
              />

              {/* Loop YouTube Video Background (Silent, autoplaying, hidden UI elements) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#0c0304]/10">
                <iframe
                  src={`https://www.youtube.com/embed/${col.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${col.youtubeId}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&mute=1`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] md:h-[240%] pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                ></iframe>
              </div>

              {/* Ambient overlays */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-colors duration-500 z-5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-5" />

              {/* Card content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                {/* Top Part: Icon Container if exists */}
                <div>
                  {col.icon ? (
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-md">
                      {col.icon}
                    </div>
                  ) : (
                    <div className="h-11 w-11" />
                  )}
                </div>

                {/* Bottom Part: Text and action buttons */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold text-[#bfa780] uppercase block">
                      {col.subtitle}
                    </span>
                    {/* Gold line separator */}
                    <div className="w-12 h-[1.5px] bg-[#bfa780] mt-2 mb-3.5 transition-all duration-300 group-hover:w-20" />
                    
                    <h3 className="font-serif text-2xl md:text-4xl font-bold tracking-wide text-white leading-tight">
                      {col.title}
                    </h3>
                    
                    <p className="font-sans text-xs md:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Explore Pill Button */}
                    <div className={`rounded-full py-2.5 px-6 flex items-center gap-2 text-xs font-semibold tracking-wider transition-all duration-300 shadow-md transform group-hover:-translate-y-0.5 ${col.buttonBg}`}>
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Circle Arrow Indicator */}
                    <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-20 border-t border-zinc-200/60 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 justify-start sm:justify-center px-4 transition-all duration-300 hover:translate-y-[-2px] ${
                  idx < 3 ? "lg:border-r lg:border-zinc-200/50" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#bfa780]/10 flex items-center justify-center text-[#bfa780] shrink-0 shadow-sm">
                  {feat.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-sm font-semibold text-luxury-black tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-400 font-light mt-0.5 leading-tight">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Popup playing YouTube Video */}
      <AnimatePresence>
        {activeYoutubeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveYoutubeId(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveYoutubeId(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer z-[110]"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Frame - Optimized for YouTube Shorts vertical 9:16 aspect ratio */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[70vh] aspect-[9/16] max-w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black"
              onClick={(e) => e.stopPropagation()} // Prevent close on frame click
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1`}
                title="Twin Flame Category Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

