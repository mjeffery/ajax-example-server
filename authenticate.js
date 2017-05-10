const storage = require('./storage')

module.exports = (req, res, next) => {
	token = req.param('token')

	if(!token) {
		next();
	} else {
		for(let user of storage.users) {
			if(token == user.token) {
				req.user = user;
				break;
			}
		}

		next();
	}
}
