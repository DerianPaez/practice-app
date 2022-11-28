/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        white: "#ffffff",
        gray: "#c4c4c4",
      },
      gridTemplateColumns: {
        header: "max-content max-content",
        nav: "repeat(4, max-content)",
      },
    },
  },
  plugins: [],
};
