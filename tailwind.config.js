/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        sans2: ['Barlow', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#F5F8FA',
          200: '#DADADA',
          600: '#999999',
          700: '#47585B',
        },
        yellow: {
          20: '#FFBA0880',
        },
      },
      backgroundImage: {
        hero: "url('/background.png')",
      },
    },
  },
  plugins: [],
}
