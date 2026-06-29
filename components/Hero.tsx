"use client";

import { ArrowUpRight } from "lucide-react";
import { BRAND_VERSION } from "@/lib/brand-data";
import { HERO_COPY, PHILOSOPHY_TAGLINE } from "@/lib/philosophy-data";
import { KodamaLogo } from "./KodamaLogo";
import { FadeIn } from "./FadeIn";
import { HeroBackdrop, PageSnapshot } from "./snapshots/BrandSnapshots";

export function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden pt-44 pb-28 lg:pt-52 lg:pb-36">
      <HeroBackdrop />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3">
                <KodamaLogo className="w-9 h-9 text-kodama-moss animate-breathe" />
                <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">
                  {BRAND_VERSION}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="font-display font-light tracking-tight text-kodama-bark mt-8 text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.92]">
                {HERO_COPY.headline[0]}
                <br />
                <span className="italic text-kodama-moss">{HERO_COPY.headline[1]}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mt-10 max-w-xl text-xl leading-relaxed text-kodama-stone font-light">
                {HERO_COPY.body}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="#philosophy"
                  data-testid="hero-cta-primary"
                  className="inline-flex items-center gap-2 rounded-full bg-kodama-moss text-kodama-sand px-7 py-3.5 hover:bg-kodama-moss-deep transition-colors duration-300"
                >
                  {HERO_COPY.primaryCta}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
                <a
                  href="#identity"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center gap-2 rounded-full border border-kodama-line text-kodama-bark px-7 py-3.5 hover:bg-kodama-mist transition-colors duration-300"
                >
                  {HERO_COPY.secondaryCta}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="lg:col-span-5 hidden lg:block">
            <PageSnapshot />
          </FadeIn>
        </div>

        <FadeIn delay={0.26}>
          <div className="mt-24 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-kodama-line pt-8 font-display text-lg text-kodama-stone">
            {PHILOSOPHY_TAGLINE.split(". ").map((part, i, arr) => (
              <span key={part} className="contents">
                <span className="text-kodama-bark">
                  {part}
                  {i < arr.length - 1 ? "." : ""}
                </span>
                {i < arr.length - 1 && <span className="text-kodama-line">·</span>}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
