const themeDir = __dirname;

module.exports = {
  plugins: {
    tailwindcss: {
      config: themeDir + '/tailwind.config.js'
    },
    autoprefixer: {},
  }
}