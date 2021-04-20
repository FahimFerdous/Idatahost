import React from "react";

const Hero = () => {
  return (
    <div className="main">
      <section className="ptb-100 overflow-hidden primary-bg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-md-12 col-lg-6">
              <div className="hero-slider-content text-white py-5">
                <div className="headline mb-4">
                  <p className="mb-0">
                    <i className="fas fa-bell rounded-circle mr-2"></i>
                    <span className="font-weight-bold">30% Discount </span>{" "}
                    first annual purchase
                  </p>
                </div>
                <h1 className="text-white">
                  Unlimited Domain & Hosting in One Platform
                </h1>
                <p className="lead">
                  A ton of website hosting options, 99.9% uptime guarantee, free
                  SSL certificate, easy WordPress installs.
                </p>

                <div className="action-btns mt-4">
                  <a href="#" className="btn btn-brand-03 btn-lg">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="img-wrap">
                <img
                  src="assets/img/hero-home.svg"
                  alt="hosting"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Registration */}

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8 col-12">
              <div className="domain-search-wrap border gray-light-bg">
                <h4 className="text-center">Looking For Domain Name?</h4>
                <form
                  action="https://cp.idatahost.com/cart.php?a=add&domain=register"
                  method="POST"
                  className="domain-search-form my-4">
                  <input
                    type="text"
                    name="query"
                    id="domain"
                    className="form-control"
                    placeholder="yourdomainname.com"
                  />
                  <div className="select-group">
                    <button type="submit" className="btn btn-brand-01">
                      <i className="fas fa-search pr-1"></i> Search
                    </button>
                  </div>
                </form>
                <div className="domain-list-wrap text-center">
                  <ul className="list-inline domain-search-list">
                    <li className="list-inline-item bg-white border rounded">
                      <a href="#">
                        <img
                          src="assets/img/blog/COM.png"
                          alt="com"
                          width="70"
                          className="img-fluid"
                        />
                        <span>$8.99</span>
                      </a>
                    </li>
                    <li className="list-inline-item bg-white border rounded">
                      <a href="#">
                        <img
                          src="assets/img/blog/onlie.png"
                          alt="com"
                          width="70"
                          className="img-fluid"
                        />
                        <span>$0.99</span>
                      </a>
                    </li>
                    <li className="list-inline-item bg-white border rounded">
                      <a href="#">
                        <img
                          src="assets/img/blog/net.png"
                          alt="com"
                          width="70"
                          className="img-fluid"
                        />
                        <span>$4.99</span>
                      </a>
                    </li>
                    <li className="list-inline-item bg-white border rounded">
                      <a href="#">
                        <img
                          src="assets/img/blog/org.png"
                          alt="com"
                          width="70"
                          className="img-fluid"
                        />
                        <span>$2.99</span>
                      </a>
                    </li>
                    <li className="list-inline-item bg-white border rounded">
                      <a href="#">
                        <img
                          src="assets/img/blog/store.png"
                          alt="com"
                          width="70"
                          className="img-fluid"
                        />
                        <span>$0.99</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
