import React from 'react'

export default class UserForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			secret: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		let { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleKeyPress(event) {
		if(event.key == 'Enter') {
			this.handleSubmit()
		}
	}

	handleSubmit() {
		let { onSubmit } = this.props
		if(onSubmit) {
			let { name, secret } = this.state
			onSubmit({ name, secret })
		}
	}

	render() {
		let { label: submitLabel } = this.props

		return <div>
			<div>
				<span className="label">Name</span>
				<input name="name" value={this.state.name} onChange={this.handleChange} />
			</div>
			<div>
				<span className="label">Password</span>
				<input name="secret" type="password" 
					   value={this.state.secret} 
					   onChange={this.handleChange} 
					   onKeyPress={this.handleKeyPress}
				/>
			</div>
			<button onClick={this.handleSubmit}>{ label || 'Submit' </button>
		</div>
	}
}
