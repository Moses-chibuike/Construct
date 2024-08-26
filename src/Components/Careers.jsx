import React from 'react';

function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-position"
        style={{ background: "url(assets/img/hero-banner-2.jpg)" }}
      >
        <div className="dark-overlay dark-overlay-lighter py-5">
          <div className="overlay-content">
            <div className="container text-center py-5">
              <h1 className="text-white">Careers</h1>
              <nav
                className="d-flex justify-content-center"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb bg-none mb-0">
                  <li className="breadcrumb-item">
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Careers
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Working at Company Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5 text-center">
              <h2 className="display-4 mb-3" style={{ fontWeight: 'bold' }}>Why work at AMDM?</h2>
              <p className="lead text-muted">
                Join a team that's shaping the future of the mining industry.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="p-4 bg-white shadow-sm mb-4">
                <h4 className="h5" style={{ fontWeight: 'bold' }}>Innovation</h4>
                <p className="text-muted">
                  Be part of a company that prioritizes innovation, adopting the latest technologies to revolutionize the mining industry.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="p-4 bg-white shadow-sm mb-4">
                <h4 className="h5" style={{ fontWeight: 'bold' }}>Culture</h4>
                <p className="text-muted">
                  Experience a supportive and inclusive culture where everyone’s ideas are valued, and collaboration is key.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="p-4 bg-white shadow-sm mb-4">
                <h4 className="h5" style={{ fontWeight: 'bold' }}>Growth</h4>
                <p className="text-muted">
                  Take advantage of continuous learning opportunities and career development programs to help you reach your full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-4 mb-3">Employee Benefits</h2>
              <p className="lead">
                We offer a comprehensive benefits package that ensures our team members are well-supported both professionally and personally.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="bg-secondary p-4 shadow-sm rounded">
                <h4 className="h5">Health & Wellness</h4>
                <p className="text-light">
                  Comprehensive health, dental, and vision insurance plans to keep you and your family healthy.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-secondary p-4 shadow-sm rounded">
                <h4 className="h5">Retirement Plans</h4>
                <p className="text-light">
                  Secure your future with our competitive retirement savings plans with company matching.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-secondary p-4 shadow-sm rounded">
                <h4 className="h5">Paid Time Off</h4>
                <p className="text-light">
                  Enjoy a generous amount of paid time off and holidays to rest and recharge.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-secondary p-4 shadow-sm rounded">
                <h4 className="h5">Professional Development</h4>
                <p className="text-light">
                  We invest in your growth with ongoing training and professional development opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="h3 mb-5 text-center">Current Job Openings</h2>
          <div className="row">
            {/* Job Opening 1 */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm">
                <h3 className="h5">Mining Engineer</h3>
                <p className="text-muted">
                  Location: Bamako, Mali <br />
                  Experience: 5+ years <br />
                  Employment Type: Full-Time
                </p>
                <a className="btn btn-primary" href="#">
                  View Details
                </a>
              </div>
            </div>
            {/* Job Opening 2 */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm">
                <h3 className="h5">Market Analyst</h3>
                <p className="text-muted">
                  Location: London, UK <br />
                  Experience: 3+ years <br />
                  Employment Type: Full-Time
                </p>
                <a className="btn btn-primary" href="#">
                  View Details
                </a>
              </div>
            </div>
            {/* Job Opening 3 */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm">
                <h3 className="h5">Investment Consultant</h3>
                <p className="text-muted">
                  Location: Dubai, UAE <br />
                  Experience: 7+ years <br />
                  Employment Type: Full-Time
                </p>
                <a className="btn btn-primary" href="#">
                  View Details
                </a>
              </div>
            </div>
            {/* Job Opening 4 */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm">
                <h3 className="h5">Geologist</h3>
                <p className="text-muted">
                  Location: Johannesburg, South Africa <br />
                  Experience: 4+ years <br />
                  Employment Type: Full-Time
                </p>
                <a className="btn btn-primary" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container bg-light mt-5 mb-5">
        <section
          className="bg-cover bg-center"
          style={{ background: 'url(assets/img/hero-banner-2.jpg)' }}
        >
          <div className="dark-overlay">
            <div className="py-5 text-white overlay-content">
              <div className="container px-lg-5">
                <div className="row align-items-center">
                  <div className="col-lg-7 text-center text-lg-left">
                    <h2 className="h3 mb-3">Join Our Team</h2>
                    <p className="text-small mb-0">
                      Interested in working with us? We’d love to hear from you! Submit your resume or reach out to our HR team for more information about our career opportunities.
                    </p>
                  </div>
                  <div className="col-lg-5 text-center text-lg-right">
                    <a className="btn btn-outline-light text-white" href="#">
                      Contact HR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Careers;
