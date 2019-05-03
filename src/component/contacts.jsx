import React, { Component } from 'react'

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="title container">
					<h1>Contact Us</h1>
					<h2>Tournament Directors:</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							<div className="card">
								<img
									className="card-img-top"
									src="http://i65.tinypic.com/2re031x.jpg"
									alt="Derek Cheng"
								/>
								<div className="card-body">
									<h4 className="card-title">Derek Cheng</h4>
									<a href="https://wa.me/85255716292">
										<i className="fab fa-whatsapp fa-2x" />
									</a>
								</div>
							</div>
							<div className="card">
								<img
									className="card-img-top"
									src="http://i63.tinypic.com/21erk93.jpg"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h4 className="card-title">Tom Chung</h4>
									<a href="https://wa.me/85292275540">
										<i className="fab fa-whatsapp fa-2x" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact
