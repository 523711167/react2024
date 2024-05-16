const path = require('path')

module.exports = {
	//webpack解析的入口文件
	entry: './src/index.js',
	// mode: 'development',
	mode: 'production',
	resolve: {
		alias: {
			'@js': path.resolve(__dirname, 'src/js/'),
			'@images': path.resolve(__dirname, 'src/images/')
		}
	},
	module: {}
}
