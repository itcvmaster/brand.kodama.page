import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { KodamaMark, SubbrandMark } from "@/components/KodamaMark";
import { SUBBRANDS } from "@/lib/brand-data";

export function SubbrandsSection() {
  return (
    <Section
      id="subbrands"
      index="02"
      kicker="The Family"
      title="One spirit, many forms."
      intro="Every product in the Kodama family shares the same crest. Only a small modifier shifts inside the circle — so the family always reads as one."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBBRANDS.map(({ name, line, desc }, i) => (
          <FadeIn key={name} delay={0.08 * i}>
            <div
              className="group rounded-2xl border p-8 h-full flex flex-col items-center text-center transition-colors duration-500 hover:[background:var(--k-surface-hover)]"
              style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
            >
              <SubbrandMark name={name} />
              <h3
                className="mt-7 font-display text-2xl tracking-tight"
                style={{ color: "var(--k-text)" }}
              >
                Kodama{" "}
                <span style={{ color: "var(--k-accent)" }}>{name}</span>
              </h3>
              <p
                className="mt-1 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text-2)" }}
              >
                {line}
              </p>
              <p
                className="mt-4 text-sm font-light leading-relaxed"
                style={{ color: "var(--k-text-2)" }}
              >
                {desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div
          className="mt-8 rounded-2xl border flex flex-wrap items-center gap-x-12 gap-y-6 px-8 py-8"
          style={{ borderColor: "var(--k-border)" }}
        >
          {SUBBRANDS.map(({ name }) => (
            <span key={name} className="inline-flex items-center gap-3">
              <KodamaMark size={22} stroke={2.2} style={{ color: "var(--k-text)" }} />
              <span className="font-display text-xl tracking-tight" style={{ color: "var(--k-text)" }}>
                Kodama{" "}
                <span className="font-normal" style={{ color: "var(--k-accent)" }}>
                  {name}
                </span>
              </span>
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
