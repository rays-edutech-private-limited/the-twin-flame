"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [disablePopup, setDisablePopup] = useState(false);

  // Trigger popup after 1 second on reload (if not disabled by the user)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDisabled = localStorage.getItem("twinflame_newsletter_disabled") === "true";
    if (isDisabled) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      
      // Auto close after 2.5 seconds on successful subscription
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
  };

  const handleDisableCheckboxChange = (e) => {
    const checked = e.target.checked;
    setDisablePopup(checked);
    if (checked) {
      localStorage.setItem("twinflame_newsletter_disabled", "true");
    } else {
      localStorage.removeItem("twinflame_newsletter_disabled");
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
          {/* Modal Container (Slides up and fades in) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative w-full max-w-[740px] border border-[#d8bf9c]/35 transform-gpu"
          >
            
            {/* Left Side: Editorial Image Container */}
            <div className="w-full md:w-1/2 relative h-[220px] md:h-auto min-h-[220px] md:min-h-[380px] bg-[#faf8f5]">
              <Image
                src="/images/our_products/the_flame_01.webp"
                alt="Twin Flame signature candles"
                fill
                sizes="(max-width: 768px) 100vw, 370px"
                className="object-cover"
                priority
              />
              {/* Soft aesthetic red gradient overlay */}
              <div className="absolute inset-0 bg-[#761e27]/5" />
            </div>

            {/* Right Side: Signup Form Area */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              
              {/* Close Icon (Top-Right of form) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-[#761e27] transition-colors p-1 rounded-full hover:bg-zinc-100 cursor-pointer"
                aria-label="Close newsletter"
              >
                <X className="w-4 h-4" />
              </button>

              {subscribed ? (
                /* Success Welcome State */
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-11 h-11 mx-auto text-[#d8bf9c] animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-[#761e27]">Welcome to the Club!</h4>
                  <p className="font-sans text-xs text-zinc-500 font-light leading-relaxed">
                    Thank you for subscribing. Check your inbox for your exclusive code and private invitations.
                  </p>
                </div>
              ) : (
                /* Interactive Form State */
                <div className="space-y-6">
                  
                  {/* Headline Info */}
                  <div className="space-y-2.5">
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em] text-[#d8bf9c] block">
                      JOIN THE FLAME CLUB
                    </span>
                    <h2 className="font-serif text-2xl md:text-[1.65rem] font-bold tracking-wider text-[#761e27] uppercase leading-tight">
                      NEWSLETTER
                    </h2>
                    <p className="font-sans text-xs md:text-[13px] text-zinc-500 font-light leading-relaxed">
                      Sign up to receive all the latest news, updates, & store discounts.
                    </p>
                  </div>

                  {/* Elegant Luxury Underlined Form */}
                  <form onSubmit={handleSubmit} className="relative w-full border-b border-[#761e27]/30 focus-within:border-[#761e27] py-2 flex items-center transition-all duration-300 mt-2">
                    <input
                      type="email"
                      required
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-none outline-none flex-1 text-sm text-[#761e27] placeholder-zinc-400 font-light pr-14 py-1"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 text-[10px] md:text-xs font-bold tracking-widest text-[#761e27] hover:text-[#d8bf9c] transition-colors uppercase cursor-pointer"
                    >
                      SEND
                    </button>
                  </form>

                  {/* Checkbox: Disable this pop-up */}
                  <div className="flex items-center gap-2.5 pt-2 text-[10px] md:text-[11px] text-zinc-400 font-light select-none">
                    <input
                      type="checkbox"
                      id="disable-popup"
                      checked={disablePopup}
                      onChange={handleDisableCheckboxChange}
                      className="accent-[#761e27] w-3.5 h-3.5 border-zinc-300 rounded cursor-pointer"
                    />
                    <label htmlFor="disable-popup" className="cursor-pointer select-none">
                      Disable this pop-up.
                    </label>
                  </div>

                </div>
              )}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
