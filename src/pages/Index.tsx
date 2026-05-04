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
      {/* About shares #0a0a0a with hero/statsbar — no wave needed */}
      <AboutSection />
      <WaveDivider fromColor="#0a0a0a" toColor="#0c0c0c" />
      <SafuSection />
      <WaveDivider fromColor="#0c0c0c" toColor="#0a0a0a" />
      <TokenomicsSection />
      <WaveDivider fromColor="#0a0a0a" toColor="#0c0c0c" />
      <HowToBuySection />
      <WaveDivider fromColor="#0c0c0c" toColor="#0a0a0a" />
      <ToolsSection />
      <WaveDivider fromColor="#0a0a0a" toColor="#0c0c0c" />
      <MerchSection />
      <WaveDivider fromColor="#0c0c0c" toColor="#0a0a0a" />
      <RoadmapSection />
      <WaveDivider fromColor="#0a0a0a" toColor="#0c0c0c" />
      <CommunitySection />
      <WaveDivider fromColor="#0c0c0c" toColor="#0a0a0a" />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
