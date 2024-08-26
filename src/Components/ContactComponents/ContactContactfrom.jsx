import React, { useState } from 'react';

function ContactContactForm() {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    subject: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    try {
      const response = await fetch('https://formspree.io/f/mqaznanl', { // Replace with your Formspree form ID
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
        setFormState({
          firstname: "",
          lastname: "",
          phone: "",
          subject: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send the message.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading after the submission process
    }
  };

  return (
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
                        value={formState.firstname} 
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
                        value={formState.lastname} 
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
                        value={formState.phone} 
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
                        value={formState.subject} 
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
                        value={formState.email} 
                        onChange={handleInputChange} 
                        placeholder="Email address" 
                        required 
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea 
                        className="form-control" 
                        name="message" 
                        value={formState.message} 
                        onChange={handleInputChange} 
                        rows={5} 
                        placeholder="Leave your message" 
                        required 
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <button className="btn btn-outline-primary" type="submit" disabled={loading}>
                        {loading ? (
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                          "Submit Now"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                {submitted && <div className="alert alert-success mt-3">Thank you for contacting us! We will get back to you soon.</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContactForm;
