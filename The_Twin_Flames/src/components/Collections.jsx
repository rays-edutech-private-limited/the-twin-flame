"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, X, Leaf, Heart, ShieldCheck, ArrowRight, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVGs for card icons
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
  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#d8bf9c] opacity-15">
    <path d="M10 10 Q 70 60 110 180" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 25 Q 50 15 45 35 Q 35 45 30 25 Z" fill="currentColor" />
    <path d="M50 45 Q 75 35 65 60 Q 50 65 50 45 Z" fill="currentColor" />
    <path d="M70 70 Q 100 65 85 90 Q 70 95 70 70 Z" fill="currentColor" />
    <path d="M85 105 Q 120 105 100 130 Q 85 130 85 105 Z" fill="currentColor" />
  </svg>
);

const baseCollections = [
  {
    id: 1,
    title: "Signature Candles",
    subtitle: "SOY WAX & ESSENTIAL OILS",
    description: "Crafted with care. Made to inspire.",
    image: "/images/Collection/Collection_1.webp",
    youtubeId: "vyWOHrolfrQ",
    buttonBg: "bg-[#d8bf9c] text-[#761e27] hover:bg-[#faf8f5]",
    icon: <CandleIcon />
  },
  {
    id: 2,
    title: "Reed Diffusers",
    subtitle: "CONTINUOUS ROOM FRAGRANCE",
    description: "Effortless aroma. Everyday elegance.",
    image: "/images/Collection/collectio_2.webp",
    youtubeId: "TYq2uy4B7qo",
    buttonBg: "bg-white/20 text-white hover:bg-[#d8bf9c] hover:text-[#761e27] backdrop-blur-md border border-[#d8bf9c]/30",
    icon: <DiffuserIcon />
  },
  {
    id: 3,
    title: "Aroma Candles",
    subtitle: "WARMTH & GLOW",
    description: "Light. Relax. Unwind.",
    image: "/images/Collection/collection_3.webp",
    youtubeId: "6_bUUXyzdVM",
    buttonBg: "bg-white/20 text-white hover:bg-[#d8bf9c] hover:text-[#761e27] backdrop-blur-md border border-[#d8bf9c]/30",
    icon: <CandleIcon />
  },
  {
    id: 4,
    title: "Wellness Collection",
    subtitle: "CALM & BALANCE",
    description: "For your mind, body & soul.",
    image: "/images/Collection/Collection_4.webp",
    youtubeId: "GQJ2AAQHeCc",
    buttonBg: "bg-[#d8bf9c] text-[#761e27] hover:bg-[#faf8f5]",
    icon: <LotusIcon />
  }
];

