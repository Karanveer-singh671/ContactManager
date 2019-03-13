import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

// class components send props through this.props.__, where __ is the property in the app.js associated with the component
// can use this if lifecycle method or part of component but when create own method need to bind or could add constructor but easiest way is to turn to arrow function and this keyword available
class Contact extends Component {
	state = {
		showContactInfo: true
	};
	// mutate state use setState
	onShowClick = (e) => {
		this.setState({ showContactInfo: !this.state.showContactInfo });
	};

	onDeleteClick = () => {
		this.props.deleteClickHandler();
	};

	render() {
		const { name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<div className="card card-body mb-3">
				<h4>
					{/* if want to add custom param to event bind with this and name of param */}
					{name} <i onClick={this.onShowClick} className="fas fa-sort-down" style={{ cursor: 'pointer' }} />
					<i
						className="fas fa-times"
						style={{ cursor: 'pointer', float: 'right', color: 'red' }}
						onClick={this.onDeleteClick}
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
	}
}

Contact.PropTypes = {
	contact: PropTypes.object.isRequired,
	deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
