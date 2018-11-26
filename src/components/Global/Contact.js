import React, {Component} from 'react'

class Contact extends Component{
 
    render(){
        return(
            <div>
                <div className="inner-pages">
            </div>
            {/* /breadcrumb */}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
            {/* //breadcrumb */}
            {/* contact */}
            <section className="banner-bottom-w3layouts pt-lg-5 pt-md-3 pt-3">
              <div className="inner-sec-w3ls-agileits pt-md-5 pt-md-3 pt-3">
                <h4 className="sub-tittle text-uppercase text-center">Find us</h4>
                <h3 className="tittle text-center mb-lg-5 mb-3">Contact Us</h3>
                <div className="container">
                  <div className="address row mb-5">
                    <div className="col-lg-4 address-grid">
                      <div className="row address-info">
                        <div className="col-md-3 address-left text-center">
                          <i className="far fa-map" />
                        </div>
                        <div className="col-md-9 address-right text-left">
                          <h6 className="ad-info text-uppercase mb-2">Address</h6>
                          <p> Bhimavaram West Godavari District AP 534201.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 address-grid">
                      <div className="row address-info">
                        <div className="col-md-3 address-left text-center">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="col-md-9 address-right text-left">
                          <h6 className="ad-info text-uppercase mb-2">Email</h6>
                          <p>Email :
                          <a href="mailto:shankar.krish777@gmail.com">shankar.krish777@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 address-grid">
                      <div className="row address-info">
                        <div className="col-md-3 address-left text-center">
                          <i className="fas fa-mobile-alt" />
                        </div>
                        <div className="col-md-9 address-right text-left">
                          <h6 className="ad-info text-uppercase mb-2">Phone</h6>
                          <p>+91 9951332209</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61194.55498269548!2d81.481121467284!3d16.543269628831887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1542882291532" allowFullScreen />
                  </div>
                  <div className="col-md-6 main_grid_contact">
                    <div className="form">
                      <h4 className="mb-4 text-left">Send us a message</h4>
                      <form action="#" method="post">
                        <div className="form-group">
                          <label className="my-2">Name</label>
                          <input className="form-control" type="text" name="Name" placeholder required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control" type="email" name="Email" placeholder required />
                        </div>
                        <div className="form-group">
                          <label>Message</label>
                          <textarea id="textarea" placeholder defaultValue={""} />
                        </div>
                        <div className="input-group1">
                          <input className="form-control" type="submit" defaultValue="Submit" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="login px-4 mx-auto mw-100">
                    <h5 className="text-center mb-4">Login Now</h5>
                    <form action="#" method="post">
                      <div className="form-group">
                        <label className="mb-2">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label className="mb-2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder required />
                      </div>
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" className="btn btn-primary submit mb-4">Sign In</button>
                      <p className="text-center pb-4">
                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter2"> Don't have an account?</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </div>
      )
    }
}
export default Contact;