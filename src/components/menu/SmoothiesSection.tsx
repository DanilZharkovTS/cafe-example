"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";
import { MenuItem } from "./CoffeeSection";

const smoothieItems: MenuItem[] = [
  {
    title: "Strawberry Banana",
    price: "$9.50",
    desc: "20 Oz. Fresh picked strawberries, sweet ripe bananas, and house organic vanilla almond milk blended smooth and creamy.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "Dairy-Free", "Classic"],
  },
  {
    title: "Mrs. Green",
    price: "$10.50",
    desc: "20 Oz. Organic baby spinach, sweet banana, tropical golden pineapple, mango puree, and unsweetened almond milk. Packed with greens and vitality.",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "Superfood", "Detox"],
  },
  {
    title: "Mr. Peanut",
    price: "$10.00",
    desc: "20 Oz. Creamy all-natural roasted peanut butter, ripe banana, pure clover honey, and almond milk with rich plant protein.",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "High Protein"],
  },
  {
    title: "PB & Brew",
    price: "$10.75",
    desc: "20 Oz. Our 18-hour cold brew coffee concentrate, artisanal peanut butter, banana, cacao nibs, and almond milk for clean morning focus.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "Cold Brew Infused"],
  },
  {
    title: "Wild Mixed Berry",
    price: "$10.00",
    desc: "20 Oz. Antioxidant blend of wild blueberries, sweet blackberries, tart raspberries, banana, and chilled almond milk.",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "Antioxidants"],
  },
  {
    title: "Tropical Booster",
    price: "$10.50",
    desc: "20 Oz. Sunshine blend of ripe banana, sweet strawberries, Alphonso mango, golden pineapple chunks, and coconut-almond milk.",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
    tags: ["20 Oz", "Vitamin C"],
  },
];

export default function SmoothiesSection() {
  return (
    <section id="smoothies" className="w-full py-20 lg:py-28 bg-[#141210] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-6xl sm:text-7xl text-[#CFA670] tracking-normal block">
              Refreshing
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-3">
              Fresh 20 Oz Smoothies
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-6 h-8 text-[#CFA670] mx-auto opacity-90 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              100% whole fruits, organic almond milk, and nutrient-dense superfoods blended fresh to order without artificial sugars or concentrates.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3-Column Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {smoothieItems.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={(idx % 3) * 120}
              duration={700}
            >
              <div className="group flex flex-col h-full bg-[#191512] border border-[#2d251e] rounded-2xl overflow-hidden hover:border-[#CFA670]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CFA670]/5">
                {/* Photo Header */}
                <div className="w-full h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191512] via-transparent to-transparent opacity-80" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 bg-[#12100e]/90 border border-[#CFA670]/40 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="font-lato text-sm font-extrabold text-[#CFA670]">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex flex-col justify-between grow -mt-2 relative z-10">
                  <div>
                    <h3 className="font-lato text-lg font-bold uppercase tracking-wide text-[#faf8f5] group-hover:text-[#CFA670] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="font-lato text-xs sm:text-sm text-[#a3998c] leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#26201a]">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#12100e] text-[#CFA670] border border-[#2a221b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
