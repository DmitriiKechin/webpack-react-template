const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  target: 'browserslist',
  output: {
    filename: 'static/js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'static/assets/[hash][ext][query]',
    clean: true,
    path: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true,
            },
          },
        ],
      },
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 2,
      //         sourceMap: false,
      //         modules: false,
      //       },
      //     },
      //     'postcss-loader',
      //     'sass-loader',
      //   ],
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new CompressionPlugin({
      //! необходим NGINX для раздачи
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(html|css|ttf|eot|svg|js)$/,
      compressionOptions: { level: 11 },
      threshold: 1024,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      test: /\.(html|css|ttf|eot|svg|js)$/,
      // threshold: 1024,
      minRatio: 1,
    }),
  ],
  externals: {
    // react: 'React', //!Эта вышеприведенная конфигурация говорит веб-пакету не разрешать require('react')загрузку модуля npm, а вместо этого ожидать глобальную переменную (т.е. на windowобъекте) с именем React. Решение состоит в том, чтобы либо удалить эту часть конфигурации (чтобы React был связан с вашим javascript), либо загрузить среду React извне до того, как этот файл будет выполнен (чтобы он window.Reactсуществовал).
    //'react-dom': 'ReactDOM',
  },
});
