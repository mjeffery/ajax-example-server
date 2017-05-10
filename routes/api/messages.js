const Router = require('express').Router

const storage = require('../../storage')
const isLoggedIn = require('../../isLoggedIn')

let messages = new Router();

messages.get('/messages', (req, res) => {
	res.json( storage.messages )
})

messages.post('/messages', isLoggedIn, (req, res) => {
	let id = storage.nextMessageId++
	let text = req.body.message || ''

	let message = {
		id,
		text,
		user: req.user.name,
		timestamp: new DateTime()
	}

	storage.messages.push(message)

	res.json(message)
})

module.exports = messages;
