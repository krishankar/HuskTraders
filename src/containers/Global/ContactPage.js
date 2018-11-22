import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import Contact from '../../components/Global/Contact';
import Menu from '../../components/Global/Menu';


class ContactPage extends Component {
	

	render() {
		return (
			<div className="pt-5">
				<Header />
				<Menu />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default ContactPage;