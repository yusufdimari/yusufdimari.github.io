const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1024px",
      },
      colors: {
        "black-1": " hsl(240, 2%, 13%)",
        "black-2": "#0d1117",
        "black-1": "#010409",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "white-3": "hsl(0, 0%, 96%)",
        gold: "#ffd182",
        "gold-2": "rgb(245 158 11)",
      },
    },
  },
  plugins: [],
};
