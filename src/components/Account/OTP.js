import React, { Component } from 'react';
// import './Account.css';

class OTP extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			OtpVerification: {
				phone: '',
				otp: '',
			},
			loading: false,
			userSubmited: true
		};

		this.onUpdate = this.onUpdate.bind(this);
	}

	onUpdate(e) {
		//e - form
		//target - field
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const targetName = target.name;
		console.log(targetName + " " + value)

		let OtpVerification = Object.assign({}, this.state.OtpVerification);
		OtpVerification[targetName] = value;

		this.setState({
			OtpVerification
		})
	}

	sendOtp(e) {
		e.preventDefault();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (this.state.OtpVerification["phone"].match(phoneno)) {
			var otp = Math.floor(1000 + Math.random() * 9000);
			console.log(otp + "random otp")
			let OtpVerification = Object.assign({}, this.state.OtpVerification);
			OtpVerification["otp"] = otp;
			OtpVerification["phone"] = this.state.OtpVerification.phone
			this.setState({
				OtpVerification
			}, () => {
				localStorage.setItem('otp', otp);
				var formBody = [];
				for (var property in this.state.OtpVerification) {
					console.log(property)
					var encodedKey = encodeURIComponent(property);
					var encodedValue = encodeURIComponent(this.state.OtpVerification[property]);
					formBody.push(encodedKey + "=" + encodedValue);
				}
				formBody = formBody.join("&");
				console.log(formBody)
				//API Call
				fetch('/api/account/send/sms', {
					method: 'post',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: formBody
				})
					.then((status) => {						
						this.setState({
							OtpVerification: {
								phone: this.state.OtpVerification.phone ,
								otp: ''
							},
						})
					})
					.catch((err) => {
						console.log(JSON.stringify(err))
						alert("Failed");
					})
			})
		}
		else if (this.state.OtpVerification["phone"] === "") {
			alert("Please Enter Valid Phone Number")
			window.location.reload(true);
		}
		else {
			alert("Invalid Phone Number. Enter valid 10 digit Phone Number")
			window.location.reload(true);
		}
	}

	verifyOtp(e) {
		e.preventDefault();
		if (localStorage.getItem('otp') == this.state.OtpVerification["otp"]) {
			this.props.onOtpVerified(this.state.OtpVerification.phone);
		}
		else {
			alert("OTP entered is invalid. Please reenter valid OTP sent to your mobile phone");
		}
	}

	reSend() {
		localStorage.clear()
		window.location.reload(true);
	}

	render() {
		if (this.state.userSubmited) {
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
        				<h1 style={{}}>Join Husk Traders</h1>
						<h2>Enter Your Number!</h2>
						<p>We will send you one time verification code</p>

						<div className="main">
							<div className="data" style={{ marginTop :'0px' }}>
								<form>
									<div className="control">
										<span className="st" />
										<input className="LoginInput" maxLength="100" type="text" name="phone" required="required" onChange={this.onUpdate.bind(this)} id="phone" ref={(input) => { this.phone = input; }} placeholder="Phone Number  "/>
									</div>
									{/* <div className="control"><span className="tag" style={{}}>PASSWORD</span>
										<span className="st" />
										<input className="LoginInput" type="password" required="required" onChange={this.onUpdate.bind(this)} id="password" ref={(input) => { this.password = input; }}  />
									</div>										 */}
									<div className="control">								
									<button className="btn btn-primary nextBtn btn-lg pull-right"
													style={{ cursor: 'pointer', marginBottom: '20px', borderRadius: '20px' }}
													type="button"
													onClick={this.sendOtp.bind(this)}
												>
												Join
											</button>
										
									</div>			  
								</form>
							</div>
						</div>  	


{
									(localStorage.getItem('otp')) ?
										<div className="row setup-content" style={{marginTop: "30px" }} id="step-2">
											<div className="otp-verifaction" >
												<p>The OTP has been sent to {this.state.OtpVerification.phone}</p>
												<div className="col-md-12">
													<div className="form-group">	
														<input
															maxLength="100"
															name="otp"
															type="text"
															required="required"
															className="form-control"
															style={{ width: "70%" ,margin: "37px"}}
															onChange={this.onUpdate.bind(this)}
															id="otp"
															ref={(input) => { this.otp = input; }}
															placeholder="OTP"
														/>
													</div>
												</div>
												<button
													className="btn btn-primary nextBtn btn-lg pull-right"
													style={{ cursor: 'pointer', borderRadius: '20px', marginRight: "80px" }}
													onClick={this.verifyOtp.bind(this)}
													type="button"
												>
													Verify
												</button>
												<button
													className="btn btn-primary nextBtn btn-lg pull-left"
													style={{ cursor: 'pointer', marginBottom: '20px', borderRadius: '20px' ,marginLeft:'30px'}}
													type="button" onClick={this.reSend.bind(this)}
												>
													Resend
			            						</button>
											</div>
										</div>
										: ""
								}

							
							 
					</div>
					<div className="stepwizard d-none">
			 							<div className="stepwizard-row setup-panel">
			 								<div className="stepwizard-step">
			 									<a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
			 								</div>
			 								<div className="stepwizard-step">
			 									<a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
			 								</div>
			 							</div>
									</div>
				</div>	

			// 	<section>
			// 	<div className="mian-content"></div>
			// 		<div className="header-top-w3layouts-agile">
			// 			<div className="header-bg" style={{backgroundColor:"white"}}>
			// 				<div className="container">							
			// 					<div className="col-md-6 content">
			// 						<h1>Join Husk Traders</h1>
			// 						<div className="posRel">
			// 							<div className="formpayu" role="form" styles="color: #e9c126">
			// 								<div className="row setup-content" style={{ marginTop: "30px" }} id="step-1">
			// 									<h3 style={{ marginBottom: "20px", left: 0, marginTop: 0 }}>Enter Your Number!</h3>
			// 									<p>We will send you one time verification code</p>
			// 									<div className="col-xs-12">
			// 										<div className="col-md-12">

			// 											<div className="form-group">
			// 												<input
			// 													maxLength="100"
			// 													type="text"
			// 													name="phone"
			// 													required="required"
			// 													className="form-control"
			// 													onChange={this.onUpdate.bind(this)}
			// 													id="phone"
			// 													ref={(input) => {
			// 														this.phone = input;
			// 													}}
			// 													placeholder="Phone Number"
			// 												/>

			// 											</div>
			// 										<button
			// 											className="btn btn-primary nextBtn btn-lg pull-right"
			// 											style={{ cursor: 'pointer', marginBottom: '20px', borderRadius: '20px' }}
			// 											type="button"
			// 											onClick={this.sendOtp.bind(this)}
			// 										>
			// 											Join
			// 										</button>
			// 									</div>
			// 							</div>
			// 							{
			// 								(localStorage.getItem('otp')) ?
			// 									<div className="row setup-content" style={{marginTop: "30px" }} id="step-2">
			// 										<div className="otp-verifaction" >
			// 											<p>The OTP has been sent to {this.state.OtpVerification.phone}</p>
			// 											<div className="col-md-12">
			// 												<div className="form-group">
			// 													<input
			// 														maxLength="100"
			// 														name="otp"
			// 														type="text"
			// 														required="required"
			// 														className="form-control"
			// 														style={{ width: "70%" }}
			// 														onChange={this.onUpdate.bind(this)}
			// 														id="otp"
			// 														ref={(input) => { this.otp = input; }}
			// 														placeholder="OTP"
			// 													/>
			// 												</div>
			// 											</div>
			// 											<button
			// 												className="btn btn-primary nextBtn btn-lg pull-right"
			// 												style={{ cursor: 'pointer', borderRadius: '20px', marginRight: "80px" }}
			// 												onClick={this.verifyOtp.bind(this)}
			// 												type="button"
			// 											>
			// 												Verify
			// 											</button>
			// 											<button
			// 												className="btn btn-primary nextBtn btn-lg pull-left"
			// 												style={{ cursor: 'pointer', marginBottom: '20px', borderRadius: '20px' }}
			// 												type="button" onClick={this.reSend.bind(this)}
			// 											>
			// 												Resend
			// 		            						</button>
			// 										</div>
			// 									</div>
			// 									: ""
			// 							}
			// 						</div>
			// 						<div className="stepwizard d-none">
			// 							<div className="stepwizard-row setup-panel">
			// 								<div className="stepwizard-step">
			// 									<a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
			// 								</div>
			// 								<div className="stepwizard-step">
			// 									<a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
			// 								</div>
			// 							</div>
			// 						</div>
			// 					</div>
			// 				</div>						
			// 			</div>
			// 		</div>
			// 	</div>
			// </section>				
			)
		}
		else {
			return (
				<div>
					Loading...
				</div>
			)
		}
	}
}

export default OTP;