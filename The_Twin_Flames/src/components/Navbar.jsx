"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Trash2,
  MapPin,
  Mail,
  ArrowRight
} from "lucide-react";

// Symmetrical Scent Brand Flame/Lotus Logo Icon (Vector Sharp SVG)
const TwinFlameLogoIcon = (props) => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 text-[#b8986c] mb-0.5 transition-all duration-300" {...props}>
    {/* Central flame shape */}
    <path d="M50 20 C46 38 42 46 42 58 C42 63 46 67 50 67 C54 67 58 63 58 58 C58 46 54 38 50 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Inner dot */}
    <circle cx="50" cy="52" r="2.5" fill="currentColor" />
    {/* Left curving petal */}
    <path d="M47 38 C32 46 30 60 38 72 C41 75 45 77 48 77" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Right curving petal */}
    <path d="M53 38 C68 46 70 60 62 72 C59 75 55 77 52 77" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Outer base lines */}
    <path d="M34 68 C34 76 41 82 50 82 C59 82 66 76 66 68" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Symmetrical Scroll Ornament/Flourish below Text inside Logo
const TwinFlameOrnament = (props) => (
  <svg viewBox="0 0 100 20" className="w-12 h-3 text-[#b8986c] opacity-80 mt-1 transition-all duration-300" {...props}>
    <path d="M10 10 C30 10 40 5 45 10 C48 13 52 13 55 10 C60 5 70 10 90 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="50" cy="10" r="1.8" fill="currentColor" />
    <path d="M42 10 C45 7 48 7 50 10 C52 7 55 7 58 10" fill="none" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// Left Side Navigation Links Config
const leftLinks = [
  {
    name: "Home",
    href: "/",
    hasDropdown: false
  },
  {
    name: "Shop",
    href: "/collections",
    hasDropdown: true,
    dropdownItems: [
      { name: "Luxury Candles", href: "/collections?category=candles" },
      { name: "Reed Diffusers", href: "/collections?category=diffusers" },
      { name: "Wax Melts", href: "/collections?category=melts" },
      { name: "Gift Sets & Hampers", href: "/collections?category=gift-sets" }
    ]
  },
  {
    name: "Gifts",
    href: "/collections?category=gift-sets",
    hasDropdown: true,
    dropdownItems: [
      { name: "Signature Series", href: "/collections?category=signature" },
      { name: "Aromatherapy", href: "/collections?category=aromatherapy" },
      { name: "Festive Rituals", href: "/collections?category=festive" },
      { name: "Luxury Hampers", href: "/collections?category=gift-sets" }
    ]
  },
  {
    name: "Wedding",
    href: "/collections?category=gift-sets",
    hasDropdown: false
  }
];

// Right Side Navigation Links Config
const rightLinks = [
  {
    name: "About",
    href: "/about",
    hasDropdown: false
  },
  {
    name: "Offers",
    href: "/collections",
    hasDropdown: false
  },
  {
    name: "Contact",
    href: "/contactus",
    hasDropdown: false
  }
];

// Mobile Navigation Links Config (All combined)
const mobileLinks = [
  ...leftLinks,
  ...rightLinks
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  // Mock states for premium look
  const [wishlistCount, setWishlistCount] = useState(2);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Twin Flame Signature Candle",
      price: 1499.0,
      quantity: 1,
      image: "/images/twin_flame.jpeg"
    },
    {
      id: 2,
      name: "Gilded Sandalwood Diffuser",
      price: 1899.0,
      quantity: 1,
      image: "/images/twin_flame.jpeg"
    }
  ]);

  // Calculate cart count and total
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle sticky scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync scroll lock and drawer class with body
  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("drawer-open");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("drawer-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("drawer-open");
    };
  }, [isMobileMenuOpen, isCartOpen]);

  const updateCartQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      {/* Outer Floating Wrapper - Always fixed to prevent layout jumps, animates top position and scale smoothly */}
      <div
        className={`z-50 fixed left-1/2 -translate-x-1/2 w-[95%] xl:w-full xl:max-w-7xl px-4 md:px-6 transition-all duration-500 ease-in-out transform-gpu ${
          isScrolled
            ? "top-3 lg:top-[16px] xl:top-[20px]"
            : "top-[54px] lg:top-[68px] xl:top-[74px]"
        }`}
      >
        <nav
          className={`w-full transition-all duration-500 rounded-[28px] md:rounded-[36px] overflow-visible border bg-white ${
            isScrolled
              ? "shadow-lg border-[#d8bf9c]/25 scale-[0.985]"
              : "shadow-sm border-[#d8bf9c]/15 scale-100"
          }`}
        >
          {/* ========================================================================= */}
          {/* DESKTOP NAVBAR VIEW (lg and up) */}
          {/* ========================================================================= */}
          <div
            className="hidden lg:flex items-center justify-between w-full transition-all duration-500 relative h-16 xl:h-20"
          >
            
            {/* 1. Left Links Section */}
            <div className="flex-1 flex items-center justify-start pl-6 xl:pl-10 gap-4 xl:gap-9 h-full">
              {leftLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative py-2 h-full flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-[11px] xl:text-[12.5px] font-medium uppercase tracking-[0.2em] flex items-center gap-1 transition-colors duration-300 relative py-1 ${
                      pathname === link.href || (link.name === "Home" && pathname === "/")
                        ? "text-[#b8986c]"
                        : "text-luxury-black hover:text-[#b8986c]"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#b8986c] opacity-80" />
                    )}
                  </Link>

                  {/* Underline Indicator for Active Page */}
                  {(pathname === link.href || (link.name === "Home" && pathname === "/")) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-4 xl:bottom-5 left-0 right-0 h-[2px] bg-[#b8986c] mx-auto w-6"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Dropdown Menu Container */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white border border-zinc-100 shadow-xl rounded-xl py-3 mt-1.5 z-50"
                      >
                        {link.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-5 py-2.5 text-[11.5px] uppercase tracking-widest text-zinc-700 hover:text-wine hover:bg-zinc-50 font-medium transition-all duration-300"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* 2. Center Branding Section (Overlapping Circle and Concentric Arcs) */}
            <div
              className="relative flex-shrink-0 transition-all duration-500 z-10 flex items-center justify-center w-[160px] xl:w-[200px] h-16 xl:h-20"
            >
              {/* Concentric Gold Arcs SVG Background */}
              <svg
                width="240"
                height="96"
                viewBox="0 0 240 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[-1px] bottom-[-1px] left-0 w-full h-[calc(100%+2px)] pointer-events-none z-0 transition-all duration-500"
              >
                {/* Continuous Fill matching navbar color/opacity */}
                <path
                  d="M 0 0 H 39 A 94 94 0 0 0 39 96 H 201 A 94 94 0 0 1 201 0 H 240 V 96 H 0 Z"
                  fill="white"
                  className="transition-all duration-500"
                />

                {/* Left outer border & arc */}
                <path
                  d="M 0 0 H 39 A 94 94 0 0 0 39 96 H 0"
                  stroke="#d8bf9c"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Right outer border & arc */}
                <path
                  d="M 240 0 H 201 A 94 94 0 0 1 201 96 H 240"
                  stroke="#d8bf9c"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Left inner decorative arc */}
                <path
                  d="M 51 0 A 84 84 0 0 0 51 96"
                  stroke="#d8bf9c"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Right inner decorative arc */}
                <path
                  d="M 189 0 A 84 84 0 0 1 189 96"
                  stroke="#d8bf9c"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Overlapping Brand Circle Logo - Image expanded to fill full circle container, no extra texts */}
              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full border border-gold/35 flex items-center justify-center shadow-md z-10 transition-all duration-500 cursor-pointer bg-white w-24 xl:w-30 h-24 xl:h-30 -top-4 xl:-top-5 hover:scale-105"
              >
                <Link href="/" className="relative w-full h-full rounded-full overflow-hidden p-1 min-[1280px]:p-1.5">
                  <Image
                    src="/images/twin_flame.jpeg"
                    alt="Twin Flame Logo"
                    fill
                    sizes="(max-width: 1280px) 96px, 120px"
                    className="rounded-full object-cover aspect-square"
                  />
                </Link>
              </div>
            </div>

            {/* 3. Right Links & Actions Section */}
            <div className="flex-1 flex items-center justify-between pr-6 xl:pr-10 h-full">
              {/* Right Side Nav Links */}
              <div className="flex items-center gap-4 xl:gap-9 h-full">
                {rightLinks.map((link) => (
                  <div key={link.name} className="relative py-2 h-full flex items-center">
                    <Link
                      href={link.href}
                      className={`font-serif text-[11px] xl:text-[12.5px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 ${
                        pathname === link.href
                          ? "text-[#b8986c]"
                          : "text-luxury-black hover:text-[#b8986c]"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-4 xl:bottom-5 left-0 right-0 h-[2px] bg-[#b8986c] mx-auto w-6"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons Boxed Container */}
              <div className="flex items-center gap-3">
                <span className="w-[1px] h-6 bg-[#d8bf9c]/40 mr-1.5" />
                
                {/* Search Boxed Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-xl text-luxury-black hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 relative cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-4.5 h-4.5" />
                </button>

                {/* Profile Boxed Button */}
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-xl text-luxury-black hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 relative cursor-pointer"
                  aria-label="Account"
                >
                  <User className="w-4.5 h-4.5" />
                </Link>

                {/* Wishlist Boxed Button */}
                <button
                  onClick={() => setWishlistCount((c) => (c > 0 ? 0 : 2))}
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-xl text-luxury-black hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 relative cursor-pointer"
                  aria-label="Wishlist"
                >
                  <Heart className="w-4.5 h-4.5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#741F27] text-white font-sans text-[8.5px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#fdfbf9] shadow-sm">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                {/* Cart Boxed Button */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-xl text-luxury-black hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 relative cursor-pointer"
                  aria-label="Shopping Cart"
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#741F27] text-white font-sans text-[8.5px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#fdfbf9] shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE NAVBAR VIEW (lg hidden) - Optimized for responsiveness down to 320px */}
          {/* ========================================================================= */}
          <div className="flex lg:hidden items-center justify-between px-4 sm:px-5 py-3 w-full">
            
            {/* Mobile Logo Brand */}
            <Link href="/" className="flex items-center gap-2 select-none group">
              <div className="relative border border-gold/45 rounded-full p-0.5 overflow-hidden w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 bg-white flex-shrink-0 transition-colors group-hover:border-[#b8986c]">
                <Image
                  src="/images/twin_flame.jpeg"
                  alt="Twin Flame"
                  fill
                  sizes="(max-width: 375px) 32px, 36px"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[11px] min-[360px]:text-[13px] font-bold tracking-[0.12em] min-[360px]:tracking-[0.16em] text-luxury-black uppercase leading-none">
                  Twin Flame
                </span>
                <span className="text-[5.5px] min-[360px]:text-[6.5px] tracking-[0.25em] min-[360px]:tracking-[0.3em] text-[#741F27] font-bold uppercase mt-0.5 leading-none">
                  Luxury Candles
                </span>
              </div>
            </Link>

            {/* Mobile Actions and Hamburger Menu */}
            <div className="flex items-center gap-0.5 min-[360px]:gap-1.5 sm:gap-2.5">
              {/* Search mobile */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 min-[360px]:p-2 text-luxury-black hover:text-[#b8986c] transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5" />
              </button>

              {/* Wishlist mobile */}
              <button
                onClick={() => setWishlistCount((c) => (c > 0 ? 0 : 2))}
                className="p-1.5 min-[360px]:p-2 relative text-luxury-black hover:text-[#b8986c] transition-colors cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart className="w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-[#741F27] text-white font-sans font-bold text-[7.5px] min-[360px]:text-[8px] w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 rounded-full flex items-center justify-center border border-[#fdfbf9]">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart mobile */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1.5 min-[360px]:p-2 relative text-luxury-black hover:text-[#b8986c] transition-colors cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-[#741F27] text-white font-sans font-bold text-[7.5px] min-[360px]:text-[8px] w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 rounded-full flex items-center justify-center border border-[#fdfbf9]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 min-[360px]:p-2 text-luxury-black hover:text-wine transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 min-[360px]:w-5.5 min-[360px]:h-5.5" />
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-DOWN SEARCH OVERLAY (Preserved Overlay) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[180px] bg-white shadow-xl border-b border-gold/15 z-[150] px-4 sm:px-6 md:px-8 py-6 flex items-center justify-center"
          >
            <div className="w-full max-w-3xl flex flex-col gap-3.5">
              {/* Header Label */}
              <h4 className="text-[10px] tracking-[0.25em] text-[#b8986c] uppercase font-semibold text-center font-sans">
                Search Twin Flame Luxury Fragrances
              </h4>
              
              {/* Symmetrical Row: Search Box + Close Button */}
              <div className="w-full flex items-center gap-3">
                {/* Search Input wrapper */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="What scent are you searching for..."
                    className="w-full bg-[#FAF7F2]/65 border border-gold/30 hover:border-gold/60 rounded-full px-5 py-3 pr-12 font-sans text-xs md:text-sm focus:outline-none focus:border-[#741F27] focus:ring-1 focus:ring-[#741F27]/30 text-luxury-black placeholder-neutral-400 tracking-wide transition-all duration-300"
                    autoFocus
                  />
                  <button className="absolute right-4.5 top-1/2 -translate-y-1/2 text-luxury-gray hover:text-[#741F27] transition-colors">
                    <Search className="w-4.5 h-4.5" />
                  </button>
                </div>
                
                {/* Close Button aligned side-by-side to prevent top header overlaps */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 rounded-full bg-[#741F27] text-white hover:bg-gold hover:text-luxury-black transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer shrink-0 hover:scale-105"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* SLIDE-IN SHOPPING CART DRAWER (Preserved Drawer) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-[200]"
            />
            {/* Cart Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[201] flex flex-col"
            >
              {/* Cart Drawer Header */}
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#741F27]" />
                  <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-luxury-black">
                    Your Shopping Bag
                  </h3>
                  <span className="bg-zinc-100 text-luxury-black font-sans text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {cartCount}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full bg-wine text-white hover:bg-gold hover:text-luxury-black transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Cart Drawer Body (Scrollable items) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-luxury-black">
                        Your bag is currently empty
                      </p>
                      <p className="text-[12px] text-zinc-400 max-w-[240px] mx-auto mt-1 leading-relaxed font-sans">
                        Fill it with luxury fragrances to transform your space.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-2 inline-flex items-center gap-2 bg-wine text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-zinc-900 transition-all duration-300"
                    >
                      Shop Candles <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center border-b border-zinc-50 pb-6">
                      <div className="w-16 h-16 relative rounded-md border border-zinc-100 overflow-hidden bg-zinc-50 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans text-[13px] font-bold text-luxury-black line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-[12px] text-zinc-400 mt-0.5 font-sans">Scent: Signature Original</p>
                        <div className="flex items-center justify-between mt-2.5">
                          {/* Quantity control */}
                          <div className="flex items-center border border-zinc-200 rounded-full px-2.5 py-1 gap-3 bg-white">
                            <button
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="text-zinc-400 hover:text-luxury-black text-xs font-bold w-4 h-4 flex items-center justify-center cursor-pointer"
                            >
                              -
                            </button>
                            <span className="text-[12px] font-bold font-sans">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="text-zinc-400 hover:text-luxury-black text-xs font-bold w-4 h-4 flex items-center justify-center cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-sans text-xs font-bold">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, -item.quantity)}
                              className="text-zinc-300 hover:text-rose-500 transition-colors cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium tracking-widest uppercase text-zinc-400 font-sans">
                      Estimated Subtotal
                    </span>
                    <span className="font-sans text-lg font-bold text-luxury-black">
                      ₹{cartTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal font-sans">
                    Shipping & taxes calculated at checkout. Enjoy free shipping on all orders across India!
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    <button className="w-full bg-[#121212] hover:bg-[#741F27] text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-colors duration-300 cursor-pointer">
                      Proceed To Checkout
                    </button>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="w-full bg-transparent hover:bg-zinc-100 text-luxury-black border border-zinc-200 font-sans text-xs font-bold uppercase tracking-widest py-3.5 rounded-full transition-colors duration-300 cursor-pointer"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* SLIDE-IN MOBILE NAVIGATION DRAWER (Preserved Drawer) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[200]"
            />
            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-[201] flex flex-col"
            >
              {/* Mobile Drawer Header */}
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative border border-gold/40 rounded-full p-0.5 overflow-hidden w-9 h-9 bg-white flex-shrink-0">
                    <Image
                      src="/images/twin_flame.jpeg"
                      alt="Twin Flame"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <span className="font-serif text-sm font-bold tracking-widest text-luxury-black uppercase">
                    Twin Flame
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-wine text-white hover:bg-gold hover:text-luxury-black transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Mobile Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Search Bar inside drawer */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search fragrance..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3 pr-10 font-sans text-xs focus:outline-none focus:border-gold"
                  />
                  <Search className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>

                {/* Mobile Menu Links */}
                <div className="space-y-4">
                  {mobileLinks.map((link) => (
                    <div key={link.name} className="border-b border-zinc-50 pb-3">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                          className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-luxury-black hover:text-wine transition-colors"
                        >
                          {link.name}
                        </Link>
                        {link.hasDropdown && (
                          <button
                            onClick={() =>
                              setMobileActiveDropdown(
                                mobileActiveDropdown === link.name ? null : link.name
                              )
                            }
                            className="p-1 rounded cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-4.5 h-4.5 text-zinc-400 transition-transform duration-300 ${
                                mobileActiveDropdown === link.name ? "rotate-180 text-wine" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Dropdown Items Accordion */}
                      <AnimatePresence>
                        {link.hasDropdown && mobileActiveDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-zinc-50/50 rounded-md mt-2 px-4 space-y-2.5 py-2.5"
                          >
                            {link.dropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                href={dropItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-[12px] uppercase tracking-widest text-zinc-500 hover:text-[#741F27] font-medium transition-colors"
                              >
                                {dropItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Extra Mobile Drawer Details (Contact, Socials) */}
                <div className="pt-6 border-t border-zinc-100 space-y-4 font-sans">
                  <div className="flex items-center gap-3 text-zinc-500 text-xs">
                    <MapPin className="w-4 h-4 text-wine flex-shrink-0" />
                    <span>Boring Road, Patna, Bihar, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500 text-xs">
                    <Mail className="w-4 h-4 text-wine flex-shrink-0" />
                    <a href="mailto:info@twinflame.com" className="hover:underline">
                      info@twinflame.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <p className="text-[10px] tracking-wider text-zinc-400 text-center uppercase mb-3.5 font-sans">
                  Sign in or create an account
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border border-zinc-200 hover:bg-zinc-100 text-center py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-luxury-black transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-[#121212] hover:bg-[#741F27] text-white text-center py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
