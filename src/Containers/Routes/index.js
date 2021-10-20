import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import App from "../App";
import Login from "../Login";
import ProtectedRoute from "./ProtectedRoute";
const Routes = ({ history }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/cinemaApp" component={App} isLoggedIn={isLoggedIn} />
      </div>
    </ConnectedRouter>
  );
};
export default Routes;
