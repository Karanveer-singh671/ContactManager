import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import Consumer from '../../context';
import axios from 'axios';

// class components send props through this.props.__, where __ is the property in the app.js associated with the component
// can use this if lifecycle method or part of component but when create own method need to bind or could add constructor but easiest way is to turn to arrow function and this keyword available
class Contact extends Component {
	state = {
		showContactInfo: true
	};
	// mutate state use setState
	// onShowClick = (e) => {
	// 	this.setState({ showContactInfo: !this.state.showContactInfo });
	// };

	// if used backend then it would delete data from db with this request
	onDeleteClick = (id, dispatch) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => dispatch({ type: 'DELETE_CONTACT', payload: id }));
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{/* if want to add custom param to event bind with this and name of param */}
								{name}{' '}
								<i
									onClick={this.onShowClick}
									className="fas fa-sort-down"
									style={{ cursor: 'pointer' }}
								/>
								<i
									className="fas fa-times"
									style={{ cursor: 'pointer', float: 'right', color: 'red' }}
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
								/>
							</h4>
							{showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone:{phone}</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.PropTypes = {
	contact: PropTypes.object.isRequired
};
export default Contact;
