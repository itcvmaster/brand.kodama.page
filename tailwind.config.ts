import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kodama: {
          sand: "rgb(var(--k-sand) / <alpha-value>)",
          moss: "rgb(var(--k-moss) / <alpha-value>)",
          "moss-deep": "rgb(var(--k-moss-deep) / <alpha-value>)",
          bark: "rgb(var(--k-bark) / <alpha-value>)",
          clay: "rgb(var(--k-clay) / <alpha-value>)",
          mist: "rgb(var(--k-mist) / <alpha-value>)",
          stone: "rgb(var(--k-stone) / <alpha-value>)",
          line: "rgb(var(--k-line) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-spectral)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
