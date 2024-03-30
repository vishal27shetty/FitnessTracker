/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'txt':'#3f3a5e',
      'shade': {
        100: '#edecf6',
        200: '#e9e7f4',
        300: '#e0ddef',
        400: '#dbd9ed',
        500: '#d7d4ea',
        600: '#d2cfe8',
        700: '#d2cfe8',
        800: '#a8a6ba',
        900: '#9391a2',
        950: '#2a292e',
      },
    },
    extend: {},
  },
  plugins: [],
}