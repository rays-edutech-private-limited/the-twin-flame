"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// Curated 5 Lifestyle & Ritual categories matching the user's reference layout
const ritualCategories = [
  {
    id: 1,
    title: "AROMATHERAPY",
    image: "/images/our_products/the_flame_06.png",
    tag: "Aroma Wellness",
    link: "#aromatherapy",
  },
  {
    id: 2,
    title: "HYDRATION RITUALS",
    image: "/images/our_products/the_flame_04.jpeg",
    tag: "Mindful Living",
    link: "#hydration-rituals",
  },
  {
    id: 3,
    title: "HOSTING ESSENTIALS",
    image: "/images/our_products/the_flame_07.png",
    tag: "Entertaining",
    link: "#hosting-essentials",
  },
  {
    id: 4,
    title: "FUNCTIONAL DECOR",
    image: "/images/our_products/the_flame_02.jpeg",
    tag: "Artisan Wax",
    link: "#functional-decor",
  },
  {
    id: 5,
    title: "GIFT CARD",
    image: "/images/our_products/the_flame_01.webp",
    tag: "Luxury Gifting",
    link: "#gifting",
  },
];

export default function NaturalIngredients() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#faf8f5] text-[#121212] select-none relative overflow-hidden border-b border-[#e8dfd5]">
      {/* Radiant warm luxury ambient background glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#d8bf9c]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f5e6d3]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        {/* Section Header with Smooth Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-14"
        >
          {/* Main Title in Luxury Serif */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181112] tracking-tight leading-tight">
            Curated For <span className="italic font-serif text-[#761e27]">Every Space</span>
          </h2>

          {/* Gold Decorative Accent */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d8bf9c]" />
            <span className="text-[#b8986c] text-[11px]">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d8bf9c]" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl font-normal tracking-wide">
            Explore bespoke categories designed to bring harmony, warmth, and sensory tranquility to every moment.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 5-CARD BRIGHT BENTO MASONRY GRID WITH ENTRANCE ANIMATIONS                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Column 1: Top Left & Bottom Left (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            {/* Card 1: AROMATHERAPY */}
            <BentoCard
              item={ritualCategories[0]}
              heightClass="h-[250px] sm:h-[270px] md:h-[280px]"
              delay={0.1}
            />
            {/* Card 2: HYDRATION RITUALS */}
            <BentoCard
              item={ritualCategories[1]}
              heightClass="h-[250px] sm:h-[270px] md:h-[280px]"
              delay={0.2}
            />
          </div>

          {/* Column 2: Top Middle & Bottom Middle (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            {/* Card 3: HOSTING ESSENTIALS */}
            <BentoCard
              item={ritualCategories[2]}
              heightClass="h-[250px] sm:h-[270px] md:h-[280px]"
              delay={0.3}
            />
            {/* Card 4: FUNCTIONAL DECOR */}
            <BentoCard
              item={ritualCategories[3]}
              heightClass="h-[250px] sm:h-[270px] md:h-[280px]"
              delay={0.4}
            />
          </div>

          {/* Column 3: Full-Height Tall Card (Span 4) */}
          <div className="lg:col-span-4 md:col-span-2 lg:h-auto">
            {/* Card 5: GIFT CARD (Tall Card) */}
            <BentoCard
              item={ritualCategories[4]}
              heightClass="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[584px]"
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Bento Card Component: Bright, Natural & Animated with smooth hover zoom
function BentoCard({ item, heightClass, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      <Link
        href={item.link}
        className={`group relative w-full ${heightClass} rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#e5d8c8] hover:border-[#b8986c] transform-gpu block`}
      >
        {/* Bright, Crystal-Clear Lifestyle Image with Smooth Zoom */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-100 contrast-[1.02]"
        />

        {/* Minimal Subtle Bottom Warmth Gradient (Behind text only - No heavy dark shade on photo) */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />

        {/* Top Floating Mini Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#761e27] text-[8.5px] font-bold tracking-[0.2em] uppercase backdrop-blur-xs shadow-xs border border-[#e5d8c8]/60">
            {item.tag}
          </span>
        </div>

        {/* Bottom Content Area */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
          {/* Title in Bright Pure White Typography matching Reference */}
          <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-white uppercase leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-[#f8eddc] transition-colors">
            {item.title}
          </h3>

          {/* Hover "Explore" Pill Button */}
          <div className="mt-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 group-hover:bg-[#761e27] text-[#761e27] group-hover:text-white font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-colors duration-300">
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </span>

            <span className="text-[10px] text-white font-medium tracking-wide drop-shadow-sm hidden sm:inline">
              Shop ritual
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
