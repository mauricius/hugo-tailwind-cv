const themeDir = __dirname;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    themeDir + "/layouts/**/*.html",
    themeDir + "/content/**/*.html"
  ],
  safelist: [
    {
      /* required in order to define the color dynamically */
      pattern: /indigo/,
      variants: ['hover', 'dark']
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    }
  },
  plugins: [],
}

