/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1BBFD7',
        lightBlue: '#60D2E3',
        darkRed: '#E9597C',
      },
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1440px",
      '2xl':"1600px"
    },
    fontFamily:{
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
