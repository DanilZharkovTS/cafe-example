"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";
import { MenuItem } from "./CoffeeSection";

const pastryItems: MenuItem[] = [
  {
    title: "Artisanal Butter Croissant",
    price: "$4.75",
    desc: "Classic Parisian flaky multi-layered laminated pastry baked with Normandy cultured butter. Available in Plain, Valrhona Chocolate, or Almond Frangipane.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tags: ["Baked Fresh Daily", "French Classic"],
  },
  {
    title: "Spinach & Feta Cheese Börek",
    price: "$6.50",
    desc: "Crispy hand-rolled Mediterranean phyllo pastry spiral filled with organic wilted baby spinach, barrel-aged feta, and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Warm Savory"],
  },
  {
    title: "Spiced Pumpkin Loaf",
    price: "$5.00",
    desc: "Ultra-moist autumn spiced tea cake baked with roasted heirloom pumpkin puree, nutmeg, cinnamon, and toasted pumpkin seed crunch.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Vegan", "Plant-Based"],
  },
  {
    title: "Tahini Dark Chocolate Chunk Cookie",
    price: "$4.50",
    desc: "Fudgy sea-salt cookie made with organic stone-ground sesame tahini and 70% dark Belgian bittersweet chocolate disks.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    tags: ["Gluten-Free", "Vegan"],
  },
  {
    title: "Nutella Banana Bread",
    price: "$5.50",
    desc: "Caramelized over-ripe banana bread swirled with roasted hazelnut cocoa Nutella and topped with caramelized banana chips.",
    image:
      "https://images.unsplash.com/photo-1605698802004-94672e61a4c9?auto=format&fit=crop&w=800&q=80",
    tags: ["Decadent", "House Favorite"],
  },
  {
    title: "Spiced Carrot Walnut Muffin",
    price: "$4.75",
    desc: "Wholesome bakery muffin with fresh grated carrots, California walnuts, plump golden raisins, and warm aromatic baking spices.",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Vegan"],
  },
  {
    title: "Wild Maine Blueberry Streusel Muffin",
    price: "$4.75",
    desc: "Tender buttermilk bakery muffin brimming with wild Maine blueberries and crowned with crispy brown butter brown-sugar streusel crumble.",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    tags: ["Bakery Classic"],
  },
  {
    title: "Pastéis de Nata (Custard Tart)",
    price: "$4.25",
    desc: "Traditional Portuguese egg custard tart in ultra-crisp blistering puff pastry, dusted with ground cinnamon and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1583338917451-face2751d8d5?auto=format&fit=crop&w=800&q=80",
    tags: ["Portuguese Classic"],
  },
  {
    title: "Italian Nutella Bomboloni",
    price: "$5.25",
    desc: "Fluffy yeast-risen Italian brioche doughnut rolled in sparkling granulated sugar and piped full of warm creamy Nutella.",
    image:
      "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=800&q=80",
    tags: ["Artisan Doughnut"],
  },
  {
    title: "Glazed Meyer Lemon Tea Bites",
    price: "$4.00",
    desc: "Melt-in-your-mouth tender citrus shortbread bites bathed in a zesty tart glaze made with freshly squeezed Meyer lemon juice.",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    tags: ["Citrus", "Bite-Sized"],
  },
];

export default function PastriesSection() {
  return (
    <section id="pastries" className="w-full py-20 lg:py-28 bg-[#141210] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-6xl sm:text-7xl text-[#CFA670] tracking-normal block">
              Freshly Baked
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-3">
              Artisan Pastries &amp; Bakery
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-6 h-8 text-[#CFA670] mx-auto opacity-90 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              Delivered warm every morning from our bakery. Featuring organic flour, European cultured butter, and dedicated vegan and gluten-free creations.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Responsive Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pastryItems.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={(idx % 3) * 100}
              duration={700}
            >
              <div className="group flex flex-col h-full bg-[#191512] border border-[#2d251e] rounded-2xl overflow-hidden hover:border-[#CFA670]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CFA670]/5">
                {/* Photo Header */}
                <div className="w-full h-48 overflow-hidden relative">
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
