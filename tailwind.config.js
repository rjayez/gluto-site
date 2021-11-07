module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          150: "#D7C7FF",
          750: "#53377C",
          950:"#130623"
        }
      }

    },
    fontFamily:{
      EarwigFactory : ["EarwigFactory", "helvetica"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
