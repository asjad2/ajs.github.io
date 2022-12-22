/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/Images/reactbackground.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif;",
        Roboto: "'Roboto', sans-serif;",
      },
    },
  },
  plugins: [],
};
