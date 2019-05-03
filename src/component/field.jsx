import React, { Component } from 'react'

const spanStyle = {
	display: 'inline-block',
	color: 'white',
}

const divStyle = {
	marginBottom: '40px',
}

class Field extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row">
					<div className="col-lg-6">
						<div style={divStyle}>
							<h1>Field Location</h1>
						</div>
						<h4>Tai Hang Tung Recreation Ground</h4>
						<div style={divStyle}>
							<span style={spanStyle}>
								<a
									className="inline"
									href="https://www.google.com/maps/place/Tai+Hang+Tung+Recreation+Ground/@22.3324231,114.1696872,16.07z/data=!4m8!1m2!2m1!1stai+hang+tung+recreation+playground!3m4!1s0x0:0x748f98cc502fa849!8m2!3d22.3279275!4d114.1710672?hl=en"
								>
									<i class="fas fa-map-marker-alt fa-2x" />{' '}
									<span style={spanStyle}>
										<h5 className="inline">63 Boundary St, Prince Edward</h5>
									</span>
								</a>
							</span>
						</div>
						<h4>大坑東遊樂場</h4>
						<div>
							<span style={spanStyle}>
								<a
									className="inline"
									href="https://www.google.com/maps/place/Tai+Hang+Tung+Recreation+Ground/@22.3324231,114.1696872,16.07z/data=!4m8!1m2!2m1!1stai+hang+tung+recreation+playground!3m4!1s0x0:0x748f98cc502fa849!8m2!3d22.3279275!4d114.1710672?hl=en"
								>
									<i class="fas fa-map-marker-alt fa-2x" />{' '}
									<span style={spanStyle}>
										<h5 className="inline">36號 界限街 太子</h5>
									</span>
								</a>
							</span>
						</div>
					</div>
					<div className="col-lg-6">
						<div style={divStyle}>
							<h1>Field Layout</h1>
						</div>
						<div>
							<img
								id="layout"
								src="http://i64.tinypic.com/im555w.png"
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
