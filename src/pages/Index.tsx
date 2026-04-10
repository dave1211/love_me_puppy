import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import SafuSection from "@/components/SafuSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import HowToBuySection from "@/components/HowToBuySection";
import ToolsSection from "@/components/ToolsSection";
import MerchSection from "@/components/MerchSection";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WaveDivider toColor="#0a0a0a" />
      <AboutSection />
      <WaveDivider toColor="#0c0c0c" />
      <SafuSection />
      <WaveDivider toColor="#0a0a0a" />
      <TokenomicsSection />
      <WaveDivider toColor="#0c0c0c" />
      <HowToBuySection />
      <WaveDivider toColor="#0a0a0a" />
      <ToolsSection />
      <WaveDivider toColor="#0c0c0c" />
      <MerchSection />
      <WaveDivider toColor="#0a0a0a" />
      <RoadmapSection />
      <WaveDivider toColor="#0c0c0c" />
      <CommunitySection />
      <WaveDivider toColor="#0a0a0a" />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
