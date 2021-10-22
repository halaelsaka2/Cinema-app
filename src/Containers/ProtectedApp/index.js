import { Component } from "react";

import { history } from "../../Redux/store";
import Routes from "../Routes";

class ProtectedApp extends Component {
  render() {
    return <Routes history={history} />;
  }
}
export default ProtectedApp;
