import React from "react";

const Vps_hosting = () => {
  return (
    <div>
      <div className="main">
        {/*hero section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-wrap text-white">
                  <h1 className="text-white">
                    Your Own VPS, Fully Managed by Experts
                  </h1>
                  <p className="lead">
                    VPS, give you the cost benefits with the performance and
                    control of Dedicated Hosting. VPS is a cost-effective
                    hosting option which allows for your to have dedicated
                    resources.
                  </p>
                  <a
                    href="https://cp.idatahost.com/login"
                    target="_blank"
                    className="btn btn-brand-03 btn-lg">
                    Get Start Now
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="img-wrap">
                  <img
                    src="assets/img/hero-vps-hosting.svg"
                    alt="vps image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*hero section end*/}

        {/*vps hosting pricing plane start*/}
        <section className="vps-pricing-plane ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Choose Your VPS Hosting Plan</h2>
                  <p className="lead">
                    Uniquely restore open-source products via open-source
                    relationships. Enthusiastically deliver competitive systems
                    and client-centric.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <table className="table vps-hosting-pricing-table">
                  <thead className="primary-bg text-white">
                    <tr>
                      <th>CPU</th>
                      <th>RAM</th>

                      <th>SSD Storage</th>
                      <th>Transfer</th>
                      <th>Root Access</th>
                      <th colspan="2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">1 Core</td>
                      <td data-value="Memory">1 GB</td>

                      <td data-value="Storage">150 GB</td>
                      <td data-value="Transfer">2 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $4.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            44% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $8.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">2 Core</td>
                      <td data-value="Memory">2 GB</td>

                      <td data-value="Storage">250 GB</td>
                      <td data-value="Transfer">3 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $7.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            47% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $14.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">4 Core</td>
                      <td data-value="Memory">4 GB</td>

                      <td data-value="Storage">450 GB</td>
                      <td data-value="Transfer">4 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $9.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            50% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $19.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">2 Core</td>
                      <td data-value="Memory">8 GB</td>

                      <td data-value="Storage">
                        150 GB <br /> NVMe
                      </td>
                      <td data-value="Transfer">2 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $34.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            41% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $59.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">6 Core</td>
                      <td data-value="Memory">16 GB</td>

                      <td data-value="Storage">
                        250 GB
                        <br />
                        NVMe
                      </td>
                      <td data-value="Transfer">3 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $54.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            45% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $99.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                    <tr className="vps-pricing-row gray-light-bg">
                      <td data-value="CPU">8 Core</td>
                      <td data-value="Memory">32 GB</td>

                      <td data-value="Storage">
                        450 GB
                        <br />
                        NVMe
                      </td>
                      <td data-value="Transfer">4 TB</td>
                      <td data-value="Root Access">
                        <i className="fas fa-check-circle priceTick"></i>
                      </td>
                      <td data-value="Price">
                        <p className="mb-0">
                          <span className="rate">
                            $74.95<span>/month</span>
                          </span>
                          <span className="pricing-onsale">
                            46% Off -
                            <span className="badge color-3 color-3-bg">
                              (Was $139.99)
                            </span>
                          </span>
                        </p>
                      </td>
                      <td>
                        <a
                          href="https://cp.idatahost.com/login"
                          className="btn btn-brand-01 btn-xs"
                          target="_blank">
                          Purchase
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/*vps hosting pricing plane end*/}

        {/*feature section start*/}
        <section className="feature-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Our VPS Hosting Platform Best Features</h2>
                  <p className="lead">
                    Server performance, flexible management levels, easy-to-use
                    features & the best development software are a few reasons
                    why most of the customers would recommend us to a friend,
                    family or colleague.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <div className="feature-feature-list py-3">
                    <span className="ti-harddrives icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">SSD Disk Drives</h5>
                    <p>
                      You can never go wrong with our own top-notch dedicated
                      servers loaded Credibly network leading-edge services
                      vis-a-vis world-className niches. Seamlessly visualize
                      end-to-end web-readiness
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-rss-alt icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">100 Mb/s Network</h5>
                    <p>
                      We can guarantee an excellent experience and loading time
                      for your successful Energistically synthesize just in time
                      paradigms after resource-leveling e-business plagiarize
                      cross-unit information
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-lock icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">DDoS Protection</h5>
                    <p>
                      With full root access you will be able to take full
                      control of your server very easy Holisticly repurpose
                      granular models and go forward schemas. Professionally
                      scale magnetic portals before
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <img
                    src="assets/img/private-cloud-server.svg"
                    alt="hosting"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between mt-5">
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <img
                    src="assets/img/easy-to-transfer.svg"
                    alt="hosting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <div className="feature-feature-list py-3">
                    <span className="ti-world icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">Dedicated IP</h5>
                    <p>
                      One of many premium features is a dedicated IP cheapest
                      VPS hosting plan Authoritatively formulate user-centric
                      sources without emerging best practices. Monotonectally
                      morph an expanded
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-location-pin icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">IPv6 Support</h5>
                    <p>
                      Our VPS hosting plan is fully packed with dedicated IPv6
                      Internet protocol IP Progressively maximize standardized
                      catalysts for change via diverse initiatives.
                      Monotonectally underwhelm
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-wallet icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">Money-back Guarantee</h5>
                    <p>
                      If you???re not 100% satisfied with Hostlar, we???ll refund
                      your payment no risk Interactively administrate wireless
                      results via cooperative mindshare. Completely benchmark
                      process-centric sources and high standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*feature section end*/}

        {/*call to action new section start*/}
        <section className="ptb-100 primary-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-6">
                <div className="cta-content-wrap text-white text-center">
                  <h2 className="text-white">
                    VPS Hosting Platform With Maximum Speed
                  </h2>
                  <p className="lead">
                    Objectively innovate high compellingly maintain
                    multidisciplinary process improvements whereas.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-1.png"
                    alt="os"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-2.png"
                    alt="os"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-3.png"
                    alt="os"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-4.png"
                    alt="os"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-5.png"
                    alt="os"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                <div className="single-icon-wrap border rounded bg-white p-4 text-center mt-4">
                  <img
                    src="assets/img/os-img-6.png"
                    alt="os"
                    className="img-fluid"
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
                          <span>???</span>
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
                          <span>???</span>
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
                          <span>???</span>
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
                          <span>???</span>
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
                          <span>???</span>
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
                          <span>???</span>
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

export default Vps_hosting;
