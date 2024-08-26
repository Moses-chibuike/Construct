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
                            <p className="text-muted">At Association Minière du Mali, we offer a comprehensive range of services designed to maximize the value of Mali's gold resources. Our commitment to excellence ensures that we deliver top-tier results across all our operations.</p>
                        </div>
                    </div>
                </header>
                <div className="row text-center">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-1.jpg" alt="Gold Exploration" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Gold Exploration</a></h3>
                                <p className="text-small text-muted">Our expert team utilizes cutting-edge technology and deep expertise to locate and extract gold efficiently, contributing to Mali's economic growth.</p>
                                <a className="btn btn-primary btn-sm text-white" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-2.jpg" alt="Mining Consultancy" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Mining Consultancy</a></h3>
                                <p className="text-small text-muted">We provide expert consultancy services that optimize your mining operations, enhancing profitability and operational efficiency across the board.</p>
                                <a className="btn btn-primary btn-sm text-white" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shadow-sm box">
                            <div className="with-border-image-sm">
                                <div className="position-relative overflow-hidden d-block">
                                    <div className="box-overlay"><a className="d-block w-100 h-100" href="#" /></div>
                                    <img className="w-100" src="assets/img/services-3.jpg" alt="Gold Processing" />
                                </div>
                            </div>
                            <div className="p-4 border bg-white">
                                <h3 className="h5"> <a className="reset-anchor" href="#">Gold Processing</a></h3>
                                <p className="text-small text-muted">Our state-of-the-art gold processing services ensure that raw ore is transformed into high-purity gold with unmatched efficiency and precision.</p>
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
