import React from 'react';
import '../../../src/App.css';

function ContactMap() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container-fluid py-5"> {/* Updated to container-fluid to take full width */}
          <div className="mapouter" style={{ position: 'relative', textAlign: 'right', height: '500px', width: '100%' }}>
            <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none!important', height: '100%', width: '100%' }}>
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMap;
