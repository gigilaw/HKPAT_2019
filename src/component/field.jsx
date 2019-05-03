import React, { Component } from 'react'
import GoogleApiWrapper from '../component/map'

class Field extends Component {
	render() {
		return (
			<div className="container">
				<h1>Fields</h1>
				<GoogleApiWrapper />
				<div />
			</div>
		)
	}
}

export default Field
