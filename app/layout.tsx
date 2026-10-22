import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ambermugcoffee.com"),
  title: "Amber Mug Coffee | Handcrafted Specialty Brews & Artisan Kitchen - Tenerife",
  description:
    "Specialty fine coffee, organic locally sourced kitchen dishes, artisan pastries, and private event hosting across our cafes in Tenerife (Canary Islands).",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Amber Mug Coffee | Tenerife Specialty Roasters",
    description:
      "Specialty fine coffee, organic locally sourced kitchen dishes, artisan pastries, and private event hosting across our cafes in Tenerife (Canary Islands).",
    siteName: "Amber Mug Coffee",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Amber Mug Coffee Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
