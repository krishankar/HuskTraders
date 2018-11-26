import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Menu extends Component {

	logout() {
		localStorage.clear();
		this.props.history.push('/Login');
	}

	dataToAgent() {
		localStorage.clear();
		window.location.href = '/Register/Agent';
	}
	
	dataToRiceMill() {
		localStorage.clear();
		window.location.href = '/Register/RiceMill';
	}

	dataToFactory() {
		localStorage.clear();
		window.location.href = '/Register/Factory';
	}

	render() {
		return (
			<div className="mian-content">
				<div className="header-top-w3layouts-agile">
					<div className="header-bg">
						<div className="container">
							<header>
								<nav className="navbar navbar-expand-lg navbar-light">
									<button
										className="navbar-toggler navbar-toggler-right mx-auto"
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span className="navbar-toggler-icon" />
									</button>
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav mr-lg-auto text-left">
											<li className="nav-item active">
												<a className="nav-link" href="/">
													Home
													<span className="sr-only">(current)</span>
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/About">
													About
												</a>
											</li>
											<li className="nav-item dropdown">
												<a
													className="nav-link dropdown-toggle"
													href="#"
													id="navbarDropdown"
													role="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
												>
													Services
													<i className="fas fa-angle-down" />
												</a>
												<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													<a className="dropdown-item" 
														onClick={() => {
															this.props.history.push('/Services/LoadStatus');
														}}	
														style={{ cursor: 'pointer' }}													
													>													
														Load Status
													</a>													
													<a className="dropdown-item" 
														onClick={() => {
															this.props.history.push('/Services/RiceMillStatus');
														}}
														style={{ cursor: 'pointer' }}
													>
														RiceMill Status
													</a>
													<a className="dropdown-item"
														onClick={() => {
															this.props.history.push('/Services/FactoryStatus');
														}}
														style={{ cursor: 'pointer' }}
													>
														Factory Status
													</a>
													<a className="dropdown-item" 
														onClick={() => {
															this.props.history.push('/Services/WorkerStatus');
														}}
														style={{ cursor: 'pointer' }}
													>
														Workers Status
													</a>
												</div>
											</li>
											<li className="nav-item">
												<a className="nav-link" 
													onClick={() => {
														this.props.history.push('/NewLoad');
													}}
													style={{ cursor: 'pointer' }}
												>
													New Load
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" 
													onClick={() => {
														this.props.history.push('/Gallery');
													}}
													style={{ cursor: 'pointer' }}
												>
													Gallery
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" 
													onClick={() => {
														this.props.history.push('/Blog');
													}}
													style={{ cursor: 'pointer' }}
												>
													Blog
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" 
													onClick={() => {
														this.props.history.push('/Contact');
													}}
													style={{ cursor: 'pointer' }}
												>
													Contact
												</a>
											</li>
											{localStorage.getItem('userType') == 'Advocate' ||
											localStorage.getItem('userType') == 'Policestation' ||
											localStorage.getItem('userType') == 'Court' ? (
												""
												):(
												<ul className="dropdown-menus" style={{ display: 'flex', listStyleType: 'none'}}>
													<li className="nav-item dropdown">
														<a
															className="nav-link dropdown-toggle menustyles"
															href=""
															id="navbarDropdownMenuLink"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"										
														>
															Register
														</a>
														<ul
															className="dropdown-menu menustyles"
															aria-labelledby="navbarDropdownMenuLink"										
														>
															<li>
																<a className="dropdown-item" onClick={this.dataToAgent.bind(this)}>
																	Agent
																</a>
															</li>
															<li>
																<a className="dropdown-item" onClick={this.dataToRiceMill.bind(this)}>
																	RiceMill
																</a>
															</li>
															<li>
																<a className="dropdown-item" onClick={this.dataToFactory.bind(this)}>
																	Factory
																</a>
															</li>										
														</ul>
													</li>
													<li className="nav-item">
														<a
															className="nav-link menustyles"										
															onClick={() => {
																this.props.history.push('/Login');
															}}
														>
															Login
														</a>
													</li>
												</ul>
											)}
										</ul>
										<form
											action="#"
											method="post"
											className="form-inline my-2 my-lg-0 header-search"
										>
											<input
												className="form-control"
												type="search"
												placeholder="Search here..."
												name="Search"
												required
											/>
											<button className="btn btn1 my-2 my-sm-0" type="submit">
												<i className="fas fa-search" />
											</button>
										</form>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Menu);
 