import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amber Mug Coffee | Specialty Fine Coffee & Artisan Kitchen",
  description:
    "Handcrafted specialty brews, organic locally sourced kitchen dishes, artisan pastries, and private event hosting in New York.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kristi&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#12100e] text-[#f3f0ea] antialiased selection:bg-[#c89255] selection:text-white">
        {children}
      </body>
    </html>
  );
}
