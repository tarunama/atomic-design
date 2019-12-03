const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/")
      }
    }
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv"
    }
  }
};
