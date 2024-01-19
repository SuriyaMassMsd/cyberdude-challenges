/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./create.html",
    "login.html",
    "./assets/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Mynerve", "cursive"],
      book: ["Angkor", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
