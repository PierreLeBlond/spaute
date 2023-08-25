/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '-4px 4px',
        inner: 'inset -4px 4px'
      }
    }
  },
  plugins: []
};
