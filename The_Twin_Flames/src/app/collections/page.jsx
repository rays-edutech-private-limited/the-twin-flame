"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Star,
  Heart,
  Eye,
  ShoppingBag,
  Check,
  RotateCcw,
  Sparkles,
  Grid3X3,
  Grid2X2,
  Plus,
  Minus,
  Package,
} from "lucide-react";

// =========================================================================
// 1. MASTER LUXURY PRODUCT CATALOG
// =========================================================================
const allProducts = [
  {
    id: 1,
    name: "VELVET OUD & AMBER JAR",
    category: "candles",
    collectionType: "signature",
    fragranceType: "woody",
    vesselType: "glass",
    burnTime: "50-65",
    availability: "in-stock",
    price: 2900,
    originalPrice: 3500,
    rating: 5.0,
    reviews: 48,
    badge: "BESTSELLER",
    badgeColor: "bg-[#761e27] text-white",
    image: "/images/our_products/the_flame_01.webp",
    weight: "320g • 60 hrs burn",
    scentNotes: "Smoked Velvet Oud, Warm Amber Resin, Bourbon Vanilla",
    description:
      "A rich, deeply hypnotic fragrance poured in a heavy artisan glass vessel with a soothing crackling wooden wick.",
  },
  {
    id: 2,
    name: "BLOOMING JASMINE TIN SET",
    category: "gift-sets",
    collectionType: "gift-sets",
    fragranceType: "floral",
    vesselType: "metal",
    burnTime: "30-45",
    availability: "in-stock",
    price: 3500,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 34,
    badge: "GIFT SET",
    badgeColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/Collection/collection_3.webp",
    weight: "Set of 3 (120g each)",
    scentNotes: "Night-Blooming Jasmine, White Tuberose, Golden Honey",
    description:
      "A luxurious trio of ornate metal tins with dried floral botanicals for an intoxicating floral sanctuary.",
  },
  {
    id: 3,
    name: "OCEAN BREEZE SOY JAR",
    category: "candles",
    collectionType: "signature",
    fragranceType: "fresh",
    vesselType: "glass",
    burnTime: "50-65",
    availability: "in-stock",
    price: 2100,
    originalPrice: 2600,
    rating: 4.8,
    reviews: 29,
    badge: "NEW",
    badgeColor: "bg-emerald-800 text-white",
    image: "/images/our_products/the_flame_02.jpeg",
    weight: "250g • 50 hrs burn",
    scentNotes: "Sea Salt, Driftwood, Crisp Italian Bergamot",
    description:
      "Crisp, marine coastal notes harmonized with mineral ozone and sun-bleached driftwood in a frosted ocean vessel.",
  },
  {
    id: 4,
    name: "CEDARWOOD & SPICE COLLECTION",
    category: "gift-sets",
    collectionType: "gift-sets",
    fragranceType: "spicy",
    vesselType: "glass",
    burnTime: "70+",
    availability: "in-stock",
    price: 6200,
    originalPrice: 7500,
    rating: 5.0,
    reviews: 52,
    badge: "LUXURY HAMPER",
    badgeColor: "bg-[#761e27] text-white",
    image: "/images/Collection/Collection_4.webp",
    weight: "Set of 3 Luxury Jars (750g)",
    scentNotes: "Atlas Cedarwood, Crushed Clove, Cinnamon Bark",
    description:
      "A grand 3-tier presentation hamper crafted for festive gatherings, intimate dinner parties, and unforgettable gifting.",
  },
  {
    id: 5,
    name: "KASHMIRI ROSE & GOLDEN NECTAR",
    category: "candles",
    collectionType: "festive",
    fragranceType: "floral",
    vesselType: "ceramic",
    burnTime: "50-65",
    availability: "in-stock",
    price: 2199,
    originalPrice: 2699,
    rating: 4.9,
    reviews: 42,
    badge: "BESTSELLER",
    badgeColor: "bg-[#761e27] text-white",
    image: "/images/our_products/the_flame_06.png",
    weight: "300g • 60 hrs burn",
    scentNotes: "Kashmiri Damask Rose, Golden Amber, Cardamom Nectar",
    description:
      "A royal heritage recipe featuring hand-harvested wild roses and spiced nectar in an embossed ceramic jar.",
  },
  {
    id: 6,
    name: "WHITE TEA CERAMIC CANDLE",
    category: "candles",
    collectionType: "aromatherapy",
    fragranceType: "fresh",
    vesselType: "ceramic",
    burnTime: "70+",
    availability: "in-stock",
    price: 4800,
    originalPrice: 5500,
    rating: 4.9,
    reviews: 38,
    badge: "LIMITED EDITION",
    badgeColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/our_products/the_flame_05.jpeg",
    weight: "450g • 80 hrs burn",
    scentNotes: "Imperial White Tea, Mandarin Blossom, Soft Thyme",
    description:
      "Minimalist white porcelain vessel filled with clean, botanical soy wax and delicate soothing tea aromas.",
  },
  {
    id: 7,
    name: "SANDALWOOD CALM POT",
    category: "candles",
    collectionType: "aromatherapy",
    fragranceType: "woody",
    vesselType: "ceramic",
    burnTime: "50-65",
    availability: "in-stock",
    price: 2900,
    originalPrice: 3400,
    rating: 4.8,
    reviews: 26,
    badge: "CALMING",
    badgeColor: "bg-amber-800 text-white",
    image: "/images/our_products/the_flame_03.jpeg",
    weight: "300g • 55 hrs burn",
    scentNotes: "Mysore Sandalwood, Crushed Cardamom, Amyris",
    description:
      "Grounding natural wood notes designed specifically for evening meditation, deep breathing, and restorative calm.",
  },
  {
    id: 8,
    name: "FRENCH LAVENDER & WILD FIG",
    category: "melts",
    collectionType: "aromatherapy",
    fragranceType: "herbal",
    vesselType: "metal",
    burnTime: "30-45",
    availability: "in-stock",
    price: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 19,
    badge: "WAX MELTS",
    badgeColor: "bg-purple-900 text-white",
    image: "/images/Collection/collectio_2.webp",
    weight: "8 Wax Melts (150g)",
    scentNotes: "Provence Lavender Buds, Wild Fig Leaves, Cedar",
    description:
      "Handmade botanical wax melt tarts that release instant calming aromatics when placed on a ceramic burner.",
  },
  {
    id: 9,
    name: "IMPERIAL BERGAMOT & VETIVER",
    category: "candles",
    collectionType: "signature",
    fragranceType: "spicy",
    vesselType: "glass",
    burnTime: "70+",
    availability: "pre-order",
    price: 3200,
    originalPrice: 3800,
    rating: 5.0,
    reviews: 61,
    badge: "PRE-ORDER",
    badgeColor: "bg-blue-900 text-white",
    image: "/images/our_products/the_flame_04.jpeg",
    weight: "400g • 75 hrs burn",
    scentNotes: "Calabrian Bergamot, Haitian Vetiver, Smoked Cedar",
    description:
      "An intense, statement candle with double wooden wicks and complex notes that transform larger living rooms.",
  },
  {
    id: 10,
    name: "GOLDEN SOLSTICE FESTIVE HAMPER",
    category: "gift-sets",
    collectionType: "festive",
    fragranceType: "spicy",
    vesselType: "metal",
    burnTime: "70+",
    availability: "in-stock",
    price: 5499,
    originalPrice: 6499,
    rating: 4.9,
    reviews: 44,
    badge: "FESTIVE SPECIAL",
    badgeColor: "bg-[#761e27] text-white",
    image: "/images/Collection/Collection_1.webp",
    weight: "Curated Box (4 Items)",
    scentNotes: "Saffron, Cinnamon Bark, Gilded Amber, Vanilla",
    description:
      "The ultimate festival and wedding gift box, complete with brass wick trimmers, luxury matches, and signature candles.",
  },
  {
    id: 11,
    name: "VANILLA BOURBON NOIR",
    category: "candles",
    collectionType: "signature",
    fragranceType: "vanilla",
    vesselType: "glass",
    burnTime: "50-65",
    availability: "in-stock",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 31,
    badge: "INDULGENT",
    badgeColor: "bg-[#761e27] text-white",
    image: "/images/our_products/the_flame_07.png",
    weight: "320g • 60 hrs burn",
    scentNotes: "Madagascan Vanilla Bean, Oak Barrel Bourbon, Smoked Sugar",
    description:
      "A rich, mouthwatering gourmet fragrance that wraps your home in cozy sweetness on cold winter evenings.",
  },
  {
    id: 12,
    name: "SACRED TEMPLE OUD DIFFUSER",
    category: "diffusers",
    collectionType: "signature",
    fragranceType: "woody",
    vesselType: "glass",
    burnTime: "70+",
    availability: "in-stock",
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 24,
    badge: "REED DIFFUSER",
    badgeColor: "bg-[#b8986c] text-[#1a120b]",
    image: "/images/Collection/collection_3.webp",
    weight: "200ml • 90 Days Scent",
    scentNotes: "Sacred Temple Agarwood, Frankincense, White Musk",
    description:
      "Continuous flameless luxury scent diffusion with 8 natural rattan reeds in a heavy fluted glass bottle.",
  },
];

