import LeafIcon from "./LeafIcon";

const instaPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    caption: "Bring your bestie to lunch 💕 #ambermugcoffee #nyccafe",
    likes: 342,
    comments: 18,
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    caption: "Which one are you choosing today? 👀 #coffeelover #artisan",
    likes: 519,
    comments: 29,
  },
  {
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    caption: "Your coffee emergency has been handled. 🆘☕️ #brooklynroast",
    likes: 428,
    comments: 14,
  },
  {
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    caption: "Backyard weather, come hang! 🍃 #patiovibes #ambermug",
    likes: 681,
    comments: 42,
  },
  {
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    caption: "Three locations, one constant passion for fine coffee ✨",
    likes: 804,
    comments: 55,
  },
  {
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    caption: "Which combo are you choosing? 😋🥐☕️ #freshbakery",
    likes: 497,
    comments: 23,
  },
];

export default function PrivateEventsAndFeed() {
  return (
    <section id="private-events" className="relative w-full py-20 lg:py-28 bg-[#12100e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Book a Private Event (approx 35% width) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left bg-[#181411] p-8 sm:p-10 rounded-3xl border border-[#2d251e] shadow-xl">
            <span className="font-script text-7xl sm:text-8xl text-[#CFA670] tracking-normal mb-0">
              Book a Private
            </span>

            <h2 className="font-lato text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#faf8f5] -mt-2 mb-4">
              Event With Us!
            </h2>

            <div className="mb-6">
              <LeafIcon className="w-7 h-9 text-[#CFA670] opacity-95" />
            </div>

            <p className="font-lato text-[#b8afa3] text-sm sm:text-base leading-relaxed mb-6">
              Host your next celebration, team gathering, bridal shower, brand
              launch, or intimate reception in our beautifully styled Brooklyn and
              Manhattan spaces. Custom espresso bar packages and artisan catering
              available.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full mb-8 text-left font-lato">
              <div className="bg-[#12100e] p-3.5 rounded-xl border border-[#28211b]">
                <span className="text-[10px] uppercase tracking-wider text-[#CFA670] font-bold block">
                  Capacity
                </span>
                <span className="text-xs text-[#ded7cc] font-semibold">Up to 80 Guests</span>
              </div>
              <div className="bg-[#12100e] p-3.5 rounded-xl border border-[#28211b]">
                <span className="text-[10px] uppercase tracking-wider text-[#CFA670] font-bold block">
                  Spaces
                </span>
                <span className="text-xs text-[#ded7cc] font-semibold">Indoor & Garden Patio</span>
              </div>
              <div className="bg-[#12100e] p-3.5 rounded-xl border border-[#28211b]">
                <span className="text-[10px] uppercase tracking-wider text-[#CFA670] font-bold block">
                  Barista Bar
                </span>
                <span className="text-xs text-[#ded7cc] font-semibold">Full Espresso Service</span>
              </div>
              <div className="bg-[#12100e] p-3.5 rounded-xl border border-[#28211b]">
                <span className="text-[10px] uppercase tracking-wider text-[#CFA670] font-bold block">
                  Catering
                </span>
                <span className="text-xs text-[#ded7cc] font-semibold">Organic Pastries & Bites</span>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center px-8 py-3.5 rounded-full bg-[#CFA670] hover:bg-[#deb47b] text-[#12100e] text-xs font-bold uppercase tracking-widest transition-all duration-300 font-lato shadow-md hover:shadow-[#CFA670]/25 hover:-translate-y-0.5"
            >
              Inquire For Events
            </a>
          </div>

          {/* Right Column: Instagram Feed Grid (approx 65% width) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              {instaPosts.map((post, idx) => (
                <a
                  key={idx}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-[#1d1915] border border-[#29221b] shadow-md"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#12100e]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4 text-center">
                    <p className="text-[11px] sm:text-xs text-[#ded7cc] line-clamp-3 leading-snug font-lato">
                      {post.caption}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#CFA670] font-lato">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Follow on Instagram Button */}
            <div className="mt-8 font-lato">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-[#CFA670] hover:bg-[#CFA670] text-xs font-bold uppercase tracking-widest text-[#CFA670] hover:text-[#12100e] transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
