/**
 * Kodama visual brand system — colors, typography, layout, and section framing.
 * All readable copy lives in `@/lib/philosophy-data`.
 */

export const NAV_ITEMS = [
  { id: "top", label: "Overview" },
  { id: "philosophy", label: "Philosophy" },
  { id: "the-way", label: "The Way" },
  { id: "identity", label: "Identity" },
  { id: "palette", label: "Palette" },
  { id: "type", label: "Type" },
  { id: "voice", label: "Voice" },
  { id: "forest", label: "The Forest" },
] as const;

export const BRAND_VERSION = "Brand System · v1.0" as const;

export const THEME_COLOR = "#F6F4F0" as const;
export const DARK_THEME_COLOR = "#1a1d1b" as const;

export const KODAMA_LOGO = {
  src: "https://cdn.kodama.page/images/kodama-icon-logo-256.png",
  alt: "Kodama",
  width: 256,
  height: 256,
} as const;

export const KODAMA_LOGO_DARK = {
  src: "https://cdn.kodama.page/images/kodama-icon-logo-256-dark.png",
  alt: "Kodama",
  width: 256,
  height: 256,
} as const;

/** Emergent palette — solid, natural tones. */
export const PALETTE = [
  { name: "Moss", hex: "#4A5D4E", role: "Primary brand · spirit of the forest" },
  { name: "Bark", hex: "#2C302E", role: "Text · grounding & contrast" },
  { name: "Clay", hex: "#C4A48C", role: "Accent · warmth & soil" },
  { name: "Sand", hex: "#F6F4F0", role: "Background · open clearing" },
  { name: "Mist", hex: "#EFEBE3", role: "Surface · quiet depth" },
  { name: "Stone", hex: "#5C635F", role: "Secondary text · soft voice" },
] as const;

export const BRAND_SECTIONS = {
  philosophy: {
    kicker: "We Believe",
  },
  theWay: {
    kicker: "The Kodama Way",
    title: "Three principles. One forest.",
    intro: "Three rules — the soil everything grows from.",
  },
  identity: {
    kicker: "Logo & Wordmark",
    title: "The kodama icon.",
    intro:
      "The official Kodama mark — a quiet forest spirit in a 1:1 square. Use the CDN asset at full color; never recolor or distort.",
    clearSpace: "Clear space = height of the mark ÷ 2",
    wordmarkNote: "Set in Spectral Light. The mark always leads the word, with a breath of space between them.",
    onMossNote: "Reversed lockup for dark, grounded surfaces. Sand on Moss.",
  },
  palette: {
    kicker: "Color",
    title: "The palette of a quiet forest.",
    intro:
      "Earth, moss, clay and morning light. Solid, natural tones — never tech gradients. Color is used sparingly, the way light falls through trees.",
  },
  type: {
    kicker: "Typography",
    title: "Spectral speaks. Outfit listens.",
    intro:
      "A bookish serif for voice and headlines; a clean, humanist sans for calm reading. Together they feel considered, never loud.",
    bodyNote:
      "Body copy stays light in weight and generous in line-height. Every meaningful idea deserves a meaningful place — and room to breathe.",
  },
  voice: {
    kicker: "Voice & Tone",
    title: "Calm. Human. Unhurried.",
    intro:
      "Kodama writes like a person who respects your time. Direct, but gentle. Confident, but quiet.",
  },
  forest: {
    kicker: "The Forest",
    title: "Different products. One philosophy.",
    intro: "Every product is another tree — one problem, one URL, one place.",
    growing: "Tomorrow —",
    inTheWild: "Brand In The Wild",
  },
  footer: {
    kicker: "The Kodama Mantra",
  },
} as const;

export const LOGO_GUIDELINES = {
  do: [
    "Give the mark generous, quiet space.",
      "Use the official full-color icon — light or dark asset as appropriate.",
    "Keep the 1:1 square proportions intact.",
  ],
  dont: [
    "Stretch, rotate, or add shadows & gradients.",
    "Recolor, tint, or filter the illustration.",
    "Crowd the mark or place it on busy imagery.",
  ],
} as const;

export const TYPE_SPECIMENS = [
  { label: "H1 · Display", size: "text-5xl", family: "display" as const },
  { label: "H2 · Section", size: "text-3xl", family: "display" as const },
  { label: "H3 · Title", size: "text-xl", family: "body" as const, weight: "font-medium" },
  { label: "Body · Reading", size: "text-base", family: "body" as const, weight: "font-light" },
] as const;
