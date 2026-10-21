export default function FeatureDelicious() {
  return (
    <section className="relative w-full py-32 sm:py-40 md:py-48 flex items-center justify-center overflow-hidden bg-[#12100e]">
      {/* Top Split Shape Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 text-[#12100e]">
        <svg
          viewBox="0 0 1000 20"
          preserveAspectRatio="none"
          className="w-full h-5 fill-current"
          aria-hidden="true"
        >
          <path d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z" />
        </svg>
      </div>

      {/* Parallax / Fixed Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=2000&q=85"
          alt="Artisan Gourmet Bakery and Breakfast"
          className="w-full h-full object-cover object-center fixed-bg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#12100e]/80 backdrop-contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-transparent to-[#12100e]/90" />
      </div>

      {/* Central Animated Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <span className="font-script text-6xl sm:text-7xl md:text-8xl text-[#c89255] tracking-wide transform -rotate-1 drop-shadow-lg">
          Amazing
        </span>
        <h2 className="font-slab text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.25em] text-[#faf8f5] mt-2 mb-4 drop-shadow-xl">
          Delicious
        </h2>
        <div className="w-16 h-0.5 bg-[#c89255]/70 rounded-full my-3" />
        <p className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#d6cfc5] font-light max-w-lg">
          Organic Ingredients • Handcrafted Daily in NYC
        </p>
      </div>

      {/* Bottom Split Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 text-[#14120f]">
        <svg
          viewBox="0 0 1000 20"
          preserveAspectRatio="none"
          className="w-full h-5 fill-current rotate-180"
          aria-hidden="true"
        >
          <path d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z" />
        </svg>
      </div>
    </section>
  );
}
