import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import About from '../../components/About/About';
import Menu from '../../components/Global/Menu';


class AboutPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Menu />
				<About />
				<Footer />
			</div>
		)
	}
}

export default AboutPage;
