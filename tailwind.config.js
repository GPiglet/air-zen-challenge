/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
    fontFamily: {
      'lato': ['Lato', 'Arial'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '0'
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "100%",
          },
          "@screen 2xl": {
            maxWidth: "100%",
          },
          "@screen 3xl": {
            maxWidth: "1500px",
          },
        },
      });
    },
  ],
}
