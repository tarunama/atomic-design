const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  devServer: {
    public: 'localhost',
    host: '0.0.0.0',
    port: '8082'
  }
}
