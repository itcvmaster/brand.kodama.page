import Image from "next/image";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { LineIllustration } from "@/components/illustrations/LineArt";
import { LINE_ILLUSTRATIONS, PHOTOS } from "@/lib/brand-data";

export function IllustrationSection() {
  return (
    <Section
      id="illustration"
      index="07"
      kicker="Illustration"
      title="Nature, reduced to a line."
      intro="Two registers, one feeling. Hand-tuned line art carries the calm into interfaces, while restrained, desaturated photography grounds the brand in real, quiet places."
    >
      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Line system
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {LINE_ILLUSTRATIONS.map(({ name }, i) => (
          <FadeIn key={name} delay={0.06 * i}>
            <div
              className="rounded-2xl border p-7 flex flex-col items-center transition-colors duration-500 hover:[background:var(--k-surface-hover)]"
              style={{ borderColor: "var(--k-border)", background: "var(--k-surface)" }}
            >
              <div className="w-20 h-20">
                <LineIllustration name={name} className="w-full h-full" />
              </div>
              <span
                className="mt-4 font-mono-k text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--k-text-2)" }}
              >
                {name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <p
          className="font-mono-k text-[11px] uppercase tracking-[0.3em] mt-16 mb-5"
          style={{ color: "var(--k-text-2)" }}
        >
          Photographic register
        </p>
      </FadeIn>
      <div className="grid sm:grid-cols-3 gap-4">
        {PHOTOS.map(({ src, name }, i) => (
          <FadeIn key={name} delay={0.1 * i}>
            <div
              className="group relative rounded-2xl overflow-hidden border aspect-[4/5]"
              style={{ borderColor: "var(--k-border)" }}
            >
              <Image
                src={src}
                alt={name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--k-bg) 80%, transparent))",
                }}
              />
              <span
                className="absolute bottom-4 left-4 font-mono-k text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--k-text)" }}
              >
                {name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
