import React, { useEffect, useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/Graph";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Graph from './pages/Graph';
//"npm i react-router-dom" in the cmd
function App() {
	return (
		<Router>
		<div>
		<Nav />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/graph" component={Graph}/>
		</Switch>

		
		</div>
		</Router>
		);
	 
}

	export default App;
