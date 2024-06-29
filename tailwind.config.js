/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#C4EAF2",
        secondary: "#69868C",
        white: "#F2F2F2",
        black: "#232226",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        /*     sans: ["Sofia", "sans-serif"], */
      },
    },
  },
  plugins: [],
};
