const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");
const dirApp = path.join(__dirname, 'src');

module.exports = {
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
  devtool: 'eval',
  module: {
    rules: [
      /*{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','sass-loader'],
          publicPath: '/css/'
        })
      },*/
        {
          test: /\.scss$/,
          use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        },
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
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.optimize.UglifyJsPlugin({
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
    }),*/
    new HtmlWebpackPlugin({
      title: 'Inicio | Luna',
      inject: true,
      hash: true,
      template: './src/pug/index.pug', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
