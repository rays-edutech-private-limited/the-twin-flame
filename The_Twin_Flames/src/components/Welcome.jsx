"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121212] select-none relative overflow-hidden border-b border-[#e8dfd5]">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#faf5ee] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#f6eee4] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE: LARGE LUXURY IMAGE SHOWCASE                                    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Luxury Frame */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-[#d8bf9c]/60 shadow-xl group">
              <Image
                src="/images/our_products/the_flame_07.png"
                alt="Artisan handpoured Twin Flame luxury candles"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Inset Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#761e27] uppercase block">
                    ARTISANAL CRAFTSMANSHIP
                  </span>
                  <span className="font-serif text-sm font-semibold text-zinc-900">
                    100% Hand-Poured in Small Batches
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#761e27] text-white flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#f8eddc]" />
                </span>
              </div>
            </div>


          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: EDITORIAL BRAND NARRATIVE & PILLARS                           */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Main Editorial Title in Serif */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal text-[#181112] tracking-tight leading-[1.14] mb-3">
              Welcome to <span className="italic font-serif text-[#761e27]">The Twin Flame</span>
            </h2>

            {/* Delicate Luxury Gold Accent Line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1.5px] w-12 bg-[#b8986c]" />
              <span className="text-[#b8986c] text-[10px]">✦</span>
              <div className="h-[1px] w-8 bg-[#d8bf9c]/60" />
            </div>

            {/* Narrative Paragraph */}
            <p className="font-sans text-xs sm:text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal mb-6">
              Born from a passion for mindful living and sensory artistry, <strong>The Twin Flame</strong> crafts hand-poured luxury candles, reed diffusers, and botanical wax melts. Every creation is thoughtfully infused with pure essential oils, organic soy wax, and soothing crackling wooden wicks to transform ordinary spaces into warm, tranquil sanctuaries.
            </p>

            {/* 3 Luxury Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Pillar 1 */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] flex flex-col gap-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#f4ebe1] text-[#761e27] flex items-center justify-center mb-1">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-zinc-900">
                  100% Plant Wax
                </h4>
                <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                  Clean-burning, non-toxic organic soy with zero paraffin or synthetic additives.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] flex flex-col gap-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#f4ebe1] text-[#761e27] flex items-center justify-center mb-1">
                  <Flame className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-zinc-900">
                  Crackling Wicks
                </h4>
                <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                  Sustainably sourced natural wooden wicks offering an ambient fireplace glow.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] flex flex-col gap-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#f4ebe1] text-[#761e27] flex items-center justify-center mb-1">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-zinc-900">
                  Master Blended
                </h4>
                <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                  Complex aromatic notes curated to soothe the mind and elevate everyday rituals.
                </p>
              </div>
            </div>

            {/* CTA Button & Trust Highlight */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="#all-products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#761e27] hover:bg-[#8c2530] text-white font-sans text-xs font-bold uppercase tracking-[0.25em] shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <span>Discover The Collection</span>
                <ArrowRight className="w-4 h-4 text-[#f8eddc] group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cruelty-Free • Sustainable • Handcrafted</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