// Filter Accordion Structure
const filterConfig = {
  availability: {
    label: "AVAILABILITY",
    options: [
      { id: "in-stock", label: "In Stock" },
      { id: "pre-order", label: "Pre-order" },
      { id: "out-of-stock", label: "Out of Stock" },
    ],
  },
  fragrance: {
    label: "FRAGRANCE TYPE",
    options: [
      { id: "woody", label: "Woody & Smoky" },
      { id: "floral", label: "Floral & Sweet" },
      { id: "fresh", label: "Fresh & Citrus" },
      { id: "spicy", label: "Spicy & Warm" },
      { id: "herbal", label: "Herbal & Earthy" },
      { id: "vanilla", label: "Vanilla & Gourmand" },
    ],
  },
  vessel: {
    label: "VESSEL TYPE",
    options: [
      { id: "glass", label: "Glass Jar" },
      { id: "metal", label: "Metal Tin" },
      { id: "ceramic", label: "Ceramic Pot" },
    ],
  },
  collection: {
    label: "COLLECTION TYPE",
    options: [
      { id: "signature", label: "Signature Series" },
      { id: "gift-sets", label: "Gift Sets & Hampers" },
      { id: "festive", label: "Festive & Rituals" },
      { id: "aromatherapy", label: "Aromatherapy Calm" },
    ],
  },
  burnTime: {
    label: "BURN TIME",
    options: [
      { id: "30-45", label: "30 – 45 Hours" },
      { id: "50-65", label: "50 – 65 Hours" },
      { id: "70+", label: "70+ Hours" },
    ],
  },
};

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedFragrances, setSelectedFragrances] = useState([]);
  const [selectedVessels, setSelectedVessels] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState(
    initialCategory !== "all" ? [initialCategory] : []
  );
  const [selectedBurnTimes, setSelectedBurnTimes] = useState([]);
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(7000);
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(3);

  // Accordion open/close states
  const [openAccordions, setOpenAccordions] = useState({
    availability: true,
    price: true,
    fragrance: true,
    vessel: true,
    collection: true,
    burnTime: true,
  });

  // Mobile Filter Drawer
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Quick View Modal State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewQty, setQuickViewQty] = useState(1);

  // Cart & Wishlist Local States
  const [wishlist, setWishlist] = useState({});
  const [cartToast, setCartToast] = useState(null);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCheckbox = (setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedAvailability([]);
    setSelectedFragrances([]);
    setSelectedVessels([]);
    setSelectedCollections([]);
    setSelectedBurnTimes([]);
    setMinPrice(500);
    setMaxPrice(7000);
    setSortBy("featured");
  };

  const activeFiltersCount =
    selectedAvailability.length +
    selectedFragrances.length +
    selectedVessels.length +
    selectedCollections.length +
    selectedBurnTimes.length +
    (minPrice > 500 || maxPrice < 7000 ? 1 : 0) +
    (searchTerm.trim() ? 1 : 0);

  // Wishlist handler
  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Add to Cart handler
  const handleAddToCart = (product, qty = 1, e) => {
    if (e) e.stopPropagation();
    setCartToast({
      product,
      qty,
    });
    setTimeout(() => {
      setCartToast(null);
    }, 3500);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        // Search Term Filter
        if (searchTerm.trim()) {
          const query = searchTerm.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesScent = product.scentNotes.toLowerCase().includes(query);
          const matchesDesc = product.description.toLowerCase().includes(query);
          if (!matchesName && !matchesScent && !matchesDesc) return false;
        }

        // Price Filter
        if (product.price < minPrice || product.price > maxPrice) return false;

        // Availability Filter
        if (
          selectedAvailability.length > 0 &&
          !selectedAvailability.includes(product.availability)
        ) {
          return false;
        }

        // Fragrance Filter
        if (
          selectedFragrances.length > 0 &&
          !selectedFragrances.includes(product.fragranceType)
        ) {
          return false;
        }

        // Vessel Filter
        if (
          selectedVessels.length > 0 &&
          !selectedVessels.includes(product.vesselType)
        ) {
          return false;
        }

        // Collection Filter
        if (
          selectedCollections.length > 0 &&
          !selectedCollections.includes(product.collectionType) &&
          !selectedCollections.includes(product.category)
        ) {
          return false;
        }

        // Burn Time Filter
        if (
          selectedBurnTimes.length > 0 &&
          !selectedBurnTimes.includes(product.burnTime)
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        return a.id - b.id; // default featured
      });
  }, [
    searchTerm,
    selectedAvailability,
    selectedFragrances,
    selectedVessels,
    selectedCollections,
    selectedBurnTimes,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] text-[#1a120b] select-none">
      
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB BANNER SECTION (MATCHING ABOUT US PAGE)                     */}
      {/* ========================================================================= */}
      <div 
        className="w-full relative pt-36 pb-12 md:pt-48 md:pb-16 flex flex-col items-center justify-center text-center bg-cover bg-center select-none"
        style={{ backgroundImage: `url('/images/breadcrumb.png')` }}
      >
        {/* Soft, dark premium wine-red tint overlay using custom #761e27 */}
        <div className="absolute inset-0 bg-[#3a0b0f]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Header */}
        <div className="relative z-10 space-y-3 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-white uppercase drop-shadow-sm"
          >
            Curated Collections
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2.5 font-sans text-[11px] md:text-xs text-zinc-300 uppercase font-medium tracking-[0.25em]"
          >
            <Link href="/" className="hover:text-[#d8bf9c] transition-colors">
              Home
            </Link>
            <span className="text-zinc-500 font-sans">/</span>
            <span className="text-[#d8bf9c] font-semibold">Collections</span>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN CATALOG LAYOUT (SIDEBAR + PRODUCTS GRID)                          */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10">
        
        {/* Top Control Bar (Search, Active Chips, Sort, Grid View Toggles) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#ebdcd0]">
          
          {/* Search Box with icon */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by candle, scent note, or vessel..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[#ebdcd0] text-xs text-zinc-800 focus:outline-none focus:border-[#761e27] focus:ring-1 focus:ring-[#761e27] transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Controls: Filter Drawer Trigger on Mobile, Sort Dropdown & Grid View Toggle */}
          <div className="flex items-center justify-between lg:justify-end gap-3 sm:gap-4 flex-wrap">
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 rounded-full bg-white border border-[#ebdcd0] text-xs font-semibold uppercase tracking-wider text-[#761e27] flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {/* Results Count */}
            <span className="text-xs text-zinc-500 font-sans hidden sm:inline-block">
              Showing <strong className="text-zinc-800">{filteredProducts.length}</strong> of{" "}
              {allProducts.length} items
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium hidden md:inline-block">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-full bg-white border border-[#ebdcd0] text-xs text-zinc-800 font-medium focus:outline-none focus:border-[#761e27] transition-all shadow-2xs cursor-pointer"
              >
                <option value="featured">Featured & Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating (Highest)</option>
                <option value="name-asc">Alphabetical (A - Z)</option>
              </select>
            </div>

            {/* Grid Column Selector (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 p-1 bg-white border border-[#ebdcd0] rounded-full shadow-2xs">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  gridCols === 2 ? "bg-[#761e27] text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
                aria-label="2 Columns View"
              >
                <Grid2X2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  gridCols === 3 ? "bg-[#761e27] text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
                aria-label="3 Columns View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Active Filter Chips Row */}
        {activeFiltersCount > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mr-1">
              Active Filters:
            </span>

            {/* Chips */}
            {selectedAvailability.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede4] border border-[#ebdcd0] text-xs text-[#761e27] font-medium"
              >
                {filterConfig.availability.options.find((o) => o.id === val)?.label}
                <button onClick={() => toggleCheckbox(setSelectedAvailability, val)}>
                  <X className="w-3 h-3 text-zinc-500 hover:text-[#761e27]" />
                </button>
              </span>
            ))}

            {selectedFragrances.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede4] border border-[#ebdcd0] text-xs text-[#761e27] font-medium"
              >
                {filterConfig.fragrance.options.find((o) => o.id === val)?.label}
                <button onClick={() => toggleCheckbox(setSelectedFragrances, val)}>
                  <X className="w-3 h-3 text-zinc-500 hover:text-[#761e27]" />
                </button>
              </span>
            ))}

            {selectedVessels.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede4] border border-[#ebdcd0] text-xs text-[#761e27] font-medium"
              >
                {filterConfig.vessel.options.find((o) => o.id === val)?.label}
                <button onClick={() => toggleCheckbox(setSelectedVessels, val)}>
                  <X className="w-3 h-3 text-zinc-500 hover:text-[#761e27]" />
                </button>
              </span>
            ))}

            {selectedCollections.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede4] border border-[#ebdcd0] text-xs text-[#761e27] font-medium"
              >
                {filterConfig.collection.options.find((o) => o.id === val)?.label || val}
                <button onClick={() => toggleCheckbox(setSelectedCollections, val)}>
                  <X className="w-3 h-3 text-zinc-500 hover:text-[#761e27]" />
                </button>
              </span>
            ))}

            {(minPrice > 500 || maxPrice < 7000) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede4] border border-[#ebdcd0] text-xs text-[#761e27] font-medium">
                ₹{minPrice} - ₹{maxPrice}
                <button
                  onClick={() => {
                    setMinPrice(500);
                    setMaxPrice(7000);
                  }}
                >
                  <X className="w-3 h-3 text-zinc-500 hover:text-[#761e27]" />
                </button>
              </span>
            )}

            {/* Clear All Link */}
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#761e27] font-bold uppercase tracking-wider hover:underline ml-2 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Clear All
            </button>
          </div>
        )}

        {/* 2-COLUMN LAYOUT: SIDEBAR FILTERS (LEFT) + PRODUCTS GRID (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* A. DESKTOP SIDEBAR FILTER ACCORDION (SMOOTH INDEPENDENT SCROLL)           */}
          {/* ========================================================================= */}
          <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-28 max-h-[calc(100vh-130px)] overflow-y-auto pr-2 pb-8 overscroll-contain">
            
            {/* Sidebar Top Title */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#d8bf9c]/40">
              <h3 className="font-serif text-base font-bold tracking-wider text-[#1a120b] uppercase flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#761e27]" />
                <span>FILTERS</span>
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] font-bold text-[#761e27] uppercase tracking-wider hover:underline cursor-pointer"
                >
                  RESET
                </button>
              )}
            </div>

            {/* ACCORDION 1: AVAILABILITY */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("availability")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>{filterConfig.availability.label}</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.availability ? "−" : "+"}
                </span>
              </button>

              {openAccordions.availability && (
                <div className="p-4 space-y-2.5 bg-white">
                  {filterConfig.availability.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer hover:text-[#761e27] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedAvailability, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] rounded cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        (
                        {
                          allProducts.filter((p) => p.availability === opt.id)
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* ACCORDION 2: PRICE RANGE (INR) */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("price")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>PRICE RANGE (INR)</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.price ? "−" : "+"}
                </span>
              </button>

              {openAccordions.price && (
                <div className="p-4 space-y-3.5 bg-white">
                  {/* Slider Control */}
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={500}
                      max={7000}
                      step={100}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-[#761e27] cursor-pointer"
                    />
                    <div className="flex items-center justify-between text-xs text-zinc-600 font-sans">
                      <span>₹500</span>
                      <span className="font-bold text-[#761e27]">Max: ₹{maxPrice}</span>
                      <span>₹7,000</span>
                    </div>
                  </div>

                  {/* Min / Max Inputs Box */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded-lg border border-[#ebdcd0] bg-[#faf8f5] text-center">
                      <span className="text-[10px] text-zinc-400 block">Min</span>
                      <span className="text-xs font-bold text-zinc-800">₹{minPrice}</span>
                    </div>
                    <div className="p-2 rounded-lg border border-[#ebdcd0] bg-[#faf8f5] text-center">
                      <span className="text-[10px] text-zinc-400 block">Max</span>
                      <span className="text-xs font-bold text-zinc-800">₹{maxPrice}</span>
                    </div>
                  </div>

                  {/* Quick Price Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <button
                      onClick={() => {
                        setMinPrice(500);
                        setMaxPrice(1500);
                      }}
                      className="px-2 py-1 rounded-md text-[10px] font-medium bg-[#f5ede3] hover:bg-[#ebdcd0] text-zinc-700 transition-colors cursor-pointer"
                    >
                      Under ₹1,500
                    </button>
                    <button
                      onClick={() => {
                        setMinPrice(1500);
                        setMaxPrice(3000);
                      }}
                      className="px-2 py-1 rounded-md text-[10px] font-medium bg-[#f5ede3] hover:bg-[#ebdcd0] text-zinc-700 transition-colors cursor-pointer"
                    >
                      ₹1,500 - ₹3,000
                    </button>
                    <button
                      onClick={() => {
                        setMinPrice(3000);
                        setMaxPrice(7000);
                      }}
                      className="px-2 py-1 rounded-md text-[10px] font-medium bg-[#f5ede3] hover:bg-[#ebdcd0] text-zinc-700 transition-colors cursor-pointer"
                    >
                      Above ₹3,000
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ACCORDION 3: FRAGRANCE TYPE */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("fragrance")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>{filterConfig.fragrance.label}</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.fragrance ? "−" : "+"}
                </span>
              </button>

              {openAccordions.fragrance && (
                <div className="p-4 space-y-2.5 bg-white">
                  {filterConfig.fragrance.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer hover:text-[#761e27] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedFragrances.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedFragrances, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] rounded cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        (
                        {
                          allProducts.filter((p) => p.fragranceType === opt.id)
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* ACCORDION 4: VESSEL TYPE */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("vessel")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>{filterConfig.vessel.label}</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.vessel ? "−" : "+"}
                </span>
              </button>

              {openAccordions.vessel && (
                <div className="p-4 space-y-2.5 bg-white">
                  {filterConfig.vessel.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer hover:text-[#761e27] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedVessels.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedVessels, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] rounded cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        (
                        {
                          allProducts.filter((p) => p.vesselType === opt.id)
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* ACCORDION 5: COLLECTION / OCCASION */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("collection")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>{filterConfig.collection.label}</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.collection ? "−" : "+"}
                </span>
              </button>

              {openAccordions.collection && (
                <div className="p-4 space-y-2.5 bg-white">
                  {filterConfig.collection.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer hover:text-[#761e27] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedCollections.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedCollections, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] rounded cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        (
                        {
                          allProducts.filter(
                            (p) =>
                              p.collectionType === opt.id ||
                              p.category === opt.id
                          ).length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* ACCORDION 6: BURN TIME */}
            <div className="rounded-xl border border-[#ebdcd0] bg-[#fbf9f6] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion("burnTime")}
                className="w-full px-4 py-3 bg-[#f5ede3] flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-[#ebdcd0]/60 transition-colors cursor-pointer"
              >
                <span>{filterConfig.burnTime.label}</span>
                <span className="text-[#761e27] font-bold text-sm">
                  {openAccordions.burnTime ? "−" : "+"}
                </span>
              </button>

              {openAccordions.burnTime && (
                <div className="p-4 space-y-2.5 bg-white">
                  {filterConfig.burnTime.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer hover:text-[#761e27] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedBurnTimes.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedBurnTimes, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] rounded cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        (
                        {
                          allProducts.filter((p) => p.burnTime === opt.id)
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

          </aside>

          {/* ========================================================================= */}
          {/* B. PRODUCTS CARD GRID (MATCHING TWIN FLAME LUXURY AESTHETIC)              */}
          {/* ========================================================================= */}
          <main className="lg:col-span-9">
            
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center rounded-3xl bg-white border border-[#ebdcd0] p-8 shadow-sm">
                <Package className="w-12 h-12 text-[#d8bf9c] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#1a120b] mb-1">
                  No candles match your criteria
                </h3>
                <p className="text-xs text-zinc-500 font-light max-w-sm mx-auto mb-6">
                  Try adjusting your price range or clearing some fragrance filters to see available products.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-full bg-[#761e27] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8e2430] transition-all shadow-md cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-5 sm:gap-6 ${
                  gridCols === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {filteredProducts.map((product) => {
                  const isWishlisted = !!wishlist[product.id];

                  return (
                    <div
                      key={product.id}
                      className="group relative rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#d8bf9c] shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
                    >
                      {/* Image Container */}
                      <div className="relative w-full aspect-[4/3.8] bg-[#f8f5f0] overflow-hidden">
                        
                        {/* Primary Image */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                          <span
                            className={`px-2.5 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-wider shadow-sm ${product.badgeColor}`}
                          >
                            {product.badge}
                          </span>
                        </div>

                        {/* Top Action Icons: Wishlist Heart & Quick View Eye */}
                        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
                          <button
                            onClick={(e) => toggleWishlist(product.id, e)}
                            aria-label="Add to Wishlist"
                            className={`w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-[#ebdcd0] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer ${
                              isWishlisted
                                ? "text-rose-600 bg-rose-50"
                                : "text-zinc-500 hover:text-rose-600"
                            }`}
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                isWishlisted ? "fill-current" : ""
                              }`}
                            />
                          </button>

                          <button
                            onClick={() => {
                              setQuickViewProduct(product);
                              setQuickViewQty(1);
                            }}
                            aria-label="Quick View"
                            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-[#ebdcd0] flex items-center justify-center text-zinc-500 hover:text-[#761e27] hover:bg-white transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer opacity-0 group-hover:opacity-100"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quick View Pill on Hover at bottom of image */}
                        <button
                          onClick={() => {
                            setQuickViewProduct(product);
                            setQuickViewQty(1);
                          }}
                          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-black/75 hover:bg-[#761e27] text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md cursor-pointer flex items-center gap-1.5"
                        >
                          <Eye className="w-3 h-3" /> Quick Look
                        </button>
                      </div>

                      {/* Card Content Block */}
                      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
                        
                        <div>
                          {/* Weight & Rating Row */}
                          <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1.5">
                            <span className="font-medium text-zinc-400">
                              {product.weight}
                            </span>
                            <div className="flex items-center gap-1 text-amber-500 font-bold">
                              <Star className="w-3 h-3 fill-current" />
                              <span>{product.rating}</span>
                              <span className="text-zinc-400 font-normal">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>

                          {/* Product Title */}
                          <h3 className="font-serif text-sm sm:text-base font-bold text-[#1a120b] leading-snug group-hover:text-[#761e27] transition-colors line-clamp-2 uppercase">
                            {product.name}
                          </h3>

                          {/* Scent Notes Pill */}
                          <p className="text-[11.5px] text-zinc-500 font-light mt-1 line-clamp-1">
                            {product.scentNotes}
                          </p>
                        </div>

                        {/* Price & Add to Cart Button */}
                        <div className="pt-2 border-t border-[#f0e6dc] space-y-3">
                          <div className="flex items-baseline gap-2">
                            <span className="font-serif text-base sm:text-lg font-bold text-[#761e27]">
                              ₹{product.price.toLocaleString("en-IN")}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-zinc-400 line-through">
                                ₹{product.originalPrice.toLocaleString("en-IN")}
                              </span>
                            )}
                            {product.originalPrice && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                                Save ₹
                                {(
                                  product.originalPrice - product.price
                                ).toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>

                          {/* Add to Cart CTA Button */}
                          <button
                            onClick={(e) => handleAddToCart(product, 1, e)}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#761e27] hover:bg-[#8e2430] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>ADD TO CART</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE FILTER SLIDE-OVER DRAWER                                        */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[9999] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden text-[#1a120b]"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-[#ebdcd0] flex items-center justify-between bg-[#f8f5f0]">
                <h3 className="font-serif text-base font-bold text-[#1a120b] uppercase flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#761e27]" />
                  <span>Filters ({activeFiltersCount})</span>
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-white border border-[#ebdcd0] flex items-center justify-center text-zinc-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Scrollable Filter List */}
              <div className="p-4 space-y-4 overflow-y-auto flex-grow">
                {/* Availability */}
                <div className="p-3.5 rounded-xl border border-[#ebdcd0] bg-[#faf8f5] space-y-2.5">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-800">
                    {filterConfig.availability.label}
                  </h4>
                  {filterConfig.availability.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center justify-between text-xs text-zinc-700 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(opt.id)}
                          onChange={() =>
                            toggleCheckbox(setSelectedAvailability, opt.id)
                          }
                          className="w-3.5 h-3.5 accent-[#761e27] cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div className="p-3.5 rounded-xl border border-[#ebdcd0] bg-[#faf8f5] space-y-2.5">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-800">
                    PRICE RANGE (UP TO ₹{maxPrice})
                  </h4>
                  <input
                    type="range"
                    min={500}
                    max={7000}
                    step={100}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#761e27] cursor-pointer"
                  />
                </div>

                {/* Fragrance */}
                <div className="p-3.5 rounded-xl border border-[#ebdcd0] bg-[#faf8f5] space-y-2.5">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-800">
                    {filterConfig.fragrance.label}
                  </h4>
                  {filterConfig.fragrance.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFragrances.includes(opt.id)}
                        onChange={() =>
                          toggleCheckbox(setSelectedFragrances, opt.id)
                        }
                        className="w-3.5 h-3.5 accent-[#761e27] cursor-pointer"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-4 border-t border-[#ebdcd0] bg-[#f8f5f0] flex items-center gap-3">
                <button
                  onClick={clearAllFilters}
                  className="w-1/2 py-2.5 rounded-xl border border-[#ebdcd0] text-xs font-bold uppercase tracking-wider text-zinc-700 bg-white cursor-pointer"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-1/2 py-2.5 rounded-xl bg-[#761e27] text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer"
                >
                  View ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 4. QUICK VIEW MODAL DIALOG                                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto border border-[#ebdcd0]"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 border border-[#ebdcd0] flex items-center justify-center text-zinc-600 hover:text-black shadow-xs cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Section */}
                <div className="relative aspect-square md:aspect-auto w-full bg-[#f8f5f0]">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${quickViewProduct.badgeColor}`}
                    >
                      {quickViewProduct.badge}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#b8986c]">
                      {quickViewProduct.weight}
                    </span>

                    <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1a120b] uppercase mt-1">
                      {quickViewProduct.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-500">
                        {quickViewProduct.rating} ({quickViewProduct.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2.5 my-2">
                      <span className="font-serif text-xl font-bold text-[#761e27]">
                        ₹{quickViewProduct.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-zinc-400 line-through">
                        ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed mb-3">
                      {quickViewProduct.description}
                    </p>

                    {/* Scent Pyramid Box */}
                    <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebdcd0] text-[11px] text-zinc-700 space-y-1">
                      <span className="font-bold text-[#761e27] uppercase tracking-wider block text-[9.5px]">
                        Aromatic Scent Notes:
                      </span>
                      <p>{quickViewProduct.scentNotes}</p>
                    </div>
                  </div>

                  {/* Quantity & CTA */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center border border-[#ebdcd0] rounded-full bg-white p-1">
                        <button
                          onClick={() =>
                            setQuickViewQty((prev) => Math.max(1, prev - 1))
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-100 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-zinc-800">
                          {quickViewQty}
                        </span>
                        <button
                          onClick={() => setQuickViewQty((prev) => prev + 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-100 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          handleAddToCart(quickViewProduct, quickViewQty);
                          setQuickViewProduct(null);
                        }}
                        className="flex-grow py-3 px-6 rounded-full bg-[#761e27] hover:bg-[#8e2430] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add {quickViewQty} to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 5. ADD TO CART TOAST NOTIFICATION                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {cartToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[99999] bg-[#1c1214] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#d8bf9c]/40 flex items-center gap-3.5 max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#761e27] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate text-[#f8eddc]">
                Added to your Cart
              </p>
              <p className="text-[11px] text-zinc-400 truncate">
                {cartToast.qty} × {cartToast.product.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-xs text-zinc-500">Loading collection...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
