import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
	{ href: '/teams', name: 'Teams' },
	{ href: '/field', name: 'Field Location' },
	{ href: '/party', name: 'Party Location' },
	{ href: '/contact', name: 'Contact Us' },
]
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
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
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Schedule
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="/schedule/saturday">
									Saturday
								</a>
								<a class="dropdown-item" href="/schedule/sunday">
									Sunday
								</a>
							</div>
						</li>
						{links.map(link => (
							<li className="nav-item">
								<a className="nav-link" href={link.href}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar
