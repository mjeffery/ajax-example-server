const webpack = require('webpack')
const config = require('../webpack.config')

function build() {
	return new Promise( (resolve, reject) => {
		webpack(config).run( (err, stats) => {
			if(err) {
				reject(err)
			} else {
				console.info( stats.toString() )
				resolve()
			}
		})
	})
}

module.exports = build;

if(require.main === module) build()
