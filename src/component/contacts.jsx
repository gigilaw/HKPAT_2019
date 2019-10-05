import React, { Component } from 'react'
import tom from '../logos/tom.jpg'
import derek from '../logos/derek.jpg'

const contacts = [
	{
		name: 'Derek Cheng',
		src: derek,
		href: 'https://wa.me/85255716292',
		alt: 'Derek Cheng',
	},
	{
		name: 'Tom Chung',
		src: tom,
		href: 'https://wa.me/85292275540',
		alt: 'Tom Chung',
	},
]

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="conTitle container">
					<h1>Contact Us</h1>
					<h2>Tournament Directors:</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							{contacts.map(contact => (
								<div className="card">
									<img
										className="card-img-top"
										src={contact.src}
										alt={contact.alt}
									/>
									<div className="card-body">
										<h4 className="card-title">{contact.name}</h4>
										<a href={contact.href}>
											<i className="fab fa-whatsapp fa-2x" />
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact
