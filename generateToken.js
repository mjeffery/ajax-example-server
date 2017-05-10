const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'

module.exports = (length=16) => {
	token = ''

	for(let i=0; i<16; i++) {
		let index = Math.floor( Math.random() * chars.length )
		token += chars.charAt(index)
	}

	return token
}
