import React from 'react';
import PropTypes from 'prop-types';
// for functional components pass props as parameters
const Header = (props) => {
	const { branding } = props;
	// to add styling need double curly brace or add a variable with the styling instead
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">
					{branding}
				</a>
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
