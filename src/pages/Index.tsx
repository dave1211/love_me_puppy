import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import HowToBuySection from "@/components/HowToBuySection";
import LiveNowSection from "@/components/LiveNowSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import SafuSection from "@/components/SafuSection";
import RoadmapSection from "@/components/RoadmapSection";
import FaqSection from "@/components/FaqSection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <HowToBuySection />
      <LiveNowSection />
      <TokenomicsSection />
      <SafuSection />
      <RoadmapSection />
      <FaqSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default Index;
