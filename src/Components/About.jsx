import React from 'react';

function About() {
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
              <h1 className="text-white">About Us</h1>
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
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="h3 mb-3">Our Legacy</h2>
              <p className="text-muted mb-4">
                Since 1889, our company has been at the forefront of gold mining, refining, and trading. With over a century of experience, we have built a legacy based on trust, excellence, and a commitment to the highest standards in the industry.
              </p>
              <p className="text-muted mb-4">
                Our journey began as a small operation, but through dedication and innovation, we have grown into a global leader. Today, we are proud to offer a range of services that cater to the diverse needs of our clients, from gold extraction to market analysis and investment consulting.
              </p>
              <p className="text-muted mb-4">
                At the heart of our success is our unwavering commitment to quality. Whether you're an individual investor or a large corporation, you can trust us to provide reliable, expert guidance in all aspects of gold trading and asset management.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-sm"
                src="assets/img/services-item-1.jpg"
                alt="Our Legacy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-sm"
                src="assets/img/services-item-2.jpg"
                alt="Our Mission"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h3 mb-3">Our Mission</h2>
              <p className="text-muted mb-4">
                Our mission is to be the most trusted partner in the gold industry. We are dedicated to delivering the highest quality services, from mining and refining to trading and investment. We strive to exceed our clients' expectations by consistently providing expert insights, innovative solutions, and exceptional customer service.
              </p>
              <h2 className="h3 mb-3">Our Vision</h2>
              <p className="text-muted mb-4">
                We envision a world where gold remains a symbol of wealth and security, and where our company is the go-to resource for all gold-related needs. We aim to continue leading the industry through sustainable practices, cutting-edge technology, and a commitment to integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="h3 mb-3">Our Team</h2>
              <p className="text-muted mb-4">
                Our success is built on the expertise and dedication of our team. With decades of combined experience in the gold industry, our professionals bring unparalleled knowledge and skill to every project. We are proud to work with some of the most talented and passionate individuals in the field.
              </p>
              <p className="text-muted mb-4">
                From our geologists and engineers to our market analysts and investment consultants, each member of our team is committed to delivering excellence. Together, we work tirelessly to ensure that our clients achieve their financial goals and secure their legacy.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-sm"
                src="assets/img/services-item-3.jpg"
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container bg-light mt-5 mb-5"> {/* Added margin-bottom for separation */}
        <section
          className="bg-cover bg-center"
          style={{ background: 'url(assets/img/hero-banner-2.jpg)' }}
        >
          <div className="dark-overlay">
            <div className="py-5 text-white overlay-content">
              <div className="container px-lg-5">
                <div className="row align-items-center">
                  <div className="col-lg-7 text-center text-lg-left">
                    <h2 className="h3 mb-3">Get in Touch</h2>
                    <p className="text-small mb-0">
                      We are here to help you with all your gold-related inquiries. Contact us today to learn more about our services or to start your investment journey with us.
                    </p>
                  </div>
                  <div className="col-lg-5 text-center text-lg-right">
                    <a className="btn btn-outline-light text-white" href="#">
                      Contact Us
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

export default About;
