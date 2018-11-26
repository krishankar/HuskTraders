/**
 * External dependencies
 */
import React, { Component } from 'react';
import './Account.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';

class Step2 extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array,
			createUserProfile: PropTypes.func,
			updateUserProfile: PropTypes.func
		}).isRequired
	};

	constructor(props) {
		super(props);
		console.log('step2 props' + JSON.stringify(this.props));
		this.state = {
			UserProfile: {
				id: this.props.id,
				aadharNumber: '',
				businessName: '',
				gender: '',
				dob: '',
				address: '',
				qualification: '',
				workPhone: '',			
			},			
			dob: moment(),
			userType: this.props.userType,
			touched: {
				aadharNumber: false,
				businessName: false,
				gender: false,
				address: false,
				dob: false,
				qualification: false,
				workPhone: false,				
			},			
			loading: false,
			userSubmited: false
		};

		this.onUpdate = this.onUpdate.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.validate = this.validate.bind(this);
	}

	componentWillReceiveProps(newProps) {
		console.log(JSON.stringify(newProps) + 'step2 newProps');
		if (newProps.userType == 'Agent') {
			this.setState({
				userType: 'AG'
			});
		} 
		else if (newProps.userType == 'RiceMill') {
			this.setState({
				userType: 'RM'
			});
		}
		else if (newProps.userType == 'Factory') {
			this.setState({
				userType: 'FA'
			});
		}		
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
		const aadhar = /^\d{12}$/;
		const nameRegex = /[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/;
		const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		const dobpattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

		if (UserProfile.aadharNumber) {
			if (!aadhar.test(UserProfile.aadharNumber)) {
				errors.aadharNumber = 'please enter valid aadhar Number';
			}
		} else {
			errors.aadharNumber = 'Please enter aadhar Number ';
		}
		if (UserProfile.businessName) {
			if (!nameRegex.test(UserProfile.businessName)) {
				errors.businessName = 'Please enter valid Business Name';
			}
		} else {
			errors.businessName = 'Please enter Business Name ';
		}
		if (UserProfile.gender == '-1') {
			errors.gender = 'Please select Gender';
		}
		if (UserProfile.address) {
			if (!nameRegex.test(UserProfile.address)) {
				errors.address = 'please enter valid address';
			}
		} else {
			errors.address = 'Please enter address ';
		}
		if (UserProfile.qualification) {
			if (!nameRegex.test(UserProfile.qualification)) {
				errors.qualification = ' Please Enter valid qualification';
			}
		} else {
			errors.qualification = 'Please enter qualification ';
		}
		if (UserProfile.dob) {
			if (!dobpattern.test(UserProfile.dob)) {
			}
		} else {
			errors.dob = 'Please enter Valid Date Of Birth';
		}
		if (UserProfile.workPhone) {
			if (!phoneno.test(UserProfile.workPhone)) {
				errors.workPhone = 'Minimum 10 digits Required';
			}
		} else {
			errors.workPhone = 'Please enter work Phone Number';
		}
		
		return {
			errors,
			isValid: Object.keys(errors).length === 0
		};
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
				// alert("Welcome to Husk Traders")
				this.setState({
					UserProfile: {
						to: this.state.email
					}
				});
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
				// alert("Failed");
			});
	}

	updateUserProfile() {
		var HTS = 'HTS';
		var date = new Date().toString().split(' ').splice(1, 3).join(' ');
		var userType = this.state.userType;
		var id = Math.floor(1000 + Math.random() * 9000);
		var tradeId = HTS + '/' + date + '/' + userType + '/' + id;
		this.props
			.updateUserProfile({
				variables: {
					id: this.state.UserProfile.id,
					aadharNumber: this.state.UserProfile.aadharNumber,
					businessName: this.state.UserProfile.businessName,
					gender: this.state.UserProfile.gender,
					address: this.state.UserProfile.address,
					dob: this.state.UserProfile.dob,
					qualification: this.state.UserProfile.qualification,
					workPhone: this.state.UserProfile.workPhone,					
					tradeId: tradeId
				}
			})
			.then((user) => {
				this.sendEmail();
				this.props.onStep2Submitted();
				this.setState({
					touched: {
						aadharNumber: false,
						businessName: false,
						gender: false,
						address: false,
						dob: false,
						qualification: false,
						workPhone: false,						
					}
				});
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
									<div className="courtTitle">Join Husk Traders</div>
								</div>
								<div className="posRel">
									<div className="row setup-content" style={{ marginTop: '30px' }} id="step-3">
										<div className="col-xs-12">
											<div className="col-md-12">
												<div className="form-group">
													<input
														id="aadharNumber"
														type="text"
														maxLength="12"
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
														id="businessName"
														type="text"
														required="required"
														className="form-control"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
														placeholder="Business Name"
														name="businessName"
													/>
													<center
														style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
													>
														{touched.businessName &&
														!!errors.businessName && <span>{errors.businessName}</span>}
													</center>
												</div>

												<div className="form-group">
													<input
														className="form-control"
														type="date"
														name="dob"
														id="dob"
														required="required"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
													/>
													<center
														style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
													>
														{touched.dob && !!errors.dob && <span>{errors.dob}</span>}
													</center>
												</div>
												<div name="myform" className="form-group">
													<select
														className="form-control"
														name="gender"
														id="gender"
														required="required"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
													>
														<option selected>Male</option>
														<option>Female</option>
														<option>Other</option>
													</select>
												</div>
												<div className="form-group">
													<input
														id="qualification"
														type="text"
														required="required"
														className="form-control"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
														placeholder="Qualification"
														name="qualification"
													/>
													<center
														style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
													>
														{touched.qualification &&
														!!errors.qualification && <span>{errors.qualification}</span>}
													</center>
												</div>
												<div className="form-group">
													<input
														id="address"
														type="text"
														required="required"
														className="form-control"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
														placeholder="Address"
														name="address"
													/>
													<center
														style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
													>
														{touched.address &&
														!!errors.address && <span>{errors.address}</span>}
													</center>
												</div>
												<div className="form-group">
													<input
														id="workPhone"
														type="text"
														required="required"
														className="form-control"
														onChange={this.onUpdate.bind(this)}
														onBlur={this.onBlur}
														placeholder="Work Phone"
														name="workPhone"
													/>
													<center
														style={{ marginTop: 5, color: '#dfb924', fontSize: '14px' }}
													>
														{touched.workPhone &&
														!!errors.workPhone && <span>{errors.workPhone}</span>}
													</center>
												</div>												
												<button
													id="submit"
													type="submit"
													value="submit"
													className="btn btn-primary nextBtn btn-lg pull-right"
													style={{ cursor: 'pointer' }}
													disabled={!isValid}
													onClick={this.updateUserProfile.bind(this)}
												>
													Continue
												</button>
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
	query allUserProfiles {
		allUserProfiles {
			tradeId
		}
	}
`;

const UPDATE_USER_PROFILE = gql`
mutation updateUserProfile(
	$id: ID!
	$aadharNumber: String
	$businessName: String
	$dob: String
	$gender: String
	$address: String
	$qualification: String
	$workPhone: String		
	$tradeId: String
) {
	updateUserProfile(
		id: $id
		aadharNumber: $aadharNumber
		businessName: $businessName
		dob: $dob
		gender: $gender
		address: $address
		qualification: $qualification
		workPhone: $workPhone			
		tradeId: $tradeId
	) {
		id
		aadharNumber
		businessName
		dob
		gender
		address
		qualification
		workPhone		
		tradeId
	}
}
`;

export default compose(
	graphql(USER_PROFILE_QUERY, {
		options: (ownProps) => ({
			variables: {
				id: ownProps.id
			}
		})
	}),
	graphql(UPDATE_USER_PROFILE, { name: 'updateUserProfile' })
)(Step2);
