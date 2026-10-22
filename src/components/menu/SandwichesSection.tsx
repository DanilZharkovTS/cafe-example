"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";
import { MenuItem } from "./CoffeeSection";

const sandwichItems: MenuItem[] = [
  {
    title: "Avocado Toast",
    price: "$13.50",
    desc: "House-made avocado mousse (non-dairy), fresh sliced avocado, Himalayan sea salt, smoked paprika, lemon zest, crumbly feta cheese and brown butter drizzle on artisanal sourdough bread.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Best Seller"],
  },
  {
    title: "Caprese Panini",
    price: "$12.75",
    desc: "Homemade fragrant basil pesto, fresh sliced buffalo mozzarella, and ripe vine steak tomatoes pressed crisp on artisanal ciabatta bread.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Hot Pressed"],
  },
  {
    title: "Turkey Fig-Mayo Wrap",
    price: "$14.00",
    desc: "Slow-roasted turkey breast, signature house-made fig mayo, baby mixed greens, sweet cherry tomatoes, and aged provolone folded in a warm flour tortilla.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef Special"],
  },
  {
    title: "Organic Egg & Cheddar Brioche",
    price: "$10.50",
    desc: "Locally sourced organic free-range eggs, aged cheddar & cured Canarian cheese, lightly sauteed baby spinach, and smoky chipotle aioli on a toasted seeded sesame bun.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: ["All-Day Breakfast", "Organic"],
  },
  {
    title: "Signature Breakfast Burrito",
    price: "$13.75",
    desc: "Organic scrambled eggs, three-cheese blend slowly melted, roasted herb turkey breast, house avocado mousse, crispy Idaho potatoes, and chipotle mayo in a grilled flour tortilla.",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    tags: ["Hearty", "Top Pick"],
  },
  {
    title: "Mediterranean Hummus Wrap",
    price: "$12.50",
    desc: "Creamy house-made garlic hummus, crisp baby greens, shredded purple cabbage, Kalamata olives, extra virgin olive oil, and aged Modena balsamic glaze in a soft wrap.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan", "Plant-Based"],
  },
  {
    title: "Pastrami & Melted Provolone",
    price: "$15.00",
    desc: "Slow-cured black angus pastrami, molten provolone cheese, tangy house red cabbage slaw, and spicy chipotle remoulade pressed golden on crusty ciabatta bread.",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    tags: ["Warm Pressed"],
  },
  {
    title: "Wild Albacore Tuna Sandwich",
    price: "$14.50",
    desc: "Sustainably caught wild tuna, cage-free hard-boiled egg, celery crunch, baby capers, cilantro herbs, and house garlic confit truffle mayo on toasted artisan bread.",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
    tags: ["Truffle Infused"],
  },
  {
    title: "Artisanal Grilled Cheese",
    price: "$11.50",
    desc: "Three-cheese artisanal blend (sharp cheddar, gruyère, fontina) pressed crisp on sourdough with sweet caramelized tomato-onion relish and house dill pickles.",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    tags: ["Comfort Classic"],
  },
];

export default function SandwichesSection() {
  return (
    <section id="sandwiches" className="w-full py-20 lg:py-28 bg-[#12100e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-6xl sm:text-7xl text-[#CFA670] tracking-normal block">
              Savory
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-3">
              Sandwiches &amp; Wraps
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-6 h-8 text-[#CFA670] mx-auto opacity-90 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              Made-to-order on artisanal NYC sourdough and ciabatta with organic free-range eggs, prime meats, and scratch-made dressings.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3-Column / 2-Column Responsive Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sandwichItems.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={(idx % 3) * 120}
              duration={700}
            >
              <div className="group flex flex-col h-full bg-[#181411] border border-[#2d251e] rounded-2xl overflow-hidden hover:border-[#CFA670]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CFA670]/5">
                {/* Photo Header */}
                <div className="w-full h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-transparent opacity-80" />
                  
                  {/* Price Tag Floating */}
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
