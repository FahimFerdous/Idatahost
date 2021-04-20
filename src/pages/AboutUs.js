import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="main">
        {/*page header section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-8">
                <div className="hero-content-wrap text-white text-center position-relative">
                  <h1 className="text-white">About Us</h1>
                  <p className="lead">
                    IDATAHOST is one of the finest Domain and Hosting service
                    provider in Bangladesh .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*page header section end*/}

        {/*feature section tab style start*/}
        <section
          id="about"
          className="about-section position-relative overflow-hidden ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-12 col-lg-6">
                <div className="feature-contents section-heading">
                  <h2>
                    We Share the Same Values which Makes our Team Stronger
                  </h2>
                  <p>
                    Objectively deliver professional value with diverse
                    web-readiness. Collaboratively transition wireless customer
                    service without goal-oriented catalysts for change.
                    Collaboratively.
                  </p>

                  <ul className="check-list-wrap list-two-col py-3">
                    <li>Data driven quality review</li>
                    <li>Secure work environment</li>
                    <li>24x7 coverage</li>
                    <li>Lifetime updates</li>
                    <li>Management team</li>
                    <li>Tech support</li>
                    <li>Integration ready</li>
                    <li>Tons of assets</li>
                    <li>Compliance driven process</li>
                    <li>Workforce management</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="image-wrap">
                  <img
                    className="img-fluid"
                    src="assets/img/feature-17.svg"
                    alt="animation image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*feature section tab style end*/}

        {/*network map section start*/}
        <section className="network-map-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Our Clients Around the World</h2>
                  <p className="lead">
                    IDataHost offers a worldwide network, enabling you to rely
                    on our services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="network-map-wrap">
                  <ul className="custom-map-location">
                    <li style={{ top: "29%", left: "15.5%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Canada"></span>
                    </li>
                    <li style={{ top: "42%", left: "20%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="United States"></span>
                    </li>
                    <li style={{ top: "70%", left: "32%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Brazil"></span>
                    </li>
                    <li style={{ top: "57%", left: "48%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Nigeria"></span>
                    </li>
                    <li style={{ top: "18%", left: "53%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Finland"></span>
                    </li>
                    <li style={{ top: "34%", left: "55%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Ukraine"></span>
                    </li>
                    <li style={{ top: "45%", left: "68%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="India"></span>
                    </li>
                    <li style={{ top: "35%", left: "80%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="China"></span>
                    </li>
                    <li style={{ top: "77%", left: "85%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Australia"></span>
                    </li>
                    <li style={{ top: "20%", left: "70%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Russia"></span>
                    </li>
                    <li style={{ top: "30%", left: "30%" }}>
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Italy"></span>
                    </li>
                  </ul>
                  <img src="assets/img/map-dark.svg" alt="location map" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*network map section end*/}

        {/*call to action start*/}
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
        {/*call to action end*/}

        {/*feature section start*/}
        <div className="feature-section ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 col-lg-6">
                <div className="feature-content-wrap">
                  <h2>99% Cloud Hosing High-speed Cutting-edge Platform</h2>
                  <p>
                    Authoritatively transform functionalized information without
                    cross-platform convergence. Quickly reconceptualize
                    cross-unit e-markets without superior products.
                    Appropriately foster timely collaboration and idea-sharing
                    rather than magnetic potentialities. Authoritatively restore
                    high standards in outsourcing whereas vertical
                    meta-services. Compellingly reconceptualize out-of-the-box
                    outsourcing through plug-and-play synergy.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-brand-01 mt-3"
                    target="_blank">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 d-none d-md-block d-lg-block">
                <div className="feature-img-wrap text-center">
                  <img
                    src="assets/img/services.svg"
                    className="img-fluid"
                    alt="server room"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between mt-5">
              <div className="col-md-5 col-lg-5 d-none d-md-block d-lg-block">
                <div className="feature-img-wrap text-center">
                  <img
                    src="assets/img/create-website.svg"
                    className="img-fluid"
                    alt="server room"
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-6">
                <div className="feature-content-wrap">
                  <h2>Our Own Interfaces for All Management Processes</h2>
                  <p>
                    Authoritatively transform functionalized information without
                    cross-platform convergence. Quickly reconceptualize
                    cross-unit e-markets without superior products.
                    Appropriately foster timely collaboration and idea-sharing
                    rather than magnetic potentialities. Authoritatively restore
                    high standards in outsourcing whereas vertical
                    meta-services. Compellingly reconceptualize out-of-the-box
                    outsourcing through plug-and-play synergy.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-brand-01 mt-3"
                    target="_blank">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*feature section end*/}

        {/*testimonial and review section start*/}
        <section className="review-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-7">
                <div className="section-heading text-center">
                  <h2>Our Lovely Client Say About Us</h2>
                  <p>
                    Uniquely repurpose strategic core competencies with
                    progressive content. Assertively transition ethical
                    imperatives and collaborative manufactured products.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="owl-carousel owl-theme client-testimonial-1 dot-bottom-center custom-dot">
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
                        without integrated infrastructures. Proactively redefine
                        granular thinking before.
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
                      <h5>Compellingly empower app</h5>
                      <p>
                        Proactively grow focused niche markets with virtual
                        e-services. Rapidiously pursue effective ROI via
                        holistic information completely reintermediate.
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
                      <h5>Holisticly reintermediate</h5>
                      <p>
                        Collaboratively reintermediate out-of-the-box e-business
                        via economically sound supply chains. Dynamically target
                        client-based holistic information.
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
                      <h5>Uniquely mesh flexible</h5>
                      <p>
                        Phosfluorescently optimize intermandated platforms
                        without integrated infrastructures. Proactively redefine
                        granular thinking before.
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
                      <h5>Compellingly empower app</h5>
                      <p>
                        Proactively grow focused niche markets with virtual
                        e-services. Rapidiously pursue effective ROI via
                        holistic information completely reintermediate.
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
                        Collaboratively reintermediate out-of-the-box e-business
                        via economically sound supply chains. Dynamically target
                        client-based holistic information.
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
        </section>
        {/*testimonial and review section end*/}
      </div>
    </div>
  );
};

export default AboutUs;
