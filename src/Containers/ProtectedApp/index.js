import { Component } from "react";

import { store, history } from "../../Redux/store";
import Routes from "../Routes";
import { Provider } from "react-redux";

class ProtectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    );
  }
}
export default ProtectedApp;
