import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactHero from "@/src/components/contact/ContactHero";
import ContactInfo from "@/src/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Amber Mug Coffee - Brooklyn & Manhattan Locations",
  description:
    "Get in touch with Amber Mug Coffee. Find our opening hours, cafe addresses, phone numbers, and location details in Williamsburg, Midtown, and Greenpoint.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#12100e]">
      <Header />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </main>
  );
}
