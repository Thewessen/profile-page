module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/profile-page/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: [
          `@import "@/sass/variables.sass"`,
          `@import "@/sass/mixins.sass"`,
          `@import "@/sass/main.sass"`,
        ].join('\n'),
      },
    },
  },
}
