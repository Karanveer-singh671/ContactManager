import React, { Component } from 'react';
import './App.css';
import Contact from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
	render() {
		// wrap entire main app in Provider
		return (
			<Provider>
				<div className="App">
					<Header branding="Contact Manager" />
					<div className="container">
						<AddContact />
						<Contacts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
