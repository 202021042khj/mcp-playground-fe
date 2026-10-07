import MobileFeaturesSection from "@/components/pages/main/sections/MobileFeaturesSection";
import FooterSection from "@/components/pages/main/sections/FooterSection";
import HeaderSection from "@/components/pages/main/sections/HeaderSection";
import HeroSection from "@/components/pages/main/sections/HeroSection";
import PricingSection from "@/components/pages/main/sections/PricingSection";

export default function MobilePage() {
  return (
    <div className="flex flex-1 flex-col bg-white font-[family-name:var(--font-inter)]">
      <HeaderSection />
      <HeroSection />
      <MobileFeaturesSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
