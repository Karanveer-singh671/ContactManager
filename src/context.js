import React, { Component } from 'react';
const Context = React.createContext();
// global state using context api
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
		]
	};

	render() {
		// pass anything that want to be available in
		// entire app
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
