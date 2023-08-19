/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '35rem',
        '155': '55rem',
        '170': '70rem',
      },
      height:{
        '153': '53rem',
      }
      
    },
  },
  plugins: [],
}

