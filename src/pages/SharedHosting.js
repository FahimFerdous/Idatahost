import React from "react";

const SharedHosting = () => {
  return (
    <div>
      <div className="main">
        {/*hero section start*/}
        <section className="ptb-120 gradient-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-wrap text-white">
                  <span className="text-white h5 font-weight-normal">
                    Reliable shared hosting to host any website
                  </span>
                  <h1 className="text-white">
                  3x Faster Shared Hosting, Secure & Easy To Manage by cPanel
                  </h1>
                  <ul className="list-unstyled tech-feature-list">
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      <strong>Free</strong> automatic SSL installation
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      <strong>99%</strong> Uptime Guarantee
                    </li>
                    <li className="py-1">
                      <span className="fas fa-check-circle text-success mr-2"></span>
                      <strong>30-Day</strong> Money-Back Guarantee
                    </li>
                  </ul>
                  <div className="action-btns mt-2">
                    <p>
                      Get all the essentials features 
                      <strong> Starting at $1.55/mo</strong>
                    </p>
                    <a href="#" className="btn btn-brand-03 mr-3">
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
              {/*  image here */}
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

        {/*pricing section start*/}
        <section id="pricing" className="pricing-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-4">
                  <h2>Shared Hosting Plan</h2>
                  <p className="lead">
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
                      $1.58 <span className="price-cycle h4">/mo</span>
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        45% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $9.99/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>3</span> &nbsp; Website
                      </li>
                      <li>
                        <span>20 GB</span>&nbsp;SSD
                      </li>
                      <li>
                        <span className="text-under-line">Unmetered</span>&nbsp;
                        Bandwidth
                      </li>
                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>Free CDN</li>
                      <li>Domain Name</li>
                      <li>100% Uptime Guarantee</li>
                      <li>30 Subdomains</li>
                      <li>24/7 Supports</li>
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
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="feature-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <span className="label-corner primary-bg">Popular</span>
                  <h6 className="mb-4">Deluxe</h6>
                  <div className="pricing-price pb-4">
                    <div className="h2 mb-0">
                      $2.68 <span className="price-cycle h4">/mo</span>
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        40% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $18.99/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>Unlimited</span> &nbsp; Website
                      </li>
                      <li>
                        <span>Unmetered</span>&nbsp;SSD
                      </li>
                      <li>
                        <span className="text-under-line">Unmetered</span>&nbsp;
                        Bandwidth
                      </li>
                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>Free CDN</li>
                      <li>Domain Name</li>
                      <li>100% Uptime Guarantee</li>
                      <li>Unlimited Subdomains</li>
                      <li>24/7 Supports</li>
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
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="feature-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                  <span className="label-corner primary-bg">On Cloud</span>
                  <h6 className="mb-4">Ultimate</h6>
                  <div className="pricing-price pb-4">
                    <div className="h2 mb-0">
                      $4.80 <span className="price-cycle h4">/mo</span>
                    </div>
                    <div>
                      <span className="pricing-onsale ">
                        46% Off -
                        <span className="badge color-3 color-3-bg priceTextWp">
                          $57.6/year
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                      <li>
                        <span>Unlimited</span> &nbsp; Website
                      </li>
                      <li>
                        <span>Unmetered</span>&nbsp;SSD
                      </li>
                      <li>
                        <span className="text-under-line">Unmetered</span>&nbsp;
                        Bandwidth
                      </li>
                      <li>
                        <span>Free</span>&nbsp; SSL
                      </li>
                      <li>Free CDN</li>
                      <li>Domain Name</li>
                      <li>100% Uptime Guarantee</li>
                      <li>Unlimited Subdomains</li>
                      <li>600000 File Limit</li>
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

        {/*promo-section feature section start*/}
        <section className="promo-feature ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center">
                  <h2>Why iData Host</h2>
                  <p className="lead">
                    Shared Hosting allows many websites to utilize a single
                    server. Each customer will usually have a limit on the total amount of server resources they
                    can use, but this will be defined by your hosting package.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="feature-feature-list mt-4 text-center">
                  <span className="ti-thumb-up icon-size-md d-block color-primary mb-3"></span>
                  <h5 className="mb-2">99% Network Uptime</h5>
                  <p>Guaranteed uptime confirm by our expert and machine.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-feature-list mt-4 text-center">
                  <span className="ti-headphone-alt icon-size-md d-block color-primary mb-3"></span>
                  <h5 className="mb-2">24x7 Tech Support</h5>
                  <p>Worry-free service. Our experts always ready to help you.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-feature-list mt-4 text-center">
                  <span className="ti-lock icon-size-md d-block color-primary mb-3"></span>
                  <h5 className="mb-2">Security and safety</h5>
                  <p>Ensuring complete free SSL! security</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-feature-list mt-4 text-center">
                  <span className="ti-user icon-size-md d-block color-primary mb-3"></span>
                  <h5 className="mb-2">Trusted by Millions</h5>
                  <p>Seamlessly pontificate business best practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*promo-section feature section end*/}

        {/*feature section start*/}
        <section className="feature-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center">
                  <h2>Shared Hosting Features</h2>
                  <p className="lead">
                  iDataHost bring many features to all of our shared hosting plans. cPanel web hosting gives a strong web hosting flavor!
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
                    <h5>cPanel Control Panel</h5>
                    <p>
                    cPanel is an online graphical user interface (GUI) used as a control panel to simplify the website. cPanel enables hosting users to automate web management tasks while offering website automation. 
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
                    <h5>cPanel and WordPress</h5>
                    <p>
                    You can deploy WordPress in seconds with the Softaculous app installer. Softaculous helps to maintain and update your open-source applications. You can install WordPress very simply using Softaculous in cPanel.
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
                    It is more popular because it makes your job to set up a new website so much easier. You can easily install WordPress with a single click and start building an awesome website in minutes.
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
                    Our migration specialists can be migrated your current website for totally free, with no downtime. Our experts are very capable to migrate your website without losing data and any problems.
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

        {/*faq section start*/}
        <section id="faq" className="ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Shared Hosting FAQs</h2>
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
                        What is a Shared Hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        When multiple website hosts in a physical server and share the physical server resources is called shared hosting. Mostly hundreds of website hosts in shared hosting. Users can keep their website's files securely at a low cost. One user can not see another user's data and does not get access other user accounts. Shared hosting providers share the dedicated or virtual server resources on-demand.  Shares disk space, CPU, Bandwidth, RAM as well as FTP and email accounts. Other resources include the single MySQL server, mail server, Nginx server, or apache server. Considered the most cost-effective option, Shared Hosting offers sufficient resources for any startup, local company, or personal website. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <a
                      className="card-header"
                      data-toggle="collapse"
                      href="#collapse1"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        What cPanel?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        cPanel is a website hosting control panel developed by cPanel, LLC. This software provides a graphical interface (GUI) and having automation tools designed to easily hosting a website by the website owner or the "end-user". cPanel enables the administration of a website and operates in a standard web browser using a three-tier structure. cPanel allows the administration of the entire server.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <a
                      className="card-header"
                      data-toggle="collapse"
                      href="#collapse2"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        What are Shared Hosting Benefits?
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          There are many benefits to opting for shared hosting.
                          Let's take a look at the basic features of shared web
                          hosting:<br />
                          It's less expensive. <br />
                          Shared hosting provides the most cost-effective
                          hosting solution. With many people contributing
                          towards the costs of the server, the hosting company's
                          costs are distributed between them. <br />
                          It's flexible. <br />
                          New online ventures can begin with a shared hosting
                          plan and upgrade with the hassle as their site grows.<br />
                          It's easy to self manage.<br />
                          You can host multiple domains. <br />
                          You can install numerous websites in your user
                          directory, you just need to make sure the domains you
                          purchase are connected to it. <br />
                          It can host dynamic websites.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <a
                      className="card-header"
                      data-toggle="collapse"
                      href="#collapse3"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                      What websites get the free migration facility?
                      </h6>
                    </a>
                    <div
                      id="collapse3"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        The migration process from another web hosting provider to I Data Host is completely free, and we guarantee fast cPanel-to-cPanel transfers. Please open a ticket for manual website migration, and it depends on the individual case.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse4"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        How do I get started with iData Host Web Hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse4"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        Getting started with iDataHost hosting products is quick and easy. Simply select the website hosting plan that best fits your needs(Shared Hosting, Cloud Hosting, VPS Hosting, Dedicated Hosting, WordPress Hosting) and then choose the term length you'd like to start with. Knock us, If you do not understand which package is fit for you. Our experts perfectly guide you. We recommend the 36-month term to lock in the most affordable hosting price available. We are available for 24 hours to help you with any questions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card my-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse5"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        Can I Upgrade to a More powerful Hosting Plan Later?
                      </h6>
                    </a>
                    <div
                      id="collapse5"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          We know your ultimate goal is probably to grow your
                          website over time. We want that for you! when your
                          site's traffic reaches rush-hour levels, is
                          overflowing with content, or simply needs more
                          high-powered teach and features, you can upgrade to a
                          plan with extra bells, whistles, and performance
                          power. While shared hosting is a smart,
                          budget-friendly option when you are a beginner, a
                          content-rich, and heavily trafficked site many demand
                          a larger scale plan, meaning additional server apace,
                          specially-dedicated resources, advanced security, and
                          quicker speeds. No matter the current size of your
                          website, iData Host offers a perfectly matched plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <a
                      className="card-header collapsed"
                      data-toggle="collapse"
                      href="#collapse6"
                      aria-expanded="false">
                      <h6 className="mb-0 d-inline-block">
                        Do You Include SSL Certificates?
                      </h6>
                    </a>
                    <div
                      id="collapse6"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                          We care about safety big time and so do your site's
                          visitors. Sure, each of our packages comes with the
                          ability to install a free SSL certificate on your
                          website right away. In this day and age, having an SSL
                          for your site is a no-brainer best practice. Not only
                          does an SSL help your visitors feel safe interacting
                          with your site. This is particularly important if you
                          run an e-commerce site but it avoids penalization you
                          might otherwise earn from search engines without one.
                          No website wants an insecure label to bruise its
                          reputation. While an SSL certificate isn't and all, be
                          all defense against internet baddies, it's certainly a
                          great first step in the right direction to put your
                          site visitors at ease.
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

export default SharedHosting;
