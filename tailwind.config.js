/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#eceefb',
        primary: '#833AB4',
        secondary: '#E8AA42',
        darkText: '#510020',
        dark: '#18191a',
      },
    },
  },
  plugins: [],
};
