import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contacts';
import Header from './components/Header';
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
						<Contacts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
