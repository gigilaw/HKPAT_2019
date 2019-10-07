import React, { Component } from 'react'

class Rules extends Component {
	render() {
		return (
			<div className="container title">
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">General Rules</h4>
						<p>
							-
							<a href="https://rules.wfdf.org/"> WFDF Rules of Ultimate 2017</a>
						</p>
						<p>- Pooly play, placement, and semis - 60mins long</p>
						<p>- Finals 80mins long</p>
						<p>
							- Games to 13 pts or Time Cap, Semis and Finals to 15 pts or Time
							Cap
						</p>
						<p>- Gender ratio: Ratio Rule B (“end zone decides” rule)</p>
						<p>
							- Tie breakers during pool play will be determined in accordance
							to WFDF Rules of Ultimate 2017 (
							<a href="http://www.wfdf.org/files/WFDF_Rules_of_Ultimate_2017_-_Appendix_FINAL.pdf">
								appendix
							</a>
							) tie breaker rules
						</p>
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
				<div className="row leftAlign">
					<div className="col">
						<h4 className="underline">Lightning Signal</h4>
						<p>
							- If there are any warnings of lightning storm nearby during the
							games, an airhorn would be honked repeatedly (signal would be made
							at the discretion of the tournament directors){' '}
						</p>
						<p>- All games will be suspended until further notice</p>
						<p>
							- Should there be excessive delays, games will be shortened or
							deemed finished if games have reached half.{' '}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Rules
