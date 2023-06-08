/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vert': '#21A393',
        'bleu': '#0A073F',
        'jaune-normal': '#F6D25A',
        'jaune-clair': '#F8ECBE',
        'blanc': '#FFFFFF',
        'noir': '#000000',
      },
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1200px',
      'xl': '1700px',
    },
  },
  plugins: [],
}

