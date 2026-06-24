import { FadeIn } from "./FadeIn";

export function Section({
  id,
  index,
  kicker,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="px-6 md:px-12 lg:px-24 py-24 md:py-36 border-t"
      style={{ borderColor: "var(--k-border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono-k text-xs" style={{ color: "var(--k-accent)" }}>
              {index}
            </span>
            <span
              className="font-mono-k text-xs uppercase tracking-[0.3em]"
              style={{ color: "var(--k-text-2)" }}
            >
              {kicker}
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-2xl"
            style={{ color: "var(--k-text)" }}
          >
            {title}
          </h2>
          <p
            className="mt-5 max-w-xl text-base font-light leading-relaxed"
            style={{ color: "var(--k-text-2)" }}
          >
            {intro}
          </p>
        </FadeIn>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
