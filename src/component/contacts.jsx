import React, { Component } from 'react'

const contacts = [
	{
		name: 'Derek Cheng',
		src: 'http://i65.tinypic.com/2re031x.jpg',
		href: 'https://wa.me/85255716292',
		alt: 'Derek Cheung',
	},
	{
		name: 'Tom Chung',
		src: 'http://i63.tinypic.com/21erk93.jpg',
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
