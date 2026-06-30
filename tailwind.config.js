/** @type {import('tailwindcss').Config} */
// Paleta dark premium. A cor de acento é controlada por uma CSS variable
// (--accent) injetada a partir do siteConfig, então mudar `accentColor` em
// src/config.js atualiza automaticamente todas as classes `accent` do site.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#0A0A0A",
          800: "#141414",
          700: "#1C1C1C",
          600: "#262626",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease forwards",
        kenburns: "kenburns 8s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
