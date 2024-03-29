import React from "react";

const Footer = () => {
  const footerList = [
    "Cryptocash", "How it's work", "Token", "Faq", "Contact"
  ];
  return <footer>
    <div className="top_footer bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/footer_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer_logo mb-3 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
              <a href="#home_selection" className="page-scroll">
                <img src="assets/images/footer_logo.png" alt="footer_logo" />
              </a>
            </div>
            <div className="footer_desc">
              <p className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat perspiciatis impedit sunt cupiditate ipsa natus temporibus ipsum, perferendis illo commodi facere ex autem sint numquam in tempore, ea praesentium mollitia.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
            <h4 className="footer_title border_title animation"
              data-animation="fadeInUp"
              data-animation-delay=".2s">
              Quick Links
            </h4>

            <ul className="footer_link">
              {
                footerList.map((list, i) => (
                  <li className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i + 2}s`}>
                    <a href="#">{list}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
            <div className="newsletter_form">
              <h4 className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay=".2s">
                Newsletter
              </h4>
              <p className="animation"
                data-animation="fadeInUp"
                data-animation-delay=".4s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia placeat enim doloribus voluptas ad? Perspiciatis labore iure praesentium.
              </p>

              <form action="#" className="subscribe_form animation"
                data-animation="fadeInUp"
                data-animation-delay=".4s">
                <input type="text" required
                  placeholder="Your email address..."
                  className="input-rounded" />
                <button type="submit"
                  title="Subscribe"
                  className="btn-info"
                  name="submit"
                  value="Submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">
              Copyright &copy; 2023 All Rights Reserved by @theblockchaincoders
            </p>
          </div>

          <div className="col-md-6">
            <ul className="list_none footer_menu">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#"> Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

};

export default Footer;
