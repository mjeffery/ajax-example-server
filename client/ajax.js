export function ajax(params) {
	let { method, url, headers, body } = params;
	
	return new Promise( (resolve, reject) => {
		let xhr = new XMLHttpRequest();
    
		xhr.open(method, url);
		xhr.onload = e => {
			if(xhr.status  == 200) {
				resolve(xhr.response)
			} else if(xhr.status >= 400) {
				reject({ 
					status: xhr.status,
					message: xhr.statusText,
					body: xhr.response
				})
			}
		}
    
		for( let [header, value] of Object.entries(headers || {}) ) {
			xhr.setRequestHeader(header, value)
		}
    
		xhr.send(body);
	})	
}

export function get(url) {
	return ajax({ method: 'GET', url })
		.then( body => JSON.parse(body) )
}

export function post(url, data) {
	return ajax({ 
		method: 'POST', 
		url, 
		headers: { 'Content-Type': 'application/json'}, 
		body: JSON.stringify(data) 
  })
}

export default { ajax, get, post }
