"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Divya Iyer",
    role: "Verified Buyer",
    rating: 5,
    quote: "The fragrance is divine! It lasts all day long and gets me compliments everywhere. Absolutely my new signature scent. Twin Flame has completely changed how I think about soy wax candles.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=350&auto=format&fit=crop",
    linkText: "Read Divya's Story"
  },
  {
    id: 2,
    name: "Kabir Mehta",
    role: "Verified Buyer",
    rating: 5,
    quote: "I'm in love with the bottle, the scent, everything! Perfect balance of elegance and freshness. These are handcrafted masterperfumer notes. Highly recommend it to anyone seeking true aesthetic harmony.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=350&auto=format&fit=crop",
    linkText: "Read Kabir's Story"
  },
  {
    id: 3,
    name: "Riya Sen",
    role: "Verified Buyer",
    rating: 5,
    quote: "Such a beautiful and unique fragrance. It's now my go-to perfume for every occasion. Truly worth it! The double border gold presentation matches my luxury shelf perfectly.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=350&auto=format&fit=crop",
    linkText: "Read Riya's Story"
  },
  {
    id: 4,
    name: "Aman Sharma",
    role: "Verified Buyer @AmanTheSign",
    rating: 5,
    quote: "At Twin Flame, the craftsmanship is more than fragrance, it's an absolute emotional landscape. A single candle transforms my entire living space. The 3D layout of the jar is gorgeous.",
    avatar: "/images/our_products/the_flame_03.jpeg",
    linkText: "Read Aman's Story"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0
  })
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  
  const isScrollingRef = useRef(false);
  const containerRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);

  // Sync index ref to avoid stale closures in event listener
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Debounced wheel listener: scrolls cards 1-by-1, but unlocks scroll at boundaries to scroll the page
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const activeIdx = currentIndexRef.current;

      // 1. Scrolling Down (e.deltaY > 0)
      if (e.deltaY > 0) {
        // If we are at the last card, let the scroll pass to scroll down the page
        if (activeIdx === reviews.length - 1) {
          return; 
        }
        
        // Otherwise, lock page scroll and slide cards
        e.preventDefault();
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
      } 
      // 2. Scrolling Up (e.deltaY < 0)
      else if (e.deltaY < 0) {
        // If we are at the first card, let the scroll pass to scroll up the page
        if (activeIdx === 0) {
          return;
        }

        // Otherwise, lock page scroll and slide cards
        e.preventDefault();
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
      }

      // 700ms cooldown to match slide animation timings
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-[#761e27] via-[#521319] to-[#30060a] overflow-hidden relative z-10 border-t border-[#d8bf9c]/25">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#761e27]/3 blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#761e27]/3 blur-[120px] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
          {/* Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] mb-3 leading-none">
            CUSTOMER REVIEWS
          </span>

          {/* Main Title (White on dark theme) */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-white leading-tight">
            Loved By Fragrance <span className="italic font-serif text-[#d8bf9c] mr-1">Lovers</span>
          </h2>
          
          {/* Heart Divider */}
          <div className="flex items-center justify-center gap-3.5 my-3 w-full">
            <div className="h-[1px] w-14 bg-[#d8bf9c]/60" />
            <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
              <span>✦</span>
              <span className="text-[12px] opacity-90 scale-110">✧</span>
              <span>✦</span>
            </div>
            <div className="h-[1px] w-14 bg-[#d8bf9c]/60" />
          </div>

          <p className="font-sans text-xs sm:text-sm tracking-wide text-zinc-300/90 font-medium max-w-xl">
            Real stories from real people who fell in love with our fragrances and made them a part of their everyday life.
          </p>
        </div>

        {/* Viewport container wrapping the active sliding card */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto px-0 md:px-12 min-h-[420px] md:min-h-[300px] flex items-center justify-center select-none"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeReview.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full bg-white rounded-[32px] border border-[#d8bf9c]/35 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-8 pt-16 md:pt-10 md:pl-[310px] md:pr-14 md:py-12 min-h-[330px] md:min-h-[270px] flex flex-col justify-center items-start transform-gpu"
            >
              {/* 1. Inset Double Border Frame */}
              <div className="absolute inset-3.5 border border-[#d8bf9c]/20 rounded-[20px] pointer-events-none z-0" />

              {/* 2. Offset Floating Card Image (screenshot look: hangs left on desktop, top-centered on mobile) */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:-left-12 w-28 h-28 md:w-[260px] md:h-[260px] rounded-full md:rounded-[24px] overflow-hidden shadow-2xl border-2 border-[#d8bf9c] z-10 bg-[#faf8f5] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={activeReview.avatar}
                  alt={`${activeReview.name} Portrait`}
                  fill
                  sizes="(max-width: 768px) 112px, 260px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* 3. Right Side: Card details */}
              <div className="w-full space-y-4 md:space-y-5 text-center md:text-left relative z-10 pl-0">
                
                {/* Quotation watermark icon */}
                <div className="absolute top-0 right-0 opacity-15 text-[#761e27] hidden md:block">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Subtitle Role details */}
                <div className="space-y-1">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#d8bf9c] uppercase block">
                    {activeReview.role}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#761e27] leading-none">
                    {activeReview.name}
                  </h3>
                </div>

                {/* Star rating row */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#d8bf9c] fill-[#d8bf9c]" />
                  ))}
                </div>

                {/* Quote description */}
                <p className="font-sans text-xs md:text-[13.5px] text-[#761e27]/85 font-light leading-relaxed pr-0 md:pr-10">
                  "{activeReview.quote}"
                </p>

                {/* Wine-Red Pill Action Button (similar to More on LinkedIn button in screenshot) */}
                <div className="pt-2 flex justify-center md:justify-start">
                  <button className="px-6 py-2.5 bg-[#761e27] hover:bg-[#8c2530] text-[#faf8f5] hover:text-[#d8bf9c] font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-md hover:scale-103 transition-all duration-300 cursor-pointer">
                    {activeReview.linkText}
                  </button>
                </div>

              </div>

              {/* 4. Vertical Slide Dash Indicators (right side of card) */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-1.5 hidden md:flex z-20 select-none">
                {reviews.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-[3px] transition-all duration-300 rounded-full ${
                      idx === currentIndex ? "h-6 bg-[#761e27]" : "h-2.5 bg-zinc-200"
                    }`}
                  />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe/Scroll Help Label */}
        <div className="flex items-center justify-center gap-1.5 text-zinc-400/80 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase select-none mt-4">
          <span>SCROLL MOUSEWHEEL OR SWIPE TO SLIDE</span>
        </div>

        {/* Slider Action Arrow Buttons below the card wrapper */}
        <div className="flex items-center justify-center gap-5 mt-6">
          
          {/* Left Arrow button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-[#d8bf9c]/35 flex items-center justify-center text-white bg-transparent hover:bg-[#d8bf9c] hover:text-[#761e27] transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Page Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-5 h-2 bg-[#d8bf9c]"
                    : "w-2 h-2 bg-white/20 hover:bg-[#d8bf9c]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow button */}
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-[#d8bf9c]/35 flex items-center justify-center text-white bg-transparent hover:bg-[#d8bf9c] hover:text-[#761e27] transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}
