import React, { Component } from 'react';
// form and each input has own state
export default class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
	};

	// e is object event passed
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone } = this.state;
		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
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
	}
}
