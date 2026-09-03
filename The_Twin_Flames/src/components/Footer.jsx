"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Heart,
  ArrowUp,
  Award,
  Leaf,
  Crown,
  User,
  ArrowRight,
} from "lucide-react";

// Symmetrical Scent Brand Flame Logo Icon
const FlameLogoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-11 h-11 text-[#d8bf9c]">
    <path
      d="M50 18 C44 38 40 46 40 60 C40 66 44 70 50 70 C56 70 60 66 60 60 C60 46 56 38 50 18 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle cx="50" cy="54" r="3.5" fill="currentColor" />
    <path
      d="M45 38 C28 48 26 62 35 74 C38 78 43 80 46 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M55 38 C72 48 74 62 65 74 C62 78 57 80 54 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 70 C32 79 40 85 50 85 C60 85 68 79 68 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Social Media Custom SVG Icons
const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4.5 h-4.5"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4.5 h-4.5"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4.5 h-4.5"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full relative pt-0 z-20 bg-transparent">
      {/* Decorative Top Border Curve with Central Logo Shield */}
      <div className="absolute top-[-20px] left-0 w-full flex items-start justify-between pointer-events-none select-none z-30 h-[60px] overflow-visible">
        {/* Left line */}
        <div className="h-[1.5px] bg-[#d8bf9c]/30 flex-grow mt-[19.25px]" />
        
        {/* Center curve SVG */}
        <div className="w-[160px] h-[60px] relative flex-shrink-0">
          <svg viewBox="0 0 160 60" fill="none" className="w-full h-full text-[#d8bf9c]/30 filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]">
            <path d="M 0 20 L 48 20 Q 56 20 60 27 A 29 29 0 0 0 100 27 Q 104 20 112 20 L 160 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          
          {/* Central Logo Shield */}
          <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 rounded-full border border-[#d8bf9c]/50 bg-[#30060a] flex items-center justify-center w-14 h-14 z-20 overflow-hidden p-0.5 shadow-[0_0_30px_rgba(216,191,156,0.65)] animate-pulse">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/twin_flame.jpeg"
                alt="Twin Flame Logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right line */}
        <div className="h-[1.5px] bg-[#d8bf9c]/30 flex-grow mt-[19.25px]" />
      </div>

      {/* Main Footer: Deep Luxury Wine Red / Black Gradient with Background Image */}
      <footer className="w-full bg-gradient-to-b from-[#30060a] via-[#1a0305] to-[#0a0001] text-zinc-200 pt-16 sm:pt-20 pb-12 relative overflow-hidden border-t border-[#d8bf9c]/25 select-none">
        
        {/* Full-Width Background Image Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-35 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/our_products/bg_remove_02.png"
            alt="Twin Flame Premium Footer Background"
            fill
            sizes="100vw"
            className="object-cover object-center blur-[2px] scale-[1.02]"
            priority
          />
        </div>

        {/* Ambient Warm Golden Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
          
          {/* ========================================================================= */}
          {/* TOP 5-COLUMN BALANCED GRID SECTION                                        */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 mb-14 items-start">
            
            {/* COLUMN 1: BRAND LOGO, BIO & SOCIALS (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3.5">
              <Link href="/" className="flex flex-col items-center sm:items-start gap-2 group">
                <div className="relative border-2 border-[#d8bf9c]/60 rounded-full p-0.5 w-14 h-14 sm:w-16 sm:h-16 bg-white shadow-md flex-shrink-0 overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/twin_flame.jpeg"
                      alt="Twin Flame Logo"
                      fill
                      sizes="64px"
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] text-white uppercase leading-tight">
                    TWIN FLAME
                  </h3>
                  <span className="text-[10px] sm:text-[10.5px] tracking-[0.28em] text-[#d8bf9c] font-bold uppercase block mt-1">
                    LUXURY CANDLES
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed max-w-[270px]">
                We craft premium, hand-poured candles that bring warmth, elegance and tranquility to your space. Each candle is made with love.
              </p>

              {/* Gold Divider with Sparkle */}
              <div className="flex items-center gap-2.5 w-full max-w-[200px] justify-center sm:justify-start py-0.5">
                <div className="h-[1px] w-12 bg-[#d8bf9c]/40" />
                <span className="text-[#d8bf9c] text-[10px]">✦</span>
                <div className="h-[1px] w-12 bg-[#d8bf9c]/40" />
              </div>

              {/* Social Icons (Circles matching reference) */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center text-[#d8bf9c] hover:bg-[#761e27] hover:text-white hover:border-[#d8bf9c] transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center text-[#d8bf9c] hover:bg-[#761e27] hover:text-white hover:border-[#d8bf9c] transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center text-[#d8bf9c] hover:bg-[#761e27] hover:text-white hover:border-[#d8bf9c] transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center text-[#d8bf9c] hover:bg-[#761e27] hover:text-white hover:border-[#d8bf9c] transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            {/* COLUMN 2: SHOP COLLECTION (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <h4 className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#d8bf9c] flex items-center gap-1.5 whitespace-nowrap">
                <Crown className="w-4 h-4 text-[#d8bf9c] shrink-0" />
                <span>SHOP COLLECTION</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-300 font-light w-full">
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Luxury Candles
                  </Link>
                </li>
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Scented Candles
                  </Link>
                </li>
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Wax Melts
                  </Link>
                </li>
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#all-products" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: CUSTOMER HELP (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <h4 className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#d8bf9c] flex items-center gap-1.5 whitespace-nowrap">
                <User className="w-4 h-4 text-[#d8bf9c] shrink-0" />
                <span>CUSTOMER HELP</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-300 font-light w-full">
                <li>
                  <Link href="#story" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Candle Care Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-200 block hover:translate-x-1 whitespace-nowrap">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: GET IN TOUCH (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <h4 className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#d8bf9c] flex items-center gap-1.5 whitespace-nowrap">
                <Phone className="w-4 h-4 text-[#d8bf9c] shrink-0" />
                <span>GET IN TOUCH</span>
              </h4>

              <ul className="space-y-3.5 text-xs sm:text-[13px] text-zinc-300 font-light w-full">
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <MapPin className="w-3.5 h-3.5 text-[#d8bf9c] shrink-0 mt-0.5" />
                  <span className="leading-snug">Boring Road, Patna, Bihar 800001</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start whitespace-nowrap">
                  <Phone className="w-3.5 h-3.5 text-[#d8bf9c] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#d8bf9c] transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start whitespace-nowrap">
                  <Mail className="w-3.5 h-3.5 text-[#d8bf9c] shrink-0" />
                  <a href="mailto:hello@twinflame.com" className="hover:text-[#d8bf9c] transition-colors">
                    hello@twinflame.com
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start whitespace-nowrap">
                  <Globe className="w-3.5 h-3.5 text-[#d8bf9c] shrink-0" />
                  <a href="https://www.twinflame.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d8bf9c] transition-colors">
                    www.twinflame.com
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 5: RIGHT FEATURED VALUE PILLARS CARD (lg:col-span-3) */}
            <div className="lg:col-span-3 w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#240407]/85 backdrop-blur-md border-2 border-[#d8bf9c]/35 shadow-[0_8px_32px_rgba(0,0,0,0.3)] space-y-3.5">
                
                {/* Pillar 1: 100% Natural */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#d8bf9c]/20">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-4.5 h-4.5 text-[#d8bf9c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-[#d8bf9c] truncate">
                      100% NATURAL
                    </h5>
                    <p className="text-[11.5px] sm:text-xs text-zinc-300 font-light leading-snug mt-0.5">
                      Premium soy wax & clean scents
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Hand Poured */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#d8bf9c]/20">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Leaf className="w-4.5 h-4.5 text-[#d8bf9c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-[#d8bf9c] truncate">
                      HAND POURED
                    </h5>
                    <p className="text-[11.5px] sm:text-xs text-zinc-300 font-light leading-snug mt-0.5">
                      Crafted with care & attention
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Made With Love */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-[#d8bf9c]/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Heart className="w-4.5 h-4.5 text-[#d8bf9c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-[#d8bf9c] truncate">
                      MADE WITH LOVE
                    </h5>
                    <p className="text-[11.5px] sm:text-xs text-zinc-300 font-light leading-snug mt-0.5">
                      Every candle is made with love
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* BOTTOM COPYRIGHT & PAYMENT ROW                                            */}
          {/* ========================================================================= */}
          <div className="pt-8 border-t border-[#d8bf9c]/25 flex flex-col md:flex-row items-center justify-between gap-5 text-xs sm:text-[13px] text-zinc-300 font-sans">
            
            {/* Copyright Statement */}
            <div className="text-center md:text-left whitespace-nowrap">
              <span>© 2026 Twin Flame Candles. All Rights Reserved.</span>
            </div>

            {/* Payment Badges & Scroll to Top (with safe right margin to prevent overlap) */}
            <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap sm:mr-20 lg:mr-24">
              <span className="text-xs sm:text-[13px] text-zinc-300 font-medium">We accept</span>

              <div className="flex items-center gap-2">
                {/* Visa */}
                <div className="bg-[#16120e] border border-[#d8bf9c]/20 px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-bold italic tracking-wide text-[#d8bf9c] shadow-xs">
                  VISA
                </div>
                {/* Mastercard */}
                <div className="bg-[#16120e] border border-[#d8bf9c]/20 px-2.5 py-1.5 rounded flex items-center justify-center gap-0.5 shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] -ml-1.5 opacity-90" />
                </div>
                {/* UPI */}
                <div className="bg-[#16120e] border border-[#d8bf9c]/20 px-2.5 py-1 rounded text-[9.5px] sm:text-[10px] font-extrabold tracking-widest text-[#d8bf9c] shadow-xs">
                  UPI
                </div>
                {/* Paytm */}
                <div className="bg-[#16120e] border border-[#d8bf9c]/20 px-2.5 py-1 rounded text-[9.5px] sm:text-[10px] font-extrabold tracking-wide text-[#00baf2] shadow-xs">
                  Paytm
                </div>
              </div>

              {/* Scroll to Top Circle Button */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d8bf9c] bg-[#30060a] text-[#d8bf9c] hover:bg-[#761e27] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 ml-1"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
