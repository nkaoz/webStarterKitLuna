import webpack from 'webpack';
<<<<<<< HEAD

const isPro = process.env.NODE_ENV === 'production';
const config = {
  output: {
    filename: '[name].bundle.js',
=======
const isPro = process.env.NODE_ENV == 'production';
const config = {
  output: {
    filename: '[name].bundle.js'
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
<<<<<<< HEAD
        use: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
if (isPro) {
=======
        use: 'babel-loader'
      }
    ]
  },
  plugins: []
}
if(isPro){
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
  config.plugins.push(
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
<<<<<<< HEAD
    }),
  );
=======
    })
  )
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
}

module.exports = config;
