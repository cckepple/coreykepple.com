const path = require('path');
const webpack = require('webpack');

const config = {
	devtool: 'source-map',
	entry: [
		'./src' ///index'
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
		publicPath: '/build/',
		sourceMapFilename: 'bundle.js.map',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'src')
		}]
    },
    
	performance: {
		hints: false
	}
};

// if (process.env['NODE_ENV'] === 'dev') {
// 	config.entry = [
// 		'react-hot-loader/patch',
// 		'webpack-hot-middleware/client',
// 		'./src/index'
// 	];
// 	config.plugins.push(new webpack.HotModuleReplacementPlugin());
// }
// else {
// 	if (process.env['NODE_ENV'] === 'prod') {
// 		// config.plugins.push(new webpack.optimize.UglifyJsPlugin({
// 		// 	compressor: {
// 		// 		warnings: false
// 		// 	}
// 		// }));
// 	}
// }

module.exports = config;
