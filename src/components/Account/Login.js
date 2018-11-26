import React, { Component } from 'react';
import './Account.css';
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
				<div styles="background: #000">
					<section className="home mt-3">
						<div className="container">
							<div className="row">								
								<div className="col-md-6">
									<div className="indianPenalCode text-center">
										<div className="courtTitle">Login</div>
									</div>							
									<div className=""  style={{justifyContent: "center", paddingTop:"30px"}}>
										<form role="forms" styles="color: #e9c126">
											<div className="row setup-content" id="step-1">
												<div className="col-xs-12">
													<div className="col-md-12">
														<div className="form-group">
															<input maxLength="100" type="text" required="required" className="form-control" onChange={this.onUpdate.bind(this)} id="email" ref={(input) => { this.email = input; }} placeholder="Email" />
														</div>
														<div className="form-group">
															<input maxLength="100" type="password" required="required" className="form-control" onChange={this.onUpdate.bind(this)} id="password" ref={(input) => { this.password = input; }} placeholder="Password" />
														</div>
														<button className="btn btn-primary nextBtn btn-lg pull-right" type="button" onClick={this.login} >Login</button>
													</div>
													<a className="nav-link" href="./account/reset" className="signin" style={{ textDecoration: "None", }}>Forgot Password</a>
													<div className="mt-5">
													<a style={{justifyContent: "center", color:"white", paddingTop:"30px"}}>New to Husk Traders? Click Register in the menu to signup</a>
													</div>
												</div>												
											</div>
										</form>						
										<div className="stepwizard d-none">
											<div className="stepwizard-row setup-panel">
												<div className="stepwizard-step">
													<a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
												</div>
											</div>
										</div>
									</div>
								</div>								
							</div>
						</div>
					</section>
				</div>
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
