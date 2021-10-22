import { Component } from "react";

import { store, history } from "../../Redux/store";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

class ProtectedApp extends Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <Routes history={history} />
        </Provider>
      </HashRouter>
    );
  }
}
export default ProtectedApp;
