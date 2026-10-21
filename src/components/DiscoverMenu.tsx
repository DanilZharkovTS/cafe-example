"use client";

import LeafIcon from "./LeafIcon";
import AnimateOnScroll from "./AnimateOnScroll";

export default function DiscoverMenu() {
  return (
    <section id="menu" className="relative w-full py-24 lg:py-32 bg-[#141210] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 2-Photo Showcase with Staggered Scroll Reveal */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Handcrafted Iced Drink */}
            <AnimateOnScroll animation="fade-up" delay={100} duration={900}>
              <div className="group relative overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-xl hover:border-[#CFA670]/40 transition-colors duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85"
                    alt="Amber Mug Signature Iced Brew"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/95 via-[#12100e]/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-5 right-5 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#CFA670] bg-[#12100e]/90 px-3 py-1 rounded-full border border-[#CFA670]/30 backdrop-blur-sm shadow-sm inline-block mb-1.5">
                    Specialty Brew
                  </span>
                  <p className="text-base font-lato text-[#f5f2ec] font-bold">
                    Amber Draft Cold Foam Latte
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 2: Organic Kitchen Dishes with Vertical Offset */}
            <AnimateOnScroll animation="fade-up" delay={250} duration={900} className="sm:translate-y-10">
              <div className="group relative overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-xl hover:border-[#CFA670]/40 transition-colors duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
                    alt="Organic Avocado Toast and Pastries"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/95 via-[#12100e]/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-5 right-5 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#CFA670] bg-[#12100e]/90 px-3 py-1 rounded-full border border-[#CFA670]/30 backdrop-blur-sm shadow-sm inline-block mb-1.5">
                    Artisan Kitchen
                  </span>
                  <p className="text-base font-lato text-[#f5f2ec] font-bold">
                    Organic Avocado Tartine & Pastries
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Discover Content with Text Reveal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8">
            <AnimateOnScroll animation="text-slide-up" delay={150} duration={800}>
              <span className="font-script text-7xl sm:text-8xl text-[#CFA670] tracking-normal mb-0 block">
                Discover
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="text-slide-up" delay={300} duration={800}>
              <h2 className="font-lato text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight sm:tracking-normal text-[#faf8f5] -mt-2 mb-4 block">
                Our Menu
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="zoom-in" delay={450} duration={600} className="mb-6">
              <LeafIcon className="w-7 h-9 text-[#CFA670] opacity-95 hover:rotate-6 transition-transform duration-300" />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={550} duration={800}>
              <p className="font-lato text-[#b8afa3] text-sm sm:text-base leading-relaxed max-w-md mb-8">
                All-Day menu of organic, locally sourced dishes and smoothies.
                Vegan, Gluten-Free options for freshly baked pastries. Seasonal
                special drinks crafted with ethically sourced single-origin beans.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={700} duration={800} className="w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start font-lato">
                <a
                  href="#full-menu"
                  className="group relative overflow-hidden w-full sm:w-auto text-center px-10 py-3.5 rounded-full border border-[#CFA670] text-sm font-bold uppercase tracking-widest text-[#CFA670] transition-all duration-300 shadow-md hover:shadow-[#CFA670]/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10 group-hover:text-[#12100e] transition-colors duration-300">
                    View Menu
                  </span>
                  <div className="absolute inset-0 bg-[#CFA670] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
                <span className="text-xs text-[#8f8577] italic tracking-wide">
                  * Served daily 7 AM – 6 PM
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
