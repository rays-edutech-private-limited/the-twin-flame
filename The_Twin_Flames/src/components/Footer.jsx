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
  ArrowUp
} from "lucide-react";

// Symmetrical Scent Brand Flame/Lotus Logo Icon
const LogoIcon = (props) => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#d8bf9c]" {...props}>
    <path d="M50 25 C45 42 41 50 41 62 C41 67 45 71 50 71 C55 71 59 67 59 62 C59 50 55 42 50 25 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="56" r="3" fill="currentColor" />
    <path d="M46 43 C31 51 29 65 37 77 C40 80 44 82 47 82" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 43 C69 51 71 65 63 77 C60 80 56 82 53 82" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M33 73 C33 81 40 87 50 87 C60 87 67 81 67 73" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Custom Gold Icons for Headers
const LotusIconGold = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d8bf9c] shrink-0">
    <path d="M12 21c-1.5-2.5-1.5-5 0-8 1.5 3 1.5 5.5 0 8Z" />
    <path d="M12 21c-2.5-1-4-3-4-5 0-1.5 1-2 2-1 1 1 1.5 3 2 6Z" />
    <path d="M12 21c2.5-1 4-3 4-5 0-1.5-1-2-2-1-1 1-1.5 3-2 6Z" />
    <path d="M7 21h10" strokeLinecap="round" />
  </svg>
);

