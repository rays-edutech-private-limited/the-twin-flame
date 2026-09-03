"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Clock,
  ShoppingBag,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Gift,
} from "lucide-react";

// 3 High-resolution luxury slider images from our_products
const dealImages = [
  {
    id: 1,
    src: "/images/our_products/the_flame_07.png",
    name: "Imperial Spiced Amber & Vetiver",
    tag: "35% OFF • LIMITED EDITION",
  },
  {
    id: 2,
    src: "/images/our_products/the_flame_06.png",
    name: "Kashmiri Rose & Golden Nectar",
    tag: "SIGNATURE BLEND • BEST DEAL",
  },
  {
    id: 3,
    src: "/images/our_products/the_flame_01.webp",
    name: "Midnight Oud & Smoked Vanilla",
    tag: "HERITAGE COLLECTOR'S DUO",
  },
];

export default function DealOfTheWeek() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Live Countdown Timer (Days, Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 59,
    seconds: 54,
  });

  // Countdown timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3-Image Auto Slider Interval (Paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const sliderInterval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % dealImages.length);
    }, 3800);
    return () => clearInterval(sliderInterval);
  }, [isHovered]);

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? dealImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % dealImages.length);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

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
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f3ec] text-[#121212] select-none relative overflow-hidden border-y border-[#ebdcd0]">
      {/* Radiant warm luxury ambient background glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[550px] bg-[#d8bf9c]/20 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-[#761e27]/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL OFFER DETAILS                                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Top Badge: Circle Flame Icon + Text */}
            <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f1e5d6] border border-[#e4d3bf] text-[#761e27] flex items-center justify-center shadow-xs shrink-0">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#761e27]" />
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.24em] text-[#8a6839] font-sans">
                OFFER OF THE WEEK
              </span>
            </div>

            {/* Main Editorial Title */}
            <h2 className="font-serif text-2xl sm:text-3.5xl md:text-[2.65rem] lg:text-[2.85rem] font-normal text-[#181112] tracking-tight leading-[1.18] sm:leading-tight mb-1">
              The Heritage <span className="italic font-serif text-[#761e27]">Aromatics Set</span>
            </h2>

            {/* Ornate Florentine Gold Divider Motif */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 my-3 sm:my-4">
              <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#c8a97e]" />
              <div className="flex items-center text-[#b8986c] text-[11px] sm:text-[13px]">
                <span>❖</span>
              </div>
              <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#c8a97e]" />
            </div>

            {/* Narrative Paragraph */}
            <p className="font-sans text-xs sm:text-[13.5px] text-zinc-600 leading-relaxed font-normal mb-4 sm:mb-5 max-w-lg">
              Indulge in our limited-edition grand master blend featuring aged smoked oud, liquid amber crystals, and cracked Madagascar cinnamon with soothing double wooden wicks.
            </p>

            {/* Large Price Box with Solid Wine Red Savings Badge */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 p-3.5 sm:p-5 rounded-2xl bg-[#faf6f0] border border-[#ebdcd0] shadow-xs max-w-md w-full">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-bold text-[#5d171e]">
                  ₹1,899
                </span>
                <span className="font-serif text-xs sm:text-base text-zinc-400 line-through">
                  ₹2,899
                </span>
              </div>

              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#5d171e] text-white font-sans text-[9.5px] sm:text-[11px] font-bold tracking-wide shadow-xs shrink-0">
                Save ₹1,000 (35% OFF)
              </span>
            </div>

            {/* Countdown Section */}
            <div className="mb-5 sm:mb-6 max-w-md w-full">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8a6839] mb-2 sm:mb-2.5 font-sans">
                <Clock className="w-3.5 h-3.5 text-[#b8986c]" />
                <span>OFFER EXPIRES IN:</span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {/* Days */}
                <div className="py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl bg-[#faf6f0] border border-[#ebdcd0] text-center shadow-xs">
                  <span className="font-serif text-lg sm:text-2xl font-bold text-[#5d171e] block leading-none mb-1">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-bold">
                    DAYS
                  </span>
                </div>

                {/* Hours */}
                <div className="py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl bg-[#faf6f0] border border-[#ebdcd0] text-center shadow-xs">
                  <span className="font-serif text-lg sm:text-2xl font-bold text-[#5d171e] block leading-none mb-1">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-bold">
                    HOURS
                  </span>
                </div>

                {/* Mins */}
                <div className="py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl bg-[#faf6f0] border border-[#ebdcd0] text-center shadow-xs">
                  <span className="font-serif text-lg sm:text-2xl font-bold text-[#5d171e] block leading-none mb-1">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-bold">
                    MINS
                  </span>
                </div>

                {/* Secs */}
                <div className="py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl bg-[#faf6f0] border border-[#ebdcd0] text-center shadow-xs">
                  <span className="font-serif text-lg sm:text-2xl font-bold text-[#5d171e] block leading-none mb-1">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-bold">
                    SECS
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action Row: [CLAIM DEAL] + [GIFT BOX PACKAGING] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1 max-w-md w-full">
              <button
                onClick={handleAddToCart}
                className={`w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer ${
                  isAdded
                    ? "bg-emerald-600 text-white"
                    : "bg-[#5d171e] hover:bg-[#761e27] text-white"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added To Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#f8eddc]" />
                    <span>CLAIM DEAL • ₹1,899</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-zinc-600 font-sans">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#faf6f0] border border-[#ebdcd0] flex items-center justify-center shrink-0 shadow-xs">
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#761e27]" />
                </span>
                <span className="leading-tight text-[10.5px] sm:text-[11px] text-zinc-600 font-medium text-left">
                  Includes Free Luxury <br className="hidden sm:inline" /> Gift Box Packaging
                </span>
              </div>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3-IMAGE SLIDER SHOWCASE WITH TOUCH SWIPE                    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-6 relative flex flex-col items-center w-full"
          >
            {/* Large Luxury Image Stage */}
            <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/3.8] lg:aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#d8bf9c] shadow-xl sm:shadow-2xl bg-white group">
              
              {/* Animated Slide Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={dealImages[activeImageIndex].id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={dealImages[activeImageIndex].src}
                    alt={dealImages[activeImageIndex].name}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-2.5 sm:px-3.5 py-1 rounded-full text-[8.5px] sm:text-[9px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase shadow-md bg-[#5d171e] text-[#f8eddc] border border-[#d8bf9c]/40">
                    {dealImages[activeImageIndex].tag}
                  </div>

                  {/* Bottom Caption Bar with Integrated View More Button */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-[#761e27] uppercase block truncate">
                        {dealImages[activeImageIndex].tag.split("•")[0] || "EXCLUSIVE BUNDLE"}
                      </span>
                      <h4 className="font-serif text-[11.5px] sm:text-sm font-semibold text-zinc-900 truncate">
                        {dealImages[activeImageIndex].name}
                      </h4>
                    </div>

                    {/* View More Button + Flame Icon */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <Link
                        href="#all-products"
                        className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#5d171e] hover:bg-[#761e27] text-white font-sans text-[8.5px] sm:text-[10px] font-bold tracking-[0.14em] uppercase flex items-center gap-1 shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <span>View More</span>
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </Link>

                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f1e5d6] text-[#761e27] hidden sm:flex items-center justify-center shrink-0">
                        <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#761e27]" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Slider Manual Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous Deal Image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-[#761e27] shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 active:scale-90"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Deal Image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-[#761e27] shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 active:scale-90"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* 3 Interactive Thumbnail Preview Selectors */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              {dealImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-11 sm:w-20 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer shadow-xs ${
                    activeImageIndex === idx
                      ? "border-[#5d171e] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.name}
                    fill
                    sizes="(max-width: 640px) 60px, 80px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
