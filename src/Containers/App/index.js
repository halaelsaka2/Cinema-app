import { Component } from "react";
import LayoutComponent from "../Layout";
import Login from "../Login";
import { store, history } from "../../Redux/store";
import Routes from "../Routes";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return <LayoutComponent />;
  }
}
export default App;
