/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Metropolitan', 'sans-serif'], // Fuente para títulos de impacto
        'body': ['Vicenza', 'serif'],           // Fuente para textos descriptivos
      },
      colors: {
        'zetage-red': '#E11D48',
        'zetage-yellow': '#FACC15',
        'zetage-black': '#0A0A0A',
      },
    },
  },
  plugins: [],
}