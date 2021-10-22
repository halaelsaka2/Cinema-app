import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProtectedApp from "./Containers/ProtectedApp";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./Redux/store";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/Cinema-app">
      <ProtectedApp />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
