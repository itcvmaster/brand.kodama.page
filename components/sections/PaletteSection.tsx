"use client";

import { useState } from "react";
import { BRAND_SECTIONS, PALETTE } from "@/lib/brand-data";
import { FadeIn } from "@/components/FadeIn";

export function PaletteSection() {
  const { kicker, title, intro } = BRAND_SECTIONS.palette;
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="palette" data-testid="palette-section" className="py-28 lg:py-36 bg-kodama-mist border-t border-kodama-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">{kicker}</span>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-light tracking-tight text-4xl sm:text-5xl mt-5 leading-[1.05] text-kodama-bark">
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed font-light text-kodama-stone">{intro}</p>
          </FadeIn>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PALETTE.map((color, i) => (
            <FadeIn key={color.name} delay={0.05 * i}>
              <button
                type="button"
                data-testid={`swatch-${color.name.toLowerCase()}`}
                onClick={() => copy(color.hex)}
                className="w-full text-left rounded-2xl border border-kodama-line overflow-hidden bg-kodama-sand transition-transform duration-500 hover:-translate-y-1"
              >
                <div
                  className="h-40 flex items-end p-5"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`font-mono text-xs tracking-widest ${
                      ["Moss", "Bark", "Stone"].includes(color.name)
                        ? "text-kodama-sand/80"
                        : "text-kodama-bark/70"
                    }`}
                  >
                    {copied === color.hex ? "Copied" : color.hex}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-kodama-bark">{color.name}</h3>
                  <p className="mt-1 text-sm text-kodama-stone font-light">{color.role}</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
