import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#06100f",
          950: "#06100f",
          900: "#0b1817",
          800: "#0f1f1e",
          700: "#173030",
        },
        surface: {
          DEFAULT: "#0f1f1e",
          raised: "#142928",
        },
        gold: {
          DEFAULT: "#14b8a6",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        crimson: {
          DEFAULT: "#fb7185",
          400: "#fecdd3",
          500: "#fb7185",
          600: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgb(20 184 166 / 0.45)",
        "glow-crimson": "0 0 40px -8px rgb(251 113 133 / 0.45)",
        cinema: "0 24px 60px -20px rgb(0 0 0 / 0.8)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
        "cinema-spotlight":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgb(20 184 166 / 0.14), transparent 70%)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
} satisfies Config;

export default config;
