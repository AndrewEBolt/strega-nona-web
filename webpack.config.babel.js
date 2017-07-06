// @flow

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
	entry: [
		'react-hot-loader/patch',
		'./src/client',
	],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
	},
	// context: path.resolve(__dirname, 'src'),
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.scss$/,
				use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
				}, {
					loader: 'sass-loader',
				}],
			},
		],
	},
	devtool: isProd ? false : 'source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		port: WDS_PORT,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
}