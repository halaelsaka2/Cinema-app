import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ProtectedApp from "./Containers/ProtectedApp";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Containers/Routes";
import { store, history } from "./Redux/store";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes history={history} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
