import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

// class components send props through this.props.__, where __ is the property in the app.js associated with the component
class Contact extends Component {
	render() {
		const { name, email, phone } = this.props.contact;
		return (
			<div className="card card-body mb-3">
				<h4>{name}</h4>
				<ul className="list-group">
					<li className="list-group-item">Email: {email}</li>
					<li className="list-group-item">Phone:{phone}</li>
				</ul>
			</div>
		);
	}
}

Contact.PropTypes = {
	contact: PropTypes.object.isRequired
};
export default Contact;
