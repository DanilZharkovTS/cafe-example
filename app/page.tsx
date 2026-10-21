import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#12100e]">
      <Header />
      <Hero />
    </main>
  );
}
