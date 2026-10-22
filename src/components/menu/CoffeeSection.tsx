"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";

export interface MenuItem {
  title: string;
  price: string;
  desc: string;
  image: string;
  tags?: string[];
}

const coffeeItems: MenuItem[] = [
  {
    title: "Amber Draft Cold Foam Latte",
    price: "$6.75",
    desc: "18-hour cold steeped single-origin Ethiopian beans infused with vanilla bean syrup, crowned with velvety handcrafted sweet cream cold foam.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    tags: ["House Signature", "Iced"],
  },
  {
    title: "Artisan Pour Over (Ethiopia Yirgacheffe)",
    price: "$5.75",
    desc: "Precision hand-poured single origin with vibrant notes of bergamot, jasmine florals, and subtle wild peach sweetness. Brewed fresh to order.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    tags: ["Single Origin", "Light Roast"],
  },
  {
    title: "Espresso Tonic & Citrus Zest",
    price: "$6.25",
    desc: "Double shot of espresso extracted over artisanal botanical tonic water, served on crystal ice with charred rosemary and fresh grapefruit peel.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["Refreshing", "Seasonal"],
  },
  {
    title: "Spanish Cortado & Flat White",
    price: "$5.25",
    desc: "Equal parts rich espresso and silky micro-foamed organic whole milk or steamed Minor Figures oat milk, served in our signature heated ceramic glass.",
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    tags: ["Barista Favorite"],
  },
  {
    title: "Golden Turmeric Oat Latte",
    price: "$6.50",
    desc: "Cold-pressed organic Hawaiian turmeric, ginger root, cinnamon, cracked black pepper, and pure Vermont maple steamed with creamy oat milk.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    tags: ["Wellness", "Caffeine-Free"],
  },
  {
    title: "Ceremonial Grade Iced Matcha",
    price: "$6.75",
    desc: "First-harvest ceremonial matcha from Uji, Kyoto, whisked to order and poured over organic vanilla oat milk with light raw agave nectar.",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    tags: ["Organic", "Antioxidants"],
  },
];

export default function CoffeeSection() {
  return (
    <section id="coffee" className="w-full py-20 lg:py-28 bg-[#141210] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-6xl sm:text-7xl text-[#CFA670] tracking-normal block">
              Handcrafted
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.14em] text-[#faf8f5] -mt-2 mb-3">
              Specialty Coffee &amp; Brews
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-6 h-8 text-[#CFA670] mx-auto opacity-90 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              Ethically sourced direct from sustainable smallholder farms. Roasted weekly in small batches for optimal clarity and depth.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Menu Items Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {coffeeItems.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={idx * 100}
              duration={700}
            >
              <div className="group flex flex-col sm:flex-row gap-5 bg-[#191512] border border-[#2d251e] rounded-2xl p-4 sm:p-5 hover:border-[#CFA670]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CFA670]/5">
                {/* Food Image */}
                <div className="w-full sm:w-36 h-48 sm:h-36 shrink-0 rounded-xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#12100e]/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between grow">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-lato text-base sm:text-lg font-bold uppercase tracking-wide text-[#faf8f5] group-hover:text-[#CFA670] transition-colors">
                        {item.title}
                      </h3>
                      <span className="font-lato text-base sm:text-lg font-extrabold text-[#CFA670] shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-[#2d251e] via-[#CFA670]/30 to-transparent my-2" />

                    <p className="font-lato text-xs sm:text-sm text-[#a3998c] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
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
