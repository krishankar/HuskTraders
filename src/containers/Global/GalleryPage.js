import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import Gallery from '../../components/Global/Gallery';
import Menu from '../../components/Global/Menu';


class GalleryPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="pt-5">
				<Header />
				<Menu />
				<Gallery />
				<Footer />
			</div>
		)
	}
}

export default GalleryPage;