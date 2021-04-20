import React from "react";

const LinuxReseller = () => {
  return (
    <div>
      <div className="main">
        {/*hero section start*/}
        <section
          className="hero-equal-height ptb-120 gradient-overlay bg-image "
          data-overlay="8">
          <div
            className="background-image-wraper"
            style={{
              backgroundImage: "url(" + "assets/img/hero-offer-bg.svg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="hero-content-left text-white text-center">
                  <h3 className="text-white">Linux Reseller!</h3>
                  <h1 className="text-white big-text mb-0">
                    <span>UP TO</span> 40% OFF
                  </h1>
                  <p className="lead">Linux Hosting & Free Domain</p>
                  <a href="#" className="btn btn-danger btn-lg mb-3">
                    Get Started Now
                  </a>
                  <p>Hurry Up, Limited time offer is ticking down</p>
                  <div id="clock" className="countdown-wrap-2 my-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*hero section end*/}

        {/*pricing section start*/}
        <section id="pricing" className="pricing-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-4">
                  <h2>Choose Your Business Plan</h2>
                  <p className="lead">
                    Professional hosting at an affordable price. Distinctively
                    recaptiualize principle-centered core competencies through
                    client-centered core competencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-md-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <h6 className="mb-4">Economy</h6>
                  <div className="pricing-price pb-4">
                    <div className="h2 mb-0">
                      $8.99 <span className="price-cycle h4">/mo</span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>1</span> Website
                      </li>
                      <li>
                        <span>1</span> Email Address
                      </li>
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="We don’t set limits basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">
                          Limited
                        </span>
                        Bandwidth (100 GB)
                      </li>
                      <li>
                        <span>Free</span> SSL Certificate
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime Guarantee</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a href="#" className="btn btn-brand-01" target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="feature-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <span className="label-corner primary-bg">Featured</span>
                  <h6 className="mb-4">Deluxe</h6>
                  <div className="pricing-price pb-4">
                    <div className="h2 mb-0">
                      $29.99 <span className="price-cycle h4">/mo</span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="We don’t set limits on the number of websites you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business account, your number of websites won’t be limited in any way.">
                          Unlimited
                        </span>
                        Number of Websites
                      </li>
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Owners with more than 15 GB used email space may experience decreases in performance.">
                          Unlimited
                        </span>
                        Email Accounts
                      </li>
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="We don’t set limits on the amount of bandwidth you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">
                          Unlimited
                        </span>
                        Bandwidth
                      </li>
                      <li>
                        <span>Free</span> SSL Certificate
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime Guarantee</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a href="#" className="btn btn-brand-01" target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <h6 className="mb-4">Ultimate</h6>
                  <div className="pricing-price pb-4">
                    <div className="h2 mb-0">
                      $39.99 <span className="price-cycle h4">/mo</span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="We don’t set limits on the number of websites you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business account, your number of websites won’t be limited in any way.">
                          Unlimited
                        </span>
                        Number of Websites
                      </li>
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Owners with more than 15 GB used email space may experience decreases in performance.">
                          Unlimited
                        </span>
                        Email Accounts
                      </li>
                      <li>
                        <span
                          className="text-under-line"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="We don’t set limits on the amount of bandwidth you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">
                          Unlimited
                        </span>
                        Bandwidth
                      </li>
                      <li>
                        <span>Free</span> SSL Certificate
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime Guarantee</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a href="#" className="btn btn-brand-01" target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="support-cta text-center mt-5">
                  <a href="pricing-comparision.html" target="_blank">
                    <h5 className="mb-1">
                      <span className="ti-loop color-primary mr-2"></span>
                      Compare Hosting Plans
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*pricing section end*/}

        {/*call to action new section start*/}
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
                    imperatives.
                  </p>
                </div>
                <div className="support-action d-inline-flex flex-wrap">
                  <a href="mailto:support@yourdomain.com" className="mr-3">
                    <i className="fas fa-comment mr-1 color-accent"></i>
                    <span>support@idatahost.com</span>
                  </a>
                  <a href="tel:+00123456789" className="mb-0">
                    <i className="fas fa-phone-alt mr-1 color-accent"></i>
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
        {/*call to action new section end*/}

        {/*feature section start*/}
        <section className="feature-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center">
                  <h2>Best Hosting Features For You</h2>
                  <p className="lead">
                    These features come standard in all of our hosting plans.
                    Dynamically extend imperatives through open-source quickly
                    niche markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-panel icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Custom Control Panel</h5>
                    <p>
                      Our intuitive control panel gives you admin access to all
                      of your DreamHost products easily.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-thumb-up icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Real-Life Human Beings</h5>
                    <p>
                      Tech veterans, geeks, and nerds are all standing by to
                      optimize your experience whether.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-mouse-alt icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>1-Click Installer</h5>
                    <p>
                      No need to dig into a bunch of documentation. Simply
                      install web apps like WordPress, Joomla!.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-timer icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>100% Uptime Guarantee</h5>
                    <p>
                      With multiple datacenter locations, redundant cooling,
                      emergency generators and monitoring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-harddrives icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Solid State Drives (SSD)</h5>
                    <p>
                      With SSDs, your website, caching, and database queries are
                      faster by our calculations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="features-box border p-4 rounded">
                  <div className="features-box-icon mb-3">
                    <span className="ti-cup icon-size-md color-primary"></span>
                  </div>
                  <div className="features-box-content">
                    <h5>Award-Winning Support</h5>
                    <p>
                      No question is too simple, or too complex for our team of
                      experts. Synergistically synergize.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*feature section end*/}

        {/*call to action new section start*/}
        <section className="ptb-60 primary-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 col-lg-6">
                <div className="cta-content-wrap text-white">
                  <h2 className="text-white">
                    Best Business Partner <br />
                    With Trusted Service
                  </h2>
                  <p>
                    Objectively innovate high standards in methodologies
                    vis-a-vis sustainable compellingly maintain
                    multidisciplinary process proactively streamline
                    mission-critical information via quality imperatives.
                  </p>
                </div>
                <div className="action-btns mt-4">
                  <a href="#" className="btn btn-brand-03">
                    {" "}
                    Get Start Now{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="cta-img-wrap text-center">
                  <img
                    src="assets/img/server-room.svg"
                    className="img-fluid"
                    alt="server room"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*call to action new section end*/}

        {/*faq section start*/}
        <section id="faq" className="ptb-100">
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
                      className="card-header"
                      data-toggle="collapse"
                      href="#collapse0"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        Which license do I need?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven&#x27;t heard of them accusamus
                          labore sustainable VHS.
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
                        How do I get access to a theme?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          Ad vegan excepteur butcher vice lomo. Leggings
                          occaecat craft beer farm-to-table, raw denim aesthetic
                          synth nesciunt you probably haven&#x27;t heard of them
                          accusamus. Seamlessly optimize empowered testing
                          procedures before revolutionary processes.
                          Progressively facilitate client-centered technologies
                          whereas extensive users. Authoritatively.
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
                        How do I see previous orders?
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven&#x27;t heard of them accusamus
                          labore sustainable VHS.
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
                        Support related issues for the template?
                      </h6>
                    </a>
                    <div
                      id="collapse3"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table. Professionally embrace customer
                          directed value vis-a-vis high-quality portals. Quickly
                          underwhelm B2C users with maintainable benefits.
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

        {/*testimonial and review section start*/}
        <section className="review-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="section-heading">
                  <h2>Trusted By Clients And Industry Experts</h2>
                  <p>
                    Uniquely repurpose strategic core competencies with
                    progressive content. Assertively transition ethical
                    imperatives and collaborative manufactured products.
                  </p>
                  <a href="#" className="btn btn-outline-brand-01 btn-sm">
                    Write About Us
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="owl-carousel owl-theme client-testimonial-2 dot-bottom-center custom-dot">
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Amazing template</h5>
                        <p>
                          Distinctively foster maintainable metrics whereas
                          multidisciplinary process improvements. Objectively
                          implement strategic niches through.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-2.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Ana Joly</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Best template for app</h5>
                        <p>
                          Efficiently innovate customized growth strategies
                          whereas error-free paradigms. Monotonectally enhance
                          stand-alone data with prospective innovation.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-1.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Tony Roy</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Efficiently innovate app</h5>
                        <p>
                          Continually redefine sticky channels whereas extensive
                          "outside the box" thinking. Rapidiously supply focused
                          schemas vis-a-vis optimal users.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-3.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Ana Joly</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Uniquely mesh flexible</h5>
                        <p>
                          Phosfluorescently optimize intermandated platforms
                          without integrated infrastructures. Proactively
                          redefine granular thinking before.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-4.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Ana Joly</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Uniquely mesh flexible</h5>
                        <p>
                          Phosfluorescently optimize intermandated platforms
                          without integrated infrastructures. Proactively
                          redefine granular thinking before.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-1.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Ana Joly</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border single-review-wrap bg-white p-4 m-3">
                      <div className="review-body">
                        <h5>Holisticly reintermediate</h5>
                        <p>
                          Collaboratively reintermediate out-of-the-box
                          e-business via economically sound supply chains.
                          Dynamically target client-based holistic information.
                        </p>
                      </div>
                      <div className="review-author d-flex align-items-center">
                        <div className="author-avatar">
                          <img
                            src="assets/img/client-2.jpg"
                            width="64"
                            alt="author"
                            className="rounded-circle shadow-sm img-fluid mr-3"
                          />
                          <span>“</span>
                        </div>
                        <div className="review-info">
                          <h6 className="mb-0">Ana Joly</h6>
                          <span>BizBite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*testimonial and review section end*/}
      </div>
    </div>
  );
};

export default LinuxReseller;
