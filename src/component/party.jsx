import React, { Component } from 'react'
import ST_1 from '../logos/ST_1.png'
import ST_3 from '../logos/ST_3.png'
import band from '../logos/HKPAT_wristband.png'

const partyDetails = [
	{ message: 'Closest MTR Exit: Jordan B1' },
	{ message: 'Oct 12th, 9:30pm' },
	{ message: 'Drinks provided but eat before!' },
	{ message: 'Only wristbands wearers will be allowed entry' },
	{ message: '10% off additional drinks for those with wristbands' },
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
							<h2>Party Location</h2>
						</div>
						{locationDetails.map(location => (
							<div>
								<h5>{location.name}</h5>
								<div className="divStyle">
									<span className="spanStyle">
										<a href={map}>
											<i className="fas fa-map-marker-alt fa-2x map" />
											<span className="spanStyle">
												<h6 className="inline underline">{location.address}</h6>
											</span>
										</a>
									</span>
								</div>
							</div>
						))}
						<div className="divStyle">
							<h2>Party Info</h2>
						</div>
						{partyDetails.map(party => (
							<div className="divStyle">
								<h6>{party.message}</h6>
							</div>
						))}
						<div className="divStyle">
							<img
								id="band"
								className="img-fluid"
								src={band}
								alt="Party Band"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="divStyle">
							<h2>Party Theme</h2>
						</div>
						<div>
							<img
								className="img-fluid maxWidth"
								src={ST_1}
								alt="Party Theme"
							/>
							<img
								className="img-fluid maxWidth"
								src={ST_3}
								alt="Party Theme"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Party