const UserIconGold = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d8bf9c] shrink-0">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PhoneIconGold = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d8bf9c] shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ShoppingBagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full relative pt-0 z-20 bg-transparent">
      {/* Decorative Top Border Curve (3D drop shadow, positioned negative to bridge boundary gap) */}
      <div className="absolute top-[-20px] left-0 w-full flex items-start justify-between pointer-events-none select-none z-30 h-[60px] overflow-visible">
        {/* Left line */}
        <div className="h-[1.5px] bg-[#d8bf9c]/30 flex-grow mt-[19.25px]" />
        
        {/* Center curve SVG (Fixed width, curves downward under the logo with 3D drop shadow) */}
        <div className="w-[160px] h-[60px] relative flex-shrink-0">
          <svg viewBox="0 0 160 60" fill="none" className="w-full h-full text-[#d8bf9c]/30 filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]">
            <path d="M 0 20 L 48 20 Q 56 20 60 27 A 29 29 0 0 0 100 27 Q 104 20 112 20 L 160 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          
          {/* Central Logo Shield (Pulsing Candle Flame Glow Shadow) */}
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

      {/* Main Footer (Deep luxury wine red to black gradient matching page theme) */}
      <footer className="w-full bg-gradient-to-b from-[#30060a] via-[#1a0305] to-[#0a0001] text-zinc-300 pt-14 pb-8 relative overflow-hidden border-t border-[#d8bf9c]/25">

      {/* Full Width Background Image Overlay (subtle detail visibility under dark theme) */}
      <div className="absolute inset-0 w-full h-full opacity-35 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/our_products/bg_remove_02.png"
          alt="Twin Flame Premium Footer Background"
          fill
          sizes="100vw"
          className="object-cover object-center blur-[3px] scale-[1.03]"
          priority
        />
      </div>

      {/* Warm Golden Candle-Glow overlay mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid Section (Floating Symmetrical Arched Windows - Dark Wine-Red Gold Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Panel 1: Brand Info */}
          <div className="bg-[#240407]/60 border-2 border-[#d8bf9c]/35 hover:border-[#d8bf9c] rounded-t-full rounded-b-2xl p-6 pt-12 pb-6 flex flex-col justify-between items-center text-center min-h-[340px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,191,156,0.18)] relative overflow-hidden group/card transform-gpu backdrop-blur-md">
            {/* Inset Gold Arch Frame */}
            <div className="absolute inset-2.5 border border-[#d8bf9c]/15 rounded-t-full rounded-b-[10px] pointer-events-none z-0 group-hover/card:border-[#d8bf9c]/40 transition-colors duration-300" />
            {/* Corner Glow Bloom */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-[#d8bf9c]/3 blur-3xl group-hover/card:bg-[#d8bf9c]/5 transition-all duration-500 pointer-events-none" />
            
            <div className="space-y-4 relative z-10 flex flex-col items-center">
              <Link href="/" className="flex flex-col items-center gap-2 group">
                <div className="relative border border-[#d8bf9c]/30 group-hover:border-[#d8bf9c] rounded-full p-0.5 w-12 h-12 bg-white shadow-md flex-shrink-0 overflow-hidden transition-all duration-300">
                  <Image
                    src="/images/twin_flame.jpeg"
                    alt="Twin Flame Logo"
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-serif text-base font-bold tracking-[0.15em] text-white uppercase leading-none">
                    Twin Flame
                  </span>
                  <span className="text-[7.5px] tracking-[0.3em] text-[#d8bf9c] font-semibold uppercase mt-1">
                    Candle Collection
                  </span>
                </div>
              </Link>
              
              <div className="w-12 h-[1px] bg-[#d8bf9c]/40" />
              
              <p className="text-[11.5px] leading-relaxed text-zinc-300 font-light px-2">
                We craft premium, hand-poured candles that bring warmth, elegance and tranquility to your space. Each candle is made with love.
              </p>
            </div>

            {/* Social Icons with slow spin micro-interaction */}
            <div className="flex items-center gap-3 pt-3 relative z-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full border border-[#d8bf9c]/25 bg-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#761e27] hover:border-[#d8bf9c] hover:text-white hover:rotate-[360deg] hover:scale-105 transition-all duration-700 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full border border-[#d8bf9c]/25 bg-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#761e27] hover:border-[#d8bf9c] hover:text-white hover:rotate-[360deg] hover:scale-105 transition-all duration-700 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full border border-[#d8bf9c]/25 bg-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#761e27] hover:border-[#d8bf9c] hover:text-white hover:rotate-[360deg] hover:scale-105 transition-all duration-700 shadow-sm"
                aria-label="Shopping Bag"
              >
                <ShoppingBagIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Panel 2: Shop Collection */}
          <div className="bg-[#240407]/60 border-2 border-[#d8bf9c]/35 hover:border-[#d8bf9c] rounded-t-full rounded-b-2xl p-6 pt-12 pb-6 flex flex-col justify-start items-center text-center min-h-[340px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,191,156,0.18)] relative overflow-hidden group/card transform-gpu backdrop-blur-md">
            {/* Inset Wine-Red Arch Frame */}
            <div className="absolute inset-2.5 border border-[#d8bf9c]/15 rounded-t-full rounded-b-[10px] pointer-events-none z-0 group-hover/card:border-[#d8bf9c]/40 transition-colors duration-300" />
            {/* Corner Glow Bloom */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-[#d8bf9c]/3 blur-3xl group-hover/card:bg-[#d8bf9c]/5 transition-all duration-500 pointer-events-none" />
            
            <div className="space-y-4 relative z-10 flex flex-col items-center w-full">
              <h4 className="font-serif italic text-sm font-semibold tracking-[0.2em] text-[#d8bf9c] flex items-center gap-2">
                <LotusIconGold />
                Shop Collection
              </h4>
              <div className="w-12 h-[1px] bg-[#d8bf9c]/40" />
              
              <ul className="space-y-2.5 text-zinc-300 font-light text-xs md:text-[13px] w-full">
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Luxury Candles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Scented Candles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Wax Melts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Panel 3: Customer Help */}
          <div className="bg-[#240407]/60 border-2 border-[#d8bf9c]/35 hover:border-[#d8bf9c] rounded-t-full rounded-b-2xl p-6 pt-12 pb-6 flex flex-col justify-start items-center text-center min-h-[340px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,191,156,0.18)] relative overflow-hidden group/card transform-gpu backdrop-blur-md">
            {/* Inset Wine-Red Arch Frame */}
            <div className="absolute inset-2.5 border border-[#d8bf9c]/15 rounded-t-full rounded-b-[10px] pointer-events-none z-0 group-hover/card:border-[#d8bf9c]/40 transition-colors duration-300" />
            {/* Corner Glow Bloom */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-[#d8bf9c]/3 blur-3xl group-hover/card:bg-[#d8bf9c]/5 transition-all duration-500 pointer-events-none" />
            
            <div className="space-y-4 relative z-10 flex flex-col items-center w-full">
              <h4 className="font-serif italic text-sm font-semibold tracking-[0.2em] text-[#d8bf9c] flex items-center gap-2">
                <UserIconGold />
                Customer Help
              </h4>
              <div className="w-12 h-[1px] bg-[#d8bf9c]/40" />
              
              <ul className="space-y-2.5 text-zinc-300 font-light text-xs md:text-[13px] w-full">
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Candle Care Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#d8bf9c] transition-all duration-300 block hover:scale-103 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-[10px] text-[#d8bf9c] mr-1">✦</span>
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Panel 4: Get In Touch */}
          <div className="bg-[#240407]/60 border-2 border-[#d8bf9c]/35 hover:border-[#d8bf9c] rounded-t-full rounded-b-2xl p-6 pt-12 pb-6 flex flex-col justify-start items-center text-center min-h-[340px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,191,156,0.18)] relative overflow-hidden group/card transform-gpu backdrop-blur-md">
            {/* Inset Wine-Red Arch Frame */}
            <div className="absolute inset-2.5 border border-[#d8bf9c]/15 rounded-t-full rounded-b-[10px] pointer-events-none z-0 group-hover/card:border-[#d8bf9c]/40 transition-colors duration-300" />
            {/* Corner Glow Bloom */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-[#d8bf9c]/3 blur-3xl group-hover/card:bg-[#d8bf9c]/5 transition-all duration-500 pointer-events-none" />
            
            <div className="space-y-4 relative z-10 flex flex-col items-center w-full">
              <h4 className="font-serif italic text-sm font-semibold tracking-[0.2em] text-[#d8bf9c] flex items-center gap-2">
                <PhoneIconGold />
                Get in Touch
              </h4>
              <div className="w-12 h-[1px] bg-[#d8bf9c]/40" />
              
              <ul className="space-y-3.5 text-zinc-300 font-light text-xs md:text-[13px] w-full flex flex-col items-center">
                <li className="flex flex-col items-center text-center gap-1">
                  <MapPin className="w-4 h-4 text-[#d8bf9c]" />
                  <span className="leading-relaxed text-zinc-300">123 Twin Flame Lane, New Delhi</span>
                </li>
                <li className="flex flex-col items-center text-center gap-1">
                  <Phone className="w-4 h-4 text-[#d8bf9c]" />
                  <a href="tel:+919876543210" className="hover:text-[#d8bf9c] transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex flex-col items-center text-center gap-1">
                  <MapPin className="hidden" /> {/* Placeholder spacing fix */}
                  <Mail className="w-4 h-4 text-[#d8bf9c]" />
                  <a href="mailto:hello@twinflame.com" className="hover:text-[#d8bf9c] transition-colors duration-300">
                    hello@twinflame.com
                  </a>
                </li>
                <li className="flex flex-col items-center text-center gap-1">
                  <Globe className="w-4 h-4 text-[#d8bf9c]" />
                  <a href="https://www.twinflame.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d8bf9c] transition-colors duration-300">
                    www.twinflame.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright & payment divider */}
        <div className="pt-8 border-t border-[#d8bf9c]/25 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/90 tracking-wider relative z-10">
          
          {/* Copyright */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-center">
            <span>
              © 2026{" "}
              <a
                href="https://raysonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d8bf9c] font-semibold hover:text-white transition-all duration-300"
              >
                Rays Edutech Pvt. Ltd.
              </a>{" "}
              All Rights Reserved.
            </span>
          </div>

          {/* Symmetrical Heart-Infinity Scroll Ornament */}
          <div className="hidden lg:flex items-center gap-3 text-[#d8bf9c]/30 flex-grow max-w-[200px] mx-4">
            <div className="h-[1px] bg-[#d8bf9c]/15 flex-grow" />
            <span className="text-[14px] leading-none">∞</span>
            <span className="text-[#d8bf9c] text-[10px] leading-none">♥</span>
            <span className="text-[14px] leading-none">∞</span>
            <div className="h-[1px] bg-[#d8bf9c]/15 flex-grow" />
          </div>

          {/* Secure Trust payment partners vectors & Scroll to top */}
          <div className="flex items-center gap-2">
            
            {/* Payment boxes */}
            <div className="flex items-center gap-2">
              {/* Visa */}
              <div className="bg-[#16120e] border border-[#d8bf9c]/15 px-2.5 py-1 rounded-md text-[9px] font-bold italic tracking-wide text-[#d8bf9c] font-sans flex items-center justify-center select-none shadow-sm">
                VISA
              </div>
              {/* Mastercard */}
              <div className="bg-[#16120e] border border-[#d8bf9c]/15 px-2.5 py-1.5 rounded-md flex items-center justify-center gap-0.5 select-none shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#EB001B]" />
                <div className="w-2 h-2 rounded-full bg-[#F79E1B] -ml-1 opacity-90" />
              </div>
              {/* UPI */}
              <div className="bg-[#16120e] border border-[#d8bf9c]/15 px-2.5 py-1 rounded-md text-[8px] font-extrabold tracking-widest text-[#d8bf9c] font-sans flex items-center justify-center select-none shadow-sm">
                UPI
              </div>
              {/* Paytm */}
              <div className="bg-[#16120e] border border-[#d8bf9c]/15 px-2.5 py-1 rounded-md text-[8px] font-extrabold tracking-wide text-[#00baf2] font-sans flex items-center justify-center select-none shadow-sm">
                Paytm
              </div>
            </div>

            {/* Back to top circular button with hover lift micro-interaction */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[#d8bf9c] bg-transparent text-[#d8bf9c] hover:bg-[#761e27] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-110 ml-3 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4.5 h-4.5 stroke-[1.5]" />
            </button>

        </div>

      </div>
      </div>
    </footer>
  </div>
  );
}
