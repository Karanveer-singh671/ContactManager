import React, { Component } from 'react';
import './App.css';
// stores routes, switch for not found page
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import Header from './components/layout/Header';
import About from './components/layout/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
	render() {
		// wrap entire main app in Provider
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/about" component={About} />
							</Switch>
							<AddContact />
							<Contacts />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
