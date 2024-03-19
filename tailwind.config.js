/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      gray: '#121212',
      blue: '#68ADFD'
    },
    extend: {}
  },
  plugins: []
}
