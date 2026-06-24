import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { KodamaMark } from "@/components/KodamaMark";
import { BranchIllustration, StoneIllustration } from "@/components/illustrations/LineArt";

function EmptyState({
  ill,
  title,
  copy,
  action,
}: {
  ill: React.ReactNode;
  title: string;
  copy: string;
  action: string;
}) {
  return (
    <div
      className="rounded-2xl border min-h-[300px] flex flex-col items-center justify-center text-center px-8 py-16"
      style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
    >
      <div className="w-14 h-14 opacity-70 k-float">{ill}</div>
      <p className="mt-7 font-display text-2xl font-light" style={{ color: "var(--k-text)" }}>
        {title}
      </p>
      <p className="mt-2 text-sm font-light" style={{ color: "var(--k-text-2)" }}>
        {copy}
      </p>
      <button
        data-testid={`empty-action-${action.replace(/\s/g, "-").toLowerCase()}`}
        className="mt-6 font-mono-k text-[11px] uppercase tracking-[0.25em] border-b pb-1 transition-colors duration-300 hover:[color:var(--k-text)]"
        style={{ color: "var(--k-accent)", borderColor: "var(--k-accent)" }}
      >
        {action}
      </button>
    </div>
  );
}

function LineWipe() {
  return (
    <div className="space-y-4">
      {[100, 80, 92].map((width, i) => (
        <div
          key={i}
          className="relative h-3 rounded-full overflow-hidden"
          style={{ width: `${width}%`, background: "var(--k-surface-hover)" }}
        >
          <div
            className="absolute inset-y-0 w-1/3 k-wipe"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, var(--k-accent) 35%, transparent), transparent)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function StatesSection() {
  return (
    <Section
      id="states"
      index="08"
      kicker="Empty & Loading"
      title="Even waiting should feel calm."
      intro="Kodama never shouts to fill a void. Empty screens offer stillness and a single gentle invitation; loading is a soft breath, not a spinning demand."
    >
      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Empty states
        </p>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn>
          <EmptyState
            ill={<StoneIllustration className="w-full h-full" />}
            title="Quiet here."
            copy="Your first note is waiting to be written."
            action="Begin a note"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <EmptyState
            ill={<BranchIllustration className="w-full h-full" />}
            title="Nothing yet."
            copy="When something arrives, it will rest here gently."
            action="Refresh"
          />
        </FadeIn>
      </div>

      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mt-16 mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Loading states
        </p>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        <FadeIn>
          <div
            className="rounded-2xl border min-h-[220px] grid place-items-center"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <div className="flex flex-col items-center gap-5">
              <KodamaMark
                size={44}
                stroke={1.6}
                className="k-breathe"
                style={{ color: "var(--k-accent)" }}
              />
              <span
                className="font-mono-k text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Breathing mark
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            className="rounded-2xl border min-h-[220px] flex items-center px-8"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <div className="w-full">
              <LineWipe />
              <span
                className="mt-6 block font-mono-k text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Line wipe
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div
            className="rounded-2xl border min-h-[220px] grid place-items-center"
            style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
          >
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-2.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full k-breathe"
                    style={{
                      background: "var(--k-accent)",
                      animationDelay: `${0.3 * i}s`,
                    }}
                  />
                ))}
              </div>
              <span
                className="font-mono-k text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "var(--k-text-2)" }}
              >
                Gentle pulse
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
