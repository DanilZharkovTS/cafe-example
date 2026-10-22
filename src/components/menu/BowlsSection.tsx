"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";
import { MenuItem } from "./CoffeeSection";

const bowlItems: MenuItem[] = [
  {
    title: "Big Berry Greek Yogurt Bowl",
    price: "$12.00",
    desc: "Creamy whole-milk Greek yogurt, house-made roasted nut granola, toasted coconut flakes, pumpkin and chia seeds, topped with fresh seasonal berries and pure Canary wildflower honey.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tags: ["High Protein", "Vegetarian"],
  },
  {
    title: "Organic Superfood Açaí Bowl",
    price: "$13.50",
    desc: "16 Oz. Thick organic wild Brazilian açaí blended with banana and almond milk, topped with crunchy honey granola, chia and pumpkin seeds, coconut shavings, and fresh sliced strawberries and blueberries.",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    tags: ["16 Oz", "Antioxidant", "Vegan"],
  },
  {
    title: "Warm Spiced Rolled Oatmeal",
    price: "$9.50",
    desc: "Steel-cut and rolled oats slow-simmered with almond milk, dried wild berries, sun-ripened apricots, roasted pumpkin seeds, fresh fruits, Ceylon cinnamon, and pure organic dark amber maple syrup.",
    image:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80",
    tags: ["Warm & Cozy", "Vegan"],
  },
];

export default function BowlsSection() {
  return (
    <section id="bowls" className="w-full py-20 lg:py-28 bg-[#12100e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-6xl sm:text-7xl text-[#CFA670] tracking-normal block">
              Nourishing
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-3">
              Healthy Bowls
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-6 h-8 text-[#CFA670] mx-auto opacity-90 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              Wholesome bowls crafted with organic seeds, ancient grains, house-baked granola, and fresh farm fruits for sustained energy.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3-Column Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bowlItems.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={idx * 130}
              duration={700}
            >
              <div className="group flex flex-col h-full bg-[#181411] border border-[#2d251e] rounded-2xl overflow-hidden hover:border-[#CFA670]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CFA670]/5">
                {/* Photo Header */}
                <div className="w-full h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-transparent opacity-80" />
                  
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
