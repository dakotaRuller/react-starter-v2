const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack = require('webpack');


const js = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

const sass = {
  test: /\.scss?$/,
  use: [
    "style-loader", // creates style nodes from JS strings
    "css-loader", // translates CSS into CommonJS
    "sass-loader" // compiles Sass to CSS, using Node Sass by default
  ]
};

const css = {
  test: /\.css?$/,
  use: [ 'style-loader', 'css-loader' ]
};

const images = {
  test: /\.(png|jpg|svg|gif)?$/,
  use: 'file-loader'
};


module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [js, sass, css, images]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      contexts: path.resolve(__dirname, 'src/contexts/'),
      scripts: path.resolve(__dirname, 'src/scripts/'),
      styles: path.resolve(__dirname, 'src/styles'),
      src: path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Production',
      template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html'
    })
  ]
};
