import React, { Component } from 'react';
class Test extends Component {
	state = {
		test: 'test'
	};
	// don't need arrow function here even for this since part of React

	// fired after constructor since component mounted usually used for http calls for api or backend, ajax, if fetching data from component and putting in state usually use this
	componentDidMount() {
		console.log('componentDidMount...');
	}
	// NOTE: WILL BE DEPRECATED
	// will run before component actually Mounts
	componentWillMount() {
		console.log('componentDidMount...');
	}

	// runs when component has an update and re-renders (e.g changing state ) else will not fire
	componentDidUpdate() {
		console.log('componentDidUpdate...');
	}
	// NOTE: WILL BE DEPRECATED
	//  gives you control to manipulate the component just before it receives new props or state. generally use it to do animations. want to smoothly fade an element out of the view, before removing the dom. This helps
	componentWillUpdate() {
		console.log('componentWillUpdate...');
	}
	// NOTE: WILL BE DEPRECATED
	// will fire when receive new properties, used with redux generally, can turn piece of state to component props.
	componentWillReceiveProps(nextProps, nextState) {
		console.log('componentWillReceiveProps...');
	}

	// will replace componentWillReceiveProps, can't use this.setState() here
	static getDerivedStateFromProps(nextProps, prevState) {
		// need to return object like
		return {
			test: 'something'
		};
	}

	// fired before mutations made (DOM update)
	getSnapshotBeforeUpdate(prevProps, prevState) {}

	// also a lifecycle method
	render() {
		return (
			<div>
				<h1>Test Component</h1>
			</div>
		);
	}
}
export default Test;
