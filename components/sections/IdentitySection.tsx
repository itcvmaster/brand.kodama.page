import { Check, X } from "lucide-react";
import { BRAND_SECTIONS, LOGO_GUIDELINES } from "@/lib/brand-data";
import { KodamaLogo } from "@/components/KodamaLogo";
import { FadeIn } from "@/components/FadeIn";

export function IdentitySection() {
  const { kicker, title, intro, clearSpace, wordmarkNote, onMossNote } = BRAND_SECTIONS.identity;

  return (
    <section id="identity" data-testid="identity-section" className="py-28 lg:py-36 border-t border-kodama-line">
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

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-7">
            <div className="relative rounded-2xl border border-kodama-line bg-kodama-mist overflow-hidden h-full">
              <div className="grain absolute inset-0 pointer-events-none" />
              <div className="relative p-12 flex flex-col items-center justify-center min-h-[420px]">
                <div className="relative p-12 border border-dashed border-kodama-clay/50 rounded-2xl">
                  <KodamaLogo className="w-40 h-40 text-kodama-moss" />
                </div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-kodama-stone mt-8">
                  {clearSpace}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-kodama-line bg-kodama-sand p-10">
                <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">Wordmark</span>
                <div className="mt-6 flex items-center gap-3">
                  <KodamaLogo className="w-9 h-9 text-kodama-moss" />
                  <span className="font-display text-4xl tracking-tight text-kodama-bark">Kodama</span>
                </div>
                <p className="mt-6 text-kodama-stone font-light leading-relaxed">{wordmarkNote}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-kodama-moss bg-kodama-moss p-10">
                <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">On Moss</span>
                <div className="mt-6 flex items-center gap-3">
                  <KodamaLogo className="w-9 h-9" variant="dark" />
                  <span className="font-display text-4xl tracking-tight text-[#F6F4F0]">Kodama</span>
                </div>
                <p className="mt-6 text-[#F6F4F0]/70 font-light leading-relaxed">{onMossNote}</p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <FadeIn>
            <div data-testid="logo-do" className="rounded-2xl border border-kodama-line bg-kodama-sand p-8">
              <div className="flex items-center gap-2 text-kodama-moss">
                <Check className="w-5 h-5" aria-hidden />
                <span className="font-medium">Do</span>
              </div>
              <ul className="mt-5 space-y-3 text-kodama-stone font-light">
                {LOGO_GUIDELINES.do.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div data-testid="logo-dont" className="rounded-2xl border border-kodama-line bg-kodama-sand p-8">
              <div className="flex items-center gap-2 text-kodama-clay">
                <X className="w-5 h-5" aria-hidden />
                <span className="font-medium">Don&apos;t</span>
              </div>
              <ul className="mt-5 space-y-3 text-kodama-stone font-light">
                {LOGO_GUIDELINES.dont.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
