/** Kodama philosophy — concise copy for the brand guide. Ideas in few words. */

export const PHILOSOPHY_TAGLINE = "One URL. One Purpose. No Account." as const;

export const PHILOSOPHY_WELCOME = {
  headline: "Own Your Place.",
  subhead: "A quieter internet starts here.",
} as const;

export const HERO_COPY = {
  headline: ["Own Your", "Place."],
  body: "A forest of small, focused places — where ideas live, conversations begin, and trust is built.",
  primaryCta: "Enter the Forest",
  secondaryCta: "View the Identity",
} as const;

/** Core belief — one line each. */
export const PHILOSOPHY_BELIEFS = [
  {
    title: "Disappear into your work",
    line: "The best software asks for less and gets out of your way.",
  },
  {
    title: "Every person deserves a place",
    line: "Not profiles or feeds — places that are simple, meaningful, and yours.",
  },
  {
    title: "A URL is a place",
    line: "Where ideas live, conversations begin, and trust is built.",
  },
] as const;

export const PHILOSOPHY_LEAD =
  "Software should help you disappear into your work — not pull you into itself." as const;

export const PHILOSOPHY_ORIGIN = {
  title: "The internet lost its simplicity",
  before: "You opened a page. You wrote something. You shared a link. You were done.",
  after: "Then came another account, another dashboard, another notification. We think it is time to build differently.",
} as const;

/** Three themes shown in philosophy grid — one sentence each. */
export const PHILOSOPHY_THEMES = [
  { id: "simplicity", title: "Simplicity Is Respect", line: "Every unnecessary click interrupts a thought." },
  { id: "time", title: "We Respect Your Time", line: "Your ideas deserve to arrive before the interface does." },
  { id: "privacy", title: "Privacy By Asking For Less", line: "When we don't need something, we don't ask for it." },
] as const;

export const PHILOSOPHY_PILLARS = [
  {
    id: "one-url",
    title: "One URL",
    line: "Readable. Shareable. Memorable. One place.",
  },
  {
    id: "one-purpose",
    title: "One Purpose",
    line: "One problem. Clarity, simplicity, and restraint are features.",
  },
  {
    id: "no-account",
    title: "No Account",
    line: "Open. Create. Share. Return whenever you wish.",
  },
] as const;

export const PHILOSOPHY_FOREST =
  "We grow places, not platforms — one tree at a time." as const;

export const PHILOSOPHY_WHY =
  "We build so you can finish what you came to do — then return to your life." as const;

export const PHILOSOPHY_CLOSING = {
  invitation: "One note, one message, one URL — you are already growing the forest.",
  mantra: "Every meaningful idea deserves a meaningful place.",
} as const;

export const FOREST_PRODUCTS = {
  current: [
    { name: "Note", tagline: "Your place for ideas.", desc: "Private. Encrypted. Always yours." },
    { name: "Drop", tagline: "Your place to listen.", desc: "Honest feedback. Anonymous conversations." },
    { name: "Secret", tagline: "Your place for trust.", desc: "Share what matters. Keep it protected." },
  ],
} as const;

export const COMING_PRODUCTS = [
  { name: "Poll", tagline: "Ask gently." },
  { name: "Room", tagline: "Gather quietly." },
  { name: "Link", tagline: "One place to point." },
] as const;

export const FOREST_PRODUCT_URLS: Record<string, string> = {
  Note: "kodama.note.io",
  Drop: "kodama.drop.io",
  Secret: "kodama.secret.io",
};

export const FOOTER_COPY = {
  body: PHILOSOPHY_CLOSING.invitation,
  tagline: "Brand System · A quieter internet starts here.",
} as const;

export const WILD_SNAPSHOTS = {
  pageTitle: "Quiet Mornings",
  pageUrl: "kodama.note/quiet-mornings",
  cardLine: "Own your place.",
} as const;

export const VOICE_SAY = [
  "Speak plainly. Say the true thing, gently.",
  "Use short sentences. Let silence work.",
  "Invite, never pressure.",
  "Use place language — not platform language.",
] as const;

export const VOICE_NEVER = [
  "Shout, hype, or manufacture urgency.",
  "Bury meaning under jargon.",
  "Demand attention you didn't earn.",
  "Ask for data you don't need.",
] as const;

export const VOICE_EXAMPLES = {
  good: "Your place for ideas. Private. Encrypted. Always yours.",
  bad: "Sign up now to unlock premium features!",
} as const;
