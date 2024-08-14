import React from 'react';

function Work() {
  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <header className="text-center mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <h2 className="text-uppercase">
                  <span className="text-primary">Our Latest </span>Projects
                </h2>
                <p className="text-muted">
                  Explore our latest projects that showcase our commitment to excellence in gold mining and processing.
                </p>
              </div>
            </div>
          </header>
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="shadow-sm box">
                <div className="position-relative overflow-hidden d-block">
                  <div className="box-overlay box-overlay-primary">
                    <a className="d-block w-100 h-100" href="#" />
                  </div>
                  <img className="w-100" src="assets/img/services-1.jpg" alt="Gold Mine Expansion" />
                </div>
                <div className="p-4 bg-dark text-white">
                  <h3 className="h5">
                    <a className="reset-anchor" href="#">Gold Mine Expansion</a>
                  </h3>
                  <p className="small mb-0">
                    Discover our recent expansion projects that increase our gold extraction capabilities.
                  </p>
                </div>
                <a className="btn btn-primary btn-block text-white" href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="shadow-sm box">
                <div className="position-relative overflow-hidden d-block">
                  <div className="box-overlay box-overlay-primary">
                    <a className="d-block w-100 h-100" href="#" />
                  </div>
                  <img className="w-100" src="assets/img/services-2.jpg" alt="Gold Refinement Process" />
                </div>
                <div className="p-4 bg-dark text-white">
                  <h3 className="h5">
                    <a className="reset-anchor" href="#">Gold Refinement</a>
                  </h3>
                  <p className="small mb-0">
                    Learn about our advanced techniques in gold refinement that ensure purity and quality.
                  </p>
                </div>
                <a className="btn btn-primary btn-block text-white" href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow-sm box">
                <div className="position-relative overflow-hidden d-block">
                  <div className="box-overlay box-overlay-primary">
                    <a className="d-block w-100 h-100" href="#" />
                  </div>
                  <img className="w-100" src="assets/img/services-3.jpg" alt="Environmental Sustainability" />
                </div>
                <div className="p-4 bg-dark text-white">
                  <h3 className="h5">
                    <a className="reset-anchor" href="#">Sustainable Mining</a>
                  </h3>
                  <p className="small mb-0">
                    Explore our initiatives in sustainable mining practices that minimize environmental impact.
                  </p>
                </div>
                <a className="btn btn-primary btn-block text-white" href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
