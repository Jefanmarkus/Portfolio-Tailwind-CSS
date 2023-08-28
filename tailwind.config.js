/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#334155",
        dark: "#083344",
      },
      screens: {
        "2xl": "1220px",
      },

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "25%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "blue",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(200) infinite alternate, blink 10s infinite",
        "spin-sl": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
