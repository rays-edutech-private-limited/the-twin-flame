"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiSparklingLine,
  RiHeart3Line,
  RiLeafLine,
  RiAwardLine,
  RiFireLine,
  RiTimeLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiDropLine,
  RiGiftLine,
  RiCompass3Line,
  RiEyeLine,
  RiTargetLine,
} from "react-icons/ri";

// Corner Foliage / Botanical Sketch SVG matching site-wide luxury design
const CornerBotanical = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    className="absolute -top-1 -right-1 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none opacity-40 group-hover:opacity-85 transition-opacity duration-500 select-none"
  >
    <defs>
      <linearGradient id="aboutBotanicalGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a88858" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#c8a97e" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    {/* Main Curving Branch Stem */}
    <path
      d="M 160 12 C 135 28, 108 55, 62 108"
      stroke="url(#aboutBotanicalGrad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Leaf 1 - Top outer right */}
    <g>
      <path
        d="M 148 20 C 158 10, 152 2, 138 3 C 132 12, 138 18, 148 20 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 148 20 C 143 12, 139 6, 138 3" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 144 14 C 148 11, 151 10, 152 9" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 141 9 C 137 8, 135 7, 134 6" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 2 - Top branch tip */}
    <g>
      <path
        d="M 126 26 C 124 14, 114 8, 100 10 C 104 22, 116 26, 126 26 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 126 26 C 116 19, 108 14, 100 10" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 120 21 C 122 17, 121 13, 120 12" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 112 16 C 108 17, 105 18, 104 20" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 3 - Upper outward leaflet */}
    <g>
      <path
        d="M 134 34 C 144 31, 150 39, 145 51 C 136 49, 130 41, 134 34 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 134 34 C 138 41, 141 46, 145 51" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 137 40 C 142 38, 145 38, 147 38" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 140 45 C 136 45, 133 46, 132 46" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 4 - Mid branch left */}
    <g>
      <path
        d="M 112 50 C 104 40, 92 40, 80 48 C 90 56, 104 56, 112 50 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 112 50 C 101 47, 90 47, 80 48" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 103 48 C 103 44, 101 42, 99 41" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 94 48 C 93 52, 91 54, 89 55" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 5 - Mid branch right / outward */}
    <g>
      <path
        d="M 114 52 C 124 47, 134 53, 132 67 C 122 67, 115 59, 114 52 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 114 52 C 121 58, 127 62, 132 67" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 118 56 C 124 54, 127 55, 129 55" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 122 61 C 119 63, 117 64, 116 64" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 6 - Lower mid leaflet */}
    <g>
      <path
        d="M 92 72 C 82 65, 70 69, 62 81 C 72 86, 85 81, 92 72 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 92 72 C 81 73, 71 76, 62 81" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 83 73 C 83 69, 81 67, 78 66" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 74 76 C 74 80, 72 82, 70 83" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 7 - Terminal branch tip leaf */}
    <g>
      <path
        d="M 64 104 C 56 99, 46 107, 42 119 C 52 119, 60 113, 64 104 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 64 104 C 56 110, 48 115, 42 119" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
    </g>
  </svg>
);

// Small Golden Candle Flame Icon
const LuxuryCandleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#b8986c]"
    {...props}
  >
    <path
      d="M12 2.5 C11.2 3.8 10 5.2 10 6.8 C10 8 10.9 9 12 9 C13.1 9 14 8 14 6.8 C14 5.2 12.8 3.8 12 2.5 Z"
      fill="#b8986c"
      stroke="#b8986c"
      strokeWidth="0.5"
    />
    <rect x="9" y="9.5" width="6" height="7.5" rx="1" stroke="currentColor" />
    <path d="M6 17.5 L18 17.5 A2 2 0 0 1 16 20.5 L8 20.5 A2 2 0 0 1 6 17.5 Z" stroke="currentColor" />
  </svg>
);

