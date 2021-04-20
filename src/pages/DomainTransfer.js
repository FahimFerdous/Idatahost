import React from "react";

const DomainTransfer = () => {
  return (
    <div>
      <div className="main">
        {/*hero section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-8">
                <div className="hero-content-wrap text-white text-center position-relative">
                  <h1 className="text-white">Transfer Your Domain</h1>
                  <p className="lead">
                    Transfer your Domain to IDATAHOST. Tons of features with
                    more reliable security awaits you.
                  </p>
                  <div className="domain-transfer-wrap mt-4">
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
                        <input type="hidden" name="from" value="transfer" />
                        <div className="input-group-append">
                          <button
                            className="btn search-btn btn-brand-03 btn-hover d-flex align-items-center"
                            type="submit">
                            <span className="ti-loop mr-2"></span> Transfer
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*hero section end*/}

        {/*domain name block start*/}
        <div className="domain-name-block ptb-20 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center align-items-center flex-wrap">
              <div className="col-md-12 col-lg-10">
                <ul className="list-inline domain-list-wrap">
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/COM.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/net.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/pro.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/org.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/store.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="assets/img/blog/onlie.png"
                        alt="domain"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*domain name block end*/}

        {/*feature section start*/}
        <section id="features" className="feature-tab-section ptb-100 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <h2>100% Control on Your Web Projects - Transfer Now</h2>
                  <p className="lead">
                    Once you have everything you need, perform these 4 simple
                    steps, proactively partnerships with worldwide products.
                  </p>
                  <ul className="list-unstyled tech-feature-list">
                    <li className="py-1">
                      <span className="mr-2 h5">1.</span>Enter the domain name
                      you want to transfer.
                    </li>
                    <li className="py-1">
                      <span className="mr-2 h5">2.</span>Proceed with the
                      purchase.
                    </li>
                    <li className="py-1">
                      <span className="mr-2 h5">3.</span>Enter the EPP code.
                    </li>
                    <li className="py-1">
                      <span className="mr-2 h5">4.</span>Confirm your transfer.
                    </li>
                  </ul>
                  <div className="action-btns mt-4">
                    <a href="#" className="btn btn-outline-brand-01">
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <img
                    src="assets/img/domain_reg.png"
                    alt="hosting"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <img
                    src="assets/img/create-website.svg"
                    alt="hosting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <h2>
                    Before transferring your domain, make sure of the following
                  </h2>
                  <p className="lead">
                    Phosfluorescently fashion front-end web-readiness vis-a-vis
                    robust fabricate scalable web-readiness technologies.{" "}
                  </p>
                  <ul className="list-unstyled tech-feature-list">
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      It's been more than 60 days since the domain registration
                      or last transfer.
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      Domain is not in Pending Delete or Redemption status.
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      The authorisation code that proves your ownership of the
                      domain.{" "}
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      You can get the EPP code from the current domain provider.
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      Whois privacy protection is disabled.
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      Enthusiastically extend worldwide e-services.
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      Professionally develop holistic solutions.
                    </li>
                  </ul>
                  <div className="action-btns mt-4">
                    <a href="#" className="btn btn-outline-brand-01">
                      Learn More
                    </a>
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
                    24/7 Expert Hosting Support Our Customers Love
                  </h2>
                  <p>
                    Objectively innovate high compellingly maintain
                    progressively pursue mission-critical information quality
                    imperatives.{" "}
                  </p>
                </div>
                <div className="support-action d-inline-flex flex-wrap">
                  <a href="mailto:support@yourdomain.com" className="mr-3">
                    <i className="fas fa-comment mr-1 color-accent"></i>{" "}
                    <span>support@idatahost.com</span>
                  </a>
                  <a href="tel:+00123456789" className="mb-0">
                    <i className="fas fa-phone-alt mr-1 color-accent"></i>{" "}
                    <span>+880 1400 88 34 00</span>
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
        <section id="faq" className="ptb-100 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Frequently Asked Queries</h2>
                  <p>
                    Efficiently productivate reliable paradigms before
                    ubiquitous models. Continually utilize frictionless
                    expertise whereas tactical relationships. Still have
                    questions? Contact us
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12">
                <div id="accordion" className="accordion faq-wrap">
                  <div className="card mb-3">
                    <a
                      className="card-header "
                      data-toggle="collapse"
                      href="#collapse0"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        What is domain transfer?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          A domain transfer is the method of changing a domain
                          name's assigned registrar. The new registrar will keep
                          all relevant information about the domain and the
                          registrant until the transition is completed. Only
                          domain names that have been registered with the
                          previous registrar for at least 60 days are authorized
                          for transfer.
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
                        What are the steps to transfer domains?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse "
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          Let's go through the 4 stages you need take if you'd
                          like to switch that domain name to a new hosting
                          provider:
                          <br />
                          1.Get an authorization code and unlock your domain
                          lock.
                          <br />
                          2.Begin the transition process with your new host.
                          <br />
                          3.Double-check the transfer.
                          <br />
                          4.Pay for your move and then wait for it to finish.
                          <br />
                          There are a variety of reasons why a person may become
                          dissatisfied with their current registrar and decide
                          to change. Registrars aren't all made equal, after
                          all. Most can sell a variety of packages with various
                          features, prices, and levels of dependability. Others
                          have better customer service, while others provide
                          easier-to-navigate user interfaces.
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
                        What are the features?
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse "
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          The majority of registrars have a specific collection
                          of facilities and functionality as part of your
                          subscription. Privacy security, web hosting, and email
                          are just a few examples. However, not all providers
                          can provide you with all of the functionality you
                          need. When moving a domain name, keep the following
                          points in mind and we provide this for you:
                          <br />
                          User friendliness: When purchasing any product or
                          service, ease of use is a top priority, and domain
                          name registration is no exception. In this scenario,
                          you'll want to make sure that the features available
                          to you are easy to use. Domain.com provides a range of
                          user-friendly tools to help you with tasks such as
                          domain management. <br />
                          It's likely that you'll run into a difficulty and have
                          questions that have to be answered, as in every
                          activity. You want to know that someone is available
                          to answer your questions when you need them on the
                          other end of the customer service line. We take pride
                          in our ability to provide high-quality live support
                          anytime you need it.
                          <br />
                          Every registrar has their own pricing formula for the
                          services they provide. Some companies have
                          all-inclusive packages that can give you more value
                          for your buck by including all of the features you
                          want at a cheaper price. Others ask you to buy a basic
                          service at a cheaper price and then pay extra for
                          optional features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse3"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        What is personal Domain?
                      </h6>
                    </a>
                    <div
                      id="collapse3"
                      className="collapse "
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          You create a brand name for yourself online when you
                          register a personal domain – your name followed
                          by.com,.me, or.biz. With your personalized email
                          address, you'll enjoy sending and receiving emails.
                          When potential clients see your customized domain and
                          email address, they'll immediately recognize that
                          you're a professional who stands behind your work.
                          Make a name for yourself right now with a personal
                          domain from idatahost. Get your personal domain in
                          cheap price. When you get your own domain name, you
                          can keep it even though you change web hosts or turn
                          to your own in-house server. If you don't own your
                          domain name, you'll have to get a new URL, which will
                          wipe out all of your previous branding and search
                          engine rankings.
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

export default DomainTransfer;
