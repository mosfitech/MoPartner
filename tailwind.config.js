/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#00AA13",
        50: "#63FF74",
        100: "#4EFF62",
        200: "#25FF3E",
        300: "#00FC1C",
        400: "#00D318",
        500: "#00AA13",
        600: "#00720D",
        700: "#003A06",
        800: "#000200",
        900: "#000000",
        950: "#000000",
      },
      gray: {
        DEFAULT: "#E7EAED",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FEFEFE",
        500: "#E7EAED",
        600: "#C7CED5",
        700: "#A7B2BD",
        800: "#8796A5",
        900: "#687A8B",
        950: "#5C6C7B",
      },
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      pink: "#EBA49C",
      fanta: "#FD4393",
      yellow: "#F9C449"
    },
  },
  plugins: [],
};
