"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const audiences = [
  {
    title: "Designers",
    description: "Tools that work like you do.",
    image: "/images/our_products/the_flame_01.webp",
  },
  {
    title: "Marketers",
    description: "Create faster, explore new possibilities.",
    image: "/images/our_products/the_flame_02.jpeg",
  },
  {
    title: "VFX filmmakers",
    description: "From concept to cut, faster.",
    image: "/images/our_products/the_flame_07.png",
  },
  {
    title: "Content creators",
    description: "Make scroll-stopping content, easily.",
    image: "/images/our_products/the_flame_06.png",
  },
  {
    title: "Art directors",
    description: "Creative control at every stage.",
    image: "/images/our_products/the_flame_05.jpeg",
  },
];

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showIntro, setShowIntro] = useState(true);

  const moveCard = (step) => {
    setActiveCard((current) => Math.min(Math.max(current + step, 0), audiences.length - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (["ArrowRight", "ArrowDown"].includes(event.key)) moveCard(1);
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) moveCard(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 3400);
    return () => window.clearTimeout(introTimer);
  }, []);

  const handleTouchEnd = (event) => {
    if (!touchStart) return;
    const xDistance = event.changedTouches[0].clientX - touchStart.x;
    const yDistance = event.changedTouches[0].clientY - touchStart.y;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const distance = isMobile ? yDistance : xDistance;

    if (Math.abs(distance) > 60) moveCard(distance > 0 ? -1 : 1);
    setTouchStart(null);
  };

  const handleBannerMove = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: x * 7, y: y * 5 });
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[200] overflow-hidden bg-[#110507] text-[#fffaf3]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: "inset(48% 50% 48% 50%)" }}
              animate={{ clipPath: ["inset(48% 50% 48% 50%)", "inset(10% 14% 10% 14%)", "inset(0% 0% 0% 0%)"] }}
              transition={{ duration: 2.35, times: [0, 0.66, 1], ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div initial={{ scale: 1.14 }} animate={{ scale: 1 }} transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} className="relative h-full w-full">
                <Image src="/images/our_products/the_flame_01.webp" alt="Twin Flame luxury candles" fill priority sizes="100vw" className="object-cover object-center brightness-[.68] saturate-[.82]" />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(22,5,8,.7),transparent_42%,rgba(22,5,8,.38)),linear-gradient(to_bottom,rgba(22,5,8,.46),transparent_44%,rgba(22,5,8,.7))]" />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.65 }} className="absolute left-1/2 top-10 z-20 -translate-x-1/2 whitespace-nowrap font-sans text-[9px] font-semibold uppercase tracking-[0.42em] text-[#f1d9aa] sm:top-14 sm:text-[11px]">Handpoured · Scented · Luxury</motion.p>
            <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 1.55, duration: 0.7 }} className="absolute left-1/2 top-[26%] z-20 flex -translate-x-1/2 items-center gap-3 text-[#f1d9aa]">
              <span className="h-px w-10 bg-current/70 sm:w-16" />
              <span className="text-base leading-none">✦</span>
              <span className="h-px w-10 bg-current/70 sm:w-16" />
            </motion.div>
            <h1 className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center overflow-hidden px-6 font-serif text-[14vw] leading-[.85] tracking-[-0.035em] text-[#fff8ec] sm:text-[12vw] xl:text-[11vw]">
              {"TWIN FLAME".split("").map((character, index) => (
                <motion.span key={`${character}-${index}`} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 1.18 + index * 0.055, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                  {character === " " ? "\u00A0" : character}
                </motion.span>
              ))}
            </h1>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.6 }} className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center sm:bottom-14">
              <p className="font-serif text-base italic text-[#f1d9aa] sm:text-lg">A ritual of warmth and memory</p>
              <p className="mt-2 font-sans text-[8px] font-semibold uppercase tracking-[0.36em] text-white/75 sm:text-[9px]">Luxury Candle Atelier</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 overflow-hidden bg-[linear-gradient(90deg,#ecd591_0%,#ecd591_50%,#761e27_50%,#761e27_100%)]" onPointerMove={handleBannerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="[perspective:1600px]">
        <div className="mx-auto grid min-h-[680px] w-full overflow-hidden transition-transform duration-500 ease-out [transform-style:preserve-3d] lg:min-h-[740px] lg:grid-cols-2" style={{ transform: `rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)` }}>
        <div className="relative order-2 flex min-w-0 flex-col overflow-hidden bg-[#ecd591] px-5 pb-8 pt-12 sm:px-8 sm:pt-14 [transform:translateZ(26px)] lg:order-none lg:px-10 lg:pb-12 lg:pt-36 xl:px-16 xl:pt-40">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-[#761e27]/10" />
          <div className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] h-64 w-64 rounded-full border-[20px] border-[#761e27]/5" />
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#761e27]/30 to-transparent lg:block" />
          <div className="mb-7 flex items-end justify-between gap-4 transition-transform duration-500 ease-out" style={{ transform: `translate3d(${tilt.x * -2}px, ${tilt.y * -2}px, 55px)` }}>
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#761e27]">Made for every moment</p>
              <h2 className="max-w-md font-serif text-2xl leading-tight text-[#4f151c] sm:text-3xl">
                Find your signature atmosphere
              </h2>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => moveCard(-1)} disabled={activeCard === 0} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#761e27]/25 bg-white/25 text-[#761e27] transition hover:border-[#761e27] hover:bg-[#761e27] hover:text-[#ecd591] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Previous collection">
                <ArrowLeft size={17} />
              </button>
              <button onClick={() => moveCard(1)} disabled={activeCard === audiences.length - 1} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#761e27]/25 bg-white/25 text-[#761e27] transition hover:border-[#761e27] hover:bg-[#761e27] hover:text-[#ecd591] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Next collection">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="flex min-h-[390px] flex-1 gap-2.5 sm:gap-3 lg:min-h-[425px]" onTouchStart={(event) => setTouchStart({ x: event.touches[0].clientX, y: event.touches[0].clientY })} onTouchEnd={handleTouchEnd}>
            {audiences.map((audience, index) => {
              const selected = activeCard === index;
              return (
                <button key={audience.title} onMouseEnter={() => setActiveCard(index)} onClick={() => setActiveCard(index)} className={`group relative min-w-0 overflow-hidden rounded-2xl text-left transition-[flex,transform,box-shadow] duration-500 ease-out ${selected ? "flex-[5] -translate-y-1 shadow-[0_18px_45px_rgba(0,0,0,0.5)]" : "flex-1"}`} aria-label={`View ${audience.title}`}>
                  <img src={audience.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex justify-center gap-2 lg:hidden">
            {audiences.map((audience, index) => <button key={audience.title} onClick={() => setActiveCard(index)} aria-label={`Go to ${audience.title}`} className={`h-2 rounded-full transition-all ${activeCard === index ? "w-6 bg-[#761e27]" : "w-2 bg-[#761e27]/30"}`} />)}
          </div>
        </div>

        <div className="relative isolate order-1 flex min-h-[500px] items-center overflow-hidden bg-[#761e27] px-7 pb-14 pt-28 sm:px-12 sm:pt-32 [transform:translateZ(42px)] lg:order-none lg:px-16 lg:pb-16 lg:pt-36 xl:px-20 xl:pt-40">
          <Image src="/images/our_products/the_flame_07.png" alt="Twin Flame luxury candle collection" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="-z-20 object-cover object-[72%_center] opacity-50 mix-blend-luminosity transition-transform duration-500 ease-out" style={{ transform: `scale(1.12) translate3d(${tilt.x * -2}px, ${tilt.y * -2}px, 0)` }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#761e27] via-[#761e27]/95 via-45% to-[#761e27]/45" />
          <motion.div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/4 z-0 h-72 w-72 rounded-full bg-[#e8cfa9]/10 blur-2xl" animate={{ y: [-22, 20, -22], x: [0, -18, 0], scale: [0.94, 1.08, 0.94] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#e8cfa9]/15" />
          <div className="pointer-events-none absolute -right-8 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full border border-[#e8cfa9]/10" />
          <div className="relative z-10 max-w-xl text-[#fffaf3] transition-transform duration-500 ease-out" style={{ transform: `translate3d(${tilt.x * 3}px, ${tilt.y * 3}px, 90px)` }}>
            <p className="mb-7 font-serif text-sm tracking-[0.42em] text-[#e8cfa9]">TWIN FLAME</p>
            <h1 className="max-w-lg font-serif text-4xl leading-[1.08] sm:text-5xl xl:text-[4.25rem]">Fragrance That Turns Moments Into Memories</h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base">Discover thoughtfully crafted fragrances, candles and gifting pieces designed to bring warmth, character and atmosphere into your everyday spaces.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#collections" className="bg-[#d8bf9c] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#761e27] transition hover:bg-[#fffaf3]">Shop collection</Link>
              <Link href="#gifts" className="border border-white/70 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#761e27]">Explore gifts</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}
