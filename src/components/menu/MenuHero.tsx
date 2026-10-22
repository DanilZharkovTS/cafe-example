"use client";

import { useEffect, useState } from "react";
import LeafIcon from "../LeafIcon";

const categories = [
  { id: "coffee", name: "Specialty Coffee" },
  { id: "sandwiches", name: "Sandwiches & Wraps" },
  { id: "smoothies", name: "Smoothies" },
  { id: "bowls", name: "Healthy Bowls" },
  { id: "pastries", name: "Artisan Pastries" },
];

export default function MenuHero() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("coffee");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#12100e]">
      {/* Background Image with Dark Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=2000&q=85"
          alt="Amber Mug Gourmet Food and Coffee Menu"
          className={`w-full h-full object-cover object-center transition-transform duration-[3000ms] ease-out will-change-transform ${
            mounted ? "scale-105" : "scale-115"
          }`}
        />
        <div className="absolute inset-0 bg-[#12100e]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/95 via-[#12100e]/75 to-[#12100e]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col items-center">
        {/* "Check out" in Kristi script */}
        <div className="overflow-hidden">
          <span
            className={`block font-script text-7xl sm:text-8xl md:text-9xl text-[#CFA670] mb-0 tracking-normal drop-shadow-md transition-all duration-1000 ease-out transform ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Check out
          </span>
        </div>

        {/* Main Title */}
        <div className="overflow-hidden">
          <h1
            className={`font-lato text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-4 drop-shadow-xl transition-all duration-1000 delay-200 ease-out transform ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Our Menus
          </h1>
        </div>

        {/* Leaf Icon */}
        <div
          className={`my-3 transition-all duration-1000 delay-400 ease-out transform ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <LeafIcon className="w-7 h-9 text-[#CFA670] mx-auto opacity-95 drop-shadow hover:scale-110 transition-transform duration-300" />
        </div>

        <p
          className={`font-lato text-xs sm:text-sm uppercase tracking-[0.3em] text-[#ded7cc] font-medium max-w-lg mb-8 transition-all duration-1000 delay-500 ease-out transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          All-Day Organic Kitchen • Specialty Brews • Daily Baked Pastries
        </p>

        {/* Category Navigation Pills */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 transition-all duration-1000 delay-600 ease-out transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 font-lato ${
                activeCategory === cat.id
                  ? "bg-[#CFA670] text-[#12100e] shadow-lg shadow-[#CFA670]/25"
                  : "bg-[#1d1915]/90 border border-[#2d251e] text-[#d6cfc5] hover:border-[#CFA670] hover:text-[#CFA670]"
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
