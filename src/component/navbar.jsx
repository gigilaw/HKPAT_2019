import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					HKHAG2019
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Schedule
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Teams
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Field Location
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Party Location
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contacts
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar
