import React, { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/config";
import logo from "assets/image/logo.png";
function Header(props) {
  const [avata, setAvata] = useState(
    "https://image.flaticon.com/icons/png/512/10/10938.png"
  );
  const elemRef = useRef(null);
  const login = useRef(null);
  let navSlide = () => {
    elemRef.current.style.transform = "translateX(0%)";
  };
  let navSlideOut = () => {
    elemRef.current.style.transform = "translateX(-100%)";
  };

  let handleLogin = () => {
    var provider = new auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.credential);
      })
      .then(() => {
        const user = auth.currentUser;
        var photoURL = user.photoURL;
        console.log(photoURL);
        setAvata(photoURL);
        console.log("thành công");
      })
      .catch((error) => {});
  };
  return (
    <div className="header">
      <div className="grid wide">
        <div className="row">
          <div className="tooger" onClick={() => navSlide()}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="svg-inline--fa fa-bars fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </div>
          <div className="nav-slide" ref={elemRef}>
            <span
              className="nav-slide--iconX"
              ref={elemRef}
              onClick={() => navSlideOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x={0}
                y={0}
                width={12}
                height={12}
                viewBox="1.1 1.1 12 12"
                enableBackground="new 1.1 1.1 12 12"
                xmlSpace="preserve"
              >
                <path d="M8.3 7.1l4.6-4.6c0.3-0.3 0.3-0.8 0-1.2 -0.3-0.3-0.8-0.3-1.2 0L7.1 5.9 2.5 1.3c-0.3-0.3-0.8-0.3-1.2 0 -0.3 0.3-0.3 0.8 0 1.2L5.9 7.1l-4.6 4.6c-0.3 0.3-0.3 0.8 0 1.2s0.8 0.3 1.2 0L7.1 8.3l4.6 4.6c0.3 0.3 0.8 0.3 1.2 0 0.3-0.3 0.3-0.8 0-1.2L8.3 7.1z" />
              </svg>
            </span>
            <div className="nav-slide__menu">Menu</div>
            <div className="nav-slide-group">
              <div className="nav-slide__search">
                <input
                  type="search"
                  style={{ border: 0 }}
                  className="nav-slide__search--input"
                />
                <div className="icon__search">
                  <svg
                    version="1.1"
                    className="thb-search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20.999px"
                    height="20.999px"
                    viewBox="0 0 20.999 20.999"
                    enableBackground="new 0 0 20.999 20.999"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M8.797,0C3.949,0,0,3.949,0,8.796c0,4.849,3.949,8.797,8.797,8.797c2.118,0,4.065-0.759,5.586-2.014l5.16,5.171
              c0.333,0.332,0.874,0.332,1.206,0c0.333-0.333,0.333-0.874,0-1.207l-5.169-5.16c1.253-1.521,2.013-3.467,2.013-5.587
              C17.593,3.949,13.645,0,8.797,0L8.797,0z M8.797,1.703c3.928,0,7.094,3.166,7.094,7.093c0,3.929-3.166,7.095-7.094,7.095
              s-7.094-3.166-7.094-7.095C1.703,4.869,4.869,1.703,8.797,1.703z"
                    />
                  </svg>
                </div>
              </div>
              <ul className="nav-slide__list">
                <li className="nav-slide-item">
                  <Link>SHOP</Link>
                </li>
                <li className="nav-slide-item">
                  <Link>PAGES</Link>
                </li>
                <li className="nav-slide-item">
                  <Link>BLOG</Link>
                </li>
                <li className="nav-slide-item">
                  <Link>FEATURES</Link>
                </li>
                <li className="nav-slide-item">
                  <Link>ELEMENTS</Link>
                </li>
              </ul>
              <ul className="nav-slide__list-Information">
                <li className="nav-slide-item-Information">About Us</li>
                <li className="nav-slide-item-Information">Careers</li>
                <li className="nav-slide-item-Information">Affiliates</li>
                <li className="nav-slide-item-Information">blog</li>
                <li className="nav-slide-item-Information">contact Us</li>
              </ul>
            </div>
          </div>
          {/* left */}
          <div className="nav_left">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="nav_list">
              <li className="nav_list-item">
                <Link className="nav_list-item--link">
                  SHOP<i className="fas fa-chevron-down nav_list--icon"></i>
                </Link>
                <div className="nav_hover">
                  <ul className="nav_hover--list">
                    <li className="nav_hover--item">BIRTHDAY CAKES</li>
                    <li className="nav_hover--item">MUFFINS</li>
                    <li className="nav_hover--item">TROUSERS</li>
                    <li className="nav_hover--item">COOKIES</li>
                    <li className="nav_hover--item">MUFFINS</li>
                    <li className=" sale">Product - On Sale</li>
                    <li className=" sale">Product - Simple</li>
                  </ul>
                </div>
              </li>

              <li className="nav_list-item">
                <Link className="nav_list-item--link">
                  PAGES <i className="fas fa-chevron-down nav_list--icon"></i>{" "}
                </Link>

                <div className="nav_hover">
                  <ul className="nav_hover--list">
                    <li className="nav_hover--item">
                      <Link className="nav_hover--itemLink" to="AboutUs">
                        ABOUT US
                      </Link>
                    </li>
                    {/* <li className="nav_hover--item">Privacy</li> */}
                    <li className="nav_hover--item">GIFTS</li>
                    <li className="nav_hover--item">VIDEO</li>
                    <li className="nav_hover--item">CONTACT US</li>
                  </ul>
                </div>
              </li>

              <li className="nav_list-item">
                <Link className="nav_list-item--link"> BLOG</Link>
              </li>

              <li className="nav_list-item">
                <Link className="nav_list-item--link">FEATURES</Link>
              </li>

              <li className="nav_list-item">
                <Link className="nav_list-item--link">ELEMENTS</Link>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="nav_right">
            <div className="nav_right-group hiddenOnMobile">
              <div className="signUp">
                <div className="account-login" ref={login}>
                  <img src={avata} alt="" />
                </div>

                <Link to="Login-Register">
                  <span>LOGIN</span>
                </Link>
              </div>
            </div>
            <div className="nav_right-group">
              <div className="price nav_right-icon">$0.00</div>
              <Link to="product-cart" style={{ textDecoration: "none" }}>
                <div className="nav_right-icon cart_icon">
                  <svg
                    version="1.1"
                    className="thb-cart-icon thb-cart-icon-style1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 19 20"
                    xmlSpace="preserve"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    stroke="#000"
                  >
                    <path d="M3.8,1L0.9,4.6v12.6c0,1,0.9,1.8,1.9,1.8h13.3c1,0,1.9-0.8,1.9-1.8V4.6L15.2,1H3.8z" />
                    <line x1="0.9" y1="4.6" x2={18} y2="4.6" />
                    <path d="M13.3,8.2c0,2-1.7,3.6-3.8,3.6s-3.8-1.6-3.8-3.6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
