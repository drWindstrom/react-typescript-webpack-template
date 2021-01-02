const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // Babel config for development
          presets: [
            "@babel/preset-env", 
            "@babel/preset-typescript",
            ["@babel/preset-react", {
              runtime: "automatic"
            }],
          ],
          plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            "react-refresh/babel",
          ]
        }
      },
    ],
  },
});