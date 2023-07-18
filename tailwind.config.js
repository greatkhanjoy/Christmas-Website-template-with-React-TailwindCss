/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#282525",
        secondary: "#5D5656",
        secondaryLight: "#918889",
        red: "#DC3845",
        redAlt: "#D42B39",
        darkBg: "#251819",
        darkText: "#C2BDBD",
        darkAlt: "#2F2223",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      fontSize: {
        base: "14px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "36px",
        "4xl": "40px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "978px",
    },
  },
  plugins: [],
};
