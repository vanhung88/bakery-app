import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store1 from "./redux/store";
ReactDOM.render(
  <Provider store={store1}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
