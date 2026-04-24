/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: { max: "840px" },
      mobile: { max: "480px" },
    },
    extend: {
      colors: {
        bg: "#f7f5f2",
        surface: "#fbfaf8",
        text: "#4e4e4e",
        line: "#e8e0d8",
        "line-strong": "#d9cdc2",
        success: "#24593a",
        error: "#8a2b2b",
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", "serif"],
        script: ['"Pinyon Script"', "cursive"],
        display: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        soft: "0 30px 70px rgba(78, 78, 78, 0.08)",
        topbar: "0 10px 30px rgba(78, 78, 78, 0.05)",
        pill: "0 4px 14px rgba(78, 78, 78, 0.05)",
      },
      keyframes: {
        heroEntrance: {
          "0%": { opacity: "0", transform: "translateY(42px) scale(0.985)" },
          "60%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marqueeSlide: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        heroEntrance: "heroEntrance 1.25s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marqueeSlide 80s linear infinite",
      },
    },
  },
  plugins: [],
};
