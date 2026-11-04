import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import FutureVisionSection from "@/components/sections/FutureVisionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PrinciplesSection />
      <CompaniesSection />
      <AchievementsSection />
      <FutureVisionSection />
    </>
  );
}