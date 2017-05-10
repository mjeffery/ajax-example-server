const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'client/index.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'message-board.js'
	},
	module: {
		rules: [{
			test: /.js$/,
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: [ 'last 2 versions' ]
						},
						useBuiltIns: true,
						modules: false
					}],
					'react'
				]
			}
		}]
	}
}
