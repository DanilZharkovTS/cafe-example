"use client";

import { useEffect, useState } from "react";
import LeafIcon from "./LeafIcon";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#12100e]">
      {/* Background Image with Slow Ambient Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2070&q=85"
          alt="Amber Mug Artisan Coffee Roastery"
          className={`w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out will-change-transform ${
            mounted ? "scale-105" : "scale-115"
          }`}
        />
        <div className="absolute inset-0 bg-[#12100e]/80 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/90 via-[#12100e]/60 to-[#12100e]" />
      </div>

      {/* Hero Content with Staggered Entrance Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center">
        {/* "Welcome to" script cursive */}
        <div className="overflow-hidden">
          <span
            className={`block font-script text-7xl sm:text-8xl md:text-9xl text-[#CFA670] mb-0 tracking-normal drop-shadow-md transition-all duration-1000 ease-out transform ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Welcome to
          </span>
        </div>

        {/* Brand Headline with smooth slide-up */}
        <div className="overflow-hidden">
          <h1
            className={`font-lato text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#faf8f5] -mt-2 mb-4 drop-shadow-xl transition-all duration-1000 delay-200 ease-out transform ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Amber Mug Coffee
          </h1>
        </div>

        {/* Tagline & Expanding Lines */}
        <div
          className={`flex items-center gap-4 my-2 transition-all duration-1000 delay-400 ease-out transform ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div
            className={`h-[1px] bg-gradient-to-r from-transparent to-[#CFA670] transition-all duration-1000 delay-500 ${
              mounted ? "w-8 sm:w-16" : "w-0"
            }`}
          />
          <h2 className="font-lato text-sm sm:text-base md:text-lg font-semibold tracking-[0.35em] uppercase text-[#ded7cc]">
            Speciality Fine Coffee
          </h2>
          <div
            className={`h-[1px] bg-gradient-to-l from-transparent to-[#CFA670] transition-all duration-1000 delay-500 ${
              mounted ? "w-8 sm:w-16" : "w-0"
            }`}
          />
        </div>

        {/* Leaf Icon with gentle fade and pulse */}
        <div
          className={`mt-4 mb-8 transition-all duration-1000 delay-600 ease-out transform ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <LeafIcon className="w-7 h-9 text-[#CFA670] mx-auto opacity-95 drop-shadow hover:scale-110 transition-transform duration-300" />
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mt-2 font-lato transition-all duration-1000 delay-700 ease-out transform ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#menu"
            className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-[#CFA670] text-[#12100e] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#CFA670]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-[#e4be88] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-full border border-[#CFA670] text-[#f3f0ea] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-[#e4be88] hover:text-[#CFA670] hover:bg-[#CFA670]/10 hover:-translate-y-0.5 active:translate-y-0"
          >
            Visit Our Cafes
          </a>
        </div>
      </div>

      {/* Sub-banner ribbon */}
      <div className="relative z-10 w-full bg-[#181411]/90 border-t border-b border-[#2d251e] py-6 px-4 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
          <p
            className={`font-lato text-sm sm:text-base md:text-lg text-[#ded7cc] tracking-wide font-light italic transition-all duration-1000 delay-900 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            &ldquo;Sip into bliss with our handcrafted specialty brews&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
