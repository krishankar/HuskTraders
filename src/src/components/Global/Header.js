import React, {Component} from 'react'

class Header extends Component{
 
    render(){
        return(
            <div className="header-top-w3layouts-agile">
            <div className="top-head-wthree text-left">
              <div className="row top-content-info">
                <div className="col-lg-6 top-content-left">
                  <ul className="header-info-w3ls">
                    <li>
                      <i className="far fa-envelope" /> <a href="mailto:info@example.com">mail@example.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" /> <a href="tel:+02223688199">+0222 3688 199</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Mon – Fri : 9:00 AM - 6:00 PM </li>
                  </ul>
                </div>
                <div className="col-lg-6 top-content-right">
                  <div className="land-gd">
                    <div className="hd-sc-one">
                      <div className="land-image text-center">
                        <i className="fas fa-map-signs" />
                      </div>
                      <div className="land-content">
                        <h4>The Best Landscaping</h4>
                      </div>
                    </div>
                  </div>
                  <div className="land-gd">
                    <div className="hd-sc-one">
                      <div className="land-image text-center">
                        <i className="fas fa-shield-alt" />
                      </div>
                      <div className="land-content">
                        <h4>Certified Company</h4>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 top-social-icons text-center">
                  <ul className="social-icons">
                    <li className="mr-1"><a href="#"><span className="fab fa-facebook-f" /></a></li>
                    <li className="mx-1"><a href="#"><span className="fab fa-twitter" /></a></li>
                    <li className="mx-1"><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                    <li className="mx-1"><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                  </ul>
                </div>
                <div className="col-md-6 logo text-center">
                  <h1>
                    <a className="navbar-brand" href="index.html">
                      <i className="fas fa-leaf" />Husk Traders</a>
                  </h1>
                </div>
                <div className="col-md-3 login-right-img text-center">
                  <a className="request text-uppercase" href="#" data-toggle="modal" data-target="#exampleModalCenter">Sign In</a>
                  <a className="request text-uppercase" href="#" data-toggle="modal" data-target="#exampleModalCenter2">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Header;