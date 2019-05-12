const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENTRY_POINT = path.resolve(__dirname, 'client/index.jsx');

const OUTPUT_DIR = path.resolve(__dirname, 'public');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIR,
  },
  devtool: 'source-map',
  mode: isProd ? 'production' : 'development',
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
  // plugins: isProd
  //   ? [
  //       new CompressionPlugin({
  //         test: /\.js(\?.*)?$/i,
  //       }),
  //       new BundleAnalyzerPlugin(),
  //     ]
  //   : [],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'airbnb'],
        },
      },
    ],
  },
};
