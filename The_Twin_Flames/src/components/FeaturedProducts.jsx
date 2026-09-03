"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  Eye,
  Check,
  X,
  Plus,
  Minus,
  ShieldCheck,
  Flame,
  Leaf,
} from "lucide-react";

// Curated luxury product catalog
const products = [
  {
    id: 1,
    name: "Midnight Amber & Smoked Oud",
    category: "candles",
    scentNotes: "Smoked Oud • Amber • Vanilla",
    weight: "250g • 50 hrs burn",
    price: 1499,
    originalPrice: 1899,
    rating: 5.0,
    reviews: 48,
    tag: "Best Seller",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_01.webp",
    description:
      "A deeply hypnotic blend of aged smoked oud, liquid amber crystals, and velvet vanilla bourbon with a crackling wooden wick.",
  },
  {
    id: 2,
    name: "Gilded Sandalwood & Cardamom",
    category: "diffusers",
    scentNotes: "Mysore Sandalwood • Cardamom",
    weight: "200ml • 90 days aroma",
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 36,
    tag: "New Arrival",
    tagColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/our_products/the_flame_02.jpeg",
    description:
      "Continuous luxury diffusion featuring creamy Mysore sandalwood steeped with fresh crushed green cardamom pods and white musk.",
  },
  {
    id: 3,
    name: "French Lavender & Crushed Fig",
    category: "melts",
    scentNotes: "Provence Lavender • Wild Fig",
    weight: "8 Wax Melts • 60 hrs",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 29,
    tag: "Trending",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_03.jpeg",
    description:
      "Handmade botanical wax melt tarts infused with dried Provence lavender buds and ripe wild fig syrup for an instant mood elevator.",
  },
  {
    id: 4,
    name: "Imperial Spiced Vetiver & Bergamot",
    category: "candles",
    scentNotes: "Calabrian Bergamot • Vetiver",
    weight: "320g • 65 hrs burn",
    price: 2499,
    originalPrice: 2999,
    rating: 5.0,
    reviews: 54,
    tag: "Limited Ed.",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_05.jpeg",
    description:
      "A majestic statement candle with Calabrian bergamot, smoky vetiver roots, and aged cedarwood in a weighted artisan vessel.",
  },
  {
    id: 5,
    name: "Kashmiri Rose & Golden Nectar",
    category: "candles",
    scentNotes: "Kashmiri Rose • Golden Amber",
    weight: "300g • 60 hrs burn",
    price: 2199,
    originalPrice: 2699,
    rating: 4.9,
    reviews: 42,
    tag: "Bestseller",
    tagColor: "bg-[#761e27] text-[#f8eddc]",
    image: "/images/our_products/the_flame_06.png",
    description:
      "Handcrafted candle featuring heirloom Kashmiri rose petals steeped in liquid golden amber nectar with crushed pink cardamom pods.",
  },
  {
    id: 6,
    name: "Velvet Vanilla & Smoked Bourbon",
    category: "candles",
    scentNotes: "Madagascar Vanilla • Bourbon",
    weight: "280g • 55 hrs burn",
    price: 1799,
    originalPrice: 2199,
    rating: 5.0,
    reviews: 38,
    tag: "Exclusive",
    tagColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/our_products/the_flame_07.png",
    description:
      "Deeply seductive Madagascar vanilla bourbon blended with velvet smoked agarwood and crackling soothing wooden wicks.",
  },
];

