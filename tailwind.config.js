/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creamy: '#F3EAE3',
        grayish: 'hsl(228, 12%, 48%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        darkCyan: 'hsl(158, 36%, 37%)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif']
      }
    },
  },
  plugins: [],
}