const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src', 'index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: path.resolve(__dirname, '../src'),
  output: { publicPath: '/' },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file
      template: path.join(__dirname, '../src', 'index.html'), // Данный html будет использован как шаблон
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src', 'favicon'),
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
