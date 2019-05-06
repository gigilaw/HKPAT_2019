import React, { Component } from 'react'
import fieldlayout from '../logos/FieldLayout.png'
import satlunch from '../logos/SatLunch.jpeg'
import sunlunch from '../logos/SunLunch.jpeg'

const fields = [
	{
		name: 'Tai Hang Tung Recreation Ground',
		address: '63 Boundary St, Prince Edward',
	},
	{ name: '大坑東遊樂場', address: '太子 界限街 36號' },
]

const foodInfo = [
	{ message: 'Breakfast served at field from 7:30am' },
	{
		message: 'Present your lunch tickets (included in players pack) for lunch',
	},
]

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
						<div className="divStyle">
							<h2>Food Info</h2>
						</div>
						{foodInfo.map(info => (
							<div className="divStyle">
								<h5>{info.message}</h5>
							</div>
						))}
						<div className="divStyle">
							<img
								id="satTicket"
								className="img-fluid tickets"
								src={satlunch}
								alt="Sat Lunch"
							/>
							<img
								className="img-fluid tickets"
								src={sunlunch}
								alt="Sun Lunch"
							/>
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
