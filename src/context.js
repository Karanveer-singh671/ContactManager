import React, { Component } from 'react';
const Context = React.createContext();
// global state using context api
// action object with type, reducer for actions
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
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

	render() {
		// pass anything that want to be available in
		// entire app
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
