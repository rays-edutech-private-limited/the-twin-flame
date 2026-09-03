"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";

// Symmetrical Golden Leaf Flourish SVG
const LeafFlourish = ({ className = "w-7 h-4 text-[#c8a97e]" }) => (
  <svg viewBox="0 0 36 18" fill="currentColor" className={className}>
    <path
      d="M2 11 C 12 10, 24 8, 34 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M9 10 C 7 4, 15 2, 18 6 C 16 9, 11 10, 9 10 Z"
      opacity="0.9"
    />
    <path
      d="M21 8 C 19 2, 28 1, 30 5 C 27 8, 23 8, 21 8 Z"
      opacity="0.9"
    />
    <path
      d="M15 11 C 17 16, 25 15, 24 11 C 21 9, 17 10, 15 11 Z"
      opacity="0.85"
    />
    <circle cx="19" cy="6" r="1.1" />
  </svg>
);

// Clapperboard / Cinema Icon SVG
const ClapperboardIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.2 6 3 11l-.9-3 17.2-5Z" />
    <path d="m6.2 5.3 3.1 3.9" />
    <path d="m12.4 3.4 3.1 4" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <circle cx="7" cy="16" r="1" fill="currentColor" />
  </svg>
);

// Curated Video Catalog matching the luxury reference design
const videoCatalog = [
  {
    id: 1,
    title: "The Art of Hand-Pouring",
    subtitle: "Experience the timeless art of candle making.",
    duration: "02:15",
    views: "12.4K views",
    date: "2 days ago",
    thumbnail: "/images/our_products/the_flame_07.png",
    youtubeId: "vyWOHrolfrQ",
  },
  {
    id: 2,
    title: "Sandalwood & Cedar",
    subtitle: "Relaxing ambient sounds to calm your mind and soul.",
    duration: "01:48",
    views: "18.7K views",
    date: "5 days ago",
    thumbnail: "/images/Collection/collectio_2.webp",
    youtubeId: "TYq2uy4B7qo",
  },
  {
    id: 3,
    title: "Aromatherapy Benefits",
    subtitle: "Discover the power of essential oils and natural fragrances.",
    duration: "01:36",
    views: "9.3K views",
    date: "1 week ago",
    thumbnail: "/images/Collection/collection_3.webp",
    youtubeId: "6_bUUXyzdVM",
  },
  {
    id: 4,
    title: "Luxury Gift Unboxing",
    subtitle: "Our sustainable packaging made for memorable moments.",
    duration: "02:30",
    views: "15.6K views",
    date: "1 week ago",
    thumbnail: "/images/Collection/Collection_4.webp",
    youtubeId: "GQJ2AAQHeCc",
  },
  {
    id: 5,
    title: "Mindful Moments",
    subtitle: "Transform your living space with calming candlelight.",
    duration: "01:55",
    views: "14.2K views",
    date: "2 weeks ago",
    thumbnail: "/images/our_products/the_flame_01.webp",
    youtubeId: "vyWOHrolfrQ",
  },
  {
    id: 6,
    title: "Double Wooden Wicks",
    subtitle: "Crafting soothing crackling wicks from organic cedar.",
    duration: "02:10",
    views: "11.8K views",
    date: "3 weeks ago",
    thumbnail: "/images/our_products/the_flame_06.png",
    youtubeId: "TYq2uy4B7qo",
  },
];

