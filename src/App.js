import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './components/Home';

import HomePage from './containers/Global/HomePage';
import AboutPage from './containers/Global/AboutPage';
import NewloadPage from './containers/Global/NewloadPage';
import RicemillStatusPage from './containers/Services/RicemillStatusPage';
import WorkersStatusPage from './containers/Services/WorkersStatusPage';
// import NewloadPage from './containers/Global/NewloadPage'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/newload" component={NewloadPage} />
					<Route exact path="/ricemillstatus" component={RicemillStatusPage} />
					<Route exact path="/workersstatus" component={WorkersStatusPage} />
					{/* <Route exact path="/newload" component={NewloadPage}/> */}
					{/* <Route exact path="/" component={Home}/> */}
				</div>
			</Router>
		);
	}
}

export default App;
