import {
  Archive,
  Bell,
  Bookmark,
  ChartNoAxesColumn,
  Cloud,
  Droplet,
  Eye,
  EyeOff,
  Feather,
  Folder,
  Leaf,
  Moon,
  Search,
  Share2,
  Sprout,
  Wind,
} from "lucide-react";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { ICON_NAMES } from "@/lib/brand-data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  feather: Feather,
  leaf: Leaf,
  sprout: Sprout,
  wind: Wind,
  moon: Moon,
  cloud: Cloud,
  droplet: Droplet,
  eye: Eye,
  "eye-off": EyeOff,
  search: Search,
  bell: Bell,
  bookmark: Bookmark,
  share: Share2,
  archive: Archive,
  folder: Folder,
  chart: ChartNoAxesColumn,
};

export function IconsSection() {
  return (
    <Section
      id="icons"
      index="03"
      kicker="Icon System"
      title="Drawn with a steady hand."
      intro="Icons share one rule: a 1.5px stroke, rounded joins, and no flourish. They are functional, geometric, and never decorative — quiet signposts, not illustrations."
    >
      <div
        className="grid grid-cols-3 sm:grid-cols-6 gap-px rounded-2xl overflow-hidden border"
        style={{ borderColor: "var(--k-border)", background: "var(--k-border)" }}
      >
        {ICON_NAMES.map((name, i) => {
          const Icon = ICON_MAP[name];
          return (
            <FadeIn key={name} delay={(i % 6) * 0.04}>
              <div
                data-testid={`icon-${name}`}
                className="group aspect-square flex flex-col items-center justify-center gap-3 transition-colors duration-500 hover:[background:var(--k-surface-hover)]"
                style={{ background: "var(--k-surface)" }}
              >
                {Icon && (
                  <span style={{ color: "var(--k-text)" }}>
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                )}
                <span
                  className="font-mono-k text-[9px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--k-text-2)" }}
                >
                  {name}
                </span>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
