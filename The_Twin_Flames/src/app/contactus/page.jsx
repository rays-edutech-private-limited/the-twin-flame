"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiUser3Line,
  RiFileTextLine,
  RiMessage2Line,
  RiSendPlane2Fill,
  RiDirectionLine,
  RiArrowDownSLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiSparklingLine,
  RiShieldCheckLine,
  RiCompass3Line,
} from "react-icons/ri";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

// Corner Foliage / Botanical Sketch SVG matching reference design
const CornerBotanical = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    className="absolute -top-1 -right-1 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none opacity-45 group-hover:opacity-85 transition-opacity duration-500 select-none"
  >
    <defs>
      <linearGradient id="botanicalGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a88858" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#c8a97e" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    {/* Main Curving Branch Stem */}
    <path
      d="M 160 12 C 135 28, 108 55, 62 108"
      stroke="url(#botanicalGrad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Leaf 1 - Top outer right */}
    <g>
      <path
        d="M 148 20 C 158 10, 152 2, 138 3 C 132 12, 138 18, 148 20 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 148 20 C 143 12, 139 6, 138 3" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 144 14 C 148 11, 151 10, 152 9" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 141 9 C 137 8, 135 7, 134 6" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 2 - Top branch tip */}
    <g>
      <path
        d="M 126 26 C 124 14, 114 8, 100 10 C 104 22, 116 26, 126 26 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 126 26 C 116 19, 108 14, 100 10" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 120 21 C 122 17, 121 13, 120 12" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 112 16 C 108 17, 105 18, 104 20" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 3 - Upper outward leaflet */}
    <g>
      <path
        d="M 134 34 C 144 31, 150 39, 145 51 C 136 49, 130 41, 134 34 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 134 34 C 138 41, 141 46, 145 51" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 137 40 C 142 38, 145 38, 147 38" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 140 45 C 136 45, 133 46, 132 46" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 4 - Mid branch left */}
    <g>
      <path
        d="M 112 50 C 104 40, 92 40, 80 48 C 90 56, 104 56, 112 50 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 112 50 C 101 47, 90 47, 80 48" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 103 48 C 103 44, 101 42, 99 41" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 94 48 C 93 52, 91 54, 89 55" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 5 - Mid branch right / outward */}
    <g>
      <path
        d="M 114 52 C 124 47, 134 53, 132 67 C 122 67, 115 59, 114 52 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 114 52 C 121 58, 127 62, 132 67" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 118 56 C 124 54, 127 55, 129 55" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 122 61 C 119 63, 117 64, 116 64" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 6 - Lower mid leaflet */}
    <g>
      <path
        d="M 92 72 C 82 65, 70 69, 62 81 C 72 86, 85 81, 92 72 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 92 72 C 81 73, 71 76, 62 81" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M 83 73 C 83 69, 81 67, 78 66" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
      <path d="M 74 76 C 74 80, 72 82, 70 83" stroke="#a88858" strokeWidth="0.4" opacity="0.6" />
    </g>

    {/* Leaf 7 - Terminal branch tip leaf */}
    <g>
      <path
        d="M 64 104 C 56 99, 46 107, 42 119 C 52 119, 60 113, 64 104 Z"
        fill="#b8986c"
        fillOpacity="0.09"
        stroke="#a88858"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M 64 104 C 56 110, 48 115, 42 119" stroke="#a88858" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
    </g>
  </svg>
);

// Small Golden Candle Flame Icon matching reference design
const LuxuryCandleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#b8986c]"
    {...props}
  >
    <path
      d="M12 2.5 C11.2 3.8 10 5.2 10 6.8 C10 8 10.9 9 12 9 C13.1 9 14 8 14 6.8 C14 5.2 12.8 3.8 12 2.5 Z"
      fill="#b8986c"
      stroke="#b8986c"
      strokeWidth="0.5"
    />
    <rect x="9" y="9.5" width="6" height="7.5" rx="1" stroke="currentColor" />
    <path d="M6 17.5 L18 17.5 A2 2 0 0 1 16 20.5 L8 20.5 A2 2 0 0 1 6 17.5 Z" stroke="currentColor" />
  </svg>
);

