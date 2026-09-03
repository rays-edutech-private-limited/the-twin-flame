"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Leaf, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  }, []);

  // Continuous Auto-play loop (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[#0a0405] text-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Responsive Height Container */}
      <div className="relative w-full h-[520px] sm:h-[600px] md:h-[650px] lg:h-[720px] overflow-hidden">
        
        {/* Sliding Track */}
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out transform-gpu"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {/* ========================================================================= */}
          {/* SLIDE 1: banner_04.png (CONTENT ON LEFT SIDE)                             */}
          {/* ========================================================================= */}
          <div className="relative min-w-full w-full h-full flex-shrink-0">
            <Image
              src="/images/our_products/banner_04.png"
              alt="Twin Flame Luxury Candlelight"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
            />

            {/* Soft Ambient Left Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10" />

            {/* Content Container (Left Docked) */}
            <div className="relative z-20 h-full w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex flex-col justify-center">
              <div className="w-full max-w-lg lg:max-w-xl space-y-4 sm:space-y-6 pt-4 sm:pt-6 mr-auto text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                
                {/* Headline: The Art of Luxury / Candlelight */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                  The Art of <span className="italic text-[#d8bf9c]">Luxury</span>
                  <span className="italic text-[#d8bf9c] block">Candlelight</span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="font-sans text-xs sm:text-sm md:text-[14.5px] text-zinc-100 font-normal leading-relaxed text-justify drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-lg">
                  Infused with master-curated botanical oils and soothing crackling wooden wicks. Crafted in micro-batches to calm your mind, awaken your senses, and transform every quiet evening into pure tranquility.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 pt-2 sm:pt-3">
                  <Link
                    href="/collections"
                    className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#761e27] hover:bg-[#8e2430] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(118,30,39,0.5)] hover:shadow-[0_6px_28px_rgba(118,30,39,0.7)] hover:scale-105 cursor-pointer border border-[#d8bf9c]/30"
                  >
                    <span>SHOP COLLECTION</span>
                    <ArrowRight className="w-4 h-4 text-[#d8bf9c]" />
                  </Link>

                  <Link
                    href="/about"
                    className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white hover:text-[#d8bf9c] font-sans text-xs sm:text-sm font-medium tracking-[0.1em] inline-flex items-center gap-2 transition-all duration-300 border border-white/25 hover:border-[#d8bf9c]/60 shadow-sm cursor-pointer"
                  >
                    <span>OUR STORY</span>
                  </Link>
                </div>

                {/* Trust Pillars Micro-Bar */}
                <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/15 text-zinc-300 text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>100% Organic Soy Wax</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>60+ Hrs Clean Burn</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>Non Toxic Scents</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SLIDE 2: Banner_5.png (CONTENT DOCKED CLEANLY ON RIGHT SIDE)              */}
          {/* ========================================================================= */}
          <div className="relative min-w-full w-full h-full flex-shrink-0">
            <Image
              src="/images/our_products/Banner_5.png"
              alt="Twin Flame Gentle Flame Candles"
              fill
              sizes="100vw"
              className="object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
            />

            {/* Ambient Right Vignette for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/25 to-black/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10" />

            {/* Content Container (Anchored Far Right in Open Purple Space) */}
            <div className="relative z-20 h-full w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-28 flex flex-col justify-center items-end">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[500px] space-y-4 sm:space-y-6 pt-4 sm:pt-6 text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                
                {/* Headline: Pure Elegance in / Gentle Flame with italic gold 'in' */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                  Pure Elegance <span className="italic text-[#d8bf9c]">in</span>
                  <span className="italic text-[#d8bf9c] block">Gentle Flame</span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="font-sans text-xs sm:text-sm md:text-[14.5px] text-zinc-100 font-normal leading-relaxed text-justify drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  Hand-poured with ethically harvested plant waxes and rare essential oils. Designed to create a soothing aura, melt away the day&apos;s tension, and envelop your home in rich, timeless warmth.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 pt-2 sm:pt-3">
                  <Link
                    href="/collections"
                    className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#761e27] hover:bg-[#8e2430] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(118,30,39,0.5)] hover:shadow-[0_6px_28px_rgba(118,30,39,0.7)] hover:scale-105 cursor-pointer border border-[#d8bf9c]/30"
                  >
                    <span>EXPLORE SCENTS</span>
                    <ArrowRight className="w-4 h-4 text-[#d8bf9c]" />
                  </Link>

                  <Link
                    href="/collections"
                    className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white hover:text-[#d8bf9c] font-sans text-xs sm:text-sm font-medium tracking-[0.1em] inline-flex items-center gap-2 transition-all duration-300 border border-white/25 hover:border-[#d8bf9c]/60 shadow-sm cursor-pointer"
                  >
                    <span>BEST SELLERS</span>
                  </Link>
                </div>

                {/* Trust Pillars Micro-Bar */}
                <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/15 text-zinc-300 text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>Artisanal Micro-Batch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>Pure Essential Oils</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#d8bf9c]" />
                    <span>Eco-Friendly Luxury</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Carousel Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slider Bottom Dot Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 sm:bottom-7 left-1/2 space-x-2 sm:space-x-2.5">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index
                  ? "bg-[#d8bf9c] ring-2 ring-white/60 w-7 sm:w-8 h-2 sm:h-2.5 shadow-md"
                  : "bg-white/40 hover:bg-white/70 w-2.5 sm:w-3 h-2.5 sm:h-3"
              }`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
