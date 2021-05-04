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
                    VPS Hosting Server
                  </h1>
                  <p className="lead">
                    VPS, give you the cost benefits with the performance and
                    control of Dedicated Hosting. Secure VPS is a cost-effective
                    hosting option which allows for you to have dedicated
                    access.
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
                  <h2>VPS Hosting Plan</h2>
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
                  <h2>VPS Hosting Server Features</h2>
                  <p className="lead">
                  Server performance, easy-to-use & the best development software are a few reasons why most of our customers recommend us to friends, family, or colleagues.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="cta-new-wrap">
                  <div className="feature-feature-list py-3">
                    <span className="ti-harddrives icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">20X Faster Storage</h5>
                    <p>
                    Our quality machines are faster so enjoy 20X faster storage, designed to raise 
performance over the consecutive Hard Drives preferred by VPS hosting competitors. 
As a result your website's speed, loading times, availablity, and performance.
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-rss-alt icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">100% Network Up Time</h5>
                    <p>
                    We can guarantee you an excellent up time experience and loading time is very fast. iDataHost assurance you Network Up Time.
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-lock icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">VPS Server Security</h5>
                    <p>
                      With full root access you will be able to take full
                      control of your server. Our Dedicated Server security maintains all security 
                      rules. So, the VPS performance is the best and runs smoothly. 
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
                    Dedicated IP is one of the prefimum feature. VPS service performance, protection, speed and 
access for your websites you get an IP address. Which allowing you to connect your VPS sever.
We offering additional IP for VPS hosting with a minimum charge.
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-location-pin icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">Root Access</h5>
                    <p>
                    Root access permits you to access any resource on a device and authorization to execute any command on that device. You can access to VPS Server with root-level access for complete control of your managed server environment.
                    </p>
                  </div>
                  <div className="feature-feature-list py-3">
                    <span className="ti-wallet icon-size-md d-block color-primary mb-3"></span>
                    <h5 className="mb-2">Complete Customizable</h5>
                    <p>
                    You can choose an operating system (CentOS, Ubuntu, or Debian) for your VPS server and decide if you want to install a cPanel/DirectAdmin or any other control panel. Depending on your level of technical expertise, your VPS is completely customizable.
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
                  Choose The Required OS For The VPS Hosting Project
                  </h2>
                  <p className="lead">
                  For the best VPS Hosting performance you can choose any of these Operating System.
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
                  <h2>VPS Server FAQs</h2>
                  <p>
                  Some common questions answer. Still have questions? Contact us
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
                        What is VPS hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse0"
                      className="collapse show"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        Virtual Private Server (VPS) hosting refers to partitioning a dedicated server
                         into multiple ones. Each VPS has its own Operating System (OS). VPS is a 
                         server that is a virtual machine. While you will share some hardware 
                         resources with other VPS from one physical server, so they are isolated, 
                         unable to interfere, and can be separately rebooted.
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
                        Should I choose a VPS hosting?
                      </h6>
                    </a>
                    <div
                      id="collapse1"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        In shared web hosting, there is no guarantee for CPU, RAM. VPS hosting server can control your websites, files, emails, and databases. You can get more control to access with root label to perform configuration, but not possible in shared hosting.
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
                        What are the benefits of VPS?
                      </h6>
                    </a>
                    <div
                      id="collapse2"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        For web hosting accounts, users are guaranteed for the resources on their VPS server. The benefits of VPS are: 1. Reliability 2. Complete control 3. Scalability 4. Security 5. Cost-effective If you do not share the operating system with any other users, you will get better protection for your website files.
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
                      Why should I choose VPS Hosting service from iData Host?
                      </h6>
                    </a>
                    <div
                      id="collapse3"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="card-body white-bg">
                        <p>
                        VPS Hosting service best for bloggers, Hosting reseller, E-commerce owner and web Developers. iDataHost offer best security, High performance, flexibility server. Where full control over your hosting environment.
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

export default Vps_hosting;
