/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary':'#55DAFF',
        'introduce':'#3C4547',
        'skills':'#454C4E',
        'projects':'#3C4547',
        'certificates':'#40494B',
      },
      fontFamily:{
        'Avocados':['Avocados','sans-serif']
      }
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    // ...
  ],
}
