"use client";

import React, { useState, useEffect } from "react";
import { Phone, Truck, Gift, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Social Icons styled to look solid gold and high-end
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PinterestIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.102-.947-.195-2.4.04-3.434.213-.933 1.378-5.83 1.378-5.83s-.351-.7-.351-1.74c0-1.63.945-2.848 2.12-2.848 1.002 0 1.485.75 1.485 1.648 0 1.007-.643 2.513-.974 3.908-.276 1.167.587 2.118 1.737 2.118 2.085 0 3.69-2.2 3.69-5.378 0-2.812-2.022-4.78-4.908-4.78-3.344 0-5.308 2.508-5.308 5.102 0 1.01.39 2.09.877 2.68.096.118.11.22.081.34-.09.37-.29 1.18-.329 1.34-.05.2-.17.24-.393.137-1.467-.68-2.381-2.82-2.381-4.536 0-3.692 2.684-7.082 7.734-7.082 4.06 0 7.21 2.894 7.21 6.748 0 4.03-2.54 7.27-6.064 7.27-1.185 0-2.3-.616-2.68-1.34l-.73 2.777c-.263 1.005-.974 2.264-1.452 3.038C10.183 23.86 11.082 24 12.017 24 18.637 24 24 18.63 24 12.012 24 5.39 18.637 0 12.017 0z"/>
  </svg>
);

// Luxury Candle Themed Messages for Mobile Carousel
const promoMessages = [
  { text: "+91 800 555 0199", icon: <Phone className="w-3 h-3 text-gold" /> },
  { text: "Free Shipping Above ₹999", icon: <Truck className="w-3.5 h-3.5 text-gold" /> },
  { text: "Exclusive Offers Available", icon: <Gift className="w-3 h-3 text-gold" /> },
  { text: "100% Natural Soy Wax", icon: <Leaf className="w-3 h-3 text-gold" /> }
];

export default function Topheader() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="top-header"
      className="w-full bg-[#0c0304] text-gold py-2 md:py-2.5 px-4 md:px-6 xl:px-8 text-[9px] md:text-[10px] xl:text-[11px] font-serif font-medium tracking-[0.16em] uppercase select-none z-[100] relative border-b border-gold/10 shadow-sm transition-all duration-300 transform-gpu origin-top overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        
        {/* ========================================================================= */}
        {/* DESKTOP ROW (Visible on md and larger) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center justify-between w-full">
          
          {/* Item 1: Phone */}
          <div className="flex items-center gap-2 group hover:text-gold-hover transition-colors duration-300 cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-gold group-hover:text-gold-hover transition-colors duration-300" />
            <a href="tel:+918005550199" className="transition-colors duration-300">
              +91 800 555 0199
            </a>
          </div>

          <span className="h-3.5 w-[1px] bg-gold/15" />

          {/* Item 2: Free Shipping */}
          <div className="flex items-center gap-2 hover:text-gold-hover transition-colors duration-300">
            <Truck className="w-4 h-4 text-gold" />
            <span>Free Shipping Above ₹999</span>
          </div>

          <span className="h-3.5 w-[1px] bg-gold/15" />

          {/* Item 3: Exclusive Offers */}
          <div className="flex items-center gap-2 hover:text-gold-hover transition-colors duration-300">
            <Gift className="w-3.5 h-3.5 text-gold" />
            <span>Exclusive Offers</span>
          </div>

          <span className="h-3.5 w-[1px] bg-gold/15" />

          {/* Item 4: 100% Soy Wax */}
          <div className="flex items-center gap-2 hover:text-gold-hover transition-colors duration-300">
            <Leaf className="w-3.5 h-3.5 text-gold" />
            <span>100% Natural Soy Wax</span>
          </div>

          <span className="h-3.5 w-[1px] bg-gold/15" />

          {/* Item 5: Follow Us & Socials */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold tracking-[0.2em] text-gold/80 mr-1">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-gold-hover transition-all duration-300 text-gold/90"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-gold-hover transition-all duration-300 text-gold/90"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-gold-hover transition-all duration-300 text-gold/90"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-gold-hover transition-all duration-300 text-gold/90"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE CAROUSEL (Visible on screens smaller than md) */}
        {/* ========================================================================= */}
        <div className="flex md:hidden items-center justify-center w-full min-h-[1.5rem] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex items-center gap-2 font-serif text-[10px] tracking-[0.14em] text-gold/95"
            >
              {promoMessages[currentMessageIndex].icon}
              <span>{promoMessages[currentMessageIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
