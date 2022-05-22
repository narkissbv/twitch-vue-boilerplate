const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  pages: {
    index: './src/main.js',
    broadcaster: './src/broadcaster.js'
  }
})
