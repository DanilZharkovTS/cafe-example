import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amber Mug Coffee | Handcrafted Specialty Brews & Artisan Kitchen - Tenerife",
  description:
    "Specialty fine coffee, organic locally sourced kitchen dishes, artisan pastries, and private event hosting across our cafes in Tenerife (Canary Islands).",
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
          href="https://fonts.googleapis.com/css2?family=Kristi&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Roboto+Slab:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#141210] text-[#ded7cc] antialiased selection:bg-[#CFA670] selection:text-[#12100e]">
        {children}
      </body>
    </html>
  );
}