export default function ContactUs() {
  // Form submission state
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter submission state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // FAQ Accordion State (first open by default)
  const [openFaq, setOpenFaq] = useState(0);

  const inquiryOptions = [
    "General Inquiry",
    "Bespoke Gifting",
    "Order Support",
    "Corporate & Wholesale",
  ];

  const faqs = [
    {
      question: "What makes Twin Flame candles different?",
      answer:
        "Our candles are hand-poured in artisanal small batches using 100% organic botanical soy wax, crackling FSC-certified wooden wicks, and sustainably harvested pure essential oils completely free from parabens or phthalates.",
    },
    {
      question: "How long does a Twin Flame candle burn?",
      answer:
        "Depending on vessel capacity, our candles provide between 45 to 80 hours of clean, soot-free burn time. Detailed burn metrics are provided on every product vessel.",
    },
    {
      question: "Are your candles made with 100% natural wax?",
      answer:
        "Yes, we use strictly non-GMO soy wax without any petroleum, paraffin, or synthetic stabilizers, ensuring a safe and clean burn for your family and companions.",
    },
    {
      question: "How should I burn my candle for the first time?",
      answer:
        "Allow the initial burn to melt the wax pool completely to the glass perimeter (about 2 to 3 hours). This prevents candle tunneling and maximizes the fragrance throw.",
    },
    {
      question: "How can I make my candle last longer?",
      answer:
        "Trim the wooden wick to approximately 1/8 to 1/4 inch before each relighting, and keep the flame away from direct breezes or air conditioning vents.",
    },
    {
      question: "Do you offer bespoke gifts and wedding favors?",
      answer:
        "Yes, our atelier curates bespoke fragrance signatures, personalized laser-engraved wooden lids, and luxury silk-wrapped gift hampers for weddings and corporate galas.",
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactInfo = [
    {
      title: "The Atelier",
      subtitle: "FLAGSHIP STUDIO",
      icon: RiMapPin2Line,
      details: [
        "Boring Road, Near Crossing",
        "Patna, Bihar 800001",
      ],
      actionText: "Open in Maps",
      actionHref: "https://maps.google.com/?q=Boring+Road+Patna+Bihar",
    },
    {
      title: "Client Concierge",
      subtitle: "DIRECT SUPPORT",
      icon: RiPhoneLine,
      details: [
        "+91 84094 82865",
        "Mon – Sat: 9 AM – 7 PM IST",
      ],
      actionText: "Call Concierge",
      actionHref: "tel:+918409482865",
    },
    {
      title: "Correspondence",
      subtitle: "WRITTEN INQUIRIES",
      icon: RiMailLine,
      details: [
        "hello@thetwinflame.com",
        "24hr Concierge Response",
      ],
      actionText: "Write to Us",
      actionHref: "mailto:hello@thetwinflame.com",
    },
    {
      title: "Atelier Hours",
      subtitle: "SENSORY VISITS",
      icon: RiTimeLine,
      details: [
        "Mon – Sat: 9:00 AM – 7:00 PM",
        "Sunday: Closed for Pouring",
      ],
      actionText: "Plan Your Visit",
      actionHref: "#contact-form",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8f4ed] text-[#181112] select-none flex flex-col relative overflow-hidden">
      
      {/* Luxury Atmospheric Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-[#d8bf9c]/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[750px] -right-20 w-[700px] h-[700px] bg-[#761e27]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 -left-20 w-[600px] h-[600px] bg-[#d8bf9c]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. LUXURY EDITORIAL BREADCRUMB BANNER                                     */}
      {/* ========================================================================= */}
      <div 
        className="w-full relative pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 flex flex-col items-center justify-center text-center bg-cover bg-center select-none"
        style={{ backgroundImage: `url('/images/breadcrumb.png')` }}
      >
        {/* Balanced soft warm overlay - bright, light and clean */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

        {/* Header Content */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto space-y-2">
          {/* Page Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight drop-shadow-md">
            Contact <span className="italic font-serif text-[#d8bf9c]">Us</span>
          </h1>

          {/* Ornate Gold Diamond Accent */}
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#c8a97e]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#c8a97e] bg-[#240407]" />
            <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#c8a97e]" />
          </div>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 font-sans text-xs sm:text-[13px] text-zinc-200 font-medium tracking-wider">
            <Link href="/" className="hover:text-[#d8bf9c] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400 font-light">/</span>
            <span className="text-[#d8bf9c] font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SECTION (FULL CONTAINER WIDTH: max-w-7xl)                         */}
      {/* ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 sm:py-18 md:py-24 flex flex-col gap-10 sm:gap-14 relative z-10">
        
        {/* ========================================================================= */}
        {/* ROW 1: 4 LUXURY CONTACT INFO CARDS (ELEVATED CASHMERE & WINE EMBLEMS)     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5.5 items-stretch">
          {contactInfo.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={i} 
                className="relative bg-[#fcfaf7] border border-[#ebdcd0] rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_6px_25px_rgba(48,6,10,0.04)] hover:shadow-[0_16px_40px_rgba(72,13,20,0.1)] hover:border-[#b8986c] transition-all duration-400 group"
              >
                {/* Subtle Corner Botanical Foliage Sketch (from reference design) */}
                <CornerBotanical />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Circular Luxury Emblem Badge */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-[#6b151e] via-[#520f17] to-[#36080e] p-[2px] shadow-[0_4px_16px_rgba(54,8,14,0.3)] flex items-center justify-center mx-auto mb-2.5 sm:mb-3 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(184,152,108,0.35)] transition-all duration-300">
                    <div className="w-full h-full rounded-full border border-[#d8bf9c]/90 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#d8bf9c]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[#2c080d] text-lg sm:text-[20px] font-normal tracking-tight text-center mb-1">
                    {card.title}
                  </h3>

                  {/* Ornate Gold 4-Point Star Motif */}
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <div className="h-[1px] w-7 sm:w-9 bg-gradient-to-r from-transparent to-[#c8a97e]" />
                    <span className="text-[#c8a97e] text-[10px] leading-none">✦</span>
                    <div className="h-[1px] w-7 sm:w-9 bg-gradient-to-l from-transparent to-[#c8a97e]" />
                  </div>

                  {/* Subtitle */}
                  <p className="font-sans text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8986c] text-center mb-2.5 sm:mb-3">
                    {card.subtitle}
                  </p>

                  {/* Faint Horizontal Divider Line */}
                  <div className="w-full h-[1px] bg-[#ebdcd0]/75 mb-2.5 sm:mb-3" />

                  {/* Center Small Gold Icon */}
                  <div className="flex justify-center mb-2 text-[#b8986c]">
                    <LuxuryCandleIcon />
                  </div>

                  {/* Detail Lines */}
                  <div className="flex flex-col items-center text-center gap-1 mb-4 flex-grow">
                    {card.details.map((line, idx) => (
                      <p 
                        key={idx} 
                        className={`font-serif text-[12.5px] sm:text-[13px] leading-snug ${
                          idx === 0 ? "font-medium text-[#2c080d]" : "font-normal text-[#5c5652]"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Full-Width Capsule Button */}
                <div className="relative z-10 pt-1 w-full">
                  <Link
                    href={card.actionHref}
                    target={card.actionHref.startsWith("http") ? "_blank" : undefined}
                    className="w-full py-2.5 sm:py-2.5 px-4 rounded-xl sm:rounded-2xl bg-[#4a0d14] hover:bg-[#60141d] text-white flex items-center justify-center gap-2 border border-[#b8986c]/40 shadow-md shadow-[#4a0d14]/20 transition-all duration-300 hover:scale-[1.01] group/btn cursor-pointer"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#d8bf9c] shrink-0" />
                    <span className="font-serif text-xs sm:text-[13px] font-medium tracking-wide">
                      {card.actionText}
                    </span>
                    <RiArrowRightLine className="w-3.5 h-3.5 text-[#d8bf9c] transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: BESPOKE MESSAGE FORM (7 Cols) & STUDIO EXPERIENCE (5 Cols)         */}
        {/* ========================================================================= */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Left Card: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#e2d5c5] rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 flex flex-col justify-between shadow-[0_6px_30px_rgba(48,6,10,0.04)]">
            <div>
              {/* Header */}
              <div className="mb-7">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-[0.28em] text-[#b8986c] font-sans mb-2">
                  <RiSparklingLine className="w-3.5 h-3.5 text-[#b8986c]" />
                  <span>Send a Note</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#181112] font-normal tracking-tight leading-tight">
                  Send Us a <span className="italic font-serif text-[#761e27]">Message</span>
                </h2>
                <p className="font-sans text-xs sm:text-[13.5px] text-[#5e5852] font-light mt-2 leading-relaxed">
                  Have an inquiry regarding bespoke candle formulations, private gifting, or bulk studio orders? Our artisans are delighted to assist.
                </p>
              </div>

              {/* Inquiry Topic Selector Chips */}
              <div className="mb-6">
                <label className="block font-sans text-xs font-semibold text-[#761e27] uppercase tracking-wider mb-2.5">
                  Select Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setInquiryType(opt)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer ${
                        inquiryType === opt
                          ? "bg-[#761e27] text-white border border-[#761e27] shadow-sm scale-102"
                          : "bg-[#f5ede2] text-[#5e5852] border border-[#e2d5c5] hover:border-[#b8986c] hover:text-[#181112]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {formSubmitted ? (
                <div className="min-h-[340px] flex flex-col items-center justify-center text-center p-8 space-y-3.5 bg-[#fbf8f4] rounded-2xl sm:rounded-3xl border border-[#e2d5c5]">
                  <div className="w-16 h-16 rounded-full bg-[#761e27]/10 text-[#761e27] flex items-center justify-center shadow-sm">
                    <RiCheckboxCircleLine className="w-9 h-9" />
                  </div>
                  <h4 className="font-serif text-[#761e27] text-2xl font-normal">Message Sent With Pleasure</h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#5e5852] max-w-md leading-relaxed">
                    Thank you for reaching out to Twin Flame. Our artisan concierge has received your request and will provide a personalized response within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 text-[#b8986c] pointer-events-none">
                        <RiUser3Line className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Full Name"
                        value={formState.name}
                        onChange={handleFormChange}
                        className="w-full bg-[#fbf9f5] border border-[#e2d5c5] focus:bg-white focus:border-[#761e27] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-[#181112] placeholder-[#8c827a] font-sans outline-none transition-colors duration-300 focus:ring-1 focus:ring-[#761e27]/25 shadow-2xs"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 text-[#b8986c] pointer-events-none">
                        <RiMailLine className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email Address"
                        value={formState.email}
                        onChange={handleFormChange}
                        className="w-full bg-[#fbf9f5] border border-[#e2d5c5] focus:bg-white focus:border-[#761e27] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-[#181112] placeholder-[#8c827a] font-sans outline-none transition-colors duration-300 focus:ring-1 focus:ring-[#761e27]/25 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Phone Number */}
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 text-[#b8986c] pointer-events-none">
                        <RiPhoneLine className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formState.phone}
                        onChange={handleFormChange}
                        className="w-full bg-[#fbf9f5] border border-[#e2d5c5] focus:bg-white focus:border-[#761e27] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-[#181112] placeholder-[#8c827a] font-sans outline-none transition-colors duration-300 focus:ring-1 focus:ring-[#761e27]/25 shadow-2xs"
                      />
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 text-[#b8986c] pointer-events-none">
                        <RiFileTextLine className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formState.subject}
                        onChange={handleFormChange}
                        className="w-full bg-[#fbf9f5] border border-[#e2d5c5] focus:bg-white focus:border-[#761e27] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-[#181112] placeholder-[#8c827a] font-sans outline-none transition-colors duration-300 focus:ring-1 focus:ring-[#761e27]/25 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-[#b8986c] pointer-events-none">
                      <RiMessage2Line className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="How may our artisans elevate your home aromatics?"
                      value={formState.message}
                      onChange={handleFormChange}
                      className="w-full bg-[#fbf9f5] border border-[#e2d5c5] focus:bg-white focus:border-[#761e27] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-[#181112] placeholder-[#8c827a] font-sans outline-none transition-colors duration-300 resize-none focus:ring-1 focus:ring-[#761e27]/25 shadow-2xs"
                    />
                  </div>

                  {/* Luxury Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#761e27] via-[#661820] to-[#501117] hover:from-[#5a141b] hover:to-[#3b0b10] text-white border border-[#d8bf9c]/40 py-4 px-8 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 cursor-pointer font-serif text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-xl shadow-[#761e27]/20 hover:scale-[1.01]"
                  >
                    <span>Send Message</span>
                    <RiSendPlane2Fill className="w-4 h-4 text-[#d8bf9c]" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 2. Right Card: Visit Our Studio & Map Showcase */}
          <div className="lg:col-span-5 bg-white border border-[#e2d5c5] rounded-[28px] sm:rounded-[36px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_6px_30px_rgba(48,6,10,0.04)]">
            <div>
              {/* Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-[0.28em] text-[#b8986c] font-sans mb-2">
                  <RiDirectionLine className="w-3.5 h-3.5 text-[#b8986c]" />
                  <span>The Sanctuary</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#181112] font-normal tracking-tight leading-tight">
                  Visit Our <span className="italic font-serif text-[#761e27]">Studio</span>
                </h2>
                <p className="font-sans text-xs sm:text-[13px] text-[#5e5852] font-light mt-2 leading-relaxed">
                  Immerse yourself in artisanal wax pouring, sample rare botanical oils, and select signature candles in our intimate Patna boutique.
                </p>
              </div>

              {/* Map Iframe with Luxury Accent */}
              <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[280px] rounded-2xl overflow-hidden border border-[#e2d5c5] shadow-inner relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.077227394833!2d85.1105976!3d25.6126767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584102927233%3A0x6b4f74d0cf965313!2sBoring%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[105%]"
                />
              </div>
            </div>

            {/* Bottom Info Bar & Map Link */}
            <div className="pt-5 mt-5 border-t border-[#f0e4d7] flex items-center justify-between">
              <div>
                <p className="font-serif text-sm font-semibold text-[#181112]">Boring Road, Patna</p>
                <p className="font-sans text-xs text-[#7e746d]">Valet parking available</p>
              </div>
              <Link
                href="https://maps.google.com/?q=Boring+Road+Patna+Bihar"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#fbf8f4] border border-[#e2d5c5] font-serif text-xs font-semibold text-[#761e27] hover:bg-[#761e27] hover:text-white hover:border-[#761e27] transition-all duration-300 shadow-2xs"
              >
                <span>Get Directions</span>
                <RiCompass3Line className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: COMMON QUESTIONS, SENSORY JOURNEY, THE FLAME CLUB (3 Columns)      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Column 1: FAQ Accordion */}
          <div className="bg-white border border-[#e2d5c5] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(48,6,10,0.03)]">
            <div>
              <div className="mb-5">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#181112] font-medium tracking-tight">
                  Common <span className="italic font-serif text-[#761e27]">Questions</span>
                </h2>
                <p className="font-sans text-xs text-[#5e5852] font-light mt-1">
                  Candle burn etiquette and care practices.
                </p>
              </div>

              <div className="divide-y divide-[#f0e4d7]">
                {faqs.slice(0, 4).map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className="py-3">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="font-sans text-xs sm:text-[13px] font-medium text-[#181112] hover:text-[#761e27] text-left transition-colors flex items-center justify-between w-full gap-2 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <RiArrowDownSLine
                          className={`w-4 h-4 text-[#b8986c] shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#761e27]" : ""
                          }`}
                        />
                      </button>
                      
                      {/* Expandable answer */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-36 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="font-sans text-[11.5px] sm:text-xs text-[#5e5852] font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#f0e4d7]">
              <Link 
                href="mailto:concierge@thetwinflame.com" 
                className="font-serif text-xs font-medium text-[#761e27] hover:text-[#b8986c] flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Have other questions? Contact support</span>
                <RiArrowRightLine className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Follow Our Sensory Journey */}
          <div className="bg-white border border-[#e2d5c5] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(48,6,10,0.03)]">
            <div>
              <div className="mb-5">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#181112] font-medium tracking-tight">
                  Follow Our <span className="italic font-serif text-[#761e27]">Journey</span>
                </h2>
                <p className="font-sans text-xs text-[#5e5852] font-light mt-1">
                  Behind-the-scenes pours, sensory rituals, and seasonal scent drops.
                </p>
              </div>

              {/* Social Media Links with Official React Icons */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-[#e2d5c5] bg-[#fbf8f4] flex items-center justify-center text-[#761e27] hover:text-white hover:border-[#761e27] hover:bg-[#761e27] transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaInstagram className="w-4.5 h-4.5" />
                </Link>
                <Link 
                  href="https://facebook.com" 
                  target="_blank"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-[#e2d5c5] bg-[#fbf8f4] flex items-center justify-center text-[#761e27] hover:text-white hover:border-[#761e27] hover:bg-[#761e27] transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://youtube.com" 
                  target="_blank"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-[#e2d5c5] bg-[#fbf8f4] flex items-center justify-center text-[#761e27] hover:text-white hover:border-[#761e27] hover:bg-[#761e27] transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaYoutube className="w-4.5 h-4.5" />
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-[#e2d5c5] bg-[#fbf8f4] flex items-center justify-center text-[#761e27] hover:text-white hover:border-[#761e27] hover:bg-[#761e27] transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://whatsapp.com" 
                  target="_blank"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-[#e2d5c5] bg-[#fbf8f4] flex items-center justify-center text-[#761e27] hover:text-white hover:border-[#761e27] hover:bg-[#761e27] transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaWhatsapp className="w-4.5 h-4.5" />
                </Link>
              </div>
            </div>

            {/* Candle Visual Preview Container */}
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mt-5 shadow-inner border border-[#e2d5c5] bg-gradient-to-b from-[#faf7f2] to-[#f2e7db]">
              <Image
                src="/images/our_products/bg_remove_candle.png"
                alt="Twin Flame handcrafted candle"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-contain p-3 hover:scale-108 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Column 3: The Flame Club / Luxury VIP Centerpiece */}
          <div className="bg-gradient-to-br from-[#260408] via-[#1a0205] to-[#0d0103] text-white border border-[#d8bf9c]/40 rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient Radial Golden Dust */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#d8bf9c]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase font-bold tracking-[0.28em] text-[#d8bf9c] font-sans mb-1.5">
                  <RiSparklingLine className="w-3.5 h-3.5 text-[#d8bf9c]" />
                  <span>The Flame Club</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight">
                  Join the <span className="italic font-serif text-[#d8bf9c]">Inner Circle</span>
                </h2>
                <p className="font-sans text-xs text-zinc-300 font-light mt-1.5 leading-relaxed">
                  Receive private invitations to limited seasonal batches, secret promotions, and masterclass notes.
                </p>
              </div>

              {newsletterSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-2 bg-white/5 rounded-2xl border border-[#d8bf9c]/30 backdrop-blur-sm">
                  <RiCheckboxCircleLine className="w-8 h-8 text-[#d8bf9c]" />
                  <p className="font-serif text-[#d8bf9c] text-base font-medium">Subscribed With Pleasure</p>
                  <p className="font-sans text-xs text-zinc-300">Welcome to the Twin Flame Club.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3.5">
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-[#d8bf9c] pointer-events-none">
                      <RiMailLine className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 focus:border-[#d8bf9c] focus:bg-white/15 rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-[13.5px] text-white placeholder-zinc-400 font-sans outline-none transition-colors duration-300 focus:ring-1 focus:ring-[#d8bf9c]/40 backdrop-blur-sm shadow-inner"
                    />
                  </div>

                  {/* Gold Gilded VIP Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#d8bf9c] hover:bg-[#c8a97e] text-[#240407] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-serif text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-black/40 hover:scale-[1.01]"
                  >
                    <span>Join the Sanctuary</span>
                    <RiArrowRightLine className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 relative z-10">
              <RiShieldCheckLine className="w-4 h-4 text-[#d8bf9c] shrink-0" />
              <p className="font-sans text-[11px] text-zinc-400 leading-normal">
                Strict privacy. Zero spam. Unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
