/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBG: "#f5f5f5",
        secondaryBG: "#55595d",
        primaryText: "#ddd",
        secondaryText: "#55595d",
        increaseKV: "#74c3b2",
        decreaseKV: "#255627",
      },
    },
  },
  plugins: [],
};
