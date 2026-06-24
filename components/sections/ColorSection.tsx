"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { COLORS } from "@/lib/brand-data";

const DARK_HEXES = ["#141514", "#1C1E1C", "#2D2C2A", "#2D302D", "#5C5A56", "#5C6A58"];

function ColorSwatch({
  color,
  dark = false,
  index,
}: {
  color: { name: string; hex: string; role: string };
  dark?: boolean;
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  const lightText = DARK_HEXES.includes(color.hex) || dark;

  const handleCopy = () => {
    try {
      navigator.clipboard?.writeText(color.hex).catch(() => {});
    } catch {
      /* ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <FadeIn delay={0.05 * index}>
      <button
        data-testid={`swatch-${color.name.toLowerCase().replace(/\s/g, "-")}-${dark ? "dark" : "light"}`}
        onClick={handleCopy}
        className="group w-full text-left rounded-xl overflow-hidden border transition-transform duration-500 hover:-translate-y-1"
        style={{ borderColor: "var(--k-border)" }}
      >
        <div className="h-28 relative" style={{ background: color.hex }}>
          <span
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: lightText ? "#F7F5F0" : "#2D2C2A" }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </span>
        </div>
        <div className="px-4 py-3" style={{ background: "var(--k-surface)" }}>
          <p className="font-mono-k text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--k-text)" }}>
            {color.name}
          </p>
          <p className="font-mono-k text-[10px] mt-1" style={{ color: "var(--k-accent)" }}>
            {color.hex}
          </p>
          <p className="font-mono-k text-[9px] mt-1 tracking-[0.18em]" style={{ color: "var(--k-text-2)" }}>
            {color.role}
          </p>
        </div>
      </button>
    </FadeIn>
  );
}

export function ColorSection() {
  return (
    <Section
      id="color"
      index="05"
      kicker="Color"
      title="Earth, never electric."
      intro="A monochrome foundation of stone and mist, lifted by a single muted moss. No pure black, no pure white — contrast comes from light, not from loud hue. Tap any swatch to copy."
    >
      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Light — Daylight in the grove
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {COLORS.light.map((c, i) => (
          <ColorSwatch key={c.name} color={c} index={i} />
        ))}
      </div>

      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mt-16 mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Dark — Dusk beneath the canopy
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {COLORS.dark.map((c, i) => (
          <ColorSwatch key={c.name} color={c} dark index={i} />
        ))}
      </div>
    </Section>
  );
}
