"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";

const locationsData = [
  {
    name: "Santa Cruz Location",
    neighborhood: "Santa Cruz de Tenerife",
    address: "Calle del Castillo 42, 38003 Santa Cruz de Tenerife",
    mapLink:
      "https://maps.google.com/?q=Calle+del+Castillo+42,+38003+Santa+Cruz+de+Tenerife",
    transit: "Tranvía Línea 1 • Plaza Weyler / Fundación (2 min walk)",
    hours: [
      { days: "Mon – Fri", time: "07:30am – 07:30pm" },
      { days: "Sat – Sun", time: "08:00am – 08:00pm" },
    ],
  },
  {
    name: "La Laguna Location",
    neighborhood: "San Cristóbal de La Laguna",
    address: "Calle San Agustín 18, 38201 San Cristóbal de La Laguna",
    mapLink:
      "https://maps.google.com/?q=Calle+San+Agust%C3%ADn+18,+38201+San+Crist%C3%B3bal+de+La+Laguna",
    transit: "Tranvía Línea 1 • La Trinidad (3 min walk) • Casco Histórico",
    hours: [
      { days: "Mon – Fri", time: "08:00am – 07:00pm" },
      { days: "Sat – Sun", time: "08:30am – 07:30pm" },
    ],
  },
  {
    name: "Costa Adeje Location",
    neighborhood: "Costa Adeje, South Tenerife",
    address: "Paseo Marítimo El Duque 7, 38660 Costa Adeje, Tenerife",
    mapLink:
      "https://maps.google.com/?q=Paseo+Maritimo+El+Duque+7,+38660+Costa+Adeje,+Tenerife",
    transit: "Playa del Duque Promenade • Titsa Bus 467 & 473",
    hours: [{ days: "All Week", time: "08:00am – 09:00pm" }],
  },
];

export default function ContactInfo() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#141210] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Direct Contact Card (Left) + 3 Locations Hours (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left Column: Direct Contact & Inquiries */}
          <div className="lg:col-span-4 flex flex-col">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-[#181411] border border-[#2d251e] rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden h-full">
                <span className="font-script text-6xl text-[#CFA670] tracking-normal block mb-1">
                  Connect
                </span>
                <h2 className="font-lato text-3xl font-black uppercase tracking-tight text-[#faf8f5] mb-4">
                  Contact Info
                </h2>

                <div className="mb-6">
                  <LeafIcon className="w-6 h-8 text-[#CFA670] opacity-90" />
                </div>

                <p className="font-lato text-sm text-[#a3998c] leading-relaxed mb-8">
                  Whether you have questions about our seasonal roasts, catering,
                  or private gatherings, our team is always happy to assist.
                </p>

                <div className="space-y-6 font-lato">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#CFA670]/40 bg-[#12100e] flex items-center justify-center text-[#CFA670] shrink-0 mt-0.5">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#CFA670] block">
                        Telephone
                      </span>
                      <a
                        href="tel:+34922536209"
                        className="text-base font-bold text-[#faf8f5] hover:text-[#CFA670] transition-colors"
                      >
                        +34 922 536 209
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#CFA670]/40 bg-[#12100e] flex items-center justify-center text-[#CFA670] shrink-0 mt-0.5">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#CFA670] block">
                        Email Inquiries
                      </span>
                      <a
                        href="mailto:hello@ambermugcoffee.com"
                        className="text-base font-semibold text-[#faf8f5] hover:text-[#CFA670] transition-colors"
                      >
                        hello@ambermugcoffee.com
                      </a>
                    </div>
                  </div>

                  {/* Private Events */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#CFA670]/40 bg-[#12100e] flex items-center justify-center text-[#CFA670] shrink-0 mt-0.5">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#CFA670] block">
                        Private Events
                      </span>
                      <a
                        href="/#private-events"
                        className="text-sm font-semibold text-[#ded7cc] hover:text-[#CFA670] transition-colors"
                      >
                        Book Cafe Buyout →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: 3 Locations Opening Hours Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-8">
              <AnimateOnScroll animation="text-slide-up" delay={150}>
                <span className="font-script text-6xl text-[#CFA670] tracking-normal block">
                  Visiting Hours
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="text-slide-up" delay={250}>
                <h2 className="font-lato text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#faf8f5] -mt-1">
                  Opening Hours
                </h2>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-lato">
              {locationsData.map((loc, idx) => (
                <AnimateOnScroll
                  key={idx}
                  animation="fade-up"
                  delay={idx * 120}
                  duration={750}
                >
                  <div className="group h-full flex flex-col justify-between bg-[#181411] border border-[#2d251e] rounded-2xl p-6 hover:border-[#CFA670]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#CFA670]/5">
                    <div>
                      {/* Badge */}
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-[#12100e] text-[#CFA670] border border-[#2a221b] inline-block mb-3">
                        {loc.neighborhood}
                      </span>

                      <h3 className="font-lato text-lg font-bold text-[#faf8f5] group-hover:text-[#CFA670] transition-colors mb-2">
                        {loc.name}
                      </h3>

                      <p className="text-xs text-[#a3998c] mb-1 leading-relaxed">
                        {loc.address}
                      </p>
                      <p className="text-[11px] text-[#7d7367] italic mb-5">
                        {loc.transit}
                      </p>

                      <div className="w-full h-[1px] bg-[#241e19] mb-4" />

                      {/* Hours Table */}
                      <div className="space-y-2 mb-6">
                        {loc.hours.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="font-bold text-[#ded7cc]">
                              {h.days}
                            </span>
                            <span className="text-[#CFA670] font-semibold">
                              {h.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-[#CFA670]/30 hover:border-[#CFA670] bg-[#12100e] text-xs font-bold uppercase tracking-wider text-[#CFA670] hover:bg-[#CFA670] hover:text-[#12100e] transition-all duration-300 shadow-sm"
                    >
                      <span>Get Directions</span>
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
