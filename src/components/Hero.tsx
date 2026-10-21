import LeafIcon from "./LeafIcon";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#12100e]">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2070&q=85"
          alt="Amber Mug Artisan Coffee Roastery"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#12100e]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/90 via-[#12100e]/60 to-[#12100e]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center">
        {/* "Welcome to" in Kristi cursive font */}
        <span className="font-script text-7xl sm:text-8xl md:text-9xl text-[#CFA670] mb-0 tracking-normal drop-shadow-md">
          Welcome to
        </span>

        {/* Brand headline */}
        <h1 className="font-lato text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#faf8f5] -mt-2 mb-4 drop-shadow-xl">
          Amber Mug Coffee
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-4 my-2">
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CFA670]" />
          <h2 className="font-lato text-sm sm:text-base md:text-lg font-semibold tracking-[0.35em] uppercase text-[#ded7cc]">
            Speciality Fine Coffee
          </h2>
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CFA670]" />
        </div>

        <div className="mt-4 mb-8">
          <LeafIcon className="w-7 h-9 text-[#CFA670] mx-auto opacity-95 drop-shadow" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2 font-lato">
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-[#CFA670] hover:bg-[#deb47b] text-[#12100e] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#CFA670]/25 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-[#CFA670] hover:border-[#CFA670] hover:bg-[#CFA670]/10 text-[#f3f0ea] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300"
          >
            Visit Our Cafes
          </a>
        </div>
      </div>

      {/* Ribbon Banner */}
      <div className="relative z-10 w-full bg-[#181411]/90 border-t border-b border-[#2d251e] py-6 px-4 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
          <p className="font-lato text-sm sm:text-base md:text-lg text-[#ded7cc] tracking-wide font-light italic">
            &ldquo;Sip into bliss with our handcrafted specialty brews&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
