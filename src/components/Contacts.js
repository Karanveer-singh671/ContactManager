import React, { Component } from 'react';
import Contact from './Contact';
// 2 ways to add state
// 1 is constructor after component mounts
export default class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: [
				{
					id: 1,
					name: 'John',
					email: 'j@gmail.com',
					phone: '555-555-5555'
				},
				{
					id: 2,
					name: 'Don',
					email: 'D@gmail.com',
					phone: '665-555-5555'
				}
			]
		};
	}
	render() {
		const { contacts } = this.state;
		// pull contacts out of state then loop through using map
		return (
			{
				/* if don't want div inside and just pseudo element not rendered by DOM use react.fragment*/
			},
			(
				<React.Fragment>
					{contacts.map((contact) => (
						<Contact key={contact.id} contact={contact} />
						//  name={contact.name} email={contact.email} phone={contact.phone} />
					))}
				</React.Fragment>
			)
		);
	}
}
// state holds key of contacts with values of array
