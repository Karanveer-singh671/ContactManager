import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
// 2 ways to add state
// 1 is constructor after component mounts
class Contacts extends Component {
	render() {
		return (
			// see context.js for what value holds in provider
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						<React.Fragment>
							<h1 className="display-4 mb-2">
								<span className="text-danger">Contact</span>List
							</h1>
							{contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
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
