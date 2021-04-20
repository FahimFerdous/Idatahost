import React from "react";

const Googlecomingsoon = () => {
  return (
    <div>
      <div className="main">
        <section className="ptb-100 bg-image full-height" data-overlay="8">
          <div className="background-image-wraper"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-9 col-lg-7">
                <div className="hero-content-left text-white text-center">
                  <h1 className="text-white comingSoonText"> Coming Soon</h1>
                  <p className="lead">
                    Google Cloud Service at your Convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-5 col-lg-5">
                <form className="newsletter-form position-relative">
                  <input
                    type="text"
                    className="input-newsletter form-control"
                    placeholder="Enter your email"
                    name="email"
                    required=""
                    autocomplete="off"
                  />
                  <button type="submit" className="disabled">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Googlecomingsoon;
