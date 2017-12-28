const utils = require('./utils');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const portfinder = require('portfinder');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({ sourceMap: false })
	},
	// cheap-module-eval-source-map is faster for development
	devtool: 'inline-eval-cheap-source-map',

	// these devServer options should be customized in /config/index.js
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: true,
		hot: true,
		compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
			poll: config.dev.poll,
		}	
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),
		new webpack.NamedModulesPlugin(),
		new CaseSensitivePathsPlugin(),
		new WatchMissingNodeModulesPlugin(resolve('node_modules')),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin(),
		new DashboardPlugin()
	].concat(Object.keys(utils.entries).map(name =>
		// generate dist index.html with correct asset hash for caching.
		// you can customize output by editing /index.html
		// see https://github.com/ampedandwired/html-webpack-plugin
		(new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: 'index.html',
			jsPath: '/magic/',
			inject: true,
			chunks: [name],
			// depsHash: hash,
			hash: false,
			title: utils.entries[name].data.title || 'magic'
		}))
	))
})

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port;
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		}
		else {
			// publish the new Port, necessary for e2e tests
			process.env.PORT = port;
			// add port to devServer config
			devWebpackConfig.devServer.port = port

			// Add FriendlyErrorsPlugin
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
				},
				onErrors: config.dev.notifyOnErrorsn? utils.createNotifierCallback() : undefined
			}))
			resolve(devWebpackConfig)
		}
	})
})