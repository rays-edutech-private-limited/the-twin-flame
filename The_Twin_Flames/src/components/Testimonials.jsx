"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  MapPin,
  Clock,
  Flower2,
  Sparkles,
  Flame,
  Leaf,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

// Curated authentic reviews
const reviews = [
  {
    id: 1,
    name: "Riya Sen",
    city: "Bengaluru",
    product: "Kashmiri Rose & Golden Nectar",
    rating: 5,
    tag: "FLORAL ESSENCE",
    tagIcon: "flower",
    tagStyle: "bg-[#fcf6ee] text-[#8e6c3e] border-[#ebd6be]",
    bagColor: "bg-[#8e6c3e]/12 text-[#8e6c3e]",
    quote:
      "Sublime, authentic floral aroma that never feels synthetic. The gold-embossed packaging felt like receiving a bespoke gift from Paris. Absolutely my new everyday sacred ritual.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=350&auto=format&fit=crop",
    date: "1 week ago",
  },
  {
    id: 2,
    name: "Aman Sharma",
    city: "Jaipur",
    product: "French Lavender & Velvet Fig",
    rating: 5,
    tag: "AROMATHERAPY",
    tagIcon: "sparkles",
    tagStyle: "bg-[#f8f3fa] text-[#6d4b82] border-[#e5d8ee]",
    bagColor: "bg-[#6d4b82]/12 text-[#6d4b82]",
    quote:
      "More than just candle scent—it is an absolute emotional mood. One single candle elevates the complete aesthetic aura of my home studio. Soot-free and incredibly long-lasting burn.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=350&auto=format&fit=crop",
    date: "2 weeks ago",
  },
  {
    id: 3,
    name: "Divya Iyer",
    city: "Mumbai",
    product: "Midnight Oud & Smoked Vanilla",
    rating: 5,
    tag: "SIGNATURE BLEND",
    tagIcon: "flame",
    tagStyle: "bg-[#fbf4ed] text-[#8a532b] border-[#eddcca]",
    bagColor: "bg-[#8a532b]/12 text-[#8a532b]",
    quote:
      "The fragrance fills my entire living space within minutes. The crackling wooden wick adds such a calming fireplace ambiance to my evenings. Redefined luxury home aromatics.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=350&auto=format&fit=crop",
    date: "2 days ago",
  },
  {
    id: 4,
    name: "Kabir Mehta",
    city: "New Delhi",
    product: "Imperial Spiced Vetiver & Bergamot",
    rating: 5,
    tag: "LIMITED EDITION",
    tagIcon: "sparkles",
    tagStyle: "bg-[#fcf4f4] text-[#761e27] border-[#f2dada]",
    bagColor: "bg-[#761e27]/12 text-[#761e27]",
    quote:
      "Truly masterperfumer quality. The heavy artisan glass jar and amber glow transform my room into pure meditative sanctuary. The warm vetiver notes linger gently for hours after extinguishing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=350&auto=format&fit=crop",
    date: "5 days ago",
  },
  {
    id: 5,
    name: "Ananya Roy",
    city: "Kolkata",
    product: "Velvet Vanilla & Smoked Bourbon",
    rating: 5,
    tag: "COZY EVENING",
    tagIcon: "flame",
    tagStyle: "bg-[#fcf8ee] text-[#916b2a] border-[#eedfc0]",
    bagColor: "bg-[#916b2a]/12 text-[#916b2a]",
    quote:
      "Clean burning with zero black soot and so soothing. You can immediately tell they use 100% natural plant wax and authentic essential oils. A true five-star sensory indulgence.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=350&auto=format&fit=crop",
    date: "3 weeks ago",
  },
  {
    id: 6,
    name: "Vikram Malhotra",
    city: "Hyderabad",
    product: "Gilded Sandalwood & Cardamom",
    rating: 5,
    tag: "SACRED HERITAGE",
    tagIcon: "leaf",
    tagStyle: "bg-[#f5f8f3] text-[#3e6840] border-[#d7e5d5]",
    bagColor: "bg-[#3e6840]/12 text-[#3e6840]",
    quote:
      "The authentic Mysore sandalwood aroma brings immediate peace and grounding to my meditation space. The double wick burn is exceptionally even and beautiful.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=350&auto=format&fit=crop",
    date: "1 month ago",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive: exactly 2 cards on desktop/tablet (>=768px), 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Auto-slide every 5.5 seconds (paused when hovered)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121212] select-none relative overflow-hidden border-b border-[#ebdcd0]">
      {/* Radiant ambient luxury background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#faf6f0] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#f7ede4] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Loved by Fragrance <span className="font-serif text-[#761e27]">Connoisseurs</span>
          </h2>

          {/* Ornate Gold Accent */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#b8986c]" />
            <span className="text-[#b8986c] text-[12px]">❖</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#b8986c]" />
          </div>

          <p className="font-sans text-xs sm:text-[13.5px] text-zinc-500 max-w-xl font-normal tracking-wide leading-relaxed">
            Real impressions from patrons across India who welcomed our master-blended home aromatics and crackling wooden wicks into their sanctuaries.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2-CARD LANDSCAPE LUXURY CAROUSEL (Spacious, Clean Design)                 */}
        {/* ========================================================================= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative px-2 sm:px-4 lg:px-6"
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Reviews"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xs text-zinc-700 border border-[#e6dad0] shadow-[0_4px_25px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#761e27] hover:text-white hover:border-[#761e27] hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Reviews"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-xs text-zinc-700 border border-[#e6dad0] shadow-[0_4px_25px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#761e27] hover:text-white hover:border-[#761e27] hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  style={{ width: `${100 / itemsPerPage}%` }}
                  className="shrink-0 px-2.5 sm:px-3.5"
                >
                  {/* Subtle Light Luxury Gradient Card with Soft #761e27 Tint */}
                  <div className="h-full bg-gradient-to-br from-white via-[#fdf9f6] to-[#faeee9] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#ebdcd0] hover:border-[#b8986c] shadow-[0_4px_20px_rgba(118,30,39,0.04)] hover:shadow-[0_12px_32px_rgba(118,30,39,0.09)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between group/card">
                    
                    {/* Subtle Soft Ambient Glow Inside Card */}
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#761e27]/4 rounded-full blur-2xl pointer-events-none group-hover/card:scale-125 transition-transform duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#d8bf9c]/15 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      {/* Top Header Row: 5 Gold Stars with 5.0 Rating + Category Capsule */}
                      <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="font-sans text-[11px] font-bold text-zinc-800 ml-1">
                            5.0
                          </span>
                        </div>

                        {/* Category Tag Pill */}
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 border border-[#ecd5cb] shadow-2xs text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase font-sans text-[#761e27]"
                        >
                          {rev.tagIcon === "flower" && <Flower2 className="w-3 h-3 text-[#b8986c]" />}
                          {rev.tagIcon === "sparkles" && <Sparkles className="w-3 h-3 text-[#b8986c]" />}
                          {rev.tagIcon === "flame" && <Flame className="w-3 h-3 text-[#b8986c]" />}
                          {rev.tagIcon === "leaf" && <Leaf className="w-3 h-3 text-[#b8986c]" />}
                          <span>{rev.tag}</span>
                        </div>
                      </div>

                      {/* Purchased Product Line */}
                      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-[#f0ded4] relative z-10">
                        <span className="w-4 h-4 rounded-full bg-[#761e27]/10 flex items-center justify-center shrink-0 text-[#761e27]">
                          <ShoppingBag className="w-2.5 h-2.5" />
                        </span>
                        <p className="font-sans text-xs text-zinc-600 truncate">
                          Purchased: <strong className="text-[#761e27] font-semibold ml-0.5">{rev.product}</strong>
                        </p>
                      </div>

                      {/* Compact Full-Width Quote Section */}
                      <div className="relative z-10 my-1">
                        <span className="font-serif text-2xl text-[#d8bf9c] leading-none select-none block -mb-1">
                          “
                        </span>
                        <p className="font-serif not-italic text-[13px] sm:text-[14px] text-[#241c1d] leading-snug sm:leading-relaxed font-normal line-clamp-3">
                          {rev.quote}
                        </p>
                        <span className="font-serif text-2xl text-[#d8bf9c] leading-none select-none block text-right -mt-1">
                          ”
                        </span>
                      </div>
                    </div>

                    {/* Bottom Reviewer Bio Row */}
                    <div className="pt-2.5 mt-2.5 border-t border-[#f0ded4] flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#b8986c] shadow-xs shrink-0">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-[#761e27] leading-tight">
                            {rev.name}
                          </h4>
                          <div className="flex items-center gap-1 text-[10.5px] text-zinc-500 font-sans mt-0.5">
                            <MapPin className="w-3 h-3 text-[#b8986c] shrink-0" />
                            <span>{rev.city}, India</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[10.5px] text-zinc-400 font-sans">
                        <Clock className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span>{rev.date}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Indicator Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-[#761e27]"
                    : "w-2 h-2 bg-[#ebdcd0] hover:bg-[#b8986c]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}




