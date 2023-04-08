module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
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
        },
        secondary: {
          50: "#FCE9FD",
          100: "#F9D7EF",
          200: "#F3B4D3",
          300: "#EE91B7",
          400: "#E86D9B",
          500: "#E34A7F",
          600: "#D4215C",
          700: "#A4194B",
          800: "#731239",
          900: "#420A28",
        },
      },
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
