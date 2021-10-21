import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProtectedApp from "./Containers/ProtectedApp";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ProtectedApp />
  </React.StrictMode>,
  document.getElementById("root")
);
