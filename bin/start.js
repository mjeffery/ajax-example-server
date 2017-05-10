const build = require('./build-client')
const startServer = require('./start-server')

build().then( startServer ) 
