import React, { Component } from 'react'

class Rules extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row">
					<div className="col">
						<h2>Rules</h2>
					</div>
				</div>
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">General Rules</h4>
						<p>- WFDF Rules of Ultimate 2017</p>
						<p>- Finals 70 mins long</p>
						<p>- 2nd day placement games, 50 mins long</p>
						<p>- All other games, 60 mins long</p>
						<p>
							- Games to 13 pts or Time Cap, Semis and Finals to 15 pts or Time
							Cap
						</p>
					</div>
				</div>
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">At Time Cap</h4>
						<p>- Finish Point. If tied, play universe</p>
						<p>- Finals, finish point, +1 to highest score and play to that</p>
					</div>
				</div>
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">Time Outs</h4>
						<p>- 1 TO per half per team</p>
						<p>- 1 min TO</p>
						<p>- No floater, +1 floater for finals</p>
						<p>
							- No TO can be called in last 5 mins of game and after time cap
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Rules
