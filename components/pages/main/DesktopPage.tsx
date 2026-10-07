import DesktopFeaturesSection from "@/components/pages/main/sections/DesktopFeaturesSection";
import FooterSection from "@/components/pages/main/sections/FooterSection";
import HeaderSection from "@/components/pages/main/sections/HeaderSection";
import HeroSection from "@/components/pages/main/sections/HeroSection";
import PricingSection from "@/components/pages/main/sections/PricingSection";

export default function DesktopPage() {
  return (
    <div className="flex flex-1 flex-col bg-white font-[family-name:var(--font-inter)]">
      <HeaderSection />
      <HeroSection />
      <DesktopFeaturesSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
