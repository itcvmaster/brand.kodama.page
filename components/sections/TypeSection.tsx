import { BRAND_SECTIONS, TYPE_SPECIMENS } from "@/lib/brand-data";
import { PHILOSOPHY_WELCOME } from "@/lib/philosophy-data";
import { FadeIn } from "@/components/FadeIn";

export function TypeSection() {
  const { kicker, title, intro, bodyNote } = BRAND_SECTIONS.type;
  const sample = "Grow a place";

  return (
    <section id="type" data-testid="type-section" className="py-28 lg:py-36 border-t border-kodama-line">
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
          <FadeIn className="lg:col-span-6">
            <div className="rounded-2xl border border-kodama-line bg-kodama-sand p-10 h-full">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">
                  Display · Spectral
                </span>
                <span className="font-mono text-xs text-kodama-stone">Light · Italic</span>
              </div>
              <p className="font-display font-light text-kodama-bark leading-none mt-6 text-[6rem] sm:text-[8rem] lg:text-[10rem]">
                Aa
              </p>
              <p className="font-display text-3xl text-kodama-bark mt-6">{PHILOSOPHY_WELCOME.subhead.split(".")[0]}</p>
              <p className="font-display italic text-3xl text-kodama-moss">starts here.</p>
              <p className="font-mono text-xs text-kodama-stone mt-8">abcdefghijklmnopqrstuvwxyz · 0123456789</p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={0.08}>
            <div className="rounded-2xl border border-kodama-line bg-kodama-mist p-10 h-full flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">Body · Outfit</span>
              <div className="mt-8 space-y-6">
                {TYPE_SPECIMENS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-6 border-b border-kodama-line pb-5"
                  >
                    <span
                      className={`${spec.size} ${"weight" in spec ? spec.weight : "font-light"} ${
                        spec.family === "display" ? "font-display" : "font-body"
                      } text-kodama-bark`}
                    >
                      {sample}
                    </span>
                    <span className="font-mono text-[11px] text-kodama-stone whitespace-nowrap">{spec.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-kodama-stone font-light leading-relaxed">{bodyNote}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
