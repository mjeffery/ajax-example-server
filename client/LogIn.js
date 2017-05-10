import React from 'react'
import { post } from './ajax'
import UserForm from './UserForm'

export default class UserActionModal extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showModal: false
		}

		this.submitting = false
		this._pendingRequests = []
	}

	doAction() {
		return new Promise( (resolve, reject) => {
			this._pendingRequests.push( { resolve, reject })	
			this.setState({ showModal: true })
		})
	}

	handleActionSuccess( user ) {
		this._pendingRequests.forEach( ({ resolve }) => resolve(user) )
		this._pendingRequests = []

		this.setState({ showModal: false })
	}

	handleModalClose() {
		this._pendingRequests.forEach( ({ reject }) => reject() )
		this._pendingRequests = []

		this.setState({ showModal: false })
	}

	handleSubmit(user) {
		let { action: url } = this.props

		if(!this.submitting) {
			this.submitting = true
			post(url, user)
				.then( user => this.handleActionSuccess(user) )
				.catch( err => console.log(err) )
				.finally( () => { this.submitting = false } )
		}
	}

	render() {
		return <UserForm onSubmit={this.handleSubmit} submitLabel="Login" />
	}
}
