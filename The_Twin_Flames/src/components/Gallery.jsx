"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    url: "/images/Collection/collectio_2.webp",
    caption: "Slow afternoons infused with our signature Reed Diffuser oil aromatic essence."
  },
  {
    id: 2,
    url: "/images/Collection/Collection_1.webp",
    caption: "Bringing warmth and soft wood-wick crackles into your luxury sanctuary."
  },
  {
    id: 3,
    url: "/images/Collection/collection_3.webp",
    caption: "Cozy spaces scented clean with our premium botanical soy wax melts."
  },
  {
    id: 4,
    url: "/images/Collection/Collection_4.webp",
    caption: "Hand-poured signature gift sets. Share the gift of pure luxury."
  },
  {
    id: 5,
    url: "/images/Product/p_1.webp",
    caption: "The flagship Twin Flame Candle. Clean-burning organic soy wax."
  },
  {
    id: 6,
    url: "/images/Product/p_2.webp",
    caption: "Smoky Gilded Sandalwood. Curated essential oils for sensory comfort."
  },
  {
    id: 7,
    url: "/images/Product/p_3.webp",
    caption: "Warm botanical Amber & Fig. Designed to evoke pleasant memories."
  },
  {
    id: 8,
    url: "/images/Product/p_4.webp",
    caption: "Limited Edition Spiced Vetiver housed in solid brass apothecary vessels."
  }
];

export default function Gallery() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-16 px-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#bfa780] flex items-center justify-center gap-1.5">
            <InstagramIcon className="w-3.5 h-3.5" />
            @twinflame.luxury
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black">
            Instagram Gallery
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Follow our sensory journey online. Tag us with <span className="font-semibold text-wine">#TwinFlame</span> to be featured in our home-decor showcase.
          </p>
        </div>

        {/* Zero-Gap Instagram Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 rounded-3xl overflow-hidden shadow-lg border border-zinc-100">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="relative aspect-square w-full group overflow-hidden cursor-pointer"
            >
              {/* Post Image */}
              <Image
                src={post.url}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Instagram Hover Overlay (Glass/Dimming effect) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                <InstagramIcon className="w-8 h-8 text-white scale-90 group-hover:scale-100 transition-transform duration-300 mb-2" />
                <p className="text-[9px] text-white/90 font-light tracking-wide max-w-[150px] line-clamp-2 hidden sm:block">
                  {post.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Window */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center p-6 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            
            {/* Container for enlarged image and caption overlay */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-[85vw] xs:max-w-xs sm:max-w-sm md:max-w-md w-full bg-white rounded-[2.5rem] overflow-visible shadow-2xl p-0 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Elegant Close (Cut) Button - Overlapping top-right corner */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute -top-3 -right-3 w-9 h-9 md:w-10 md:h-10 bg-white hover:bg-zinc-100 text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 z-[100000] border border-zinc-200/50"
                aria-label="Close Gallery Modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Enlarged image wrapper with rounded corners and height constraint */}
              <div className="relative w-full aspect-[4/5] max-h-[60vh] sm:max-h-[70vh] rounded-[2.5rem] overflow-hidden bg-white">
                <img
                  src={selectedPost.url}
                  alt="Enlarged Instagram Post"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
                
                {/* Caption text gradient overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pt-20">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d8bf9c] flex items-center gap-1.5 mb-1.5">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    @twinflame.luxury
                  </span>
                  <p className="font-sans text-xs md:text-sm text-zinc-200 font-light leading-relaxed">
                    {selectedPost.caption}
                  </p>
                </div>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
