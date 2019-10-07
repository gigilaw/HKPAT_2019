import React, { Component } from 'react'
import fieldlayout from '../logos/FieldLayout.jpeg'
import ladiesMarket from '../logos/Ladies_market.png'
import bus from '../logos/TongYam.jpeg'

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

const ladiesMarketMap =
	'https://www.google.com/maps/place/Ladies+Market/@22.3225273,114.1705287,16z/data=!4m5!3m4!1s0x340400c86424836d:0xfd5828ca7b8925af!8m2!3d22.3175808!4d114.1709788'
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
						<div>
							<img
								className="field img-fluid"
								src={fieldlayout}
								alt="Field Layout"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="divStyle">
							<h2>Protest</h2>
							<h6>
								- Avoid areas with protests and DON'T be engaged with or provoke
								both the protestors and the police
							</h6>
							<h6>
								- Avoid going to Admiralty, Wan Chai, and Causeway Bay, as well
								as wander around Prince Edward (espeically the Mong Kong Police
								Stations)
							</h6>
							<h6>- DON'T take pictures of the protestors and police</h6>
							<h6>- DON'T wear a mask unless it's necessary</h6>
							<h6>
								- Don't wear yellow helmets or face masks as your party dress
								code
							</h6>
							<h6>
								- Click <a href="https://hkmap.live">here</a> for live updates
								of the protest
							</h6>
							<h6>
								-{' '}
								<a href="https://citymapper.com/hong-kong/bus/citybus-a21?lang=en">
									A21 City Bus
								</a>{' '}
								can also be taken from Prince Edward, Mongkok, Jordan, and Tsim
								Sha Tsui to the Airport
							</h6>
							<h6>
								- If Prince Edward MTR is suspended, head to the next closest
								station: Shek Kip Mei MTR exit B1
							</h6>
							<h6>
								- If all MTR stations are suspended, please refer to the map
								below. It will take you to MongKok without walking into the main
								protest area. You can locate{' '}
								<a className="inline" href={ladiesMarketMap}>
									Ladies Market{' '}
								</a>
								on Google map and walk via Sai Yee St.
							</h6>
							<h6>
								- Suggested Transportation from the field to Jordan would be
								taxi/Uber or bus 203C (bus stop at Tong Yam Street as shown
								below). If you are staying in the PE/MK area, walking would be
								the most convenient
							</h6>
							<h6>
								- If you are taking a taxi/Uber, pin your pickup point at Tai
								Hang Tung Recreation Ground (Tong Yam Street Entrance).
							</h6>
							<div className="protest col-6">
								<img
									className="ladiesMarket img-fluid"
									src={ladiesMarket}
									alt="Ladies Market"
								/>
							</div>
							<div className="protest col-6">
								<img
									className="bus img-fluid"
									src={bus}
									alt="Tong Yam Street"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Field
