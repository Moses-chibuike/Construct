import React from 'react'

function Hero() {
    return (
       <>   <section>
  <div className="owl-carousel owl-theme-default hero-slider owl-nav-custom">
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-3.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Your investment</p>
            <h1>Turning assets into legacy</h1>
            <p className="lead">At Newman, we value excellence in every ounce of gold, ensuring your future shines bright.</p><a className="btn btn-primary text-white" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-2.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Crafting value</p>
            <h1>Committed to gold, committed to you</h1>
            <p className="lead">Discover how Newman transforms gold into enduring value for generations to come.</p><a className="btn btn-primary text-white" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-1.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Your legacy</p>
            <h1>Is our commitment</h1>
            <p className="lead">With Newman, trust in gold that stands the test of time and secures your future.</p><a className="btn btn-primary text-white" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       </>
    )
}

export default Hero
