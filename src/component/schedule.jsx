import React, { Component } from 'react'

const scheduleStyle = {
	maxWidth: '70%',
	margin: '5% auto',
}
class Schedule extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm" style={scheduleStyle}>
						<img
							src="http://oi64.tinypic.com/2gwexbo.jpg"
							className="img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Schedule
