/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#18181B",
        border: "#27272A",
        primary: {
          DEFAULT: "#2563EB",
          hover: "#3B82F6",
        },
        text: {
          DEFAULT: "#FAFAFA",
          secondary: "#A1A1AA",
        },
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-title": ["60px", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-subtitle": ["30px", { lineHeight: "1.3", fontWeight: "500" }],
        "section-title": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["15px", { lineHeight: "1.5" }],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
