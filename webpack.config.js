// const path = require('path');
// const webpack = require('webpack');

// const config = {
// 	devtool: 'source-map',
// 	entry: [
// 		'./src' ///index'
// 	],
// 	output: {
// 		path: path.resolve(__dirname, './public/build'),
// 		filename: 'bundle.js',
// 		publicPath: '/public/build/',
// 		sourceMapFilename: 'bundle.js.map',
// 	},
// // 	module: {
// 		loaders: [{
// 			test: /\.js$/,
// 			loaders: ['babel-loader'],
// 			include: path.join(__dirname, 'src')
// 		}]
// 	},
// };

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],

  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: 'bundle.js',
    publicPath: '/',
    sourceMapFilename: 'bundle.js.map',
  },

  devtool: 'inline-source-map',

  module: {
	
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", {"modules": false}], "react", "stage-0"],
              cacheDirectory: true
            }
          }
        ]
      },
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ]
};
