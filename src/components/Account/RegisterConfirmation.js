import React, { Component } from 'react';
import Header from '../Global/Header';
import Menu from '../Global/Menu';
import Footer from '../Global/Footer';
import { withRouter } from 'react-router-dom';

class RegisterConfirmation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			RegisterConfirmationType: this.props.match.params.type
		};
	}
	componentWillMount() {
		window.scrollTo(0, 0);
	}
	render() {
		if ((this.state.RegisterConfirmationType == 'Response')){
			return (
				<div styles="background: #000">
					<section className="home mt-3">
						<Header />
						<Menu />
						<div className="container">
							<div className="row">								
								<div className="col-md-6">
									<h3 style={{ color: '#dfb924', marginTop: '30px', textAlign: 'center' }}>
										THANK YOU...
									</h3>
									<span style={{ color: '#dfb924', marginTop: '30px', fontSize: '20px' }}>
										Thank you for becoming a part of HUSK TRADERS. We will send you your materials to start
										selling and earn commission. You will be able to login to HUSK TRADERS using your phone
										number you used at the time of registration.
									</span>
									<button
										className="btn btn-primary nextBtn btn-lg pull-right"
										type="button"
										style={{ marginTop: '30px', borderRadius: '5px', cursor: 'pointer' }}
										onClick={() => {
											this.props.history.push('/Login');
										}}
									>
										Login
									</button>
								</div>							
							</div>
						</div>
						<Footer />
					</section>
				</div>
			);
		} else {
			if (this.state.RegisterConfirmationType == 'Failure') {
				return (
					<div styles="background: #000">
						<section className="home mt-3">
							<Header />
							<Menu />
							<div className="container">
								<div className="row">								
									<div className="col-md-6">
										<h2 style={{ color: '#dfb924', marginTop: '30px', textAlign: 'center' }}>
											SORRY...!!!
										</h2>
										<span style={{ color: '#dfb924', marginTop: '30px', fontSize: '20px' }}>
											We are sorry, but your Registration is not completed.
										</span>
									</div>									
								</div>
							</div>
							<Footer />
						</section>
					</div>
				);
			} else if (this.state.RegisterConfirmationType == 'RiceMill' || this.state.RegisterConfirmationType == 'Agent'||this.state.RegisterConfirmationType == 'Factory') {
				return (
					<div styles="background: #000">
						<section className="home mt-3">
							<div className="container">
								<div className="row">									
									<div className="col-md-6">
										<h3 style={{ color: '#dfb924', marginTop: '30px', textAlign: 'center' }}>
											Thank You For Registering
										</h3>
									</div>									
								</div>
							</div>
						</section>
					</div>
				);
			}
		}
	}
}

export default withRouter(RegisterConfirmation);
