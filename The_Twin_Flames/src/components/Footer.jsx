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
  User,
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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full relative pt-8 z-20 bg-transparent">
      {/* Decorative Top Border Curve */}
      <div className="absolute top-[12px] left-0 w-full flex items-start justify-between pointer-events-none select-none z-30 h-[60px] overflow-visible">
        {/* Left line */}
        <div className="h-[1.5px] bg-[#d8bf9c]/30 flex-grow mt-[19.25px]" />
        
        {/* Center curve SVG (Fixed width, curves downward under the logo!) */}
        <div className="w-[160px] h-[60px] relative flex-shrink-0">
          <svg viewBox="0 0 160 60" fill="none" className="w-full h-full text-[#d8bf9c]/30">
            <path d="M 0 20 L 48 20 Q 56 20 60 27 A 29 29 0 0 0 100 27 Q 104 20 112 20 L 160 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          
          {/* Central Logo Shield */}
          <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 rounded-full border border-[#d8bf9c]/50 bg-[#0e0a0a] flex items-center justify-center shadow-lg w-14 h-14 z-20 overflow-hidden p-0.5">
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

      <footer className="w-full bg-[#0e0a0a] text-white/80 pt-20 pb-8 relative overflow-hidden">

      {/* Full Width Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-35 pointer-events-none select-none z-0">
        <Image
          src="/images/Footer_back.avif"
          alt="Twin Flame Premium Footer Background"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-5 lg:pr-8 xl:pr-12 lg:border-r lg:border-[#d8bf9c]/15">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Brand Logo Shield using the navbar image */}
              <div className="relative border border-[#d8bf9c]/30 group-hover:border-[#d8bf9c] rounded-full p-0.5 w-13 h-13 bg-white shadow-md flex-shrink-0 overflow-hidden transition-all duration-300">
                <Image
                  src="/images/twin_flame.jpeg"
                  alt="Twin Flame Logo"
                  fill
                  sizes="52px"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-[0.15em] text-white uppercase leading-none">
                  Twin Flame
                </span>
                <span className="text-[8px] tracking-[0.3em] text-[#d8bf9c] font-semibold uppercase mt-1">
                  Candle Collection
                </span>
              </div>
            </Link>
            
            {/* Custom Gold Flourish Divider */}
            <div className="py-1">
              <svg viewBox="0 0 100 12" className="w-28 h-3 text-[#d8bf9c]/60">
                <path d="M 5 6 C 15 6 25 1 35 6 C 40 8.5 45 8.5 50 6 C 55 8.5 60 8.5 65 6 C 75 1 85 6 95 6" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="6" r="1" fill="currentColor" />
                <circle cx="35" cy="6" r="1" fill="currentColor" />
                <circle cx="65" cy="6" r="1" fill="currentColor" />
              </svg>
            </div>
            
            <p className="text-[12.5px] leading-relaxed text-zinc-300 font-light pr-2">
              We craft premium, hand-poured candles that bring warmth, elegance and tranquility to your space. Each candle is made with love, the finest ingredients and a timeless passion for fragrance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-300 hover:bg-[#d8bf9c] hover:border-[#d8bf9c] hover:text-[#0e0a0a] hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-300 hover:bg-[#d8bf9c] hover:border-[#d8bf9c] hover:text-[#0e0a0a] hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-300 hover:bg-[#d8bf9c] hover:border-[#d8bf9c] hover:text-[#0e0a0a] hover:scale-105 transition-all duration-300"
                aria-label="Shopping Bag"
              >
                <ShoppingBagIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Collection */}
          <div className="space-y-5 lg:px-8 xl:px-12 lg:border-r lg:border-[#d8bf9c]/15">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#d8bf9c] flex items-center gap-2">
              <LotusIconGold />
              Shop Collection
            </h4>
            <div className="w-12 h-[1px] bg-[#d8bf9c]/40 mt-1" />
            
            <ul className="space-y-3.5 text-zinc-300 font-light text-xs md:text-[13.5px]">
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Luxury Candles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Scented Candles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Wax Melts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Help */}
          <div className="space-y-5 lg:px-8 xl:px-12 lg:border-r lg:border-[#d8bf9c]/15">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#d8bf9c] flex items-center gap-2">
              <UserIconGold />
              Customer Help
            </h4>
            <div className="w-12 h-[1px] bg-[#d8bf9c]/40 mt-1" />
            
            <ul className="space-y-3.5 text-zinc-300 font-light text-xs md:text-[13.5px]">
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Candle Care Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d8bf9c] transition-colors duration-300 block">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-5 lg:pl-8 xl:pl-12">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#d8bf9c] flex items-center gap-2">
              <PhoneIconGold />
              Get in Touch
            </h4>
            <div className="w-12 h-[1px] bg-[#d8bf9c]/40 mt-1" />
            
            <ul className="space-y-4 text-zinc-300 font-light text-xs md:text-[13.5px]">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#d8bf9c] flex-shrink-0 mt-1" />
                <span className="leading-relaxed">123 Twin Flame Lane, <br />New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone className="w-4 h-4 text-[#d8bf9c] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#d8bf9c] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail className="w-4 h-4 text-[#d8bf9c] flex-shrink-0" />
                <a href="mailto:hello@twinflame.com" className="hover:text-[#d8bf9c] transition-colors duration-300">
                  hello@twinflame.com
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Globe className="w-4 h-4 text-[#d8bf9c] flex-shrink-0" />
                <a href="https://www.twinflame.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d8bf9c] transition-colors duration-300">
                  www.twinflame.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & payment divider */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-400 tracking-wider relative z-10">
          
          {/* Copyright */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-center">
            <Heart className="w-3.5 h-3.5 text-[#d8bf9c]" />
            <span>
              © 2026{" "}
              <a
                href="https://raysonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d8bf9c] font-semibold hover:underline transition-all duration-300"
              >
                Rays Edutech Pvt. Ltd.
              </a>{" "}
              All Rights Reserved.
            </span>
          </div>

          {/* Symmetrical Heart-Infinity Scroll Ornament with surrounding divider lines */}
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
              <div className="bg-[#1c1c1c] border border-white/5 px-2.5 py-1 rounded-md text-[9px] font-bold italic tracking-wide text-zinc-300 font-sans flex items-center justify-center select-none">
                VISA
              </div>
              {/* Mastercard */}
              <div className="bg-[#1c1c1c] border border-white/5 px-2.5 py-1.5 rounded-md flex items-center justify-center gap-0.5 select-none">
                <div className="w-2 h-2 rounded-full bg-[#EB001B]" />
                <div className="w-2 h-2 rounded-full bg-[#F79E1B] -ml-1 opacity-90" />
              </div>
              {/* UPI */}
              <div className="bg-[#1c1c1c] border border-white/5 px-2.5 py-1 rounded-md text-[8px] font-extrabold tracking-widest text-zinc-300 font-sans flex items-center justify-center select-none">
                UPI
              </div>
              {/* Paytm */}
              <div className="bg-[#1c1c1c] border border-white/5 px-2.5 py-1 rounded-md text-[8px] font-extrabold tracking-wide text-[#00baf2] font-sans flex items-center justify-center select-none">
                Paytm
              </div>
            </div>

            {/* Back to top circular button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[#d8bf9c] bg-transparent text-[#d8bf9c] hover:bg-[#d8bf9c] hover:text-[#0e0a0a] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 ml-3"
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
