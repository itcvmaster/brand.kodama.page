import {
  ArrowUpRight,
  BarChart3,
  Link2,
  Lock,
  MessageSquareDot,
  NotebookPen,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BRAND_SECTIONS } from "@/lib/brand-data";
import {
  COMING_PRODUCTS,
  FOREST_PRODUCTS,
  FOREST_PRODUCT_URLS,
  FOOTER_COPY,
  PHILOSOPHY_CLOSING,
  PHILOSOPHY_FOREST,
  PHILOSOPHY_TAGLINE,
  PHILOSOPHY_WELCOME,
} from "@/lib/philosophy-data";
import { KodamaLogo } from "@/components/KodamaLogo";
import { FadeIn } from "@/components/FadeIn";
import {
  AppIconSnapshot,
  MantraCardSnapshot,
  PageSnapshot,
  ProductSnapshot,
} from "@/components/snapshots/BrandSnapshots";

const PRODUCT_ICONS = {
  Note: NotebookPen,
  Drop: MessageSquareDot,
  Secret: Lock,
} as const;

const COMING_ICONS = {
  Poll: BarChart3,
  Room: UsersRound,
  Link: Link2,
} as const;

const SNAPSHOT_PLACEHOLDERS: Record<string, string> = {
  Note: "Write quietly…",
  Drop: "Share your thoughts…",
  Secret: "Protected by URL and password.",
};

export function ForestSection() {
  const { kicker, title, intro, growing, inTheWild } = BRAND_SECTIONS.forest;

  return (
    <section id="forest" data-testid="forest-section" className="py-28 lg:py-36 border-t border-kodama-line bg-kodama-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">{kicker}</span>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-light tracking-tight text-4xl sm:text-5xl mt-5 leading-[1.05] text-kodama-bark">
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg font-light text-kodama-stone">{intro}</p>
            <p className="mt-2 text-sm font-light text-kodama-stone">{PHILOSOPHY_FOREST}</p>
          </FadeIn>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {FOREST_PRODUCTS.current.map((product, i) => {
            const Icon = PRODUCT_ICONS[product.name as keyof typeof PRODUCT_ICONS];
            const url = FOREST_PRODUCT_URLS[product.name];
            return (
              <FadeIn key={product.name} delay={0.06 * i}>
                <div className="rounded-2xl border border-kodama-line bg-kodama-sand p-6 h-full hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-kodama-moss/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-kodama-moss" strokeWidth={1.5} aria-hidden />
                    </div>
                    <KodamaLogo className="w-5 h-5 text-kodama-clay" />
                  </div>
                  <h3 className="font-display text-xl text-kodama-bark">Kodama {product.name}</h3>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-kodama-clay mt-1">
                    {product.tagline}
                  </p>
                  <p className="mt-2 text-sm text-kodama-stone font-light">{product.desc}</p>
                  {url && (
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-kodama-moss">
                      {url}
                      <ArrowUpRight className="w-3 h-3" aria-hidden />
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Sparkles className="w-4 h-4 text-kodama-clay" aria-hidden />
            <span className="text-sm text-kodama-stone font-light">{growing}</span>
            {COMING_PRODUCTS.map((p) => {
              const Icon = COMING_ICONS[p.name as keyof typeof COMING_ICONS];
              return (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-kodama-line px-3 py-1.5 text-xs text-kodama-stone"
                >
                  <Icon className="w-3.5 h-3.5 text-kodama-moss" strokeWidth={1.5} aria-hidden />
                  {p.name} · {p.tagline}
                </span>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {FOREST_PRODUCTS.current.slice(0, 2).map((product) => (
            <FadeIn key={`snap-${product.name}`}>
              <ProductSnapshot
                name={product.name}
                tagline={product.tagline}
                url={FOREST_PRODUCT_URLS[product.name] ?? `kodama.${product.name.toLowerCase()}.io`}
                placeholder={SNAPSHOT_PLACEHOLDERS[product.name] ?? "…"}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <FadeIn>
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">{inTheWild}</span>
          </FadeIn>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            <FadeIn>
              <AppIconSnapshot />
            </FadeIn>
            <FadeIn delay={0.06}>
              <PageSnapshot />
            </FadeIn>
            <FadeIn delay={0.12}>
              <MantraCardSnapshot />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ForestFooter() {
  const { kicker } = BRAND_SECTIONS.footer;
  const [line1, line2, line3] = PHILOSOPHY_TAGLINE.split(". ").map((s) => s.replace(/\.$/, ""));

  return (
    <footer data-testid="kodama-footer" className="relative bg-kodama-moss text-[#F6F4F0] pt-28 pb-12 overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-kodama-clay">{kicker}</p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="font-display font-light tracking-tight leading-[0.95] mt-8 text-5xl sm:text-7xl lg:text-8xl">
            {line1}.
            <br />
            {line2}.
            <br />
            <span className="italic text-kodama-clay">{line3}.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-10 max-w-lg text-[#F6F4F0]/70 font-light text-lg">{PHILOSOPHY_CLOSING.invitation}</p>
          <p className="mt-3 font-display text-xl italic text-[#F6F4F0]/90">{PHILOSOPHY_CLOSING.mantra}</p>
          <p className="mt-4 font-mono text-xs text-[#F6F4F0]/50">
            {PHILOSOPHY_WELCOME.headline} {PHILOSOPHY_WELCOME.subhead}
          </p>
        </FadeIn>
        <div className="mt-16 pt-8 border-t border-[#F6F4F0]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <KodamaLogo className="w-7 h-7" variant="dark" />
            <span className="font-display text-xl">Kodama</span>
          </div>
          <p className="font-mono text-xs text-[#F6F4F0]/50 tracking-wider">{FOOTER_COPY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
