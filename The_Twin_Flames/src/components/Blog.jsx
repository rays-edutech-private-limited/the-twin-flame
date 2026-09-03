"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Sparkles, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

const largeArticles = [
  {
    id: 1,
    tag: "CRAFT & RITUALS",
    title: "The Sacred Art of Wooden Wick Candle Rituals",
    excerpt:
      "Discover how hand-braided cedar wicks create a calming fireplace crackle, promote an even melt pool, and elevate everyday evenings into sensory sanctuaries.",
    readTime: "5 min read",
    date: "August 28, 2026",
    author: "Elena Vance",
    image: "/images/our_products/the_flame_07.png",
  },
  {
    id: 2,
    tag: "NATURAL LIVING",
    title: "Why 100% Plant Soy Wax Transforms Indoor Air Quality",
    excerpt:
      "Unlike petroleum paraffin candles, pure botanical soy wax burns clean, non-toxic, and soot-free while delivering richer, truer therapeutic essential oil diffusion.",
    readTime: "4 min read",
    date: "August 24, 2026",
    author: "Dr. Rohini Shah",
    image: "/images/our_products/the_flame_06.png",
  },
];

const compactArticles = [
  {
    id: 3,
    tag: "FRAGRANCE ALCHEMY",
    title: "The Alchemy of Kashmiri Rose & Mysore Sandalwood",
    excerpt:
      "Explore how our perfumers layer rare botanical extractions into harmonious top, heart, and base notes.",
    readTime: "3 min read",
    date: "August 19, 2026",
    author: "Master Perfumer",
    image: "/images/our_products/the_flame_01.webp",
  },
  {
    id: 4,
    tag: "HOME SANCTUARY",
    title: "Creating Evening Sanctuary: Room-by-Room Scent Mapping",
    excerpt:
      "Curate bespoke fragrance landscapes that transition your living spaces seamlessly from active daylight to evening calm.",
    readTime: "3 min read",
    date: "August 15, 2026",
    author: "Aria Thorne",
    image: "/images/our_products/the_flame_05.jpeg",
  },
];

export default function Blog() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#f4ede3] text-[#121212] select-none relative overflow-hidden border-y border-[#ebdcd0]">
      {/* Ambient luxury background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d8bf9c]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#761e27]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* EDITORIAL SECTION HEADER                                                  */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Our <span className="italic font-serif text-[#761e27]">Blogs</span>
          </h2>

          {/* Ornate Gold Botanical Divider */}
          <div className="flex items-center justify-center gap-3 my-2.5">
            <div className="h-[1.5px] w-12 bg-[#b8986c]" />
            <span className="text-[#b8986c] text-[12px]">❖</span>
            <div className="h-[1px] w-8 bg-[#d8bf9c]/60" />
          </div>

          <p className="font-sans text-xs sm:text-[13.5px] text-zinc-500 max-w-xl font-normal tracking-wide leading-relaxed">
            Delve into the nuances of natural aromatherapy, candle-care rituals, and the poetic stories behind our artisanal blends.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2 LARGE FEATURED BLOG CARDS (TOP ROW)                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 mb-8 sm:mb-10">
          {largeArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl overflow-hidden bg-white border-2 border-[#ebdcd0] hover:border-[#b8986c] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Large Image Showcase with Hover Zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                />

                {/* Floating Tag Top-Left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1 rounded-full bg-[#761e27] text-white font-sans text-[9px] font-bold uppercase tracking-[0.2em] shadow-md border border-[#d8bf9c]/30">
                    {article.tag}
                  </span>
                </div>

                {/* Floating Read Time Top-Right */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-sans flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3 h-3 text-[#d8bf9c]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Text Content Block */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  {/* Date & Author */}
                  <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-sans">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#b8986c]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#b8986c]" />
                      <span>By {article.author}</span>
                    </div>
                  </div>

                  {/* Title in Grand Serif */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181112] group-hover:text-[#761e27] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Full Article Button */}
                <div className="pt-2 border-t border-[#ebdcd0]">
                  <Link
                    href="#story"
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#761e27] group-hover:text-[#8c2530] transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#b8986c] group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 2 COMPACT BLOG CARDS (BOTTOM ROW)                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {compactArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl overflow-hidden bg-white border border-[#ebdcd0] hover:border-[#b8986c] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center gap-5 p-5 sm:p-6"
            >
              {/* Compact Thumbnail Image */}
              <div className="relative w-full sm:w-44 h-44 shrink-0 rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Tag */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#761e27] text-white font-sans text-[8px] font-bold uppercase tracking-wider">
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Compact Text Details */}
              <div className="flex-1 flex flex-col justify-between space-y-2 text-left w-full">
                <div className="flex items-center gap-3 text-[10.5px] text-zinc-400 font-sans">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-semibold text-[#181112] group-hover:text-[#761e27] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h4>

                <p className="font-sans text-xs text-zinc-600 font-normal leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-1">
                  <Link
                    href="#story"
                    className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-[#761e27] group-hover:text-[#8c2530] transition-all cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 text-[#b8986c] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
