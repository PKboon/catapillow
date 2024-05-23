import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primaryLight: colors.pink,
        primaryDark: colors.teal,
        success: colors.green,
        danger: colors.red,
        warning: colors.amber,
        info: colors.sky,
      },
    },
  },
  plugins: [],
};
