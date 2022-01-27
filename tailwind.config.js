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
      backgroundImage: {
        "no-stream":
          "linear-gradient(to bottom, rgba(24,29,83,100), rgba(255,255,255,0)), url('./src/assets/planning/NoStream.webp')",
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
