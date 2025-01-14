import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      height: {
        '6-rem': '6rem',
        '8-rem': '8rem',
        '10-rem': '10rem',
      },
      width: {
        '6-rem': '6rem',
        '8-rem': '8rem',
        '10-rem': '10rem',
      },
      colors: {
        white: '#FFF0E5',
        black: '#000000FF',
        primary: '#AFBFAD',
        secondary: '#3eb7e5',
        tertiary: '#d3d3e1'
      },
    },
  },
  plugins: [],
}