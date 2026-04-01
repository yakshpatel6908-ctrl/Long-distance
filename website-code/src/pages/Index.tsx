import HeroSection from "@/components/HeroSection";
import RelationshipStats from "@/components/RelationshipStats";
import FunnyTimeline from "@/components/FunnyTimeline";
import LoveMeter from "@/components/LoveMeter";
import FunnyFooter from "@/components/FunnyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <RelationshipStats />
      <FunnyTimeline />
      <LoveMeter />
      <FunnyFooter />
    </div>
  );
};

export default Index;
