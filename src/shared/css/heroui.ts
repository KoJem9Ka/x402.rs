import { heroui } from '@heroui/react';


export default heroui({
  addCommonColors: true,
  themes: {
    light: {
      extend: 'light',
      colors: {
        secondary: {
          foreground: '#fff',
          DEFAULT: '#00BBA7',
          50: '#F0FDFA',
          100: '#CBFBF1',
          200: '#96F7E4',
          300: '#46ECD5',
          400: '#00D5BE',
          500: '#00BBA7',
          600: '#009689',
          700: '#00786F',
          800: '#00786F',
          900: '#022F2E',
        },
      },
    },
    dark: {
      extend: 'dark',
      colors: {
        secondary: {
          foreground: '#fff',
          DEFAULT: '#00D5BE',
          50: '#022F2E',
          100: '#00786F',
          200: '#00786F',
          300: '#009689',
          400: '#00BBA7',
          500: '#00D5BE',
          600: '#46ECD5',
          700: '#96F7E4',
          800: '#CBFBF1',
          900: '#F0FDFA',
        },
      },
    },
  },
});
