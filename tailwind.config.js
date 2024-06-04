import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      colors: {
        primaryLight: colors.pink,
        primaryDark: colors.teal,
        success: colors.green,
        danger: colors.red,
        warning: colors.amber,
        info: colors.sky,

        bgPrimaryLight: colors.slate[100],
        bgPrimaryDark: colors.slate[800],
        bgSecondaryLight: "#ffffff",
        bgSecondaryDark: "#272A2D",

        textLight: colors.slate[800],
        textDark: colors.slate[100],
      },
    },
  },
  plugins: [],
};
