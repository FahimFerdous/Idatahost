import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* pre loader */}
      <div id="preloader">
        <div className="preloader-wrap">
          <img
            src="assets/img/idatahost_201x80.png"
            alt="logo"
            className="img-fluid"
          />
          <div className="preloader">
            <i>.</i>
            <i>.</i>
            <i>.</i>
          </div>
        </div>
      </div>
      {/*Navbar */}
      <header id="header" className="header-main">
        <div
          id="logoAndNav"
          className={[
            "main-header-menu-wrap",
            "bg-transparent",
            "fixed-top",
          ].join(" ")}>
          <div className="container">
            <nav
              className={[
                "js-mega-menu",
                "navbar",
                "navbar-expand-md",
                "header-nav",
              ].join(" ")}>
              <a
                className={["navbar-brand", "pt-0"].join(" ")}
                href="index.html">
                <img
                  src="assets/img/i-logo.png"
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "70%" }}
                />
              </a>

              <button
                type="button"
                className="navbar-toggler btn"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar">
                <span id="hamburgerTrigger">
                  <span className="ti-menu"></span>
                </span>
              </button>

              <div id="navBar" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto main-navbar-nav">
                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item"
                    data-position="center">
                    {/*  <a
                      id="homeMegaMenu"
                      className="nav-link custom-nav-link"
                      href="https://google.com">
                      Home
                    </a> */}
                    <Link
                      to="/"
                      id="homeMegaMenu"
                      className="nav-link custom-nav-link">
                      Home
                    </Link>
                  </li>

                  {/* Server Section */}

                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item position-relative"
                    data-position="center">
                    <a
                      id="domainMegaMenu"
                      className="nav-link custom-nav-link main-link-toggle"
                      href="JavaScript:Void(0);"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Servers
                    </a>

                    <div
                      className="hs-mega-menu main-sub-menu"
                      style={{ width: "300px" }}
                      aria-labelledby="domainMegaMenu">
                      <div className="row no-gutters">
                        <div className="col-md-12 col-sm-12">
                          <div className="menu-item-wrap p-3">
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/dedicated-server">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-server mr-2 color-primary"></i>
                                  <span className="u-header__promo-title">
                                    Dedicated Server
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Find the perfect Server to publish your
                                  business
                                </small>
                              </Link>
                            </div>

                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/cloud-hosting">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-server mr-2 color-accent"></i>
                                  <span className="u-header__promo-title">
                                    Dedicated Cloud Server
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Gives you more Leverage over Business
                                </small>
                              </Link>
                            </div>
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/vps-server">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-server mr-2 instagram-color"></i>
                                  <span className="u-header__promo-title">
                                    VPS Server
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Access the full feature
                                </small>
                              </Link>
                            </div>
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/google-coming-soon">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-server mr-2 color-acsent"></i>
                                  <span className="u-header__promo-title">
                                    Google Cloud Server
                                  </span>
                                  <span className="badge badge-warning ml-auto">
                                    {" "}
                                    New
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Run business on Google Data center
                                </small>
                              </Link>
                            </div>
                            {/* Paste Above */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Paste Here */}
                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item position-relative"
                    data-position="center">
                    <a
                      id="hostingMegaMenu"
                      className="nav-link custom-nav-link main-link-toggle"
                      href="JavaScript:Void(0);"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Hosting
                    </a>

                    <div
                      className="hs-mega-menu main-sub-menu"
                      style={{ width: "715px" }}
                      aria-labelledby="hostingMegaMenu">
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                            {/*menu title with subtitle and icon item start  */}

                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/wordpress-hosting">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle dribbble-bg">
                                    <i className="fab fa-wordpress"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      Wordpress Hosting
                                    </span>
                                    <small className="u-header__promo-text">
                                      Conveniently Starting at
                                      <strong>$2.99/mo</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>

                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/shared-hosting">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle primary-bg">
                                    <i className="fas fa-server"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      Shared Web Hosting
                                    </span>
                                    <small className="u-header__promo-text">
                                      Innovate reliable quality Starting at
                                      <strong>$1.58/mo</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                            {/*menu title with subtitle and icon item start  */}

                            {/*menu title with subtitle and icon item end  */}

                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/java-hosting">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle secondary-bg">
                                    <i className="fas fa-cloud"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      JSP Hosting
                                    </span>
                                    <small className="u-header__promo-text">
                                    jvmhost at a low price
                                      <strong>$4/mo</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/vps-hosting">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle btn-behance">
                                    <i className="fas fa-cloud"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      VPS Hosting
                                    </span>
                                    <small className="u-header__promo-text">
                                      Globally Starting at
                                      <strong>$4.95/mo</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/free-hosting-for-school">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle twitter-bg">
                                    <i className="fas fa-server"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      Free Web Hosting for School
                                    </span>
                                    <small className="u-header__promo-text">
                                      Added extra
                                      <strong>Feature</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}

                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/free-hosting-for-college">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle accent-bg">
                                    <i className="fas fa-box"></i>
                                  </div>
                                  <div className="media-body">
                                    <span className="u-header__promo-title">
                                      Web Hosting for College/University
                                    </span>
                                    <small className="u-header__promo-text">
                                      Professional Services
                                      <strong>Altime</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                          </div>
                        </div>
                      </div>
                      {/* Mega Menu Banner   */}
                      <div
                        className="u-header__product-banner bg-image"
                        data-overlay="8">
                        <div
                          className="background-image-wraper custom-radius-bottom"
                          style={{
                            backgroundImage:
                              "url(" + "assets/img/hero-8.jpg" + ")",
                            backgroundPosition: "cover",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}></div>
                        <div className="u-header__product-banner-content position-relative z-index text-center text-white">
                          <div className="mb-4">
                            <h5 className="text-white">
                              Get 25% Discount Start Now
                            </h5>
                            <div className="clock menu-countdown my-4"></div>
                          </div>
                          <a className="btn btn-brand-03" href="#">
                            Get Started
                            <span className="ti-arrow-right pl-2"></span>
                          </a>
                        </div>
                      </div>
                      {/* End Mega Menu Banner   */}
                    </div>
                  </li>

                  {/* Paste Here */}

                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item position-relative"
                    data-position="center">
                    <a
                      id="domainMegaMenu"
                      className="nav-link custom-nav-link main-link-toggle"
                      href="JavaScript:Void(0);"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Domain
                    </a>

                    <div
                      className="hs-mega-menu main-sub-menu"
                      style={{ width: "300px" }}
                      aria-labelledby="domainMegaMenu">
                      <div className="row no-gutters">
                        <div className="col-md-12 col-sm-12">
                          <div className="menu-item-wrap p-3">
                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/domain-checker">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-globe mr-2 color-primary"></i>
                                  <span className="u-header__promo-title">
                                    Domain Checker
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Find the perfect domain for your business
                                </small>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                            {/*menu title with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/domain-transfer">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-exchange-alt mr-2 color-accent"></i>
                                  <span className="u-header__promo-title">
                                    Domain Transfer
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Transfer your domain easily using this tool
                                </small>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                            {/*menu title with subtitle and icon item start  *
                            <div className="title-with-icon-item">
                              <Link
                                className="title-with-icon-link"
                                to="/domain-registration">
                                <div className="d-flex align-items-center pb-1">
                                  <i className="fas fa-copyright mr-2 instagram-color"></i>
                                  <span className="u-header__promo-title">
                                    Domain Registration
                                  </span>
                                </div>
                                <small className="u-header__promo-text">
                                  Register your domain name for lifetime
                                </small>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Paste Here */}
                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item position-relative"
                    data-position="center">
                    <a
                      id="hostingMegaMenu"
                      className="nav-link custom-nav-link main-link-toggle"
                      href="Jav
            aScript:Void(0);"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Reseller
                    </a>

                    {/* Demos - Mega Menu   */}
                    <div
                      className="hs-mega-menu main-sub-menu"
                      style={{
                        width: "350px",
                      }}
                      aria-labelledby="hostingMegaMenu">
                      <div className="row no-gutters">
                        <div className="col-md-12">
                          <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                            {/*menu ti
                    tle with subtitle and icon item start  */}
                            <div className="title-with-icon-item">
                              <Link className="title-with-icon-link" to="/cpanel-reseller-hosting">
                                <div className="media align-items-center">
                                  <div className="menu-item-icon rounded-circle primary-bg">
                                    <i className="fas fa-server"></i>
                                  </div>

                                  <div className="media-body">
                                    <span classN ame="u-header__promo-title">
                                      cPanel Reseller Hosting
                                    </span>
                                    <small className="u-header__promo-text">
                                    Start your hosting business at &nbsp;
                                      <strong>$7.99/mo</strong>
                                    </small>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/*menu title with subtitle and icon item end  */}
                            {/*menu title with subtitle and icon item start  */}

                            {/*menu title with subtitle and icon item end  */}

                            {/*menu title with subtitle and icon item start  */}

                            {/*menu title with subtitle and icon item end  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Demos - Mega Menu   */}
                  </li>
                  {/* Paste Here 

                  <li className="nav-item custom-nav-item">
                    <Link className="nav-link custom-nav-link" to="/affiliates">
                      Affiliates
                    </Link>
                  </li>

                  {/* Paste Here */}
                  <li
                    className="nav-item hs-has-mega-menu custom-nav-item position-relative"
                    data-position="center">
                    <a
                      id="aboutMegaMenu"
                      className="nav-link custom-nav-link main-link-toggle"
                      href="JavaScript:Void(0);"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Company
                    </a>

                    {/*about submenu start  */}
                    <div
                      className="hs-mega-menu main-sub-menu"
                      style={{ width: "320px" }}
                      aria-labelledby="aboutMegaMenu">
                      {/*menu title with subtitle and icon item start  */}
                      <div className="title-with-icon-item">
                        <Link className="title-with-icon-link" to="/contact">
                          <div className="media align-items-center">
                            <img
                              className="menu-titile-icon"
                              src="assets/img/chat-mobile.svg"
                              alt="SVG"
                            />
                            <div className="media-body">
                              <span className="u-header__promo-title">
                                24/7 Support
                              </span>
                              <small className="u-header__promo-text">
                                Face any problem contact with us
                              </small>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/*menu title with subtitle and icon item end  */}

                      {/*menu title with subtitle and icon item start  */}
                      {/* <div className="title-with-icon-item title-with-icon-link">
                        <div className="media align-items-center ">
                          <img
                            className="menu-titile-icon"
                            src="assets/img/community.svg"
                            alt="SVG"
                          />
                          <div className="media-body">
                           
                            <Link to="/about" className="u-header__promo-title">
                              About Us
                            </Link>
                            <small className="u-header__promo-text">
                              We are leading hosting company
                            </small>
                          </div>
                        </div>
                      </div> */}
                      {/*menu title with subtitle and icon item end  */}

                      {/*menu title with subtitle and icon item start  */}
                      <div className="title-with-icon-item">
                        <a
                          className="title-with-icon-link"
                          href="https://kb.idatahost.com"
                          target="_blank">
                          <div className="media align-items-center">
                            <img
                              className="menu-titile-icon"
                              src="assets/img/network.svg"
                              alt="SVG"
                            />
                            <div className="media-body">
                              <span className="u-header__promo-title">
                                Knowledge Base | Q&A
                              </span>
                              <small className="u-header__promo-text">
                                Have a Question? Just Ask
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/*menu title with subtitle and icon item end  */}
                      {/*menu title with subtitle and icon item start  */}
                      <div className="title-with-icon-item">
                        <a
                          className="title-with-icon-link"
                          href="https://blog.idatahost.com"
                          target="_blank">
                          <div className="media align-items-center">
                            <img
                              className="menu-titile-icon"
                              src="assets/img/partner.svg"
                              alt="SVG"
                            />
                            <div className="media-body">
                              <span className="u-header__promo-title">
                                Blog
                              </span>
                              <small className="u-header__promo-text">
                                Look at our enriched community
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/*menu title with subtitle and icon item end  */}
                      {/*menu title with subtitle and icon item start  */}
                      <div className="title-with-icon-item">
                        <a
                          className="title-with-icon-link"
                          href="https://news.idatahost.com"
                          target="_blank">
                          <div className="media align-items-center">
                            <img
                              className="menu-titile-icon"
                              src="assets/img/blog.svg"
                              alt="SVG"
                            />
                            <div className="media-body">
                              <span className="u-header__promo-title">
                                News
                              </span>
                              <small className="u-header__promo-text">
                                Industry latest technology news & tips
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/*menu title with subtitle and icon item end  */}
                    </div>
                    {/*about submenu end  */}
                  </li>

                  {/* Paste Here */}
                  <li className="nav-item header-nav-last-item d-flex align-items-center">
                    <a
                      className="btn btn-brand-03 animated-btn"
                      href="https://cp.idatahost.com/login"
                      target="_blank">
                      <span className="fa fa-user pr-2"></span> Client Area
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
