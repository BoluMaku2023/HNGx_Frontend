/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black: "#fff",
      },
      textColor: {
        white: "#000",
        black: "#000",
        red: "#E50914",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"], // Header titles and button font
      },
    },
  },
  plugins: [],
};
