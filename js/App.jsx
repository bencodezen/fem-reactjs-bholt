import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

const ErrorPage = () => <h1>404 Error</h1>

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/search" component={Search} />
				<Route component={ErrorPage} />
			</Switch>
		</div>
	</BrowserRouter>

export default App
