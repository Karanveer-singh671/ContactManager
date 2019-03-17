import React from 'react';
import PropTypes from 'prop-types';
// if export default then no curly brace for import else use
import { Link } from 'react-router-dom';
// for functional components pass props as parameters
// can't use this.
const Header = (props) => {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">
					{branding}
				</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fas fa-home" /> Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="nav-link">
								<i className="fas fa-plus" /> Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fas fa-question" /> About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

// To validate props
// e.g branding is string and required
Header.PropTypes = {
	branding: PropTypes.string.isRequired
};

// if remove property in App.js then will have this default props to display
Header.defaultProps = {
	branding: 'My App'
};

const headingStyle = {
	color: 'red',
	fontSize: '50px'
};
export default Header;
