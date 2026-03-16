import Hero from "@/components/Hero";
import ContractCopy from "@/components/ContractCopy";
import Tokenomics from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ContractCopy />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </div>
  );
};

export default Index;
