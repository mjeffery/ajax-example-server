const Router = require('express').Router

const storage = require('../../storage')
const generateToken = require('../../generateToken')
const isLoggedIn = require('../../isLoggedIn')

let users = new Router()

users.get('/users', (req, res) => {
	publicUsers =  storage.users.map( user => ({ id: user.id, name: user.name }) ) 
	res.json(publicUsers)
})

users.post('/signup', (req, res) => {
	console.log(req.body) 
	let { name, secret } = req.body

	/*
	if( !isValidName(name) ) {

	}
	if( !isValidSecret(secret) ) {

	}
	*/
	
	let id = storage.nextUserId++
	let user = { id, name, secret, token: false }

	storage.users.push(user)

	res.json(user)
})

users.post('/authenticate', (req, res) => {
	let { name, secret } = request.body

	for(let user of storage.users) {
		if(user.name == name && user.secret == secret) {
			let token = generateToken()
			user.token = token

			res.json({ token })
			return
		}
	}

	res.sendStatus(401)
})

users.get('/deauthenticate', isLoggedIn, (req, res) => {
	let { token } = req.query

	for(let user of storage.users) {
		if(user.token == token) {
			user.token = false

			res.sendStatus(200)
			return
		}
	}

	res.sendStatus(404)
})

module.exports = users
