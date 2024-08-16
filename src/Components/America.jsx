import React from 'react';

function ProjectsInAmerica() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-position"
        style={{ background: "url(assets/img/hero-banner-3.jpg)" }}
      >
        <div className="dark-overlay dark-overlay-lighter py-5">
          <div className="overlay-content">
            <div className="container text-center py-5">
              <h1 className="text-white">All Projects in America</h1>
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
                    src="assets/img/services-item-1.jpg"
                    alt="Project in USA"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in USA</h2>
                  <p className="text-muted mb-4">
                    This project in the United States focuses on advanced gold mining technology, aiming to maximize efficiency and sustainability in extraction processes.
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
                    alt="Project in Canada"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Canada</h2>
                  <p className="text-muted mb-4">
                    Our Canadian project is centered around the exploration and sustainable development of gold reserves in remote regions.
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
                    alt="Project in Brazil"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Brazil</h2>
                  <p className="text-muted mb-4">
                    This project focuses on responsible gold mining in the Amazon, balancing economic benefits with environmental conservation efforts.
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
                    src="assets/img/services-item-1.jpg"
                    alt="Project in Mexico"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Mexico</h2>
                  <p className="text-muted mb-4">
                    Our Mexico project is dedicated to improving the safety and efficiency of gold mining operations, particularly in historically significant areas.
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
                    src="assets/img/services-item-2.jpg"
                    alt="Project in Peru"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Peru</h2>
                  <p className="text-muted mb-4">
                    The Peru project is focused on artisanal and small-scale gold mining, aiming to improve practices and reduce environmental impacts.
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
                    src="assets/img/services-item-3.jpg"
                    alt="Project in Argentina"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Argentina</h2>
                  <p className="text-muted mb-4">
                    This project in Argentina explores new gold reserves while ensuring adherence to the highest environmental and safety standards.
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
                    alt="Project in Chile"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Chile</h2>
                  <p className="text-muted mb-4">
                    In Chile, our project is aimed at modernizing gold mining operations, with a strong focus on reducing the carbon footprint and promoting local employment.
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
                    src="assets/img/services-item-2.jpg"
                    alt="Project in Colombia"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Colombia</h2>
                  <p className="text-muted mb-4">
                    Our Colombia project focuses on sustainable mining practices, ensuring that gold extraction does not harm the rich biodiversity of the region.
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
                    src="assets/img/services-item-3.jpg"
                    alt="Project in Bolivia"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Bolivia</h2>
                  <p className="text-muted mb-4">
                    This project in Bolivia is dedicated to enhancing the efficiency of gold mining operations, with a strong commitment to reducing environmental degradation.
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
                    alt="Project in Venezuela"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="h3 mb-3" style={{ fontWeight: 'bold' }}>Project in Venezuela</h2>
                  <p className="text-muted mb-4">
                    Our Venezuela project focuses on the ethical extraction of gold, ensuring that operations are conducted with respect for local communities and the environment.
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

export default ProjectsInAmerica;
