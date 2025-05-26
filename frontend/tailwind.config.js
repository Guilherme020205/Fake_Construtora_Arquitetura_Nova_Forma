/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      colors: {
        wattle: {
          50: "#f8f9ed",
          100: "#eff2cf",
          200: "#e3e6a2",
          300: "#d0d25d",
          400: "#cac645",
          500: "#bab238",
          600: "#a08f2e",
          700: "#806c28",
          800: "#6c5827",
          900: "#5d4a26",
          950: "#352813",
        },
      },
    },
  },
  plugins: [],
};
