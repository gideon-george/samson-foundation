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
        // Deep hope-green — growth, renewal (primary)
        forest: {
          50: "#EEF6F2",
          100: "#D6EAE0",
          200: "#ADD5C1",
          300: "#7CBA9D",
          400: "#4A9A76",
          500: "#2B8059",
          600: "#1B6B4C",
          700: "#16573E",
          800: "#124531",
          900: "#0D3425",
          950: "#082B1C",
        },
        // Warm amber/gold — generosity, warmth (CTAs)
        gold: {
          50: "#FDF8EB",
          100: "#FAEEC9",
          200: "#F4DC8E",
          300: "#EDC754",
          400: "#E0A526",
          500: "#C98F1B",
          600: "#A87114",
          700: "#865514",
          800: "#6F4517",
          900: "#5F3A18",
        },
        // Muted terracotta/clay — warm accents, used sparingly
        clay: {
          400: "#D08862",
          500: "#C06B45",
          600: "#A85535",
          700: "#8B432B",
        },
        // Cream backgrounds + deep charcoal-green ink
        cream: "#FBF8F1",
        parchment: "#F4EEDF",
        ink: "#1A2621",
        stone: "#6B6A5F",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
