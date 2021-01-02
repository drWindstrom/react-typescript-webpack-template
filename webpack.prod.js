const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // Babel config for production
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
          ]
        }
      },
    ],
  },
 });