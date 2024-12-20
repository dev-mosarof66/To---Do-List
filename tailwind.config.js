/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ["Kanit", "serif"],
        'roboto': ["Roboto", "serif"]
      },
      screens: {
        'xs': '320px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

