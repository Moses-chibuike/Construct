import React, { useState } from 'react';
import axios from 'axios';

function ContactContactfrom() {
  const API_PATH = 'http://localhost/Construction/src/api/contact.php';
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    subject: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: API_PATH,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    })
      .then((result) => {
        console.log(result.data);
        if (result.data.sent) {
          setMailSent(true);
          setError(null);
        } else {
          setError("Failed to send the message.");
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-5 bg-light shadow-sm index-forward">
        <div className="container py-5">
          <div className="card rounded-0 border-0">
            <div className="card-body p-4 p-lg-5">
              <div className="row py-5">
                <div className="col-lg-5">
                  <h2>Request a <span className="text-primary">Call Back</span></h2>
                  <p className="mb-5 text-muted">We're here to assist you with any inquiries or project needs. Reach out to us and let's discuss how we can help.</p>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h5 className="text-muted">Address</h5>
                      <p className="text-muted">1798 Pretty View Lane, California</p>
                    </li>
                    <li>
                      <h5 className="text-muted">Email</h5>
                      <p className="text-muted">Construction@example.com</p>
                    </li>
                    <li>
                      <h5 className="text-muted">Phone</h5>
                      <p className="text-muted">+535 421 895 6523</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-7">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input 
                          className="form-control" 
                          type="text" 
                          name="firstname" 
                          value={data.firstname} 
                          onChange={handleInputChange} 
                          placeholder="First name" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input 
                          className="form-control" 
                          type="text" 
                          name="lastname" 
                          value={data.lastname} 
                          onChange={handleInputChange} 
                          placeholder="Last name" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input 
                          className="form-control" 
                          type="tel" 
                          name="phone" 
                          value={data.phone} 
                          onChange={handleInputChange} 
                          placeholder="Phone number" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input 
                          className="form-control" 
                          type="text" 
                          name="subject" 
                          value={data.subject} 
                          onChange={handleInputChange} 
                          placeholder="Subject" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <input 
                          className="form-control" 
                          type="email" 
                          name="email" 
                          value={data.email} 
                          onChange={handleInputChange} 
                          placeholder="Email address" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea 
                          className="form-control" 
                          name="message" 
                          value={data.message} 
                          onChange={handleInputChange} 
                          rows={5} 
                          placeholder="Leave your message" 
                          required 
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <button className="btn btn-outline-primary" type="submit">Submit Now</button>
                      </div>
                    </div>
                  </form>
                  {mailSent && <div className="alert alert-success mt-3">Thank you for contacting us! We will get back to you soon.</div>}
                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactContactfrom;
