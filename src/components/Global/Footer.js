import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
         
            <footer className="footer-emp-wthree bg-dark dotts py-lg-5 py-3">
            <div className="container">
                <div className="row footer-top">
                <div className="col-lg-4 footer-grid-w3ls">
                    <div className="footer-title">
                    <h3>About Us</h3>
                    </div>
                    <div className="footer-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul className="social-icons">
                        <li className="mr-1"><a href="#"><span className="fab fa-facebook-f" /></a></li>
                        <li className="mx-1"><a href="#"><span className="fab fa-twitter" /></a></li>
                        <li className="mx-1"><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                        <li className="mx-1"><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 footer-grid-w3ls">
                    <div className="footer-title">
                    <h3>Get in touch</h3>
                    </div>
                    <div className="contact-info">
                    <h4>Location :</h4>
                    <p>Bhimavaram West Godavari District AP 534201.</p>
                    <div className="phone">
                        <h4>Contact :</h4>
                        <p>Phone : 9951332209</p>
                        <p>Email :
                        <a href="mailto:shankar.krish777@gmail.com">shankar.krish777@gmail.com</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 footer-grid-w3ls">
                    <div className="footer-title">
                    <h3>Quick Links</h3>
                    </div>
                    <ul className="links">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                        <a href="pricing.html">Services</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                    </ul>
                    <ul className="links">
                    <li>
                        <a href="services.html">Features</a>
                    </li>
                    <li>
                        <a href="contact.html">Support</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    </ul>
                    <div className="clearfix" />
                </div>
                </div>
                <div className="copyright-w3 mt-4">
                <p className="copy-right text-center ">COPYRIGHT © HUSK TRADERS, WORLD CLASS-LEGAL SAVIORS 2018.</p>
                </div>
            </div>
            </footer>
        )
    }
}
 
export default Footer;