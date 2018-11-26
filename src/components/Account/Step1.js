import React, { Component } from 'react';
import './Account.css';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import store from '../../store';

class Step1 extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array,
			createUserProfile: PropTypes.func
		}).isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			UserProfile: {
				id: '',
				firstName: '',
				lastName: '',
				email: '',
				mailAddress: '',
				password: '',
				confirmPassword: ''
			},
			phone: this.props.phone,
			userType: this.props.userType,
			touched: {
				firstName: false,
				lastName: false,
				email: false,
				password: false,
				confirmPassword: false
			},
			emailVerification: [],			
			loading: false,
			userSubmited: false
		};
		
		this.onUpdate = this.onUpdate.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.validate = this.validate.bind(this);
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			emailVerification: newProps.data.allUserProfiles
		});
	}
	onUpdate(e) {
		//e - form
		//target - field
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const targetName = target.name;
		console.log(targetName + ' ' + value);

		let UserProfile = Object.assign({}, this.state.UserProfile);
		UserProfile[targetName] = value;

		this.setState({
			UserProfile
		});
	}

	onBlur(e) {
		let touched = Object.assign({}, this.state.touched);
		touched[e.target.name] = true;
		this.setState({
			touched
		});
	}

	validate() {
		const errors = {};
		const { UserProfile } = this.state;
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const nameRegex = /[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/;
		const passwrd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (UserProfile.firstName) {
			if (!nameRegex.test(UserProfile.firstName)) {
				errors.firstName = 'Please enter valid FirstName';
			}
		} else {
			errors.firstName = 'Please enter FirstName';
		}
		if (UserProfile.lastName) {
			if (!nameRegex.test(UserProfile.lastName)) {
				errors.lastName = 'Please enter valid LastName';
			}
		} else {
			errors.lastName = 'Please enter LastName';
		}
		if (UserProfile.email) {
			if (!emailRegex.test(UserProfile.email)) {
				errors.email = ' Please enter valid Email';
			}
		} else {
			errors.email = ' Please enter Email';
		}
		if (UserProfile.password) {
			if (!passwrd.test(UserProfile.password)) {
				errors.password = 'Minimum 8 characters, at least one letter and one number';
			}
		} else {
			errors.password = 'Please enter Password';
		}
		if (UserProfile.confirmPassword) {
			if (UserProfile.confirmPassword != UserProfile.password) {
				errors.confirmPassword = 'password does not match';
			}
		} else {
			errors.confirmPassword = 'Confirm Password is required';
		}
		if (UserProfile.mailAddress) {
			var count = 0;
			var userEmail = UserProfile.mailAddress + '@husk.trade.com';
			this.state.emailVerification &&
				this.state.emailVerification.map((email, key) => {
					if (userEmail == email.mailAddress) {
						count = count + 1;
					}
				});
			if (count > 0) {
				errors.mailAddress =
					'Your mail is already registered with MLA. Please choose different mail to register';
			}
		} else {
			errors.mailAddress = 'Mail address is required';
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0
		};
	}

	createUserProfile() {
		var HTS = "HTS"
		var date = (new Date()).toString().split(' ').splice(1,3).join(' ');
		var userType = this.state.userType
        var id = Math.floor(1000 + Math.random() * 9000);
		var HTId = HTS + "/" + (date) + "/" + userType + "/" + id
		console.log(JSON.stringify(store.getState()) + 'redux data');
		this.props
			.createUserProfile({
				variables: {
					firstName: this.state.UserProfile.firstName,
					lastName: this.state.UserProfile.lastName,
					email: this.state.UserProfile.email,
					phoneNumber: this.state.phone,
					password: this.state.UserProfile.password,
					mailAddress: this.state.UserProfile.mailAddress + '@husk.trade.com',
					userType: this.props.userType,
					htId:HTId				
				}
			})
			.then((user) => {
				console.log(JSON.stringify(user) + 'step1');
				localStorage.setItem('userid', user.data.createUserProfile.id);
				localStorage.setItem('userType', user.data.createUserProfile.userType);
				let UserProfile = Object.assign({}, this.state.UserProfile);
				UserProfile['id'] = user.data.createUserProfile.id;
				this.setState(
					{
						UserProfile,
						touched: {
							fullName: false,
							lastName: false,
							email: false,
							password: false,
							confirmPassword: false
						}
					},
					() => {
						this.props.onStep1Submitted(
							user.data.createUserProfile.id,
							user.data.createUserProfile.firstName,
							user.data.createUserProfile.email
						);
					}
				);
			})
			.catch((error) => {
				console.log('error is' + JSON.stringify(error));
			});
	}

	render() {
		const { UserProfile, touched } = this.state;
		const { errors, isValid } = this.validate();
		return (
			<div styles="background: #000">
				<section className="home mt-3">
					<div className="container">
						<div className="row">
							<div className="pillar col-md-3 leftPillar" />
							<div className="col-md-6 content">
								<div className="indianPenalCode text-center">
									<div className="courtTitle" style={{ paddingBottom: '20px' }}>
										Join Husk Traders
									</div>
								</div>
								<div className="posRel">
									<div className="formpayu" role="form" styles="color: #e9c126">
										<div className="row setup-content" style={{ marginTop: '30px' }} id="step-1">
											<div className="col-xs-12">
												<div className="col-md-12">
													<div className="form-group">
														<input
															id="firstName"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															placeholder="First Name"
															name="firstName"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.firstName &&
															!!errors.firstName && <span>{errors.firstName}</span>}
														</center>
													</div>
													<div className="form-group">
														<input
															id="lastName"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															placeholder="Last Name"
															name="lastName"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.lastName &&
															!!errors.lastName && <span>{errors.lastName}</span>}
														</center>
													</div>
													<div className="form-group">
														<input
															id="email"
															type="email"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															placeholder="Email"
															name="email"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.email &&
															!!errors.email && <span>{errors.email}</span>}
														</center>
													</div>
													<div className="form-group">
														<input
															id="password"
															type="password"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															placeholder="Password"
															name="password"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.password &&
															!!errors.password && <span>{errors.password}</span>}
														</center>
													</div>
													<div className="form-group">
														<input
															id="confirmPassword"
															type="password"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															name="confirmPassword"
															placeholder="Confirm Password"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.confirmPassword &&
															!!errors.confirmPassword && (
																<span>{errors.confirmPassword}</span>
															)}
														</center>
													</div>													
													<div>
														<div className="input-group mb-2 mr-2">
															<input
																type="text"
																className="form-control"
																name="mailAddress"
																placeholder="Your mail address"
																onChange={this.onUpdate.bind(this)}
																onBlur={this.onBlur}
															/>
															<div className="input-group-prepend">
																<div
																	className="input-group-text"
																	style={{
																		color: '#dfb924',
																		marginTop: '5px',
																		fontSize: '15px'
																	}}
																>
																	@husk.trade.com
																</div>
															</div>
														</div>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.mailAddress &&
															!!errors.mailAddress && <span>{errors.mailAddress}</span>}
														</center>
													</div>
													<button
														type="submit"
														value="submit"
														className="btn btn-primary nextBtn btn-lg pull-right"
														style={{ cursor: 'pointer' }}
														disabled={!isValid}
														onClick={this.createUserProfile.bind(this)}
													>
														Next
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="stepwizard d-none">
										<div className="stepwizard-row setup-panel">
											<div className="stepwizard-step">
												<a href="#step-1" type="button" className="btn btn-primary btn-circle">
													1
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pillar col-md-3 rightPillar" />
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const USER_PROFILE_QUERY = gql`
	query {
		allUserProfiles {
			mailAddress
		}
	}
`;

const ADD_USER_PROFILE = gql`
mutation createUserProfile(
	$firstName: String
	$lastName: String
	$email: String
	$password: String
	$phoneNumber: String
	$userType: String
	$mailAddress: String
) {
	createUserProfile(
		firstName: $firstName
		email: $email
		lastName: $lastName
		password: $password
		phoneNumber: $phoneNumber
		userType: $userType			
		mailAddress: $mailAddress
	) {
		id
		firstName
		lastName
		email
		phoneNumber
		password
		userType
	}
}
`;

export default withRouter(compose(graphql(USER_PROFILE_QUERY),
	graphql(ADD_USER_PROFILE, { name: 'createUserProfile' }))(Step1));