const path = require('path')

module.exports = {
	dev: {
		host: '0.0.0.0',
		port: 8080,
		autoOpenBrowser: false,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/ocean/',
		cssSourceMap: false,
		proxyTable: {},
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
		useEslint: false,
		showEslintErrorsInOverlay: false,
		devtool: 'eval-source-map',
		cacheBusting: true,
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),
		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		devtool: '#source-map',
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		bundleAnalyzerReport: process.env.npm_config_report || process.argv[2] === 'report'
	}
}
