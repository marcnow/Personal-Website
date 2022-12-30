module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mb': {'max': '480px'},
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}
