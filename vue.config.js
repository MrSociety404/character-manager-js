module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('box-')
        }
        return options
      })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/styles.scss";`
      }
    }
  }
}