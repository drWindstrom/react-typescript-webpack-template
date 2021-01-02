const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'public/index.html',
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    // Leave off the extension when importing, order determines resolve order
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      // Babel-loader 
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Load images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      // Load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
};
