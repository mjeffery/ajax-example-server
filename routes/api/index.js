const Router = require('express').Router
const cors = require('cors')

let api = new Router();

api.use( cors() )
api.use( require('./../../authenticate') )
api.use( require('./messages') ) 
api.use( require('./users') )

api.options('*', cors() )

module.exports = api
