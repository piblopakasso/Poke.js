const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: "single",
    usedExports: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].[contenthash].bundle.js.map",
      exclude: [/vendors|runtime/],
    }),
  ],
});
