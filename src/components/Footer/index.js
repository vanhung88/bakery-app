import React, { Component } from "react";
// import "./App.scss";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="grid  wide">
            <div className="row">
              <div className="col l-2 m-4 c-6">
                <div className="footer__heading">COMPANY</div>
                <ul className="footer-list">
                  <li className="footer-items">About Us AHAHA</li>
                  <li className="footer-items">Careers</li>
                  <li className="footer-items">Affiliates</li>
                  <li className="footer-items">Blog</li>
                  <li className="footer-items">Contact Us</li>
                </ul>
              </div>
              <div className="col l-2 m-4 c-6">
                <div className="footer__heading">SHOP</div>
                <ul className="footer-list">
                  <li className="footer-items">New Arrivals</li>

                  <li className="footer-items">Muffins</li>
                  <li className="footer-items">Men</li>
                  <li className="footer-items">Women</li>
                  <li className="footer-items">Shop All</li>
                </ul>
              </div>
              <div className="col l-2 m-4 c-6 ">
                <div className="footer__heading">SUPPORT</div>
                <ul className="footer-list">
                  <li className="footer-items">Contact Us</li>

                  <li className="footer-items">Returns</li>
                  <li className="footer-items">F.A.Q.</li>
                  <li className="footer-items">Privacy</li>
                </ul>
              </div>
              <div className="col l-6 m-12 c-6">
                <div className="footer__wrapper">
                  <div className="hiddenOnMOBILE_TABLE footer__heading footer__heading--dowload">
                    DOWNLOAD
                  </div>
                  <div className="footer__download">
                    <img
                      src="./img/qr-code.png"
                      alt=""
                      className="footer__download-qr"
                    />
                    <div className="footer__download-apps">
                      <div className="hiddenOnPC footer__heading footer-download">
                        DOWNLOAD
                      </div>
                      <a href className="footer--download-link">
                        <img
                          src="./img/google-play.png"
                          alt=""
                          className="footer__download-app-img"
                        />
                      </a>
                      <a href className="footer--download-link">
                        <img
                          src="./img/app-store.png"
                          alt=""
                          className="footer__download-app-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__contact">
            <div className="contact-1">
              <div className="contact-icon footer-facebook">
                <img src="./img/facebook.png" alt="" />
              </div>
              <div className="contact-icon footer-twitter">
                <img src="./img/instagram.png" alt="" />
              </div>
              <div className="contact-icon footer-instagram">
                <img src="./img/twitter.png" alt="" />
              </div>
            </div>
            <div className="contact-2">
              <div className="footer__phone">NEED HELP? : 1-800-672-4399</div>
              <div className="footer__email">MAIL : bakreryDN@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     nameH: state.name
//   }
// }
//this.props.nameH
export default Footer;
