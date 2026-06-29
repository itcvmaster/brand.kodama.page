import { Check, X } from "lucide-react";
import { BRAND_SECTIONS } from "@/lib/brand-data";
import { VOICE_EXAMPLES, VOICE_NEVER, VOICE_SAY } from "@/lib/philosophy-data";
import { FadeIn } from "@/components/FadeIn";
import { VoiceSnapshot } from "@/components/snapshots/BrandSnapshots";

export function VoiceSection() {
  const { kicker, title, intro } = BRAND_SECTIONS.voice;

  return (
    <section id="voice" data-testid="voice-section" className="py-28 lg:py-36 border-t border-kodama-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
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
            <FadeIn delay={0.14}>
              <VoiceSnapshot quote={VOICE_EXAMPLES.good} className="mt-10" />
            </FadeIn>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <FadeIn>
              <div className="rounded-2xl border border-kodama-moss/30 bg-kodama-sand p-8 h-full">
                <div className="flex items-center gap-2 text-kodama-moss mb-5">
                  <Check className="w-5 h-5" aria-hidden />
                  <span className="font-medium">We say</span>
                </div>
                <ul className="space-y-3">
                  {VOICE_SAY.map((item) => (
                    <li key={item} className="text-kodama-bark font-light leading-relaxed text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-kodama-line bg-kodama-mist p-8 h-full">
                <div className="flex items-center gap-2 text-kodama-clay mb-5">
                  <X className="w-5 h-5" aria-hidden />
                  <span className="font-medium">We never</span>
                </div>
                <ul className="space-y-3">
                  {VOICE_NEVER.map((item) => (
                    <li
                      key={item}
                      className="text-kodama-stone font-light text-sm line-through decoration-kodama-clay/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-kodama-line text-sm text-kodama-stone line-through decoration-kodama-clay/40">
                  {VOICE_EXAMPLES.bad}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
