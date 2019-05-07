import React, { Component } from 'react'

class sunSchedule extends Component {
	render() {
		return (
			<div className="col-xs" style={{ marginTop: '40px' }}>
				<iframe
					width="90%"
					height="400px"
					float="middle"
					frameBorder="0"
					scrolling="auto"
					wmode="transparent"
					src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXd2_tG0ff898hd3Etb4opovA15KwfCPD0O4lexKb0ZtOOUgJRoI3LYQg0tRUOwWKY_ldKrGLsDf0p/pubhtml?gid=1226252316&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"
				/>
			</div>
		)
	}
}

export default sunSchedule
