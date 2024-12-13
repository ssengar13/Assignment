import React from "react";
import Logo from '../img/logo.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={Logo} alt="" title="" />
                </Link>
                <p>
                  BOP Consultancy and Services: Empowering businesses through innovative technical solutions since 2014.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>

                  <Link to="https://www.linkedin.com/company/bop-consultancy-and-services/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>

                  <Link to="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="github">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                  BOP Consultancy and Services,<br />
                  Office No.701, Olympia Business House, Mohan Nagar Co-Op Society,<br /> Baner, Pune, Maharashtra 411021
                  <br />
                  <br /><strong>Phone:</strong> +91 99602 55106<br />
                  <strong>Email: </strong>
                  <a href="mailto:info@symbioticinfo.com">
                    work@consultbop.com
                  </a>
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
              </span>
              &copy;  Copyright
              <span> BOP - Consultancy and Services </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

    </>
  )

};

export default Footer;
