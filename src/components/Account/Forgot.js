import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';

class Forgot extends Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			allUserProfiles: PropTypes.array
		}).isRequired
	};

	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			ForgotPassword: {
				email: ''
			},
			touched: {
				email: false
			},
			emailVerification: [],
			loading: false,
			userSubmited: false
		};
		this.onUpdate = this.onUpdate.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
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

		let ForgotPassword = Object.assign({}, this.state.ForgotPassword);
		ForgotPassword[targetName] = value;

		this.setState({
			ForgotPassword
		});
	}

	onBlur(e) {
		let touched = Object.assign({}, this.state.touched);
		touched[e.target.name] = true;
		this.setState({
			touched
		});
	}

	forgotPassword() {
		//API Call
		fetch('/api/account/send/reset', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'to=' + this.state.ForgotPassword.email
		})
			.then((status) => {
				alert('Mail has ben sent successfully');
				window.location.reload();
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
				alert('Failed to send reset link');
			});
	}

	validate() {
		const errors = {};
		const { ForgotPassword } = this.state;
		if (ForgotPassword.email) {
			var count = 0;
			this.state.emailVerification &&
				this.state.emailVerification.map((emailAddress, key) => {
					console.log(ForgotPassword.email + '====' + emailAddress.email);
					if (ForgotPassword.email == emailAddress.email) {
						count = count + 1;
						console.log(count + 'email count');
					}
				});
			if (count == 0) {
				errors.email = 'Your mail is not registered with us';
			}
		} else {
			errors.email = 'Mail address is required';
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0
		};
	}

	render() {
		const { touched } = this.state;
		const { errors, isValid } = this.validate();
		return (
			<div styles="background: #000">
				<section className="home mt-3">
					<div className="container">
						<div className="row">
							<div className="col-md-6 content">
								<div className="indianPenalCode text-center">
									<div className="courtTitle" style={{ paddingBottom: '20px' }}>
										Reset Password
									</div>
								</div>
								<div className="posRel">
									<div className="formpayu" role="form" styles="color: #e9c126">
										<div className="row setup-content" id="step-1">
											<div className="col-xs-12">
												<div className="col-md-12">
													<p style={{ color: '#dfb924' }}>
														Forgotten your password? Enter your e-mail address below, and we
														will e-mail instructions for setting a new password on your
														account.
													</p>
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
													<button
														type="submit"
														value="submit"
														className="btn btn-primary nextBtn btn-lg "
														style={{ cursor: 'pointer' }}
														disabled={!isValid}
														onClick={this.forgotPassword}
													>
														Send Reset Link
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
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const FORGET_PASSWORD_QUERY = gql`
	query {
		allUserProfiles {
			email
		}
	}
`;

export default compose(graphql(FORGET_PASSWORD_QUERY))(Forgot);
