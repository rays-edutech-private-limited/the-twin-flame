"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  Eye,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Minus,
  ShieldCheck,
  Flame,
  Leaf,
  Sparkles,
} from "lucide-react";

// Curated luxury product collection
const collectionProducts = [
  {
    id: 101,
    name: "Royal Oud & Smoked Vanilla",
    scentNotes: "Smoked Oud • Madagascar Vanilla",
    weight: "280g • 55 hrs burn",
    price: 1599,
    originalPrice: 1999,
    rating: 5.0,
    reviews: 62,
    tag: "Customer Favorite",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_01.webp",
    description:
      "An opulent fusion of rich velvety smoked agarwood, sweet Madagascar vanilla bourbon, and crushed cardamom pods poured with crackling wooden wicks.",
  },
  {
    id: 102,
    name: "Mysore Sandalwood & Cedar",
    scentNotes: "Mysore Sandalwood • Cedarwood",
    weight: "220ml • 90 days aroma",
    price: 1999,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 47,
    tag: "New Edition",
    tagColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/our_products/the_flame_02.jpeg",
    description:
      "A calming meditative reed diffuser releasing woody notes of ancient Mysore sandalwood, Atlas cedar, and lingering amber resin.",
  },
  {
    id: 103,
    name: "Botanical Lavender & French Fig",
    scentNotes: "Provence Lavender • Wild Fig",
    weight: "8 Wax Melts • 65 hrs",
    price: 949,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 38,
    tag: "Trending",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_03.jpeg",
    description:
      "Artisan wax melt cubes infused with handpicked Provence lavender florets and sweet Mediterranean wild fig syrup for serene afternoons.",
  },
  {
    id: 104,
    name: "Spiced Vetiver & Bergamot Essence",
    scentNotes: "Calabrian Bergamot • Vetiver Root",
    weight: "340g • 70 hrs burn",
    price: 2599,
    originalPrice: 3199,
    rating: 5.0,
    reviews: 73,
    tag: "Limited Ed.",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_05.jpeg",
    description:
      "A bold, regal scented candle boasting Italian bergamot, earthy vetiver roots, and warm amber resin in a handcrafted artisanal glass vessel.",
  },
  {
    id: 105,
    name: "Amber Bloom & Kashmiri Rose",
    scentNotes: "Kashmiri Rose • Golden Amber",
    weight: "260g • 50 hrs burn",
    price: 1699,
    originalPrice: 2099,
    rating: 4.9,
    reviews: 51,
    tag: "Signature Blend",
    tagColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/our_products/the_flame_06.png",
    description:
      "Heirloom Kashmiri rose petals infused with warm golden amber nectar and delicate crushed pink peppercorns for romantic evening settings.",
  },
  {
    id: 106,
    name: "Sacred Cinnamon & Warm Clove",
    scentNotes: "Ceylon Cinnamon • Clove Bud",
    weight: "300g • 60 hrs burn",
    price: 1799,
    originalPrice: 2199,
    rating: 5.0,
    reviews: 58,
    tag: "Festive Pick",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_07.png",
    description:
      "Inviting winter spices featuring freshly ground Ceylon cinnamon bark, aromatic clove buds, and toasted nutmeg in a soy-coconut wax blend.",
  },
];

