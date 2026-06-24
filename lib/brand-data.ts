export const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "logo", label: "Logo" },
  { id: "subbrands", label: "Family" },
  { id: "icons", label: "Icons" },
  { id: "type", label: "Type" },
  { id: "color", label: "Color" },
  { id: "spacing", label: "Spacing" },
  { id: "illustration", label: "Illustration" },
  { id: "states", label: "States" },
] as const;

export const ATTRIBUTES = [
  { word: "Quiet", note: "Speaks softly. Never demands attention." },
  { word: "Hidden", note: "Present, but unobtrusive — like a spirit in the trees." },
  { word: "Peaceful", note: "A calm surface. Stillness as a feature." },
  { word: "Trustworthy", note: "Steady, honest, and private by default." },
  { word: "Intelligent", note: "Considered. Every detail has intent." },
  { word: "Minimal", note: "Only what is needed. Nothing more." },
] as const;

export const COLORS = {
  light: [
    { name: "Mist", hex: "#F7F5F0", role: "Background" },
    { name: "Paper", hex: "#EFECE5", role: "Surface" },
    { name: "Stone", hex: "#D8D4CA", role: "Border" },
    { name: "Sumi", hex: "#2D2C2A", role: "Text — primary" },
    { name: "Ash", hex: "#5C5A56", role: "Text — secondary" },
    { name: "Moss", hex: "#7A8B76", role: "Accent" },
    { name: "Sage", hex: "#A3B19F", role: "Accent — muted" },
  ],
  dark: [
    { name: "Charcoal", hex: "#141514", role: "Background" },
    { name: "Bark", hex: "#1C1E1C", role: "Surface" },
    { name: "Shadow", hex: "#2D302D", role: "Border" },
    { name: "Snow", hex: "#E6E8E6", role: "Text — primary" },
    { name: "Fog", hex: "#9AA09A", role: "Text — secondary" },
    { name: "Moss", hex: "#8F9F8B", role: "Accent" },
    { name: "Deep Moss", hex: "#5C6A58", role: "Accent — muted" },
  ],
} as const;

export const TYPE_SCALE = [
  { label: "Display", cls: "text-5xl md:text-7xl font-light tracking-tighter", family: "Cormorant Garamond", spec: "72 / Light" },
  { label: "Heading", cls: "text-3xl md:text-4xl font-light tracking-tight", family: "Cormorant Garamond", spec: "40 / Light" },
  { label: "Subhead", cls: "text-xl md:text-2xl font-body font-normal", family: "Satoshi", spec: "24 / Regular" },
  { label: "Body", cls: "text-base md:text-lg font-body font-light", family: "Satoshi", spec: "18 / Light" },
  { label: "Caption", cls: "text-xs uppercase tracking-[0.3em] font-mono-k", family: "JetBrains Mono", spec: "12 / Mono" },
] as const;

export const SPACING_SCALE = [
  { token: "xs", px: 4 },
  { token: "sm", px: 8 },
  { token: "md", px: 16 },
  { token: "lg", px: 24 },
  { token: "xl", px: 32 },
  { token: "2xl", px: 48 },
  { token: "3xl", px: 64 },
  { token: "4xl", px: 96 },
  { token: "5xl", px: 128 },
] as const;

export const SUBBRANDS = [
  { name: "Note", line: "Write quietly", desc: "A calm canvas for thinking. Paper lines folded into the seed." },
  { name: "Secret", line: "Share, hidden", desc: "An eclipsed circle — present, but never fully revealed." },
  { name: "Drop", line: "Send softly", desc: "A single droplet. A transfer that leaves only a ripple." },
  { name: "Poll", line: "Ask gently", desc: "Three staggered marks — many voices, kept in balance." },
] as const;

export const ICON_NAMES = [
  "feather", "leaf", "sprout", "wind", "moon", "cloud",
  "droplet", "eye", "eye-off", "search", "bell", "bookmark",
  "share", "archive", "folder", "chart",
] as const;

export const LINE_ILLUSTRATIONS = [
  { name: "Seed" },
  { name: "Branch" },
  { name: "Stone" },
  { name: "Distance" },
  { name: "Echo" },
] as const;

export const KODAMA_LOGO = {
  src: "https://cdn.kodama.page/images/kodama-icon-logo-256.png",
  alt: "Kodama mark",
  width: 256,
  height: 256,
} as const;

export const PHOTOS = [
  { src: "/images/mist.webp", name: "Mist" },
  { src: "/images/stillness.webp", name: "Stillness" },
  { src: "/images/moss.webp", name: "Moss" },
] as const;

export const HERO_IMAGE = "/images/mist.webp";
