import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
	{ href: '/results', name: 'Results' },
	{ href: '/spirit', name: 'Spirit Scores' },
	{ href: '/field', name: 'Field Location' },
	{ href: '/party', name: 'Party Location' },
	{ href: '/contact', name: 'Contact Us' },
]
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					HKHAG2019
				</Link>
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
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Schedule
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link to="/schedule/saturday" className="dropdown-item">
									Saturday
								</Link>
								<Link to="/schedule/sunday" className="dropdown-item">
									Sunday
								</Link>
							</div>
						</li>
						{links.map(link => (
							<li className="nav-item">
								<Link className="nav-link" to={link.href}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar
