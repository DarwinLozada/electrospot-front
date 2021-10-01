module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        xs: '575px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
      },
      colors: {
        brandColor100: '#e6f5f2',
        brandColor200: '#c1e8e3',
        brandColor300: '#93dbd4',
        brandColor400: '#69cfc8',
        brandColor500: '#44c2be',
        brandColor600: '#23b5b5',
        brandColor700: '#148b8f',
        brandColor800: '#096269',
        brandColor900: '#033c42',
        brandColor1000: '#01181c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
