"use client";

const MARK_PATHS = (
  <>
    <path d="M32 27 C 20.5 27.5, 12.5 19.5, 12 9 C 24 9, 32 16.5, 32 27 Z" />
    <path d="M32 27 C 43.5 27.5, 51.5 19.5, 52 9 C 40 9, 32 16.5, 32 27 Z" />
    <path d="M32 23 C 38.5 29.5, 40.5 40, 36.5 51.5 C 34.8 56.5, 29.2 56.5, 27.5 51.5 C 23.5 40, 25.5 29.5, 32 23 Z" />
  </>
);

type KodamaLogoVariant = "auto" | "light" | "dark";

export function KodamaLogo({
  className = "w-7 h-7",
  style,
  priority: _priority,
  variant = "auto",
}: {
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  /** auto follows theme; dark is sand on moss surfaces */
  variant?: KodamaLogoVariant;
}) {
  const colorClass =
    variant === "dark"
      ? "text-[#F6F4F0]"
      : variant === "light"
        ? "text-kodama-moss"
        : "text-kodama-moss";

  const eyeClass =
    variant === "dark" ? "fill-kodama-moss" : "fill-kodama-sand";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      role="img"
      aria-label="Kodama"
      className={`aspect-square shrink-0 ${colorClass} ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {MARK_PATHS}
      <circle cx="32" cy="43" r="3.1" className={eyeClass} />
    </svg>
  );
}
