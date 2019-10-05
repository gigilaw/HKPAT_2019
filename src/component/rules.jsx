import React, { Component } from 'react'

class Rules extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">General Rules</h4>
						<p>- WFDF Rules of Ultimate 2017</p>
						<p>- Pooly play, placement, and semis - 60mins long</p>
						<p>- Finals 70mins long</p>
						<p>
							- Games to 13 pts or Time Cap, Semis and Finals to 15 pts or Time
							Cap
						</p>
						<p>- Gender ratio: Ratio Rule B (“end zone decides” rule)</p>
					</div>
				</div>
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">Time Cap Half</h4>
						<p>
							- If teams do not reach half-time by 45mins, finish point and time
							cap half occurs
						</p>
						<p>
							- No indications will be given, please inform the other captain if
							this occurs
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
						<p>- 1 min TO, 1 per half, no floater</p>
						<p>- Finals: +1 floater</p>
						<p>- No TO after time cap</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Rules
