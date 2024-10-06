import React from 'react';

function Footer() {
  return (
    <>
      <footer
        className="text-white bg-cover bg-center"
        style={{ background: 'url(assets/img/hero-banner-1.jpg)' }}
      >
        <div className="dark-overlay">
          <div className="overlay-content">
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-lg-4 col-md-6">
                  <p className="text-light text-small mb-4">
                    <strong>AMDM</strong> has been a trusted name in the gold industry for over 30 years, providing premium gold products and services with a commitment to quality and customer satisfaction.
                  </p>
                  <p className="mb-1">
                    <i className="fas fa-envelope mr-3 text-primary fa-fw" />
                    <span className="text-small">
                      <strong>associationminieredumali@zohomail.com</strong>
                    </span>
                  </p>
                  <p className="mb-1">
                    <i className="fas fa-mobile mr-3 text-primary fa-fw" />
                    <span className="text-small">
                      <strong>+223 661 55100</strong>
                    </span>
                  </p>
                  <p className="mb-1">
                    <i className="fas fa-map-marker-alt mr-3 text-primary fa-fw" />
                    <span className="text-small">
                      <strong>Rue 265, Porte 103, Bamako, Mali</strong>
                    </span>
                  </p>
                </div>
                <div className="col-lg-2 col-md-6">
                  <h6 className="text-uppercase text-primary mt-3 mb-4">
                    Quick <span className="text-white">links</span>
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Home</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>About Us</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Products</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Contact Us</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>FAQ</strong></a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                  <h6 className="text-uppercase text-primary mt-3 mb-4">
                    Our <span className="text-white">products</span>
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Gold Bars</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Gold Coins</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Jewelry</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Investment Gold</strong></a></li>
                    <li className="mb-2"><a className="footer-link" href="#"><strong>Custom Orders</strong></a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                  <h6 className="text-uppercase text-primary mt-3 mb-4">
                    Opening <span className="text-white">hours</span>
                  </h6>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between pb-2">
                      <p className="text-small mb-0"><strong>Monday</strong></p>
                      <span className="text-small mb-0">9:00 am - 05:00 pm</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Tuesday</strong></p>
                      <span className="text-small mb-0">9:00 am - 05:00 pm</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Wednesday</strong></p>
                      <span className="text-small mb-0">9:00 am - 05:00 pm</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Thursday</strong></p>
                      <span className="text-small mb-0">9:00 am - 05:00 pm</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Friday</strong></p>
                      <span className="text-small mb-0">9:00 am - 05:00 pm</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Saturday</strong></p>
                      <p className="text-small mb-0 text-uppercase text-primary"><strong>Closed</strong></p>
                    </li>
                    <li className="d-flex align-items-center justify-content-between py-1">
                      <p className="text-small mb-0"><strong>Sunday</strong></p>
                      <p className="text-small mb-0 text-uppercase text-primary"><strong>Closed</strong></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container text-center">
              <div className="border-top py-4">
                <p className="mb-0 text-white text-small">
                  © All rights reserved. Powered by{' '}
                  <a href="https://newmangold.com" className="text-white">
                    <strong>Association Minière du Mali</strong>
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
