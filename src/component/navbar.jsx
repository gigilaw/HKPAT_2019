import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
	{ href: '/results', name: 'Results' },
	{ href: '/rules', name: 'Rules' },
	{ href: '/field', name: 'Field & General Info' },
	{ href: '/party', name: 'Party Info' },
	{ href: '/contact', name: 'Contact Us' },
]

const dropdownLinks = [
	{
		category: 'Schedule',
		href1: '/schedule/saturday',
		href2: '/schedule/sunday',
		name1: 'Saturday',
		name2: 'Sunday',
	},
	{
		category: 'Spirit',
		href1: '/spirit/submission',
		href2: '/spirit/scores',
		name1: 'Submit Scores',
		name2: 'View Scores',
	},
]
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					HKPAT2019
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
						{dropdownLinks.map(link => (
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
									{link.category}
								</Link>
								<div
									className="dropdown-menu"
									name="mobile"
									aria-labelledby="navbarDropdown"
									data-target="#navbarNav"
								>
									<Link to={link.href1} className="dropdown-item">
										{link.name1}
									</Link>
									<Link to={link.href2} className="dropdown-item">
										{link.name2}
									</Link>
								</div>
							</li>
						))}
						{links.map(link => (
							<li className="nav-item" name="mobile" data-target="#navbarNav">
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
