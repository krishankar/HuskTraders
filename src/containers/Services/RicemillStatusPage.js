import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import Ricemill from '../../components/Services/RicemillStatus';
import Menu from '../../components/Global/Menu';

class RicemillStatusPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Menu />
				<Ricemill />
				<Footer />
			</div>
		);
	}
}

export default RicemillStatusPage;
