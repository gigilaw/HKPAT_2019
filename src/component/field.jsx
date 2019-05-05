import React, { Component } from 'react'

const fields = [
	{
		name: 'Tai Hang Tung Recreation Ground',
		address: '63 Boundary St, Prince Edward',
	},
	{ name: '大坑東遊樂場', address: '太子 界限街 36號' },
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
							<h1>Field Location</h1>
						</div>
						{fields.map(field => (
							<div>
								<h4>{field.name}</h4>
								<div className="divStyle">
									<span className="spanStyle">
										<a className="inline" href={map}>
											<i class="fas fa-map-marker-alt fa-2x map" />
											<span className="spanStyle">
												<h5 className="inline address">{field.address}</h5>
											</span>
										</a>
									</span>
								</div>
							</div>
						))}
						<div className="divStyle">
							<h4>Closest MTR Exit: Prince Edward A1</h4>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="divStyle">
							<h1>Field Layout</h1>
						</div>
						<div>
							<img
								id="layout"
								src="https://s3-ap-southeast-1.amazonaws.com/ultimateproject/HKHAG2019/Field+Layout.png"
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
