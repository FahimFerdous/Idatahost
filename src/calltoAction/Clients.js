import React from "react";

const Clients = () => {
  return (
    <div>
      {/* call to action */}
      <section className="ptb-60 primary-bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6">
              <div className="cta-content-wrap text-white">
                <h2 className="text-white">
                  24/7 Expert Hosting Support Our Customers Love
                </h2>
                <p>
                  Objectively innovate high compellingly maintain progressively
                  pursue mission-critical information quality imperatives.
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

      {/* Worldwide clients */}
      <section className="network-map-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                <h2>Our Clients Around the World</h2>
                <p className="lead">
                  IDataHost offers a worldwide network, enabling you to rely on
                  our services.
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

      {/* Client list */}

      <section className="client-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>A Glimpse of Our Valuable Clients</h2>
                <p>
                  Rapidiously morph transparent internal or sources whereas
                  resource sucking e-business. Conveniently innovate formulate
                  clicks-and-mortar manufactured products compelling internal.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/bangladeshbank.jpeg"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/Islami-Bank.jpg"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/opus.png"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/unisafe.png"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/dusra.png"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
                <div className="item single-customer">
                  <img
                    src="assets/img/customers/bdsoftit_png.png"
                    alt="client logo"
                    className="customer-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
