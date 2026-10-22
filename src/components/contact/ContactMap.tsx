"use client";

import { useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";

const locationMaps = [
  {
    id: "williamsburg",
    title: "Williamsburg, Brooklyn",
    address: "131 N 4th St, Brooklyn, NY 11249",
    transit: "L Train at Bedford Ave • 3 min walk",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=131+N+4th+St,+Brooklyn,+NY+11249&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directUrl: "https://maps.google.com/?q=131+N+4th+St,+Brooklyn,+NY+11249",
  },
  {
    id: "manhattan",
    title: "NoMad / Midtown Manhattan",
    address: "38 W 30th St, New York, NY 10001",
    transit: "B, D, F, M, N, Q, R, W at 34th St • 4 min walk",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=38+W+30th+St,+New+York,+NY+10001&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directUrl: "https://maps.google.com/?q=38+W+30th+St,+New+York,+NY+10001",
  },
  {
    id: "greenpoint",
    title: "Greenpoint, Brooklyn",
    address: "687 Manhattan Ave, Greenpoint, NY 11222",
    transit: "G Train at Nassau Ave • 2 min walk",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=687+Manhattan+Ave,+Greenpoint,+NY+11222&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directUrl:
      "https://maps.google.com/?q=687+Manhattan+Ave,+Greenpoint,+NY+11222",
  },
];

export default function ContactMap() {
  const [activeLoc, setActiveLoc] = useState(locationMaps[0]);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#12100e] relative border-t border-[#241e19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 font-lato">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#CFA670] block mb-1">
              Find Our Cafes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#faf8f5]">
              Interactive Locations Map
            </h2>
          </div>

          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {locationMaps.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLoc(loc)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeLoc.id === loc.id
                    ? "bg-[#CFA670] text-[#12100e] shadow-md shadow-[#CFA670]/20"
                    : "bg-[#181411] border border-[#2d251e] text-[#a3998c] hover:border-[#CFA670] hover:text-[#CFA670]"
                }`}
              >
                {loc.title.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Map Container */}
        <AnimateOnScroll animation="zoom-in" delay={150} duration={800}>
          <div className="relative rounded-3xl overflow-hidden border border-[#2d251e] shadow-2xl bg-[#181411]">
            {/* Embedded Responsive Map */}
            <div className="w-full h-[400px] sm:h-[480px]">
              <iframe
                title={`Map for ${activeLoc.title}`}
                src={activeLoc.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Floating Location Info Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#141210]/95 border border-[#2d251e] backdrop-blur-md rounded-2xl p-5 shadow-2xl font-lato">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#CFA670] block mb-1">
                Selected Destination
              </span>
              <h3 className="text-lg font-bold text-[#faf8f5] mb-1">
                {activeLoc.title}
              </h3>
              <p className="text-xs text-[#a3998c] mb-1">{activeLoc.address}</p>
              <p className="text-[11px] text-[#7d7367] italic mb-4">
                {activeLoc.transit}
              </p>

              <a
                href={activeLoc.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#CFA670] text-[#12100e] text-xs font-bold uppercase tracking-wider hover:bg-[#deb47b] transition-colors"
              >
                <span>Open in Google Maps</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
