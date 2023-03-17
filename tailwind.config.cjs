/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          input_light: "hsl(0, 0%, 52%)",
          bg_light: "hsl(0, 0%, 98%)",
        },
        blue: {
          text_light: "hsl(200, 15%, 8%)",
          dark_bg: "hsl(207, 26%, 17%)",
          elements_dark: "hsl(209, 23%, 22%)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
