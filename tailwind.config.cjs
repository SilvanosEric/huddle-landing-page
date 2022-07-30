/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-violet": "hsl(257, 40%, 49%)",
        "p-soft-magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        headings: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
