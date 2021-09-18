module.exports = {
  mode: 'jit',
  purge: ["./pages//*.{js,ts,jsx,tsx}", "./components//*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        almost: 'calc(100vh - 96px)',
      },
      colors: {
        'seeturtle': {
          DEFAULT: '#003DD4',
          '50': '#BACEFF',
          '100': '#A1BCFF',
          '200': '#6E98FF',
          '300': '#3B73FF',
          '400': '#084FFF',
          '500': '#003DD4',
          '600': '#002EA1',
          '700': '#00206E',
          '800': '#00113B',
          '900': '#000208'
        },
        'lightblue': {
          DEFAULT: '#F764B2',
        },
        'lightred': {
          DEFAULT: '#6E98FF',
        },
        'dark90': {
          DEFAULT: "#000c29",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
};
