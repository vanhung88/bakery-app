import "./App.scss";
import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/detail_Product";
import Home from "pages/home";
import Cart from "pages/cart";
import About from "pages/aboutUs";
import ScrollToTop from "constants/scroll_to_top/index.js";
import Login from "pages/login";

function App(props) {
  const scroll_btn = useRef(null);
  // bay h toi sua code o day
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scroll_btn.current.style.transform = "translateY(0px)";
    } else {
      scroll_btn.current.style.transform = "translateY(150px)";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <div className="icon_up" onClick={() => scrollUP()} ref={scroll_btn}>
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/2267/2267904.svg"
              alt=""
            />
          </div>

          <Header />
          <Switch>
            <Route exact path="/product-cart">
              <Cart />
            </Route>

            <Route exact path="/AboutUs">
              <About />
            </Route>

            <Route exact path="/Login-Register">
              <Login />
            </Route>

            <Route exact path="/:id">
              <ProductDetail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
