const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const dirApp = path.join(__dirname, 'src');
const isPro = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    main: "app.js",

  },
  resolve: {
    modules: [
      'node_modules',
      dirApp
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    //publicPath: "/js/",
    filename: '[name].bundle.js'
  },
  devtool: isPro? false:'eval',
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        },
        {
          test: /\.coffee$/,
          use: [ 'coffee-loader' ]
        },
        {
          test: /\.pug$/,
          use: [ 'pug-loader' ]
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: 9000,
    host: "0.0.0.0",
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Inicio | Luna',
      inject: true,
      hash: true,
      template: './src/pug/index.pug', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

var cfg = [];
var rules = [];

if (isPro) {
  cfg = [
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false,
         screw_ie8: true,
         conditionals: true,
         unused: true,
         comparisons: true,
         sequences: true,
         dead_code: true,
         evaluate: true,
         if_return: true,
         join_vars: true,
       },
       output: {
         comments: false,
       },
     }),
     new ExtractTextPlugin({
       filename: 'css/[name].css',
       disable: false,
       allChunks: true
     })
   ]
  rules = [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: ['css-loader','sass-loader'],
        publicPath: '/css/'
      })
    }
  ]
}else{
  cfg = [
    new webpack.HotModuleReplacementPlugin()
  ]
  rules = [
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader"}
      ]
    }
  ]
}

config.plugins = config.plugins.concat(cfg)
config.module.rules = config.module.rules.concat(rules)

module.exports = config
