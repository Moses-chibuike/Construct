import React from 'react';

function Hero() {
  return (
    <>
      <section>
        <div className="owl-carousel owl-theme-default hero-slider owl-nav-custom">
          <div
            className="hero-slide bg-cover bg-center py-5 with-border-image"
            style={{ background: 'url(assets/img/hero-banner-3.jpg)' }}
          >
            <div className="container text-white py-5 index-forward">
              <div className="row">
                <div className="col-lg-7">
                  <p className="h3 text-primary mb-0">Your investment</p>
                  <h1>Transforming Resources into Prosperity</h1>
                  <p className="lead">
                    At Association Minière du Mali, we ensure every ounce of gold
                    reflects our commitment to building a brighter future.
                  </p>
                  <a className="btn btn-primary text-white" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-slide bg-cover bg-center py-5 with-border-image"
            style={{ background: 'url(assets/img/hero-banner-2.jpg)' }}
          >
            <div className="container text-white py-5 index-forward">
              <div className="row">
                <div className="col-lg-7">
                  <p className="h3 text-primary mb-0">Crafting Value</p>
                  <h1>Dedicated to Gold, Dedicated to Mali</h1>
                  <p className="lead">
                    Discover how Association Minière du Mali creates lasting value
                    from our nation's rich gold reserves.
                  </p>
                  <a className="btn btn-primary text-white" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-slide bg-cover bg-center py-5 with-border-image"
            style={{ background: 'url(assets/img/hero-banner-1.jpg)' }}
          >
            <div className="container text-white py-5 index-forward">
              <div className="row">
                <div className="col-lg-7">
                  <p className="h3 text-primary mb-0">Your Legacy</p>
                  <h1>Our Commitment to Mali's Future</h1>
                  <p className="lead">
                    Trust Association Minière du Mali to uphold the gold standard
                    that safeguards your future and Mali's prosperity.
                  </p>
                  <a className="btn btn-primary text-white" href="#">
                    Learn More
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

export default Hero;
