import React, { Component } from 'react'

class Spirit extends Component {
	render() {
		return (
			<div>
				<div className="container title">
					<h2>Spirit Score Results</h2>
					<iframe
						width="100%"
						height="650px"
						float="middle"
						frameBorder="0"
						marginHeight="0"
						marginWidth="0"
						scrolling="auto"
						src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQfkmlyN92Y7xtW4hTzqRB-AH0Jj4BiXV7LWxHrH4I6e5GFJTzBmbduJFN6hB5WcTxsxbL0L6iRWP2M/pubhtml?widget=true&amp;headers=false&amp;chrome=false"
					>
						Loading...
					</iframe>
				</div>
			</div>
		)
	}
}

export default Spirit
