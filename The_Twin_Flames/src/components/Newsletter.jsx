"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-luxury-cream border-t border-gold/10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-luxury-black text-white rounded-[2.5rem] p-8 md:p-16 border border-gold/30 shadow-2xl relative overflow-hidden text-center space-y-6 md:space-y-8">
          
          {/* Abstract luxury graphics */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

          {/* Slogan */}
          <div className="space-y-3 relative z-10">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Join the Flame Club
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Unlock 15% Off Your First Order
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
              Subscribe to receive private invitations to new scent launches, exclusive sales, and candle care masterclasses.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto relative z-10">
            {subscribed ? (
              <div className="flex flex-col items-center gap-2.5 py-4 text-gold">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
                <h4 className="font-serif text-lg font-bold">Welcome to the Club!</h4>
                <p className="text-xs text-zinc-400">Check your inbox for your 15% discount code.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold focus:outline-none rounded-full px-6 py-4 font-sans text-xs md:text-sm tracking-wide text-white transition-all placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-hover text-luxury-black font-sans text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:scale-102 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Subscribe
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          <p className="text-[9px] text-zinc-500 font-light tracking-wide relative z-10">
            We value your privacy. Unsubscribe at any time.
          </p>

        </div>
      </div>
    </section>
  );
}
