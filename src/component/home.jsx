import React, { Component } from 'react'

class Home extends Component {
	render() {
		return (
			<div>
				<div className="container title">
					<div className="row">
						<div className="col-12">
							<h1>Heading</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<p>Co-Organized By:</p>
						</div>
						<div className="col-4">
							<p>Co-Organized By:</p>
						</div>
						<div className="col-4">
							<p>Subvented By:</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p>Thank you to our sponsors!</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h5>Follow HKUPA for more info about our future events!</h5>
							<a href="https://www.facebook.com/hkupa/">
								<i class="fab fa-facebook-square fa-2x icon" />
							</a>
							<a href="https://www.instagram.com/hkupa/?hl=en">
								<i class="fab fa-instagram fa-2x icon" />
							</a>
							<a href="http://www.hkupa.com/">
								<i class="fas fa-home fa-2x icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
