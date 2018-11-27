import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import FactoryStatus	 from '../../components/Services/FactoryStatus';
import Menu from '../../components/Global/Menu';

class FactoryStatusPage extends Component {
    
    render() {
		return (
			<div>
				<Header />
				<Menu />
				<FactoryStatus/>
				<Footer />
			</div>
		);
	}
}

export default FactoryStatusPage;
