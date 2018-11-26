import React,{Component} from 'react'

class Gallery extends Component{

    render(){
        return(
            <div>
              <div className="inner-paged"></div>
              {/* /breadcrumb */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Gallery</li>
              </ol>
              {/* //breadcrumb */}
              {/*Gallery*/}
              <div className="banner-bottom-w3layouts py-lg-5 py-3">
                <div className="container">
                  <div className="inner-sec-w3ls-agileits py-lg-5 py-3">
                    <h4 className="sub-tittle text-uppercase text-center">What we do</h4>
                    <h3 className="tittle text-center mb-lg-5 mb-3">
                      Our Gallery</h3>
                    <div className="grid cs-style-5 row">
                      <div className="grid-info-img gal-page col-md-4">
                        <a href="images/AGR/01.jpg" className="gallery-box" data-lightbox="example-set" data-title>
                          <figure>
                            <img src="images/AGR/01.jpg" className="img-fluid" alt="img03" />
                            <figcaption>
                              <h3>Farm</h3>
                              <span>Lorem ipsum </span>
                            </figcaption>
                          </figure>
                        </a>
                        <div className="grid-gal mt-3">
                          <a href="images/AGR/02.jpg" className="gallery-box" data-lightbox="example-set" data-title>
                            <figure>
                              <img src="images/AGR/02.jpg" className="img-fluid" alt="img03" />
                              <figcaption>
                                <h3>Farm</h3>
                                <span>Lorem ipsum </span>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="grid-info-img gal-page col-md-4">
                        <a href="images/AGR/03.jpg" className="gallery-box" data-lightbox="example-set" data-title>
                          <figure>
                            <img src="images/AGR/03.jpg" className="img-fluid" alt="img03" />
                            <figcaption>
                              <h3>Farm</h3>
                              <span>Lorem ipsum </span>
                            </figcaption>
                          </figure>
                        </a>
                        <div className="grid-gal mt-3">
                          <a href="images/AGR/04.jpg" className="gallery-box mt-4" data-lightbox="example-set" data-title>
                            <figure>
                              <img src="images/AGR/04.jpg" className="img-fluid" alt="img03" />
                              <figcaption>
                                <h3>Farm</h3>
                                <span>Lorem ipsum </span>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="grid-info-img gal-page col-md-4">
                        <a href="images/AGR/05.jpg" className="gallery-box" data-lightbox="example-set" data-title>
                          <figure>
                            <img src="images/AGR/05.jpg" className="img-fluid" alt="img03" />
                            <figcaption>
                              <h3>Farm</h3>
                              <span>Lorem ipsum </span>
                            </figcaption>
                          </figure>
                        </a>
                        <div className="grid-gal mt-3">
                          <a href="images/AGR/06.jpg" className="gallery-box" data-lightbox="example-set" data-title>
                            <figure>
                              <img src="images/AGR/06.jpg" className="img-fluid" alt="img03" />
                              <figcaption>
                                <h3>Farm</h3>
                                <span>Lorem ipsum </span>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }
}

export default Gallery;