// Category Tabs Definition with Custom Luxury SVGs matching reference layout
const categoryTabs = [
  {
    id: "all",
    label: "ALL PRODUCTS",
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
        <path
          d="M12 14c-.6-.7-1.5-1-2.2-.3-.7.7 0 1.8 2.2 3.3 2.2-1.5 2.9-2.6 2.2-3.3-.7-.7-1.6-.4-2.2.3z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    id: "candles",
    label: "CANDLES",
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="9.5" width="10" height="12" rx="1.5" />
        <line x1="12" y1="9.5" x2="12" y2="6.5" />
        <path
          d="M12 2.5c-1.3 1.3-1.3 2.8 0 3.8 1.3-1 1.3-2.5 0-3.8z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    id: "diffusers",
    label: "DIFFUSERS",
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6c0-1.5-.8-2.5-2-3v-1h-2v1c-1.2.5-2 1.5-2 3z" />
        <line x1="12" y1="9" x2="12" y2="2.5" />
        <line x1="11" y1="9" x2="8" y2="3.5" />
        <line x1="13" y1="9" x2="16" y2="3.5" />
      </svg>
    ),
  },
  {
    id: "melts",
    label: "WAX MELTS",
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9.5h12l-1.5 9.5a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 9.5z" />
        <line x1="5" y1="9.5" x2="19" y2="9.5" />
        <path d="M9 6.5c0-1.3.9-1.8.9-2.5" />
        <path d="M12 6.5c0-1.3.9-1.8.9-2.5" />
        <path d="M15 6.5c0-1.3.9-1.8.9-2.5" />
      </svg>
    ),
  },
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalAdded, setModalAdded] = useState(false);

  // Prevent background scrolling when Quick View is active & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setQuickViewProduct(null);
      }
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

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white text-[#121212] select-none relative overflow-hidden border-b border-[#e8dfd5]">
      {/* Subtle luxury background elements on pure white theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#faf5ee] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#f6eee4] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10 md:mb-12">
          {/* Main Title in Luxury Serif */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Featured <span className="italic font-serif text-[#761e27]">Products</span>
          </h2>

          {/* Gold Decorative Accent */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 my-2.5 sm:my-3">
            <div className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-transparent to-[#d8bf9c]" />
            <span className="text-[#b8986c] text-[10px] sm:text-[11px]">✦</span>
            <div className="h-[1px] w-10 sm:w-12 bg-gradient-to-l from-transparent to-[#d8bf9c]" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl font-normal tracking-wide px-2">
            Immerse your living sanctuary in handpoured botanical waxes and master-blended fragrance notes.
          </p>

          {/* ========================================================================= */}
          {/* LUXURY CAPSULE FILTER TABS (Mobile-Responsive Horizontal Scroll)          */}
          {/* ========================================================================= */}
          <div className="w-full overflow-x-auto no-scrollbar py-2 mt-4 sm:mt-6 md:mt-8 flex justify-start sm:justify-center px-1 sm:px-0">
            <div className="inline-flex items-center p-1 sm:p-1.5 md:p-2 bg-[#fdfbf9] border border-[#eddcd0] rounded-full shadow-xs gap-1 sm:gap-1.5 md:gap-2 mx-auto sm:mx-0 shrink-0">
              {categoryTabs.map((tab, idx) => {
                const isActive = activeCategory === tab.id;
                return (
                  <React.Fragment key={tab.id}>
                    <button
                      onClick={() => setActiveCategory(tab.id)}
                      className={`group flex items-center gap-1.5 sm:gap-2 md:gap-2.5 py-1.5 sm:py-2 px-2.5 sm:px-3.5 md:px-4 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer select-none shrink-0 ${
                        isActive
                          ? "bg-[#761e27] text-white shadow-sm"
                          : "bg-transparent text-zinc-700 hover:text-[#761e27] hover:bg-[#faf5ee]"
                      }`}
                    >
                      {/* Round Icon Circle */}
                      <span
                        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                          isActive
                            ? "bg-white text-[#761e27] shadow-xs"
                            : "bg-[#f5ece0] text-[#761e27] group-hover:bg-[#eedcc9]"
                        }`}
                      >
                        {tab.icon}
                      </span>

                      {/* Single-Line Label Text */}
                      <span className="font-sans text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase pr-1 sm:pr-1.5">
                        {tab.label}
                      </span>
                    </button>

                    {/* Subtle Vertical Divider between non-active tabs */}
                    {idx < categoryTabs.length - 1 && (
                      <div className="hidden sm:block h-5 md:h-6 w-[1px] bg-[#e8dfd5] shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Grid (Responsive: 1 col on Mobile, 2 on Tablet, 3 on Desktop) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const isAdded = addedId === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#ebe4dc] hover:border-[#b8986c]/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(118,30,39,0.08)] transition-all duration-500 overflow-hidden"
                >
                  {/* Compact Image Container */}
                  <div className="relative w-full aspect-[4/3.4] bg-[#faf8f5] overflow-hidden">
                    {/* Floating Luxury Tag Badge */}
                    <div
                      className={`absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase shadow-xs ${product.tagColor}`}
                    >
                      {product.tag}
                    </div>

                    {/* Quick Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Wishlist"
                      className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-xs border border-zinc-200/60 shadow-sm flex items-center justify-center text-zinc-600 hover:text-rose-600 hover:bg-white active:scale-90 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
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

                    {/* Quick Action Overlay (Slide-Up on Hover for Tablet/Desktop) */}
                    <div className="absolute inset-x-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 hidden sm:flex gap-2">
                      {/* Brand Colored Quick Add Button */}
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md cursor-pointer ${
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
                        className="w-10 h-10 rounded-xl bg-white hover:bg-[#faf5ee] border border-[#d8bf9c]/50 text-[#761e27] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                        title="Quick View Details"
                        aria-label="Quick View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Product Details Information */}
                  <div className="p-3.5 sm:p-4 md:p-5 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Scent Notes & Weight */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-400 font-sans tracking-wide mb-1 sm:mb-1.5">
                        <span className="font-medium text-[#b8986c] truncate max-w-[65%] sm:max-w-[70%]">
                          {product.scentNotes.split("•")[0]}
                        </span>
                        <span>{product.weight.split("•")[0]}</span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => openQuickView(product)}
                        className="font-serif text-sm sm:text-base md:text-[17px] font-semibold text-[#1a1112] hover:text-[#761e27] cursor-pointer transition-colors duration-300 line-clamp-1 leading-snug"
                      >
                        {product.name}
                      </h3>

                      {/* Star Rating & Review Count */}
                      <div className="flex items-center gap-1.5 mt-1.5 sm:mt-2">
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
                        <span className="text-[10.5px] sm:text-[11px] font-bold text-zinc-700">
                          {product.rating}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-zinc-400">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Price & Action Section */}
                    <div className="pt-2.5 sm:pt-3.5 mt-2.5 sm:mt-3 border-t border-[#f0e8df] flex items-center justify-between">
                      {/* Price Details */}
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="font-sans text-sm sm:text-base md:text-lg font-bold text-[#761e27]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice && (
                          <span className="font-sans text-[11px] sm:text-xs text-zinc-400 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      {/* Mobile Actions (Eye QuickView + Cart Button) */}
                      <div className="flex items-center gap-1.5 sm:hidden">
                        <button
                          onClick={() => openQuickView(product)}
                          className="w-7 h-7 rounded-full border border-[#d8bf9c]/60 bg-[#faf6f0] text-[#761e27] flex items-center justify-center active:scale-90 transition-all cursor-pointer"
                          aria-label="Quick View"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-90 ${
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Products CTA Link */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <Link
            href="#all-products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#761e27] hover:bg-[#8c2530] text-white font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>Explore Complete Collection</span>
            <span className="text-[#f8eddc] group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* COMPACT & ELEVATED QUICK VIEW POPUP MODAL (z-[99999] Top Level)           */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
            {/* Backdrop with Soft Blur */}
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
              className="relative w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#e8dfd5] z-10 my-auto no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                aria-label="Close modal"
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-zinc-700 hover:text-black border border-zinc-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Compact Image Showcase */}
                <div className="relative aspect-[4/3] md:aspect-auto min-h-[220px] md:min-h-[360px] bg-[#faf8f5] overflow-hidden">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Floating Tag */}
                  <div
                    className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 px-2.5 sm:px-3 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-bold tracking-[0.2em] uppercase shadow-xs ${quickViewProduct.tagColor}`}
                  >
                    {quickViewProduct.tag}
                  </div>
                </div>

                {/* Right: Condensed Details & Purchase Form */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-white">
                  <div>
                    {/* Category Label */}
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8986c] font-sans">
                      {quickViewProduct.category.toUpperCase()}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-[#181112] mt-0.5 mb-1 sm:mb-1.5 leading-tight">
                      {quickViewProduct.name}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mb-2 sm:mb-2.5">
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
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-zinc-800">
                        {quickViewProduct.rating}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-zinc-400">
                        ({quickViewProduct.reviews} reviews)
                      </span>
                    </div>

                    {/* Price & MRP Row */}
                    <div className="flex items-baseline gap-2 pb-2 sm:pb-2.5 mb-2 sm:mb-2.5 border-b border-[#f0e8df]">
                      <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-[#761e27]">
                        ₹{quickViewProduct.price.toLocaleString("en-IN")}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <span className="font-sans text-xs text-zinc-400 line-through">
                          ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-sans text-[9.5px] sm:text-[10px] font-bold">
                        Save ₹
                        {(
                          quickViewProduct.originalPrice - quickViewProduct.price
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Compact Description */}
                    <p className="font-sans text-[11.5px] sm:text-xs text-zinc-600 leading-relaxed mb-2.5 sm:mb-3">
                      {quickViewProduct.description}
                    </p>

                    {/* Scent Notes & Specs */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#faf7f2] border border-[#ebe2d8] space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans">
                        <Flame className="w-3 h-3 text-[#b8986c] shrink-0" />
                        <span className="text-zinc-500">Notes:</span>
                        <span className="font-medium text-zinc-800">
                          {quickViewProduct.scentNotes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans">
                        <Leaf className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="text-zinc-500">Burn Life:</span>
                        <span className="font-medium text-zinc-800">
                          {quickViewProduct.weight}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Quantity & Add Button */}
                  <div className="space-y-2">
                    <div className="flex flex-row items-center gap-2 sm:gap-2.5">
                      {/* Quantity Counter */}
                      <div className="flex items-center rounded-lg border border-[#d8bf9c]/60 bg-[#faf8f5] p-0.5 shrink-0">
                        <button
                          onClick={() =>
                            setModalQuantity((q) => Math.max(1, q - 1))
                          }
                          aria-label="Decrease quantity"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center text-zinc-700 hover:bg-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 sm:w-8 text-center font-sans text-xs font-bold text-zinc-900">
                          {modalQuantity}
                        </span>
                        <button
                          onClick={() => setModalQuantity((q) => q + 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center text-zinc-700 hover:bg-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Add to Bag Button */}
                      <button
                        onClick={handleModalAddToCart}
                        className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 cursor-pointer ${
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

                    {/* Trust Guarantee */}
                    <div className="flex items-center justify-center gap-1.5 text-[9.5px] sm:text-[10px] text-zinc-400 font-sans">
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
