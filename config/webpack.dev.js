const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(scss|sass)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devServer: {
    client: {
      overlay: {
        warnings: false,
      },
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3000,
    hot: true, // Включает автоматическую перезагрузку страницы при изменениях
  },
  devtool: 'cheap-module-source-map',
});
