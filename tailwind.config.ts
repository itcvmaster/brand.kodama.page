import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kodama: {
          sand: "#F6F4F0",
          moss: "#4A5D4E",
          "moss-deep": "#3A4D3E",
          bark: "#2C302E",
          clay: "#C4A48C",
          mist: "#EFEBE3",
          stone: "#5C635F",
          line: "#DDD8CF",
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
