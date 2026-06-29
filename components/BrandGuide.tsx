import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TheWaySection } from "@/components/sections/TheWaySection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { PaletteSection } from "@/components/sections/PaletteSection";
import { TypeSection } from "@/components/sections/TypeSection";
import { VoiceSection } from "@/components/sections/VoiceSection";
import { ForestSection, ForestFooter } from "@/components/sections/ForestSection";

export function BrandGuide() {
  return (
    <main className="font-body antialiased bg-kodama-sand" data-testid="brand-guide">
      <Header />
      <Hero />
      <PhilosophySection />
      <TheWaySection />
      <IdentitySection />
      <PaletteSection />
      <TypeSection />
      <VoiceSection />
      <ForestSection />
      <ForestFooter />
    </main>
  );
}
