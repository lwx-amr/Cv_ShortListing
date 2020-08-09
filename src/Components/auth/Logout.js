import React, { Component } from 'react'

export default class Logout extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fun();
	}
	render() {
		return (
			<div>
				this is Logout
			</div>
		)
	}
}
