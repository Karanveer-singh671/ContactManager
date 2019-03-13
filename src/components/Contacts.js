import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';
// 2 ways to add state
// 1 is constructor after component mounts
class Contacts extends Component {
	deleteContact = (id) => {
		const { contacts } = this.state;

		const newContacts = contacts.filter((contact) => contact.id !== id);

		this.setState({
			contacts: newContacts
		});
	};
	render() {
		return (
			// see context.js for what value holds in provider
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						<React.Fragment>
							{contacts.map((contact) => (
								<Contact
									key={contact.id}
									contact={contact}
									deleteClickHandler={this.deleteContact.bind(this, contact.id)}
								/>
								//  name={contact.name} email={contact.email} phone={contact.phone} />
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		);

		// pull contacts out of state then loop through using map
		/* if don't want div inside and just pseudo element not rendered by DOM use react.fragment*/
	}
}
export default Contacts;
