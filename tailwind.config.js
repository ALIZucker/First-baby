/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'spanColor':'#6a6e5e',
        'footColor':'#525f6e',
      }
    },
  },
  plugins: [],
}
