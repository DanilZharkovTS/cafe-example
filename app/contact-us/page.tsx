import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactHero from "@/src/components/contact/ContactHero";
import ContactInfo from "@/src/components/contact/ContactInfo";
import ContactGallery from "@/src/components/contact/ContactGallery";
import ContactForm from "@/src/components/contact/ContactForm";
import ContactMap from "@/src/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us | Amber Mug Coffee - Tenerife Locations",
  description:
    "Get in touch with Amber Mug Coffee. Find our opening hours, cafe addresses, phone numbers, and location details in Santa Cruz, San Cristóbal de La Laguna, and Costa Adeje, Tenerife.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#12100e]">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactGallery />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  );
}
