const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const dirApp = path.join(__dirname, 'src');
const isPro = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    main: 'app.js',
=======
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const dirApp = path.join(__dirname, 'src');
const isPro = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    main: "app.js",
>>>>>>> 9f53b5980547718f7cbf6c9c59bff411e3fc6a07
  },
  resolve: {
    modules: [
      'node_modules',
<<<<<<< HEAD
      dirApp,
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  devtool: isPro ? false : 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.coffee$/,
        use: ['coffee-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 9000,
    host: '0.0.0.0',
    compress: true,
    stats: 'errors-only',
    open: true,
=======
      dirApp
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: 'js/[name].bundle.js'
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
>>>>>>> 9f53b5980547718f7cbf6c9c59bff411e3fc6a07
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Inicio | Luna',
      inject: true,
      hash: true,
      template: './src/pug/index.pug', // Load a custom template (ejs by default see the FAQ for details)
    }),
<<<<<<< HEAD
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

let cfg = [];
let rules = [];

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
      allChunks: true,
    }),
  ];
=======
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
>>>>>>> 9f53b5980547718f7cbf6c9c59bff411e3fc6a07
  rules = [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
<<<<<<< HEAD
        loader: ['css-loader', 'sass-loader'],
        publicPath: '/css/',
      }),
    },
  ];
} else {
  cfg = [
    new webpack.HotModuleReplacementPlugin(),
  ];
=======
        loader: ['css-loader','sass-loader'],
        publicPath: '/css/'
      })
    }
  ]
}else{
  cfg = [
    new webpack.HotModuleReplacementPlugin()
  ]
>>>>>>> 9f53b5980547718f7cbf6c9c59bff411e3fc6a07
  rules = [
    {
      test: /\.scss$/,
      use: [
<<<<<<< HEAD
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ],
    },
  ];
}

config.plugins = config.plugins.concat(cfg);
config.module.rules = config.module.rules.concat(rules);

module.exports = config;
=======
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
>>>>>>> 9f53b5980547718f7cbf6c9c59bff411e3fc6a07
