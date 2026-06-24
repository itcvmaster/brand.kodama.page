export function SeedIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} style={{ color: "var(--k-accent)" }}>
      <path
        d="M60 24 C84 40, 84 80, 60 96 C36 80, 36 40, 60 24 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M60 32 L60 90" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 52 L74 46 M60 64 L46 58" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function BranchIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} style={{ color: "var(--k-accent)" }}>
      <path d="M30 100 C45 70, 60 60, 92 38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M52 70 C58 64, 66 64, 74 66" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M38 88 C42 82, 48 80, 54 82" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function StoneIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} style={{ color: "var(--k-accent)" }}>
      <path
        d="M28 78 C26 64, 40 52, 60 52 C82 52, 96 64, 92 78 C88 86, 72 88, 60 88 C46 88, 30 86, 28 78 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M40 60 H30 M70 96 H50" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function DistanceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} style={{ color: "var(--k-accent)" }}>
      <path
        d="M16 92 L46 44 L66 74 L82 50 L104 92"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="86" cy="34" r="9" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function EchoIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} style={{ color: "var(--k-accent)" }}>
      <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
      <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1.1" opacity="0.45" />
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1" opacity="0.22" />
    </svg>
  );
}

const LINE_ILLUSTRATIONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Seed: SeedIllustration,
  Branch: BranchIllustration,
  Stone: StoneIllustration,
  Distance: DistanceIllustration,
  Echo: EchoIllustration,
};

export function LineIllustration({ name, className = "" }: { name: string; className?: string }) {
  const Component = LINE_ILLUSTRATIONS[name];
  if (!Component) return null;
  return <Component className={className} />;
}