// Duplicate collections twice to get 8 panels for the 3D Octagon
const collections = [...baseCollections, ...baseCollections];

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
  const [rotationDegree, setRotationDegree] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  const autoPlayTimerRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Set up screen-resize updates to dynamically calculate 3D radius bounds
  useEffect(() => {
    if (typeof window === "undefined") return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stepped Autoplay: rotates 45 degrees every 4 seconds
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimerRef.current = setInterval(() => {
      setRotationDegree((prev) => prev - 45);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Compute exact panel width and Z-axis depth based on viewport sizes (made wider/healthier)
  let panelWidth = 430;
  let panelHeight = 460;
  if (windowWidth < 360) {
    panelWidth = 240;
    panelHeight = 300;
  } else if (windowWidth < 768) {
    panelWidth = 280;
    panelHeight = 350;
  }
  const radius = Math.round(panelWidth * 1.2071);

  // Determine which index (0-7) is facing forward
  const normalizedDegree = ((rotationDegree % 360) + 360) % 360;
  const activeIdx = Math.round((360 - normalizedDegree) / 45) % 8;

  // Bind mouse-wheel scroll directly to the container to prevent passive warnings and lock 1-by-1 step scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      // If scroll lock is active, ignore further wheel events
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      stopAutoPlay();

      if (e.deltaY > 0) {
        setRotationDegree((prev) => prev - 45);
      } else {
        setRotationDegree((prev) => prev + 45);
      }

      startAutoPlay();

      // Release lock after transition animation (650ms)
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 650);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Handle drag/swipe events for touch and desktop browsers
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
    stopAutoPlay();
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const diffX = e.touches[0].clientX - startXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        setRotationDegree((prev) => prev + 45);
      } else {
        setRotationDegree((prev) => prev - 45);
      }
      isDraggingRef.current = false; // trigger once per swipe
      startAutoPlay();
    }
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
    stopAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diffX = e.clientX - startXRef.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setRotationDegree((prev) => prev + 45);
      } else {
        setRotationDegree((prev) => prev - 45);
      }
      isDraggingRef.current = false; // trigger once per drag
      startAutoPlay();
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    startAutoPlay();
  };

  // Click handler: spins the cylinder to center the clicked side card, or launches video if already centered
  const handleCardClick = (idx, youtubeId) => {
    stopAutoPlay();
    if (idx === activeIdx) {
      setActiveYoutubeId(youtubeId);
    } else {
      // Calculate shortest route to center target
      const currentActiveAngle = -rotationDegree;
      const targetAngle = idx * 45;
      let diff = (targetAngle - (currentActiveAngle % 360) + 360) % 360;
      if (diff > 180) diff -= 360;
      setRotationDegree((prev) => prev - diff);
    }
    startAutoPlay();
  };

  return (
    <section className="py-20 md:py-24 bg-[#faf8f5] relative z-10 overflow-hidden border-t border-[#d8bf9c]/25">
      
      {/* Background Decorative Illustrations */}
      <div className="absolute top-4 left-0 w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-0">
        <BackgroundLeavesLeft />
      </div>
      <div className="absolute top-4 right-0 w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-0 transform scale-x-[-1]">
        <BackgroundLeavesLeft />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title Section - High-end Editorial Luxury Design */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
          {/* Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em] xs:tracking-[0.45em] text-[#d8bf9c] mb-3 leading-none">
            THE TWIN FLAME EXPERIENCE
          </span>

          {/* Main Title */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#761e27] leading-tight">
            <span className="italic font-serif text-[#b8986c] mr-1">Curated</span> Collections
          </h2>

          {/* Ornate Gold Divider */}
          <div className="flex items-center justify-center gap-3.5 my-3 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#d8bf9c]/60" />
            <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
              <span>✦</span>
              <span className="text-[12px] opacity-90 scale-110">✧</span>
              <span>✦</span>
            </div>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#d8bf9c]/60" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm tracking-wide text-[#761e27]/75 font-medium max-w-xl">
            Discover fragrances tailor-made for each corner of your home, designed to evoke distinct memories and vibes.
          </p>
        </div>

        {/* 3D Viewport Wrapper */}
        <div 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full h-[360px] md:h-[520px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "2000px" }}
        >
          {/* Left/Right Floating Manual Nav Controls */}
          <button
            onClick={() => { stopAutoPlay(); setRotationDegree((prev) => prev + 45); startAutoPlay(); }}
            className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 border border-[#d8bf9c]/35 text-[#761e27] flex items-center justify-center hover:bg-[#761e27] hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer z-50 text-lg md:text-xl font-serif"
            aria-label="Previous Slide"
          >
            ‹
          </button>

          <button
            onClick={() => { stopAutoPlay(); setRotationDegree((prev) => prev - 45); startAutoPlay(); }}
            className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 border border-[#d8bf9c]/35 text-[#761e27] flex items-center justify-center hover:bg-[#761e27] hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer z-50 text-lg md:text-xl font-serif"
            aria-label="Next Slide"
          >
            ›
          </button>

          {/* 3D Octagon Cylinder Container */}
          <div
            className="relative transition-transform duration-700 ease-out flex items-center justify-center transform-gpu"
            style={{
              width: `${panelWidth}px`,
              height: `${panelHeight}px`,
              transform: `rotateY(${rotationDegree}deg)`,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d"
            }}
          >
            {collections.map((col, idx) => {
              const angle = idx * 45;
              const isActive = idx === activeIdx;

              // Calculate spacing offset to fade out the back of the cylinder
              const indexDiff = Math.abs(idx - activeIdx);
              const wrapDiff = Math.min(indexDiff, 8 - indexDiff);

              // Render: active is 100%, adjacent sides are 85% opacity, outer sides are 45% opacity (no scaling to prevent gaps)
              let opacityClass = "opacity-0 pointer-events-none scale-100";
              if (wrapDiff === 0) {
                opacityClass = "opacity-100 scale-100 z-30";
              } else if (wrapDiff === 1) {
                opacityClass = "opacity-85 scale-100 z-20";
              } else if (wrapDiff === 2) {
                opacityClass = "opacity-45 scale-100 z-10 pointer-events-none";
              } else {
                opacityClass = "opacity-0 pointer-events-none z-0";
              }

              return (
                <div
                  key={`${col.id}-${idx}`}
                  onClick={() => handleCardClick(idx, col.youtubeId)}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    width: `${panelWidth}px`,
                    height: `${panelHeight}px`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className={`absolute inset-0 rounded-[20px] overflow-hidden group border border-[#d8bf9c]/35 hover:border-[#d8bf9c] shadow-lg cursor-pointer transform-gpu transition-all duration-[750ms] ease-out ${opacityClass}`}
                >
                  {/* 1. Background Placeholder Image (Using translateZ to prevent browser collapsing) */}
                  <img
                    src={col.image}
                    alt={col.title}
                    style={{ transform: "translateZ(1px)" }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  />

                  {/* 2. Youtube Video Loop Background (Only render on active card to prevent mirror bleed and browser lags) */}
                  {isActive && (
                    <div 
                      style={{ transform: "translateZ(2px)" }}
                      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10 bg-black/10"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${col.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${col.youtubeId}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] md:h-[240%] pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  )}

                  {/* 3. Inset Gold Border Frame (Double-Border Rectangle Shape with translateZ) */}
                  <div 
                    style={{ transform: "translateZ(3px)" }}
                    className="absolute inset-3.5 border border-[#d8bf9c]/25 rounded-[14px] pointer-events-none z-20 transition-colors duration-300 group-hover:border-[#d8bf9c]/55" 
                  />

                  {/* Ambient gradient overlays */}
                  <div style={{ transform: "translateZ(4px)" }} className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500 z-5" />
                  <div style={{ transform: "translateZ(5px)" }} className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-5" />

                  {/* 4. Card Content (Highest translateZ layer to prevent text/icon vanishing) */}
                  <div style={{ transform: "translateZ(6px)" }} className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                    
                    {/* Top Part: Icon Container */}
                    <div>
                      {col.icon && (
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                          {col.icon}
                        </div>
                      )}
                    </div>

                    {/* Bottom Part: Texts and Action buttons */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#d8bf9c] uppercase block">
                          {col.subtitle}
                        </span>
                        {/* Gold line separator */}
                        <div className="w-10 h-[1.5px] bg-[#d8bf9c] mt-2 mb-3 transition-all duration-300 group-hover:w-16" />
                        
                        <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-white leading-tight">
                          {col.title}
                        </h3>
                        
                        <p className="font-sans text-[10px] md:text-xs text-zinc-300 font-light mt-1.5 leading-relaxed line-clamp-2 md:line-clamp-none">
                          {col.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        {/* Explore Pill Button */}
                        <div className={`rounded-full py-2 px-4.5 flex items-center gap-1.5 text-[9px] md:text-[10px] font-semibold tracking-wider transition-all duration-300 shadow-md transform group-hover:-translate-y-0.5 ${col.buttonBg}`}>
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>

                        {/* Circle Arrow Indicator */}
                        <div className="w-8.5 h-8.5 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110">
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mouse wheel / Swipe Help Guide */}
        <div className="flex flex-col items-center justify-center gap-2 mt-4 text-center">
          <div className="flex items-center gap-2 text-[#761e27]/80 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase select-none">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>SCROLL MOUSEWHEEL OR SWIPE TO SPIN</span>
          </div>

          {/* Indicator Pagination Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {[...Array(8)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i, collections[i].youtubeId)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === activeIdx 
                    ? "bg-[#761e27] scale-125" 
                    : "bg-zinc-300 hover:bg-[#d8bf9c]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 border-t border-[#d8bf9c]/25 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 justify-start sm:justify-center px-4 transition-all duration-350 hover:translate-y-[-3px] group ${
                  idx < 3 ? "lg:border-r lg:border-[#d8bf9c]/20" : ""
                }`}
              >
                {/* Gold lined wine red circle icon wrapper */}
                <div className="w-11 h-11 rounded-full bg-[#761e27] border border-[#d8bf9c]/35 flex items-center justify-center text-[#d8bf9c] shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {feat.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-sm font-semibold text-[#761e27] tracking-wide">
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

      {/* Video Modal Popup playing YouTube Video (Shorts 9:16 aspect ratio) */}
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

            {/* Video Frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[70vh] aspect-[9/16] max-w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black"
              onClick={(e) => e.stopPropagation()}
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
