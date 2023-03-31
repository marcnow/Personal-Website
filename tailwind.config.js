module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mb: {max: '580px'},
      // => @media (max-width: 580px) { ... }
      lp: {max: '1080px'},
      // => @media (max-width: 1080px) { ... }
      nav: {max: '768px'},
      // => @media (max-width: 1080px) { ... }
    },
    textColor: {
      primary: '#171E27',
      secondary: '#0e141b',
      thirdColor: '#ff5277',
    },
  },
  plugins: [],
};
