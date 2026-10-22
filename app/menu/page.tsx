import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import MenuHero from "@/src/components/menu/MenuHero";
import CoffeeSection from "@/src/components/menu/CoffeeSection";
import SandwichesSection from "@/src/components/menu/SandwichesSection";
import SmoothiesSection from "@/src/components/menu/SmoothiesSection";

export const metadata: Metadata = {
  title: "Menu | Amber Mug Coffee - Specialty Brews, Kitchen & Bakery",
  description:
    "Explore our complete handcrafted coffee menu, organic sandwiches, artisan wraps, fresh smoothies, healthy bowls, and bakery pastries.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#12100e]">
      <Header />
      <MenuHero />
      <CoffeeSection />
      <SandwichesSection />
      <SmoothiesSection />
      <Footer />
    </main>
  );
}
