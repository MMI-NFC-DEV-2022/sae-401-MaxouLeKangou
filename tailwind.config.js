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
      light_gray: '#1F1F1F',
      blue: '#68ADFD',
      yellow: '#F2CA3D',
    },
    extend: {}
  },
  plugins: []
}
