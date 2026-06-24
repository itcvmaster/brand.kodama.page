import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { TYPE_SCALE } from "@/lib/brand-data";

export function TypographySection() {
  return (
    <Section
      id="type"
      index="04"
      kicker="Typography"
      title="A voice that whispers."
      intro="Cormorant Garamond brings an old, intelligent calm to headlines. Satoshi keeps the interface clear and unhurried. JetBrains Mono handles the small, technical details."
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <FadeIn className="lg:col-span-5">
          <div
            className="rounded-2xl border h-full p-10 flex flex-col justify-between"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <span
              className="font-display leading-none font-light"
              style={{ color: "var(--k-text)", fontSize: "11rem" }}
            >
              Aa
            </span>
            <div className="mt-6">
              <p className="font-display text-3xl tracking-tight" style={{ color: "var(--k-text)" }}>
                Cormorant Garamond
              </p>
              <p
                className="mt-2 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Display · Light 300 / Regular 400
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-7 grid gap-6">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border p-8" style={{ borderColor: "var(--k-border)" }}>
              <p className="font-body text-2xl font-light" style={{ color: "var(--k-text)" }}>
                The quiet brown fox rests beneath the cedar.
              </p>
              <p
                className="mt-4 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Satoshi · Body · 300 / 400 / 500
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
            >
              <p className="font-mono-k text-sm" style={{ color: "var(--k-accent)" }}>
                kodama.note / draft_0427.md · saved 2 min ago
              </p>
              <p
                className="mt-4 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                JetBrains Mono · Detail · 400 / 500
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.1}>
        <div
          className="mt-6 rounded-2xl border divide-y"
          style={{ borderColor: "var(--k-border)" }}
        >
          {TYPE_SCALE.map(({ label, cls, spec }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 px-8 py-7"
              style={{ borderColor: "var(--k-border)" }}
            >
              <span
                className="w-28 shrink-0 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                {label}
              </span>
              <span className={`${cls} flex-1`} style={{ color: "var(--k-text)" }}>
                A quiet place
              </span>
              <span className="font-mono-k text-[11px]" style={{ color: "var(--k-accent)" }}>
                {spec}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
