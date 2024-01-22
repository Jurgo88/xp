const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule("ico")
      .test(/\.(ico)$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 8192,
        name: "images/[name].[ext]",
      });
  },
});