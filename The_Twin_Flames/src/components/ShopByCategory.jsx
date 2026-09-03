"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GiCandlebright } from "react-icons/gi";

const categories = [
  {
    id: 1,
    name: "Luxury Candles",
    count: "8 PRODUCTS",
    image: "/images/our_products/the_flame_07.png",
    href: "/collections?category=candles",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Gift Hampers",
    count: "7 PRODUCTS",
    image: "/images/Collection/Collection_4.webp",
    href: "/collections?category=gift-sets",
    tag: "Handcrafted",
  },
  {
    id: 3,
    name: "Reed Diffusers",
    count: "4 PRODUCTS",
    image: "/images/our_products/the_flame_02.jpeg",
    href: "/collections?category=diffusers",
    tag: "Essential",
  },
  {
    id: 4,
    name: "Botanical Melts",
    count: "6 PRODUCTS",
    image: "/images/Collection/collectio_2.webp",
    href: "/collections?category=melts",
    tag: "Artisan",
  },
];

export default function ShopByCategory() {
  return (
    <section className="w-full py-14 sm:py-18 md:py-22 bg-[#f3eae0] border-y border-[#ebd8c8] select-none relative overflow-hidden">
      {/* Luxury ambient warm glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8bf9c]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#761e27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        {/* Left-Aligned Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-left">
            {/* Small Brand Prefix */}
            <div className="inline-flex items-center gap-2 mb-2">
              <GiCandlebright  className="w-3.5 h-3.5 text-[#b8986c]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8986c] font-sans">
                CURATED COLLECTIONS
              </span>
            </div>

            {/* Main Heading starting on the left */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#761e27] font-normal tracking-wide leading-tight">
              Shop for Category
            </h2>

            {/* Subtitle / Divider line */}
            <div className="flex items-center gap-3 mt-3">
              <div className="h-[2px] w-12 bg-[#b8986c]" />
              <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal tracking-wide">
                Explore handpoured candle collections crafted for every mood and space.
              </p>
            </div>
          </div>

          {/* View All Categories Link */}
          <Link
            href="/collections"
            className="hidden md:inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#761e27] hover:text-[#b8986c] transition-colors duration-300 pb-1 group shrink-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with clean rectangular luxury styling */}
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-200 border border-[#d8bf9c]/30 group-hover:border-[#761e27]/60 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle luxury dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Category Name (Left) & Product Count (Right) matching user reference image */}
              <div className="flex items-baseline justify-between mt-3.5 px-1">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#121212] group-hover:text-[#761e27] transition-colors duration-300">
                  {cat.name}
                </h3>
                <span className="font-sans text-xs sm:text-[13px] text-zinc-500 font-normal tracking-wide group-hover:text-zinc-700 transition-colors">
                  {cat.count}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="#all-categories"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#761e27] hover:text-[#b8986c] transition-colors duration-300"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
