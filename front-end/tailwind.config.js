/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    colors:{
      'dark-blue' : '#004079',
      'soft-dark-blue' : '#3273BA',
      'light-blue' : '#6192BF',
      'white-blue' : '#DEEFF9',
      'white-color' : '#fff',
      'accent-color' : '#3476B9'
    },
    fontFamily:{
      Poppins:['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

