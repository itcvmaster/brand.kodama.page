export function KodamaMark({
  size = 48,
  stroke = 2,
  className = "",
  style,
}: {
  size?: number;
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      style={style}
      aria-label="Kodama mark"
    >
      <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M32 14 C44 24, 44 40, 32 50 C20 40, 20 24, 32 14 Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 19 L32 45"
        stroke="currentColor"
        strokeWidth={0.75 * stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrestCircle({ stroke = 1.7 }: { stroke?: number }) {
  return (
    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth={stroke} fill="none" />
  );
}

function IconTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="grid place-items-center rounded-[22px] border w-24 h-24 transition-colors duration-500"
        style={{
          background: "var(--k-surface)",
          borderColor: "var(--k-border)",
          color: "var(--k-accent)",
        }}
      >
        {children}
      </div>
      <span
        className="font-mono-k text-[11px] uppercase tracking-[0.25em]"
        style={{ color: "var(--k-text-2)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function NoteMark() {
  return (
    <IconTile label="Note">
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle />
        <path
          d="M24 26 H40 M24 32 H40 M24 38 H34"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </IconTile>
  );
}

export function SecretMark() {
  return (
    <IconTile label="Secret">
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle />
        <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M22 22 A11 11 0 0 1 42 42" fill="currentColor" opacity="0.9" />
      </svg>
    </IconTile>
  );
}

export function DropMark() {
  return (
    <IconTile label="Drop">
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle />
        <path
          d="M32 20 C39 30, 41 35, 41 39 A9 9 0 1 1 23 39 C23 35, 25 30, 32 20 Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </IconTile>
  );
}

export function PollMark() {
  return (
    <IconTile label="Poll">
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle />
        <path
          d="M25 40 V34 M32 40 V26 M39 40 V30"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </IconTile>
  );
}

const SUBBRAND_MARKS: Record<string, React.ReactNode> = {
  Note: <NoteMark />,
  Secret: <SecretMark />,
  Drop: <DropMark />,
  Poll: <PollMark />,
};

export function SubbrandMark({ name }: { name: string }) {
  return SUBBRAND_MARKS[name] ?? null;
}

export function SubbrandMarkInline({ name }: { name: string }) {
  const marks: Record<string, React.ReactNode> = {
    Note: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle stroke={2.2} />
        <path d="M24 26 H40 M24 32 H40 M24 38 H34" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    Secret: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle stroke={2.2} />
        <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M22 22 A11 11 0 0 1 42 42" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    Drop: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle stroke={2.2} />
        <path d="M32 20 C39 30, 41 35, 41 39 A9 9 0 1 1 23 39 C23 35, 25 30, 32 20 Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    Poll: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <CrestCircle stroke={2.2} />
        <path d="M25 40 V34 M32 40 V26 M39 40 V30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  };
  return marks[name] ?? null;
}
