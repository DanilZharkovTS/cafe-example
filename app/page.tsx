import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import DiscoverMenu from "@/src/components/DiscoverMenu";
import FeatureExperience from "@/src/components/FeatureExperience";
import FeatureDelicious from "@/src/components/FeatureDelicious";
import SocialGallery from "@/src/components/SocialGallery";
import PrivateEventsAndFeed from "@/src/components/PrivateEventsAndFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#12100e]">
      <Header />
      <Hero />
      <DiscoverMenu />
      <FeatureExperience />
      <FeatureDelicious />
      <SocialGallery />
      <PrivateEventsAndFeed />
    </main>
  );
}
