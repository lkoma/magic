const utils = require('./utils');
// const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
// const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap;

module.exports = {
	loaders: utils.cssLoaders({
		sourceMap: false,
		extract: isProduction
	}),
	preserveWhitespace: false,
	modules: true,
	localIdentName: '[name]--[local]--[hash:base64:5]',
	importLoaders: true
	// cssSourceMap: sourceMapEnabled,
	// cacheBusting: config.dev.cacheBusting,
	// transformToRequire: {
	// 	video: ['src', 'poster'],
	// 	source: 'src',
	// 	img: 'src',
	// 	image: 'xlink:href'
	// }
}
