import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import './component/navbar'
import NavBar from './component/navbar'
import Home from './component/home'
import Schedule from './component/schedule'
import Teams from './component/teams'
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
					<Route exact path="/schedule" component={Schedule} />
					<Route exact path="/teams" component={Teams} />
					<Route exact path="/field" component={Field} />
					<Route exact path="/party" component={Party} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
