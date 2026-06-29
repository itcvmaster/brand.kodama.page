import { KeyRound, Link2, Target } from "lucide-react";
import { BRAND_SECTIONS } from "@/lib/brand-data";
import { PHILOSOPHY_PILLARS } from "@/lib/philosophy-data";
import { FadeIn } from "@/components/FadeIn";

const PILLAR_ICONS = [Link2, Target, KeyRound] as const;

export function TheWaySection() {
  const { kicker, title, intro } = BRAND_SECTIONS.theWay;

  return (
    <section id="the-way" data-testid="the-way-section" className="py-28 lg:py-36 bg-kodama-mist border-t border-kodama-line">
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

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <FadeIn key={pillar.id} delay={0.08 * i}>
                <div
                  data-testid={`way-card-0${i + 1}`}
                  className="group relative bg-kodama-sand rounded-2xl border border-kodama-line p-10 h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-kodama-moss/40"
                >
                  <span className="font-display italic text-7xl text-kodama-line group-hover:text-kodama-clay transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-7 h-7 text-kodama-moss mt-6" strokeWidth={1.4} aria-hidden />
                  <h3 className="font-display text-3xl text-kodama-bark mt-5">{pillar.title}</h3>
                  <p className="mt-4 text-kodama-stone leading-relaxed font-light">{pillar.line}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
