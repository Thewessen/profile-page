module.exports = {
  publicPath: '/profile-page/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/variables.sass"`
      }
    }
  }
}
