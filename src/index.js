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
console.log(process.env.PUBLIC_URL);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes history={history} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
