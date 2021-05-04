import React from "react";

const ResellerHosting = () => {
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
                  <h3 className="text-white">Reseller Hosting!</h3>
                  <h1 className="text-white big-text mb-0">
                    <span>UP TO</span> 40% OFF
                  </h1>
                  <p className="lead">cPanel Reseller Hosting & Free Domain</p>
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
                  <h2>Reseller Hosting Plans</h2>
                  <p className="lead">
                  Start your hosting business at a minimum price. Gradually upgrade your business, and you may update your reseller hosting plan anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-md-center justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <h6 className="mb-4">Starter</h6>
                  <div className="pricing-price pb-4">
                    <div className="h3 mb-0">
                      $2.99 <span className="price-cycle h4">/mo</span>
                      <br />
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        23% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $25.6/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>1</span>&nbsp; Website
                      </li>
                      <li>
                        <span>10 GB</span> Storage
                      </li>

                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a
                      href="https://cp.idatahost.com/login"
                      className="btn btn-brand-01"
                      target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="feature-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <span className="label-corner primary-bg">Featured</span>
                  <h6 className="mb-4">Ecommerce</h6>
                  <div className="pricing-price pb-4">
                    <div className="h3 mb-0">
                      $13.99 <span className="price-cycle h4">/mo</span>
                      <br />
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        50% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $83.99/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>1</span>&nbsp; Website
                      </li>
                      <li>
                        <span>150 GB</span> Storage
                      </li>

                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a
                      href="https://cp.idatahost.com/login"
                      className="btn btn-brand-01"
                      target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <h6 className="mb-4">Turbo</h6>
                  <div className="pricing-price pb-4">
                    <div className="h3 mb-0">
                      $6.99 <span className="price-cycle h4">/mo</span>
                      <br />
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        35% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $81.6/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>1</span>&nbsp; Website
                      </li>
                      <li>
                        <span>50 GB</span> Storage
                      </li>

                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a
                      href="https://cp.idatahost.com/login"
                      className="btn btn-brand-01"
                      target="_blank">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <h6 className="mb-4">Turbo Plus</h6>
                  <div className="pricing-price pb-4">
                    <div className="h3 mb-0">
                      $10.99 <span className="price-cycle h4">/mo</span>
                      <br />
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        50% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $65.99/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>1</span>&nbsp; Website
                      </li>
                      <li>
                        <span>100 GB</span> Storage
                      </li>

                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>24/7 phone support</li>
                      <li>LiteSpeed Cache</li>
                      <li>99.9% Uptime</li>
                      <li>DNS Management</li>
                      <li>Daily Backups</li>
                    </ul>
                    <a
                      href="https://cp.idatahost.com/login"
                      className="btn btn-brand-01"
                      target="_blank">
                      Purchase Now
                    </a>
                  </div>
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
        {/*call to action new section end*/}

        {/*feature section start*/}
        <section className="feature-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center">
                  <h2>Best Reseller Hosting Features</h2>
                  <p className="lead">
                  Our reseller hosting based on cPanel. So, you will get all cPanel/WHM features. 
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
                    <h5>WHM & cPanel</h5>
                    <p>
                    Create and modify your user account from WHM. WHM is a world-class control panel. WHM/cPanel mostly use by the hosting provider. Lots of features awaiting for you to manage your clients.
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
                    <h5>Account Management Tools</h5>
                    <p>
                    Take advantage of the WHMCS billing client management platform, the Domain reseller panel, and much more. You can create invoices, and various tools to manage your hosting business.
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
                    <h5>Custom Packages</h5>
                    <p>
                    Create custom hosting packages based on fully configurable resources. You can create hosting packages as you want. Any time you can update or modify your custom hosting packages. 
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
                    <h5>Automatic backup</h5>
                    <p>
                    We take regular offsite backups of your websites in a week. You will get the last three backups always. We are ensuring that your hard work is protected by our experts and backup machines.
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
                    <h5>Free website migration</h5>
                    <p>
                    Our migration specialists can be migrated your current website for totally free. You can migrate cPanel based websites from another hosting company to our company without losing data. 
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
                    iDataHost support team and resources are available 24 hours a day, 7 days a week. Our customers love our ticket and email support. Our team rates high in customer satisfaction for their friendly expertise.
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
                  <h2>Reseller Hosting FAQs</h2>
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
                        What is Reseller Hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        Those who want to be a hosting provider and wholesale web hosting account. Reseller Hosting allows you to create your own branded hosting package service and your own pricing structure.
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
                      What is the difference between WHM and WHMCS?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        Web Host Manager (WHM) is a control panel that gives the user the ability to manage multiple cPanel-based sites. 
<br/><br/>Web Host Manager Complete Solution (WHMCS) is web hosting management and billing software that automates all aspects of your hosting business from billing, provisioning, domain reselling, and many more.
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
                      Who will provide customer service to my customers through Reseller Hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        As a reseller of Reselling Hosting, you’ll provide support to your customer. 
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
                      Can I make money by reseller hosting business?
                      </h6>
                    </a>
                    <div
                      id="collapse3"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        Yes, This is the ideology of the reseller hosting business. You could be a hosting provider, and you can create custom hosting packages for websites. 
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

        {/*testimonial and review section start
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

export default ResellerHosting;
