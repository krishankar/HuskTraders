/**
 * External dependencies
 */
import React, { Component } from 'react';
import './Account.css';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import store from '../../store';

class RiceMillRegister extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allRiceMillDatas: PropTypes.array,
			createUserProfile: PropTypes.func
		}).isRequired
	};

	constructor(props) {
		super(props);
		console.log(JSON.stringify(props) + 'phone props');
		this.state = {
			Advocate: {
				id: '',
				name: '',
				email: '',
				password: '',
				confirmPassword: '',				
				aadharNumber: '',				
				homeAddress: '',
				officeAddress: '',
				mailAddress:'',
				phone: ''
			},
			userType: this.props.userType,
			touched: {
				name: false,
				email: false,
				password: false,
				confirmPassword: false,
				enrollmentNumber: false,				
				homeAddress: false,
				officeAddress: false			
			},
			loading: false,
			userSubmited: false
		};

		this.onUpdate = this.onUpdate.bind(this);
		this.onBlur = this.onBlur.bind(this);
	    this.validate = this.validate.bind(this);
	}

	componentWillReceiveProps(newProps) {
		console.log(JSON.stringify(newProps) + 'newPeops');
		if (newProps.userType == 'RiceMill') {
			this.setState({
				userType: 'RM'
			});
		}
		this.setState({
			RiceMill: newProps.data.allRiceMillDatas[0],
			name: newProps.data.allRiceMillDatas[0].name,
			email: newProps.data.allRiceMillDatas[0].email,
			homeAddress: newProps.data.allRiceMillDatas[0].homeAddress,
			officeAddress: newProps.data.allRiceMillDatas[0].officeAddress,
			phone: newProps.data.allRiceMillDatas[0].phone,
			loading: true
		});
	}

	onUpdate(e) {
		//e - form
		//target - field
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const targetName = target.name;
		console.log(targetName + ' ' + value);

		let RiceMill = Object.assign({}, this.state.RiceMill);
		RiceMill[targetName] = value;

		this.setState({
			RiceMill
		});
	}

	onBlur(e) {
		let touched = Object.assign({}, this.state.touched);
		touched[e.target.name] = true;
		this.setState({
			touched
		});
	}

	sendEmail() {
		//API Call
		fetch('/api/account/send/welcomemail', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'to=' + this.state.email
		})
			.then((status) => {
				// alert('Welcome to Mla');
				this.setState({
					Advocate: {
						to: this.state.email
					}
				});
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
				// alert('Failed');
			});
	}

	validate() {
		const errors = {};
		const { RiceMill } = this.state;
		const aadhar = /^\d{12}$/;
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const nameRegex = /[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/;
		const passwrd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (RiceMill.name) {
			if (!nameRegex.test(RiceMill.name)) {
				errors.name = 'Please enter valid name';
			}
		} else {
			errors.name = 'Please enter name';
		}
		if (RiceMill.email) {
			if (!emailRegex.test(RiceMill.email)) {
				errors.email = ' Please enter valid Email';
			}
		} else {
			errors.email = ' Please enter Email';
		}
		if (RiceMill.homeAddress) {
			if (!nameRegex.test(RiceMill.homeAddress)) {
				errors.homeAddress = 'please enter valid home address';
			}
		} else {
			errors.homeAddress = 'Please enter home address ';
		}
		if (RiceMill.officeAddress) {
			if (!nameRegex.test(RiceMill.officeAddress)) {
				errors.officeAddress = 'please enter valid office address';
			}
		} else {
			errors.officeAddress = 'Please enter office address ';
		}
		if (RiceMill.aadharNumber) {
			if (!aadhar.test(RiceMill.aadharNumber)) {
				errors.aadharNumber = 'please enter valid aadhar Number';
			}
		} else {
			errors.aadharNumber = 'Please enter aadhar Number ';
		}
		if (!RiceMill.experience) {
			errors.experience = 'Please enter experience';
		}
		if (RiceMill.password) {
			if (!passwrd.test(RiceMill.password)) {
				errors.password = 'Minimum 8 characters, at least one letter and one number';
			}
		} else {
			errors.password = 'Please enter Password';
		}
		if (RiceMill.confirmPassword) {
			if (RiceMill.confirmPassword != RiceMill.password) {
				errors.confirmPassword = 'password does not match';
			}
		} else {
			errors.confirmPassword = 'Confirm Password is required';
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0
		};
	}

	createUserProfile() {
		var HT = 'HT';
		var date = new Date().toString().split(' ').splice(1, 3).join(' ');
		var userType = this.state.userType;
		var id = Math.floor(1000 + Math.random() * 9000);
		var HTId = HT + '/' + date + '/' + userType + '/' + id;
		
		console.log(JSON.stringify(store.getState()) + 'redux data');
		this.props
			.createUserProfile({
				variables: {
					firstName: this.state.RiceMill.name,
					email: this.state.RiceMill.email,
					phoneNumber: this.state.RiceMill.phone,
					password: this.state.RiceMill.password,
					userType: this.props.userType,
					aadharNumber: this.state.RiceMill.aadharNumber,
					advEnrollmentNumber: this.state.RiceMill.enrollmentNumber,
					advExperience: this.state.RiceMill.experience,
					address: this.state.RiceMill.officeAddress,
					mailAddress:this.state.RiceMill.mailAddress + "@husk.trade.com",
					htId: HTId
				}
			})
			.then((user) => {
				this.sendEmail();
				console.log(JSON.stringify(user) + 'step1');
				localStorage.setItem('userid', user.data.createUserProfile.id);
				localStorage.setItem('userType', user.data.createUserProfile.userType);
				localStorage.setItem('email', user.data.createUserProfile.email);
				let RiceMill = Object.assign({}, this.state.UserProfile);
				RiceMill['id'] = user.data.createUserProfile.id;
				this.setState(
					{
						RiceMill,
						touched: {
							name: false,
							email: false,
							password: false,
							confirmPassword: false,							
							homeAddress: false,
							officeAddress: false							
						}
					},
					() => {
						this.props.onRiceMillSubmitted(user.data.createUserProfile.id);
					}
				);
			})
			.catch((error) => {
				console.log('error is' + JSON.stringify(error));
			});
	}

	render() {
		const {touched } = this.state;
		const { errors, isValid } = this.validate();
		return (
			<div styles="background: #000">
				<section className="home mt-3">
					<div className="container">
						<div className="row">
							<div className="pillar col-md-3 leftPillar" />
							<div className="col-md-6 content">
								<div className="posRel">
									<h3>Register to Join HUSK TRADERS!</h3>
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
															value={this.state.RiceMill.name}
															placeholder="Name"
															name="name"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.name &&
															!!errors.name && <span>{errors.name}</span>}
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
															value={this.state.RiceMill.email}
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
															id="phoneNumber"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															value={this.state.RiceMill.phone}
															placeholder="Phone"
															name="phone"
														/>
													</div>
													<div className="form-group">
														<input
															id="homeAddress"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															value={this.state.RiceMill.homeAddress}
															placeholder="Home Address"
															name="homeAddress"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.homeAddress &&
															!!errors.homeAddress && <span>{errors.homeAddress}</span>}
														</center>
													</div>
													<div className="form-group">
														<input
															id="officeAddress"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															value={this.state.RiceMill.officeAddress}
															placeholder="Office Address"
															name="officeAddress"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.officeAddress &&
															!!errors.officeAddress && (
																<span>{errors.officeAddress}</span>
															)}
														</center>
													</div>
													<div className="form-group">
														<input
															id="aadharNumber"
															type="text"
															required="required"
															className="form-control"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
															placeholder="Aadhar Number"
															name="aadharNumber"
														/>
														<center
															style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
														>
															{touched.aadharNumber &&
															!!errors.aadharNumber && <span>{errors.aadharNumber}</span>}
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
													<div className="input-group mb-2 mr-2">
														<input
															type="text"
															className="form-control"
															name="mailAddress"
															placeholder="Your mail address"
															onChange={this.onUpdate.bind(this)}
														/>
														<div className="input-group-prepend">
															<div className="input-group-text" style={{color:"#dfb924", marginTop:"5px", fontSize:"15px" }}>@mla.us.com</div>
														</div>
													</div>
													<button
														type="submit"
														value="submit"
														className="btn btn-primary nextBtn btn-lg pull-right"
														style={{ cursor: 'pointer' }}
														disabled={!isValid}
														onClick={this.createUserProfile.bind(this)}
													>
														Submit
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
	query allAdvocateDatas($enrollmentNumber: String) {
		allAdvocateDatas(filter: { enrollmentNumber: $enrollmentNumber }) {
			id
			name
			email
			phone
			enrollmentNumber
			homeAddress
			officeAddress
		}
	}
`;

const ADD_USER_PROFILE = gql`
	mutation createUserProfile(
		$firstName: String
		$email: String
		$password: String
		$phoneNumber: String
		$userType: String
		$aadharNumber: String
		$advEnrollmentNumber: String
		$advExperience: String
		$address: String
		$mailAddress: String
		$mlaId: String
	) {
		createUserProfile(
			firstName: $firstName
			email: $email
			password: $password
			phoneNumber: $phoneNumber
			userType: $userType
			aadharNumber: $aadharNumber
			advEnrollmentNumber: $advEnrollmentNumber
			advExperience: $advExperience
			address: $address
			mailAddress: $mailAddress
			mlaId: $mlaId
		) {
			id
			firstName
			email
			phoneNumber
			password
			userType
			aadharNumber
			advEnrollmentNumber
			advExperience
			address
			mailAddress
			mlaId
		}
	}
`;
export default withRouter(
	compose(
		graphql(USER_PROFILE_QUERY, ADD_USER_PROFILE, { 
				name: 'createUserProfile' })(RiceMillRegister)
	)
)

