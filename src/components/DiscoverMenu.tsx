import LeafIcon from "./LeafIcon";

export default function DiscoverMenu() {
  return (
    <section id="menu" className="relative w-full py-20 lg:py-28 bg-[#141210] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 2-Photo Showcase (65% width) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85"
                  alt="Amber Mug Signature Iced Brew"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#CFA670] bg-[#12100e]/85 px-2.5 py-1 rounded backdrop-blur-sm">
                  Specialty Brew
                </span>
                <p className="text-sm font-lato text-[#f5f2ec] mt-1 font-semibold">
                  Amber Draft Cold Foam Latte
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-[#1d1915] border border-[#2d251e] shadow-xl sm:translate-y-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
                  alt="Organic Avocado Toast and Pastries"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#CFA670] bg-[#12100e]/85 px-2.5 py-1 rounded backdrop-blur-sm">
                  Artisan Kitchen
                </span>
                <p className="text-sm font-lato text-[#f5f2ec] mt-1 font-semibold">
                  Organic Avocado Tartine & Pastries
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Discover Content (35% width) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-6">
            <span className="font-script text-7xl sm:text-8xl text-[#CFA670] tracking-normal mb-0">
              Discover
            </span>

            <h2 className="font-lato text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight sm:tracking-normal text-[#faf8f5] -mt-2 mb-4">
              Our Menu
            </h2>

            <div className="mb-6">
              <LeafIcon className="w-7 h-9 text-[#CFA670] opacity-95" />
            </div>

            <p className="font-lato text-[#b8afa3] text-sm sm:text-base leading-relaxed max-w-md mb-8">
              All-Day menu of organic, locally sourced dishes and smoothies.
              Vegan, Gluten-Free options for freshly baked pastries. Seasonal
              special drinks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start font-lato">
              <a
                href="#full-menu"
                className="w-full sm:w-auto text-center px-10 py-3.5 rounded-full border border-[#CFA670] text-sm font-bold uppercase tracking-widest text-[#CFA670] hover:bg-[#CFA670] hover:text-[#12100e] transition-all duration-300 shadow-md hover:shadow-[#CFA670]/20"
              >
                View Menu
              </a>
              <span className="text-xs text-[#8f8577] italic tracking-wide">
                * Served daily 7 AM – 6 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
