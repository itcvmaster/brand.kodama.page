import { Clock, Feather, ShieldCheck } from "lucide-react";
import { BRAND_SECTIONS } from "@/lib/brand-data";
import {
  PHILOSOPHY_BELIEFS,
  PHILOSOPHY_ORIGIN,
  PHILOSOPHY_TAGLINE,
  PHILOSOPHY_THEMES,
  PHILOSOPHY_WELCOME,
  PHILOSOPHY_WHY,
} from "@/lib/philosophy-data";
import { FadeIn } from "@/components/FadeIn";
import { MaSnapshot } from "@/components/snapshots/BrandSnapshots";

const THEME_ICONS = { simplicity: Feather, time: Clock, privacy: ShieldCheck } as const;

export function PhilosophySection() {
  const { kicker } = BRAND_SECTIONS.philosophy;

  return (
    <section id="philosophy" data-testid="philosophy-section" className="py-28 lg:py-36 border-t border-kodama-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">{kicker}</span>
            <FadeIn>
              <p className="font-display font-light text-3xl sm:text-4xl leading-[1.25] tracking-tight text-kodama-bark mt-6">
                Software should help you{" "}
                <span className="italic text-kodama-moss">disappear</span>
                into your work — not pull you into itself.
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mt-6 text-lg text-kodama-stone font-light max-w-xl">{PHILOSOPHY_WHY}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-10 space-y-4">
                {PHILOSOPHY_BELIEFS.map((b) => (
                  <div key={b.title} className="rounded-xl border border-kodama-line bg-kodama-sand px-6 py-5">
                    <p className="font-display text-lg text-kodama-bark">{b.title}</p>
                    <p className="mt-1 text-sm text-kodama-stone font-light">{b.line}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mt-10 font-mono text-[11px] tracking-[0.25em] uppercase text-kodama-moss">
                {PHILOSOPHY_TAGLINE}
              </p>
              <p className="mt-6 text-kodama-stone font-light text-sm max-w-lg">{PHILOSOPHY_WHY}</p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.08}>
              <MaSnapshot />
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="mt-6 rounded-2xl border border-kodama-line bg-kodama-mist p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-kodama-clay">
                  {PHILOSOPHY_ORIGIN.title}
                </p>
                <p className="mt-3 font-display text-lg text-kodama-bark font-light">{PHILOSOPHY_ORIGIN.before}</p>
                <p className="mt-3 text-sm text-kodama-stone font-light">{PHILOSOPHY_ORIGIN.after}</p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px mt-20 bg-kodama-line rounded-2xl overflow-hidden border border-kodama-line">
          {PHILOSOPHY_THEMES.map(({ id, title, line }, i) => {
            const Icon = THEME_ICONS[id as keyof typeof THEME_ICONS];
            return (
              <FadeIn key={id} delay={0.05 * i}>
                <div className="bg-kodama-sand p-8 lg:p-10 h-full">
                  <Icon className="w-6 h-6 text-kodama-moss" strokeWidth={1.4} aria-hidden />
                  <h3 className="font-display text-xl text-kodama-bark mt-4">{title}</h3>
                  <p className="mt-2 text-sm text-kodama-stone font-light leading-relaxed">{line}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-12 text-center font-display text-xl text-kodama-bark font-light italic">
            {PHILOSOPHY_WELCOME.headline} {PHILOSOPHY_WELCOME.subhead}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
