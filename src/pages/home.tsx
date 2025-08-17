import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ContentSections } from "@/components/content-sections";
import { JoinSection } from "@/components/join-section";
import { StoreSection } from "@/components/store-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ContentSections />
      <JoinSection />
      <StoreSection />
      <Footer />
    </div>
  );
}
