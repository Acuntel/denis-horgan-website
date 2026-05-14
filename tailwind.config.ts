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
        navy: {
          DEFAULT: "#0F1E3D",
          900: "#0A1530",
          800: "#0F1E3D",
          700: "#1A2D54",
          600: "#27406F",
        },
        teal: {
          DEFAULT: "#2BA8B6",
          600: "#1F8C99",
          500: "#2BA8B6",
          400: "#4FBFCA",
          50: "#E6F6F8",
        },
        sand: "#F6F4EF",
        ink: "#1A1A1A",
        mute: "#6B7280",
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
      maxWidth: { container: "1240px" },
      boxShadow: {
        card: "0 1px 2px rgba(15,30,61,0.04), 0 8px 24px rgba(15,30,61,0.06)",
        cardHover:
          "0 2px 4px rgba(15,30,61,0.06), 0 18px 40px rgba(15,30,61,0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { fadeUp: "fadeUp 0.7s ease-out both" },
    },
  },
  plugins: [],
};

export default config;
