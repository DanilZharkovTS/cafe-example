"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FeatureDelicious() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setScrollY((window.innerHeight - rect.top) * 0.15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-36 sm:py-48 md:py-56 flex items-center justify-center overflow-hidden bg-[#12100e]"
    >
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

      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          style={{
            transform: `translate3d(0, ${scrollY - 40}px, 0) scale(1.15)`,
          }}
          className="w-full h-[125%] -top-[12%] absolute inset-0 will-change-transform transition-transform duration-100 ease-out"
        >
          <img
            src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=2000&q=85"
            alt="Artisan Gourmet Bakery and Breakfast"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-[#12100e]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#12100e]/90" />
      </div>

      {/* Central Content with Text Masks */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* "Amazing" text mask */}
        <AnimateOnScroll animation="text-slide-up" delay={150} duration={900}>
          <span className="font-script text-7xl sm:text-8xl md:text-9xl text-[#CFA670] tracking-normal drop-shadow-lg block">
            Amazing
          </span>
        </AnimateOnScroll>

        {/* "Delicious" text mask */}
        <AnimateOnScroll animation="text-slide-up" delay={350} duration={900}>
          <h2 className="font-lato text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-[0.18em] text-[#faf8f5] -mt-3 mb-4 drop-shadow-xl block">
            Delicious
          </h2>
        </AnimateOnScroll>

        {/* Expanding Accent Divider */}
        <AnimateOnScroll animation="zoom-in" delay={550} duration={600}>
          <div className="w-24 h-0.5 bg-[#CFA670]/80 rounded-full my-2 shadow-sm" />
        </AnimateOnScroll>
      </div>

      {/* Bottom Split Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 text-[#141210]">
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
