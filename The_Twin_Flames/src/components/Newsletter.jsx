"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [disablePopup, setDisablePopup] = useState(false);

  // Trigger popup after 1 second on reload (if not disabled by the user)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDisabled = localStorage.getItem("twinflame_intro_disabled") === "true";
    if (isDisabled) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleDisableCheckboxChange = (e) => {
    const checked = e.target.checked;
    setDisablePopup(checked);
    if (checked) {
      localStorage.setItem("twinflame_intro_disabled", "true");
    } else {
      localStorage.removeItem("twinflame_intro_disabled");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[150] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative w-full max-w-[760px] border border-[#d8bf9c]/35 transform-gpu"
          >
            {/* Left Side: Image Container */}
            <div className="w-full md:w-1/2 relative h-[200px] md:h-auto min-h-[200px] md:min-h-[420px] bg-[#faf8f5]">
              <Image
                src="/images/our_products/the_flame_06.png"
                alt="Twin Flame luxury candles"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#741f27]/5" />
            </div>

            {/* Right Side: Introduction Info Area */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between relative bg-white min-h-[380px] md:min-h-[420px]">
              
              {/* Close Icon (Top-Right) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-[#741f27] transition-colors p-1 rounded-full hover:bg-zinc-100 cursor-pointer"
                aria-label="Close introduction"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-5 my-auto">
                {/* Brand Header */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-[#d8bf9c] block">
                    WELCOME TO
                  </span>
                  <h2 className="font-serif text-3xl font-bold tracking-wider text-[#741f27] uppercase leading-none">
                    TWIN FLAME
                  </h2>
                  <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-medium uppercase block pt-0.5">
                    Luxury Candles & Fragrances
                  </span>
                </div>

                {/* Introduction Text */}
                <p className="font-sans text-xs md:text-[13px] text-zinc-500 font-light leading-relaxed">
                  We craft hand-poured luxury candles, blended with organic soy wax and curated perfumery to transform your sanctuaries. Experience warm glowing flames and exquisite scents crafted for your special moments.
                </p>

                {/* Contact Information block */}
                <div className="space-y-3 pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-3 text-zinc-600">
                    <div className="w-7 h-7 rounded-full bg-[#fdf0f1] flex items-center justify-center text-[#741f27]">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-[12px] font-medium">+91 84094 82865</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                    <div className="w-7 h-7 rounded-full bg-[#fdf0f1] flex items-center justify-center text-[#741f27]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-[12px] font-medium">hello@candleproject.com</span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="space-y-4 pt-4 mt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#741f27] hover:bg-[#58161b] text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md shadow-[#741f27]/10"
                >
                  Explore Collection
                </button>

                {/* Checkbox: Don't show again */}
                <div className="flex items-center gap-2.5 text-[10px] text-zinc-400 font-light select-none">
                  <input
                    type="checkbox"
                    id="disable-intro"
                    checked={disablePopup}
                    onChange={handleDisableCheckboxChange}
                    className="accent-[#741f27] w-3.5 h-3.5 border-zinc-300 rounded cursor-pointer"
                  />
                  <label htmlFor="disable-intro" className="cursor-pointer select-none">
                    Don't show this intro pop-up again.
                  </label>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
