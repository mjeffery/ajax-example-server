const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )

app.use( '/', express.static( path.join( __dirname, 'public') ) )
app.use( '/api', require('./routes/api') )

module.exports = app
