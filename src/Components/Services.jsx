import React from 'react';

function Services() {
    return (
        <>
        <section className="py-5 bg-light">
            <div className="container py-5">
                <header className="text-center mb-5">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <h2 className="text-uppercase"><span className="text-primary">Our </span>Services</h2>
                            <p className="text-muted">At Newman Gold, we provide a range of top-tier services tailored to meet your specific needs. Our expertise and commitment ensure exceptional results every time.</p>
                        </div>
                    </div>
                </header>
                <div className="row text-center">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-1.jpg" alt="House renovation" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Gold Exploration</a></h3>
                                <p className="text-small text-muted">Our team uses advanced technology and expert knowledge to locate and extract gold efficiently and sustainably.</p>
                                <a className="btn btn-primary btn-sm text-white" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-2.jpg" alt="Construction consultant" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Mining Consultancy</a></h3>
                                <p className="text-small text-muted">Our experts offer comprehensive consultancy services to optimize your mining operations, ensuring maximum profitability and efficiency.</p>
                                <a className="btn btn-primary btn-sm text-white" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-3.jpg" alt="General contracting" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Gold Processing</a></h3>
                                <p className="text-small text-muted">We offer state-of-the-art gold processing services, transforming raw ore into high-purity gold with efficiency and precision.</p>
                                <a className="btn btn-primary btn-sm text-white" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Services;
