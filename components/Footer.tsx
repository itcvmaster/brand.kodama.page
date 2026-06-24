import { FadeIn } from "./FadeIn";
import { KodamaMark } from "./KodamaMark";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-24 py-24 border-t"
      style={{ borderColor: "var(--k-border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <KodamaMark size={40} stroke={1.8} style={{ color: "var(--k-accent)" }} />
            <p
              className="mt-8 font-display text-3xl md:text-4xl font-light tracking-tight max-w-xl"
              style={{ color: "var(--k-text)" }}
            >
              A quiet place for your thoughts.
            </p>
            <p
              className="mt-5 font-mono-k text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "var(--k-text-2)" }}
            >
              Kodama · Brand System · 2026
            </p>
          </div>
        </FadeIn>

        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--k-border)" }}
        >
          <span className="font-mono-k text-[11px] tracking-wide" style={{ color: "var(--k-text-2)" }}>
            Note · Secret · Drop · Poll
          </span>
          <span className="font-mono-k text-[11px] tracking-wide" style={{ color: "var(--k-text-2)" }}>
            木霊 — the echo of the trees
          </span>
        </div>
      </div>
    </footer>
  );
}
