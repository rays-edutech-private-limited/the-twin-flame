"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Slides Configuration matching reference design and paths
const slides = [
  {
    id: 1,
    subtitle: "New arrival",
    title: "Bring the light in\nyour life",
    btnText: "Shop now",
    image: "/images/Banner/B_3.png"
  },
  {
    id: 2,
    subtitle: "Exclusive Collection",
    title: "Elevate your home\nfragrance",
    btnText: "Shop now",
    image: "/images/Banner/Hero_02.png"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0
  })
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slideTrigger, setSlideTrigger] = useState(0);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  }, []);

  // Autoplay effect with manual interaction reset
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5500); // Auto slide every 5.5 seconds
    return () => clearInterval(timer);
  }, [slideTrigger, paginate]);

  const handleNext = () => {
    paginate(1);
    setSlideTrigger((prev) => prev + 1); // Reset timer
  };

  const handlePrev = () => {
    paginate(-1);
    setSlideTrigger((prev) => prev + 1); // Reset timer
  };

  return (
    <section className="relative w-full aspect-[1.3/1] sm:aspect-[1.5/1] md:aspect-[2.0/1] lg:aspect-[2.2/1] overflow-hidden bg-[#f3f0ec] select-none z-10">
      
      {/* Slide Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 180, damping: 24 },
              opacity: { duration: 0.35 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Banner Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].subtitle}
                fill
                priority
                className="object-cover object-center select-none pointer-events-none"
              />
              {/* Soft overlay gradient on mobile to improve readability (Commented out as text is hidden) */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent md:from-transparent md:via-transparent md:to-transparent" /> */}
            </div>

            {/* Content Text Overlay (Commented out as requested) */}
            {/*
            <div className="absolute inset-0 bg-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 w-full">
                <div className="max-w-xs sm:max-w-md md:max-w-xl text-left space-y-3.5 md:space-y-5.5">
                  
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="font-serif italic text-[15px] sm:text-lg md:text-[22px] text-zinc-700 font-light tracking-wide"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="font-serif text-2xl sm:text-[32px] md:text-[54px] lg:text-[62px] font-medium text-zinc-800 leading-[1.15] tracking-tight"
                  >
                    {slides[currentSlide].title.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < slides[currentSlide].title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="pt-2 md:pt-4"
                  >
                    <Link
                      href="#"
                      className="inline-block border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-800 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] py-3 px-7 sm:py-3.5 sm:px-10 transition-all duration-300 bg-transparent select-none cursor-pointer"
                    >
                      {slides[currentSlide].btnText}
                    </Link>
                  </motion.div>

                </div>
              </div>
            </div>
            */}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Slide Button Left */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 border border-zinc-300/60 bg-white/45 hover:bg-white hover:shadow-lg text-zinc-700 flex items-center justify-center transition-all duration-300 rounded-none z-30 cursor-pointer"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-3.5 h-3.5 md:w-5 md:h-5 font-light" />
      </button>

      {/* Manual Slide Button Right */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 border border-zinc-300/60 bg-white/45 hover:bg-white hover:shadow-lg text-zinc-700 flex items-center justify-center transition-all duration-300 rounded-none z-30 cursor-pointer"
        aria-label="Next slide"
      >
        <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 font-light" />
      </button>

      {/* Slide Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              setSlideTrigger((prev) => prev + 1);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-zinc-800 w-6"
                : "bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
