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
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js',
    // the entry point of our app
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
						plugins: ["react-hot-loader/babel"],
						presets: [["es2015", {"modules": false}], "react", "stage-0"],
						cacheDirectory: true
					}
				}
			]
		},
	]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