export default function Produtscollection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [wishlist, setWishlist] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalAdded, setModalAdded] = useState(false);

  // Responsive items per page (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, collectionProducts.length - itemsPerPage);

  // Auto-Slide Interval Timer (Runs reliably every 3.5s and pauses on hover or modal open)
  useEffect(() => {
    if (isHovered || quickViewProduct) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3600);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex, quickViewProduct]);

  // Lock scroll when Quick View Modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setQuickViewProduct(null);
    };
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [quickViewProduct]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (id) => {
    setAddedId(id);
    setTimeout(() => {
      setAddedId(null);
    }, 1800);
  };

  const handleModalAddToCart = () => {
    setModalAdded(true);
    setTimeout(() => {
      setModalAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setModalQuantity(1);
    setModalAdded(false);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#faf8f5] text-[#121212] select-none relative overflow-hidden border-t border-[#e8dfd5]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d8bf9c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#761e27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Tag */}
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] text-[#8a6839] mb-1.5 font-sans">
              MOST LOVED SELECTIONS
            </span>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#181112] tracking-tight leading-tight">
              Customer <span className="italic font-serif text-[#761e27]">Favorites</span>
            </h2>

            {/* Gold Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="h-[1.5px] w-12 bg-[#b8986c]" />
              <span className="text-[#b8986c] text-[10px]">✦</span>
              <div className="h-[1px] w-8 bg-[#d8bf9c]/60" />
            </div>

            {/* Subtitle */}
            <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl font-normal tracking-wide">
              Discover the signature aromas and handcrafted gifts our community keeps coming back to.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Products"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#761e27] text-[#761e27] hover:text-white border border-[#d8bf9c] shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Products"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#761e27] text-[#761e27] hover:text-white border border-[#d8bf9c] shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 group"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* AUTO-WORKING CAROUSEL TRACK (3 COMPACT SLEEK CARDS IN 1 VIEW)              */}
        {/* ========================================================================= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full overflow-hidden py-1"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {collectionProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  style={{ width: `${100 / itemsPerPage}%` }}
                  className="shrink-0 px-2 sm:px-3"
                >
                  <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#ebe4dc] hover:border-[#b8986c]/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(118,30,39,0.08)] transition-all duration-500 overflow-hidden group">
                    
                    {/* Compact Image Container with Reduced Height */}
                    <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.6] bg-[#faf8f5] overflow-hidden">
                      {/* Floating Luxury Tag Badge */}
                      <div
                        className={`absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-[8.5px] font-bold tracking-[0.2em] uppercase shadow-xs ${product.tagColor}`}
                      >
                        {product.tag}
                      </div>

                      {/* Quick Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        aria-label="Add to Wishlist"
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs border border-zinc-200/60 shadow-sm flex items-center justify-center text-zinc-600 hover:text-rose-600 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-colors ${
                            isWishlisted ? "fill-rose-600 text-rose-600" : ""
                          }`}
                        />
                      </button>

                      {/* Main Product Image with Smooth Zoom */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />

                      {/* Quick Action Overlay (Slide-Up on Hover) */}
                      <div className="absolute inset-x-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:flex gap-2">
                        {/* Brand Colored Quick Add Button */}
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className={`flex-1 py-2 px-3 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md cursor-pointer ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#761e27] hover:bg-[#8c2530] text-white"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[#f8eddc]" />
                              <span>Quick Add</span>
                            </>
                          )}
                        </button>

                        {/* Quick View Eye Button */}
                        <button
                          onClick={() => openQuickView(product)}
                          className="w-9 h-9 rounded-xl bg-white hover:bg-[#faf5ee] border border-[#d8bf9c]/50 text-[#761e27] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                          title="Quick View Details"
                          aria-label="Quick View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Compact Product Details Block */}
                    <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        {/* Scent Notes & Weight */}
                        <div className="flex items-center justify-between text-[10.5px] text-zinc-400 font-sans tracking-wide mb-1">
                          <span className="font-medium text-[#b8986c] truncate max-w-[65%]">
                            {product.scentNotes.split("•")[0]}
                          </span>
                          <span>{product.weight.split("•")[0]}</span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => openQuickView(product)}
                          className="font-serif text-sm sm:text-base font-semibold text-[#1a1112] hover:text-[#761e27] cursor-pointer transition-colors duration-300 line-clamp-1 leading-snug"
                        >
                          {product.name}
                        </h3>

                        {/* Ratings */}
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-zinc-200 fill-zinc-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-bold text-zinc-700">
                            {product.rating}
                          </span>
                          <span className="text-[10px] text-zinc-400">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Price Row */}
                      <div className="pt-2.5 mt-2.5 border-t border-[#f0e8df] flex items-center justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-sans text-base font-bold text-[#761e27]">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          {product.originalPrice && (
                            <span className="font-sans text-xs text-zinc-400 line-through">
                              ₹{product.originalPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>

                        {/* Mobile Add to Cart Button */}
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className={`sm:hidden p-1.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#761e27] hover:bg-[#8c2530] text-white"
                          }`}
                          aria-label="Add to cart"
                        >
                          {isAdded ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <ShoppingBag className="w-3.5 h-3.5 text-[#f8eddc]" />
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-7 bg-[#761e27]"
                  : "w-2 bg-[#d8bf9c]/60 hover:bg-[#b8986c]"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COMPACT & ELEVATED QUICK VIEW POPUP MODAL (z-[99999] Top Level)           */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Compact Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#e8dfd5] z-10 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-zinc-700 hover:text-black border border-zinc-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Compact Image Showcase */}
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[350px] bg-[#faf8f5] overflow-hidden">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div
                    className={`absolute top-3 left-3 z-10 px-3 py-0.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase shadow-xs ${quickViewProduct.tagColor}`}
                  >
                    {quickViewProduct.tag}
                  </div>
                </div>

                {/* Right: Condensed Details & Purchase Form */}
                <div className="p-5 sm:p-6 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8986c] font-sans">
                      SIGNATURE COLLECTION
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181112] mt-0.5 mb-1.5 leading-tight">
                      {quickViewProduct.name}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(quickViewProduct.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-zinc-200 fill-zinc-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-zinc-800">
                        {quickViewProduct.rating}
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        ({quickViewProduct.reviews} reviews)
                      </span>
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-2 pb-2.5 mb-2.5 border-b border-[#f0e8df]">
                      <span className="font-sans text-xl sm:text-2xl font-bold text-[#761e27]">
                        ₹{quickViewProduct.price.toLocaleString("en-IN")}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <span className="font-sans text-xs text-zinc-400 line-through">
                          ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-sans text-[10px] font-bold">
                        Save ₹
                        {(
                          quickViewProduct.originalPrice - quickViewProduct.price
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-zinc-600 leading-relaxed mb-3">
                      {quickViewProduct.description}
                    </p>

                    {/* Scent Notes & Specs */}
                    <div className="p-2.5 rounded-xl bg-[#faf7f2] border border-[#ebe2d8] space-y-1.5 mb-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-sans">
                        <Flame className="w-3 h-3 text-[#b8986c] shrink-0" />
                        <span className="text-zinc-500">Notes:</span>
                        <span className="font-medium text-zinc-800">
                          {quickViewProduct.scentNotes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-sans">
                        <Leaf className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="text-zinc-500">Burn Life:</span>
                        <span className="font-medium text-zinc-800">
                          {quickViewProduct.weight}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Add to Bag */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center rounded-lg border border-[#d8bf9c]/60 bg-[#faf8f5] p-0.5">
                        <button
                          onClick={() =>
                            setModalQuantity((q) => Math.max(1, q - 1))
                          }
                          aria-label="Decrease quantity"
                          className="w-7 h-7 rounded flex items-center justify-center text-zinc-700 hover:bg-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-xs font-bold text-zinc-900">
                          {modalQuantity}
                        </span>
                        <button
                          onClick={() => setModalQuantity((q) => q + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 rounded flex items-center justify-center text-zinc-700 hover:bg-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={handleModalAddToCart}
                        className={`flex-1 py-2.5 px-4 rounded-xl font-sans text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 cursor-pointer ${
                          modalAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-[#761e27] hover:bg-[#8c2530] text-white"
                        }`}
                      >
                        {modalAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Bag!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-[#f8eddc]" />
                            <span>
                              Add to Bag • ₹
                              {(
                                quickViewProduct.price * modalQuantity
                              ).toLocaleString("en-IN")}
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-sans">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>100% Handcrafted • Free Shipping Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
