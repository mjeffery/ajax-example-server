import React from 'react'
import { get, post } from './ajax'
import UserActionModal from './UserActionModal'

export default class MessageBoard extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			messageText: '',
			users: null
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.sendMessage = this.sendMessage.bind(this)
	}

	componentDidMount() {
		get('api/messages')
			.then( messages => this.setState({ messages }) )
			.catch( err => console.log(err) )
	}

	sendMessage() {

	}

	handleChange(event) {
		this.setState({ messageText: event.target.value })
	}

	handleKeyPress(event) {
		if(event.key == 'Enter') {
			this.sendMessage()
		}
	}

	startLogIn() {
		
	}

	logOut() {
		get(`api/deauthenticate?token=${token}`)
			.then( () => this.setState({ user: null }) )
			.catch( err => console.log(err) )
	}

	render() {
		return (<div>
			<div className="message-list">
				{ this.state.messages.map( message => (
					<p>
						<b>{message.user}:</b>
						{message.text}
						<span>({message.timestamp})</span>
					</p>
				))}
			</div>
			<div className="add-message">
				<input value={this.state.messageText} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
				<button onClick={this.sendMessage}>send</button>
			</div>
			{ this.renderUserStatus() }
		</div>)
	}	

	renderUserStatus() {
		if(this.state.user) {
			return <div className="user-status">
				<span>Logged in as:</span> {this.state.user.name}
				<span>(<a onClick={this.logOut}>log out</a></span>
			</div>
		} else {
			return <div className="user-status">
				<a onClick={this.startLogIn}>log in</a>
			</div>
		}
	}
}
