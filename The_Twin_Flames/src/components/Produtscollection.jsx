"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";

// Mock products data using the requested our_products paths
const products = [
  {
    id: 1,
    name: "Twin Flame Signature Candle",
    price: 1499.0,
    rating: 5,
    tag: "Best Seller",
    image: "/images/our_products/the_flame_01.webp"
  },
  {
    id: 2,
    name: "Gilded Sandalwood Diffuser",
    price: 1899.0,
    rating: 5,
    tag: "New Arrival",
    image: "/images/our_products/the_flame_02.jpeg"
  },
  {
    id: 3,
    name: "Smoky Amber & Fig Wax Melt",
    price: 899.0,
    rating: 4.8,
    tag: "Trending",
    image: "/images/our_products/the_flame_03.jpeg"
  },
  {
    id: 4,
    name: "Spiced Vetiver Brass Candle",
    price: 2499.0,
    rating: 5,
    tag: "Limited Ed.",
    image: "/images/our_products/the_flame_05.jpeg"
  },
  {
    id: 5,
    name: "Twin Flame Signature Candle II",
    price: 1499.0,
    rating: 5,
    tag: "Best Seller",
    image: "/images/our_products/the_flame_01.webp"
  },
  {
    id: 6,
    name: "Gilded Sandalwood Diffuser II",
    price: 1899.0,
    rating: 4.9,
    tag: "New Arrival",
    image: "/images/our_products/the_flame_02.jpeg"
  }
];

// Custom luxury four-pointed star matching rating shape
const LuxuryStarIcon = ({ filled }) => (
  <svg
    className={`w-3.5 h-3.5 ${filled ? "text-[#d8bf9c] fill-[#d8bf9c]" : "text-zinc-200"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
  </svg>
);

// Marquee Card Component supporting 3D Parallax Tilt (Pauses marquee on hover)
function MarqueeProductCard({ product }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setTilt({
      x: x * 8,
      y: -y * 8
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${isHovered ? 1.025 : 1})`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className="group flex flex-col relative p-4 bg-[#761e27] hover:bg-[#8c2530] rounded-[32px] border border-[#d8bf9c]/35 hover:border-[#d8bf9c] shadow-md hover:shadow-2xl transition-all duration-500 ease-out min-h-[460px] w-[240px] sm:w-[280px] flex-shrink-0 transform-gpu"
    >
      {/* A. Floating Tag Badge (Outside the container, positioned responsively to fit 240px width) */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-30 bg-[#faf8f5] border border-[#d8bf9c]/35 shadow-md rounded-full px-3.5 py-1 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
        <span className="text-[7.5px] md:text-[8px] font-bold tracking-[0.2em] text-[#761e27] uppercase text-center">
          {product.tag}
        </span>
      </div>

      {/* B. Arched Dome Image Container with 3px solid gold border */}
      <div className="relative aspect-[3/4] w-full bg-white rounded-t-full rounded-b-2xl border-[3px] border-[#d8bf9c] overflow-hidden shadow-inner mb-4">
        
        {/* Main Product Image */}
        <div className="w-full h-full relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 240px, 280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
          />
        </div>

        {/* Quick Action Overlay (Wishlist and Shopping Bag buttons) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          
          {/* Wishlist Button */}
          <button
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200/20 shadow-md hover:bg-white text-zinc-700 hover:text-rose-600 hover:scale-105 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Add to Wishlist"
          >
            <Heart className="w-4.5 h-4.5 font-light" />
          </button>
          
          {/* Shopping Bag Add Button */}
          <button
            className="w-10 h-10 rounded-full bg-[#faf8f5] border border-[#d8bf9c]/30 shadow-md hover:bg-white text-[#761e27] hover:scale-105 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Quick Shop"
          >
            <ShoppingBag className="w-4.5 h-4.5 font-light" />
          </button>

        </div>
      </div>

      {/* C. Product Details Block */}
      <div className="space-y-2 flex-1 flex flex-col justify-between px-1">
        <div>
          {/* Title in Serif & Ivory White */}
          <h3 className="font-serif text-sm md:text-base font-semibold tracking-wide text-[#faf8f5] hover:text-[#d8bf9c] cursor-pointer transition-colors duration-300 mt-1 leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Rating + Price aligned in one row */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#d8bf9c]/20 mt-2">
          
          {/* Star Rating */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <LuxuryStarIcon
                key={i}
                filled={i < Math.floor(product.rating)}
              />
            ))}
            <span className="text-[11px] font-serif text-[#d8bf9c] font-bold ml-1.5">
              {product.rating}
            </span>
          </div>

          {/* Price Tag in Gold */}
          <span className="font-sans text-sm md:text-[15px] font-extrabold text-[#d8bf9c]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>

        </div>
      </div>
    </div>
  );
}

export default function Produtscollection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const loopProducts = [...products, ...products];

  // Set up intersection observer to track when section enters and exits viewport
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#faf8f5] overflow-hidden relative z-10 border-t border-[#d8bf9c]/20"
    >
      {/* Decorative luxury red gradient glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#761e27]/3 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#761e27]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Title - High-end Editorial Luxury Design (scaled fonts for mobile) */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12 px-4">
          {/* A. Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em] xs:tracking-[0.45em] text-[#d8bf9c] mb-2.5 leading-none">
            CURATED COLLECTION
          </span>

          {/* B. Main Title */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#761e27] leading-tight">
            Loved By Our Customers
          </h2>

          {/* C. Ornate Gold Divider */}
          <div className="flex items-center justify-center gap-3.5 my-3 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#d8bf9c]/60" />
            <div className="flex items-center gap-1.5 text-[#d8bf9c] text-[10px]">
              <span>✦</span>
              <span className="text-[12px] opacity-90 scale-110">✧</span>
              <span>✦</span>
            </div>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#d8bf9c]/60" />
          </div>

          {/* D. Subtitle */}
          <p className="font-sans text-xs sm:text-sm tracking-wide text-[#761e27]/75 font-medium max-w-xl">
            Discover the fragrances and gifts customers keep coming back to.
          </p>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          
          {/* Scoped CSS Styles to handle marquee infinite translation and pause on hover */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marqueeScroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .marquee-track-container {
              display: flex;
              gap: 2rem;
              width: max-content;
              animation: marqueeScroll 35s linear infinite;
            }
            .marquee-track-container:hover {
              animation-play-state: paused;
            }
          `}} />
          
          {/* Marquee Track */}
          <div className="marquee-track-container px-4">
            {loopProducts.map((product, idx) => (
              <MarqueeProductCard
                key={`${product.id}-${idx}`}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
