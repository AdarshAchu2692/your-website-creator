import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProgramsSection />
    <SocialProofSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
