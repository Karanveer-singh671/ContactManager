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
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

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
								<Route exact path="/test" component={Test} />
								<Route component={NotFound} />
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
