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
          50: colors.emerald[50],
          100: colors.emerald[100],
          200: colors.emerald[200],
          300: colors.emerald[300],
          400: colors.emerald[400],
          500: colors.emerald[500],
          600: colors.emerald[600],
          700: colors.emerald[700],
          800: colors.emerald[800],
          900: colors.emerald[900],
          950: colors.emerald[950],
        },
      },
    },
  },
  plugins: [],
};
