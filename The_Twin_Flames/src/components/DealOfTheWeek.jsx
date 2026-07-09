"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function DealOfTheWeek() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 8, minutes: 30, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set target date to 5 days, 8 hours, and 30 minutes from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(targetDate.getHours() + 8);
    targetDate.setMinutes(targetDate.getMinutes() + 30);

    const timer = setInterval(() => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to have a leading zero if < 10
  const formatNum = (num) => {
    if (!mounted) return "00";
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section className="py-24 bg-white text-luxury-black overflow-hidden relative z-10 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Showcase with Floating Badge */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Soft decorative background leaf vector sketch */}
            <div className="absolute left-0 top-0 w-[200px] h-[300px] opacity-15 pointer-events-none select-none z-0">
              <svg className="w-full h-full text-[#d8bf9c]/40" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="0.35">
                <path d="M0,150 C20,110 30,70 10,20 C30,35 45,50 60,65 C75,80 85,90 100,100" />
                <circle cx="10" cy="20" r="2.5" />
              </svg>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full aspect-square max-w-[420px] rounded-3xl overflow-visible z-10 group">
              
              {/* Image Frame Wrapper */}
              <div className="w-full h-full rounded-3xl overflow-hidden border border-zinc-150/60 bg-[#faf8f5]/40 p-4 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#faf8f5]">
                  <Image
                    src="/images/image_deal _candle.png"
                    alt="Deal Of The Week Premium Product Showcase"
                    fill
                    sizes="(max-width: 768px) 350px, 420px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                  />
                </div>
              </div>

              {/* Floating circular price badge (Rupees ₹) */}
              <div className="absolute top-[15%] right-[-5%] w-20 h-20 rounded-full bg-[#782029] text-white flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(120,32,41,0.25)] border-2 border-white select-none z-20 hover:scale-105 transition-transform duration-300">
                <span className="text-[7.5px] uppercase tracking-[0.2em] text-zinc-300 font-bold">From</span>
                <span className="text-[13px] font-bold font-sans tracking-wide">₹1,499</span>
              </div>

            </div>

          </div>

          {/* Right Column: Timer & Content */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            
            {/* Header tag */}
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#782029] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Limited time offer
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black leading-tight">
                Deal Of The Week!
              </h2>
              {/* Luxury gold separator line */}
              <div className="w-16 h-[2.5px] bg-[#d8bf9c] mt-4" />
            </div>

            {/* Description */}
            <p className="font-sans text-xs md:text-sm text-zinc-500 font-light leading-relaxed max-w-lg">
              Indulge in our beautifully curated gift sets and signature scents. Crafted using sustainable botanical ingredients and hand-poured pure soy wax, designed to bring peace, harmony, and light into your home.
            </p>

            {/* Live Ticking Countdown Timer */}
            <div className="flex items-center gap-4.5 sm:gap-7 select-none">
              
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#782029] tracking-tight min-w-[50px] text-center">
                  {formatNum(timeLeft.days)}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium mt-1.5">
                  Days
                </span>
              </div>

              <span className="font-serif text-3xl text-zinc-300 -translate-y-2 select-none">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#782029] tracking-tight min-w-[50px] text-center">
                  {formatNum(timeLeft.hours)}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium mt-1.5">
                  Hours
                </span>
              </div>

              <span className="font-serif text-3xl text-zinc-300 -translate-y-2 select-none">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#782029] tracking-tight min-w-[50px] text-center">
                  {formatNum(timeLeft.minutes)}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium mt-1.5">
                  Minutes
                </span>
              </div>

              <span className="font-serif text-3xl text-zinc-300 -translate-y-2 select-none">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#782029] tracking-tight min-w-[50px] text-center">
                  {formatNum(timeLeft.seconds)}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium mt-1.5">
                  Seconds
                </span>
              </div>

            </div>

            {/* Shop Redirect Button */}
            <div className="pt-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 bg-luxury-black hover:bg-[#782029] text-white font-sans text-[11px] font-bold uppercase tracking-[0.2em] py-4 px-10 rounded-full shadow-lg hover:scale-102 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                View All Shop
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
