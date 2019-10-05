import React, { Component } from 'react'
import fieldlayout from '../logos/FieldLayout.jpeg'

const fields = [
	{
		name: 'Tai Hang Tung Recreation Ground',
		address: '63 Boundary St, Prince Edward',
	},
	{ name: '大坑東遊樂場', address: '太子 界限街 36號' },
]

const foodInfo = [{ message: 'Breakfast served at field from 7:45am' }]

const map =
	'https://www.google.com/maps/place/Tai+Hang+Tung+Recreation+Ground/@22.3324231,114.1696872,16.07z/data=!4m8!1m2!2m1!1stai+hang+tung+recreation+playground!3m4!1s0x0:0x748f98cc502fa849!8m2!3d22.3279275!4d114.1710672?hl=en'

class Field extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row">
					<div className="col-lg-6">
						<div className="divStyle">
							<h2>Field Location</h2>
						</div>
						{fields.map(field => (
							<div>
								<h5>{field.name}</h5>
								<div className="divStyle">
									<span className="spanStyle">
										<a className="inline" href={map}>
											<i className="fas fa-map-marker-alt fa-2x map" />
											<span className="spanStyle">
												<h6 className="inline underline">{field.address}</h6>
											</span>
										</a>
									</span>
								</div>
							</div>
						))}
						{foodInfo.map(info => (
							<div className="divStyle">
								<h5>{info.message}</h5>
							</div>
						))}
						<div className="divStyle">
							<h2>Protest</h2>
							<h6>- Avoid areas with protestors or be engaged with them</h6>
							<h6>- DON"T take pictures of the protestors</h6>
							<h6>
								- Avoid going to Admiralty, Wan Chai, and Causeway Bay during
								the weekend
							</h6>
							<h6>
								- Don't wear yellow helmets or face masks as your party dress
								code
							</h6>
							<h6>
								- If Prince Edward station is suspended, there's an alternative
								MTR station nearby, which is Shek Kip Mei MTR exit B1
							</h6>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="divStyle">
							<h2>Field Layout</h2>
						</div>
						<div>
							<img
								className="img-fluid maxWidth"
								src={fieldlayout}
								alt="Field Layout"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Field
