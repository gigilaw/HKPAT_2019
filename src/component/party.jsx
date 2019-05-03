import React, { Component } from 'react'

const spanStyle = {
	display: 'inline-block',
	color: 'white',
}

const divStyle = {
	marginBottom: '40px',
}

class Party extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row">
					<div className="col-lg-6">
						<div style={divStyle}>
							<h1>Party Location</h1>
						</div>
						<h4>Terrible Baby @ Eaton Hotel</h4>
						<div style={divStyle}>
							<span style={spanStyle}>
								<a
									className="inline"
									href="https://www.google.com/maps?q=terrible+baby+eaton+hotel&um=1&ie=UTF-8&sa=X&ved=0ahUKEwii2eTw4f7hAhUZ7mEKHeRnCZMQ_AUIDigB"
								>
									<i class="fas fa-map-marker-alt fa-2x" />{' '}
									<span style={spanStyle}>
										<h5 className="inline">4/F, 380 Nathan Rd, Jordan</h5>
									</span>
								</a>
							</span>
						</div>
						<h4>Terrible Baby @ 香港逸東酒店</h4>
						<div style={divStyle}>
							<span style={spanStyle}>
								<a
									className="inline"
									href="https://www.google.com/maps?q=terrible+baby+eaton+hotel&um=1&ie=UTF-8&sa=X&ved=0ahUKEwii2eTw4f7hAhUZ7mEKHeRnCZMQ_AUIDigB"
								>
									<i class="fas fa-map-marker-alt fa-2x" />{' '}
									<span style={spanStyle}>
										<h5 className="inline">佐敦 彌敦道 380號 4/F</h5>
									</span>
								</a>
							</span>
						</div>
						<div style={divStyle}>
							<h4>Time: May 11th, 9:00pm - 1:00am</h4>
						</div>
						<div style={divStyle}>
							<h4>Closest MTR Exit: Jordan B1</h4>
						</div>
						<div style={divStyle}>
							<h4>Few drinks provided but eat before~</h4>
						</div>
					</div>
					<div className="col-lg-6">
						<div style={divStyle}>
							<h1>Party Theme</h1>
						</div>
						<div>
							<img
								id="DD"
								src="http://i67.tinypic.com/35lugiq.jpg"
								alt="Field Layout"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Party
