import React, { Component } from 'react'

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
							<a className="nav-link" href="/schedule">
								Schedule
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/teams">
								Teams
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/fields">
								Field Location
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/party">
								Party Location
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar
