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
        // Deep forest green: nav, footer, headlines. Reads "library, Brooks Brothers, club."
        navy: {
          DEFAULT: "#1F3328",
          900: "#162420",
          800: "#1F3328",
          700: "#2A4636",
          600: "#355847",
          500: "#476B58",
        },
        // Warm antique brass: accent + CTAs. Reads "estate hardware, signet ring."
        teal: {
          DEFAULT: "#B89968",
          700: "#8A6E3C",
          600: "#9C7C3E",
          500: "#B89968",
          400: "#C9B284",
          300: "#D9C9A6",
          50: "#F4ECDC",
        },
        // Layered creams: warmer as they get darker. The "ivory paper" base.
        sand: "#F8F4EC",
        cream: {
          50: "#FCFAF5",
          100: "#F8F4EC",
          200: "#F1EBDE",
          300: "#E5DCC8",
          400: "#D6C9AE",
        },
        ink: "#1A1815",
        mute: "#6E6A60",
        line: "#E0D8C7",
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
        card: "0 1px 2px rgba(31,51,40,0.04), 0 8px 24px rgba(31,51,40,0.07)",
        cardHover:
          "0 2px 4px rgba(31,51,40,0.06), 0 18px 48px rgba(31,51,40,0.14)",
        soft: "0 1px 0 rgba(31,51,40,0.04)",
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
