import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();
// global state using context api
// action object with type, reducer for actions
// action.payload to add contact to array of contacts
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [ action.payload, ...state.contacts ]
			};
		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map(
					(contact) => (contact.id === action.payload.id ? (contact = action.payload) : contact)
				)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
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
		],
		// to call an action use dispatch
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	// axios get request with jsonplaceholder
	// componentDidMount() {
	// 	axios.get('https://jsonplaceholder.typicode.com/users').then((res) => this.setState({ contact: res.data }));
	// }

	// Refactor using async await to look more sync
	async componentDidMount() {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');

		this.setState({ contact: res.data });
	}

	render() {
		// pass anything that want to be available in
		// entire app
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
