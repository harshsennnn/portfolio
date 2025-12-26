/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Define the move and fade animation
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      // 2. Define the path of the meteor
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)", // Distance of travel
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}