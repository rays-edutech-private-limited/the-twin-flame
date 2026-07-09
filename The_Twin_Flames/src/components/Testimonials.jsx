"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG components for verified seal and quote marks
const CheckBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#741F27] shrink-0">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
  </svg>
);

const QuoteWatermark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#741F27]/10 pointer-events-none select-none">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.6 9.314-10.609l.996 1.951c-3.799 1.162-6.286 4.41-6.286 8.24h7v7.809h-11.025zm-14.017 0v-7.391c0-5.704 3.748-9.6 9.314-10.609l.996 1.951c-3.799 1.162-6.286 4.41-6.286 8.24h7v7.809h-11.025z" />
  </svg>
);

const reviews = [
  {
    id: 1,
    name: "Dianne Vance",
    rating: 5,
    quote: "The fragrance is divine! It lasts all day long and gets me compliments everywhere. Absolutely my new signature scent.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Julian Mercer",
    rating: 5,
    quote: "I'm in love with the bottle, the scent, everything! Perfect balance of elegance and freshness. Highly recommend it.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Seraphina Sterling",
    rating: 5,
    quote: "Such a beautiful and unique fragrance. It's now my go-to perfume for every occasion. Truly worth it!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive layout tracking
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#faf8f5] to-white relative z-10 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#741F27]/3 blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#741F27]/3 blur-[120px] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-16 px-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#741F27] flex items-center justify-center gap-1.5">
            ★ CUSTOMER REVIEWS ★
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black leading-tight">
            Loved By Fragrance <br />
            <span className="text-[#741F27]">Lovers</span>
          </h2>
          
          {/* Heart Divider */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#741F27]/30" />
            <span className="text-[#741F27] text-xs">❤</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#741F27]/30" />
          </div>

          <p className="font-sans text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
            Real stories from real people who fell in love with our fragrances and made them a part of their everyday.
          </p>
        </div>

        {/* Testimonials Slider Wrapper */}
        <div className="relative overflow-hidden w-full py-4">
          <motion.div
            className="flex md:grid md:grid-cols-3 gap-8 md:gap-10 w-full"
            animate={{
              x: isMobile ? `calc(-${currentIndex * 100}% - ${currentIndex * 32}px)` : "0%"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {reviews.map((rev, index) => {
              const isHighlighted = isMobile ? index === currentIndex : true;
              return (
                <div
                  key={rev.id}
                  className={`w-full shrink-0 md:shrink md:w-auto bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 flex flex-col justify-between ${
                    isHighlighted
                      ? "border-[#741F27]/20 shadow-[0_15px_40px_rgba(116,31,39,0.04)] scale-[1.01]"
                      : "border-zinc-200/40 shadow-[0_10px_35px_rgba(0,0,0,0.015)] opacity-50"
                  }`}
                >
                  <div className="space-y-6 relative">
                    
                    {/* Quotation mark in top right */}
                    <div className="absolute top-0 right-0">
                      <QuoteWatermark />
                    </div>

                    {/* Wine-red Rating Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#741F27] fill-[#741F27]" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-sans text-xs md:text-[13.5px] text-zinc-700 font-light leading-relaxed pr-8">
                      {rev.quote}
                    </p>

                  </div>

                  {/* Reviewer details at bottom */}
                  <div className="pt-6 border-t border-zinc-100 mt-8 flex items-center gap-4">
                    
                    {/* Double-ring portrait image container */}
                    <div className="relative w-12 h-12 rounded-full p-0.5 border border-[#741F27]/20 bg-[#faf8f5]">
                      <div className="relative w-full h-full rounded-full overflow-hidden border border-[#d8bf9c]/60">
                        <Image
                          src={rev.avatar}
                          alt={`${rev.name} Portrait`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="font-serif text-sm font-bold text-luxury-black">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] tracking-[0.2em] text-[#741F27] uppercase font-extrabold leading-none">
                          Verified Buyer
                        </span>
                        <CheckBadgeIcon />
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Slider Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#741F27]/25 flex items-center justify-center text-[#741F27] hover:bg-[#741F27]/5 hover:border-[#741F27]/50 transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-4 h-2 bg-[#741F27]"
                    : "w-2 h-2 bg-[#741F27]/25 hover:bg-[#741F27]/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#741F27]/25 flex items-center justify-center text-[#741F27] hover:bg-[#741F27]/5 hover:border-[#741F27]/50 transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}

