import React from "react";

const DomainChecker = () => {
  return (
    <div>
      <div className="main">
        {/*hero section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-8">
                <div className="hero-content-wrap text-white text-center position-relative">
                  <h1 className="text-white">
                    iData Host Domain Checker!
                  </h1>
                  {/*<p className="lead">
                    A domain name is like a street address for your website.
                    Choose your identity now
  </p> */}
                  <div className="domain-checker-wrap">
                    <form
                      action="https://cp.idatahost.com/cart.php?a=add&domain=register"
                      method="post"
                      className="domain-transfer-form w-75 d-block mx-auto">
                      <div className="input-group">
                        <input
                          type="text"
                          name="query"
                          id="domain"
                          className="form-control"
                          placeholder="Enter the domain you want to transfer"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn search-btn btn-brand-03 btn-hover d-flex align-items-center"
                            type="submit">
                            <span className="ti-world mr-2"></span> Check
                          </button>
                        </div>
                      </div>
                    </form>
                    <p>Already have a domain? <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" style={{ color: "yellow" }}> Transfer it now </a></p>
                    <div className="domain-list-wrap text-center mt-4">
                      <ul className="list-inline domain-search-list">
                        <li className="list-inline-item border rounded">
                          <a href="#">
                            <img
                              src="assets/img/blog/COM.png"
                              alt="com"
                              width="60"
                              className="img-fluid"
                            />
                            <span>$8.99</span>
                          </a>
                        </li>
                        <li className="list-inline-item border rounded">
                          <a href="#">
                            <img
                              src="assets/img/blog/onlie.png"
                              alt="com"
                              width="60"
                              className="img-fluid"
                            />
                            <span>$0.99</span>
                          </a>
                        </li>
                        <li className="list-inline-item border rounded">
                          <a href="#">
                            <img
                              src="assets/img/blog/net.png"
                              alt="com"
                              width="60"
                              className="img-fluid"
                            />
                            <span>$4.99</span>
                          </a>
                        </li>
                        <li className="list-inline-item border rounded">
                          <a href="#">
                            <img
                              src="assets/img/blog/org.png"
                              alt="com"
                              width="60"
                              className="img-fluid"
                            />
                            <span>$2.99</span>
                          </a>
                        </li>
                        <li className="list-inline-item border rounded">
                          <a href="#">
                            <img
                              src="assets/img/blog/store.png"
                              alt="com"
                              width="60"
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
          </div>
        </section>
        {/*hero section end*/}

        {/*popular domain block start*/}
        <section className="popular-domain-list ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-2">
                  <h2>Popular Top Level Domains</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/COM.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <span className="position-absolute badge badge-warning">
                      Most Popular
                    </span>
                    <p>
                      Best selling Domain.
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$10.99</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $9.99
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/net.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <p>
                      Another most populer selling domain.
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$12.99</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $12.50
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                  <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/org.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <p>
                      Most popular domain for organization.
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$12.50</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $10.75
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                  <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/net.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <p>
                      .XYZ Rising selling Domain. 
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$13.79</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $4.99
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                  <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/store.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <p>
                      Popular domain for business.
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$13.74</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $8.99
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                  <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-popular-domain position-relative bg-white rounded shadow-sm p-4 mt-sm-4 mt-md-5 mt-lg-4">
                  <img
                    src="assets/img/blog/pro.png"
                    alt="domain"
                    className="img-fluid"
                  />
                  <div className="domain-info-wrap">
                    <p>
                      .IN.NET is a pupular in india.
                    </p>
                    <ul className="list-inline domain-price-list">
                      <li className="list-inline-item domain-old-price">
                        <del>$7.69</del>
                      </li>
                      <li className="list-inline-item domain-new-price">
                        $4.99
                      </li>
                    </ul>
                  </div>
                  <div className="action-btns mt-3">
                  <a href="https://cp.idatahost.com/cart.php?a=add&domain=register" className="btn btn-brand-01 btn-xs mr-2">
                      Register
                    </a>
                    <a href="https://cp.idatahost.com/cart.php?a=add&domain=transfer" className="btn btn-outline-brand-01 btn-xs">
                      Transfer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*popular domain block end*/}

        {/*feature section start*/}
        <section className="feature-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center">
                  <h2>A few tips to find the right domain name</h2>
                  <p>
                  Before you start your domain name search, check out these.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-panel icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Make something memorable</h5>
                    <p>
                    Easy to remember and keep it easy to understand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-thumb-up icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Keep meaningful</h5>
                    <p>
                    Try to keep meaningful. .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-mouse-alt icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Audience based</h5>
                    <p>
                    Try to pick a domain name according to the psychology of the audience. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-timer icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Short domain name</h5>
                    <p>
                    Make sure you keep your domain name shorter.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-harddrives icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Select best TLD</h5>
                    <p>
                    Try to take the best extension (TLD), based on your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box mt-5">
                  <div className="features-box-icon mb-3">
                    <span className="ti-cup icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Be fast to be first</h5>
                    <p>
                    Do you need help? Our team is ready to help you. Please contact us for any help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*feature section end*/}

        {/*call to action section start*/}
        <section className="ptb-60 primary-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-6">
                <div className="cta-content-wrap text-white">
                  <h2 className="text-white">
                  24/7 Customer Support over Tickets/Phone/Email/Chat
                  </h2>
                  <p>
                  Our experts are always here to give answers and advice to you to set up and enlarge your online store. Experts are available 24 hours a day, 7 days a week, to assist you. Just open a ticket or call over the phone.
                  </p>
                </div>
                <div className="support-action d-inline-flex flex-wrap">
                  <a href="https://cp.idatahost.com/login" className="mr-3">
                    <i className="fas fa-comment mr-1 color-accent"></i>
                    <span>Create a ticket</span>
                  </a>
                  <a href="tel:+12135100797" className="mb-0">
                    <i className="fas fa-phone-alt mr-1 color-accent"></i>
                    <span>+(121)35100797</span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-none d-lg-block">
                <div className="cta-img-wrap text-center">
                  <img
                    src="assets/img/call-center-support.svg"
                    width="250"
                    className="img-fluid"
                    alt="server room"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*call to action section end*/}

        {/*faq section start*/}
        <section id="faq" className="ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Domain Registration FAQs</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12">
                <div id="accordion" className="accordion faq-wrap">
                  <div className="card mb-3">
                    <a
                      className="card-header"
                      data-toggle="collapse"
                      href="#collapse0"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        What is a domain name?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          A domain name is simply the online equivalent of a
                          physical address for your website. A web browser
                          requires a domain name to control you to a website,
                          just as a GPS requires a business address or actual
                          transmission to provide directions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse1"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        How domain name works?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          The way domain names behave is that they serve as a
                          shortcut to the server that contains your website. 
                          Anyone who wanted to communicate your message would
                          have to type in the full IP address if you didn't have
                          a domain name. However, it is difficult for people to
                          remember an IP address or to use it in campaign
                          posters. Since different name providers use different
                          systems, although this response explains how the
                          process works in general, it can vary significantly
                          depending on the package. Check out our domain buying
                          guide for more in-depth details. Typically, you'll
                          begin by conducting a domain name search. The majority
                          of domain name providers will let you type in your
                          requested domain name and see if it is available. We
                          also have plenty of suggestions for other possible
                          domain names on iDATA HOST, which can be useful if the
                          domain you were looking for was already taken.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse2"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        Things to remember
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          A domain name is like a street address for your
                          website. <br />
                          a.They are made up of a website name (for example,
                          idatahost) and a domain extension (.com).
                          <br />
                          b.ICANN is in charge of all domain name registrations.
                          <br />
                          c.Visitors are forwarded to the relevant server by
                          domains. <br />
                          d.Visitors are forwarded to the relevant server by
                          domains. <br />
                          e.The most common domain extension is.com, which
                          powers 46.5 percent of the internet.
                          <br />
                          f.Country codes are used to identify rural centers in
                          ccTLDs. <br />
                          g.gTLDs are usually created for particular purposes {" "}
                          <br />
                          h.Each domain name registrar has its own registration
                          process. <br />
                          i.To find available domain names, use domain search
                          engines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*faq section end*/}
      </div>
    </div>
  );
};

export default DomainChecker;
