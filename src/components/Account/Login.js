import React, { Component } from 'react';
import './Account.css';
import './login.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom'
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { storeLogin } from '../../redux_ht';

class Login extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array,			
		}).isRequired
	};
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			UserProfile: [],
			email: '',
			password: '',
			phone:'',
			userType:'',			
			loading: false,
			userSubmited: false,			
		};
		this.login = this.login.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.setUserData = this.setUserData.bind(this);

	}
	componentWillReceiveProps(newProps) {
		if (this.state.userSubmited) {
			if (newProps.data.allUserProfiles[0]) {
				console.log(JSON.stringify(newProps) + 'new props');
				this.setState({
					UserProfile: newProps.data.allUserProfiles,
					loading: true,
				});
				if ((newProps.data.allUserProfiles[0].userType == "Agent")) {
					if ((newProps.data.allUserProfiles[0])) {
						localStorage.setItem('userid', newProps.data.allUserProfiles[0].id);
						localStorage.setItem('userType', newProps.data.allUserProfiles[0].userType);						
						window.location.href = '/';
					}
					else {
						this.setUserData(newProps.data.allUserProfiles[0])
							.then(() => {
								this.props.history.push({
									pathname: '/confirm',
									state: { 
										userid:newProps.data.allUserProfiles[0].id,
										userType:newProps.data.allUserProfiles[0].userType, 
										firstName:newProps.data.allUserProfiles[0].firstName,
										email: newProps.data.allUserProfiles[0].email,
										phone: newProps.data.allUserProfiles[0].phoneNumber
									}
								})
							})

					}
				} else {
					this.setUserData(newProps.data.allUserProfiles[0])
							.then(() => {
								window.location.href = '/'
							})
				}
			} else {
				this.setState({ userSubmited: false });
				alert('Invalid Credentials');
			}
		}
		
	}
	setUserData(user) {
		return new Promise((resolve, reject) => {
			localStorage.setItem('userid', user.id)
			localStorage.setItem('userType', user.userType);
			this.setState({
				phone:user.phoneNumber,
				paymentStatus:user.paymentStatus
			})
			resolve("ok")

		})
	}
	onUpdate() {
		this.setState({ email: this.email.value });
		this.setState({ password: this.password.value });
	}
	login() {
        this.props.storeLogin({ email: this.state.email, password: this.state.password });
        this.setState({ 
            userSubmited: true	
        });
    }
	render() {
		// var user={
        //     userId:localStorage.getItem('userid'),
        // }
        if (this.state.paymentPending ==true && (localStorage.getItem("userType") === "Agent")) {
            return(<Redirect to={{
				pathname: '/confirm',
				state: {userId:"12321321" }
			}}/> )
		}
		else{
			return (		
				<div className="Container"style={{"height":"700px"}}>
					<div className="boxs">
						<span id="star">
							<span id="s1" className="star">☆</span>
							<span id="s2" className="star">★</span>
							<span id="s3" className="star">☆</span>
							<span id="s4" className="star">★</span>
							<span id="s5" className="star">☆</span>
							<span id="s6" className="star">☆</span>
							<span id="s7" className="star">★</span>
							<span id="s8" className="star">☆</span>
							<span id="s9" className="star">☆</span>
							<span id="s10" className="star">☆</span>
							<span id="s11" className="star">☆</span>
							<span id="s12" className="star">★</span>
							<span id="s13" className="star">☆</span>
							<span id="s14" className="star">★</span>
							<span id="s15" className="star">☆</span>
							<span id="s16" className="star">☆</span>
							<span id="s17" className="star">★</span>
							<span id="s18" className="star">☆</span>
							<span id="s19" className="star">★</span>
							<span id="s20" className="star">☆</span>
							<span id="s21" className="star">★</span>
							<span id="s22" className="star">☆</span>
							<span id="s23" className="star">☆</span>
							<span id="s24" className="star">★</span>
							<span id="s25" className="star">☆</span>
						</span>
        				<h2 style={{}}>Login</h2>
						<div className="main">
							<div className="data">
								<form>
									<div className="control"><span className="tag" >Email</span>
										<span className="st" />
										<input className="LoginInput" type="text" required="required" onChange={this.onUpdate.bind(this)} id="email" ref={(input) => { this.email = input; }} />
									</div>
									<div className="control"><span className="tag" style={{}}>PASSWORD</span>
										<span className="st" />
										<input className="LoginInput" type="password" required="required" onChange={this.onUpdate.bind(this)} id="password" ref={(input) => { this.password = input; }}  />
									</div>										
									<div className="control">								
										<input className="LoginInput" type="submit" defaultValue="Login" onClick={this.login} />
										<a className="nav-links" href="./account/reset" className="signin" style={{ "fontSize":'25px'}}>Forgot Password</a><br/>
										<a style={{justifyContent: "center", fontSize:"15px", color:"black"}}>New to Husk Traders? Click Register in the menu to signup</a>
									</div>			  
								</form>
							</div>
						</div>       
					</div>
				</div>
				
				// <section className="home mt-3">
				// 	<div className="container">
				// 		<div className="row">								
				// 			<div className="col-md">								
				// 					<div className="LoginTitle">Login</div>											
				// 				<div className="LoginContent" >
				// 					<form role="forms" styles="color: #e9c126">
				// 						<div className="row setup-content" id="step-1">
				// 							<div className="col-xs-12">
				// 								<div className="col-md-12">
				// 									<div className="form-group">
				// 										<input maxLength="100" type="text" required="required" className="form-control" onChange={this.onUpdate.bind(this)} id="email" ref={(input) => { this.email = input; }} placeholder="Email" />
				// 									</div>
				// 									<div className="form-group">
				// 										<input maxLength="100" type="password" required="required" className="form-control" onChange={this.onUpdate.bind(this)} id="password" ref={(input) => { this.password = input; }} placeholder="Password" />
				// 									</div>
				// 									<button className="btn btn-primary nextBtn btn-lg pull-right" type="button" onClick={this.login} >Login</button>
				// 								</div>
				// 								<a className="nav-link" href="./account/reset" className="signin" style={{ textDecoration: "None", }}>Forgot Password</a>
				// 								<div className="mt-5">
				// 								<a style={{justifyContent: "center", paddingTop:"30px"}}>New to Husk Traders? Click Register in the menu to signup</a>
				// 								</div>
				// 							</div>												
				// 						</div>
				// 					</form>						
				// 					<div className="stepwizard d-none">
				// 						<div className="stepwizard-row setup-panel">
				// 							<div className="stepwizard-step">
				// 								<a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
				// 							</div>
				// 						</div>
				// 					</div>
				// 				</div>
				// 			</div>								
				// 		</div>
				// 	</div>
				// </section>				
			);
		}
	}
}
const USER_PROFILE_QUERY = gql`
	query allUserProfiles($email: String, $password: String) {
		allUserProfiles(filter: { email: $email, password: $password }) {
			id
			firstName
			email
			phoneNumber
			userType
		}
	}
`;
const mapStateToProps = (state, ownProps) => {
	if (state.ht.loginData) {
		return {
			email: state.ht.loginData.email,
			password: state.ht.loginData.password
		};
	}
};
const mapDispatchToProps = {
	storeLogin
};
const LoginInfo = connect(mapStateToProps, mapDispatchToProps)(
	compose(
		graphql(USER_PROFILE_QUERY, {
			options: (ownProps) => ({
				variables: {
					email: ownProps.email,
					password: ownProps.password
				}
			})
		})
	)(Login)
);

export default withRouter(LoginInfo);
