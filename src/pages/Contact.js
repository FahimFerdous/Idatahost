import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="main">
        {/*page header section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-7 col-lg-8">
                <div className="hero-content-wrap text-white text-center position-relative">
                  <h1 className="text-white">Contact Us</h1>
                  <p className="lead">
                    Our Expert Customer care representatives are alyaws there to
                    help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*page header section end*/}

        {/*our contact promo start*/}
        <section className="promo-section pt-100">
          <div className="container">
            <div className="row justify-content-md-center justify-content-sm-center">
              <div className="col-md-6 col-lg-4">
                <div className="card single-promo-card text-center p-3 my-3">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="fas fa-envelope icon-size-lg color-primary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Mail Us</h5>
                      <p className="mb-0">
                        Say something to start a live chat or Send us a Message
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card single-promo-card text-center p-3 my-3">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="fas fa-headset icon-size-lg color-primary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>24/7 Live Chat</h5>
                      <p className="mb-0">
                        We endeavour to answer all enquiries within 24 hours on
                        business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card single-promo-card text-center p-3 my-3">
                  <div className="card-body">
                    <div className="pb-2">
                      <span className="fas fa-map-marker-alt icon-size-lg color-primary"></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>Knowladge Base</h5>
                      <p className="mb-0">
                        Our Smart and Innovative Community to help you out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*our contact promo end*/}

        {/*our contact section start*/}
        <section className="contact-us-section ptb-100" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12 pb-3 message-box d-none">
                <div className="alert alert-danger"></div>
              </div>
              <div className="col-md-8 col-lg-9">
                <div className="contact-us-form-wrap gray-light-bg position-relative">
                  <form
                    action=""
                    method="POST"
                    id="contactForm"
                    className="contact-us-form">
                    <div className="form-row">
                      <div className="col-md-9 col-12">
                        <h2>Send Us a Message</h2>
                      </div>
                      <div className="col-md-9 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-9 col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-9 col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="5"
                            cols="25"
                            placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12 mt-3">
                        <button
                          type="submit"
                          className="btn btn-brand-01"
                          id="btnContactUs">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="contact-us-content primary-bg text-white shadow-lg mt-5 mt-md-0 mt-lg-0">
                    <h3 className="text-white">
                      Looking for a excellent Business idea?
                    </h3>
                    <p>
                      Drop by anytime, we endeavour to answer all enquiries
                      within 24 hours on business days.
                    </p>
                    <ul className="contact-info-list mt-3">
                      {/* <li className="d-flex py-3">
                        <div className="contact-icon mr-3">
                          <span className="fas fa-location-arrow color-accent"></span>
                        </div>
                        <div className="contact-text">
                          <h6 className="mb-1 text-white font-weight-normal">
                            Company Location
                          </h6>
                          <small>Dhaka, Bangladesh</small>
                        </div>
                      </li> */}
                      <li className="d-flex py-3">
                        <div className="contact-icon mr-3">
                          <span className="fas fa-envelope color-accent"></span>
                        </div>
                        <div className="contact-text">
                          <h6 className="mb-1 text-white font-weight-normal">
                            Email Address
                          </h6>
                          <small> support@idatahost.com </small>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-inline social-list-default background-color social-hover-2 mt-2">
                      <li className="list-inline-item">
                        <a className="twitter" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="youtube" href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="linkedin" href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="dribbble" href="#">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*our contact section end*/}

        {/*google map start*/}
        {/* <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.953735315922!3d-37.817323442021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1571030260624!5m2!1sen!2sbd"
          height="450"
          style="border: 0"
          allowfullscreen=""
        ></iframe>
      </div> */}
        {/*google map end*/}
      </div>
    </div>
  );
};

export default Contact;
