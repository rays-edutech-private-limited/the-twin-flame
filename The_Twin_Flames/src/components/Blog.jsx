"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Tuesday Tips: Being Realistic With Your Goals",
    excerpt: "You all must have heard and observed about your Personality Traits according to your Twin Flame Candle. When we set out to craft a sensory space...",
    date: "October 14, 2021",
    author: "admin",
    tags: ["Easter Crafts", "Uncategorized"],
    image: "/images/Collection/Collection_1.webp"
  },
  {
    id: 2,
    title: "The 2026 Wine Lover's Guide to a Kitchen Remodel",
    excerpt: "You all must have heard and observed about your Personality Traits according to your Twin Flame Candle. When designing an integrated entertainment bar...",
    date: "October 14, 2021",
    author: "admin",
    tags: ["Popular Projects", "Uncategorized"],
    image: "/images/Collection/collection_3.webp"
  },
  {
    id: 3,
    title: "A Taste of Wine-inspired Vacations & Retreats",
    excerpt: "You all must have heard and observed about your Personality Traits according to your Twin Flame Candle. When planning a relaxing weekend getaway centered...",
    date: "October 14, 2021",
    author: "admin",
    tags: ["Gift Sets", "Popular Projects"],
    image: "/images/Collection/Collection_4.webp"
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-white text-luxury-black overflow-hidden relative z-10 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-16 px-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#bfa780] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Editorial Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-black">
            Our Blog Updates
          </h2>
          <div className="w-16 h-[2px] bg-[#d8bf9c] mx-auto mt-4" />
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col space-y-5">
              
              {/* Image Showcase Wrapper with hover zoom & absolute tags */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-150/40 bg-[#faf8f5]">
                
                {/* Floating Tags Top-Left */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#782029] text-white font-sans text-[8.5px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-sm select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main Article Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>

              {/* Text details */}
              <div className="space-y-3">
                
                {/* Metadata row (Date & Author) */}
                <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-light tracking-wide">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#d8bf9c]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#d8bf9c]" />
                    <span>By {post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-luxury-black hover:text-[#782029] transition-colors duration-300 leading-snug cursor-pointer line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt description */}
                <p className="font-sans text-[12px] text-zinc-500 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more button link */}
                <div className="pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#782029] group/link cursor-pointer"
                  >
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
