module.exports = {
  publicPath: '/profile-page/',
  css: {
    loaderOptions: {
      sass: {
        prependData: [
          `@import "@/sass/variables.sass"`,
          `@import "@/sass/mixins.sass"`
        ].join('\n')
      }
    }
  }
}
