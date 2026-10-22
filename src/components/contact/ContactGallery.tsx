"use client";

import AnimateOnScroll from "../AnimateOnScroll";

const galleryPhotos = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    alt: "Amber Mug Cafe Warm Seating",
    caption: "Santa Cruz Main Room",
  },
  {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    alt: "La Marzocco Espresso Bar",
    caption: "Artisan Espresso Bar",
  },
  {
    url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    alt: "Costa Adeje Ocean Terrace Patio",
    caption: "Ocean Terrace Patio",
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    alt: "La Laguna Historic Patio",
    caption: "La Laguna Historic Patio",
  },
  {
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    alt: "Craft Canarian Latte & Barraquito",
    caption: "Handcrafted Micro-Roasts",
  },
];

export default function ContactGallery() {
  return (
    <section className="w-full py-16 bg-[#12100e] relative overflow-hidden border-t border-b border-[#241e19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryPhotos.map((photo, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="zoom-in"
              delay={idx * 100}
              duration={700}
            >
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-md hover:border-[#CFA670]/40 transition-colors duration-500">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-xs font-semibold text-[#f5f2ec] tracking-wide font-lato transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
