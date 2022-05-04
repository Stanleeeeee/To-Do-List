/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.MODE_ENV === 'production' ? 'production' : 'development',
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
          test: /\.html$/i,
          use: "html-loader",
        },
        {
          test: /\.(js)$/,
          use: "babel-loader"
        }
    ],
  },
};