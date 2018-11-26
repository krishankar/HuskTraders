import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Register & Login
import Register from './components/Account/Register';
import RegisterConfirmation from './components/Account/RegisterConfirmation';
import Logins from './containers/account/Login';
import ForgotPage from './containers/account/ForgotPage';
import ChangePasswordPage from './containers/account/ChangePasswordPage';

//Home
import HomePage from './containers/Global/HomePage';

//About
import AboutPage from './containers/Global/AboutPage';

//New Load
import NewloadPage from './containers/Global/NewloadPage';

//Services
import LoadStatusPage from './containers/Services/LoadStatusPage';
import RicemillStatusPage from './containers/Services/RicemillStatusPage';
import FactoryStatusPage from './containers/Services/FactoryStatusPage';
import WorkersStatusPage from './containers/Services/WorkersStatusPage';

//Gallery
import GalleryPage from './containers/Global/GalleryPage';

//Blog
import BlogPage from './containers/Global/BlogPage';

//Contact
import ContactPage from './containers/Global/ContactPage';

//Contents
import Header from './components/Global/Header';
import Menu from './components/Global/Menu';
import Footer from './components/Global/Footer';

//Graph cool connection using Apollo
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const link = new HttpLink(
	{
		uri: 'https://api.graph.cool/simple/v1/cjotle0ftk6x401432vr477h3'
	},
	{
		headers: {
			Authorization:
				'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDE0MTYzNzksImNsaWVudE' + 
				'lkIjoiY2piaGp6ZTRwMDg1ZTAxMjhxaXIwZHY2OCJ9.8E_bIf4w1iIBEOCYkPZrHHkpwe_jAh-yza8' +
				'XQnKl4tU'				
		}
	}
);

const cache = new InMemoryCache();
//Create Apollo Client
const client = new ApolloClient({ link, cache });

const UserRegister = ({ match }) => (
	<div>	
		<Header />
		<Menu />	
		<Register match={match} />	
		<Footer />
	</div>
);

const ThankYou = ({ match }) => (
	<div>
		<RegisterConfirmation match={match} />
	</div>
);


class App extends Component {
	render() {
		return (
			<Router history={history}>
				<ApolloProvider client={client}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/Login" component={Logins} />
						<Route exact path="/Register/:type" component={UserRegister} />						
						<Route exact path="/account/reset" component={ForgotPage} />
						<Route exact path="/account/changepwd/:id" component={ChangePasswordPage} />
						<Route exact path="/RegisterConfirmation/:type" component={ThankYou} />	
						<Route exact path="/About" component={AboutPage} />
						<Route exact path="/Newload" component={NewloadPage} />
						<Route exact path="/Services/LoadStatus" component={LoadStatusPage} />
						<Route exact path="/Services/RiceMillStatus" component={RicemillStatusPage} />
						<Route exact path="/Services/FactoryStatus" component={FactoryStatusPage} />
						<Route exact path="/Services/WorkerStatus" component={WorkersStatusPage} />
						<Route exact path="/Gallery" component={GalleryPage} />
						<Route exact path="/Blog" component={BlogPage} />
						<Route exact path="/Contact" component={ContactPage} />									
					</Switch>
				</ApolloProvider>
			</Router>
		);
	}
}

export default App;
