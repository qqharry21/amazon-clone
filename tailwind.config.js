/** @format */

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'false',
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        main: { light: '#232f3e', DEFAULT: '#131921' },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
