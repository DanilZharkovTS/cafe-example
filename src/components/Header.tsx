"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-[#171412] border-b border-[#28211b] text-xs text-[#a3998c] py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 font-lato">
            <a
              href="https://maps.google.com/?q=Calle+del+Castillo+42,+38003+Santa+Cruz+de+Tenerife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#CFA670] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#CFA670]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Calle del Castillo 42, Santa Cruz de Tenerife</span>
            </a>

            <a
              href="tel:+34922536209"
              className="flex items-center gap-1.5 hover:text-[#CFA670] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#CFA670]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>+34 922 536 209</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#CFA670]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.14 11.53l3.66-2.11c.96-.55 2.14.07 2.21 1.18l.21 4.22c.07 1.11-1.04 1.83-2.06 1.34l-3.9-1.89a.78.78 0 01-.12-1.35v-.01l-.01.01.02-.01l.01.01v-.01l-.01.01.01-.01v-.01l-.01.01zm-1.86.38l-2.02 3.71c-.53.97-1.77 1.18-2.58.43L2.61 13.2c-.81-.75-.72-2.02.19-2.65l3.5-2.42c.8-.55 1.88-.07 2.01.9l.22 2.2c.04.28-.08.57-.25.68zm-.12-2.41L8.35 5.58c-.48-.99.1-2.18 1.18-2.43l4.13-.95c1.08-.25 2.07.56 2.07 1.67l.02 4.23a1.1 1.1 0 01-1.57.99l-3.32-1.7a.82.82 0 01-.7-.89z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#141210]/95 backdrop-blur-md border-b border-[#25201b] sticky top-0 px-4 md:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#CFA670]/50 flex items-center justify-center bg-[#1c1815] shadow-inner group-hover:border-[#CFA670] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-[#CFA670]"
                strokeWidth="1.75"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-lato text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#f7f4ee] group-hover:text-[#CFA670] transition-colors">
                Amber Mug
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a3998c] -mt-1 font-medium font-lato">
                Coffee Roasters
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[#d6cfc5] font-lato">
            <Link
              href="/"
              className="hover:text-[#CFA670] transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-[#CFA670] hover:text-[#e4be88] transition-colors py-1"
            >
              Menu
            </Link>
            <Link
              href="/#gift-cards"
              className="hover:text-[#CFA670] transition-colors py-1"
            >
              Gift Card
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#CFA670] transition-colors py-1"
            >
              Contact Us
            </Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/#private-events"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#CFA670] text-xs font-bold uppercase tracking-widest text-[#CFA670] hover:bg-[#CFA670] hover:text-[#12100e] transition-all duration-300 font-lato shadow-sm"
            >
              Private Event
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d6cfc5] hover:text-[#CFA670] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#25201b] pb-3 flex flex-col gap-4 text-center font-lato">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#d6cfc5] hover:text-[#CFA670] font-semibold text-sm tracking-widest uppercase py-1"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CFA670] hover:text-[#e4be88] font-semibold text-sm tracking-widest uppercase py-1"
            >
              Menu
            </Link>
            <Link
              href="/#gift-cards"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#d6cfc5] hover:text-[#CFA670] text-sm tracking-widest uppercase py-1"
            >
              Gift Card
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#d6cfc5] hover:text-[#CFA670] text-sm tracking-widest uppercase py-1"
            >
              Contact Us
            </Link>
            <Link
              href="/#private-events"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-2 mx-auto px-6 py-2.5 rounded-full border border-[#CFA670] text-xs font-bold uppercase tracking-widest text-[#CFA670] hover:bg-[#CFA670] hover:text-[#12100e] transition-colors"
            >
              Private Event
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