export default function Collections() {
  const [selectedVideo, setSelectedVideo] = useState(videoCatalog[0]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive calculation for visible items count in carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, videoCatalog.length - visibleCount);

  // Auto-scroll logic: Advances smoothly every 3.5s, pauses when hovered
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Lock scroll when video modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-[#e6e2dc] text-[#121212] select-none relative overflow-hidden border-b border-[#d8cfc0]">
      {/* Radiant warm luxury ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#d8bf9c]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-10 w-[450px] h-[450px] bg-[#761e27]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12 lg:px-14 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-7">
          {/* Main Title - Consistent with other components */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Video <span className="italic font-serif text-[#761e27]">Gallery</span>
          </h2>

          {/* Ornate Gold Diamond Divider */}
          <div className="flex items-center justify-center gap-3 my-2 sm:my-2.5">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#c8a97e]" />
            <span className="w-2 h-2 rotate-45 border border-[#c8a97e] bg-[#e6e2dc]" />
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#c8a97e]" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-[13px] text-[#5c5652] max-w-xl font-normal tracking-wide leading-relaxed px-2">
            Immerse yourself in our candle-making rituals, soothing ambient sounds, and the mindful artistry behind every hand-poured blend.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED HERO VIDEO CARD (CLEAR, VIBRANT - COMPACT LUXURY PROPORTIONS)   */}
        {/* ========================================================================= */}
        <div className="relative w-full aspect-[16/9.5] sm:aspect-[21/8.5] md:aspect-[2.4/1] min-h-[290px] sm:min-h-[340px] md:min-h-[380px] rounded-[22px] sm:rounded-[30px] overflow-hidden shadow-2xl border border-[#d8bf9c]/40 group/hero select-none mb-4 sm:mb-5 bg-zinc-950">
          
          {/* Crisp, Vibrant Featured Image (Full brightness, no dark shade) */}
          <Image
            src={selectedVideo.thumbnail}
            alt={selectedVideo.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center brightness-100 group-hover/hero:scale-102 transition-transform duration-700 ease-out"
          />

          {/* Top-Right Duration Pill Badge */}
          <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-sans font-medium shadow-md">
            <Clock className="w-3 h-3 text-[#d8bf9c]" />
            <span>{selectedVideo.duration}</span>
          </div>

          {/* Left Column: Frosted Glass Info Card for Perfect Legibility */}
          <div className="absolute left-3.5 sm:left-7 md:left-9 lg:left-11 top-1/2 -translate-y-1/2 max-w-xs sm:max-w-sm md:max-w-md z-20 flex flex-col items-start text-left p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 shadow-2xl">
            <h3 className="font-serif text-xl sm:text-2.5xl lg:text-3.5xl font-normal text-white leading-[1.15] tracking-tight drop-shadow-sm">
              {selectedVideo.title}
            </h3>

            {/* Inset Gold Divider with Diamond */}
            <div className="flex items-center gap-2.5 my-3 sm:my-3.5">
              <div className="h-[1px] w-7 sm:w-9 bg-[#c8a97e]/80" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#c8a97e] bg-white/20" />
              <div className="h-[1px] w-7 sm:w-9 bg-[#c8a97e]/80" />
            </div>

            <p className="font-sans text-xs sm:text-[13px] text-zinc-100 font-light leading-relaxed mb-5 sm:mb-6">
              {selectedVideo.subtitle}
            </p>

            {/* Watch Video Oval Button */}
            <button
              onClick={() => setActiveVideo(selectedVideo)}
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#64171f] hover:bg-[#761e27] border border-[#d8bf9c]/60 text-white font-serif text-xs sm:text-[13px] tracking-wide shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group/btn"
            >
              <div className="w-5 h-5 rounded-full bg-white text-[#761e27] flex items-center justify-center shrink-0 shadow-xs group-hover/btn:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="font-medium">Watch Video</span>
            </button>
          </div>

          {/* Center Large Glowing Concentric Play Button with Animated Continuous Moving Waves */}
          <div
            onClick={() => setActiveVideo(selectedVideo)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center cursor-pointer group/centerplay"
            aria-label="Play Featured Video"
          >
            {/* Continuously Animated Expanding Wave Rings */}
            <div className="hero-wave hero-wave-1" />
            <div className="hero-wave hero-wave-2" />
            <div className="hero-wave hero-wave-3" />

            {/* Center Play Disc */}
            <div className="relative z-10 w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-white/95 text-[#761e27] shadow-[0_4px_35px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover/centerplay:scale-110 group-hover/centerplay:bg-[#761e27] group-hover/centerplay:text-white transition-all duration-300">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current ml-0.5 sm:ml-1 transition-colors" />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM THUMBNAILS CAROUSEL (ALIGNED WITH HERO CARD, BUTTONS OUTSIDE)     */}
        {/* ========================================================================= */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full group/carousel"
        >
          {/* Left Arrow Button - Positioned completely OUTSIDE on the left margin */}
          <button
            onClick={handlePrev}
            aria-label="Previous Videos"
            className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white text-[#761e27] border border-[#ebdcd0] shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#761e27] hover:text-white hover:scale-110 z-30"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Smooth Sliding Track Container - Full Width Aligned with Hero Card */}
          <div className="overflow-hidden w-full py-1">
            <div
              className="flex transition-transform duration-700 ease-out -mx-1.5 sm:-mx-2"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {videoCatalog.map((video) => {
                const isSelected = video.id === selectedVideo.id;
                return (
                  <div
                    key={video.id}
                    style={{ width: `${100 / visibleCount}%` }}
                    className="shrink-0 px-1.5 sm:px-2"
                  >
                    <div
                      onClick={() => setSelectedVideo(video)}
                      className={`relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 bg-zinc-900 ${
                        isSelected
                          ? "border-2 border-[#b8986c] ring-2 ring-[#b8986c]/40 scale-102"
                          : "border border-black/10 hover:border-[#b8986c]/70"
                      }`}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-95"
                      />
                      
                      {/* Subtle Dark Gradient at bottom only for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                      {/* Top-Right Duration Badge */}
                      <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-md bg-black/70 text-white text-[9.5px] font-sans font-medium">
                        {video.duration}
                      </div>

                      {/* Bottom Row: Mini Play Button + Video Title */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#761e27] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#761e27] group-hover:text-white transition-colors">
                          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                        </div>
                        <span className="font-serif text-[11px] sm:text-xs md:text-[12.5px] font-medium text-white truncate group-hover:text-[#d8bf9c] transition-colors text-left">
                          {video.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button - Positioned completely OUTSIDE on the right margin */}
          <button
            onClick={handleNext}
            aria-label="Next Videos"
            className="absolute -right-4 sm:-right-6 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white text-[#761e27] border border-[#ebdcd0] shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#761e27] hover:text-white hover:scale-110 z-30"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Carousel Pagination Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-[#761e27]"
                  : "w-1.5 bg-[#d8bf9c]/60 hover:bg-[#b8986c]"
              }`}
            />
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION: "Explore More Videos" BUTTON                               */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center mt-5 sm:mt-7">
          {/* Wine Clapperboard Pill Button */}
          <button
            onClick={() => setActiveVideo(selectedVideo)}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#64171f] hover:bg-[#761e27] text-white font-serif text-xs sm:text-[13px] tracking-wider flex items-center gap-2.5 shadow-xl border border-[#d8bf9c]/35 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <ClapperboardIcon className="w-4 h-4 text-[#d8bf9c]" />
            <span>Explore More Videos</span>
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN POPUP CINEMA VIDEO PLAYER                                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-3xl bg-[#140b0d] rounded-3xl overflow-hidden shadow-2xl border border-[#d8bf9c]/40 z-10 my-auto text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close cinema"
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 bg-gradient-to-b from-[#1a0e11] to-[#12080a]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d8bf9c] px-2.5 py-0.5 rounded-full bg-white/10">
                    Twin Flame Ritual
                  </span>
                  <span className="text-xs text-zinc-400 font-sans">
                    {activeVideo.duration} • {activeVideo.views}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
                  {activeVideo.title}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed">
                  {activeVideo.subtitle} Handcrafted with 100% natural organic soy wax and crackling wooden wicks.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
