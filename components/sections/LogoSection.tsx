import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { KodamaMark } from "@/components/KodamaMark";

export function LogoSection() {
  return (
    <Section
      id="logo"
      index="01"
      kicker="Logo System"
      title="A single seed, held by the forest."
      intro="The mark is a kamon — a Japanese family crest reduced to its quietest form. A circle for the grove, a seed at its centre for the thought it protects."
    >
      <div className="grid md:grid-cols-12 gap-6">
        <FadeIn className="md:col-span-7">
          <div
            className="rounded-2xl border h-full flex flex-col"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <div className="flex-1 grid place-items-center py-20">
              <KodamaMark size={120} stroke={1.6} style={{ color: "var(--k-text)" }} />
            </div>
            <div
              className="border-t px-7 py-5 flex items-center justify-between"
              style={{ borderColor: "var(--k-border)" }}
            >
              <span
                className="font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Primary Mark
              </span>
              <span className="font-mono-k text-[11px]" style={{ color: "var(--k-accent)" }}>
                SVG · scalable
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="md:col-span-5 grid gap-6">
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl border px-8 py-10 flex items-center gap-4"
              style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
            >
              <KodamaMark size={40} stroke={2} style={{ color: "var(--k-text)" }} />
              <span
                className="font-display text-4xl tracking-tight font-light"
                style={{ color: "var(--k-text)" }}
              >
                Kodama
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl grid place-items-center py-10" style={{ background: "#2D2C2A" }}>
                <KodamaMark size={48} stroke={1.8} style={{ color: "#F7F5F0" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div
                className="rounded-2xl grid place-items-center py-10 border"
                style={{ background: "#F7F5F0", borderColor: "var(--k-border)" }}
              >
                <KodamaMark size={48} stroke={1.8} style={{ color: "#2D2C2A" }} />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div
              className="rounded-2xl border px-7 py-5 flex items-center justify-between"
              style={{ borderColor: "var(--k-border)" }}
            >
              <span
                className="font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Clear space
              </span>
              <span className="font-mono-k text-[11px]" style={{ color: "var(--k-accent)" }}>
                ≥ 1× mark height
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
