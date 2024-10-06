import React from 'react';

function Projects() {
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
              <h1 className="text-white">All Projects in Africa</h1>
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
                    All Projects
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section for Each Country */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            {/* Project 1 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-11.jpg"
                    alt="Project in Egypt"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Egypt</h2>
                  <p className="text-muted mb-4">
                    This project focuses on the development of advanced mining techniques in South Africa, aiming to increase efficiency and sustainability in gold mining operations.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-2.jpg"
                    alt="Project in Ghana"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Ghana</h2>
                  <p className="text-muted mb-4">
                    Our Ghana project is focused on community development and environmental protection, ensuring that local communities benefit from gold mining activities.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-3.jpg"
                    alt="Project in Kenya"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Kenya</h2>
                  <p className="text-muted mb-4">
                    This project is dedicated to the exploration of new gold deposits in Kenya, leveraging state-of-the-art technology to ensure accurate and efficient resource evaluation.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-12.jpg"
                    alt="Project in Nigeria"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Nigeria</h2>
                  <p className="text-muted mb-4">
                    In Nigeria, our project emphasizes sustainable mining practices and collaboration with local stakeholders to enhance the economic impact of gold mining.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-13.jpg"
                    alt="Project in Tanzania"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Tanzania</h2>
                  <p className="text-muted mb-4">
                    Our Tanzania project aims to improve gold extraction methods and enhance the livelihoods of local communities through sustainable practices.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-14.jpg"
                    alt="Project in Zimbabwe"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Zimbabwe</h2>
                  <p className="text-muted mb-4">
                    This project focuses on exploring new gold reserves in Zimbabwe and promoting environmental stewardship among mining operations.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 7 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-1.jpg"
                    alt="Project in Mali"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Mali</h2>
                  <p className="text-muted mb-4">
                    In Mali, we are working on integrating modern mining technologies with traditional practices to maximize gold production.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-15.jpg"
                    alt="Project in Sudan"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Sudan</h2>
                  <p className="text-muted mb-4">
                    Our project in Sudan is focused on the responsible sourcing of gold, ensuring ethical practices are upheld throughout the supply chain.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 9 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-16.jpg"
                    alt="Project in Angola"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Angola</h2>
                  <p className="text-muted mb-4">
                    Our Angola project is dedicated to enhancing gold extraction processes and minimizing environmental impact through innovative technology.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Project 10 */}
            <div className="col-lg-6 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="img-fluid shadow-sm"
                    src="assets/img/services-item-1.jpg"
                    alt="Project in Burkina Faso"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Burkina Faso</h2>
                  <p className="text-muted mb-4">
                    This project focuses on the development of artisanal gold mining in Burkina Faso, ensuring fair trade practices and improving worker conditions.
                  </p>
                  <a className="btn btn-primary" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
