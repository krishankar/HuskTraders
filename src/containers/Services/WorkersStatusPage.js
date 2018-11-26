import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import Workers from '../../components/Services/WorkersStatus';
import Menu from '../../components/Global/Menu';

class WorkersStatusPage extends Component {
	
	render() {
		return (
			<div>
				<Header />
				<Menu />
				<Workers />
				<Footer />
			</div>
		);
	}
}

export default WorkersStatusPage;
