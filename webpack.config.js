const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const dirApp = path.join(__dirname, 'src');
const isPro = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    main: "app.js",
    vendor: ['react','react-dom']
  },
  resolve: {
    modules: [
      'node_modules',
      dirApp
    ],
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    //pathinfo: true,
    filename: "js/bundle.[name].js",
    publicPath: "/"
  },
  devtool: isPro? false:'eval',
  module: {
    rules: [
        {
          test: /\.js[x]?$/,
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      title: 'Inicio | Luna',
      template: './src/template/index.pug',
      filename: './index.html',
      favicon: './src/asset/favicon.ico',
      hash: true,
      minify:false,
      inject: 'body'
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
  ];
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
