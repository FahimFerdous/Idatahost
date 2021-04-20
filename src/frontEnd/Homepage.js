import React, { useState, useEffect } from "react";
import { firebase } from "../firebase";

const db = firebase.database();
const Homepage = () => {
  const [feature1, setfeature1] = useState("");
  const [feature2, setfeature2] = useState("");
  const [feature3, setfeature3] = useState("");

  const [FetchHome, setFetchHome] = useState({});

  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      db.ref("HomePage").push().set({ feature1, feature2, feature3 });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    db.ref("HomePage").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setFetchHome({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  return (
    <div className="main">
      <section className="contact-us-section ptb-100" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger"></div>
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="contact-us-form-wrap gray-light-bg position-relative">
                <form
                  action=""
                  method="POST"
                  id="contactForm"
                  className="contact-us-form"
                  onSubmit={HandleSubmit}>
                  <div className="form-row">
                    <div className="col-md-9 col-12">
                      <h2>Homepage placeholder</h2>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="5"
                          cols="25"
                          placeholder="Feature 1"
                          value={feature1}
                          onChange={(e) =>
                            setfeature1(e.target.value)
                          }></textarea>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="5"
                          cols="25"
                          placeholder="Feature 2"
                          value={feature2}
                          onChange={(e) =>
                            setfeature2(e.target.value)
                          }></textarea>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="form-group">
                        <textarea
                          name="Feature 3"
                          id="message"
                          className="form-control"
                          rows="5"
                          cols="25"
                          placeholder="Feature 3"
                          value={feature3}
                          onChange={(e) =>
                            setfeature3(e.target.value)
                          }></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="btn btn-brand-01"
                        id="btnContactUs">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <div className="h2">Demo Text</div>
      <hr />
      <div className="form">
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
          </div>
          <div classNameName="form-group">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
        <div>
          {Object.keys(FetchHome).map((id) => {
            return (
              <div>
                <h4>{FetchHome[id].email}</h4>
                <h4>{FetchHome[id].text}</h4>
              </div>
            );
          })}
        </div>
      </div> */}

      {/*feature section start*/}
      <section className="feature-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center"></div>
            </div>
          </div>
          <div className="row">
            {Object.keys(FetchHome).map((id) => {
              return (
                <div>
                  <div className="col-md-6 col-lg-4">
                    <div className="features-box border p-4 rounded">
                      <div className="features-box-icon mb-3">
                        <span className="ti-panel icon-size-md color-primary"></span>
                      </div>
                      <div className="features-box-content">
                        <p>{FetchHome[id].feature1}</p>
                        <p>{FetchHome[id].feature2}</p>
                        <p>{FetchHome[id].feature3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*feature section end*/}
    </div>
  );
};

export default Homepage;
