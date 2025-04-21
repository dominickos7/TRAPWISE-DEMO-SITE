/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#4F6DF5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.5rem', '1.2'],
        '5xl': ['3rem', '1.2'],
        '6xl': ['3.75rem', '1.1'],
        '7xl': ['4.5rem', '1.1'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};