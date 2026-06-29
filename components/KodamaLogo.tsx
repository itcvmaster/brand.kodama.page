"use client";

import Image from "next/image";
import { KODAMA_LOGO, KODAMA_LOGO_DARK } from "@/lib/brand-data";

type KodamaLogoVariant = "auto" | "light" | "dark";

export function KodamaLogo({
  className = "w-7 h-7",
  style,
  priority = false,
  variant = "auto",
}: {
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  /** auto follows theme; dark for moss / dark surfaces */
  variant?: KodamaLogoVariant;
}) {
  const imageClass = `aspect-square shrink-0 object-contain ${className}`;

  if (variant === "dark") {
    return (
      <Image
        src={KODAMA_LOGO_DARK.src}
        alt={KODAMA_LOGO_DARK.alt}
        width={KODAMA_LOGO_DARK.width}
        height={KODAMA_LOGO_DARK.height}
        priority={priority}
        className={imageClass}
        style={style}
      />
    );
  }

  if (variant === "light") {
    return (
      <Image
        src={KODAMA_LOGO.src}
        alt={KODAMA_LOGO.alt}
        width={KODAMA_LOGO.width}
        height={KODAMA_LOGO.height}
        priority={priority}
        className={imageClass}
        style={style}
      />
    );
  }

  return (
    <>
      <Image
        src={KODAMA_LOGO.src}
        alt={KODAMA_LOGO.alt}
        width={KODAMA_LOGO.width}
        height={KODAMA_LOGO.height}
        priority={priority}
        className={`${imageClass} dark:hidden`}
        style={style}
      />
      <Image
        src={KODAMA_LOGO_DARK.src}
        alt={KODAMA_LOGO_DARK.alt}
        width={KODAMA_LOGO_DARK.width}
        height={KODAMA_LOGO_DARK.height}
        priority={priority}
        className={`${imageClass} hidden dark:block`}
        style={style}
      />
    </>
  );
}
