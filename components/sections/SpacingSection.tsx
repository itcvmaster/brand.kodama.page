import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { SPACING_SCALE } from "@/lib/brand-data";

const PRINCIPLES: Record<string, string> = {
  Kanso: "Simplicity",
  Ma: "Negative space",
  Seijaku: "Tranquility",
};

export function SpacingSection() {
  return (
    <Section
      id="spacing"
      index="06"
      kicker="Spacing — Ma 間"
      title="The space between is the design."
      intro="Kodama breathes. Built on an 8-point rhythm, the system favours generous negative space — Ma — so every element feels distant yet connected. Emptiness is intentional."
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <FadeIn className="lg:col-span-7">
          <div className="rounded-2xl border divide-y" style={{ borderColor: "var(--k-border)" }}>
            {SPACING_SCALE.map(({ token, px }) => (
              <div
                key={token}
                className="flex items-center gap-6 px-7 py-4"
                style={{ borderColor: "var(--k-border)" }}
              >
                <span
                  className="w-10 font-mono-k text-[11px] uppercase tracking-widest"
                  style={{ color: "var(--k-text-2)" }}
                >
                  {token}
                </span>
                <div
                  className="h-3 rounded-sm transition-all duration-700"
                  style={{ width: px, background: "var(--k-accent)" }}
                />
                <span className="font-mono-k text-[11px] ml-auto" style={{ color: "var(--k-accent)" }}>
                  {px}px
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="lg:col-span-5">
          <div
            className="rounded-2xl border h-full p-8 flex flex-col justify-between"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <div>
              <span className="font-display text-6xl font-light" style={{ color: "var(--k-accent)" }}>
                8
              </span>
              <p
                className="mt-3 text-sm font-light leading-relaxed"
                style={{ color: "var(--k-text-2)" }}
              >
                Base unit. Every gap, padding and radius is a multiple of eight — a steady,
                predictable cadence the eye can trust.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {(["Kanso", "Ma", "Seijaku"] as const).map((name) => (
                <div
                  key={name}
                  className="rounded-lg border px-3 py-4 text-center"
                  style={{ borderColor: "var(--k-border)" }}
                >
                  <p className="font-display text-lg" style={{ color: "var(--k-text)" }}>
                    {name}
                  </p>
                  <p
                    className="font-mono-k text-[9px] uppercase tracking-[0.15em] mt-1"
                    style={{ color: "var(--k-text-2)" }}
                  >
                    {PRINCIPLES[name]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
