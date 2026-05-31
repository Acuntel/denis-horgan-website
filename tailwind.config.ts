import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight navy: nav, footer, headlines, primary CTAs. Lifted from the
        // brand of Emily Sachs Wong (#1 Illinois agent, eswchicago.com) — #02182b.
        navy: {
          DEFAULT: "#02182b",
          900: "#010F1D",
          800: "#02182b",
          700: "#0A2A42",
          600: "#123653",
          500: "#1D4A6B",
        },
        // Cool slate-blue accent: eyebrows, links, chips, secondary CTAs.
        // Keeps the palette in ESW's restrained cool-monochrome family.
        teal: {
          DEFAULT: "#3F6184",
          700: "#2C4A66",
          600: "#345A7D",
          500: "#3F6184",
          400: "#6D89A8",
          300: "#9FB3C8",
          50: "#EEF2F7",
        },
        // Crisp whites with a faint cool cast — ESW's gallery-white base.
        sand: "#F5F6F8",
        cream: {
          50: "#FFFFFF",
          100: "#F7F8FA",
          200: "#EEF1F4",
          300: "#E2E7EC",
          400: "#CDD5DD",
        },
        ink: "#15202E",
        mute: "#848484",
        line: "#E2E7EC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
        loose1: "0.18em",
      },
      maxWidth: { container: "1240px" },
      boxShadow: {
        card: "0 1px 2px rgba(2,24,43,0.05), 0 8px 24px rgba(2,24,43,0.08)",
        cardHover:
          "0 2px 4px rgba(2,24,43,0.07), 0 18px 48px rgba(2,24,43,0.16)",
        soft: "0 1px 0 rgba(2,24,43,0.05)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loaderFade: {
          "0%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        monogramDraw: {
          "0%": { strokeDashoffset: "300", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        loaderFade: "loaderFade 1.4s ease-out 1.1s forwards",
        monogramDraw: "monogramDraw 1.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
