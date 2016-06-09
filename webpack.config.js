var LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = [{
  cache: true,
  entry: {
    "apiCacher": "./src/index.js",
    "example": "./src/example.js"
  },
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  plugins: [
    new LiveReloadPlugin({
      port: 36000
    })
  ],
  externals: {},
  module: {
    loaders: []
  }
}];
