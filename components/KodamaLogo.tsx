"use client";

import { useId } from "react";

/** Leaf-and-sprout mark from the Emergent brand system. */
export function KodamaLogo({
  className = "w-7 h-7",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const uid = useId();
  const maskId = `kodama-leaf-${uid.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      role="img"
      aria-label="Kodama"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={maskId}>
          <rect width="64" height="64" fill="white" />
          <circle cx="47.5" cy="30" r="9" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="24" r="17" mask={`url(#${maskId})`} />
      <rect x="27.4" y="38" width="5.2" height="20" rx="2.6" />
    </svg>
  );
}
