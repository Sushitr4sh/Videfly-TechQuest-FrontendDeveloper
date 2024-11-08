/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        1366: "1366px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hoverable", "@media (hover: hover)");
    },
  ],
};
