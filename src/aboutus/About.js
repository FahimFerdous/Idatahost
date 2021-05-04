import React from "react";

const About = () => {
  return (
    <div>
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>
                What makes us best among the other hosting companies
                </h2>
                <p>
                We believe that we are the best web hosting provider because we provide high quality hosting services, cPanel and other panel. We have experience support staff's who is ready to help you for 24 hours. You can choose the hosting plan of your choice at a very cheap price.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center justify-content-sm-center">
            <div className="col-md-6 col-lg-4">
              <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="fas fa-cubes icon-size-lg color-primary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Fully Managed</h5>
                    <p className="mb-0">
                    Ensuring the best possible defense against the most dangerous network attacks! The web hosting management experts help to solve your problem and other facts that you need to get.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="fas fa-headset icon-size-lg color-primary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>24/7 Support</h5>
                    <p className="mb-0">
                    Look for the client area on our website to open a ticket for 
                    technical, non-technical and billing questions. Live chat and ticket both 
                    support option is typically suggested for new order or re order
                    of products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="fas fa-lock icon-size-lg color-primary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Secure Data</h5>
                    <p className="mb-0">
                      iDataHost practice and protecting clients data. Providing
                      FREE SSL Certificate with web hosting services. More features like 
                      2-Factor Authentication included completely free with your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}

      <section className="ptb-100 service-section-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>Our Tools & Services Helping To Optimize Your Website</h2>
                <p>
                Without an optimized 
                website you won’t rank in search results. Our 
                optimization services and tools are providing you the best support for 
                building up your website.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Easy & First</span>
                    <br />
                    Website Building
                  </h4>
                  <span className="fas fa-shield-alt fa-3x color-primary"></span>
                </div>
                <p>
                A website builder is a platform or program that enables you to rapidly and 
                easily create a website. These website builder has awesome features like drag
                and drop software that lets you customize content on a page with layouts chosen
                from web page templates.
                </p>
                <a href="/website-builder" className="btn btn-outline-brand-02 mt-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">
                      Suitable For All Users
                    </span>
                    <br />
                    Managed WordPress
                  </h4>
                  <span className="fab fa-wordpress fa-3x color-primary"></span>
                </div>
                <p>
                  iData Host managed all services where all technical aspects of running WordPress.
                  Services like Security, speed, website uptime, daily backups, WordPress updates, and scalability.
                  We use out standing cloud technology. So the WordPress site faster than the other.
                </p>
                <a href="/wordpress-hosting" className="btn btn-outline-brand-02 mt-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Commitment To</span>
                    <br />
                    Dedicated Support
                  </h4>
                  <span className="fas fa-headset fa-3x color-primary"></span>
                </div>
                <p>
                iData Host having experienced experts. Whatever the time zone you come from 
                that, not a big deal. iData Host experts doing 24 hours shifting duty, which 
                gives you more comfort and runs smooth your hosting services. 
                </p>
                <a href="#" className="btn btn-outline-brand-02 mt-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Easy & Smooth</span>
                    <br />
                    Website Transfer
                  </h4>
                  <span className="fas fa-dolly-flatbed fa-3x color-primary"></span>
                </div>
                <p>
                One of the painful and stressful jobs is website migration from another 
                hosting provider. Do not panic! Just leave this to our expert. Our expert 
                will migrate your website from another hosting company. So, you will not 
                face any problems. 
                </p>
                <a href="#" className="btn btn-outline-brand-02 mt-3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <div className="feature-section ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-lg-6">
              <div className="feature-content-wrap">
                <h2>Best Cloud Hosting And No Hidden Cost</h2>
                <p>
                We offer you transparent, predictable pricing, and there has no hidden cost. 
                Our Cloud Service is highly performing than other cloud hosting companies. 
                iDataHost delivers the best CPU performance per dollar when compared with AWS 
                and Google. Manageable control panel features give you extraordinary facility. 
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
                <h2>All facilities manage from a single platform</h2>
                <p>
                You can manage your invoice, domains, web hosting, cloud server, and dedicated 
                server from one billing panel. You can place an order from our billing panel. 
                Our panel interface is very user-friendly and easily manageable. You can log 
                in to your web hosting account with a single click. You can 
                edit your profile and manage your card very easily. You do not need to take 
                any additional knowledge to operate this billing panel. 
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
    </div>
  );
};

export default About;
