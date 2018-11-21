import React, { Component } from 'react';

class Menu extends Component {
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
												<a className="nav-link" href="/about">
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
													<a className="dropdown-item" href="services.html">
														Load Status
													</a>
													<a className="dropdown-item" href="/ricemillstatus" title>
														RiceMill Status
													</a>
													<a className="dropdown-item" href="" title>
														Factory Status
													</a>
													<a className="dropdown-item" href="/workersstatus" title>
														Workers Status
													</a>
												</div>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/newload">
													New Load
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="gallery.html">
													Gallery
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="blog.html">
													Blog
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="contact.html">
													Contact
												</a>
											</li>
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
export default Menu;
