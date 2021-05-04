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
                    <span className="font-weight-bold">40% Discount </span>{" "}
                    On Cloud Hosting 
                  </p>
                </div>
                <h1 className="text-white">
                Superior Cloud Server & Hosting in One Platform
                </h1>
                <p className="lead">
                  Reliable website hosting, 99.9% uptime guarantee, free
                  SSL certificate, easy WordPress installs & 24 hours support.
                </p>

                <div className="action-btns mt-4">
                  <a href="/vps-hosting" className="btn btn-brand-03 btn-lg">
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
                <p className="text-center">get up to 40% disount! till Jun 30</p>
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
                        <span>$10.08</span>
                        <del>$12.61</del>
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
                        <span>$22.49</span>
                        <del>$37.49</del>
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
                        <span>$11.25</span>
                        <del>$12.50</del>
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
                        <span>$10.00</span>
                        <del>$12.50</del>
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
                        <span>$36.29</span>
                        <del>$60.49</del>
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
