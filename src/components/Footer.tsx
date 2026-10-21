import Link from "next/link";
import LeafIcon from "./LeafIcon";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#0d0c0a] text-[#b8afa3] border-t border-[#25201b]">
      {/* Top Review Invitation Banner */}
      <div className="w-full bg-[#161310] border-b border-[#241e19] py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <LeafIcon className="w-5 h-7 text-[#c89255] mb-3 opacity-80" />
          <h3 className="font-slab text-xl sm:text-2xl md:text-3xl text-[#faf8f5] font-semibold tracking-wide mb-2">
            Find out why customers love us!
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#9c9183] tracking-widest uppercase mb-6">
            And maybe leave a review yourself
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-[#c89255]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#2e261f] bg-[#1a1612] flex items-center justify-center hover:border-[#c89255] hover:text-white transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-10 h-10 rounded-full border border-[#2e261f] bg-[#1a1612] flex items-center justify-center hover:border-[#c89255] hover:text-white transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#2e261f] bg-[#1a1612] flex items-center justify-center hover:border-[#c89255] hover:text-white transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              className="w-10 h-10 rounded-full border border-[#2e261f] bg-[#1a1612] flex items-center justify-center hover:border-[#c89255] hover:text-white transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.14 11.53l3.66-2.11c.96-.55 2.14.07 2.21 1.18l.21 4.22c.07 1.11-1.04 1.83-2.06 1.34l-3.9-1.89a.78.78 0 01-.12-1.35v-.01l-.01.01.02-.01l.01.01v-.01l-.01.01.01-.01v-.01l-.01.01zm-1.86.38l-2.02 3.71c-.53.97-1.77 1.18-2.58.43L2.61 13.2c-.81-.75-.72-2.02.19-2.65l3.5-2.42c.8-.55 1.88-.07 2.01.9l.22 2.2c.04.28-.08.57-.25.68zm-.12-2.41L8.35 5.58c-.48-.99.1-2.18 1.18-2.43l4.13-.95c1.08-.25 2.07.56 2.07 1.67l.02 4.23a1.1 1.1 0 01-1.57.99l-3.32-1.7a.82.82 0 01-.7-.89z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Column Footer Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Overview Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-slab text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#faf8f5] mb-6">
              Overview
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c89255] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#c89255] transition-colors">
                  Food & Beverage Menus
                </Link>
              </li>
              <li>
                <Link href="#private-events" className="hover:text-[#c89255] transition-colors">
                  Private Events & Buyouts
                </Link>
              </li>
              <li>
                <Link href="#gift-cards" className="hover:text-[#c89255] transition-colors">
                  Digital Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#c89255] transition-colors">
                  Our Roasting Philosophy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-slab text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#faf8f5] mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:6315365209"
                  className="hover:text-[#c89255] transition-colors font-medium text-[#ded7cc]"
                >
                  (631) 536-5209
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ambermugcoffee.com"
                  className="hover:text-[#c89255] transition-colors"
                >
                  hello@ambermugcoffee.com
                </a>
              </li>
              <li>
                <span className="text-[#a89f91]">ambermugcoffee.com</span>
              </li>
              <li className="pt-2 text-xs text-[#8f8577]">
                Open Daily: 7:00 AM – 7:00 PM EST
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-slab text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#faf8f5] mb-6">
              Locations
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#ded7cc] text-xs uppercase tracking-wider text-[#c89255]">
                  Williamsburg, Brooklyn
                </p>
                <p className="text-[#a89f91]">131 N 4th St, Brooklyn, NY 11249</p>
              </div>

              <div>
                <p className="font-semibold text-[#ded7cc] text-xs uppercase tracking-wider text-[#c89255]">
                  NoMad / Midtown
                </p>
                <p className="text-[#a89f91]">38 W 30th St, New York, NY 10001</p>
              </div>

              <div>
                <p className="font-semibold text-[#ded7cc] text-xs uppercase tracking-wider text-[#c89255]">
                  Greenpoint
                </p>
                <p className="text-[#a89f91]">687 Manhattan Ave, Greenpoint, NY 11222</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="w-full border-t border-[#1e1915] bg-[#090807] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d7367]">
          <p>© 2026 Amber Mug Coffee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-[#c89255] transition-colors">
              About Us
            </Link>
            <Link href="#privacy" className="hover:text-[#c89255] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#c89255] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
