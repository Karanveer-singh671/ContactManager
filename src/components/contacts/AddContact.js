import React, { Component } from 'react';
// form and each input has own state
import { Consumer } from '../../context';
import uuid from 'uuid';
export default class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;
		const newContact = {
			id: uuid(),
			name,
			email,
			phone
		};
		dispatch({ type: 'ADD_CONTACT', payload: newContact });
		// clear state
		this.setState({
			name: '',
			email: '',
			phone: ''
		});
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
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											// [e.target.name] will access the value in name i.e name
											name="name"
											className="form-control form-control-lg"
											placeholder="Enter Name..."
											value={name}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											name="email"
											// [e.target.name] will access the value in name i.e email
											className="form-control form-control-lg"
											placeholder="Enter Email..."
											value={email}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											type="text"
											name="phone"
											className="form-control form-control-lg"
											placeholder="Enter phone..."
											value={phone}
											onChange={this.onChange}
										/>
									</div>
									<input type="submit" value="Add Contact" className="btn btn-light btn-block" />
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
