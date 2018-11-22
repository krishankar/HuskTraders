import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Footer from '../../components/Global/Footer';
import Blog from '../../components/Global/Blog';
import Menu from '../../components/Global/Menu';


class BlogPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="pt-5">
				<Header />
				<Menu />
				<Blog />
				<Footer />
			</div>
		)
	}
}

export default BlogPage;