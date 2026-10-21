import LeafIcon from "./LeafIcon";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#12100e]">
      {/* Background Image with Dark Tint & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2070&q=85"
          alt="Amber Mug Artisan Coffee Shop Atmosphere"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
        />
        {/* Multilayer gradient overlays to match coppermug's rich dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/85 via-[#12100e]/75 to-[#12100e]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#12100e]/60 to-[#12100e]/95" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center">
        {/* Kicker script text */}
        <span className="font-script text-5xl sm:text-6xl md:text-7xl text-[#c89255] mb-2 tracking-wide transform -rotate-1 drop-shadow-md">
          Welcome to
        </span>

        {/* Main Title */}
        <h1 className="font-slab text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#faf8f5] mt-1 mb-4 drop-shadow-xl">
          Amber Mug Coffee
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-4 my-2">
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c89255]" />
          <h2 className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] uppercase text-[#ded7cc]">
            Speciality Fine Coffee
          </h2>
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c89255]" />
        </div>

        <div className="mt-4 mb-8">
          <LeafIcon className="w-6 h-8 text-[#c89255] mx-auto opacity-90 drop-shadow" />
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-[#c89255] hover:bg-[#dca368] text-[#12100e] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#c89255]/20 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="#locations"
            className="px-8 py-3.5 rounded-full border border-[#c89255]/60 hover:border-[#c89255] hover:bg-[#c89255]/10 text-[#f3f0ea] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300"
          >
            Visit Our Cafes
          </a>
        </div>
      </div>

      {/* Sub-banner ribbon: Sip into bliss with our handcrafted specialty brews */}
      <div className="relative z-10 w-full bg-[#181411]/90 border-t border-b border-[#2d251e] py-6 px-4 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#ded7cc] tracking-wide font-light italic">
            &ldquo;Sip into bliss with our handcrafted specialty brews&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
