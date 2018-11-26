import React, {Component} from 'react'

class Blog extends Component{
 
    render(){
        return(
            <div> 
              <div className="inner-page">
              </div>
              {/* /breadcrumb */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Blog</li>
              </ol>
              {/* //breadcrumb */}
              <section className="banner-bottom-w3layouts py-lg-5 py-md-5 py-3">
                <div className="container">
                  <div className="inner-sec-w3ls-agileits py-lg-5 py-3">
                    <h4 className="sub-tittle text-uppercase text-center">Recent Talks</h4>
                    <h3 className="tittle text-center mb-md-5 mb-4"> Blog Posts</h3>
                    <div className="row">
                      <div className="col-lg-8 left-blog-info text-left">
                        <div className="blog-sec">
                          <div className="about-in blog-grid-info text-left">
                            <div className="card img">
                              <div className="card-body img">
                                <img src="images/1.jpg" alt className="img-fluid" />
                                <div className="blog-des blogger">
                                  <span className="entry-date">June 18, 2018</span>
                                  <h5 className="card-title text-uppercase mt-2"><a href="single.html">Vivamus id tempor felis. Cras sagittis mi sit amet </a></h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.
                                  </p>
                                  <div className="log-in mt-md-3 mt-2">
                                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="about-in blog-grid-info text-left my-lg-4 ">
                            <div className="card img">
                              <div className="card-body img">
                                <img src="images/2.jpg" alt className="img-fluid" />
                                <div className="blog-des blogger">
                                  <span className="entry-date">June 20, 2018</span>
                                  <h5 className="card-title text-uppercase mt-2"><a href="single.html">Vivamus id tempor felis. Cras sagittis mi sit amet </a></h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.
                                  </p>
                                  <div className="log-in mt-md-3 mt-2">
                                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="about-in blog-grid-info text-left">
                            <div className="card img">
                              <div className="card-body img">
                                <img src="images/3.jpg" alt className="img-fluid" />
                                <div className="blog-des blogger">
                                  <span className="entry-date">June 25, 2018</span>
                                  <h5 className="card-title text-uppercase mt-2"><a href="single.html">Vivamus id tempor felis. Cras sagittis mi sit amet </a></h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.
                                  </p>
                                  <div className="log-in mt-md-3 mt-2">
                                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*//left*/}
                      {/*right*/}
                      <aside className="col-lg-4 right-blog-con text-right">
                        <div className="right-blog-info text-left">
                          <div className="tech-btm">
                            <img src="images/g4.jpg" className="img-fluid rounded" alt />
                          </div>
                          <div className="tech-btm">
                            <h4>Sign up to our newsletter</h4>
                            <p>Pellentesque dui, non felis. Maecenas male </p>
                            <form action="#" method="post">
                              <input className="form-control" type="email" placeholder="Email" required />
                              <input className="form-control" type="submit" defaultValue="Subscribe" />
                            </form>
                          </div>
                          <div className="tech-btm">
                            <h4>Categories</h4>
                            <ul className="list-group single">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tech-btm">
                            <h4>Top stories of the week</h4>
                            <div className="blog-grids row mb-3">
                              <div className="col-md-5 blog-grid-left">
                                <a href="single.html">
                                  <img src="images/g3.jpg" className="img-fluid rounded" alt />
                                </a>
                              </div>
                              <div className="col-md-7 blog-grid-right">
                                <h5>
                                  <a href="single.html">Pellentesque dui, non felis. Maecenas male non felis </a>
                                </h5>
                                <div className="sub-meta">
                                  <span>
                                    <i className="far fa-clock" /> 20 Jan, 2018</span>
                                </div>
                              </div>
                            </div>
                            <div className="blog-grids row mb-3">
                              <div className="col-md-5 blog-grid-left">
                                <a href="single.html">
                                  <img src="images/g6.jpg" className="img-fluid rounded" alt />
                                </a>
                              </div>
                              <div className="col-md-7 blog-grid-right">
                                <h5>
                                  <a href="single.html">Pellentesque dui, non felis. Maecenas male non felis </a>
                                </h5>
                                <div className="sub-meta">
                                  <span>
                                    <i className="far fa-clock" /> 20 Feb, 2018</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-gd my-5 tech-btm">
                            <h4>Our Progress</h4>
                            <div className="progress">
                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress">
                              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress">
                              <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress">
                              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress">
                              <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="single-gd tech-btm">
                            <h4>Recent Post</h4>
                            <div className="blog-grids">
                              <div className="blog-grid-left">
                                <a href="single.html">
                                  <img src="images/g2.jpg" className="img-fluid rounded" alt />
                                </a>
                              </div>
                              <div className="blog-grid-right">
                                <h5>
                                  <a href="single.html">Pellentesque dui, non felis. Maecenas male</a>
                                </h5>
                              </div>
                              <div className="clearfix"> </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      {/*//right*/}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
    }
}
export default Blog;