/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        my: "0.2rem",
      },
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
      },
      keyframes: {
        getfill: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(200%)" },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeOut: {
          "0%": { opacity: "0", transform: "translate(-50%,0)" },
          "100%": { opacity: "1", transform: "translate(-50%,40px)" },
        },
        spring: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "60%": { transform: "translateX(-4%)" },
          "80%": { transform: "translateX(2%)" },
          "100%": { transform: "translate(0%)", opacity: "1" },
        },
        springout: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "40%": { transform: "translateX(2%)", opacity: "1" },
          "80%": { transform: "translateX(-5%)", opacity: "1" },
          "100%": { transform: "translate(100%)", opacity: "0" },
        },
      },
      animation: {
        getfill: "getfill 2s ease-in-out infinite",
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
        fadeOut: "fadeOut 0.5s ease-in-out normal both",
        spring: "spring 0.8s ease-in-out normal both",
        springout: "springout 0.8s ease-in-out normal both",
      },
    },
  },
  plugins: [],
};
