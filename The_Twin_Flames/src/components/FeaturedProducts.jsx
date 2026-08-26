"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";

// Mock products data using images from the our_products folder
const products = [
  {
    id: 1,
    name: "Twin Flame Signature Candle",
    category: "candles",  
    price: 1499.0,
    rating: 5,
    tag: "Best Seller",
    image: "/images/our_products/the_flame_01.webp"
  },
  {
    id: 2,
    name: "Gilded Sandalwood Diffuser",
    category: "diffusers",
    price: 1899.0,
    rating: 5,
    tag: "New Arrival",
    image: "/images/our_products/the_flame_02.jpeg"
  },
  {
    id: 3,
    name: "Smoky Amber & Fig Wax Melt",
    category: "melts",
    price: 899.0,
    rating: 4.8,
    tag: "Trending",
    image: "/images/our_products/the_flame_03.jpeg"
  },
  {
    id: 4,
    name: "Spiced Vetiver Brass Candle",
    category: "candles",
    price: 2499.0,
    rating: 5,
    tag: "Limited Ed.",
    image: "/images/our_products/the_flame_05.jpeg"
  }
];

// Custom luxury four-pointed star matching brand theme
const LuxuryStarIcon = ({ filled }) => (
  <svg
    className={`w-3.5 h-3.5 ${filled ? "text-[#d8bf9c] fill-[#d8bf9c]" : "text-white/20"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
  </svg>
);

// Individual Product Card Component supporting 3D Parallax Tilt
function ProductCard({ product }) {
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
      className="group flex flex-col relative p-4 bg-[#fefcf9] rounded-[32px] border border-[#d8bf9c]/35 hover:border-[#d8bf9c] shadow-md hover:shadow-2xl transition-shadow duration-500 ease-out min-h-[460px] transform-gpu"
    >
      {/* A. Floating Brand Tag Badge (Outside container to prevent clipping) */}
      <div className="absolute top-7 left-7 z-30 bg-[#761e27] border border-[#d8bf9c]/45 shadow-md rounded-full px-3.5 py-1 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
        <span className="text-[7.5px] md:text-[8px] font-bold tracking-[0.2em] text-[#d8bf9c] uppercase text-center">
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            className="w-10 h-10 rounded-full bg-[#761e27] border border-[#d8bf9c]/30 shadow-md hover:bg-[#8c2530] text-[#d8bf9c] hover:scale-105 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Quick Shop"
          >
            <ShoppingBag className="w-4.5 h-4.5 font-light" />
          </button>

        </div>
      </div>

      {/* C. Product Details Block */}
      <div className="space-y-2 flex-1 flex flex-col justify-between px-1">
        <div>
          {/* Title in Serif & Wine Red */}
          <h3 className="font-serif text-sm md:text-base font-semibold tracking-wide text-[#761e27] hover:text-[#521319] cursor-pointer transition-colors duration-300 mt-1 leading-snug">
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
            <span className="text-[11px] font-serif text-[#a1824a] font-bold ml-1.5">
              {product.rating}
            </span>
          </div>

          {/* Price Tag in Wine Red */}
          <span className="font-sans text-sm md:text-[15px] font-extrabold text-[#761e27]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>

        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filteredProducts =
    activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  // Set up intersection observer to trigger slide-in animations bidirectionally
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.08 } // Trigger when 8% of the section is visible
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-br from-[#761e27] via-[#521319] to-[#30060a] relative z-10 border-t border-[#d8bf9c]/25"
    >
      {/* Decorative luxury sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-[#d8bf9c] rounded-full blur-[0.5px]" />
        <div className="absolute top-[80%] right-[15%] w-1.5 h-1.5 bg-white rounded-full blur-[0.5px]" />
        <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-[#d8bf9c] rounded-full blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
          {/* A. Small Brand Prefix */}
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] mb-2.5 leading-none">
            EXCLUSIVE COLLECTION
          </span>

          {/* B. Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.9rem] font-normal tracking-wide text-[#faf8f5] leading-tight">
            New Arrivals
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
          <p className="font-sans text-xs sm:text-sm tracking-widest text-[#d8bf9c] font-medium max-w-xl">
            Meet the latest additions to Twin Flame collection...
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-4.5 md:gap-8 mb-10 overflow-x-auto pb-2 border-b border-[#d8bf9c]/20 max-w-md mx-auto">
          {["all", "candles", "diffusers", "melts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 relative py-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-white scale-105"
                  : "text-[#d8bf9c]/60 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d8bf9c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid (Controlled simultaneously by layout visible states) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {filteredProducts.map((product, idx) => {
            // Symmetrical slide-in animations: All cards slide in together from Left
            const animationClass = isVisible
              ? "transition-all duration-[1250ms] cubic-bezier(0.16, 1, 0.3, 1) transform-gpu opacity-100 translate-x-0"
              : "opacity-0 -translate-x-24 pointer-events-none transform-gpu";

            return (
              <div
                key={product.id}
                className={animationClass}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
