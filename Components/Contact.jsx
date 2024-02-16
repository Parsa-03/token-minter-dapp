import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return <section id="contact" className="contract_section small_pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 offset-lg-2">
          <div className="title-default_light title_border text-center">
            <h4
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              Get In Touch
            </h4>
          </div>
        </div>

        <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="bg_light_dark contact_box_s2 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="contact_title">
                <h5 className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Contact With Us
                </h5>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis asperiores autem similique hic dolor molestias officia error inventore porro eius, optio quasi?
                </p>
              </div>

              <ul className="list_none contact_info mt_margin">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <i className="icon-ios-email"></i>
                  <div className="contact-detail">
                    <span>Address</span>
                    <p>22 International Division</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <i className="icon-ios-email"></i>
                  <div className="contact-detail">
                    <span>Phone</span>
                    <p>+1 (387) 966-0999</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <i className="ion-ios-email"></i>
                  <div className="contact-detail">
                    <span>Email</span>
                    <p>parsar2025@gmail.com</p>
                  </div>
                </li>
              </ul>

              <div className="contct_follow pt-2 pt-md-4">
                <span
                  className="text-uppercase animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Follow Us
                </span>
                <ul className="list_none social_icon">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaFacebookF className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaInstagram className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaTwitter className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaLinkedinIn className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaYoutube className="icon_color" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="pt-4 pt-md-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <form action="#"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input type="text"
                    required
                    id="name"
                    placeholder="Enter Name"
                    className="form-control"
                    name="name" />
                </div>
              </form>
              <form action="#"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input type="email"
                    required
                    id="email"
                    placeholder="Enter Email"
                    className="form-control"
                    name="Email" />
                </div>
              </form>
              <form action="#"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input type="text"
                    required
                    id="subject"
                    placeholder="Enter Subject"
                    className="form-control"
                    name="Subject" />
                </div>
              </form>
              <form action="#"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <textarea type="text"
                    required
                    id="describtion"
                    placeholder="Message"
                    className="form-control"
                    name="describtion"
                    role="2" />
                </div>
              </form>
              <form action="#"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="col-md-12 text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <button type="submit"
                    title="Submit Your Message"
                    className="btn btn-default btn-radius btn-block"
                    id="submit"
                    name="submit"
                    value={"Submit"}
                  >
                    Submit <BsArrowRight />
                  </button>
                </div>

                <div className="col-md-12">
                  <div id="alert-msg"
                    className="alert-msg text-center"
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Contact;
