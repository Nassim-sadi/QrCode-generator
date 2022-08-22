/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/input.css', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