export default function AboutUs() {
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);

  const whyChooseCards = [
    {
      number: "01",
      title: "Thoughtfully Crafted",
      subtitle: "ARTISAN DISCIPLINE",
      desc: "Each candle is individually poured in micro-batches with meticulous temperature control to deliver a rich, evocative fragrance throw and velvet-smooth finish.",
      icon: RiHeart3Line,
    },
    {
      number: "02",
      title: "Botanical Soy Wax",
      subtitle: "100% NON-GMO SOY",
      desc: "We formulate strictly with renewable soy wax and FSC-certified crackling wooden wicks, burning cleanly without soot, parabens, or petroleum paraffin.",
      icon: RiLeafLine,
    },
    {
      number: "03",
      title: "Rare Essential Aromas",
      subtitle: "LAYERED PERFUMERY",
      desc: "Our fragrance architects harmonize top, heart, and ground notes using sustainably harvested essential oils that transform any space into a restorative sanctuary.",
      icon: RiDropLine,
    },
    {
      number: "04",
      title: "Heirloom Presentation",
      subtitle: "BESPOKE GIFT SUITES",
      desc: "Encased in heavyweight thermal glass vessels crowned with laser-engraved wooden lids and presented in gilded luxury boxes made to enchant.",
      icon: RiAwardLine,
    },
  ];

  const craftSteps = [
    {
      number: "01",
      title: "The Olfactory Muse",
      desc: "Every formulation begins with an evocative emotion, drawn from misty rainforests, sun-warmed amber, and intimate moments.",
      icon: RiSparklingLine,
    },
    {
      number: "02",
      title: "Botanical Curation",
      desc: "Rare organic essential oils and sustainably harvested soy wax flakes are carefully selected for purity and therapeutic burn clean.",
      icon: RiLeafLine,
    },
    {
      number: "03",
      title: "Artisanal Pouring",
      desc: "Poured by hand at exact thermal thresholds, ensuring the crackling wooden wicks stay perfectly centered and wax pools uniformly.",
      icon: RiFireLine,
    },
    {
      number: "04",
      title: "Slow Curing",
      desc: "Candles rest in temperature-controlled curing chambers for 14 days, locking the fragrance molecules deeply into the botanical wax.",
      icon: RiTimeLine,
    },
    {
      number: "05",
      title: "The Final Gifting",
      desc: "Each glass vessel is inspected, polished, sealed with our signature wax emblem, and packed into gold-foiled presentation boxes.",
      icon: RiGiftLine,
    },
  ];

  const hallmarks = [
    {
      number: "01",
      title: "Complex Olfactory Architecture",
      desc: "Unlike single-note retail candles, our fragrances are symphonies of top, heart, and base notes that gracefully evolve over hours of burning.",
    },
    {
      number: "02",
      title: "Zero Toxins, Zero Soot",
      desc: "Free from parabens, phthalates, synthetic binders, and toxic paraffin, creating an air-purifying, wellness-forward burn for your family.",
    },
    {
      number: "03",
      title: "Sustainably Sourced Vessels",
      desc: "Designed for eternity—our heavyweight thermal glass jars are infinitely reusable as floral vases, jewelry keepsakes, or bathroom accoutrements.",
    },
    {
      number: "04",
      title: "Soothing Crackling Wicks",
      desc: "Sourced from responsibly managed FSC-certified orchards, our wooden wicks produce a comforting, fireplace-like crackle that centers the soul.",
    },
    {
      number: "05",
      title: "Artisanal Gifting & Seal",
      desc: "Finished with gold-stamped luxury gift cards, bespoke tissue wrapping, and hand-pressed wax seals that turn unboxing into ceremony.",
    },
    {
      number: "06",
      title: "Dedicated Client Concierge",
      desc: "From bespoke wedding favors to private olfactory consultations, our artisans provide personalized guidance for your home aroma suite.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8f4ed] text-[#181112] select-none flex flex-col relative overflow-hidden">
      
      {/* Luxury Atmospheric Ambient Glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-[#d8bf9c]/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -right-20 w-[700px] h-[700px] bg-[#761e27]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[2200px] -left-20 w-[600px] h-[600px] bg-[#d8bf9c]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. LUXURY EDITORIAL BREADCRUMB BANNER                                     */}
      {/* ========================================================================= */}
      <div 
        className="w-full relative pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 flex flex-col items-center justify-center text-center bg-cover bg-center select-none"
        style={{ backgroundImage: `url('/images/breadcrumb.png')` }}
      >
        {/* Balanced soft warm overlay - bright, light and clean */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

        {/* Header Content */}
        <div className="relative z-10 space-y-2 px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight drop-shadow-md"
          >
            About <span className="italic font-serif text-[#d8bf9c]">Us</span>
          </motion.h1>

          {/* Ornate Gold Diamond Accent */}
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#c8a97e]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#c8a97e] bg-[#240407]" />
            <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#c8a97e]" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center gap-2 font-sans text-xs sm:text-[13px] text-zinc-200 font-medium tracking-wider"
          >
            <Link href="/" className="hover:text-[#d8bf9c] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400 font-light">/</span>
            <span className="text-[#d8bf9c] font-medium">About Us</span>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE ATELIER STORY (EDITORIAL 2-COLUMN SANCTUARY)                       */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2d5c5]/80 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-sans uppercase font-bold tracking-[0.28em] text-[#b8986c]">
                The Genesis of Scent
              </span>
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#b8986c] to-transparent" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#181112] tracking-tight leading-[1.18]">
              Crafted to Fill Every <br className="hidden sm:inline" />
              Sanctuary with <span className="italic font-serif text-[#761e27]">Warmth & Presence</span>
            </h2>

            {/* Narrative Prose */}
            <p className="font-sans text-xs sm:text-[14px] text-[#5e5852] leading-relaxed font-light">
              Founded on the reverence of slow craftsmanship, Twin Flame was born from a singular conviction: that a candle is far more than a source of ambient light. It is an olfactory portal that evokes cherished memories, centers the soul, and transforms physical spaces into temples of calm.
            </p>
            <p className="font-sans text-xs sm:text-[14px] text-[#5e5852] leading-relaxed font-light">
              From our artisan studio in Boring Road, Patna, every single vessel is hand-poured in small, numbered batches using pure botanical soy wax, FSC-certified crackling wooden wicks, and sustainably harvested essential oils that linger softly without overpowering.
            </p>

            {/* 3 Hallmark Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/95 border border-[#e2d5c5] rounded-2xl p-4 shadow-2xs group hover:border-[#b8986c] transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#761e27] to-[#420d13] text-[#d8bf9c] border border-[#b8986c]/30 flex items-center justify-center mb-2.5 shadow-xs">
                  <RiHeart3Line className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#181112]">Hand-Poured</h4>
                <p className="font-sans text-[11px] text-[#5e5852] mt-0.5 font-light">Artisanal micro-batch care</p>
              </div>

              <div className="bg-white/95 border border-[#e2d5c5] rounded-2xl p-4 shadow-2xs group hover:border-[#b8986c] transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#761e27] to-[#420d13] text-[#d8bf9c] border border-[#b8986c]/30 flex items-center justify-center mb-2.5 shadow-xs">
                  <RiLeafLine className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#181112]">Botanical Soy</h4>
                <p className="font-sans text-[11px] text-[#5e5852] mt-0.5 font-light">100% soot-free clean burn</p>
              </div>

              <div className="bg-white/95 border border-[#e2d5c5] rounded-2xl p-4 shadow-2xs group hover:border-[#b8986c] transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#761e27] to-[#420d13] text-[#d8bf9c] border border-[#b8986c]/30 flex items-center justify-center mb-2.5 shadow-xs">
                  <RiSparklingLine className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#181112]">Rare Oils</h4>
                <p className="font-sans text-[11px] text-[#5e5852] mt-0.5 font-light">Layered perfumery notes</p>
              </div>
            </div>

            {/* Luxury Quote Card */}
            <div className="relative bg-white/90 border-l-4 border-[#761e27] border-y border-r border-[#e2d5c5] rounded-r-2xl p-5 sm:p-6 shadow-xs overflow-hidden mt-6">
              <span className="absolute top-2 left-3 text-[#d8bf9c]/30 text-5xl font-serif leading-none select-none">“</span>
              <p className="font-serif italic text-xs sm:text-sm text-[#240407] relative z-10 leading-relaxed pl-4 pr-2">
                "More than a candle—it is an invitation to slow down, breathe deeply, and create memories bathed in golden candlelight."
              </p>
              <div className="mt-2 pl-4 flex items-center gap-2">
                <span className="h-[1px] w-6 bg-[#b8986c]" />
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#b8986c] font-semibold">The Twin Flame Atelier</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Photographic Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[480px] flex items-center justify-center">
            
            {/* Background Arch Photo */}
            <div className="absolute left-0 top-2 w-[60%] aspect-[3/4] rounded-t-[36px] rounded-b-[24px] overflow-hidden shadow-xl border border-[#e2d5c5] z-10 bg-[#faf7f2] group">
              <Image
                src="/images/our_products/the_flame_02.jpeg"
                alt="Twin Flame artisanal candle pouring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Foreground Overlapping Photo */}
            <div className="absolute right-0 bottom-2 w-[58%] aspect-[3/4] rounded-t-[36px] rounded-b-[24px] overflow-hidden shadow-2xl border-2 border-white z-20 bg-[#faf7f2] group">
              <Image
                src="/images/our_products/the_flame_01.webp"
                alt="Luxury finished candle vessel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Gold Seal Badge floating on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#ebdcd0] rounded-xl p-2.5 text-center shadow-md">
                <p className="font-serif text-[11px] font-semibold text-[#761e27] uppercase tracking-wider">
                  Artisan Hand-Poured
                </p>
                <p className="font-sans text-[10px] text-[#5e5852] font-light">Small Batch Atelier Edition</p>
              </div>
            </div>

            {/* Delicate Gold Wireframe Background Geometric Halo */}
            <div className="absolute w-[85%] h-[85%] rounded-[48px] border border-[#b8986c]/25 pointer-events-none z-0 rotate-3" />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE TWIN FLAME (4 SIGNATURE HALLMARKS)                          */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2d5c5]/80 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center space-y-2.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#b8986c]" />
              <span className="font-sans text-[11px] uppercase font-bold tracking-[0.28em] text-[#b8986c]">
                Pillars of Excellence
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#b8986c]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
              Why Choose <span className="italic font-serif text-[#761e27]">Twin Flame</span>
            </h2>

            {/* Gold Diamond Accent */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c8a97e]" />
              <span className="text-[#c8a97e] text-xs">✦</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c8a97e]" />
            </div>

            <p className="font-sans text-xs sm:text-[13.5px] text-[#5e5852] font-light max-w-lg mx-auto leading-relaxed pt-1">
              Every curve, wick, and fragrance note is curated without compromise to deliver an extraordinary burn experience.
            </p>
          </div>

          {/* 4 Cards Grid - Styled in Full Harmony with Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {whyChooseCards.map((card, i) => {
              const IconComponent = card.icon;
              const isActive = activeWhyIndex === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveWhyIndex(i)}
                  className={`relative bg-[#fcfaf7] border rounded-[26px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-400 cursor-pointer group ${
                    isActive
                      ? "border-[#b8986c] shadow-[0_16px_40px_rgba(118,30,39,0.12)] -translate-y-1"
                      : "border-[#ebdcd0] shadow-[0_6px_25px_rgba(48,6,10,0.04)] hover:border-[#b8986c]/70 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Subtle Corner Botanical Foliage Sketch */}
                  <CornerBotanical />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Circular Luxury Wine Emblem Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#6b151e] via-[#520f17] to-[#36080e] p-[2px] shadow-[0_4px_16px_rgba(54,8,14,0.3)] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(184,152,108,0.35)] transition-all duration-300">
                      <div className="w-full h-full rounded-full border border-[#d8bf9c]/90 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#d8bf9c]" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif text-[#2c080d] text-lg sm:text-[20px] font-normal tracking-tight text-center mb-1 group-hover:text-[#761e27] transition-colors">
                      {card.title}
                    </h3>

                    {/* Ornate Gold Star Motif */}
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <div className="h-[1px] w-7 sm:w-9 bg-gradient-to-r from-transparent to-[#c8a97e]" />
                      <span className="text-[#c8a97e] text-[10px] leading-none">✦</span>
                      <div className="h-[1px] w-7 sm:w-9 bg-gradient-to-l from-transparent to-[#c8a97e]" />
                    </div>

                    {/* Subtitle */}
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8986c] text-center mb-3">
                      {card.subtitle}
                    </p>

                    {/* Faint Horizontal Divider Line */}
                    <div className="w-full h-[1px] bg-[#ebdcd0]/75 mb-3" />

                    {/* Candle Icon Accent */}
                    <div className="flex justify-center mb-2 text-[#b8986c]">
                      <LuxuryCandleIcon />
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-serif text-[13px] text-[#5c5652] leading-relaxed text-center font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card Bottom Number Pill */}
                  <div className="relative z-10 pt-4 mt-3 border-t border-[#ebdcd0]/70 flex items-center justify-center">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#761e27]">
                      — Pillar {card.number} —
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE ATELIER CRAFT (DEEP VELVET WINE LUXURY PROCESSION)                  */}
      {/* ========================================================================= */}
      <section className="w-full bg-gradient-to-br from-[#260408] via-[#1a0205] to-[#0f0103] py-20 md:py-28 text-white relative overflow-hidden border-y border-[#d8bf9c]/25">
        
        {/* Ambient Gold Dust Glow Spots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-64 bg-[radial-gradient(ellipse_at_center,rgba(216,191,156,0.16),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d8bf9c]/10 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 text-[#d8bf9c]">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#d8bf9c]" />
              <span className="font-sans text-[11px] uppercase font-bold tracking-[0.28em]">
                How We Make Magic
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#d8bf9c]" />
            </div>

            <h2 className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl font-normal tracking-tight text-white leading-none">
              Our <span className="italic font-serif text-[#d8bf9c]">Craft Process</span>
            </h2>

            {/* Gold Star Divider */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d8bf9c]" />
              <span className="text-[#d8bf9c] text-xs">✦</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d8bf9c]" />
            </div>

            <p className="font-sans text-xs sm:text-[13.5px] text-zinc-300 font-light max-w-lg mx-auto leading-relaxed pt-1">
              Every candle is an unhurried pilgrimage of precision, patience, and devotion to olfactory beauty.
            </p>
          </div>

          {/* 5 Connected Step Nodes */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Track */}
            <div className="absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#d8bf9c]/40 to-transparent z-0 hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {craftSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center max-w-[240px] mx-auto group">
                    
                    {/* Circle Node with Number Pill */}
                    <div className="relative w-22 h-22 rounded-full border border-[#d8bf9c]/50 bg-gradient-to-br from-[#38080e] to-[#200407] flex items-center justify-center transition-all duration-400 shadow-xl group-hover:scale-105 group-hover:border-[#d8bf9c] group-hover:shadow-[0_0_30px_rgba(216,191,156,0.3)]">
                      {/* Step Number Tag */}
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#761e27] text-[#d8bf9c] text-[10px] font-bold tracking-wider w-7 h-7 rounded-full flex items-center justify-center border border-[#d8bf9c]/70 shadow-md">
                        {step.number}
                      </span>
                      <StepIcon className="w-8 h-8 text-[#d8bf9c] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-[#d8bf9c] font-normal text-base sm:text-lg tracking-tight mt-5 leading-snug">
                      {step.title}
                    </h3>

                    {/* Diamond Divider */}
                    <div className="flex items-center justify-center gap-1.5 my-2">
                      <span className="w-4 h-[0.5px] bg-[#d8bf9c]/40" />
                      <span className="w-1 h-1 bg-[#d8bf9c] rotate-45" />
                      <span className="w-4 h-[0.5px] bg-[#d8bf9c]/40" />
                    </div>

                    {/* Step Description */}
                    <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed px-1">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Commitment Pill */}
          <div className="mt-14 md:mt-20 border border-[#d8bf9c]/35 rounded-full px-7 py-3 max-w-xl mx-auto flex items-center justify-center bg-white/5 backdrop-blur-md shadow-lg text-center">
            <span className="text-[#d8bf9c] text-[11px] font-serif tracking-[0.2em] uppercase flex items-center gap-2">
              ✦ Handcrafted with heart. Poured with intention. Made to linger. ✦
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MISSION & VISION (DUAL SANCTUARIES OF PURPOSE)                         */}
      {/* ========================================================================= */}
      <section className="w-full py-18 sm:py-24 border-b border-[#e2d5c5]/80 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-20 md:space-y-28">
          
          {/* Row 1: Our Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Text & Features (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#761e27] to-[#420d13] text-[#d8bf9c] border border-[#b8986c]/30 flex items-center justify-center shrink-0 shadow-md">
                  <RiTargetLine className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase font-bold tracking-[0.28em] text-[#b8986c] block">
                    Our Mission
                  </span>
                  <h3 className="font-serif text-2.5xl sm:text-3.5xl text-[#181112] font-normal tracking-tight leading-tight">
                    Spreading Warmth, <span className="italic font-serif text-[#761e27]">One Candle at a Time</span>
                  </h3>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-[14px] text-[#5e5852] leading-relaxed font-light">
                To illuminate homes and awaken the senses through lovingly poured candles that honor nature, inspire mindfulness, and weave golden warmth into everyday rituals. Every creation is our promise of purity, sustainability, and sensory transcendence.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e2d5c5]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiLeafLine className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Natural</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Renewable botanical ingredients</p>
                </div>
                <div className="space-y-1 pl-4 border-l border-[#e2d5c5]">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiHeart3Line className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Artisan</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Hand-poured with passion</p>
                </div>
                <div className="space-y-1 pl-4 border-l border-[#e2d5c5]">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiFireLine className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Clean Burn</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Zero soot, non-toxic flame</p>
                </div>
              </div>
            </div>

            {/* Right Column: Arched Photographic Vessel (5 Cols) */}
            <div className="lg:col-span-5 relative max-w-[340px] w-full mx-auto lg:mr-auto lg:ml-0">
              <div className="absolute -inset-1.5 border border-[#b8986c]/40 rounded-t-full rounded-b-[32px] -translate-x-3 translate-y-3 z-0 pointer-events-none" />
              <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[28px] overflow-hidden border border-[#ebdcd0] shadow-xl z-10 bg-white">
                <Image
                  src="/images/our_products/the_flame_03.jpeg"
                  alt="Twin Flame scented candle presentation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

          </div>

          {/* Row 2: Our Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Arched Photographic Vessel (5 Cols) */}
            <div className="lg:col-span-5 order-last lg:order-first relative max-w-[340px] w-full mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute -inset-1.5 border border-[#b8986c]/40 rounded-t-full rounded-b-[32px] translate-x-3 translate-y-3 z-0 pointer-events-none" />
              <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[28px] overflow-hidden border border-[#ebdcd0] shadow-xl z-10 bg-white">
                <Image
                  src="/images/our_products/the_flame_04.jpeg"
                  alt="Twin Flame candle sanctuary glow"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Right Column: Text & Features (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#761e27] to-[#420d13] text-[#d8bf9c] border border-[#b8986c]/30 flex items-center justify-center shrink-0 shadow-md">
                  <RiEyeLine className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase font-bold tracking-[0.28em] text-[#b8986c] block">
                    Our Vision
                  </span>
                  <h3 className="font-serif text-2.5xl sm:text-3.5xl text-[#181112] font-normal tracking-tight leading-tight">
                    A World Filled with <span className="italic font-serif text-[#761e27]">Light and Serenity</span>
                  </h3>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-[14px] text-[#5e5852] leading-relaxed font-light">
                To establish Twin Flame as India's most cherished artisan parfumerie atelier—setting global benchmarks for sensory design, honest ingredients, and gifting poetry. We envision homes where evening candlelight is not an indulgence, but an essential daily ritual of reconnection.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e2d5c5]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiSparklingLine className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Inspire</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Cultivating daily calm</p>
                </div>
                <div className="space-y-1 pl-4 border-l border-[#e2d5c5]">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiCompass3Line className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Connect</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Uniting loved ones</p>
                </div>
                <div className="space-y-1 pl-4 border-l border-[#e2d5c5]">
                  <div className="flex items-center gap-1.5 text-[#761e27]">
                    <RiShieldCheckLine className="w-4 h-4 text-[#b8986c]" />
                    <h4 className="font-serif text-sm font-semibold text-[#181112]">Sustain</h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#5e5852] font-light">Gentle footprint on earth</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHAT SETS US APART (THE ATELIER PHILOSOPHY GRID)                       */}
      {/* ========================================================================= */}
      <section className="w-full py-18 sm:py-24 border-b border-[#e2d5c5]/80 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Sticky Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-sans uppercase font-bold tracking-[0.28em] text-[#b8986c]">
                  The Standards
                </span>
                <span className="h-[1px] w-8 bg-[#b8986c]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4.5xl font-normal text-[#181112] tracking-tight leading-[1.18]">
                What Sets <br className="hidden lg:block"/>
                <span className="italic font-serif text-[#761e27]">Our Atelier</span> Apart
              </h2>

              <p className="font-sans text-xs sm:text-[13.5px] text-[#5e5852] leading-relaxed font-light">
                We believe authenticity cannot be mass-produced. Every element of our craft is intentionally deliberated, from seed wax to vessel polishing, creating heirloom quality you can tangibly feel.
              </p>

              <div className="pt-2">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#761e27] hover:bg-[#5a141b] text-white font-serif text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md shadow-[#761e27]/20 group"
                >
                  <span>Explore Fragrances</span>
                  <RiArrowRightLine className="w-3.5 h-3.5 text-[#d8bf9c] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 6 Hallmark Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hallmarks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 border border-[#e2d5c5] rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-[#b8986c] transition-all duration-300 group relative flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Roman / Arabic Numeral and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl sm:text-3xl text-[#b8986c] font-normal group-hover:text-[#761e27] transition-colors">
                        {item.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#f8f4ed] border border-[#ebdcd0] flex items-center justify-center text-[#761e27] group-hover:bg-[#761e27] group-hover:text-white transition-colors">
                        <RiSparklingLine className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#181112] mb-2 group-hover:text-[#761e27] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-[13px] text-[#5e5852] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-[#f0e4d7] mt-5 group-hover:bg-[#b8986c] transition-colors" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLOSING SIGNATURE INVITATION                                           */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#260408] via-[#1a0205] to-[#0d0103] text-white border border-[#d8bf9c]/40 rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            
            {/* Ambient Gold Radial */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8bf9c]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 text-[#d8bf9c]">
                <RiSparklingLine className="w-4 h-4" />
                <span className="font-sans text-[11px] uppercase font-bold tracking-[0.28em]">
                  Begin Your Journey
                </span>
                <RiSparklingLine className="w-4 h-4" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
                Invite Warmth into <span className="italic font-serif text-[#d8bf9c]">Your Home</span>
              </h2>

              <p className="font-sans text-xs sm:text-[13.5px] text-zinc-300 font-light leading-relaxed">
                Discover our signature hand-poured candles or reach out to our artisan concierge for bespoke formulations and personalized fragrance suites.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/collections"
                  className="px-8 py-3.5 rounded-full bg-[#d8bf9c] hover:bg-[#c8a97e] text-[#260408] font-serif text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-black/40 hover:scale-[1.02]"
                >
                  Explore Collections
                </Link>
                <Link
                  href="/contactus"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-serif text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Contact Atelier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
