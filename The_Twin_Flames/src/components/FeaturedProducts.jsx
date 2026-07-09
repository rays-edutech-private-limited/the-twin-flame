"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Sparkles } from "lucide-react";

// Mock products data with realistic Indian pricing
const products = [
  {
    id: 1,
    name: "Twin Flame Signature Candle",
    category: "candles",
    price: 1499.0,
    rating: 5,
    tag: "Best Seller",
    image: "/images/Product/p_1.webp"
  },
  {
    id: 2,
    name: "Gilded Sandalwood Diffuser",
    category: "diffusers",
    price: 1899.0,
    rating: 5,
    tag: "New Arrival",
    image: "/images/Product/p_2.webp"
  },
  {
    id: 3,
    name: "Smoky Amber & Fig Wax Melt",
    category: "melts",
    price: 899.0,
    rating: 4.8,
    tag: "Trending",
    image: "/images/Product/p_3.webp"
  },
  {
    id: 4,
    name: "Spiced Vetiver Brass Candle",
    category: "candles",
    price: 2499.0,
    rating: 5,
    tag: "Limited Ed.",
    image: "/images/Product/p_4.webp"
  }
];

// Custom luxury four-pointed star matching screenshot rating shape
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

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const filteredProducts =
    activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#bfa780] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Curated For Your Home
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black">
            Our Luxury Favorites
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Immerse yourself in our signature series. Crafted with meticulously sourced botanicals and natural soy wax blends.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-4.5 md:gap-8 mb-16 overflow-x-auto pb-2 border-b border-zinc-100 max-w-md mx-auto">
          {["all", "candles", "diffusers", "melts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 relative py-2.5 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-wine"
                  : "text-zinc-400 hover:text-luxury-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-wine"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group flex flex-col relative"
              >
                {/* Product Card Image Container */}
                <div className="relative aspect-square w-full bg-[#faf8f5] border border-zinc-100 overflow-visible rounded-2xl shadow-sm mb-4">
                  
                  {/* Badge: Centered, half-overlapping top border */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 bg-[#fdfbf7] border border-[#d8bf9c]/30 shadow-sm rounded-lg px-4.5 py-1 flex flex-col items-center justify-center min-w-[100px] select-none">
                    {/* Golden seal coin */}
                    <div className="absolute -top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-[#d8bf9c] via-[#ecd5b9] to-[#d8bf9c] border border-[#d8bf9c] shadow-[0_1px_3px_rgba(0,0,0,0.15)] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white/70" />
                    </div>
                    <span className="text-[7.5px] md:text-[8px] font-bold tracking-[0.25em] text-[#bfa780] uppercase text-center mt-1">
                      {product.tag}
                    </span>
                  </div>

                  {/* Main Product Image wrapper (Rounded) */}
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Quick Action Overlay (Wishlist and Shopping Bag buttons, responsive visibility) */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/* Wishlist Heart Button */}
                    <button
                      className="w-11 h-11 rounded-full bg-white/60 backdrop-blur-md border border-zinc-200/20 shadow-md hover:bg-white text-zinc-700 hover:text-rose-600 hover:scale-105 flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label="Add to Wishlist"
                    >
                      <Heart className="w-5 h-5 font-light" />
                    </button>
                    
                    {/* Glowing Shopping Bag Quick Add Button */}
                    <button
                      className="w-11 h-11 rounded-full bg-[#fdfbf7] border border-[#d8bf9c]/30 shadow-[0_0_12px_rgba(197,168,128,0.2)] hover:shadow-[0_0_18px_rgba(197,168,128,0.5)] hover:bg-[#d8bf9c] hover:text-white text-luxury-black hover:scale-105 flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label="Quick Shop"
                    >
                      <ShoppingBag className="w-5 h-5 font-light" />
                    </button>

                  </div>
                </div>

                {/* Product Details Block */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-between px-1">
                  <div>
                    {/* Title in Serif */}
                    <h3 className="font-serif text-base font-medium tracking-wide text-zinc-800 hover:text-wine cursor-pointer transition-colors duration-300 mt-1 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating + Price aligned in one row (left and right) */}
                  <div className="flex items-center justify-between pt-1">
                    
                    {/* Custom Diamond Star Rating */}
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

                    {/* Price Tag in Indian Rupees */}
                    <span className="font-sans text-sm md:text-[15px] font-extrabold text-luxury-black">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
