/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Title: ['Playfair Display', 'serif'],
        desc: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#233000',
        secondary: '#FFF671',
        third: '#9CAA00',
        descText: '#4D4D4D',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
