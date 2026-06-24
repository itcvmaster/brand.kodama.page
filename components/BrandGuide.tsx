import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { LogoSection } from "@/components/sections/LogoSection";
import { SubbrandsSection } from "@/components/sections/SubbrandsSection";
import { IconsSection } from "@/components/sections/IconsSection";
import { TypographySection } from "@/components/sections/TypographySection";
import { ColorSection } from "@/components/sections/ColorSection";
import { SpacingSection } from "@/components/sections/SpacingSection";
import { IllustrationSection } from "@/components/sections/IllustrationSection";
import { StatesSection } from "@/components/sections/StatesSection";

export function BrandGuide() {
  return (
    <main style={{ background: "var(--k-bg)" }} data-testid="brand-guide">
      <Header />
      <Hero />
      <LogoSection />
      <SubbrandsSection />
      <IconsSection />
      <TypographySection />
      <ColorSection />
      <SpacingSection />
      <IllustrationSection />
      <StatesSection />
      <Footer />
    </main>
  );
}
