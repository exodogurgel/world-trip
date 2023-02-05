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
          600: '#999999',
          700: '#47585B',
        },
      },
    },
  },
  plugins: [],
}
