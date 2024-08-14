import React from 'react'

function Serv_divider() {
    return (
      <>

{/* Divider Section */}
<div className="container bg-light">
  <section className="bg-cover bg-center" style={{background: 'url(assets/img/hero-banner-2.jpg)'}}>
    <div className="dark-overlay">
      <div className="py-5 text-white overlay-content">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-left">
              <h2 className="h3 mb-3">Trusted Gold Experts <span className="text-primary">Since 1889</span></h2>
              <p className="text-small mb-0">At Newman, we have been dedicated to excellence in gold mining, refining, and trading for over a century. Your legacy is our commitment.</p>
            </div>
            <div className="col-lg-5 text-center text-lg-right"><a className="btn btn-outline-light text-white" href="#">Get in Touch</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      </>

    )
}

export default Serv_divider
