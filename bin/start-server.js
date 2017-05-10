const server = require('../server.js')

const PORT = process.env.PORT || 5000

function startServer() {
	server.listen( PORT, () => console.log(`example app is listening on port: ${PORT}`) )
}

module.exports = startServer;

if(require.main === module) startServer()
