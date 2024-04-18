/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: { enabled: true, content: ['./*.html']},
  // darkMode:false,
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FDB515",
        golden: "#f7ad0d",
        secondary: "#E6E7E9",
        black: "#000",
        white: "#fff",
      },
      screens: {
        sm: "480px",
      },
      content: {
        logo: "url('./images/cheetah_logo.png')",
      },
    },
  },
  plugins: [],
};
