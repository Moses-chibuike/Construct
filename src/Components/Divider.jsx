import React from 'react';

function Divider() {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{ background: 'url(assets/img/hero-banner-1.jpg)' }}
      >
        <div className="dark-overlay">
          <div className="py-5 text-white overlay-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0">
                  <h2 className="h3 mb-3">
                    Trusted Mining{' '}
                    <span className="text-primary">Since 1989</span>
                  </h2>
                  <p className="text-small mb-0">
                    Association Minière du Mali has been a leading force in the mining industry for over 30 years, committed to excellence and sustainable practices.
                  </p>
                </div>
                <div className="col-lg-5 text-center text-lg-right">
                  <a className="btn btn-outline-light text-white" href="#">
                    Get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Divider;
