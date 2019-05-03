import React, { Component } from 'react'

const partyDetails = [
	{ message: 'Closest MTR Exit: Jordan B1' },
	{ message: 'Time: May 11th, 9:00pm - 1:00am' },
	{ message: 'Few drinks provided but eat before~' },
]
const locationDetails = [
	{
		name: 'Terrible Baby @ Eaton Hotel',
		address: '4/F, 380 Nathan Rd, Jordan',
	},
	{
		name: 'Terrible Baby @ 香港逸東酒店',
		address: '佐敦 彌敦道 380號 4/F',
	},
]
const map =
	'https://www.google.com/maps?q=terrible+baby+eaton+hotel&um=1&ie=UTF-8&sa=X&ved=0ahUKEwii2eTw4f7hAhUZ7mEKHeRnCZMQ_AUIDigB'

class Party extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row">
					<div className="col-lg-6">
						<div className="divStyle">
							<h1>Party Location</h1>
						</div>
						{locationDetails.map(location => (
							<div>
								<h4>{location.name}</h4>
								<div className="divStyle">
									<span className="spanStyle">
										<a href={map}>
											<i class="fas fa-map-marker-alt fa-2x" />
											<span className="spanStyle">
												<h5 className="inline address">{location.address}</h5>
											</span>
										</a>
									</span>
								</div>
							</div>
						))}
						{partyDetails.map(party => (
							<div>
								<h4>{party.message}</h4>
							</div>
						))}
					</div>
					<div className="col-lg-6">
						<div className="divStyle">
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
