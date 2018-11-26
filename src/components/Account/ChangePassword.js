import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

class ChangePassword extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array,
			updateUserProfile: PropTypes.func
		})
	};

	constructor(props) {
		super(props);
		this.state = {
			Newpassword: {
				id: this.props.match.params.id,
				password: '',
				confirmPassword: '',
				userSubmitted: false
			},
			touched: {
				password: false,
				confirmPassword: false,
			},
		};
		this.onBlur = this.onBlur.bind(this);
		this.validate = this.validate.bind(this);
	}

	onBlur(e) {
		let touched = Object.assign({}, this.state.touched);
		touched[e.target.name] = true;
		this.setState({
			touched
		});
	}

	onUpdate(e) {
		//e - form
		//target - field
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const targetName = target.name;
		console.log(targetName + ' ' + value);
		let Newpassword = Object.assign({}, this.state.Newpassword);
		Newpassword[targetName] = value;
		this.setState({
			Newpassword
		});
	}

	updateUserProfile() {
		console.log(JSON.stringify(this.state.Newpassword.password) + 'password');
		this.props
			.updateUserProfile({
				variables: {
					id: this.state.Newpassword.id,
					password: this.state.Newpassword.password
				}
			})
			.then((user) => {
				alert('password changed');
				this.setState({
					userSubmitted: true
				});
				this.props.history.push('/Login');
			})
			.catch((error) => {
				console.log('error is' + JSON.stringify(error));
			});
	}

	validate() {
		const errors = {};
		const { Newpassword } = this.state;
		const passwrd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (Newpassword.password) {
			if (!passwrd.test(Newpassword.password)) {
				errors.password = 'Minimum 8 characters, at least one letter and one number';
			}
		} else {
			errors.password = 'Please enter Password';
		}
		if (Newpassword.confirmPassword) {
			if (Newpassword.confirmPassword != Newpassword.password) {
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

	render() {
		const {touched } = this.state;
		const { errors, isValid } = this.validate();
		return (
			<div styles="background: #000">
				<section className="home mt-3">
					<div className="container">
						<div className="row">							
							<div className="col-md-6 content">
								<div className="indianPenalCode text-center">
									<div className="courtTitle">Change Password</div>
								</div>
								<div style={{ justifyContent: 'center', paddingTop: '30px' }}>
									<form role="form" styles="color: #e9c126">
										<div className="row setup-content" id="step-1">
											<div className="col-xs-12">
												<div className="col-md-12">
													<div className="form-group">
														<input
															className="form-control"
															type="password"
															name="password"
															placeholder="New Password"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
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
															className="form-control"
															type="password"
															name="confirmPassword"
															placeholder=" Confirm New Password"
															onChange={this.onUpdate.bind(this)}
															onBlur={this.onBlur}
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
													<button
														className="btn btn-primary nextBtn btn-lg pull-right"
														style={{ cursor: 'pointer' }}
														type="button"
														onClick={this.updateUserProfile.bind(this)}
														disabled={!isValid}
													>
														Submit
													</button>
												</div>
											</div>
										</div>
									</form>
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
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const UPDATE_USER_PROFILE = gql`
	mutation updateUserProfile($id: ID!, $password: String) {
		updateUserProfile(id: $id, password: $password) {
			id
			password
		}
	}
`;
export default withRouter(
	compose(
		graphql(UPDATE_USER_PROFILE, {
			options: (ownProps) => ({
				variables: {
					id: ownProps.match.params.id
				}
			})
		}),
		graphql(UPDATE_USER_PROFILE, { name: 'updateUserProfile' })
	)(ChangePassword)
);
