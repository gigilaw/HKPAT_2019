import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import './component/navbar'
import NavBar from './component/navbar'
import Home from './component/home'
import satSchedule from './component/schedule/satSchedule'
import sunSchedule from './component/schedule/satSchedule'
import results from './component/results'
import spirit from './component/spiritScores'
import Field from './component/field'
import Party from './component/party'
import Contact from './component/contacts'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/schedule/saturday" component={satSchedule} />
					<Route exact path="/schedule/sunday" component={sunSchedule} />
					<Route exact path="/results" component={results} />
					<Route exact path="/spirit" component={spirit} />
					<Route exact path="/field" component={Field} />
					<Route exact path="/party" component={Party} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
