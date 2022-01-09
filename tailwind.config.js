module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [{ pattern: /grid-cols-\d/ }],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          150: "#D7C7FF",
          650: "#6b13d4",
          750: "#53377C",
          775: "#340094",
          850: "#2C154C",
          950: "#130623",
        },
      },
      screens: {
        "3xl": "1920px",
      },
    },
    fontFamily: {
      EarwigFactory: ["EarwigFactory", "helvetica"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
