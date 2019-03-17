import React, { Component } from 'react';
// form and each input has own state
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';
import TextInputGroup from './../layout/TextInputGroup';
import axios from 'axios';
export default class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(`https://jsonplaceholder.typicode/users/${id}`);

		const contact = res.data;

		this.setState({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
	}

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;

		// error check
		if (name === '') {
			// error object with key name and val string
			this.setState({ errors: { name: 'Name is Required' } });
			return;
		}
		if (email === '') {
			// error object with key email and val string
			this.setState({ errors: { email: 'email is Required' } });
			return;
		}
		if (phone === '') {
			// error object with key name and val string
			this.setState({ errors: { phone: 'Phone is Required' } });
			return;
		}
		const updateContact = {
			name,
			email,
			phone
		};

		const { id } = this.props.match.params;

		const res = await axios.put(`https://jsonplaceholder.typicode/users/${id}`, updateContact);
		dispatch({
			type: 'UPDATE_CONTACT',
			payload: res.data
		});

		// clear state
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		this.props.history.push('/');
	};

	// e is object event passed
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header">Update Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name"
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>

									<TextInputGroup
										label="Email"
										name="email"
										type="email"
										placeholder="Enter Email"
										value={email}
										onChange={this.onChange}
										// error will not display if none add so can render if so
										error={errors.email}
									/>

									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter Phone"
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>

									<input type="submit" value="Update Contact" className="btn btn-light btn-block" />
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
