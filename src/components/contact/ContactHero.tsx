"use client";

import { useEffect, useState } from "react";
import LeafIcon from "../LeafIcon";

export default function ContactHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#12100e]">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
          alt="Amber Mug Cafe Interior"
          className={`w-full h-full object-cover object-center transition-transform duration-[3000ms] ease-out will-change-transform ${
            mounted ? "scale-105" : "scale-115"
          }`}
        />
        <div className="absolute inset-0 bg-[#12100e]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/95 via-[#12100e]/75 to-[#12100e]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col items-center">
        {/* "Get in" in Kristi script */}
        <div className="overflow-hidden">
          <span
            className={`block font-script text-7xl sm:text-8xl md:text-9xl text-[#CFA670] mb-0 tracking-normal drop-shadow-md transition-all duration-1000 ease-out transform ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Get in
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
            Contact
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
          className={`font-lato text-xs sm:text-sm uppercase tracking-[0.3em] text-[#ded7cc] font-medium max-w-lg transition-all duration-1000 delay-500 ease-out transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Santa Cruz • San Cristóbal de La Laguna • Costa Adeje
        </p>
      </div>
    </section>
  );
}
