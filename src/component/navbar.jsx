import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
	{ href: '/spirit', name: 'Spirit Scores' },
	{ href: '/field', name: 'Field Location' },
	{ href: '/party', name: 'Party Location' },
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
		category: 'Results',
		href1: '/results/opens',
		href2: '/results/womens',
		name1: 'Opens',
		name2: "Women's",
	},
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
						{dropdownLinks.map(link => (
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									data-target=".navbar-collapse.show"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{link.category}
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
