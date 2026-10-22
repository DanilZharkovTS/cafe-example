"use client";

import LeafIcon from "./LeafIcon";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85",
    alt: "Amber Mug Precision Barista Latte Art",
    caption: "Handcrafted Latte Art",
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85",
    alt: "Warm & Welcoming Cafe Patio Interior",
    caption: "Backyard Garden & Patio",
  },
  {
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    alt: "Signature Amber Cold Brew on Ice",
    caption: "Slow-Drip Cold Brew",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
    alt: "Freshly Baked Croissant and Espresso",
    caption: "Morning Pastry Pairings",
  },
];

export default function SocialGallery() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#141210] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 4-Photo Showcase Grid with Staggered Scroll Entrance */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <AnimateOnScroll
                key={idx}
                animation="fade-up"
                delay={idx * 120}
                duration={800}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-lg aspect-square hover:border-[#CFA670]/40 transition-colors duration-500">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/90 via-[#12100e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                    <span className="text-xs font-semibold text-[#f5f2ec] tracking-wide font-lato transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Right Column: Checkout Social Media with Text Reveal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8">
            <AnimateOnScroll animation="text-slide-up" delay={150} duration={800}>
              <span className="font-script text-7xl sm:text-8xl text-[#CFA670] tracking-normal mb-0 block">
                Checkout
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="text-slide-up" delay={300} duration={800}>
              <h2 className="font-lato text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#faf8f5] -mt-2 mb-4 block">
                Social Media
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="zoom-in" delay={450} duration={600} className="mb-6">
              <LeafIcon className="w-7 h-9 text-[#CFA670] opacity-95 hover:rotate-6 transition-transform duration-300" />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={550} duration={800}>
              <p className="font-lato text-[#b8afa3] text-sm sm:text-base leading-relaxed max-w-md mb-8">
                Follow our daily coffee rituals, seasonal secret menus, barista tips,
                and community moments across our Santa Cruz, La Laguna, and Costa Adeje cafes in Tenerife.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={650} duration={800}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#CFA670]/40 bg-[#191512] hover:border-[#CFA670] hover:bg-[#CFA670]/10 text-base sm:text-lg font-semibold tracking-wider text-[#CFA670] hover:text-[#e4be88] transition-all duration-300 group font-lato shadow-sm hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 fill-current transform group-hover:scale-115 transition-transform duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@ambermugcoffee</span>
                <span className="text-xs transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
