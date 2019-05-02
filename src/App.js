import React from 'react'
import './App.css'
import './component/navbar'
import NavBar from './component/navbar'
import Home from './component/home'

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<Home />
			</header>
		</div>
	)
}

export default App
